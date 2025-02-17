import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LoginScene, UserScene, HouseListScene, HouseScene } from '#scenes';
import { switchRoutes } from './routes';

export const RouterComponent: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.user} element={<UserScene />} />
        <Route path={switchRoutes.houseList} element={<HouseListScene />} />
        <Route path={switchRoutes.createHouse} element={<HouseScene />} />
        <Route path={switchRoutes.editHouse} element={<HouseScene />} />
      </Routes>
    </HashRouter>
  );
};
