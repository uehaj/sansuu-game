import React, { useState, useCallback } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MainPanel from './MainPanel';
import Header from './Header';
import { useGameState, Game, GameState, Record } from '../hooks/useGameState';

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
  const gameStateOperators = useGameState();
  return (
    <>
      <CssBaseline />
      <Header gameStateOperators={gameStateOperators} />
      <MainPanel gameStateOperators={gameStateOperators} log={log} />
    </>
  );
}

export default withStyles(styles)(App);
