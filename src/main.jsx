import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'animate.css';
import { Provider } from 'react-redux'
import { store } from './redux/store'

axios.defaults.baseURL="https://notes-5j3p.onrender.com"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
