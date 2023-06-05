import {useRef} from 'react';

//import {MdOutlineEmail} from 'react-icons/md';
//import {AiOutlineLinkedin} from 'react-icons/ai';
//import {BsWhatsapp} from 'react-icons/bs';

import emailjs from 'emailjs-com';

import './ContactPage.css';


    
const ContactPage = () => {

    const form=useRef();

    const sendEmail=(e)=>{ 
        e.preventDefault();
   
       emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID',
         form.currentForm,
         'Your_USER_ID')
    .then((result) => {
    console.log(result.text)
    },(error) =>{
    console.log(error.text);
    });
    e.currentTarget.reset();
    };
        
return (

    <div className='form-center'>
         <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='user_name'/>
        <label>Email</label>
        <input type='email' name='user_email'/>
        <label>Message</label>
        <textarea nonce='message'/>
        <input type='submit' value='Send'/>
    </form>


    </div>

   
);

};


export default ContactPage;

