import { Bodyparams, Head, Kbd, Language, Partner, Request, Response, Tableheader, Tabler, Tryit } from "../home/Homepage";

export function Onboardingstatus(){
    return(
        <div className="container-fluid p-0">
            <div className="row">
            <div className="col-md-7">
            
            <Head
            h2={"ONBOARD STATUS CHECK FOR PIPE WISE"}
            p1={"https://paysprint.in/service-api/api/v1/service/onboard/onboardnew/getonboardurl"}
            />
            <div className="head my-4">
                        <Request/>
                        <div className="my-2 kbd">
                            <h6>ONBOARDING COMPLETED</h6>
                            <p>STATUS : true and is_approved ( Accepted / Pending / Rejected)</p>
                            <p>Accepted : Do txn</p>
                            <p>Pending : Onboarding complete , Please wait 6hr for AEPS Activation on Bank activation."</p>
                            <p>Rejected : Onboarding Rejected by bank,</p>
                            <h6>ONBOARDING NOT COMPLETED</h6>
                            <p>STATUS : false and is_approved (Pending)</p>
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
                            <a className="left" href="/onboardingmobile"><i className="fa-solid fa-arrow-left-long"></i>Onboarding  Mobile Sdk</a>
                            <a className="right" href="/aepsrdservice">RD Service<i className="fa-solid fa-arrow-right-long"></i></a> 
                        </div>
                    </div>
                    
        </div>
    )
}