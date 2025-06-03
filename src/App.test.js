import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

jest.setTimeout(310000); // Set timeout to 5 minutes 10 seconds

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

test('counter increments when button is clicked', async () => {
  render(<App />);
  const count = screen.getByTestId('count');
  const button = screen.getByTestId('increment-btn');
  expect(count).toHaveTextContent('Count: 0');
  fireEvent.click(button);
  expect(count).toHaveTextContent('Count: 1');
  // Artificial delay for 5 minutes
  await sleep(5 * 60 * 1000);
});