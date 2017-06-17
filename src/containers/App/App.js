import React, { PropTypes } from 'react';

import Button1 from '../../components/button1';
import Button2 from '../../components/button2';
import Minigallery from '../../components/Mini_gallery';
import './App.css';

const App = ({ children }) =>
  <main>
    <Button1 />
    <Button2 />
    <Minigallery />
  </main>;

export default App;
