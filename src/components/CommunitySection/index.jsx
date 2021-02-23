import React from 'react'
import SendForm from '../SendForm'
import friends from '../../assets/friends.png'

const CommunitySection = (props) => {
    return (
        <div id="content-2">
            <div className="title-block">
                <img src={friends} alt="friends" style={{width: '40px', height: '40px', marginRight: '20px'}}/>
                <h3>Здесь дружеское общение</h3>
            </div>
            {props.community}
            <SendForm />
        </div>
    );
};

export default CommunitySection;