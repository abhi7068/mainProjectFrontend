import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
// import LoginImage from '../../atoms/LoginImage';
import logoMob from '../../images/yoyo-logo-mob.png';
import TitleComponent from '../../atoms/TitleComponent';
import Subtitle from '../../atoms/Subtitle';

// component styling
const useStyles = makeStyles((theme) => ({
  leftTitle: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  positionImage: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '0',
  },
}));

// Left side of Signup component
function SignupTitle() {
  const classes = useStyles();
  return (
    <div className={classes.leftTitle}>
      <TitleComponent>Signup</TitleComponent>
      <Subtitle>
        <span>We do not share your personal details with anyone.</span>
      </Subtitle>
      <div className={classes.positionImage}>
        {/* <LoginImage /> */}
        <img src={logoMob} width={200} alt="login" />
      </div>
    </div>
  );
}

export default SignupTitle;
