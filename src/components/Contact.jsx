import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "71bf0d28-aa53-4e69-b5d0-27e9e5c0da06");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };


  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
    <div className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></div>
    <p className='text-center max-w-80 text-gray-800 mb-8 mx-auto'>Ready to Make a Move? Let's build Your Future Together</p>
    


    <form  onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8 bg-blue'>

        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                Your Name
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='text' name='Name' placeholder='Your Name' required/>
            </div>
            <div className='w-full md:w-1/2 text-left'>
                Your NEmail
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='email' name='Email' placeholder='Your Email' required/>
            </div>

        </div>

        <div className='my-6 text-left'>
            Message
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' 
             name='Message' placeholder='Message' required></textarea>
        </div>

        <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result : "Send Messgae"}</button>
    </form>

    </div>
  )
}

export default Contact
