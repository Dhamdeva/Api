import { Head } from "./Homepage";

export function Getting(){
    return(
        <div className="container-fluid">
            <div className="col-md-8">
                <Head
                h2={"Getting Started"}
                p={"PayPe for Developers"}
                p2={"A brief overview of PayPe's services, API stack, and tools for developers."}
                />
                <div className="head my-5">
                    <p>Welcome to the world of APIs i.e. PayPe, a unified open API platform that checks all the pointers below</p>
                    <ul>
                        <li>Reduces Time to Market</li>
                        <li>Ensures Uniformity</li>
                        <li>Improves Data Analytics</li>
                        <li>High Scalability</li>
                    </ul>
                    <p>PayPe offers developers the ability to build a vast number of use cases leveraging our REST API’s and Entrepreneur’s, Startup companies, Banking partners, NBFCs, MSME’s & Enterprises to deploy these solutions. PayPe is a NexGen Banking fintech company offering a Unified Open API Platform. We are working closely with Banks & Travel Partners to offer various innovative Digital banking & Travelling API solutions to end customers from Startups, Entrepreneurs, MSMEs, BC’s, NBFC’s & Enterprises.</p>
                    <p>At PayPe we are working with Banks & Travel partners to provide various products as an API to B2B partners. Banks & Travel partners will continue to be the custodian of the customer and of the various banking products and services, where PayPe will create larger consumer adoption. PayPe challenges the conventional transaction experiences by offering its customers a single-unified platform with myriad solutions for complete support. Through its partnerships with best-of-breed, it aims to provide businesses with an array of products and solutions.</p>
                    <p>At PayPe, we are pioneering strong partnerships with the banking & travelling ecosystem and provide Unified Open API Platform that would transform how Bharat transacts and leads to larger consumer adoption, interface, and delight. Need your support in initiating Travel Booking API like Bus Booking and many more from Red Bus. Please help to arrange calls and get integration on priority basis With PayPe, a number of solutions have come together to create a platform that offers advantages for startups and the entrepreneurs behind them as well as MSMEs, NBFCs and others. Some of the most common benefits include:</p>
                    <ul>
                        <li>An Open Platform that Brings All the Solutions Seamlessly Together</li>
                        <li>Faster and More Wholesome Integration</li>
                        <li>Paperless Onboarding</li>
                        <li>Choose Your Bank</li>
                        <li>A Number of Value Added Services</li>
                        <li>Customer Support with a Dedicated Team</li>
                        <li>Wide Ranging Features on a Single Dashboard</li>
                        <li>Plug and Play Model for Greater eValue</li>
                        <li>Common Wallet for all Transactions, Checks and Balances</li>
                    </ul>
                    <p>Our wide ranging solutions include:</p>
                    <ul>
                        <li>Easy Payouts with IMPS and NEFT for a number of payment needs</li>
                        <li>An Eye on Cash Management with AEPS so that withdrawals, balance checks and more become a breeze</li>
                        <li>Bill Payments Solutions with BBPS technology and Fastag for Bill Collections</li>
                        <li>Micro ATM wherever you go for instant deposits and withdrawals</li>
                        <li>Recharge everything from the phone to the TV with ease</li>
                        <li>Verify within seconds thanks to integration of email, GST, documents and more</li>
                        <li>Get your KYC and Insurance in Order</li>
                        <li>Open a Bank Account with zero hassles</li>
                        <li>Tap into a World of Possibilities with Loans and Fiscal Solutions</li>
                        <li>Book Flights, Hotels and More on the Same Platform!</li>
                    </ul>
                </div>
                <div>
                    <a className="left" href="/"><i className="fa-solid fa-arrow-left-long"></i>Home</a>
                    <a className="right" href="/authentication">Authentication<i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    )
}