import React, { useState, useRef } from 'react'
import Emoji from '../Emoji'
import SendSvg from '../../assets/send.svg'
import AttachSvg from '../../assets/attachment.svg'
import EmojiSvg from '../../assets/emoji.svg'

const SendForm = (props) => {
    
    const { sendMessage, user } = props;
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        };
      
    const [obj, setObj] = useState(null);
    const [message, setMessage] = useState('');
    const [time, setTime] = useState('')
    const [file, setFile] = useState();
    const [emoji, setEmoji] = useState(false);
    const fileInput = useRef(null);
    
    const handleSelectFile = () => {
        setFile(fileInput.current.files[0])
    }

    const handleSelectEmoji = () => {
        setEmoji(true)
    }

    const handleCloseEmoji = () => {
        setEmoji(false)
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setMessage(value);
        setTime(new Date().toLocaleString('ru', options).replace(',', ''))
        setObj({
            senderID: user,
            text: message,
            file: file,
            date: time
        })
        console.log(obj);
    }

    const handleSubmit = (e) => {
        if(!message) return
        sendMessage(obj);
        setMessage('');
        setFile(null)
    }

    return (
        <form className="form">
            <textarea className="textarea" wrap="soft" rows="2" value={message} onChange={handleChange} />
            <div className="input-file-block">
                <label htmlFor="input-emoji" className="input-img-btn" onMouseOver={handleSelectEmoji} onClick={handleSelectEmoji} onMouseLeave={handleCloseEmoji}>
                    <img src={EmojiSvg} alt="Добавить эмоцию" />
                    {emoji ? <Emoji /> : null}
                </label>
            </div>
            <div className="input-file-block">
                <input type="file" id="input-file" value={file} name="file" ref={fileInput} onChange={handleSelectFile} className="input-file"/>
                <label htmlFor="input-file" className="input-img-btn">
                    <img src={AttachSvg} alt="Прикрепить файл" />
                </label>
            </div>
            <button type="button" onClick={handleSubmit} className="button"><img src={SendSvg} alt="Отправить" /></button>
        </form>
    );
};

export default SendForm;