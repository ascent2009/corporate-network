import React, { useState, useEffect, useRef, useCallback } from 'react';
import {initialWorkDialog} from '../../initialMessages'
import SendForm from '../SendForm'
// import workPng from '../../assets/work.png'
import ChangeMessage from '../ChangeMessage'

const WorkSection = (props) => {
    
    const {icons, show, close, user} = props
    const [message, setMessage] = useState('');
    const [workMessages, setWorkMessages] = useState(initialWorkDialog);
    const [isActive, setIsActive] = useState(false)
    const divRef = useRef(null);
    const textRef = useRef();
    
    // функция в компонент SendForm для отправки нового сообщения
    const sendMessage = useCallback((x) => {
        setWorkMessages([...workMessages, x])    
        localStorage.setItem('worktalk', JSON.stringify(workMessages))
    }, [workMessages])

    // функция в компонент SendForm для формирования текста сообщения
    const handleInputText = (x) => {
        setMessage(x);
    }

    // функция в компонент ChangeMessage для скрытия оригинального сообщения
    const hideInitialInput = (x) => {
        setIsActive(x);
    }
    
    // функция в компонент ChangeMessage для изменения текста оригинального сообщения
    const handleChangeMessage = (x) => {
        // const idx = e.target.dataset.id;
        // let oldValue = workMessages[idx].text
        // console.log('oldValue: ', oldValue);
        // let newText = message.replace(y, x);
        // console.log(newText);
        if(message.length) return;
        setMessage(x);
    }
    
    // функция в компонент ChangeMessage для удаления сообщения
    const handleDeleteMessage = (x) => {
        setWorkMessages(x);
    }

    // функция для сохранения видимости строки ввода внизу чата
    useEffect(
        () => {
        if (divRef && divRef.current)
        divRef.current.scrollIntoView(
        //     {
        //     behavior: 'smooth',
        //     block: 'start'
        // }
        );
      });
    
    return (
        <div id="content-1">
             {/* <div className="title-block">
                <img src={workPng} alt="friends" style={{width: '40px', height: '40px', marginRight: '20px'}}/>
                <h3 className="title">Здесь обсуждаем рабочие вопросы</h3>
             </div> */}
            {workMessages.map((item, index) => {
                return (
                <div className='messageBlock' key={index} ref={divRef}>
                    <div className={item.senderID === user ? 'out-message' : 'message'} onMouseDown={show} onMouseLeave={close} 
                    style={isActive ? {display: 'none'} : null}>
                        {icons ? <ChangeMessage
                            key={index}
                            index={index}
                            // sendMessage={sendMessage}
                            handleDeleteMessage={handleDeleteMessage}
                            handleChangeMessage={handleChangeMessage}
                            works={workMessages}
                            textRef={textRef}
                            hideInitialInput={hideInitialInput}
                            active={isActive}
                            />
                        : null}
                        <label style={{fontWeight: 'bold', textAlign: 'left',}}>{item.senderID}</label>
                        <p style={{margin: '10px auto 0 0'}} ref={textRef} data-id={index}>{item.text}</p>
                        {item.chosenEmoji}
                        <div className="message-date">
                            {item.date}
                        </div>
                    </div>
                </div>
                )
                }
            )}
            <SendForm sendMessage={sendMessage} handleInputText={handleInputText} message={message} user={user} />
        </div>
    );
};

export default WorkSection;