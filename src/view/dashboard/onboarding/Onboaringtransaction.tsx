import { Head, Kbd, Table, Tablehead } from "../home/Homepage";

export function Onboardingtransaction(){
    return(
        <div className="container-fluid">
            <div className="col-md-10">
                <Head
                h2={"ONBOARDING TRANSACTION CALLBACK"}
                p={'Transaction Callback function setup at API partner'}
                />
                <div className="head my-4">
                    <p>Use: transaction callback URl is to inform API partner to deduction amount from merchant as a one time onboarding charges for verification.</p>
                    <p>Description:</p>
                    <p>Transaction callback hit from paysprint to</p>
                    <p>Url = https://transaction_callback_URL</p>
                    <Kbd
                    p={'{"event": "MERCHANT_ONBOARDING",'}
                    p1={'"param": {"merchant_id":"RD3933",                    '}
                    p2={'"partner_id":"PS002",'}
                    p3={'"request_id":"322432",'}
                    p4={'"amount":"10"'}
                    p5={"},"}
                    p6={'"param_inc": "wqewqewqe723432432"}'}
                    />
                    <h5>REQUEST</h5>
                    <div className="table my-3">
                        <table>
                            <Tablehead
                            th={"SNO"}
                            th1={"KEY"}
                            th2={"value"}
                            />
                            <Table
                            td={"1"}
                            td1={"merchant_id"}
                            td2={""}
                            />
                            <Table
                            td={"2"}
                            td1={"partner_id"}
                            td2={""}
                            />
                            <Table
                            td={"3"}
                            td1={"request_id"}
                            td2={""}
                            />
                            <Table
                            td={"4"}
                            td1={"amount"}
                            td2={""}
                            />
                        </table>
                    </div>
                    <h6>RESPONSE</h6>
                    <div className="table my-3">
                        <table>
                            <tbody>
                            <Table
                            td={"1"}
                            td1={"status"}
                            td2={"200 or 400"}
                            />
                             <Table
                            td={"2"}
                            td1={"message"}
                            td2={""}
                            />
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-12">
                            <a className="left" href="/onboardingweb"><i className="fa-solid fa-arrow-left-long"></i>Onboarding Web</a>
                            <a className="right" href="/onboardingmobile">On Boarding Mobile SDK<i className="fa-solid fa-arrow-right-long"></i></a> 
                 </div>
            </div>
        </div>
    )
}