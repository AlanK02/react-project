import React from 'react';
import './logincss.css';

function Login(){
    return(<div>
<head>
	<meta charset="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title>Baursak </title>


	<link rel="stylesheet" href="logincss.css"/>

</head>


<div className="login">

    <form name='form-login'>
    	<h1>REGISTER</h1>
    	<label for="name">Email</label>
        <input type="email" id="name" placeholder="Username" required/>
        <label for="pw">Password</label>
        <input type="password" id= "pw" placeholder="Password" required/>
        <ul className="helper-text">
            <li className="length">Must be at least 8 characters long.</li>
            <li className="lowercase">Must contain a lowercase letter.</li>
            <li className="uppercase">Must contain an uppercase letter.</li>
            <li className="special">Must contain a number or special character.</li>
        </ul>
        <input id="rgstr_btn" type="submit" value="Register" onclick="store()"/>
    </form>

</div>

<div className="login">

    <form name='form-login' action="/index">
    	<h1>SIGN IN</h1>
    	<label for="userName">Email</label>
        <input type="email" id="userName" placeholder="Username" required/>
        <label for="userPw">Password</label>
        <input type="password" id= "userPw" placeholder="Password" required/>
        <div id="remember">
            <input type="checkbox" value="lsRememberMe" id="rememberMe"/>
            <label>Remember me</label>
        </div>
        <input id= "login_btn" type="submit" value="Login" onclick="check()"/>
    </form>

</div>

<script src="loginjs.js"></script>
</div>
);
    

    
}
export default Login;