import React from "react";
import { Routes, Route } from "react-router-dom";
import { Authentication } from "../dashboard/Authentication";
import { Dashboard } from "../dashboard/Dashboard";
import { Getting } from "../dashboard/Getting";
import { Uatcredentails } from "../dashboard/Uatcredentials";

function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Getting />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/uatcredentails" element={<Uatcredentails />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;