import { Head } from "../../home/Homepage";

export function Aepsministatement(){
    return(
        <div className="container-fluid">
            <div className="col-md-7">
                <Head
                h2={"Ministatement"}
                p={"Ministatement"}
                />
                <div className="head my-4">
                    <p>MINIMUM REQUEST TIMEOUT TIME : <strong>180 second</strong></p>
                    
                </div>
                <div className="col-md-12">
                            <a className="left" href="/aepswithdraw"><i className="fa-solid fa-arrow-left-long"></i>Withdraw</a>
                            <a className="right" href="/aepsministatementaeps">Mini Statement<i className="fa-solid fa-arrow-right-long"></i></a> 
                    </div>
            </div>
        </div>
    )
}