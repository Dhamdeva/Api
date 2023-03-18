import { Bodyparams, Head, Language, Request, Response, Tableheader, Tabler, Tryit } from "../home/Homepage";

export function Debitbalance(){
    return(
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-md-7">
                    <Head
                    h2={"Cash Balance(Credit Balance)"}
                    p1={"https://paype.in/service-api/api/v1/service/balance/balance/mainbalance"}
                    p2={"main balance"}
                    />
                    <div className="head my-5">
                        <Request />
                        <div className="table my-5">
                            <table>
                                <Tableheader 
                                th={"SNo"}
                                th1={"HTTP Response Code"}
                                th2={'Response Code'}
                                th3={"Description"} />
                                <tbody>
                                    <Tabler
                                    td={"1"}
                                    td1={"200"}
                                    td2={"1"}
                                    td3={"Balance successfully fetched"}
                                    />
                                    <Tabler
                                    td={"2"}
                                    td1={"200"}
                                    td2={"2"}
                                    td3={"Unable to fetch partner balance"}
                                    />
                                    <Tabler
                                    td={"3"}
                                    td1={"401"}
                                    td2={"3"}
                                    td3={"Unable to process balance request"}
                                    />
                                    <Tabler
                                    td={"4"}
                                    td1={"401"}
                                    td2={"4"}
                                    td3={"Jwt Token Error"}
                                    />
                                    <Tabler
                                    td={"5"}
                                    td1={"401"}
                                    td2={"5"}
                                    td3={"Authentication failed"}
                                    />
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
                    <Tryit />
                </div>
                <div className="col-md-7">
                    <a className="left" href="/creditbalance"><i className="fa-solid fa-arrow-left-long"></i>Main Balance(Credit Balance)</a>
                    <a className="right" href="/dmtintroduction"> Introduction<i className="fa-solid fa-arrow-right-long"></i></a> 
                </div>
            </div>
        </div>
    )
}