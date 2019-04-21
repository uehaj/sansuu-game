import React, { useState, useCallback, useRef } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import NumPad from './NumPad';
import Results from './Results';
import Layout from './Layout';

import {
  useGameState,
  Question,
  GameState,
  Record,
} from '../hooks/useGameState';

const styles = createStyles({
  button: {
    margin: '1rem',
    fontSize: '2rem',
    width: '20rem',
  },
});

function recordOf(gameState: GameState) {
  console.log(gameState);
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
      gameState.questions.length,
  ];
  console.log('gameResult=', gameResult);
  return gameResult;
}

type Props = {
  classes: any;
  log: any;
};

function MainPanel({ classes, log }: Props) {
  const gameStateOperators = useGameState();

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

  const [gameLog, setGameLog] = useState<[][]>(log);

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

  // ひとつの質問の回答がなされたときに呼びだされるイベントハンドラ。
  const handleAnswered = useCallback((answer: number) => {
    let gameState = gameStateRef.current;

    // この質問の開始時刻と現在時刻の差を記録
    if (gameState.lastRoundStarted) {
      const game = gameState.questions[gameState.currentQuestion];
      console.log('[1]', gameState);
      if (gameState.lastRoundStarted) {
        addResult({
          elapsedTimeInMilliSec: Date.now() - gameState.lastRoundStarted,
          correct: game.answer === answer,
        });
      }
      console.log('[2]', gameState);
    }

    if (gameState.currentQuestion === gameState.questions.length - 1) {
      // 一連の問題(Round)が終了
      setImmediate(() => {
        // addResultで更新されたgameStateを使うため次のイベントループで処理する
        setFinishTimeInString(new Date().toString());
        gameState = gameStateRef.current;
        setGameLog((prevValue: any) => {
          const record = recordOf(gameState);
          const nextValue = [...prevValue, record];
          console.log(nextValue);
          localStorage.setItem('log', JSON.stringify(nextValue));
          return nextValue;
        });
        setPhase('finished');
      });
    } else {
      addCurrentRound();
    }
  }, []);

  // 結果表示画面でOKボタンが押されたときに呼びだされるイベントハンドラ。
  const gameReviewed = (gameState: GameState) => () => {
    setPhase('initial');
  };

  return (
    <Layout gameStateOperators={gameStateOperators} setGameLog={setGameLog}>
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
    </Layout>
  );
}

export default withStyles(styles)(MainPanel);
