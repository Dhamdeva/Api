import { Bodyparams, Head, Kbd, Language, Partner, Request, Response, Tableheader, Tabler, Tryit } from "../home/Homepage";

export function Onboardingweb(){
    return(
        <div className="container-fluid p-0">
            <div className="row">
            <div className="col-md-7">
            
            <Head
            h2={"Onboarding Web"}
            p1={"https://paysprint.in/service-api/api/v1/service/onboard/onboardnew/getonboardurl"}
            />
            <p>Live URL:https://api.paysprint.in/api/v1/service/onboard/onboard/getonboardurl</p>
            <p>Onboarding Process Used for Kyc process for AEPS services.</p>
            <p>UAT OTP -: 999999</p>
            <p>DOCUMENT REQUIREMNT :</p>
            <p>1- Merchant Original Pancard image.</p>
            <p>2- Merchant Original AADHAR IMAGE image.</p>
            <p>3- Onboarding STATE SHOULD match Aadhaar address.</p>
            <p>API PARTNER INTEGRATION REQUIREMENT :</p>
            <p>1- For onboarding you have to first setup transaction callback URL in PORTAL credential section.</p>
            <p>Use: transaction callback URL is to inform partner to deduction amount from merchant as a one time onboarding charges for verification.</p>
            <p>Description:</p>
            <kbd className="head my-2 kbd">
                <Kbd
                p={"EXAMPLE URL= POST REQUEST FROM PAYSRINT"}
                p1={"TO https://{{transaction_callback_URL}}"}
                p2={"content-type => application/json"}
                p3={'{"event": "MERCHANT_ONBOARDING",'}
                p4={'"param": {"merchant_id":"RD3933",'}
                p5={'"partner_id":"PS002",'}
                p6={'"request_id":"322432",'}
                p7={'"amount":"10"'}
                p8={"},"}
                p9={'"param_inc": "wqewqewqe723432432"}'}
                p10={"param_enc is encrypted value of param using JWT token provided by paysprint RESPONSE Should be in case of"}
                p11={"success"}
                p12={'{"status":200,"message":"Transaction completed successfully"}'}
                p13={"FAILED"}
                p14={'{"status":400,"message":"Transaction Failed"}'}
                />
            </kbd>
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
                                    td2={"2"}
                                    td3={"Transaction not found or already refunded."}/>
                                    <Tabler
                                    td={"3"}
                                    td1={"412"}
                                    td2={"3"}
                                    td3={"No record found."}/>
                                    
                                    <Tabler
                                    td={"4"}
                                    td1={"406"}
                                    td2={"4"}
                                    td3={"Validation Error"}/>
                                    <Tabler
                                    td={"5"}
                                    td1={"412"}
                                    td2={"5"}
                                    td3={"Unable to process query remitter request."}/>
                                    <Tabler
                                    td={"6"}
                                    td1={"401"}
                                    td2={"6"}
                                    td3={"Invalid JWT Token sent in Header."}/>
                                    <Tabler
                                    td={"7"}
                                    td1={"401"}
                                    td2={"7"}
                                    td3={"Authentication failed."}/>
                                </tbody>
                            </table>
                        </div>
                        <p>LIVE URL : BASEURL /api/v1/service/onboard/onboard/getonboardurl</p>
                        <h6>CALLBACK RESPONSE OF ONBOARDING ON SUCCESS OR Back to home</h6>
                        <p>After Decryption</p>
                        <Kbd 
                        p={'{'}
                        p1={'"refno": "16268661725702",'}
                        p2={'"txnid": "1477415",'}
                        p3={'"status": "1",'}
                        p4={'"partnerid": "PS00XX","merchantcode": "RXXXX","is_icici_kyc":"1","bank": {"Bank1": 1,'}
                        p5={'"Bank2": 0,'}
                        p6={'"Bank3": 0'}
                        p7={'}'}
                        p8={'}'}
                        />
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
                            <a className="left" href="/dmtclaimrefund"><i className="fa-solid fa-arrow-left-long"></i>Claim Refund</a>
                            <a className="right" href="/onboardingmobile">On Boarding Mobile SDK<i className="fa-solid fa-arrow-right-long"></i></a> 
                        </div>
                    </div>
                    
        </div>
    )
}