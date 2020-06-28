import React, { Component } from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    margin: '7% auto',
    maxWidth: 1000,
  },
};

class index extends Component {
  render() {
    return (
      <div>
        <Card
          classes={{
            root: this.props.classes.root,
          }}
        >
          <h2 data-testid="aboutus" style={{ color: 'red' }}>
            WELCOME TO YOYO GIFTS
          </h2>
          <CardContent>
            <h4 style={{ textAlign: 'left', color: 'orange' }}>
              Let me start by warning you. This is not your average store
            </h4>
            <br />
            <Typography
              variant="body2"
              color="red"
              component="p"
              style={{ textAlign: 'left' }}
            >
              There is nothing better than a wide-eyed smile on the face of your
              loved ones when you give them unexpected small gifts out of the
              ordinary. And that is exactly what led to the birth of{' '}
              <span style={{ color: 'green' }}>yoyo gifts</span> Leaving behind
              the tradition of conventional gifting, we decided to make it more
              than just another giveaway. We help you give your near and dear
              ones something that goes with their personality, looking at which
              they’d say ”Yes, that’s me!”. Hence, with our aim to get you the
              best presents from across the world, we at{' '}
              <span style={{ color: 'green' }}>yoyo gifts</span> have embarked
              on a journey to make gifting a hassle-free experience. Thus, youw
              will never find an ordinary thing here. From products to packaging
              and customer service, every little thing has its personal touch.
              That is what makes{' '}
              <span style={{ color: 'green' }}>yoyo gifts</span> extraordinary
              and different from your average stores!
            </Typography>
            <br />
            <h4 style={{ textAlign: 'left', color: 'orange' }}>OUR MOTTO</h4>
            <br />
            <Typography
              variant="body2"
              color="red"
              component="p"
              style={{ textAlign: 'left' }}
            >
              We believe that every day is an occasion to make your dear one
              smile. Be it creative birthday gifts for girlfriend, gifts for new
              moms, baby shower gifts, valentines day gifts for boyfriend,
              fathers day gifts, unique housewarming gifts for your newly moved
              in neighbour, or funny gifts for your best friend, at{' '}
              <span style={{ color: 'green' }}>yoyo gifts</span>, one can find
              the most unusual and unique gifts for any occasion. We want to
              spread the love of gifting and not just make it a must-do or a
              gruelling process. We bring a perfect amalgam of necessity wrapped
              in uniqueness to brighten your day. We believe even if there is no
              occasion, or celebration, acknowledging the very person you are, a
              little happy gift for yourself would just be ide
            </Typography>
            <br />
            <h4 style={{ textAlign: 'left', color: 'orange' }}>
              What makes YOYO GIFTS different from others?
            </h4>
            <br />
            <Typography
              variant="body2"
              color="red"
              component="p"
              style={{ textAlign: 'left' }}
            >
              We are on a mission to make uncommon and awesome gifts accessible
              to everyone sitting at home. With a few clicks over the internet,
              your experience will be right up at your door. But, we also
              realise how much every gift means to you. And that is why we make
              sure, that it is a memorable experience!
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}
index.propTypes = {
  classes: PropTypes.object,
  root: PropTypes.object,
  display: PropTypes.object,
};

export default withStyles(styles)(index);
