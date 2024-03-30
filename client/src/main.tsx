import 'atropos/css';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './styles/style.scss';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import LandingPageOnReload from './LandingPageOnReload.js';
import { ContextProvider } from './context/Context.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextProvider>
    <ParallaxProvider>
      <BrowserRouter>
        <LandingPageOnReload />
        <App />
      </BrowserRouter>
    </ParallaxProvider>
  </ContextProvider>
);
