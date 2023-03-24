export function Navbar(){
    return(
        <div >
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link disabled" >PayPe</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Getting Started</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/authentication">Authentication</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/uatcredentials">UAT Credentials</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" >Balance</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/creditbalance">Main Balance(Credit Balance)</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/debitbalance">Cash Balance(Debit Balance)</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" >DMT</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link " href="/dmtintroduction" role="button" >Introduction</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/dmtpostman">Postman Collection</a></li>
                    </ul>  
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/dmtbanklist" >DMT BANK LIST</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link " href="/dmtremitter" role="button" >Remitter</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/dmtqueryremitter">Query Remitter</a></li>
                        <li><a className="dropdown-item" href="/dmtregisterremitter">Register Remitter</a></li>
                    </ul>  
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link " href="/dmtbeneficiary" role="button" >Beneficiary</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/dmtregisterbeneficiary">Register Beneficiary</a></li>
                        <li><a className="dropdown-item" href="/dmtdeletebeneficiary">Delete Beneficiary</a></li>
                        <li><a className="dropdown-item" href="/dmtfetchbeneficiary">Fetch Beneficiary</a></li>
                        <li><a className="dropdown-item" href="/dmtfetchbeneficiaryby">Fetch Beneficiary by beneid</a></li>
                    </ul>  
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link " href="/dmttrans" role="button" >Transaction</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/dmtpennydrop">Penny Drop</a></li>
                        <li><a className="dropdown-item" href="/dmttransaction">Transaction</a></li>
                        <li><a className="dropdown-item" href="/dmttransactionstatus">Transaction Status</a></li>
                    </ul>  
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link " href="/dmtrefund" role="button" >Refund</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/dmtrefundotp">Refund OTP</a></li>
                        <li><a className="dropdown-item" href="/dmtclaimrefund">Claim Refund</a></li>
                    </ul>  
                </li>
                <li className="nav-item disabled">
                    <a className="nav-link" >ONBOARDIND</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/onboardingweb">Onboarding Web</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/onboardingtransaction">Onboarding Transaction Callback</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/onboardingmobile">Onboarding Mobile Sdk</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/onboardingstatus">Onboarding Status Check for pipe wise</a>
                </li>
                <li className="nav-item disabled">
                    <a className="nav-link" >AEPS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/aepsrdservice">RD Service</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/aepsencryption">Encryption Body Technique</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link " href="/aepsenquiry" role="button" >Enquiry</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/aepsenquiryaeps">Enquiry</a></li>
                    </ul>  
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link " href="/aepswithdrawl" role="button" >Withdrawl</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/aepswithdraw">Withdraw</a></li>
                    </ul>  
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link " href="/aepsministatement" role="button" >Ministatement</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/aepsministatementaeps">Mini Statement</a></li>
                    </ul>  
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link disabled" href="/aepsenquiry" role="button" >Bank List</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/aepsbanklist">Bank list</a></li>
                    </ul>  
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link " href="/aepswithdrawltransaction" role="button" >Withdrawl transaction status</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/cashwithdrawtransactionstatus">Cash Withdraw transaction status query</a></li>
                    </ul>  
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link " href="/aepswithdrawthreewayrecon" role="button" >Withdraw Three Way Recon</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/aepswithdrawthreeway">Withdraw Three Way</a></li>
                    </ul>  
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link " href="/aepsaadharpay" role="button" >Aadhar Pay</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/aepsaadharpayaeps">Aadhar Pay</a></li>
                        <li><a className="dropdown-item" href="/aepsaadharpaytransaction">Aadhar pay transaction status query</a></li>
                    </ul>  
                </li>
            </ul>
         </div>
    )
}