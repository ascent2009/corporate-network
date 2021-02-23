import React from 'react';
import SendForm from '../SendForm'
import work from '../../assets/work.png'

const WorkSection = (props) => {
    console.log('props: ', props);

    return (
        <div id="content-1">
             <div className="title-block">
                <img src={work} alt="friends" style={{width: '40px', height: '40px', marginRight: '20px'}}/>
                <h3 className="title">Здесь обсуждаем рабочие вопросы</h3>
             </div>
            {props.work}
            <SendForm />
        </div>
    );
};

export default WorkSection;