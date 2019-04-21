import React, { useState, useCallback } from 'react';

import Header from './Header';
import { useGameState } from '../hooks/useGameState';

type Props = {
  gameStateOperators: ReturnType<typeof useGameState>;
  setGameLog: (arg: [][]) => void;
  children: React.ReactNode;
};

export default ({ gameStateOperators, children, setGameLog }: Props) => (
  <>
    <Header gameStateOperators={gameStateOperators} setGameLog={setGameLog} />
    {children}
  </>
);
