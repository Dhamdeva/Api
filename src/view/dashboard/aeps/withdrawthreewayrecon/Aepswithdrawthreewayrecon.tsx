import { Head } from "../../home/Homepage";

export function Aepswithdrawthreewayrecon(){
    return(
        <div className="container-fluid">
            <div className="col-md-7">
                <Head
                h2={"Withdraw Three Way Recon"}
                p={"All AEPS Cash withdraw transaction need to be hit through three way api to acknowledge the actual status of transaction maintain at api partner End to Paysprint."}
                p2={"Do not handle your end txn response on the basis of this api, this is only acknowledge API for recon."}
                />
                <div className="head my-4">
                    <h6>RESPONSE HANDLING</h6>
                    <p>Recon successfully completed.</p>
                    <p>--- Status = true and response_code = 1</p>

                    <p>Recon not completed.</p>
                    <p>-- status = false and response_code ( 3,15,8,20,9,10,11)</p>
                </div>
                <div className="col-md-12">
                            <a className="left" href="/cashwithdrawtransactionstatus"><i className="fa-solid fa-arrow-left-long"></i>Cash Withdrawl transaction status query</a>
                            <a className="right" href="/aepswithdrawthreeway">Withdraw Three Way <i className="fa-solid fa-arrow-right-long"></i></a> 
                        </div>
            </div>
        </div>
    )
}