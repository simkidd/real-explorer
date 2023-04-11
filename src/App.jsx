import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layouts from './layouts/Layouts';
import Advertise from './pages/Advertise';
import Help from './pages/Help';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Layouts />}>
        <Route index element={<Home/>} />
        <Route path='advertise' element={<Advertise />} />
        <Route path='help' element={<Help />} />
      </Route>
      </Routes>
    </Router>
  )
}

export default App