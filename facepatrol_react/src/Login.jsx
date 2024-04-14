// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import './Login.css'

function Login() {
  return (
    <div>

    <div className="login-container">
        <header><span className="bold">Login</span> to FacePatrol</header>
        <button><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAVxJREFUSEvdle1NQzEMRd1JKJvAJJRJgElgk7IJMAn0SDF6da4TR6oqhKX+6Uty7OuvnV3Zdlfm2Z8H7s3Mf4jzaWbvKypVI3w6PX5osPg+UOyxAp8BieaYgFRgb2b20iKXgY+Adw22ohhnnxt0CUhkHwMSMnImGhEibWpZhMhIhNGi90AfWlRTGI8pIMXxGkhUIp57gURHAGffzs4qIFJGuW6rD84SroDf4RKRIddFLAKVnFl0o6Jy55D5futpBZgVVlRCKQAQh38tPsZEoRK3Hp5d2HyrALvCjEDV7JmkFeA0QtXwWdGoxveZ60J0vanyE5veE1/ps9hSnbPVxq9A1XTq0qGASMWkiaMNqG+DbeFxjvNRYjnqspKvDG+gKo/83xWLezhaT2oIVKYNsHQZX3oBT3M9A7psrCBypVaWS6jy2ylSAW4vkTOH3pyk+1od7KvASg6HZ/4/8AdOU0gdTSOz0QAAAABJRU5ErkJggg=="alt='google-logo'/>Login with Google</button>
            <hr/><span className="line">or</span>
            <div className="input-box">
                <input type="text" placeholder="Email" required/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required/>
            </div>
        <button type="submit" className="btn">Login</button>
        
         
    </div>

</div>

  )
}

export default Login
