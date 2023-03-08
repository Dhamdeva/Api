import { Head, Table, Tablehead } from "./Homepage";
import './Homepage.css';

export function Uatcredentails(){
    return(
        <div className="container-fluid">
            <div className="col-md-8">
                <Head
                h2={"UAT Credentials"}
                />
                <div className="head my-5">
                    <div className="table">
                        <table>
                            <Tablehead
                            th={"Title"}
                            th1={"Value"}
                            th2={"Description"}
                            />
                            <tbody>
                                <Table
                                td={"ENVIORMENT"}
                                td1={"UAT"}
                                td2={"User Acceptance Testing"}
                                />
                                <Table
                                td={"JWT KEY"}
                                td1={"UFMwMDEyNGQ2NTliODUzYmViM2I1OWRjMDc2YWNhMTE2M2I1NQ=="}
                                td2={"JWT Token generation key"}
                                />
                                <Table
                                td={"AES ENCRYPTION KEY"}
                                td1={"060e37d1f82cde00"}
                                td2={"For AES Encryption"}
                                />
                                <Table
                                td={"AES ENCRYPTION IV"}
                                td1={"788a4b959058271e"}
                                td2={"For AES Encryption"}
                                />
                                <Table
                                td={"PARTNERID"}
                                td1={"PS001"}
                                td2={"PartnerID"}
                                />
                                <Table
                                td={"AUTHORIZED KEY"}
                                td1={"MzNkYzllOGJmZGVhNWRkZTc1YTgzM2Y5ZDFlY2EyZTQ"}
                                td2={"Authorized key pass in header"}
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <a className="left" href="/authentication"><i className="fa-solid fa-arrow-left-long"></i>Authentication</a>
                    <a className="right" href="/creditbalance">Main Balance(Credit Balance)<i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    )
}