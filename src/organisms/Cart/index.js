import React from 'react';
// import _ from 'lodash';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Alert from '@material-ui/lab/Alert';
import { getUserById } from '../../services/UserService';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import {
  removeOne,
  addOne,
  removeProduct,
} from '../../store/actions/cartAction';
import { productDetails } from '../../store/actions/productDetailAction';
import { Link, withRouter } from 'react-router-dom';
import IMAGE_URL from '../../constants/IMAGE_URL';
import kebab from '../../services/kebab';
import { deleteOneApi, addOneApi } from '../../services/cartServices';
import { getUserId } from '../../constants/BASE_URL';
import './cart.css';
import SnackBar from '../../atoms/SnackBar';

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: '', open: false };
    this.proceedToGift = this.proceedToGift.bind(this);
  }

  componentDidMount() {
    const details = JSON.parse(localStorage.getItem('storeResponseDetails'));
    if (details) {
      this.props.getUserById(details.id);
    }

    // getUserById(details.id);
  }

  proceedToGift() {
    const details = JSON.parse(localStorage.getItem('storeResponseDetails'));
    const totalPrice = this.props.cart.reduce(
      (total, item) => total + item.product.price * item.count,
      0
    );
    const {
      singleUserDetail: {
        data: { yoyobalance },
      },
    } = this.props;
    if (details) {
      if (totalPrice <= yoyobalance) {
        const balanceLeft = yoyobalance - totalPrice;
        this.props.history.push('/send/gift/' + balanceLeft);
      } else {
        this.setState({ open: true });
        setTimeout(() => {
          this.setState({
            open: false,
          });
        }, 1000);
      }
    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className="grid" data-testid="cart-container">
        {this.state.open && (
          <SnackBar
            path="/"
            name="you don't have sufficient yoyo points"
            severity="warning"
          />
        )}
        {this.state.error ? (
          <Alert severity="warning">{this.state.error}</Alert>
        ) : (
          ''
        )}
        {this.props.cart && this.props.cart.length ? (
          <Card className="main">
            <Typography
              variant="h4"
              component="h2"
              style={{ textAlign: 'left', padding: '1em 1em 0em 1em' }}
            >
              Your Cart
            </Typography>
            <Grid
              container
              spacing={3}
              style={{ width: '100%', margin: '0px' }}
            >
              <Grid item xs={12} sm={12} md={8}>
                {this.props.cart.map((item, index) => (
                  <Card
                    key={item.product._id}
                    className="root"
                    variant="outlined"
                  >
                    <div className="coverDiv">
                      <img
                        data-testid="product-img"
                        src={IMAGE_URL}
                        className="cover"
                        alt="Product Title"
                      />
                    </div>
                    <div className="cardBody">
                      <div className="details">
                        <CardContent>
                          <Typography
                            data-testid="product-heading"
                            component="h5"
                            variant="h5"
                            onClick={() => {
                              this.props.productDetails(item.product._id);
                            }}
                          >
                            <Link
                              to={`/${kebab(
                                item.product.category &&
                                  item.product.category.title
                                  ? item.product.category.title
                                  : 'No Category'
                              )}/${kebab(item.product.product_name)}`}
                            >
                              {item.product.product_name}
                            </Link>
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <Chip
                              data-testId="category-name"
                              variant="outlined"
                              color="secondary"
                              size="small"
                              label={
                                item.product.category &&
                                item.product.category.title
                                  ? item.product.category.title
                                  : 'No Category'
                              }
                            />
                          </Typography>
                        </CardContent>
                        <div className="controls" data-testid="counter">
                          <IconButton
                            data-testid="decrease"
                            disabled={item.count <= 1}
                            onClick={() => {
                              if (getUserId()) {
                                deleteOneApi(item._id)
                                  .then(() => {
                                    this.setState({ error: '' });
                                  })
                                  .catch(() => {
                                    this.setState({
                                      error: 'Could Not Decrease Quantity',
                                    });
                                    setTimeout(() => {
                                      this.setState({
                                        error: '',
                                      });
                                    }, 5000);

                                    this.props.addOne(index);
                                  });
                              }
                              this.props.removeOne(index);
                            }}
                          >
                            <RemoveIcon />
                          </IconButton>
                          {item.count}
                          <IconButton
                            data-testid="increase"
                            onClick={() => {
                              if (getUserId()) {
                                addOneApi(item._id)
                                  .then(() => {
                                    this.setState({ error: '' });
                                  })
                                  .catch(() => {
                                    this.setState({
                                      error: 'Could Not Increase Quantity',
                                    });
                                    setTimeout(() => {
                                      this.setState({
                                        error: '',
                                      });
                                    }, 5000);
                                    this.props.removeOne(index);
                                  });
                              }
                              this.props.addOne(index);
                            }}
                          >
                            <AddIcon />
                          </IconButton>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <div>
                          {item.product.discount ? (
                            <>
                              <Typography variant="h6">
                                Price:{' '}
                                <span
                                  style={{
                                    color: '#B12704',
                                    textDecoration: 'line-through',
                                  }}
                                >
                                  {item.product.price} points
                                </span>
                              </Typography>
                              <Typography variant="h6">
                                Discount:{' '}
                                <span style={{ color: '#B12704' }}>
                                  {item.product.discount}%
                                </span>
                              </Typography>

                              <Typography variant="h6">
                                New Price:{' '}
                                <strong style={{ color: 'green' }}>
                                  {(item.product.price *
                                    (100 - item.product.discount)) /
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
                                {item.product.price} points
                              </strong>
                            </Typography>
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <IconButton
                        data-testid="remove-button"
                        className="remove-button"
                        onClick={() => {
                          this.props.removeProduct(item.product._id);
                        }}
                      >
                        <CancelOutlinedIcon />
                      </IconButton>
                    </div>
                  </Card>
                ))}
                <Card variant="outlined">
                  <Typography
                    data-testid="subtotal2"
                    variant="h5"
                    component="h2"
                    style={{ textAlign: 'right', paddingRight: '1em' }}
                  >
                    {' '}
                    Subtotal (
                    {this.props.cart.reduce(
                      (total, item) => total + item.count,
                      0
                    )}{' '}
                    items) :{' '}
                    <span style={{ color: 'green' }}>
                      {this.props.cart.reduce(
                        (total, item) =>
                          total +
                          Math.ceil(
                            (item.product.price *
                              item.count *
                              (100 - item.product.discount)) /
                              100
                          ),
                        0
                      )}{' '}
                      points
                    </span>
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Card variant="outlined" className="cardRoot">
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h2"
                      className="title"
                      data-testid="subtotal1"
                    >
                      Subtotal (
                      {this.props.cart.reduce(
                        (total, item) => total + item.count,
                        0
                      )}{' '}
                      items) :{' '}
                      <span
                        style={{
                          color: 'green',
                        }}
                      >
                        {this.props.cart.reduce(
                          (total, item) =>
                            total +
                            Math.ceil(
                              (item.product.price *
                                item.count *
                                (100 - item.product.discount)) /
                                100
                            ),
                          0
                        )}{' '}
                        points
                      </span>
                    </Typography>
                    <Typography>This order contains a gift</Typography>
                  </CardContent>

                  <CardActions style={{ justifyContent: 'center' }}>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={this.proceedToGift}
                    >
                      Proceed To Gift
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Card>
        ) : (
          <Typography variant="h5" component="h6">
            Please Add Something To Cart
          </Typography>
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.array,
  userDetails: PropTypes.object,
  addOne: PropTypes.func,
  removeOne: PropTypes.func,
  productDetails: PropTypes.func,
  removeProduct: PropTypes.func,
  getUserById: PropTypes.func,
  singleUserDetail: PropTypes.string,
  history: PropTypes.object,
};
/* function mapStateToProps(state) {

  return {
    categories: state.categories,
  };
} */

export default withRouter(
  connect(
    ({ cart, userDetails, singleUserDetail }) => ({
      cart,
      userDetails,
      singleUserDetail,
    }),
    {
      removeOne,
      productDetails,
      addOne,
      removeProduct,
      getUserById,
    }
  )(Cart)
);
