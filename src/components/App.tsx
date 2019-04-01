import React, { useState, useCallback } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import GameMainPanel from './GameMainPanel';
import Header from './Header';
import { useGameState, Game, GameState, Record } from '../gameState';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

type Props = {
  classes: any;
  log: any;
};

function App({ classes, log }: Props) {
  const useGameStateResult = useGameState();
  return (
    <>
      <CssBaseline />
      <Header useGameStateResult={useGameStateResult} />
      <GameMainPanel useGameStateResult={useGameStateResult} log={log} />
    </>
  );
}

export default withStyles(styles)(App);
