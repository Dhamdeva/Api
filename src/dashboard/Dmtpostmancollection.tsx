import { Head } from "./Homepage";

export function Dmtpostmancollection(){
    return(
        <div className="container-fluid">
            <div className="col-md-8">
                <Head
                h2={"Postman Collection"}
                />
                <div className="head my-4">
                    <a href="/">Download Sample Postman Collection</a>
                </div>
                <div className="col-md-12">
                    <a className="left" href="/dmtintroduction"><i className="fa-solid fa-arrow-left-long"></i>Introduction</a>
                    <a className="right" href="/dmtbanklist">DMT BANK LIST<i className="fa-solid fa-arrow-right-long"></i></a> 
                </div>
            </div>
        </div>
        
    )
}