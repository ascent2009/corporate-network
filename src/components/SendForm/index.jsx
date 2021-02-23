import React from 'react'
import SendSvg from '../../assets/send.svg'

const sendForm = () => {
    return (
        <form className="form">
            <textarea className="textarea" wrap="soft" rows='3' />
            <button type="submit" className="button" onSubmit={e => e.preventDefault()}><img src={SendSvg} alt="Отправить" /></button>
        </form>
    );
};

export default sendForm;