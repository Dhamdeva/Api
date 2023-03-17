import './Homepage.css';

export function Tablex(){
    return(
        <div className='container'>
            <h2 className='fw-bold text-center'>Schedule of Charges</h2>
            <div className='table my-5'>
                <table className='table'>
                    <thead>
                    <tr className='text-center'>
                        <th colSpan={5}>Schedule of Charges Walk in Customers</th>
                    </tr>
                    <tr className='text-center'>
                        <th colSpan={5}>For 2021</th>
                    </tr>
                    <tr>
                        <th>S.NO</th>
                        <th colSpan={2}>Service</th>
                        <th>Amount slab</th>
                        <th>Fee/Charges(₹)</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Spice Money PPI</td>
                            <td>Percentage of money remitted</td>
                            <td>NA</td>
                            <td>Min Rs 10 <br/>Max upto 0.70% or Rs 175 whichever is lower (per 25000 Txn)</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>DMT BC-Model</td>
                            <td>Percentage of money remitted</td>
                            <td>NA</td>
                            <td>Min Rs 10 <br/>Max upto 1% or Rs 50 whichever is lower (per 5000 Txn)</td>
                        </tr>
                        <tr>
                            <td rowSpan={3}>3</td>
                            <td rowSpan={3}>Aeps</td>
                            <td>Balance Enquiry</td>
                            <td>NA</td>
                            <td>₹ 0.00</td>
                        </tr>
                        <tr>
                            <td>Cash Withdrawal</td>
                            <td>NA</td>
                            <td>₹ 0.00</td>
                        </tr>
                        <tr>
                            <td>Cash Deposit</td>
                            <td>NA</td>
                            <td>₹ 0.00</td>
                        </tr>
                        <tr>
                            <td rowSpan={18} >4</td>
                            <td rowSpan={18}>Bharat BillPay</td>
                            <td rowSpan={3}>Eletricity</td>
                            <td>Upto ₹ 1,000</td>
                            <td>₹ 5.90</td>
                        </tr>
                        <tr>
                            <td>1000-1999</td>
                            <td>₹ 17.70</td>
                        </tr>
                        <tr>
                            <td>=₹ 2000</td>
                            <td>₹ 29.50</td>
                        </tr>
                        <tr>
                            <td rowSpan={3} >Gas</td>
                            <td>Upto ₹ 1,000</td>
                            <td>₹ 5.90</td>
                        </tr>
                        <tr>
                            <td>1000-1999</td>
                            <td>₹ 17.70</td>
                        </tr>
                        <tr>
                            <td>=₹ 2000</td>
                            <td>₹ 29.50</td>
                        </tr>
                        <tr>
                            <td rowSpan={3}>Water</td>
                            <td>Upto ₹ 1,000</td>
                            <td>₹ 5.90</td>
                        </tr>
                        <tr>
                            <td>1000-1999</td>
                            <td>₹ 17.70</td>
                        </tr>
                        <tr>
                            <td>=₹ 2000</td>
                            <td>₹ 29.50</td>
                        </tr>
                        <tr>
                            <td rowSpan={3} >Lanline</td>
                            <td>Upto ₹ 1,000</td>
                            <td>₹ 5.90</td>
                        </tr>
                        <tr>
                            <td>1000-1999</td>
                            <td>₹ 17.70</td>
                        </tr>
                        <tr>
                            <td>=₹ 2000</td>
                            <td>₹ 29.50</td>
                        </tr>
                        <tr>
                            <td rowSpan={3}>Broadband</td>
                            <td>Upto ₹ 1,000</td>
                            <td>₹ 5.90</td>
                        </tr>
                        <tr>
                            <td>1000-1999</td>
                            <td>₹ 17.70</td>
                        </tr>
                        <tr>
                            <td>=₹ 2000</td>
                            <td>₹ 29.50</td>
                        </tr>
                        <tr>
                            <td  rowSpan={3}>Mobile Postpaid</td>
                            <td>Upto ₹ 1,000</td>
                            <td>₹ 5.90</td>
                        </tr>
                        <tr>
                            <td>1000-1999</td>
                            <td>₹ 17.70</td>
                        </tr>
                        <tr>
                            <td>=₹ 2000</td>
                            <td>₹ 29.50</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>DTH</td>
                            <td>all Operator</td>
                            <td>NA</td>
                            <td>₹ 0.00</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>6</td>
                            <td rowSpan={2}>MATM</td>
                            <td>Cash Withdrawal</td>
                            <td>NA</td>
                            <td>₹ 0.00</td>
                        </tr>
                        <tr>
                            <td>Balance Enquiry</td>
                            <td>NA</td>
                            <td>₹ 0.00</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>mPOS</td>
                            <td>Cash Withdrawal</td>
                            <td>NA</td>
                            <td>₹ 0.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}