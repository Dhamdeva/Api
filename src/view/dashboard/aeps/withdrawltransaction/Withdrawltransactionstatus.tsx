import { Head } from "../../home/Homepage";

export function Withdrawltransactionstatus(){
    return(
        <div className="container-fluid">
            <div className="col-md-7">
                <Head
                h2={"Withdrawl transaction status"}
                />
                <div className="head my-4">
                    <h6>RESPONSE HANDLING</h6>
                   <p>Query successfully completed.</p>
                   <p>--- Status = true and txnstatus = 1 and response_code = 1 ( Hit threeway with success)</p>
                   <p>--- Status = true and txnstatus =3 and response_code = 0 ( Hit threeway with failed)</p>
                   <p>--- Status = true and txnstatus =2 and response_code = 2 ( Hit threeway with failed)</p>

                   <p>Query not completed.</p>
                   <p>-- status = false and response_code ( 3) (Transaction Not found in system)</p>
                   <p>-- status = false and response_code ( 15,8,20,9,10,11 ) (Bad request, Try again)</p>
                </div>
                <div className="col-md-12">
                            <a className="left" href="/aepsbanklist"><i className="fa-solid fa-arrow-left-long"></i>Bank list</a>
                            <a className="right" href="/cashwithdrawtransactionstatus">Cash Withdrawl transaction status query<i className="fa-solid fa-arrow-right-long"></i></a> 
                    </div>
            </div>
        </div>
    )
}