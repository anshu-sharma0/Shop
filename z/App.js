// App.js
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyComponent from "./Component";
import Men from "./categories/men";
import Women from "./categories/women";
import Elec from "./categories/elec.js";
import Jew from "./categories/jew.js";
import Category from "./Category";

import Category from "./catComponent.js";
import Catc from "./catComponent.js";

function App() {
  return (
    // <MyComponent />
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MyComponent />} /> */}
        <Route path="/" element={<Category />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/elec" element={<Elec />} />
        <Route path="/jew" element={<Jew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
