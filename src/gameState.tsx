import React, { useState } from 'react';

type GamePhase =
  | 'initial'
  | 'splash'
  | 'ready'
  | 'running'
  | 'answered'
  | 'finished';

export class Game {
  private leftHandSide: number;
  private rightHandSide: number;
  private operationName: string;
  private operation: (lhs: number, rhs: number) => number;

  public answer: number;
  public question: string;

  constructor(
    lhs: number,
    rhs: number,
    opeName: string,
    operation: (lhs: number, rhs: number) => number
  ) {
    this.leftHandSide = lhs;
    this.rightHandSide = rhs;
    this.operation = operation;
    this.answer = this.operation(lhs, rhs);
    this.operationName = opeName;
    this.question = `「${lhs} ${this.operationName} ${rhs}」の答えは？`;
  }
}

export type Record = {
  elapsedTimeInMilliSec: number;
  correct: boolean;
};

export type GameState = {
  gamePhase: GamePhase;
  currentGameRound: number;
  gameRounds: Game[];
  results: Record[];
  message?: string;
  playerName?: string;
  startTimeInString?: string;
  finishTimeInString?: string;
  lastRoundStarted?: number;
};

function generateGames(nRounds: number): Game[] {
  return Array(nRounds)
    .fill(0)
    .map(
      (_, i) =>
        new Game(
          Math.floor(Math.random() * 99) + 1,
          Math.floor(Math.random() * 99) + 1,
          '＋',
          (lhs: number, rhs: number) => lhs + rhs
        )
    );
}

export function useGameState(nRounds = 5) {
  const [gameState, setGameState] = useState<GameState>({
    gamePhase: 'initial',
    currentGameRound: 0,
    gameRounds: generateGames(nRounds),
    results: [] as Record[],
    message: undefined,
  });
  return {
    gameState,
    setPhase: (newPhase: GamePhase, message?: string) => {
      setGameState((prevState: GameState) => ({
        ...prevState,
        gamePhase: newPhase,
        message,
      }));
    },
    setCurrentRound: (newCurrentRound: number) => {
      setGameState(prevState => ({
        ...prevState,
        currentGameRound: newCurrentRound,
      }));
    },
    setPlayerName: (playerName: string) => {
      setGameState(prevState => ({
        ...prevState,
        playerName,
      }));
    },
    setStartTimeInString: (startTimeInString: string) => {
      setGameState(prevState => ({
        ...prevState,
        startTimeInString,
      }));
    },
    setFinishTimeInString: (finishTimeInString: string) => {
      setGameState(prevState => ({
        ...prevState,
        finishTimeInString,
      }));
    },
    setLastRoundStarted: (lastRoundStarted: number) => {
      setGameState(prevState => ({
        ...prevState,
        lastRoundStarted,
      }));
    },
    addResult: (result: Record) => {
      setGameState(prevState => ({
        ...prevState,
        results: [...prevState.results, result],
      }));
    },
  };
}
