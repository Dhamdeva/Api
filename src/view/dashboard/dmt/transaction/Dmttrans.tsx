import { Head } from "../../home/Homepage";

export function Dmttrans(){
    return(
        <div className="container-fluid p-0">
            <div className="col-md-8">
                <Head
                h2={"Transaction"}
                p={"The said API will facilitates to transactions of Direct money transfer (DMT) as used to send money instantly to any Bank's account holder within India."}
                />
                <div className="head my-4">
                    <h6>DMT transaction</h6>
                    <ul>
                        <li><strong>Successful</strong> – Money credit in beneficiary account successfully.</li>
                        <li><strong>Failed</strong> – Money failed to credit in beneficiary account, retailer need to claim refund to take balance back in his main wallet.</li>
                        <li><strong>Hold</strong> – Hold transactions are those which are debited from sender account but has not credit in the beneficiary account, due to different reason – receiver bank node is down, Txn timed-out at NPCI, Fluctuation in Bank nodes</li>
                        <li>TAT for IMPS hold transaction is T+3</li>
                        <li>TAT for NEFT hold transaction is T+1</li>
                    </ul>
                </div>
                <div className="col-md-12">
                    <a className="left" href="/dmtfetchbeneficiaryby"><i className="fa-solid fa-arrow-left-long"></i>Fetch Beneficiary by beneid</a>
                    <a className="right" href="/dmtpennydrop">Penny Drop<i className="fa-solid fa-arrow-right-long"></i></a> 
                </div>
            </div>
        </div>
    )
}