import React from 'react';
import ReactDOM from 'react-dom';
import './Donate.css';
const Donate = () => {

    function login() {
        // var node = document.getElementById("node");
        // var a = ReactDOM.findDOMNode(node);
        // console.log(a);
        // a.style.color = 'green';
        // a.style.fontSize = "x-large";

        var x=document.getElementById('login');
        var xx = ReactDOM.findDOMNode(x);
		var y=document.getElementById('register');
        var yy = ReactDOM.findDOMNode(y);
		var z=document.getElementById('btn');
        var zz = ReactDOM.findDOMNode(z);
        var a=document.getElementById('id1');
        var aa = ReactDOM.findDOMNode(a);
        var b=document.getElementById('id2');
        var bb = ReactDOM.findDOMNode(b);
        aa.style.color='white';
        bb.style.color='black';
        xx.style.left='50px';
        yy.style.left='550px';
        zz.style.left='0px';
      }
    const register = () => {
 
        return (12 + 5);
     
    }
    function modalClose() {
        var close=document.getElementById('login-form');
        var close1 = ReactDOM.findDOMNode(close);
        close1.style.display="none";
    }
    function modalOpen() {
        var open=document.getElementById('login-form');
        var open1 = ReactDOM.findDOMNode(open);
        open1.style.display="block";
    }
    return (  
        // <div>
        //     <button className='loginbtn' type='button' onClick="document.getElementById('login-form').style.display='block'">
        //         Donate Now
        //     </button>
        // </div>
        <div>
        <div>
            <button onClick={modalOpen}>Donate</button>
        </div>
        <div id='login-form' className='login-page'>
            <div className="form-box">
                <a href="#" className="modal-close" title="Close Modal" onClick={modalClose}>X</a>
                <div className='button-box'>
                    <div id='btn'></div>
                    <button type='button'onClick={login} className='toggle-btn' id="id1" style={{marginRight: "30px"}}>One-Time</button>
                    <button type='button'onClick={register} className='toggle-btn' id="id2">Monthly</button>
                </div>
                <form id='login' className='input-group-login'>
                    <h3 >Pledge Amount</h3>
                    <div className="leftside">
                        <label className="labelexpanded"> 
                            <input type="radio" name="targetgroup"> 
                                <div className="radio-btns"> 
                                    <p> Amount </p> 
                                </div>
                            </input>
                        </label>
                        
                        
                        <label className="labelexpanded"> 
                            <input type="radio" name="targetgroup"> <div className="radio-btns">  <p> Amount  </p> </div> </input>
                        </label>
                        
                        <label className="labelexpanded">
                            <input type="radio" name="targetgroup"> <div className="radio-btns" style={{marginTop: "0"}}> <p> Amount </p> </div> </input>
                        </label>
                        
                        <label className="labelexpanded"> 
                            <input type="radio" name="targetgroup"checked> <div className="radio-btns" style={{marginTop: "0"}}> <p>Amount </p> </div> </input>
                        </label>
                    </div>

                    <input type='number'className='input-field'placeholder='Custom Amount' required > </input>

                    <h3 style="margin: 20px 0px;">Personal Details</h3>
                    <input type='text'className='input-field'placeholder='First Name' required style={{width: "49%"}}> </input>
                    <input type='text'className='input-field'placeholder='Last Name ' required style={{width: "49%"}}> </input>
                    <input type='email'className='input-field'placeholder='Email Id' required> </input>
                    <input type='number'className='input-field'placeholder='Phone Number' required > </input>
                    <input type='date'className='input-field'placeholder='DOB' required > </input>
                    <button type='submit'className='submit-btn'>Donate</button>
		        </form>
                <form id='register' className='input-group-register'> 
                    <input type='text'className='input-field'placeholder='First Name' required style={{width: "49%"}}> </input> 
                    <input type='text'className='input-field'placeholder='Last Name ' required style={{width: "49%"}}> </input>
                    <input type='email'className='input-field'placeholder='Email Id' required> </input>
                    <input type='password'className='input-field'placeholder='Enter Password' required> </input>
                    <input type='password'className='input-field'placeholder='Confirm Password'  required> </input>
                    <input type='checkbox'className='check-box'><span>I agree to the terms and conditions</span> </input>
                    <button type='submit'className='submit-btn'>Donate</button>
                </form>
            </div>
        </div></div>
    );
}
 
export default Donate;