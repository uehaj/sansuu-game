import React, { useState, useCallback } from 'react';

import { withStyles, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import MainPanel from './MainPanel';

const styles = createStyles({});

type Props = {
  classes: any;
  log: any;
};

function App({ classes, log }: Props) {
  return (
    <>
      <CssBaseline />
      <MainPanel log={log} />
    </>
  );
}

export default withStyles(styles)(App);
