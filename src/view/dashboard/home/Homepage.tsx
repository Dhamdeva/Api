import { useRef } from "react";





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
        <div className="head ">
            <h2 className="fw-bold">{props.h2}</h2>
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


export function Request(_props:any){
    return(
        <div>
            <h6><small> YOUR REQUEST HISTORY </small></h6>
            <div className="request p-2">
                <div className="d-flex ">
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
            <div className="d-flex flex-wrap body-param p-2">
                <h6 className="fw-bold">{props.h61}</h6>
                <p className="mx-2"><small>{props.p}</small></p>
                <div>
                <input className="body" type={'text'} placeholder={props.place} />
                </div>
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

export function Response(_props:any){
    return(
        <div className="d-flex flex-wrap body-param p-2">
            <i className="fa-solid fa-circle"></i>
            <p className="fw-bold mx-1">200</p>
            <i className="fa-solid fas fa-down-left-and-up-right-to-center"></i>
        </div>
    )
}


export function Language(this: any, props:any){
    const textToCopyRef = useRef<HTMLDivElement>(null);

    const handleClick = async () => {
        const textToCopy = textToCopyRef.current?.textContent!;
        try {
          await navigator.clipboard.writeText(textToCopy);
          alert('Text copied!');
        } catch (err) {
          alert('Failed to copy text: ');
        }
      }
      
            
    return(
        <div className="mx-3">
        <ul className="nav nav-pills mb-3 row " id="pills-tab" role="tablist">
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
            <li className="nav-item dropdown col-md-3">
            <a className="nav-link"  role="button" ><i className="fa-solid fa-ellipsis-vertical"></i></a>
            <ul className="dropdown-menu language-dropdown">
            <li className="nav-item " role="presentation">
                <a className="dropdown-item ">
                <button className="nav-link d-flex" id="pills-python-tab" data-bs-toggle="pill" data-bs-target="#pills-python" type="button" role="tab" aria-controls="pills-pyhton" aria-selected="false">
                    <img className="img-fluid" src="https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png?f=avif&w=128" alt="."/>
                    <h6 className="mx-4dhamo"><small>Python</small></h6>
                </button>
                </a>
            </li>
            </ul>
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
                    <div className="jumbotron">
                    
                        <kbd ref={textToCopyRef}>
                            <ol >
                                 <li>curl --request POST \</li>
                                <li>urlhttps://paysprint.in/serviceapi/api/v1/service/balance/balance/mainbalance\</li>
                                <li>header'Authorisedkey:MzNkYzllOGJmZGVhNWRkZTc1YTgzM2Y5ZDFlY2EyZTQ='\</li>
                                <li>header'Content-Type:application/json'\</li>
                                <li>header'Token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJQQVlTUFJJTlQiLCJ0aW1lc3RhbXAiOjE2MTAwMjYzMzgsInBhcnRuZXJJZCI6IlBTMDAxIiwicHJvZHVjdCI6IldBTExFVCIsInJlcWlkIjoxNjEwMDI2MzM4fQ.buzD40O8X_41RmJ0PCYbBYx3IBlsmNb9iVmrVH9Ix64'\</li>
                                <li>header'accept:application/json'</li> 
                            </ol> 
                        </kbd>  &nbsp;&nbsp;
                    </div>
                    </div>
                    <button className="copyButton btn btn-default" id="copyButtonId"  
                            data-clipboard-action="copy" data-clipboard-target="kbd#copy" onClick={handleClick}>
                             <i className="far fa-copy"></i>
                        </button>
                </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" >
            <div className="curl p-3">
                    <h6>CURL</h6>
                    <div className="d-flex my-3">
                        <h6>Request</h6>
                        <button>Examples</button>
                    </div>
                    <div className="post" >
                    <div className="jumbotron">
                        <kbd ref={textToCopyRef}>
                            <ol >
                                <li>curl --request POST \</li>
                                <li>urlhttps://paysprint.in/serviceapi/api/v1/service/balance/balance/mainbalance\</li>
                                <li>header'Authorisedkey:MzNkYzllOGJmZGVhNWRkZTc1YTgzM2Y5ZDFlY2EyZTQ='\</li>
                                <li>header'Content-Type:application/json'\</li>
                                <li>header'Token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJQQVlTUFJJTlQiLCJ0aW1lc3RhbXAiOjE2MTAwMjYzMzgsInBhcnRuZXJJZCI6IlBTMDAxIiwicHJvZHVjdCI6IldBTExFVCIsInJlcWlkIjoxNjEwMDI2MzM4fQ.buzD40O8X_41RmJ0PCYbBYx3IBlsmNb9iVmrVH9Ix64'\</li>
                                <li>header'accept:application/json'</li>
                            </ol> 
                        </kbd>  &nbsp;&nbsp;
                    </div>
                    </div>
                    <button className="copyButton btn btn-default" id="copyButtonId"  
                            data-clipboard-action="copy" data-clipboard-target="kbd#copy">
                             <i className="far fa-copy"></i>
                        </button>
                </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" >
            <div className="curl p-3">
                    <h6>CURL</h6>
                    <div className="d-flex my-3">
                        <h6>Request</h6>
                        <button>Examples</button>
                    </div>
                    <div className="post" >
                    <div className="jumbotron">
                        <kbd ref={textToCopyRef}>
                            <ol >
                                <li>curl --request POST \</li>
                                <li>urlhttps://paysprint.in/serviceapi/api/v1/service/balance/balance/mainbalance\</li>
                                <li>header'Authorisedkey:MzNkYzllOGJmZGVhNWRkZTc1YTgzM2Y5ZDFlY2EyZTQ='\</li>
                                <li>header'Content-Type:application/json'\</li>
                                <li>header'Token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJQQVlTUFJJTlQiLCJ0aW1lc3RhbXAiOjE2MTAwMjYzMzgsInBhcnRuZXJJZCI6IlBTMDAxIiwicHJvZHVjdCI6IldBTExFVCIsInJlcWlkIjoxNjEwMDI2MzM4fQ.buzD40O8X_41RmJ0PCYbBYx3IBlsmNb9iVmrVH9Ix64'\</li>
                                <li>header'accept:application/json'</li>
                            </ol> 
                        </kbd>  &nbsp;&nbsp;
                    </div>
                    </div>
                    <button className="copyButton btn btn-default" id="copyButtonId"  
                            data-clipboard-action="copy" data-clipboard-target="kbd#copy">
                             <i className="far fa-copy"></i>
                        </button>
                </div>
            </div>
            <div className="tab-pane fade" id="pills-php" role="tabpanel" aria-labelledby="pills-php-tab" >
            <div className="curl p-3">
                    <h6>CURL</h6>
                    <div className="d-flex my-3">
                        <h6>Request</h6>
                        <button>Examples</button>
                    </div>
                    <div className="post" >
                    <div className="jumbotron">
                        <kbd ref={textToCopyRef}>
                            <ol >
                                <li>curl --request POST \</li>
                                <li>urlhttps://paysprint.in/serviceapi/api/v1/service/balance/balance/mainbalance\</li>
                                <li>header'Authorisedkey:MzNkYzllOGJmZGVhNWRkZTc1YTgzM2Y5ZDFlY2EyZTQ='\</li>
                                <li>header'Content-Type:application/json'\</li>
                                <li>header'Token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJQQVlTUFJJTlQiLCJ0aW1lc3RhbXAiOjE2MTAwMjYzMzgsInBhcnRuZXJJZCI6IlBTMDAxIiwicHJvZHVjdCI6IldBTExFVCIsInJlcWlkIjoxNjEwMDI2MzM4fQ.buzD40O8X_41RmJ0PCYbBYx3IBlsmNb9iVmrVH9Ix64'\</li>
                                <li>header'accept:application/json'</li>
                            </ol> 
                        </kbd>  &nbsp;&nbsp;
                    </div>
                    </div>
                    <button className="copyButton btn btn-default" id="copyButtonId"  
                            data-clipboard-action="copy" data-clipboard-target="kbd#copy">
                             <i className="far fa-copy"></i>
                        </button>
                </div>
            </div>
            <div className="tab-pane fade" id="pills-python" role="tabpanel" aria-labelledby="pills-python-tab" >
            <div className="curl p-3">
                    <h6>CURL</h6>
                    <div className="d-flex my-3">
                        <h6>Request</h6>
                        <button>Examples</button>
                    </div>
                    <div className="post" >
                    <div className="jumbotron">
                        <kbd ref={textToCopyRef}>
                            <ol >
                                <li>curl --request POST \</li>
                                <li>urlhttps://paysprint.in/serviceapi/api/v1/service/balance/balance/mainbalance\</li>
                                <li>header'Authorisedkey:MzNkYzllOGJmZGVhNWRkZTc1YTgzM2Y5ZDFlY2EyZTQ='\</li>
                                <li>header'Content-Type:application/json'\</li>
                                <li>header'Token:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJQQVlTUFJJTlQiLCJ0aW1lc3RhbXAiOjE2MTAwMjYzMzgsInBhcnRuZXJJZCI6IlBTMDAxIiwicHJvZHVjdCI6IldBTExFVCIsInJlcWlkIjoxNjEwMDI2MzM4fQ.buzD40O8X_41RmJ0PCYbBYx3IBlsmNb9iVmrVH9Ix64'\</li>
                                <li>header'accept:application/json'</li>
                            </ol> 
                        </kbd>  &nbsp;&nbsp;
                    </div>
                    </div>
                    <button className="copyButton btn btn-default" id="copyButtonId"  
                            data-clipboard-action="copy" data-clipboard-target="kbd#copy">
                             <i className="far fa-copy"></i>
                        </button>
                </div>
            </div> 
            </div>
            </div>
    )
}

export function Partner(props:any){
    return(
        <div className="partner p-3 my-3">
            <h5><i  className="fa-solid fa-book p-1"></i>PARTNER SHOULD KNOW !</h5>
            <p>{props.p}</p>
            <p>{props.p1}</p>
        </div>
    )
    }

    export function Tryit(props:any){
        return(
            <div className="tryit my-3 p-2">
                <div className="head d-flex my-3">
                <h6>RESPONSE</h6>
                <button className="exam">Examples</button>
                </div>
                <p>Click <button>Try it</button> to start a request and see the response here! Or choose an example: </p>
                <p className="text-center">application/json</p>
                <div className="d-flex text-center justify-content-evenly mx-5">
                    <button className="result ">200 -Result</button>
                    <button className="result">200 -Result</button>
                </div>
                <p className="text-center">text/plain</p>
            </div>
        )
    }

export function Kbd(props:any){
    return(
        <div>
            <p>{props.p}</p>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
            <p>{props.p3}</p>
            <p>{props.p4}</p>
            <p>{props.p5}</p>
            <p>{props.p6}</p>
            <p>{props.p7}</p>
            <p>{props.p8}</p>
            <p>{props.p9}</p>
            <p>{props.p10}</p>
            <p>{props.p11}</p>
            <p>{props.p12}</p>
            <p>{props.p13}</p>
            <p>{props.p14}</p>
            <p>{props.p15}</p>
        </div>
    )
}    