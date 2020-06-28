import React, { Component } from 'react';

import { Card } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const styles = {
  root: {
    height: '300px',
    margin: '7% auto',
    maxWidth: 300,
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
          <h2 style={{ color: 'red' }}>Contact us</h2>
          <br />
          <br />
          <EmailIcon color="primary" />{' '}
          <h4
            data-testid="contactus"
            style={{ display: 'inline', color: 'green', marginLeft: '5px' }}
          >
            {' '}
            giftyoyo008@gmail.com
          </h4>
          <br />
          <br />
          <br />
          <div style={{ marginRight: '60px' }}>
            <PhoneIcon color="primary" />{' '}
            <h4
              data-testid="contactus2"
              style={{ display: 'inline', color: 'green' }}
            >
              {' '}
              +91-9705065342
            </h4>
          </div>
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
