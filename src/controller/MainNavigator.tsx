import React from "react";
import { Routes, Route } from "react-router-dom";
import { Authentication } from "../view/dashboard/paype/Authentication";
import { Creditbalance } from "../view/dashboard/balance/Creditbalance";
import { Debitbalance } from "../view/dashboard/balance/Debitbalance";
import { Getting } from "../view/dashboard/paype/Getting";
import { Uatcredentails } from "../view/dashboard/paype/Uatcredentials";
import { Dmtintroduction } from "../view/dashboard/dmt/introduction/Dmtintroduction";
import { Dmtpostmancollection } from "../view/dashboard/dmt/introduction/Dmtpostmancollection";
import { Dmtbanklist } from "../view/dashboard/dmt/Dmtbanklsit";
import { Dmtremitter } from "../view/dashboard/dmt/remitter/Dmtremitter";
import { Dmtqueryremitter } from "../view/dashboard/dmt/remitter/Dmtqueryremitter";
import { Dmtregisterremitter } from "../view/dashboard/dmt/remitter/Dmtregisterremitter";
import { Dmtbeneficiary } from "../view/dashboard/dmt/beneficiary/Dmtbeneficiary";
import { Dmtdeletebeneficiary } from "../view/dashboard/dmt/beneficiary/Dmtdeletebeneficiary";
import { Dmtfetchbeneficiary } from "../view/dashboard/dmt/beneficiary/Dmtfetchbeneficiary";
import { Dmtfetchbeneficiaryby } from "../view/dashboard/dmt/beneficiary/Dmtfetchbeneficiaryby";
import { Dmtregisterbeneficiary } from "../view/dashboard/dmt/beneficiary/Dmtregisterbaneficiary";
import { Dmtclaimrefund } from "../view/dashboard/dmt/refund/Dmtclaimrefund";
import { Dmtrefund } from "../view/dashboard/dmt/refund/Dmtrefund";
import { Dmtrefundotp } from "../view/dashboard/dmt/refund/Dmtrefundotp";
import { Dmtpennydrop } from "../view/dashboard/dmt/transaction/Dmtpennydrop";
import { Dmttrans } from "../view/dashboard/dmt/transaction/Dmttrans";
import { Dmttransaction } from "../view/dashboard/dmt/transaction/Dmttransaction";
import { Dmttransactionstatus } from "../view/dashboard/dmt/transaction/Dmttrasactionstatus";
import { Onboardingweb } from "../view/dashboard/onboarding/Onboardingweb";

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
        <Route path="/dmttrans" element={<Dmttrans />} />
        <Route path="/dmtpennydrop" element={<Dmtpennydrop />} />
        <Route path="/dmttransaction" element={<Dmttransaction />} />
        <Route path="/dmttransactionstatus" element={<Dmttransactionstatus />} />
        <Route path="/dmtrefund" element={<Dmtrefund />} />
        <Route path="/dmtrefundotp" element={<Dmtrefundotp />} />
        <Route path="/dmtclaimrefund" element={<Dmtclaimrefund />} />
        <Route path="/onboardingweb" element={<Onboardingweb />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;