import React from 'react'
import { useEffect, useState } from 'react';

export default function Login() {

 

  return (
    <div>
        <div className="login-container">
            <div className="paper">
                <div className="avatar"></div>
                <h2>Sign In</h2>
                <div className='user-name'><input type="text" placeholder="Username" required
                    value={username}
                    onChange={changeUsernameHolder}
                /><FaUser className='icon' />
                </div>
                <div className='pass'>
                    <input type="password" placeholder="Password" required
                        value={password}
                      
                    /><FaLock className='icon' />
                </div>
                <div className="remember-me">
                    <input type="checkbox" id="remember" name="remember"
                        value={remember}
                        onChange={changeRememberHolder}
                    />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button type="submit" className="submit-btn" onClick={signin}>Sign in</button>
                <div className="forgot-password">
                    <a href="#">Forgot password?</a>
                </div>
                <div className="sign-up">
                    <p>Do you have an account? <a href="#">Sign Up</a></p>
                </div>
            </div>
        </div>
      
    </div>
  )
}
