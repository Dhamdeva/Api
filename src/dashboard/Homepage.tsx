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
            <h6>YOUR REQUEST HISTORY</h6>
            <div>
                <p>0 Calls</p>
                
            </div>
        </div>
    )
}