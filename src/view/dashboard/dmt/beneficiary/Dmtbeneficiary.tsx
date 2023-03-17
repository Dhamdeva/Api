import { Head } from "../../home/Homepage";

export function Dmtbeneficiary(){
    return(
        <div className="container-fluid p-0">
            <div className="col-md-8">
                <Head
                h2={"Beneficiary"}
                p={"Beneficiary is the bank account who receives the funds remitted by the remitter mobile number."}
                />
                <div className="head my-4">
                    <p>A beneficiary is someone to whom one can transfer money or to be able to transfer money, customer must add a beneficiary using the beneficiary's bank-account details.</p>
                    <p>By using our APIs, you can Create, Delete and Fetch beneficiary's for your customers.</p>
                </div>
                <div className="col-md-12">
                    <a className="left" href="/dmtregisterremitter"><i className="fa-solid fa-arrow-left-long"></i>Register Remitter</a>
                    <a className="right" href="/dmtregisterbeneficiary">Register Beneficiary<i className="fa-solid fa-arrow-right-long"></i></a> 
                </div>
            </div>
        </div>
    )
}