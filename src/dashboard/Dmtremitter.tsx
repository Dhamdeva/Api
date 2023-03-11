import { Head } from "./Homepage";

export function Dmtremitter(){
    return(
        <div className="container-fluid">
            <div className="col-md-8">
                <Head
                h2={"Remitter"}
                />
                <div className="head my-4">
                    <p>DMT is a product where a customer / Remitter can send money using a mobile phone into a bank account after registering concerned bank account with the mobile number.</p>
                    <h6>Below are the features of this product</h6>
                    <ul>
                        <li>Any number of bank account can be added to a mobile number.</li>
                        <li>A bank account can receive max 5 lacs in a month through DMT service.</li>
                    </ul>
                    <h6>Status of DMT transaction</h6>
                    <ul>
                        <li><strong>Successful</strong> – Money credit in beneficiary account successfully.</li>
                        <li><strong>Failed</strong> – Money failed to credit in beneficiary account, retailer need to claim refund to take balance back in his main wallet.</li>
                        <li><strong>Hold</strong> – Hold transactions are those which are debited from sender account but has not credit in the beneficiary account, due to different reason – receiver bank node is down, Txn timed-out at NPCI, Fluctuation in Bank nodes</li>
                        <li>TAT for IMPS hold transaction is T+3</li>
                        <li>TAT for NEFT hold transaction is T+1</li>
                    </ul>
                </div>
                <div className="col-md-12">
                    <a className="left" href="/dmtbanklist"><i className="fa-solid fa-arrow-left-long"></i>DMT BANK LIST</a>
                    <a className="right" href="/dmtqueryremitter">Query Remitter<i className="fa-solid fa-arrow-right-long"></i></a> 
                </div>
            </div>
        </div>
    )
}