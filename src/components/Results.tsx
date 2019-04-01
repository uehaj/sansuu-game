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

type Props = { classes: any; componentProps: any; gameLog: any };

function Results(props: Props) {
  const { classes, componentProps, gameLog } = props;

  return (
    <Paper className={classes.root} {...componentProps}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>日付</TableCell>
            <TableCell>名前</TableCell>
            <TableCell>正解</TableCell>
            <TableCell>平均時間</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gameLog.map((result: any, i: number) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {result[0]}
              </TableCell>
              <TableCell component="th" scope="row">
                {result[1]}
              </TableCell>
              <TableCell component="th" scope="row">
                {result[2]}
              </TableCell>
              <TableCell component="th" scope="row">
                {result[3]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(Results);
