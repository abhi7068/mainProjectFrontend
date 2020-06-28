/*  */ import React from 'react';
import Title from '../../atoms/Name/index';
import DisplayReviewsDetails from '../../atoms/DisplayReviewsDetails/index';
import Description from '../../atoms/Description/index';
/* import Price from '../../atoms/Price/index'; */
import PropTypes from 'prop-types';
import './style.css';
import kebab from '../../services/kebab';
/* import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'; */
// import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {
  makeStyles,
  /* createMuiTheme, */ /* responsiveFontSizes, */ ThemeProvider,
} from '@material-ui/core/styles';
/* import Card from '@material-ui/core/Card'; */
/* import CardMedia from '@material-ui/core/CardMedia'; */
/*
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'; */
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import ShareIcon from '@material-ui/icons/Share';
// import Rating from '@material-ui/lab/Rating';
/* import applier from './details.module.css'; */
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { Link, withRouter } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

import ButtonBase from '@material-ui/core/ButtonBase';
/* import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'; */
/* import Rating from '@material-ui/lab/Rating'; */
import { addToCart, removeProduct } from '../../store/actions/cartAction';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { givingRating, postingComment } from '../../services/ratingServices';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(3),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    maxWidth: 600,
    maxHeight: 800,
  },
  img: {
    margin: 'auto',
    display: 'inline-block',
    maxWidth: '100%',
    maxHeight: '100%',
    flexGrow: 1,
  },
  content: {
    paddingTop: '5%',
    paddingBottom: '10%',
  },
}));

const Star = ({ selected = false, onClick = (f) => f }) => (
  <div className={selected ? 'star selected' : 'star'} onClick={onClick} />
);

