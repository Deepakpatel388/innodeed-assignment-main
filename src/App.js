import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { givenData } from "./CarsData";
import VolvoCars from "./Component/VolvoData";
import LearnIt from "./Pages/LearnIt";
import MyShop from "./Pages/ShopNow";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<VolvoCars/>}/>
        <Route path="/learn/:id" element={<LearnIt data={givenData} />}/>
        <Route path="/shop" element={<MyShop/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
