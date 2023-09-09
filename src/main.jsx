import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './store/store.js';
import { Provider } from 'react-redux';
import './styles/index.css';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
);
