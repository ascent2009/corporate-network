import React, {useState, useRef, useEffect} from 'react'
import {initialCommDialog} from '../../initialMessages'
import SendForm from '../SendForm'
import friends from '../../assets/friends.png'
// import DelSvg from '../../assets/trash.svg'
import ChangeMessage from '../ChangeMessage'

const CommunitySection = (props) => {

    const {icons, show, close, user} = props
    const [friendsMessages, setFriendsMessages] = useState(initialCommDialog)
    const divRef = useRef(null);
    // const [user, setUser] = useState('me')
    
    useEffect(() => {
        // divRef.current.scrollIntoView({ behavior: 'smooth' });
        divRef.current.scrollTop = divRef.current.scrollHeight
    }, [divRef]);
    
    
    const sendMessage = (obj) => {
        setFriendsMessages([...friendsMessages, obj])
        localStorage.setItem('friendstalk', JSON.stringify(friendsMessages))
    }

    return (
        <div id="content-2">
            {/* <div className="title-block">
                <img src={friends} alt="friends" style={{width: '40px', height: '40px', marginRight: '20px'}}/>
                <h3>Здесь дружеское общение</h3>
            </div> */}
            {friendsMessages.map((item, index) => {
                return (
                <div className='messageBlock' key={index} ref={divRef} data-id="Имя">
                    <div className={item.senderID === user ? 'out-message' : 'message'} onMouseDown={show} onMouseLeave={close}>
                        {icons ? <ChangeMessage key={index} index={index} friends={friendsMessages} /> : null}
                        <label style={{fontWeight: 'bold', textAlign: 'left'}}>{item.senderID}</label>
                        {item.text}
                        {item.date}
                    </div>
                </div>
                )
                }
            )}
            <SendForm sendMessage={sendMessage} user={user} />
        </div>
    );
};

export default CommunitySection;