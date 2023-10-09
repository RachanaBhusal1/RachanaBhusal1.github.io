import React from 'react';
import './Contactus.css';
const contact = () =>{
    return(
        <form>
        <lable for="fname">First Name</lable>
        <input type="text" id="fname" name="firstname" placeholder="Please enter your name.." />
        <lable for="lname">Last Name</lable>
        <input type="text" id="lname" name="lastname" placeholder="Please enter your last name.." />
        <lable for="email">Email</lable> 
        <input type="email" placeholder="Please enter your email id.." />
        <lable for="number">Contact Number</lable>
        <input type="number" placeholder="Please enter your contact number.."/>
        <lable for="comment">Comment</lable>
        <input type="comment" placeholder="Please enter your comment.." />
        <button type="submit" value="submit">Submit</button>
        </form>
    
    )
}

export default contact;