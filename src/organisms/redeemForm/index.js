import { Button, Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { redeemGift } from '../../services/giftService';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import { getUserId } from '../../constants/BASE_URL';
import Alert from '@material-ui/lab/Alert';

const styles = {
  root: {
    width: '300px',
    height: '300px',
    margin: '10% auto',
  },
  label: {
    textTransform: 'capitalize',
  },
  display: {
    margin: '5% ',
  },
};

class SendForm extends Component {
  constructor(props) {
    super();
    this.state = {
      coupon: '',
      open: false,
      disabled: false,
      error: '',
      redeemModal: false,
    };
    this.redeemGifts = this.redeemGifts.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      coupon: value,
    });
  }

  redeemGifts(event) {
    event.preventDefault();
    redeemGift(getUserId(), this.state.coupon)
      .then((res) => {
        if (res.data.success) this.props.isRedeemed(res.data.success);
      })
      .catch((e) => {
        this.setState({ error: 'Invalid Coupon Code' });
      });
  }

  render() {
    //
    return (
      <div>
        {this.state.error ? (
          <Alert severity="warning">{this.state.error}</Alert>
        ) : (
          ''
        )}
        <Card
          classes={{
            root: this.props.classes.root,
          }}
        >
          <CardHeader title="Redeem You Gift" />
          <form onSubmit={this.redeemGifts}>
            <CardContent>
              <Label name="Coupon Code" />
              <br />
              <Input
                required="required"
                type="text"
                label="Redeem Your Gift"
                onModelChange={this.handleChange}
                placeholder="Redeem Code"
              />
            </CardContent>
            <CardContent>
              <Button
                data-testid="button"
                variant="contained"
                color="primary"
                type="submit"
                disabled={this.state.disabled}
              >
                Redeem
              </Button>
            </CardContent>
          </form>
        </Card>
      </div>
    );
  }
}
SendForm.propTypes = {
  classes: PropTypes.object,
  root: PropTypes.object,
  display: PropTypes.object,
  isRedeemed: PropTypes.func,
  history: PropTypes.object,
};

export default withRouter(withStyles(styles)(SendForm));
