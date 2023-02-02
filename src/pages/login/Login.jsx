import "./login.css";

function Login() {

  return (

    <div className="Lbody">
    <div className="Lconta">
      <div className="Lheading">
        Login </div>
        <form method="POST" className='Lform'>
              <div className="Linput-details">
                <div className="Ldetails">Email</div>
                <input type="email" className='Linput' />
              </div>
              <div className="Linput-details">
                <div className="Ldetails">password</div>
                <input type="password" className='Linput' />
              </div>
           <div className="Lbutt" >Login</div>
        </form>
      
    </div>
    </div>
  )
}

export default Login