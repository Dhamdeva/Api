import { Head } from "../../home/Homepage";

export function Aepsenquiry(){
    return(
        <div className="container-fluid">
            <div className="col-md-7">
                <Head
                h2={"Enquiry"}
                />
                <div className="head my-4">
                    <p>MINIMUM REQUEST TIMEOUT TIME : <strong>180 second</strong></p>
                    <h6>RESPONSE HANDLING</h6>
                    <p>SUCCESS</p>
                    <p>--- Status = true and response_code = 1</p>
                    <p>FAILED</p>
                    <p>--- Status = false and response_code = 0</p>
                    <p>TIMEOUT</p>
                    <p>--- Status = false and response_code = 2</p>
                    
                    <p>Device mapping issue</p>
                    <p>--- Status = false and response_code = 26</p>

                    <p>-- status = false and response_code (4,3,5,18,)</p>
                </div>
                <div className="col-md-12">
                            <a className="left" href="/aepsencryption"><i className="fa-solid fa-arrow-left-long"></i>Encryption Body Technique</a>
                            <a className="right" href="/aepsenquiryaeps">Enquiry<i className="fa-solid fa-arrow-right-long"></i></a> 
                    </div>
            </div>
        </div>
    )
}