import React, {useState} from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine, RiYoutubeLine, RiGithubLine } from "react-icons/ri";
import axios from "axios";
import toast from "react-hot-toast";


const SubContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
        <div className="container_1">
          <h3>Let's connect</h3>
          <div>
            <p>Phone</p>
            <span>+91 99999 9999</span>
          </div>
          <div>
            <p>Email</p>
            <span>LV@gmail.com</span>
          </div>
          <div>
            <p>Address</p>
            <span>House No.123 Sector A-1</span>
          </div>
        
        </div>
        
        <div className="container_2">
          <h3>We'd love to hear from you</h3>
          <form onSubmit={handleSendMessage}>
            <div>
              <input type="text" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
              <input type="email" placeholder="Email"  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <textarea rows="4" placeholder="Your Message..."  value={message}
                onChange={(e) => setMessage(e.target.value)}/>
            <button type="submit">SEND</button>
          </form>
        </div>
        </div>
      </section>
    </>
  );
};

export default SubContact;