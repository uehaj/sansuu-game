import React, { useState } from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
  useGameStateResult: ReturnType<typeof useGameState>;
};

function Header({ classes, useGameStateResult }: Props) {
  const [anchorEl, setAnchorEl] = useState(null);
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

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    setAnchorEl(null);
    setPhase('finished');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant={'h4'} color="inherit">
            さんすうゲーム
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={handleClose}>中止</MenuItem>
        </Menu>
      </div>
    </>
  );
}

export default withStyles(styles)(Header);
