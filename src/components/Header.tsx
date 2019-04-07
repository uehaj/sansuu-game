import React, { useState } from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles } from '@material-ui/core/styles';

import { useGameState, Game, GameState, Record } from '../hooks/useGameState';

const styles = createStyles({
  appBar: {
    marginBottom: '0.5rem',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

type Props = {
  classes: any;
  gameStateOperators: ReturnType<typeof useGameState>;
};

function Header({ classes, gameStateOperators }: Props) {
  const [anchorEl, setAnchorEl] = useState(null);
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

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = (event: any) => {
    setAnchorEl(null);
    setPhase('finished');
  };

  const handleClose = (event: any) => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
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
          <MenuItem onClick={handleSelect}>中止</MenuItem>
        </Menu>
      </div>
    </>
  );
}

export default withStyles(styles)(Header);
