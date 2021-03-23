import React, {useState} from 'react';
import DelSvg from '../../assets/trash.svg'
import EditSvg from '../../assets/edit.svg'
import ConfirmSvg from '../../assets/confirm.svg'

const ChangeMessage = (props) => {

    const {index, works, friends, handleChangeMessage, handleDeleteMessage, textRef, hideInitialInput, active} = props;
    const [editInput, setEditInput] = useState(false);
    const [editValue, setEditValue] = useState(null);

    const deleteMessage = (e) => {
        const idx = e.target.dataset.id;
        const newArr = [...works.slice(0, idx), ...works.slice(idx + 1)];
        handleDeleteMessage(newArr);
    }
    
    const showEditInput = (e) => {
        setEditInput(true)
        // const idx = e.target.dataset.id;
        // const oldValue = works[idx].text;
        // console.log('oldValue: ', oldValue);
        hideInitialInput(active)
    }

    const editMessage = (e) => {
        const changedValue = textRef.current;
        // const changedValue = e.currentTarget.value;
        // const oldValue = works[idx].text;
        // const idx = document.querySelectorAll('p');
        // idx.forEach((el, index, idx) => {return el.innerText = e.target.value})
        // for (let el of idx) {el.innerText = e.target.value}
        setEditValue(changedValue.textContent = e.target.value);
    }

    const saveChangedMessage = () => {
        editValue && handleChangeMessage(editValue)
    }

    return (
        <>
        <div className="icons-block">
            <img src={EditSvg} onClick={showEditInput} alt="Редактировать" data-id={index}/>
            <img src={DelSvg} onClick={deleteMessage} alt="Удалить" data-id={index} />
        </div>
        {editInput ?
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