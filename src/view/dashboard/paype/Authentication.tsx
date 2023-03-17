import { Head, Tableofcontent } from "../home/Homepage";

export function Authentication(){
    return(
        <div className="conatiner-fluid p-0">
            <div className="row">
                <div className="col-md-8">
                    <Head 
                    h2={"Authentication"}
                    p={"API Security Protocol"}
                    />
                    <div className="head my-5">
                        <p>All API requests must be authenticated with a JWT Token in the request. Your API keys carry many privileges, so be sure to keep them secret!</p>
                        <p>You authenticate to the PayPe API by providing your JWT token in the header of each request.</p>
                        <h4>What is JSON Web Token(JWT)?</h4>
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p>
                        <p>Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
                        <h4>What is the JSON Web Token structure?</h4>
                        <p>In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:</p>
                        <ul>
                            <li>Header</li>
                            <li>Payload</li>
                            <li>Signature</li>
                        </ul>
                        <p>Therefore, a JWT typically looks like the following.</p>
                        <h4>Token Creation using JWT</h4>
                        <p>JWT generation process All APIs will except a JSON Web Tokens (JWT) Token in header value for Authorization. Refer https://jwt.io/ to understand JWT better. JWT signature has to be generated using the partner secret.</p>
                        <p>Timestamp is in seconds and and it will be valid for =5 minutes from current time.</p>
                        <p>AES generation process All body value must be encrypted using AES-128 with the help of key and iv provided by API provider .</p>
                        <h4>IP ADDRESS RESTICTION</h4>
                        <p>We only whitelist Indian IP addresses and server location must be of India only</p>
                        <h4>Authorisedkey</h4>
                        <p>Authorized key is required to pass in UAT but not in Live environment, if partner not using shared IP.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <Tableofcontent
                    a={"What is JSON Web Token(JWT)?"}
                    a1={"What is the JSON Web Token structure?"}
                    a2={'Token Creation using JWT'}
                    a3={"Token Creation Sample Codes"}
                    a4={"IP ADDRESS RESTICTION"}
                    a5={"Authorisedkey"}
                    />
                </div>
                <div className="col-md-8">
                    <a className="left" href="/"><i className="fa-solid fa-arrow-left-long"></i>Getting Started</a>
                    <a className="right" href="/uatcredentials">UAT Credentials<i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    )
}