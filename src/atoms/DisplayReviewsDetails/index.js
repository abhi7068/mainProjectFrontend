import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1800,
    textAlign: 'left',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function DisplayReviewsDetails(props) {
  const classes = useStyles();
  console.log('');
  function time() {
    var d = new Date(Date.parse(props.data.created_at)).toString();

    var index = d.lastIndexOf(':') - 5;
    return d.substring(0, index);
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        style={{ color: 'black' }}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {/* {props.data.user.profilePicture} */}
          </Avatar>
        }
        title={props.data.user.name}
        subheader={time()}
      />

      <CardContent>
        {props.data.rating !== 0 ? (
          <Rating
            name="simple-controlled"
            // style={{ textAlign: 'center' }}
            style={{ color: '#E40046' }}
            value={props.data.rating}
            readOnly
          />
        ) : (
          ''
        )}

        <Typography
          style={{ fontSize: '1.5em', textAlign: 'left' }}
          color="textSecondary"
          component="p"
        >
          {props.data.comment}
        </Typography>
      </CardContent>
    </Card>
  );
}
DisplayReviewsDetails.propTypes = {
  data: PropTypes.object,
};
