import { Head } from "../../home/Homepage";

export function Aepswithdrawl(){
    return(
        <div className="container-fluid">
            <div className="col-md-7">
                <Head
                h2={"Withdrawl"}
                />
                <div className="head my-3">
                    <p>MINIMUM REQUEST TIMEOUT TIME : 180 second</p>
                    <h6>RESPONSE HANDLING</h6>
                    <br/>
                    <p>Query successfully completed.</p>
                    <p>--- Status = true and response_code = 1 ( Hit threeway with success)</p>
                    <p>--- Status = falseand response_code = 0 ( Hit threeway with failed)</p>
                    <p>--- Status = false and response_code = 2 ( Hit Query API )</p>

                    <p>Query not completed.</p>
                    <p>-- status = false and response_code ( 3) (Transaction Not found in system)</p>
                    <p>-- status = false and response_code ( 15,8,20,9,10,11 ) (Bad request, Try again)</p>
                </div>
            </div>
            <div className="col-md-7">
                <a className="left" href="/aepsenquiryaeps"><i className="fa-solid fa-arrow-left-long"></i>Enquiry</a>
                <a className="right" href="/aepswithdraw">Withdraw<i className="fa-solid fa-arrow-right-long"></i></a> 
            </div>
        </div>
    )
}