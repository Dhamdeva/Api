import { Head, Tableofcontent } from "../home/Homepage";

export function Rdservice(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-7">
                    <Head
                    h2={"RD Service"}
                    />
                    <div className="head my-4">
                        <h5>Download Links for major RD service</h5>
                        <h6>MANTRA RD Service</h6>
                        <ul>
                            <li><a>MantraRDService_1.0.4.exe</a></li>
                            <li><a>MFS100Driver_9.2.0.0.exe</a></li>
                        </ul>
                        <h6>MANTRA IRIS RD Service</h6>
                        <ul>
                            <li><a>MantraRDServiceIris_1.0.3.exe</a></li>
                            <li><a>MIS100V2Driver.exe</a></li>
                        </ul>
                        <h6>MORPHO RD Service</h6>
                        <ul>
                            <li><a >MorphoRd.zip</a></li>
                        </ul>
                        <h6>NEXT RD Service</h6>
                        <ul>
                            <li><a >NEXTRdservice.zip</a></li>
                        </ul>
                        <h6>PRECIESION RD Service</h6>
                        <ul>
                            <li><a >Precisionrdservice.zip</a></li>
                        </ul>
                        <h6>SECUGEN RD Service</h6>
                        <ul>
                            <li><a >SECUGEN.zip</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-5">
                        <Tableofcontent
                        a={"Download Links for major RD service"}
                        />
                    </div>

                    <div className="col-md-7">
                            <a className="left" href="/onboardingstatus"><i className="fa-solid fa-arrow-left-long"></i>Onboarding status check for pipe wise</a>
                            <a className="right" href="/aepsencryption">Encryption Body Technique<i className="fa-solid fa-arrow-right-long"></i></a> 
                    </div>
            </div>
        </div>
    )
}