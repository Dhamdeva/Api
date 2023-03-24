import { Head } from "../../home/Homepage";

export function Aepsaadharpay(){
    return(
        <div className="container-fluid">
            <div className="col-md-7">
                <Head
                h2={"AADHAR PAY"}
                />
                <div className="head my-4">
                    <p>MINIMUM REQUEST TIMEOUT TIME : 180 second</p>
                    <p>No threeway api for AADHAR PAY right now</p>
                </div>
                <div className="col-md-12">
                            <a className="left" href="/aepswithdrawthreeway"><i className="fa-solid fa-arrow-left-long"></i>Withdrawl Three Way </a>
                            <a className="right" href="/aepsaadharpayaeps">Aadhar Pay<i className="fa-solid fa-arrow-right-long"></i></a> 
                 </div>
            </div>
        </div>
    )
}