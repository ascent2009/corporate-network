import React, { useState, useEffect, useRef, useCallback } from 'react';
import {initialWorkDialog} from '../../initialMessages'
import SendForm from '../SendForm'
import workPng from '../../assets/work.png'
import ChangeMessage from '../ChangeMessage'

const WorkSection = (props) => {
    
    const {icons, show, close, user} = props
    const [workMessages, setWorkMessages] = useState(initialWorkDialog);
    const divRef = useRef(null);
    
    const sendMessage = useCallback((x) => {
        setWorkMessages([...workMessages, x])    
        localStorage.setItem('worktalk', JSON.stringify(workMessages))
    }, [workMessages])

    useEffect(() => {
        divRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
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
                    <div className={item.senderID === user ? 'out-message' : 'message'} onMouseDown={show} onMouseLeave={close}>
                        {icons ? <ChangeMessage /> : null}
                        <label style={{fontWeight: 'bold', textAlign: 'left'}}>{item.senderID}</label>
                        {item.text}
                        {item.chosenEmoji}
                        <div className="message-date">
                            {item.date}
                        </div>
                    </div>
                </div>
                )
                }
            )}
            <SendForm sendMessage={sendMessage} user={user} />
        </div>
    );
};

export default WorkSection;