import React from "react";
import { Routes, Route } from "react-router-dom";
import { Authentication } from "../dashboard/Authentication";
import { Creditbalance } from "../dashboard/Creditbalance";
import { Debitbalance } from "../dashboard/Debitbalance";
import { Dashboard } from "../dashboard/Dashboard";
import { Getting } from "../dashboard/Getting";
import { Uatcredentails } from "../dashboard/Uatcredentials";
import { Dmtintroduction } from "../dashboard/Dmtintroduction";
import { Dmtpostmancollection } from "../dashboard/Dmtpostmancollection";
import { Dmtbanklist } from "../dashboard/Dmtbanklsit";
import { Dmtremitter } from "../dashboard/Dmtremitter";
import { Dmtqueryremitter } from "../dashboard/Dmtqueryremitter";
import { Dmtregisterremitter } from "../dashboard/Dmtregisterremitter";
import { Dmtbeneficiary } from "../dashboard/Dmtbeneficiary";
import { Dmtregisterbeneficiary } from "../dashboard/Dmtregisterbaneficiary";
import { Dmtdeletebeneficiary } from "../dashboard/Dmtdeletebeneficiary";
import { Dmtfetchbeneficiary } from "../dashboard/Dmtfetchbeneficiary";
import { Dmtfetchbeneficiaryby } from "../dashboard/Dmtfetchbeneficiaryby";

function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Getting />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/uatcredentails" element={<Uatcredentails />} />
        <Route path="/creditbalance" element={<Creditbalance />} />
        <Route path="/debitbalance" element={<Debitbalance />} />
        <Route path="/dmtintroduction" element={<Dmtintroduction />} />
        <Route path="/dmtpostman" element={<Dmtpostmancollection />} />
        <Route path="/dmtbanklist" element={<Dmtbanklist />} />
        <Route path="/dmtremitter" element={<Dmtremitter />} />
        <Route path="/dmtqueryremitter" element={<Dmtqueryremitter />} />
        <Route path="/dmtregisterremitter" element={<Dmtregisterremitter />} />
        <Route path="/dmtbeneficiary" element={<Dmtbeneficiary />} />
        <Route path="/dmtregisterbeneficiary" element={<Dmtregisterbeneficiary />} />
        <Route path="/dmtdeletebeneficiary" element={<Dmtdeletebeneficiary />} />
        <Route path="/dmtfetchbeneficiary" element={<Dmtfetchbeneficiary />} />
        <Route path="/dmtfetchbeneficiaryby" element={<Dmtfetchbeneficiaryby />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;