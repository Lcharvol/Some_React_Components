import React from 'react';

import Header from '../../components/Header';
import Button1 from '../../components/button1';
import Minigallery from '../../components/Mini_gallery';
import './App.css';

const App = () =>
  <main>
    <Header />
    <Button1 name="Button1" />
    <Button1 name="Button2" />
    <Button1 name="Button3" />
    <Button1 name="Button4" />
    <Button1 name="Button5" />
    <Minigallery
      nb_elem="2"
    />
  </main>;

export default App;
