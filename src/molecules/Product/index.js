/* eslint-disable indent */
import React from 'react';
import Price from '../../atoms/Price/index';
import PropTypes from 'prop-types';
import Category from '../../atoms/Category/index';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Name from '../../atoms/Name';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Rating from '@material-ui/lab/Rating';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { addToCart, removeProduct } from '../../store/actions/cartAction';
import { productDetails } from '../../store/actions/productDetailAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import kebab, { simpleHeading } from '../../services/kebab';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Discount from '../../atoms/Discount';
import Description from '../../atoms/Description';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    flexGrow: 1,
    transition: '0.3s',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    width: '100%',
  },
  avatar: {
    backgroundColor: red[500],
    padding: '3%',
  },
}));
function Product(props) {
  const classes = useStyles();
  const { product, cart } = props;
  let noOfReview = '';
  if (product.reviews.length === 1) {
    noOfReview = `${product.reviews.length} review`;
  } else {
    noOfReview = `${product.reviews.length} reviews`;
  }
  let sum = 0;
  let noOfUser = 0;
  let averageRating = 0;
  const average = () => {
    const element = product.reviews;

    for (let i = 0; i < element.length; i++) {
      if (element[i].rating !== 0) {
        sum = sum + element[i].rating;
        noOfUser++;
      }
    }
    averageRating = sum / noOfUser;
    console.log('');

    return averageRating;
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Card
          className={classes.root}
          onClick={() => {
            // props.productDetails(product._id);
          }}
        >
          <Link
            style={{ textDecoration: 'none' }}
            to={kebab(
              `/${
                product.category && product.category._id
                  ? product.category._id
                  : 'No Category'
              }/${product._id}`
            )}
          >
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {/*   <Price value={product.price} id={product._id} /> */}
                  <Discount value={product.discount} />
                </Avatar>
              }
              title={<Name name={simpleHeading(product.product_name)} />}
              subheader={<Category category={product.category} />}
            />

            <CardMedia
              className={classes.media}
              image="https://i.picsum.photos/id/2/5616/3744.jpg"
              title="product"
            />
          </Link>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <Price value={product.price} id={product._id} />
            </Typography>
            <Typography variant="body2" color="Primary" component="p">
              <Description description={product.description} />
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            style={{ justifyContent: 'space-between' }}
          >
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend"></Typography>
              <Rating
                name="simple-controlled"
                defaultValue={average}
                style={{ color: '#E40046' }}
                precision={0.1}
                readOnly
                // value={}
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
                /*  readOnly */
              />
            </Box>
            <p
              style={{
                marginBottom: '29px',
                marginRight: '35px',
                color: '#666666',
                fontSize: '15px',
                fontStyle: 'italic',
              }}
            >
              {noOfReview}
            </p>
            <IconButton>{/*    <Ratings/> */}</IconButton>
            {cart.length &&
            cart.find((o) => {
              // console.log("")
              return o.product && o.product._id === product._id;
            }) ? (
              <IconButton
                onClick={() => {
                  props.removeProduct(product._id);
                }}
              >
                <RemoveShoppingCartIcon color="secondary" />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  props.addToCart(product);
                }}
              >
                <AddShoppingCartIcon style={{ color: 'green' }} />
              </IconButton>
            )}
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
  userDetails: PropTypes.object,
  cart: PropTypes.array,
  removeProduct: PropTypes.func,
  addToCart: PropTypes.func,
  productDetails: PropTypes.func,
};

const mapStateToProps = ({ cart, userDetails }) => ({ cart, userDetails });
export default connect(mapStateToProps, {
  addToCart,
  removeProduct,
  productDetails,
})(Product);
