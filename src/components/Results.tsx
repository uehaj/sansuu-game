import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { GameState } from '../gameState';

const styles = createStyles((theme: any) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

type Props = { classes: any; gameState: GameState };

function Results(props: Props) {
  const { classes, gameState } = props;
  const { gameRounds, results } = gameState;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat (g)</TableCell>
            <TableCell align="right">Carbs (g)</TableCell>
            <TableCell align="right">Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array(results.length)
            .fill(0)
            .map((_, i: number) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {gameState.startTimeInString}
                </TableCell>
                <TableCell component="th" scope="row">
                  {gameState.finishTimeInString}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(Results);
