import React, {useState} from 'react';
import DelSvg from '../../assets/trash.svg'
import EditSvg from '../../assets/edit.svg'
import ConfirmSvg from '../../assets/confirm.svg'

const ChangeMessage = (props) => {

    const {index, works, friends, sendMessage, handleDeleteMessage} = props;
    const [edit, setEdit] = useState(false);
    const [editValue, setEditValue] = useState('');
    
    const deleteMessage = (e) => {
        const idx = e.target.dataset.id;
        const newArr = [...works.slice(0, idx), ...works.slice(idx + 1)];
        console.log(newArr);
        handleDeleteMessage(newArr);
    }
    
    const showEditInput = (e) => {
        setEdit(true)
    }

    const editMessage = (e) => {
        const id = e.target.dataset.id;
        console.log(id);
        if(id) {
            console.log(works[id].text)
        };
        const value = e.target.value;
        console.log('value: ', value);
        setEditValue(value);
    }

    const saveChangedMessage = () => {
        sendMessage(setEdit)
    }

    return (
        <>
        <div className="icons-block">
            <img src={EditSvg} onClick={showEditInput} alt="Редактировать" data-id={index}/>
            <img src={DelSvg} onClick={deleteMessage} alt="Удалить" data-id={index} />
        </div>
        {edit ?
        <div className="edit-input" key={index}>
            <textarea
                onChange={editMessage}
                placeholder="измените свое сообщение тут..."
                style={{
                    height: '65%',
                    width: '80%',
                    position: 'absolute',
                    top: '20px',
                    outline: 'none',
                    resize: 'none',
                    fontSize: 'inherit',
                    fontFamily: 'inherit',
                    paddingLeft: '10px',
                    paddingRight: '40px'
                }} />   
            {editValue ?
            <img src={ConfirmSvg} alt="Подтвердить" onClick={saveChangedMessage} style={{position: 'absolute', bottom: '40%', right: '20%'}}/> :
            null}
        </div>
        : null}
        </>
    );
}

export default ChangeMessage;