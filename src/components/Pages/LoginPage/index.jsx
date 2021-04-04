import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import LoginPng from '../../../assets/chat.png';

const LoginPage = () => {

    const [nick, setNick] = useState('');
    const [email, setEmail] = useState('');
    const [disabled, setDisabled] = useState(true);
    
    useEffect(        
        () => {
            localStorage.setItem('nick', nick);
            localStorage.setItem('email', email)
            if (nick && email) {setDisabled(false)}
        }, [nick, email, disabled]
    )

    
    function handleAuthNick(e) {
        const value = e.target.value;
        setNick(value);
        console.log('nick: ', nick);
    }

    function handleAuthEmail (e) {
        const value = e.target.value;
        setEmail(value);
    }

    function handleSubmitLogin (e) {
        e.preventDefault()
        setEmail('')
        setNick('')
    }
 
    return (
        <div className="login-block">
            <img src={LoginPng} alt="Лого" className="logo"/>
            <h1>Авторизуйтесь в чате</h1>
            <form className="form-login">
                <label htmlFor="nick" className='input-block'>
                    <h3>nick</h3>
                    <input type="text" id='nick' name='nick' defaultValue={nick} className='input-text' onChange={(e) => handleAuthNick(e)} />
                </label>
                <label htmlFor="email" className='input-block'>
                    <h3>email</h3>
                    <input type="email" id='email' name='email' defaultValue={email} className='input-text' onChange={handleAuthEmail} />
                </label>
                <Link to='/home'>
                    <button disabled={disabled} type='submit' onSubmit={handleSubmitLogin} className={disabled ? "btn-login" : "btn-login active"}>Войти</button>
                </Link>
            </form>
        </div>
    )
}
    
export default LoginPage;