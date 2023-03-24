export function Introduction(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-7">
                    <div className="head">
                        <h2>INTRODUCTION</h2>
                        <p>MINI ATM provide Cash withdraw and Balance enquiry through ATM using mobile APP</p>
                        <p>PROCESS:</p>
                        <p>1- Merchant Onboarding</p>
                        <p>2- Integraion of SDK into APP</p>
                    </div>
                    <div className="head my-4">
                        <h6>NOTE</h6>
                        <p>Threeway api hit for Cashwithdraw txn is mandatory for same day txn ,</p>
                        <p>Only threeway hit success transaction will be settled to partner wallet,</p>
                        <p>Otherwise refunded to customer card account.</p>
                        <h5>THREEWAY RECON PROCESS</h5>
                        <h6><small>Three-way Acknowledgement is mandatory for ALL M-ATM transactions. We will settle Fund to API partners wallet only in the below cases:</small></h6>
                        <ol>
                            <li>Case in which Success at Partner end, Success at PaySprint end and partner give success Acknowledgement using 3-way Acknowledgement.</li>
                            <li>In case of receiving one-time Successful Acknowledgement of transactions that are Successful at PaySprint we will settle the fund (irrespective of Failure Response earlier within the same day)</li>
                        </ol>
                        <h6><small>All other cases in which Fund will be Refund Back to Customer Bank account mentioned below for reference:</small></h6>
                        <ol>
                            <li>Case in which Success at Partner end, Success at PaySprint end and give Failed Acknowledgement using 3-way Acknowledgement. Fund will be refunded to the Customer.</li>
                            <li>Case in which Failed at Partner end, Success at PaySprint and give Failed Acknowledgement using 3-way Acknowledgement API. Fund will be refunded to the Customer.</li>
                            <li>Case in which Failed at Partner end, Failed at PaySprint and gave Failed Acknowledgement using 3-way Acknowledgement API. Fund will be refunded to the Customer if the amount debited from the customer account.</li>
                            <li>Case in which Failed at Partner end, Failed at PaySprint and gave Success Acknowledgement using 3-way Acknowledgement API. Fund will be refunded to the Customer because Failed at the PaySprint end if the amount debited from the customer account.</li>
                            <li>Case in which Success at Paysprint and Partner do not hit any Acknowledge using 3-way Acknowledgement API within the same date, Transaction will be reversed to customer account as Credit adjustment</li>
                        </ol>
                        <p>Note- Partner do not have to handle transaction response on the basis of 3-way Acknowledgement API as this API is only for acknowledgement of Partner's transaction Status to Paysprint (used only for reconciliation). If partners update the response of their transaction on the basis of a 3-way API, then the partner is liable for any financial loss. 3-way API hit is mandatory for all transactions.</p>
                        <p>Kindly make sure that you are hitting the Three-way Acknowledgement</p>
                        <h5>Implementation Rquirements</h5>
                        <h6>Step 1:</h6>
                        <p>Add .arr file in libs</p>
                        <p>finopayment-release.aar</p>
                        <p>finosdkLive.aar</p>
                        <p>Example :</p>
                        <pre>
                        <code>
                        project level<br/>
                        |<br/>
                        |--ProjectName(MyProjectName)<br/>
                        |<br/>
                        |--app<br/>
                        |<br/>
                        |--libs<br/>
                        |<br/>
                        |--finopayment-release.aar<br/>
                        |--finosdkLive.aar
                        </code>
                        </pre>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}