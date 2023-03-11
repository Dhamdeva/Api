import { Head, Partner } from "./Homepage";

export function Dmtrefund(){
    return(
        <div className="container-fluid">
            <div className="col-md-8">
                <Head
                h2={'Refund'}
                p={"This API is used to get the refund."}
                />
                <div className="head my-4">
                <Partner
                p={"If transaction is failed due to any reason in such cases funds will be refunded in respected wallet along with all charges."}
                p1={"Any transaction who's status is changed as refunded after TAT, will be refunded through OTP using CLAIM REFUND API. For eg HOLD transaction status changed to refunded after TAT."}
                />
                </div>
                <div className="col-md-12">
                    <a className="left" href="/dmttransactionstatus"><i className="fa-solid fa-arrow-left-long"></i>Transaction Status</a>
                    <a className="right" href="/dmtrefundotp">Refund OTP<i className="fa-solid fa-arrow-right-long"></i></a> 
                </div>
            </div>
        </div>
    )
}