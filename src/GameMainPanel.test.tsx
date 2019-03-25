import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from 'react-testing-library';
import 'jest-dom/extend-expect';

import { useGameState } from './gameState';
import GameMainPanel from './components/GameMainPanel';

afterEach(cleanup);

test('GameMainPanelを読み込んでSTARTボタンを押すとゲーム画面が表示される', async () => {
  const { getByTestId, container } = render(<GameMainPanel />);
  const startButton = await waitForElement(() => getByTestId('start'));
  fireEvent.click(startButton);
  expect(getByTestId('text')).toHaveTextContent('aaa');
  expect(container.firstChild).toMatchSnapshot();
});
