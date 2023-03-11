import { Bodyparams, Head, Language, Partner, Request, Response, Tableheader, Tabler } from "./Homepage";

export function Dmtfetchbeneficiary(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-7">
                    <Head
                    h2={"Fetch Beneficiary"}
                    p1={"https://paysprint.in/service-api/api/v1/service/dmt/remitter/queryremitter"}
                    />
                    <div className="head my-4">
                        <Request/>
                        <Partner 
                        p={"1 - With this API we can check Remitter mobile no. is already registered with our database, if yes then response system will provide remitter details. If remitter mobile no. is not queried before, then system will hit an OTP on remitter mobile no. to initiate for the registration process."}
                        p1={"2 - You need to pass same value of bank3_flag in Query Remitter as well as Register Remitter, the value should be either Yes or No."}
                        />
                        <div className="table my-4">
                            <table>
                                <Tableheader
                                th={"SNo"}
                                th1={"HTTP Response Code"}
                                th2={"Response Code"}
                                th3={"Description"}
                                />
                                <tbody>
                                    <Tabler
                                    td={"1"}
                                    td1={"200"}
                                    td2={"1"}
                                    td3={"Remitter details fetch successfully."}/>
                                    <Tabler
                                    td={"2"}
                                    td1={"200"}
                                    td2={"0"}
                                    td3={"Remitter not registered OTP sent for new registration.(check response_code=0 and isset(stateresp) )"}/>
                                    <Tabler
                                    td={"4"}
                                    td1={"200"}
                                    td2={"0"}
                                    td3={"Unable to get remitter details. Please try again later"}/>
                                    <Tabler
                                    td={"5"}
                                    td1={"401"}
                                    td2={"5"}
                                    td3={"Mobile Number is not allowed to do remittance."}/>
                                    <Tabler
                                    td={"7"}
                                    td1={"406"}
                                    td2={"8"}
                                    td3={"Validation Error"}/>
                                    <Tabler
                                    td={"8"}
                                    td1={"404"}
                                    td2={"12"}
                                    td3={"DMT service or preference is not active for this account."}/>
                                    <Tabler
                                    td={"9"}
                                    td1={"412"}
                                    td2={"9"}
                                    td3={"Unable to process query remitter request."}/>
                                    <Tabler
                                    td={"10"}
                                    td1={"401"}
                                    td2={"10"}
                                    td3={"Invalid JWT Token sent in Header."}/>
                                    <Tabler
                                    td={"11"}
                                    td1={"401"}
                                    td2={"11"}
                                    td3={"Authentication failed."}/>
                                </tbody>
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
                         <Bodyparams
                        h61={"body"}
                        p={"string"}
                        place={"MzNkYzllOGJmZGVhNWRkZTc1YTgzM2Y5ZDFlY2EyZTQ"}
                         />
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
                </div>
                <div className="col-md-7">
                    <a className="left" href="/dmtdeletebeneficiary"><i className="fa-solid fa-arrow-left-long"></i>Delete Beneficiary</a>
                    <a className="right" href="/dmtfetchbeneficiaryby">Fetch Beneficiary by beneid<i className="fa-solid fa-arrow-right-long"></i></a> 
                </div>
                </div>
            </div>
        
    )
}