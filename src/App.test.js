import { customRender, screen } from './utils/test-utils.js';
import App from './App';

test('renders title', () => {
  customRender(<App />);
  const hElement = screen.getByText(/Find Developers/i);
  expect(hElement).toBeInTheDocument();
});
