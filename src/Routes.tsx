import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "src/containers/layout";

import Homeworks from "src/pages/homeworks";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="homeworks" element={<Layout />}>
        <Route index element={<Homeworks />} />
        <Route path=":number" element={<Homeworks />} />
      </Route>
    </Routes>
  );
};

export default Routers;
