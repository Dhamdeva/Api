import { Bodyparams, Head, Language, Request, Response, Table, Tablehead, Tableheader, Tabler, Tryit } from "../../home/Homepage";

export function Aepsministatementaeps(){
    return(
        <div className="container-fliud">
            <div className="row">
                <div className="col-md-7">
                    <Head
                    h2={"Mini Statement"}
                    p1={'https://paysprint.in/service-api/api/v1/service/aeps/balanceenquiry/index'}
                    />
                    <div className="head my-4">
                        <Request/>
                        <h4 className="my-2">BODY parameter before encryption</h4>
                        <p>MINIMUM REQUEST TIMEOUT TIME : <strong>180 second</strong></p>    
                        <div className="table my-2">
                            <table>
                                <Tablehead
                                th={"PARAMETER"}
                                th1={"TYPE"}
                                th2={"VALUE"}
                                />
                                <Table
                                td={"latitude"}
                                td1={"string"}
                                td2={"22.44543"}
                                />
                                <Table
                                td={"longitude"}
                                td1={"string"}
                                td2={"77.434"}
                                />
                                <Table
                                td={"mobilenumber"}
                                td1={"string"}
                                td2={"9900000099"}
                                />
                                <Table
                                td={"referenceno"}
                                td1={"string"}
                                td2={"43542343434(unique txn value)"}
                                />
                                <Table
                                td={"ipaddress"}
                                td1={"string"}
                                td2={"122.44.443.00"}
                                />
                                <Table
                                td={"adhaarnumber"}
                                td1={"string"}
                                td2={""}
                                />
                                <Table
                                td={"accessmodetype"}
                                td1={"string"}
                                td2={"APP OR SITE"}
                                />
                                <Table
                                td={"nationalbankidentification"}
                                td1={"number"}
                                td2={""}
                                />
                                <Table
                                td={"requestremarks"}
                                td1={"string"}
                                td2={""}
                                />
                                <Table
                                td={"data"}
                                td1={"xml string"}
                                td2={"fingerprint xml data"}
                                />
                                <Table
                                td={"pipe"}
                                td1={"string"}
                                td2={"bank1 OR bank2 OR bank3"}
                                />
                                <Table
                                td={"timestamp"}
                                td1={"string"}
                                td2={"2020-01-12 13:00:12"}
                                />
                                <Table
                                td={"transactiontype"}
                                td1={"string"}
                                td2={"BE"}
                                />
                                <Table
                                td={"submerchantid"}
                                td1={"alphanumeric	"}
                                td2={"1"}
                                />
                                <Table
                                td={"is_iris"}
                                td1={"(Yes in case of iris device)"}
                                td2={"Yes OR No"}
                                />
                            </table>
                        </div>
                        <h5>RESPONSE CODE</h5>
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
                                td2={"5"}
                                td3={"Provided Message"}
                                />
                                <Tabler
                                td={"7"}
                                td1={"406"}
                                td2={"18"}
                                td3={"Please Provide a unique reference number"}
                                />
                                <Tabler
                                td={"8"}
                                td1={"406"}
                                td2={"26"}
                                td3={"Device is already mapped with other merchant, Please contact service provider"}
                                />
                                <Tabler
                                td={"9"}
                                td1={"406"}
                                td2={"27"}
                                td3={"Fingerprint capture failed., Try again with Re Plug RD device"}
                                />
                                <Tabler
                                td={"10"}
                                td1={"406"}
                                td2={"24"}
                                td3={"Fingerprint capture failed., Try again"}
                                />
                                <Tabler
                                td={"11"}
                                td1={"404"}
                                td2={"24"}
                                td3={"Merchant onboarding is not onboarded respective pipe"}
                                />
                                <Tabler
                                td={"12"}
                                td1={"404"}
                                td2={"25"}
                                td3={"You do not have permission., Please onboard merchant"}
                                />
                                <Tabler
                                td={"13"}
                                td1={"404"}
                                td2={"12"}
                                td3={"AEPS Service is down"}
                                />
                                <Tabler
                                td={"14"}
                                td1={"404"}
                                td2={"13"}
                                td3={"Pipe is not activated for the partner user, Please contact service provider"}
                                />
                                <Tabler
                                td={"15"}
                                td1={"401"}
                                td2={"15"}
                                td3={"Invalid Partner details"}
                                />
                                <Tabler
                                td={"16"}
                                td1={"401"}
                                td2={"20"}
                                td3={"Unable to decode body data"}
                                />
                                <Tabler
                                td={"17"}
                                td1={"401"}
                                td2={"9"}
                                td3={"Unable to process balance request"}
                                />
                                <Tabler
                                td={"18"}
                                td1={"401"}
                                td2={"10"}
                                td3={"Invalid JWT Token sent in Header. OR Signature verification failed"}
                                />
                                <Tabler
                                td={"19"}
                                td1={"401"}
                                td2={"8"}
                                td3={"Validations Error"}
                                />
                                <Tabler
                                td={"20"}
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
                            <a className="left" href="/aepsministatement"><i className="fa-solid fa-arrow-left-long"></i>Ministatement</a>
                            <a className="right" href="/aepsbanklist">Bank List<i className="fa-solid fa-arrow-right-long"></i></a> 
                        </div>
            </div>
        </div>
    )
}