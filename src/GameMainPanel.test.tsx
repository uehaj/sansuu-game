import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import MainPanel from './components/MainPanel';

afterEach(cleanup);

test('MainPanelを読み込んでSTARTボタンを押すとゲーム画面が表示される', async () => {
  const { getByTestId } = render(
    <MainPanel log={[]} />
  );

  // スプラッシュ画面からREADY画面に遷移するまで待つ（最大3秒）
  const startButton = await waitFor(
    () => getByTestId('start'),
    { timeout: 3000 }
  );

  expect(startButton).toBeInTheDocument();
  expect(startButton).toHaveTextContent('START');

  // STARTボタンをクリック
  fireEvent.click(startButton);

  // ゲームが開始されて問題が表示されるまで待つ
  await waitFor(() => {
    expect(screen.getByText(/問題1/)).toBeInTheDocument();
  });

  // 問題テキストが表示されることを確認（算数問題の形式）
  expect(screen.getByText(/の答えは？/)).toBeInTheDocument();
});

