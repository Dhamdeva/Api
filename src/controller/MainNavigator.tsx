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
import { Onboardingtransaction } from "../view/dashboard/onboarding/Onboaringtransaction";
import { Onboardingmobile } from "../view/dashboard/onboarding/Onboardingmobile";
import { Onboardingstatus } from "../view/dashboard/onboarding/Onboardingstatus";
import { Rdservice } from "../view/dashboard/aeps/Rdservice";
import { Encryptionbodytechnique } from "../view/dashboard/aeps/Encryptionbodytechnique";
import { Aepsenquiry } from "../view/dashboard/aeps/enquiry/Aepsenquiry";
import { Aepsenquiryaeps } from "../view/dashboard/aeps/enquiry/Aepsenquiryaeps";
import { Aepswithdrawl } from "../view/dashboard/aeps/withdrawl/Aepswithdrawl";
import { Aepsministatement } from "../view/dashboard/aeps/ministatement/Aepsministatement";
import { Aepsministatementaeps } from "../view/dashboard/aeps/ministatement/Aepsministatementaeps";
import { Aepsbanklist } from "../view/dashboard/aeps/banklist/Aepsbanklist";
import { Withdrawltransactionstatus } from "../view/dashboard/aeps/withdrawltransaction/Withdrawltransactionstatus";
import { Cashwithdrawtransactionstatus } from "../view/dashboard/aeps/withdrawltransaction/Cashwithdrawtransactionstatus";
import { Aepswithdraw } from "../view/dashboard/aeps/withdrawl/Aepswithdraw";
import { Aepswithdrawthreewayrecon } from "../view/dashboard/aeps/withdrawthreewayrecon/Aepswithdrawthreewayrecon";
import { Aepswithdrawthreeway } from "../view/dashboard/aeps/withdrawthreewayrecon/Aepswithdrawthreeway";
import { Aepsaadharpay } from "../view/dashboard/aeps/aadharpay/Aepsaadharpay";
import { Aepsaadharpayaeps } from "../view/dashboard/aeps/aadharpay/Aepsaadharpayaeps";
import { Aepsaadharpaytransaction } from "../view/dashboard/aeps/aadharpay/Aepsaadharpaytransaction";

function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Getting />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/uatcredentials" element={<Uatcredentails />} />
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
        <Route path="/onboardingtransaction" element={<Onboardingtransaction />} />
        <Route path="/onboardingmobile" element={<Onboardingmobile />} />
        <Route path="/onboardingstatus" element={<Onboardingstatus />} />
        <Route path="/aepsrdservice" element={<Rdservice />} />
        <Route path="/aepsencryption" element={<Encryptionbodytechnique />} />
        <Route path="/aepsenquiry" element={<Aepsenquiry />} />
        <Route path="/aepsenquiryaeps" element={<Aepsenquiryaeps />} />
        <Route path="/aepswithdrawl" element={<Aepswithdrawl />} />
        <Route path="/aepswithdraw" element={<Aepswithdraw />} />
        <Route path="/aepsministatement" element={<Aepsministatement />} />
        <Route path="/aepsministatementaeps" element={<Aepsministatementaeps />} />
        <Route path="/aepsbanklist" element={<Aepsbanklist />} />
        <Route path="/aepswithdrawltransaction" element={<Withdrawltransactionstatus />} />
        <Route path="/cashwithdrawtransactionstatus" element={<Cashwithdrawtransactionstatus />} />
        <Route path="/aepswithdrawthreewayrecon" element={<Aepswithdrawthreewayrecon />} />
        <Route path="/aepswithdrawthreeway" element={<Aepswithdrawthreeway />} />
        <Route path="/aepsaadharpay" element={<Aepsaadharpay />} />
        <Route path="/aepsaadharpayaeps" element={<Aepsaadharpayaeps />} />
        <Route path="/aepsaadharpaytransaction" element={<Aepsaadharpaytransaction />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;