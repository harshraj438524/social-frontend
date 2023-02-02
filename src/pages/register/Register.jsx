import "./register.css";

export default function Register() {
  return (
    < div className="body" >
    <div className="conta">
         <div className="heading">Sign up</div> 
         <form method='POST' className='Rform'>
            <div className="input-details">
                <input className='Rinput' type='text' name="name" autoComplete='off'  placeholder="Enter your Username"/>
            </div>
            <div className="input-details">
                <input className='Rinput'type='email' name='email' autoComplete='off' placeholder="Enter your email"/>
            </div>
            <div className="input-details">
                
                <input  className='Rinput'type='password' name='password' autoComplete="off" placeholder="Password"/>
            </div>
            <div className="input-details">
                <input className='Rinput' type='password' name='cpassword' autoComplete="off" placeholder="confirm password"/>
            </div>
          

         </form>
         <div className="butt">Register</div>
        
    </div>
    </div>
  );
}
