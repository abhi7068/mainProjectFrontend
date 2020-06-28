import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontSize: '18px',
    marginTop: '16px',
    lineHeight: '150%',
  },
}));

function Subtitle({ children }) {
  const classes = useStyles();
  return <p className={classes.subtitle}>{children}</p>;
}
Subtitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
export default Subtitle;
