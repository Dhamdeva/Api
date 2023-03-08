import { Head } from "./Homepage";

export function Creditbalance(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-7">
                    <Head
                    h2={"Main Balance(Credit Balance)"}
                    p1={"https://paysprint.in/service-api/api/v1/service/balance/balance/mainbalance"}
                    p2={"main balance"}
                    />
                    <div className="head my-5">
                        h
                    </div>
                </div>
            </div>
        </div>
    )
}