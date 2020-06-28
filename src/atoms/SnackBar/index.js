import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
CustomizedSnackbars.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  history: PropTypes.object,
  severity: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
    top: 0,
    height: 50,
  },
}));

function CustomizedSnackbars(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  async function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    await setOpen(false);
    props.history.push(props.path);
  }

  return (
    <div>
      <Snackbar
        data-testid="Cancel"
        className={classes.root}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          data-testid="alert"
          onClose={handleClose}
          severity={props.severity ? props.severity : 'success'}
        >
          {props.name}
        </Alert>
      </Snackbar>
    </div>
  );
}
// CustomizedSnackbars.propTypes = {
//   name: PropTypes.String,
//   path: PropTypes.String,
//   history: PropTypes.object,
// };

export default withRouter(CustomizedSnackbars);
