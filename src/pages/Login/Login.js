import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Classes from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({});

  const updateFormValues = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setCreds(initValue => ({...creds, [fieldName]: fieldValue}));
  };

  const login = (event) => {
    event.preventDefault();
    const userCreds = {...creds};
    // After successful validation, redirect the user
    navigate('/dashboard', {replace: true});
  };

  return (
    <div className={Classes.login}>
      <form className={Classes["login-form"]} onSubmit={login}>
        <div className="form-header">
          <h2 className="text-center"> Sign In to <em>PickMeUp</em></h2>
        </div>
        <div className="form-group">
          <label className="field-label">Username:</label>
          <input className="form-field text-field" type="text" name="username" placeholder="UserName"
            value={creds.username}
            onChange={updateFormValues}
            />
        </div>
        <div className="form-group">
          <label className="field-label">Password:</label>
          <input className="form-field text-field" type="password" name="password" placeholder="Password"
            value={creds.password}
            onChange={updateFormValues}
            />
        </div>
        <div className="form-options">
          <button className={`btn ${Classes['submit-btn']}`}>Login</button>
          <div className={Classes["option-links"]}>
            <a className="link-text" href="/signup"> Signup</a>
            <a className="link-text" href="/forgot-password">Forgot Password</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;