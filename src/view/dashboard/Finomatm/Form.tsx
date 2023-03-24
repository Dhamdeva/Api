import { event } from "jquery"
import { useState } from "react"

export function Form(){

    const [id,setId]=useState('');
    const [firstname,setFirstName]=useState('');
    const [lastname,setLastName]=useState('');
    const [male,setMale]=useState('');
    const [female,setFemale]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const [city,setCity]=useState('');
    const [state,setState]=useState('');
    const [country,setCountry]=useState('');
    const [code,setCode]=useState('');
    const [summary,setSummary]=useState('');

    const handleSubmit=(event: { preventDefault: () => void }) =>{
        event.preventDefault();
        console.log('Id:', id);
        console.log('FirstName:', firstname);
        console.log('LastName:', lastname);
        console.log('Male:', male);
        console.log('Female:', female);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Address:', address);
        console.log('City:', city);
        console.log('State:', state);
        console.log('Country:', country);
        console.log('Code:', code);
        console.log('Code:', summary);
    }

    

    return(
        <div className="container form" onSubmit={handleSubmit}>
            <h1 className="text-center">Personal Information</h1>
            <div className="row detail my-5">
                <div className="col-md-12 my-2">
                    
                        <input type={'tel'} name='Emloyee_Id'value={id} className="col-12 p-2"  placeholder="Employee ID" onChange={(event) => setId(event.target.value)} />
    
                </div>
                <div className="col-md-6 d-flex my-3">
                    <select className="col-md-2 " >
                            <option value="1">Mr</option>
                            <option value="2">Ms</option>
                    </select>
                    <div className="col-md-10 ">
                        
                            <input type={"text"} className="col-12 p-2" value={firstname} placeholder="FIRST NAME" onChange={(event) =>setFirstName(event.target.value)}/>
                        
                    </div>
                    
                </div>
                <div className="col-md-6 my-3">
                   
                        <input type={"text"} className="col-12 p-2" value={lastname} placeholder="LAST NAME" onChange={(event) =>setLastName(event.target.value)}/>
                   
                </div>
                <div className="d-flex ">
                    <label className="my-3">
                        Gender
                    </label>
                    <div className=" mx-2 my-3">
                    <label className="mx-2" htmlFor="male">
                        Male
                        <input  type="radio" name="gender" id="male" value={male}   onChange={(event) =>setMale(event.target.value)}/>
                    </label>
                    </div>
                    <div className='mx-2 my-3'>
                    <label className="mx-2"  htmlFor="female">
                            Female
                        <input  type="radio" name="gender" id="female"  value={female}  onChange={(event) =>setFemale(event.target.value)}/>
                    </label>
                    </div>
                </div>
                <div className="col-md-6 my-2 d-flex">
                <select className="col-md-2 my-2  ">
                    <option value="+91">+91</option>
                </select>
                    <div className="col-md-10  my-2">
                       <input type={"number"} className="col-12 p-2" value={phone} placeholder="Phone Number" onChange={(event) =>setPhone(event.target.value)}/>
                       
                    </div>
                </div>
                <div className="col-md-6  my-3">
                    
                    <input type={'email'} className="col-12 p-2" placeholder="E-Mail" value={email} onChange={(event) =>setEmail(event.target.value)}/>
                    
                </div>
                <div className="col-md-6 my-2">
                    
                    <input type={"text"} className="col-12 p-2" placeholder="Enter Your Summary" value={summary} onChange={(event) =>setSummary(event.target.value)}/>
                    
                </div>
                <div className="col-md-6 my-2">
                    
                    <input type={"text"} className="col-12 p-2" placeholder="Enter Your Summary" value={summary} onChange={(event) =>setSummary(event.target.value)}/>
                    
                </div>
            </div>
            <div className="row">
                <h3 className="text-center">Address</h3>
                <div className="col-md-6 my-2">
                    <input type={"text"} className="col-12 p-2" placeholder="Address line 1" value={address} onChange={(event) =>setAddress(event.target.value)}/>
                </div>
                <div className="col-md-6 my-2">
                    <input type={'text'} className="col-12 p-2" placeholder="Address line 2" value={address} onChange={(event) =>setAddress(event.target.value)}/>
                </div>
                <div className="col-md-6 my-2">
                    <input type={"text"} className="col-12 p-2" placeholder="City" value={city} onChange={(event) =>setCity(event.target.value)}/>
                </div>
                <div className="col-md-6 my-2">
                    <input type={'text'} className="col-12 p-2" placeholder="State" value={state} onChange={(event) =>setState(event.target.value)}/>
                </div>
                <div className="col-md-6 my-2">
                    <input type={"text"} className="col-12 p-2" placeholder="Country" value={country} onChange={(event) =>setCountry(event.target.value)}/>
                </div>
                <div className="col-md-6 my-2">
                    <input type={'text'} className="col-12 p-2" placeholder="Zip Code"  value={code} onChange={(event) =>setCode(event.target.value)}/>
                </div>
                <div className="col-md-6 button my-2">
                    <button type="submit" className="col-12  p-2">
                        Save
                    </button>
                    </div>
                <div className="col-md-6 button my-2">
                    <button type="submit" className="col-12  p-2">
                        Exit
                    </button>
                </div>
            </div>
        </div>
    )
}