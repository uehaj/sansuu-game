// useCounter.test.js
import { renderHook, cleanup } from '@testing-library/react-hooks';
import { act } from '@testing-library/react';
import { useGameState } from './useGameState';

afterEach(cleanup);

test('初期状態のgamePhaseはinitialである', () => {
  const { result } = renderHook(() => useGameState());

  expect(result.current.gameState.gamePhase).toBe('initial');
});

test('指定したgamePhaseに設定される', () => {
  const { result } = renderHook(() => useGameState());

  act(() => result.current.setPhase('ready'));
  expect(result.current.gameState.gamePhase).toBe('ready');
  act(() => result.current.setPhase('splash'));
  expect(result.current.gameState.gamePhase).toBe('splash');
  act(() => result.current.setPhase('running'));
  expect(result.current.gameState.gamePhase).toBe('running');
});
