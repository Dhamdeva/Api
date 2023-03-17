import { Head, Partner } from "../home/Homepage";

export function Dmtbanklist(){
    return(
        <div className="container-fluid p-0">
            <div className="col-md-8">
                <Head
                h2={"DMT BANK LIST"}
                />
                <div className="head my-4">
                    <a href="/">DMT BANK LIST</a>
                    <Partner/>
                    <ul>
                        <li>Bank Id and name is provided corresponding to the banks.</li>
                        <li>Partner should get the IFSC code by themselves</li>
                    </ul>
                </div>
                <div className="col-md-12">
                    <a className="left" href="/dmtpostman"><i className="fa-solid fa-arrow-left-long"></i>Postman Collection</a>
                    <a className="right" href="/remitter">Remitter<i className="fa-solid fa-arrow-right-long"></i></a> 
                </div>
            </div>
        </div>
    )
}