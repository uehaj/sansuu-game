import React, { useCallback } from 'react';
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

import NumPad from './NumPad';
import { useGameState } from '../gameState';

const styles = {
  button: {
    margin: '1rem',
    fontSize: '2rem',
  },
};

type Props = {
  classes: any;
};

const gameRun = () => useCallback(k => console.log(k), []);

function GameMainPanel({ classes }: Props) {
  const [gameState, gameUpdator] = useGameState();
  const gameStart = useCallback(() => {
    gameUpdator.setGamePhase('running');
  }, []);

  return (
    <Grid container>
      <Grid item xs={1} />
      {(state => {
        console.log(state);
        if (state === 'initial') {
          gameUpdator.setGamePhase('splash');
          return <div />;
        } else if (state === 'splash') {
          setTimeout(() => {
            gameUpdator.setGamePhase('ready');
          }, 1000);
          return (
            <Typography align={'center'} variant={'h1'}>
              算数ゲーム
            </Typography>
          );
        } else if (state === 'ready') {
          return (
            <Grid item xs={10}>
              <Button
                variant="contained"
                className={classes.button}
                color={'secondary'}
                onClick={gameStart}>
                START
              </Button>
            </Grid>
          );
        } else if (state === 'running') {
          return (
            <Grid item xs={10}>
              <NumPad onChange={gameRun} />
            </Grid>
          );
        } else {
          return <div>Error</div>;
        }
      })(gameState.gamePhase)}
    </Grid>
  );
}

export default withStyles(styles)(GameMainPanel);
