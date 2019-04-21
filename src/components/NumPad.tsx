import React, { useState, useCallback, useRef, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import AnsweredPanel from '../components/AnsweredPanel';
import { Question, GameState, GamePhase } from '../hooks/useGameState';

const styles = createStyles({
  buttonWrapper: {
    textAlign: 'center',
  },
  button: {
    margin: '0.5rem',
    fontSize: '1.2rem',
  },
});

function genMessage(game: Question, answer: number | null) {
  if (answer === null) {
    return '';
  } else if (game.answer === answer) {
    return `正解です`;
  } else {
    return `${answer}は不正解です。正解は${game.answer}`;
  }
}

type Props = {
  classes: any;
  setPhase: (newPhase: GamePhase) => void;
  onAnswered: (answer: number) => void;
  gameState: GameState;
};

const handleNumberPressed = (
  keyTop: number,
  setNumber: (z: number | ((y: number) => number)) => void
) =>
  useCallback(
    (event: any) => {
      setNumber((prevN: number) => prevN * 10 + keyTop);
    },
    [keyTop, setNumber]
  );

const handleCLR = (setNumber: (z: number | ((y: number) => number)) => void) =>
  useCallback((event: any) => {
    setNumber(0);
  }, []);

const handleOK = (
  setNumber: (z: number | ((y: number) => number)) => void,
  setAnswer: (z: number) => void
) =>
  useCallback((event: any) => {
    setNumber(prevN => {
      setAnswer(prevN);
      return prevN;
    });
  }, []);

function NumPad({ classes, gameState, onAnswered, setPhase }: Props) {
  const [number, setNumber] = useState<number>(0);
  const [answer, setAnswer] = useState<number | null>(null);

  // refを使ってボタンにフォーカスを取得させる
  const ref = useRef();
  useEffect(() => {
    if (ref && ref.current) {
      (ref.current as any).focus();
    }
  });

  // gameStateをイベントハンドラとの間でシェアする。
  const gameStateRef = useRef<GameState>(gameState);
  gameStateRef.current = gameState;

  const game = gameState.questions[gameState.currentQuestion];
  return (
    <>
      <AnsweredPanel
        message={genMessage(game, answer)}
        answerShowing={answer !== null}
        onOk={() => {
          setNumber(0);
          const gameState = gameStateRef.current;
          if (gameState.currentQuestion === gameState.questions.length - 1) {
            setPhase('finished');
          }
          if (answer !== null) {
            onAnswered(answer);
            setAnswer(null);
          }
        }}
      />
      <Grid container spacing={32}>
        <Grid item xs={12}>
          <Typography variant={'h4'} align={'center'}>
            <b>{`問題${gameState.currentQuestion + 1} `}</b>/{' '}
            {gameState.questions.length}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={32}
        style={{ marginBottom: '0.5rem', padding: '0.1fem' }}>
        <Grid item xs={12} sm={6}>
          <Typography variant={'h4'}>{`${game.question}`}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Typography variant={'h3'} align={'right'}>
              {number}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Paper style={{ margin: '0.1em', padding: '0.1em' }}>
        <Grid container justify="space-between">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(n => (
            <Grid item xs={4} key={n} style={{ textAlign: 'center' }}>
              <Button
                variant={'contained'}
                className={classes.button}
                onClick={handleNumberPressed(n, setNumber)}>
                {n}
              </Button>
            </Grid>
          ))}
          <Grid item xs={4} className={classes.buttonWrapper}>
            <Button
              variant={'contained'}
              className={classes.button}
              onClick={handleCLR(setNumber)}>
              CLR
            </Button>
          </Grid>
          <Grid item xs={4} className={classes.buttonWrapper}>
            <Button
              variant={'contained'}
              className={classes.button}
              onClick={handleOK(setNumber, setAnswer)}
              buttonRef={ref}>
              OK
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default withStyles(styles)(NumPad);
