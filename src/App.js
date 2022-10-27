import React from "react";
import "./App.css";
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './page';
import 'zarm/dist/zarm.css';

function App() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
}

export default App;
