import React from 'react';
import classes from './button.module.css';

export default function Button() {
  return (
    <div>
      <button data-testid='button' className={classes.buttonRed}>This is a normal Button</button>
    </div>
  );
}
