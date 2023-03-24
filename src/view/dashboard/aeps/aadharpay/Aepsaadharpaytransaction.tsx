import { Bodyparams, Head, Language, Request, Response, Tryit } from "../../home/Homepage";

export function Aepsaadharpaytransaction(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-7">
                    <Head
                    h2={'Aadhar pay transaction status query'}
                    p1={"https://paysprint.in/service-api/api/v1/service/aadharpay/aadharpayquery/query"}
                    />
                    <div className="head my-4">
                        <Request/>
                        <h6 className="my-2">RESPONSE HANDLING</h6>
                        <p>Query successfully completed.</p>
                        <p>--- Status = true and txnstatus = 1 and response_code = 1 Success</p>
                        <p>--- Status = true and txnstatus =3 and response_code = 0 failed</p>
                        <p>--- Status = true and txnstatus =2 and response_code = 2 Pending</p>

                        <p>Query not completed.</p>
                        <p>-- status = false and response_code ( 3) (Transaction Not found in system)</p>
                        <p>-- status = false and response_code ( 15,8,20,9,10,11 ) (Bad request, Try again)</p>
                        <h4 className="my-3">RESPONSE HANDLING</h4>
                        <h6>SUCCESS</h6>
                        <p>txnstatus = 1 and status =true</p>
                        <br/>
                        <h6>FAILED</h6>
                        <p>txnstatus = 3 and status =true</p>
                        <br/>
                        <p>Pending</p>
                        <p>txnstatus = 2 and status =true</p>
                        <h6 className="fw-bold">BODY PARAMS</h6>
                        <Bodyparams
                        h61={"body"}
                        p={"string"}
                         />
                         <h6 className="fw-bold mt-3">HEADERS</h6>
                         <Bodyparams
                        h61={"body"}
                        p={"string"}
                        place={"MzNkYzllOGJmZGVhNWRkZTc1YTgzM2Y5ZDFlY2EyZTQ"}
                         />
                         <div className="my-3">
                            <h6 className="fw-bold">RESPONSES</h6>
                            <Response />
                            <Response />
                         </div>
                    </div>
                </div>
                <div className="col-md-5">
                            <h6>LANGUAGE</h6>
                            <Language />
                            <Tryit />
                        </div>
                        <div className="col-md-7">
                            <a className="left" href="/aepsaadharpayaeps"><i className="fa-solid fa-arrow-left-long"></i>Aadhar Pay</a>
                            <a className="right" href="/finointro">Introduction<i className="fa-solid fa-arrow-right-long"></i></a> 
                        </div>
            </div>
        </div>
    )
}