import React, { useState, useCallback, useRef } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import NumPad from './NumPad';
import Results from './Results';
import { useGameState, Game, GameState, Record } from '../hooks/useGameState';

const styles = createStyles({
  button: {
    margin: '1rem',
    fontSize: '2rem',
    width: '20rem',
  },
});

function recordOf(gameState: GameState) {
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
  console.log('gameResult=', gameResult);
  return gameResult;
  // localStorage.setItem('log', JSON.stringify([...log, gameResult]));
}

type Props = {
  classes: any;
  gameStateOperators: ReturnType<typeof useGameState>;
  log: any;
};

function MainPanel({ classes, gameStateOperators, log }: Props) {
  const [gameLog, setGameLog] = useState<[][]>(log);
  const {
    gameState,
    setPhase,
    addCurrentRound,
    setPlayerName,
    setStartTimeInString,
    setFinishTimeInString,
    setLastRoundStarted,
    clear,
    addResult,
  } = gameStateOperators;

  // gameStateをイベントハンドラとの間でシェアする。
  const gameStateRef = useRef<GameState>(gameState);
  gameStateRef.current = gameState;

  // スタートボタンが押されたときに呼びだされるイベントハンドラ。
  const gameStart = useCallback(() => {
    setPhase('running');
    const now = new Date();
    setLastRoundStarted(now.getTime());
    setStartTimeInString(now.toLocaleString());
    clear();
    setPlayerName('unknown');
  }, []);

  // 問題1問に対する回答がなされたときに呼びだされるイベントハンドラ。
  const handleAnswered = useCallback((answer: number) => {
    const gameState = gameStateRef.current;

    if (gameState.lastRoundStarted) {
      const game = gameState.gameRounds[gameState.currentGameRound];
      if (gameState.lastRoundStarted) {
        addResult({
          elapsedTimeInMilliSec: Date.now() - gameState.lastRoundStarted,
          correct: game.answer === answer,
        });
      }
    }

    if (gameState.currentGameRound === gameState.gameRounds.length - 1) {
      // 一連の問題(Round)が終了
      setFinishTimeInString(new Date().toString());
      const record = recordOf(gameState);
      setGameLog((prevValue: any) => {
        const nextValue = [...prevValue, record];
        console.log(nextValue);
        localStorage.setItem('log', JSON.stringify(nextValue));
        return nextValue;
      });
      setPhase('finished');
    } else {
      addCurrentRound();
    }
  }, []);

  // 結果表示画面でOKボタンが押されたときに呼びだされるイベントハンドラ。
  const gameReviewed = (gameState: GameState) => () => {
    setPhase('initial');
  };

  return (
    <Grid container>
      <Grid item xs={1} />
      {(() => {
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
            <Grid
              container
              style={{
                flexDirection: 'column',
              }}>
              <Grid item sm={1} />
              <Grid
                item
                sm={10}
                style={{
                  textAlign: 'center',
                }}>
                <Button
                  variant="contained"
                  className={classes.button}
                  color={'secondary'}
                  onClick={gameStart}
                  data-testid="start">
                  START
                </Button>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          );
        } else if (gameState.gamePhase === 'running') {
          console.log('gameState==', gameState);
          return (
            <Grid item xs={10}>
              <NumPad
                gameState={gameState}
                setPhase={setPhase}
                onAnswered={handleAnswered}
              />
            </Grid>
          );
        } else if (gameState.gamePhase === 'finished') {
          return (
            <Grid container>
              <Grid item xs={12}>
                <Results
                  componentProps={{
                    width: '100%',
                  }}
                  gameLog={gameLog}
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  textAlign: 'center',
                }}>
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
          return <div>Error: {gameState.gamePhase}</div>;
        }
      })()}
    </Grid>
  );
}

export default withStyles(styles)(MainPanel);
