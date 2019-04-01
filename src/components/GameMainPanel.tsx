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

import NumPad from './NumPad';
import Results from './Results';
import { useGameState, Game, GameState, Record } from '../gameState';

const styles = {
  button: {
    margin: '3rem',
    fontSize: '2rem',
    width: '70%',
  },
};

type Props = {
  classes: any;
  useGameStateResult: ReturnType<typeof useGameState>;
  log: any;
};

function GameMainPanel({ classes, useGameStateResult, log }: Props) {
  const [gameLog, setGameLog] = useState<[][]>([]);
  const {
    gameState,
    setPhase,
    setCurrentRound,
    setPlayerName,
    setStartTimeInString,
    setFinishTimeInString,
    setLastRoundStarted,
    clearResult,
    addResult,
  } = useGameStateResult;

  const gameStart = useCallback(() => {
    setPhase('running');
    const now = new Date();
    setLastRoundStarted(now.getTime());
    setStartTimeInString(now.toLocaleString());
    setCurrentRound(0);
    clearResult();
    setPlayerName('unknown');
  }, []);

  const handleAnswerd = (
    game: Game,
    answer: number,
    lastRoundStarted: number
  ) => {
    if (game.answer === answer) {
      setPhase('answered', `正解です`);
    } else {
      setPhase('answered', `${answer}は不正解です。正解は${game.answer}`);
    }
    addResult({
      elapsedTimeInMilliSec: Date.now() - lastRoundStarted,
      correct: game.answer === answer,
    });
  };

  const handleSnackBarOk = () => {
    setPhase('running');
    if (gameState.currentGameRound === gameState.gameRounds.length - 1) {
      setFinishTimeInString(new Date().toString());
      const gameResult = [
        gameState.startTimeInString,
        gameState.playerName,
        `${gameState.results.reduce(
          (acc, curr) => acc + (curr.correct ? 1 : 0),
          0
        )} / ${gameState.results.length}`,
        gameState.results.reduce(
          (acc, curr) => acc + curr.elapsedTimeInMilliSec,
          0
        ) /
          1000 /
          gameState.gameRounds.length,
      ];
      setGameLog((prevValue: any) => [...prevValue, gameResult]);
      localStorage.setItem('log', JSON.stringify(gameResult));

      setPhase('finished');
    } else {
      setCurrentRound(gameState.currentGameRound + 1);
    }
  };

  const gameReviewed = (gameState: GameState) => () => {
    setPhase('initial');
  };

  return (
    <Grid container>
      <Grid item xs={1} />
      {(gameState => {
        if (gameState.gamePhase === 'initial') {
          setPhase('splash');
          return <div />;
        } else if (gameState.gamePhase === 'splash') {
          setTimeout(() => {
            setPhase('ready');
          }, 1000);
          return (
            <Grid container>
              <Grid item xs={12}>
                <Typography align={'center'} variant={'h1'}>
                  算数ゲーム
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align={'center'} variant={'h4'}>
                  さんすうゲームがはじまります。
                </Typography>
              </Grid>
            </Grid>
          );
        } else if (gameState.gamePhase === 'ready') {
          return (
            <Grid container>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  className={classes.button}
                  color={'secondary'}
                  onClick={gameStart}
                  data-testid="start">
                  START
                </Button>
              </Grid>
            </Grid>
          );
        } else if (gameState.gamePhase === 'running') {
          return (
            <Grid item xs={10}>
              <NumPad gameState={gameState} onChange={handleAnswerd} />
            </Grid>
          );
        } else if (gameState.gamePhase === 'answered') {
          return (
            <Grid item xs={10}>
              <NumPad
                gameState={gameState}
                message={gameState.message}
                onSnackbarOk={handleSnackBarOk}
              />
            </Grid>
          );
        } else if (gameState.gamePhase === 'finished') {
          return (
            <Grid container>
              <Grid item>
                <Results componentProps={{ width: '100%' }} gameLog={gameLog} />
              </Grid>
              <Grid item xs={10}>
                <Button
                  variant="contained"
                  className={classes.button}
                  color={'secondary'}
                  onClick={gameReviewed(gameState)}
                  data-testid="finished-ok">
                  OK
                </Button>
              </Grid>
            </Grid>
          );
        } else {
          return <div>Error</div>;
        }
      })(gameState)}
    </Grid>
  );
}

export default withStyles(styles)(GameMainPanel);
