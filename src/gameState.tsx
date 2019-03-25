import React, { useState } from 'react';

type GamePhase = 'initial' | 'splash' | 'ready' | 'running';

export interface GameState {
  gamePhase: GamePhase;
  gameRound: number;
}

export type GameUpdator = {
  setGamePhase: (phase: GamePhase) => void;
  setGameRound: (round: number) => void;
};

export function useGameState(): [GameState, GameUpdator] {
  const [gameState, setGameState] = useState<GameState>({
    gamePhase: 'initial',
    gameRound: 0,
  });
  return [
    gameState,
    {
      setGamePhase: (newPhase: GamePhase) =>
        setGameState((prevState: GameState) => ({
          ...prevState,
          gamePhase: newPhase,
        })),
      setGameRound: (newRound: number) =>
        setGameState(prevState => ({
          ...prevState,
          gameRound: newRound,
        })),
    },
  ];
}
