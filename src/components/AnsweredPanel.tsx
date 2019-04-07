import React, { useState, useCallback } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = createStyles({});

type Props = {
  classes: any;
  onOk: () => void;
  message?: string;
  answerShowing: boolean;
};

function AnsweredPanel({ message, onOk, answerShowing }: Props) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={answerShowing}
      message={
        <>
          <Typography variant={'h4'} style={{ color: 'white' }}>
            {message}
          </Typography>
          <Typography>
            <Button
              onClick={() => {
                if (onOk) {
                  onOk();
                }
              }}
              variant={'contained'}>
              <Typography variant={'h4'}>OK</Typography>
            </Button>
          </Typography>
        </>
      }
    />
  );
}

export default withStyles(styles)(AnsweredPanel);
