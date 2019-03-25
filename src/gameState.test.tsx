// useCounter.test.js
import { renderHook, cleanup, act } from 'react-hooks-testing-library';
import { useGameState } from './gameState';

afterEach(cleanup);

test('初期状態のgamePhaseはinitialである', () => {
  const { result } = renderHook(() => useGameState());

  expect(result.current.gameState.gamePhase).toBe('initial');
});

test('指定したgamePhaseに設定される', () => {
  const { result } = renderHook(() => useGameState());

  act(() => result.current.setGamePhase('ready'));
  expect(result.current.gameState.gamePhase).toBe('ready');
  act(() => result.current.setGamePhase('splash'));
  expect(result.current.gameState.gamePhase).toBe('splash');
  act(() => result.current.setGamePhase('running'));
  expect(result.current.gameState.gamePhase).toBe('running');
});
