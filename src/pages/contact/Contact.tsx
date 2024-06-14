import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import "./Contact.scss"
import { PiPhoneCallFill } from 'react-icons/pi'
import { MdMarkEmailUnread } from 'react-icons/md'

const BOT_TOKEN : string = "6984601542:AAHCF1HdL0BTa71xaByGNiITcVnhiFoCY_k";
const CHAT_ID : string = "-4276448242";

interface ContactForm {
  username: string,
  email: string,
  message: string
}

let initialState : ContactForm = {
  username: "",
  email: "",
  message: ""
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>(initialState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let {value, name} = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }
  
  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let text : string = "Contact %0A";
    text += `Fullname: <b>${formData.username}</b> %0A`;
    text += `Email: <b>${formData.email}</b> %0A%0A`;
    text += `Messege: <b>${formData.message}</b>`

    let url : string = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
    let api : XMLHttpRequest = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    console.log(formData);
    
  }

  return (
    <main>
      <section>
        <div className="container">
          <div className="contact">
            <div className="contact__context">
              <div className="contact__context-top">
                <h2>Contact us</h2>
                <p>Send for us your request and we will get in touch with you as soon as possible</p>
              </div>
              <div className="contact__context-bottom">
                <div className='contact__context-bottom-detail'>
                  <div className='contact__context-bottom-detail-icon'><PiPhoneCallFill color='#359640' size={21}/></div>
                  <h5>+998 93 539 87 17</h5>
                </div>
                <div className='contact__context-bottom-detail'>
                  <div className='contact__context-bottom-detail-icon'><MdMarkEmailUnread color='#359640'size={21}/></div>
                  <h5>mukhlisa.saidaminova08@gmail.com</h5>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="contact__form">
              <div className='contact__form-inputs'>
                <label htmlFor="">Name</label>
                <input onChange={handleChange} type="text" name='username' placeholder='Your name'/>
              </div>
              <div className='contact__form-inputs'>
                <label htmlFor="">Email</label>
                <input onChange={handleChange} type="email" name='email' placeholder='Your email'/>
              </div>
              <div className='contact__form-inputs'>
                <label htmlFor="">Message</label>
                <textarea name='message' rows={10} placeholder='Your message' onChange={handleChange}/>
              </div>
              <button>Send request</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
