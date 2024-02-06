import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleShowPasswordToggle = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="login-page">
            <h2 className="login-heading">Login</h2>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username} 
                        onChange={handleUsernameChange} 
                        placeholder="Username" 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        placeholder="Password" 
                    />
                    <label htmlFor="showPassword">
                        <input 
                            type="checkbox" 
                            id="showPassword" 
                            name="showPassword" 
                            checked={showPassword} 
                            onChange={handleShowPasswordToggle} 
                        />
                        <span>Show Password</span>
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
