import ReactDOM from 'react-dom/client';
import App from 'app';
import "app/styles/index.scss"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

reportWebVitals();
