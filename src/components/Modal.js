import React from "react";

function Modal({ closeModal }) {
  return (
    
    <div className="modal-bg">
      <div className="modal">
        <div className="modalTitle">
          <h2>Logga in</h2>
        </div>
        <form>
          <label for="fname">Write Your First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Please enter your first name here: " required/>
          <label for="lname">Write Your Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Please enter your last name here: " required/>
          <label for="subject">Write Your Message</label>
          <textarea className="textarea" id="subject" name="subject" placeholder="Please Write Your Message Here..."/>
        </form>
        <input className="submitbtn" onClick={() => closeModal(false)}type="submit" value="Submit" required/>
      </div>
      </div>
    
    
  );
}
export default Modal;

  
