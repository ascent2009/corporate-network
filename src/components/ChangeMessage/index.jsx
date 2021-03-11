import React from 'react';
import DelSvg from '../../assets/trash.svg'
import EditSvg from '../../assets/edit.svg'

const ChangeMessage = (props) => {

    const {index, friends} = props;
    
    const deleteMessage = (e) => {
        const idx = e.target.dataset.id;
        const newArr = [...friends.slice(0, idx), ...friends.slice(idx + 1)];
        console.log(newArr)
    }
    
    const editMessage = (e) => {
        const id = e.target.dataset.id;
        console.log(id);
        if(id) console.log(friends[id].text);
    }

    return (
        <div className="icons-block">
            <img src={EditSvg} onClick={editMessage} alt="Редактировать" data-id={index}/>
            <img src={DelSvg} onClick={deleteMessage} alt="Удалить" data-id={index} />
        </div>
    );
}

export default ChangeMessage;