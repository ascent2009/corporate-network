import React, { useState, useRef } from 'react'
import useSound from 'use-sound';
import Emoji from '../Emoji'
import SendSvg from '../../assets/send.svg'
import AttachSvg from '../../assets/attachment.svg'
import DropSvg from '../../assets/dropdown.svg'
import EmojiSvg from '../../assets/emoji.svg'
import sendSound from '../../assets/9bd5305d8e463b9.mp3'
// import {itemId} from '../../initialMessages'


const SendForm = (props) => {
        
    const { sendMessage, handleInputText, user, message } = props;
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    const [play] = useSound(sendSound)
    
    const [obj, setObj] = useState(null);
    // const [message, setMessage] = useState('');
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [time, setTime] = useState('')
    const [file, setFile] = useState();
    const [emoji, setEmoji] = useState(false);
    const fileInput = useRef(null);
    const [style, setStyle] = useState(false);
   
    // const showExtraIcons = () => {
    //     setStyle({display: 'flex'})
    // }

    const handleToogleStyles = () => {
        setStyle(!style)
    }

    const hideExtraIcons = () => {
        setStyle(false)
    }
    
    const handleSelectFile = () => {
        setFile(fileInput.current.files[0])
    }

    const handleSelectEmoji = () => {
        setEmoji(true)
    }

    const handleCloseEmoji = () => {
        setEmoji(false)
    }

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    const handleChange = (e, emojiObject) => {
        const value = e.target.value;
        handleInputText(value);
        setChosenEmoji(emojiObject);
        setTime(new Date().toLocaleString('ru', options).replace(',', ''))
        setObj({
            id: (Math.random() * 10).toFixed(2),
            senderID: user,
            text: value,
            file: file,
            date: time,
            chosenEmoji: chosenEmoji,
        })
        // console.log(obj);
    }

    const handleSubmit = (e) => {
        if(!message) return
        sendMessage(obj);
        handleInputText('');
        setFile(null);
        setChosenEmoji(null);
        play()
        
    }

    return (
        <>
        <form className="form">
            <textarea className="textarea" wrap="soft" rows="2" value={message} onChange={handleChange} />
            <div className="input-icons-block">
                <img className="dropdown" src={DropSvg} onClick={handleToogleStyles} onMouseLeave={hideExtraIcons} alt="Добавить элементы" />
                <div className="input-extra-block" style={style ? {display: 'flex'} : null}>
                    <div className="input-file-block">
                        <label className="input-img-btn" onMouseOver={handleSelectEmoji} onClick={handleSelectEmoji} onMouseLeave={handleCloseEmoji}>
                            <img src={EmojiSvg} alt="Добавить эмоцию" />
                            {emoji ? <Emoji onEmojiClick={onEmojiClick} /> : null}
                        </label>
                        {/* {emoji ? chosenEmoji : null} */}
                    </div>
                    <div className="input-file-block">
                        <input type="file" id="input-file" value={file} name="file" ref={fileInput} onChange={handleSelectFile} className="input-file"/>
                        <label htmlFor="input-file" className="input-img-btn">
                            <img src={AttachSvg} alt="Прикрепить файл" />
                        </label>
                    </div>
                </div>
            </div>
            <button type="button" onClick={handleSubmit} className="button"><img src={SendSvg} alt="Отправить" /></button>
        </form>
        {message ?
        <p style={{fontStyle: 'italic', color: 'blue', textAlign: 'center'}}><span style={{fontWeight: 'bold', color: 'black', fontStyle: 'normal'}}>{user}</span> печатает...</p> :
        <p style={{color: 'green', textAlign: 'center'}}><span style={{fontWeight: 'bold', color: 'black'}}>{user}</span> в сети</p>}
        </>
    );
};

export default SendForm;