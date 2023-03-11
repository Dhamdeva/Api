import { Head, Partner } from "./Homepage";

export function Dmtintroduction(){
    return(
        <div className="conatiner-fluid">
            <div className="col-md-8">
                <Head
                h2={"INTRODUCTION"}
                p={"Domestic money transfer (DMT) facilitates to send money instantly to any Bank's account holder within India."}
                />
                <div className="head my-4">
                    <p>Domestic Money Transfer is a product that can be used to send money instantly to any Bank's account holder within India.</p>
                    <p>Money Transfer is one of the most in demand services today in India. Large division of the population still do not have access of basic banking services. The substances of banks in rural or semi-urban areas is still very less. To make way to eliminate this deficiency, Paysprint has is agglomeration of major Banks & wallets under a platform of single API to provide our Channel Partner's retail networks to service the money remittance requirements of customers.</p>
                    <Partner />
                    <ul>
                        <li>Only Indian IP will be whitelisted over the production mode. IP which designated outside the India will not be whitelisted as per the compliance.</li>
                        <li>Reference id should be generated from the partner's end. It should be unique and length for the same is 20 digits/string as well.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}