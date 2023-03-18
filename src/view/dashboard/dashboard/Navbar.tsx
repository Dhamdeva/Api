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
                    <a className="nav-link" href="/uatcredentails">UAT Credentials</a>
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
            </ul>
         </div>
    )
}