import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CommunitySection from '../../CommunitySection'
import WorkSection from '../../WorkSection'
import LogoutSvg from '../../../assets/logout.svg'
import workPng from '../../../assets/work.png'
import friends from '../../../assets/friends.png'

function HomePage() {
  const [checked, setChecked] = useState(true)
  const [showIcons, setShowIcons] = useState(false)
  // const [style, setStyle] = useState({display: 'flex'})
  const [user, setUser] = useState(null); 
  
  useEffect(
    () => {setUser(localStorage.getItem('nick'))}, [user]
  )

  useEffect(
    () => {setChecked(true)}, [checked]
  )

  const showMessageIcons = () => {
    setShowIcons(true)
    // setStyle({display: 'flex'})
}

  const closeMessageIcons = () => {
      setShowIcons(false)
      // setStyle({display: 'none'})
  }

  return (
    <>
      <div className="logged-in-user">
        <h3>Вы вошли как <span>{user}</span></h3>
        <Link to={{
            pathname: "/",
        }}><img src={LogoutSvg} alt="logout" title="Покинуть чат"/></Link>  
      </div>
      <div className="tabs">
        <input type="radio" name="tab-btn" id="tab-btn-1"
        //  value="" 
        defaultChecked={checked}
        
        />
        <label htmlFor="tab-btn-1">
          <img src={workPng} alt="friends" style={{width: '40px', height: '40px'}} />
          <div className="title-block">
                <img src={workPng} alt="friends" style={{width: '40px', height: '40px', margin: '20px'}}/>
                <h3 className="title">Здесь обсуждаем рабочие вопросы</h3>
             </div>
        </label>
        <input type="radio" name="tab-btn" id="tab-btn-2"
        //  value="" 
        
        />
        <label htmlFor="tab-btn-2">
          <img src={friends} alt="friends" style={{width: '40px', height: '40px'}} />  
          <div className="title-block">
                <img src={friends} alt="friends" style={{width: '40px', height: '40px', margin: '20px'}}/>
                <h3>Здесь дружеское общение</h3>
          </div>
        </label>
        
        <WorkSection show={showMessageIcons} close={closeMessageIcons} icons={showIcons} user={user} />
        <CommunitySection show={showMessageIcons} close={closeMessageIcons} icons={showIcons} user={user} />
        
      </div>
    </>
  );
}

export default HomePage;
