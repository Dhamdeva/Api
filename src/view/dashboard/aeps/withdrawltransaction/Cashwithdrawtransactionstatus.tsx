import { Bodyparams, Head, Language, Request, Response, Table, Tablehead, Tableheader, Tabler, Tryit } from "../../home/Homepage";

export function Cashwithdrawtransactionstatus(){
    return(
        <div className="container-fliud">
            <div className="row">
                <div className="col-md-7">
                    <Head
                    h2={"Cash Withdraw transaction status query"}
                    p1={'https://paysprint.in/service-api/api/v1/service/aeps/balanceenquiry/index'}
                    p2={"Transaction status API used to get status of Cash Withdraw transaction."}
                    />
                    <div className="head my-4">
                        <Request/>
                        <div className="table my-2">
                            <table>
                                <Tableheader
                                th={"SNo"}
                                th1={"HTTP Response Code"}
                                th2={"Response Code"}
                                th3={"Description"}
                                />
                                <Tabler
                                td={"1"}
                                td1={"200"}
                                td2={"1"}
                                td3={"SUCCESS (Provided Message)"}
                                />
                                <Tabler
                                td={"2"}
                                td1={"200"}
                                td2={"0"}
                                td3={"FAILED (Provided Message)"}
                                />
                                <Tabler
                                td={"3"}
                                td1={"200"}
                                td2={"2"}
                                td3={"ERROR OR REQUEST TIMEOUT"}
                                />
                                <Tabler
                                td={"4"}
                                td1={"401"}
                                td2={"4"}
                                td3={"AEPS pipe is not available yet"}
                                />
                                <Tabler
                                td={"5"}
                                td1={"401"}
                                td2={"3"}
                                td3={"Transaction Not initiated."}
                                />
                                <Tabler
                                td={"6"}
                                td1={"401"}
                                td2={"11"}
                                td3={"Authentication failed, Please contact service provider"}
                                />
                            </table>
                        </div>
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
                            <a className="left" href="/aepswithdrawltransaction"><i className="fa-solid fa-arrow-left-long"></i>Withdrawl transaction status</a>
                            <a className="right" href="/aepswithdrawthreewayrecon">Withdraw Three Way Recon<i className="fa-solid fa-arrow-right-long"></i></a> 
                        </div>
            </div>
        </div>
    )
}