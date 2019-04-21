import React, { useState } from 'react';

export type GamePhase = 'initial' | 'splash' | 'ready' | 'running' | 'finished';

export class Question {
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
  currentQuestion: number;
  questions: Question[];
  results: Record[];
  playerName?: string;
  startTimeInString?: string;
  finishTimeInString?: string;
  lastRoundStarted?: number;
};

function generateGames(nRounds: number): Question[] {
  return Array(nRounds)
    .fill(0)
    .map(
      (_, i) =>
        new Question(
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
    currentQuestion: 0,
    questions: generateGames(nRounds),
    results: [] as Record[],
  });
  return {
    gameState,
    setPhase: (newPhase: GamePhase) => {
      setGameState((prevState: GameState) => ({
        ...prevState,
        gamePhase: newPhase,
      }));
    },
    addCurrentRound: () => {
      setGameState(prevState => ({
        ...prevState,
        currentQuestion: prevState.currentQuestion + 1,
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
    clear: () => {
      setGameState(prevState => ({
        ...prevState,
        results: [],
        currentQuestion: 0,
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
