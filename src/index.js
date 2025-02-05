import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
  rootElement
);