function ProductDetails(props) {
  const classes = useStyles();
  React.useEffect(() => {
    if (selectStar !== 0) {
      // console.log("")
    }
  });

  const totalStars = 5;
  const [selectStar, setSelectStar] = React.useState(0);
  const getResponseDetails = localStorage.getItem('storeResponseDetails');
  const [values, setValues] = React.useState('');

  const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);
  const accessToken = getResponseDetailsAfterParse
    ? getResponseDetailsAfterParse.accessToken
    : false;
  const userId = getResponseDetailsAfterParse
    ? getResponseDetailsAfterParse.id
    : false;
  /*   const [value] = React.useState(3); */
  const { cart } = props;
  const setRating = (i) => {
    setSelectStar(i);
    givingRating(i, props.details._id, userId).then(() =>
      props.history.push(
        kebab(
          `/${
            props.details.category && props.details._id
              ? props.details._id
              : 'No Category'
          }/${props.details._id}`
        )
      )
    );
  };
  const handleChange = (event) => {
    setValues(event.target.value);
  };
  const handleSubmit = () => {
    postingComment(values, props.details._id, userId).then(() =>
      props.history.push(
        kebab(
          `/${
            props.details.category && props.details._id
              ? props.details._id
              : 'No Category'
          }/${props.details._id}`
        )
      )
    );
  };
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="product"
                  src="https://i.picsum.photos/id/180/2400/1600.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid item xs direction="column" spacing={3}>
                <Grid item xs>
                  <ThemeProvider>
                    <Typography
                      variant="h3"
                      color="primary"
                      component="h3"
                      px="50rem"
                    >
                      <Title name={props.details.product_name} />
                    </Typography>
                  </ThemeProvider>
                </Grid>
                <Grid item xs>
                  <Typography variant="body1" color="secondary" component="p">
                    {/*  <Price value={props.details.price} /> */}
                    {props.details.discount ? (
                      <>
                        <Typography variant="h6">
                          Price:{' '}
                          <span
                            style={{
                              color: '#B12704',
                              textDecoration: 'line-through',
                            }}
                          >
                            {props.details.price} points
                          </span>
                        </Typography>
                        <Typography variant="h6">
                          Discount:{' '}
                          <span style={{ color: '#B12704' }}>
                            {props.details.discount}%
                          </span>
                        </Typography>

                        <Typography variant="h6">
                          New Price:{' '}
                          <strong style={{ color: 'green' }}>
                            {(props.details.price *
                              (100 - props.details.discount)) /
                              100}{' '}
                            points
                          </strong>
                        </Typography>
                      </>
                    ) : (
                      <Typography variant="h6">
                        Price:{' '}
                        <strong
                          style={{
                            color: 'green',
                          }}
                        >
                          {props.details.price} points
                        </strong>
                      </Typography>
                    )}
                  </Typography>
                </Grid>

                <Grid>
                  <Typography variant="subtitle1" color="textSecondary">
                    <Chip
                      variant="outlined"
                      color="secondary"
                      size="small"
                      label={
                        props.details.category && props.details.category.title
                          ? props.details.category.title
                          : 'No Category'
                      }
                    />
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="body1" componet="h6" px="30rem">
                    Description
                  </Typography>
                  <Typography variant="body1" componet="p" px="30rem">
                    <Description description={props.details.description} />
                  </Typography>
                </Grid>
                <Grid item xs>
                  {accessToken ? (
                    <div>
                      <div className="star-rating">
                        {[...Array(totalStars)].map((n, i) => (
                          <Star
                            key={i}
                            selected={i < selectStar}
                            onClick={() => {
                              setRating(i + 1);
                              // console.log("")
                            }}
                          />
                        ))}
                        {givingRating}
                        <p>
                          {selectStar} of {totalStars} stars
                        </p>
                      </div>
                    </div>
                  ) : (
                    <a href="/login">
                      <div className="star-rating">
                        {[...Array(totalStars)].map((n, i) => (
                          <Star key={i} selected={i < selectStar} />
                        ))}
                        {console.log(selectStar)}
                        <p>
                          {selectStar} of {totalStars} stars
                        </p>
                      </div>
                    </a>
                  )}
                </Grid>

                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    {!cart.find((o) => o.product._id === props.details._id) ? (
                      <IconButton
                        onClick={() => {
                          props.addToCart(props.details);
                        }}
                      >
                        <Button
                          variant="contained"
                          size="medium"
                          style={{ backgroundColor: 'lightblue' }}
                        >
                          ADD TO CART <AddShoppingCartIcon />
                        </Button>
                      </IconButton>
                    ) : (
                      <IconButton>
                        <Button
                          variant="contained"
                          size="medium"
                          color="secondary"
                          onClick={() => {
                            props.removeProduct(props.details._id);
                          }}
                        >
                          REMOVE <RemoveShoppingCartIcon />
                        </Button>
                        <Link to="/cart">
                          <Button
                            variant="contained"
                            size="medium"
                            color="primary"
                          >
                            GO TO CART
                          </Button>
                        </Link>
                      </IconButton>
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid></Grid>
          </Grid>
          <Grid>
            {accessToken ? (
              <div className={classes.content}>
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant="outlined"
                >
                  {/* <InputLabel htmlFor="outlined-adornment-amount">
                comment
              </InputLabel> */}
                  <OutlinedInput
                    id="outlined-multiline-static"
                    value={values}
                    // style={{ width: '900px', height: '100px' }}
                    onChange={handleChange}
                    placeholder="Comment Here"
                    multiline
                    rowsMax={4}
                    fullWidth
                  />
                </FormControl>
                <br />
                <br />
                <Button
                  variant="contained"
                  style={{ backgroundColor: 'lightblue' }}
                  onClick={handleSubmit}
                  className={classes.button}
                >
                  Post
                </Button>
              </div>
            ) : (
              ''
            )}
            <Grid className={classes.content}>
              {props.details.reviews
                ? props.details.reviews.map((elements, index) => {
                  return (
                    <div key={index}>
                      <DisplayReviewsDetails data={elements} />
                    </div>
                  );
                })
                : ''}
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
}
ProductDetails.propTypes = {
  onClick: PropTypes.func,
  history: PropTypes.object,
  selected: PropTypes.bool,
  details: PropTypes.object,
  cart: PropTypes.array,
  removeProduct: PropTypes.func,
  addToCart: PropTypes.func,
};
Star.propTypes = { onClick: PropTypes.func, selected: PropTypes.bool };
const mapStateToProps = ({ cart }) => ({ cart });
export default withRouter(
  connect(mapStateToProps, {
    addToCart,
    removeProduct,
  })(ProductDetails)
);
