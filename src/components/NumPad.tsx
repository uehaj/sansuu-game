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
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { Game, GameState } from '../gameState';
import classNames from 'classnames';

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
  onChange?: (game: Game, answer: number, lastRoundStarted: number) => void;
  onSnackbarOk?: () => void;
  gameState: GameState;
  message?: string;
};

const onKey = (
  keyTop: any,
  gameState: GameState,
  setNumber: (z: number | ((y: number) => number)) => void,
  onChange: Props['onChange']
) => (k: any) => {
  if (typeof keyTop === 'number') {
    setNumber((prevN: number) => prevN * 10 + keyTop);
  } else if (typeof keyTop === 'string') {
    if (keyTop === 'CLR') {
      setNumber(0);
    } else if (onChange && keyTop === 'OK') {
      setNumber(prevN => {
        const game = gameState.gameRounds[gameState.currentGameRound];
        if (gameState.lastRoundStarted) {
          onChange(game, prevN, gameState.lastRoundStarted);
        }
        return prevN;
      });
    }
  }
};

function NumPad({
  classes,
  gameState,
  onChange,
  onSnackbarOk,
  message,
}: Props) {
  const [number, setNumber] = useState<number>(0);

  const game = gameState.gameRounds[gameState.currentGameRound];
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={!!message}
        message={
          <>
            <Typography variant={'h4'} style={{ color: 'white' }}>
              {message}
            </Typography>
            <Typography>
              <Button
                onClick={() => {
                  setNumber(0);
                  if (onSnackbarOk) {
                    onSnackbarOk();
                  }
                }}
                variant={'contained'}>
                <Typography variant={'h4'}>OK</Typography>
              </Button>
            </Typography>
          </>
        }
      />
      <Grid container spacing={32}>
        <Grid item xs={12}>
          <Typography variant={'h3'} align={'center'}>
            <b>{`問題${gameState.currentGameRound + 1} `}</b>(
            {gameState.currentGameRound + 1} / {gameState.gameRounds.length})
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={32} style={{ padding: '1em' }}>
        <Grid item xs={6}>
          <Typography variant={'h4'}>{`${game.question}`}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Typography
              variant={'h3'}
              align={'right'}
              style={{ padding: '0.2em' }}>
              {number}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Paper style={{ margin: '1em', padding: '1em' }}>
        <Grid container justify="space-between">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'CLR', 'OK'].map(n => (
            <Grid item xs={4} key={n} style={{ textAlign: 'center' }}>
              <Button
                variant={'extendedFab'}
                className={classes.numButton}
                onClick={onKey(n, gameState, setNumber, onChange)}>
                {n}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
}

export default withStyles(styles)(NumPad);
