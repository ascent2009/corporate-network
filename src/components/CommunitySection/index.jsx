import React, {useState, useRef, useEffect} from 'react'
import {initialCommDialog} from '../../initialMessages'
import SendForm from '../SendForm'
import ChangeMessage from '../ChangeMessage'

const CommunitySection = (props) => {

    const {icons, show, close, user} = props;
    const [message, setMessage] = useState('');
    // const [isActive, setIsActive] = useState(false);
    const [friendsMessages, setFriendsMessages] = useState(initialCommDialog)
    const divRef = useRef(null);
    const textRef = useRef();

    
    useEffect(
        () => {
        if (divRef && divRef.current)
        divRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
      });
    
    useEffect(() => localStorage.setItem('friendstalk', JSON.stringify(friendsMessages)), [friendsMessages])
    
    const sendMessage = (x) => {
        const newArrValue = [...friendsMessages, x];
        setFriendsMessages(newArrValue);
        // localStorage.setItem('friendstalk', JSON.stringify(friendsMessages))
    }

    const handleInputText = (x) => {
        setMessage(x);
        // localStorage.setItem('worktalk', JSON.stringify(workMessages))
    }

    // const hideInitialInput = (x) => {
    //     setIsActive(x);
    // }

    const handleChangeMessage = (x) => {
        if(message.length) return;
        setMessage(x);
    }
    
    const handleDeleteMessage = (x) => {
        setFriendsMessages(x);
        // localStorage.setItem('worktalk', JSON.stringify(workMessages))
    }

    return (
        <div id="content-2">
            {/* <div className="title-block">
                <img src={friends} alt="friends" style={{width: '40px', height: '40px', marginRight: '20px'}}/>
                <h3>Здесь дружеское общение</h3>
            </div> */}
            {friendsMessages.map((item, index) => {
                return (
                <div className='messageBlock' key={item.id} ref={divRef} data-id={item.id}>
                    <div className={item.senderID === user ? 'out-message' : 'message'} onMouseDown={show} onMouseLeave={close} 
                    // style={isActive ? {display: 'none'} : null}
                    >
                        {icons ? <ChangeMessage
                            key={item.id}
                            index={item.id}
                            // sendMessage={sendMessage}
                            handleDeleteMessage={handleDeleteMessage}
                            handleChangeMessage={handleChangeMessage}
                            friends={friendsMessages}
                            textRef={textRef}
                            // hideInitialInput={hideInitialInput}
                            // active={isActive}
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

export default CommunitySection;