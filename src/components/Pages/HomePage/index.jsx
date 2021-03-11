import {useState, useEffect} from 'react'
import CommunitySection from '../../CommunitySection'
import WorkSection from '../../WorkSection'
import workPng from '../../../assets/work.png'
import friends from '../../../assets/friends.png'

function HomePage() {
  const [checked, setChecked] = useState(true)
  const [showIcons, setShowIcons] = useState(false)
  const user = localStorage.getItem('nick')
  
  useEffect(
    () => {setChecked(true)}, [checked]
  )

  const showMessageIcons = () => {
    setShowIcons(true)
}

  const closeMessageIcons = () => {
      setShowIcons(false)
  }

  return (
    <>
      <h3 className="logged-in-user">Вы вошли как <span>{user}</span></h3>
      <div className="tabs">
        <input type="radio" name="tab-btn" id="tab-btn-1"
        //  value="" 
        defaultChecked={checked}
        
        />
        <label htmlFor="tab-btn-1">
          <img src={workPng} alt="friends" style={{width: '30px', height: '30px', marginRight: '20px'}}/>
          Работа
        </label>
        <input type="radio" name="tab-btn" id="tab-btn-2"
        //  value="" 
        
        />
        <label htmlFor="tab-btn-2">
          <img src={friends} alt="friends" style={{width: '30px', height: '30px', marginRight: '20px'}}/>  
          Сообщество
        </label>
        
        <WorkSection show={showMessageIcons} close={closeMessageIcons} icons={showIcons} user={user} />
        <CommunitySection show={showMessageIcons} close={closeMessageIcons} icons={showIcons} user={user} />
        
      </div>
    </>
  );
}

export default HomePage;
