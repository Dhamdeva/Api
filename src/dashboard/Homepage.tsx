import { useState } from "react"

export function Tablehead(props:any){
    return(
        <thead>
            <tr>
                <th>{props.th}</th>
                <th>{props.th1}</th>
                <th>{props.th2}</th>
            </tr>
        </thead>
    )
}

export function Table(props:any){
    return(
        <tr>
            <td>{props.td}</td>
            <td>{props.td1}</td>
            <td>{props.td2}</td>
        </tr>
    )
}

export function Head(props:any){
    return(
        <div className="head">
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
            <p><small>{props.p1}</small></p>
            <p>{props.p2}</p>
        </div>
    )
}

export function Tableofcontent(props:any){
    return(
        <div>
            <h6>Table Of Contents</h6>
            <ul>
                <a>{props.a}</a>
                <a>{props.a1}</a>
                <a>{props.a2}</a>
                <a>{props.a3}</a>
                <a>{props.a4}</a>
                <a>{props.a5}</a>                
            </ul>
        </div>
    )
}

export function Navbar(props:any){
    return(
        <div >
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link disabled" >PayPe</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Getting Started</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/authentication">Authentication</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/uatcredentails">UAT Credentials</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" >Balance</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/creditbalance">Main Balance(Credit Balance)</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/debitbalance">Cash Balance(Debit Balance)</a>
                </li>
            </ul>
         </div>
    )
}

export function Request(props:any){
    return(
        <div>
            <h6><small> YOUR REQUEST HISTORY </small></h6>
            <div className="request ">
                <div className="d-flex p-2">
                    <p>0 Calls</p>
                    <select className=" mb-3 days" aria-label=".form-select-lg example">
                        <option value="2">7 Days</option>
                        <option value="1">1 Days</option>
                        <option value="3">30 Days</option>
                    </select>
                </div>
                <p><small>Your API calls will appear here. Make a request to get started!</small></p>
            </div>
        </div>
    )
}

export function Bodyparams(props:any){
    return(
        <div>
            <div className="d-flex body-param p-2">
                <h6 className="fw-bold">{props.h61}</h6>
                <p><small>{props.p}</small></p>
                <input className="body" type={'text'} placeholder={props.place} />
            </div>
        </div>
    )
}

export function Tableheader(props:any){
    return(
        <thead>
            <tr>
                <th>{props.th}</th>
                <th>{props.th1}</th>
                <th>{props.th2}</th>
                <th>{props.th3}</th>
            </tr>
        </thead>
    )
}

export function Tabler(props:any){
    return(
        <tr>
            <td>{props.td}</td>
            <td>{props.td1}</td>
            <td>{props.td2}</td>
            <td>{props.td3}</td>
        </tr>
    )
}

export function Response(props:any){
    return(
        <div className="d-flex body-param p-2">
            <i className="fa-solid fa-circle"></i>
            <p className="fw-bold">200</p>
            <i className="fa-solid fas fa-down-left-and-up-right-to-center"></i>
        </div>
    )
}

export function Language(props:any){
    return(
        <div>
        <ul className="nav nav-pills mb-3 row justify-content-around" id="pills-tab" role="tablist">
            <li className="nav-item col-md-2  col-4" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                <img className="img-fluid" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/coding-490-815233.png?f=avif&w=128" alt="."/>
                    <h6><small> Shell</small></h6>
                </button>
            </li>
            <li className="nav-item col-md-2 col-4" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                <img className="img-fluid" src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png?f=avif&w=128" alt="."/>
                    <h6><small>Nodejs</small></h6>
                </button>
            </li>
            <li className="nav-item col-md-2 col-4" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                <img className="img-fluid" src="https://cdn.iconscout.com/icon/free/png-256/ruby-46-1175101.png?f=avif&w=128" alt="."/>
                    <h6><small>Ruby</small></h6>
                </button>
            </li>
            <li className="nav-item col-md-2 col-4 " role="presentation">
                <button className="nav-link" id="pills-php-tab" data-bs-toggle="pill" data-bs-target="#pills-php" type="button" role="tab" aria-controls="pills-php" aria-selected="false">
                <img className="img-fluid" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/php-75-502515.png?f=avif&w=256" alt="."/>
                    <h6><small>Php</small></h6>
                </button>
            </li>
            <li className="nav-item col-md-2 col-4" role="presentation">
                <button className="nav-link" id="pills-python-tab" data-bs-toggle="pill" data-bs-target="#pills-python" type="button" role="tab" aria-controls="pills-pyhton" aria-selected="false">
                    <img className="img-fluid" src="https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png?f=avif&w=128" alt="."/>
                    <h6><small>Python</small></h6>
                </button>
            </li>
        </ul>
            <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="curl p-3">
                    <h6>CURL</h6>
                    <div className="d-flex my-3">
                        <h6>Request</h6>
                        <button>Examples</button>
                    </div>
                    <div className="post">
                        1.curl --request POST \<br/>
                        2.urlhttps://paysprint.in/serviceapi/api/v1/service/balance/balance/mainbalance\<br/>
                        3.header'Authorisedkey:MzNkYzllOGJmZGVhNWRkZTc1YTgzM2Y5ZDFlY2EyZTQ='\<br/>
                        4.header'Content-Type:application/json'\<br/>
                        5.header'Token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJQQVlTUFJJTlQiLCJ0aW1lc3RhbXAiOjE2MTAwMjYzMzgsInBhcnRuZXJJZCI6IlBTMDAxIiwicHJvZHVjdCI6IldBTExFVCIsInJlcWlkIjoxNjEwMDI2MzM4fQ.buzD40O8X_41RmJ0PCYbBYx3IBlsmNb9iVmrVH9Ix64'\<br/>
                        6.header'accept:application/json'<br/>
                    </div>
                    <button ><i className="fa-regular fa-copy mt-3" ></i></button>
                </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" >..3.</div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" >..1.</div>
            <div className="tab-pane fade" id="pills-php" role="tabpanel" aria-labelledby="pills-php-tab" >..41.</div>
            <div className="tab-pane fade" id="pills-python" role="tabpanel" aria-labelledby="pills-python-tab" >.5.1.</div>
            
            </div>
            </div>
    )
}