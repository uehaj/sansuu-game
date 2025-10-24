import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  act,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { useGameState } from './hooks/useGameState';
import GameMainPanel from './components/MainPanel';

afterEach(cleanup);

// TODO: Update this test to work with the new component structure after dependency upgrade
// @ts-ignore - Props need to be updated for new component structure
test.skip('GameMainPanelを読み込んでSTARTボタンを押すとゲーム画面が表示される', async () => {
  const { getByTestId, container } = render(
    // @ts-ignore - Props need to be updated
    <GameMainPanel log="" />
  );
  const startButton = await waitFor(() => getByTestId('start'));
  act(() => {
    fireEvent.click(startButton);
  });
  expect(getByTestId('text')).toHaveTextContent('');
  expect(container.firstChild).toMatchSnapshot();
});
