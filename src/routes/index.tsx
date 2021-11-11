import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from '../pages/Menu';
import NewPlate from '../pages/NewPlate';
import Places from '../pages/Places';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Places />} />
      <Route path="/menu/:id" element={<Menu />} />
      <Route path="/menu/:id/new-plate" element={<NewPlate />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
