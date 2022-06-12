import React from 'react';
import './Dummy1.css';
const Dummy1 = () => {
    return ( 
        <div style={{boxSizing: "border-box"}}>
            <p>Hello</p><h1>Hello</h1>
        <div id='login-form' className='login-page'>
            <div className="form-box">
                {/* <a href="#" className="modal-close">X</a> */}
                <div className='button-box'>
                    <div id='btn'></div>
                    <button type='button'className='toggle-btn' id="id1" style={{marginRight: "30px"}}>One-Time</button>
                    <button type='button' className='toggle-btn' id="id2">Monthly</button>
                </div>
                <form id='login' className='input-group-login'>
                    <h3 >Pledge Amount</h3>
                    <div className="leftside">
                        <label className="labelexpanded"> 
                            <input type="radio" name="targetgroup" /> 
                                <div className="radio-btns"> 
                                    <p> Amount </p> 
                                </div>
                        </label>
                        
                        
                        <label className="labelexpanded"> 
                            <input type="radio" name="targetgroup"/> <div className="radio-btns">  <p> Amount  </p> </div> 
                        </label>
                        
                        <label className="labelexpanded">
                            <input type="radio" name="targetgroup"/> <div className="radio-btns" style={{marginTop: "0"}}> <p> Amount </p> </div> 
                        </label>
                        
                        <label className="labelexpanded"> 
                            <input type="radio" name="targetgroup"checked /> <div className="radio-btns" style={{marginTop: "0"}}> <p>Amount </p> </div>
                        </label>
                    </div>

                    <input type='number'className='input-field'placeholder='Custom Amount' required />

                    <h3 style={{margin: "20px 0px"}}>Personal Details</h3>
                    <input type='text'className='input-field'placeholder='First Name' required style={{width: "49%", marginRight: "6px"}} />
                    <input type='text'className='input-field'placeholder='Last Name ' required style={{width: "49%"}} />
                    <input type='email'className='input-field'placeholder='Email Id' required />
                    <input type='number'className='input-field'placeholder='Phone Number' required />
                    <input type='date'className='input-field'placeholder='DOB' required /> 
                    <button type='submit'className='submit-btn'>Donate</button>
		        </form>
                
            </div>
        </div>
        </div>
     );
}
 
export default Dummy1;