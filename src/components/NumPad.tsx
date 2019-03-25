import React, { useState, useCallback } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = {
  numButton: {
    margin: '1rem',
    fontSize: '2rem',
  },
  textArea: {
    margin: '1rem',
    fontSize: '2rem',
  },
  inputArea: {
    margin: '1rem',
    fontSize: '2rem',
    padding: '0.5rem',
  },
};

type Props = {
  classes: any;
  onChange?: (n: number) => void;
  text?: string;
};

const onKey = (
  keyTop: any,
  setNumber: (z: number | ((y: number) => number)) => void,
  onChange?: (n: number) => void
) => (k: any) => {
  if (typeof keyTop === 'number') {
    setNumber((prevN: number) => prevN * 10 + keyTop);
  } else if (typeof keyTop === 'string') {
    if (keyTop === 'CLR') {
      setNumber(0);
    } else if (onChange && keyTop === 'OK') {
      setNumber(prevN => {
        onChange(prevN);
        return 0;
      });
    }
  }
};

function NumPad({ classes, text, onChange }: Props) {
  const [number, setNumber] = useState<number>(0);
  return (
    <Paper style={{ margin: '1rem' }}>
      <Grid container>
        <Grid data-testid="text" item xs={12} className={classes.textArea}>
          {text}
        </Grid>
        <Grid item xs={12} className={classes.textArea}>
          <Paper>
            <Typography align={'center'} className={classes.inputArea}>
              {number}
            </Typography>
          </Paper>
        </Grid>

        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'CLR', 'OK'].map(n => (
          <Grid item xs={4} key={n} style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              className={classes.numButton}
              onClick={onKey(n, setNumber, onChange)}>
              {n}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(NumPad);
