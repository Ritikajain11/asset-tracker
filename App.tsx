import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import NoPage from './Pages/NoPage';
import Inventory from './Pages/Inventory';
import Home from './Pages/Home';
import BasicSearch from './Pages/BasicSearch';
import AdvanceSearch from './Pages/AdvanceSearch';
import UpdateAsset from './Pages/UpdateAsset';

import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} />
          <Route element={<BasicSearch />} />
          <Route index element={<AdvanceSearch />} />
          <Route element={<Inventory />} />
          <Route exact path="/updateAsset/:id" element={<UpdateAsset />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
