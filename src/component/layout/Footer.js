import React from 'react';
import "./Footer.css";
import facebook from "../UI/logo/facebook.svg";
import instagram from "../UI/logo/instagram.svg";
import twitter from "../UI/logo/twitter.svg";


const Footer = () => {
    const [email , setEmail] = React.useState();
    
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }

    const handleSubmit=(e) =>{
        e.preventDefault();
        fetch(
            "https://pandeyji-80839-default-rtdb.asia-southeast1.firebasedatabase.app/email.json",
            {
                method:"POST",
                headers:{"Content-type": "application/json"},
                body:JSON.stringify({
                    userEmail: email,
                })
            }
        );
        window.location.reload();
    }
    return (
        <div className='footer'>
            <div className='footer-header'>
                <div className='header-in'>
                    <div className='header-in-in'>
                        <div className='header-name'>
                            <div className='header-name1'>
                                <h3>Acciojob</h3>
                            </div>
                        </div>
                        <div className="header-contact">
                            <div className='social-media'>
                                <img src={facebook} className="facebook" alt="facebook"/>
                                <img src={instagram} className="instagram" alt="instagram"/>
                                <img src={twitter} className="twitter" alt="twitter"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='footer-middle'>
                <div className='footer-inmiddle'>
                    <div className='footer-rowmiddle'>
                        <div className='col1'>
                            <h5>Company Info</h5>
                            <div className='info'>
                               <a href='#' className='about'>About Us</a> 
                               <a href='#' className='carrier'>Carrier</a> 
                               <a href='#' className='hiring'>We are hiring</a> 
                               <a href='#' className='blog'>Blog</a> 
                            </div>
                        </div>
                        <div className='col2'>
                        <h5>Legal</h5>
                            <div className='info'>
                               <a href='#' className='about'>About Us</a> 
                               <a href='#' className='carrier'>Carrier</a> 
                               <a href='#' className='hiring'>We are hiring</a> 
                               <a href='#' className='blog'>Blog</a> 
                            </div>
                        </div>
                        <div className='col3'>
                        <h5>Feature</h5>
                            <div className='feature'>
                               <a href='#' className='marketing'>Business Marketing</a> 
                               <a href='#' className='analytic'>User Analytic</a> 
                               <a href='#' className='chat'>Live Chat</a> 
                               <a href='#' className='support'>Unlimited Support</a> 
                            </div>
                        </div>
                        <div className='col4'>
                        <h5>Resources</h5>
                            <div className='resource'>
                               <a href='#' className='android'>IOS & Android</a> 
                               <a href='#' className='demo'>Watch a Demo</a> 
                               <a href='#' className='customer'>Customers</a> 
                               <a href='#' className='API'>API</a> 
                            </div>
                        </div>
                        <div className='col5'>
                        <h5>Get in Touch</h5>
                        <div className='group-subscribe'>
                            <form className='group-form' onSubmit={handleSubmit}>
                               <div className='input-group'>
                                <input type='email' placeholder='Your Email' onChange={handleEmail}className='email' required/>
                               </div>
                               <div className='Button'>
                                <button type='submit'>Subscribe</button>
                               </div>
                            </form>
                            <p>Lorem impsum dolor amit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-footer'>
                <div className='footer-footer-container'>
                    <div className='footer-footer-row'>
                        <p >Made With ❤️ at Acciojob</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;
