import { useState } from "react";
const Login = () => {

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    
  
  
  return (
    <div className='flex justify-center my-10'>
      <div className='card card-border bg-base-300 w-96 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title justify-center'>Login</h2>
          <div>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Email ID:</legend>
              <input type='text' value={emailId} className='input'
                onChange={(e) => setEmailId(e.target.value)}
              />
              <legend className='fieldset-legend'>Password:</legend>
              <input type='password' value={password} className='input'
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className='card-actions justify-center'>
            <button className='btn btn-primary'>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;