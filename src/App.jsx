import './App.scss';
import CommunitySection from './components/CommunitySection'
import WorkSection from './components/WorkSection'
import {initialWorkDialog, initialCommDialog} from './initialMessages'

function App() {

  const work = initialWorkDialog.map((item, index) => {
    return (
      <div className='messageBlock' key={index}>
        <div className={item.senderID === 'me' ? 'out-message' : 'message'}>
          <label style={{fontWeight: 'bold', textAlign: 'left'}}>{item.senderID}</label>
          {item.text}
        </div>
      </div>
      )
    }
  )

  const community = initialCommDialog.map((item, index) => {
    return (
      <div className='messageBlock' key={index}>
        <div className={item.senderID === 'me' ? 'out-message' : 'message'}>
          <label style={{fontWeight: 'bold', textAlign: 'left'}}>{item.senderID}</label>
          {item.text}
        </div>
      </div>
      )
    }
  )

  
    return (
    <div className="tabs">
      <input type="radio" name="tab-btn" id="tab-btn-1" value="" checked />
      <label htmlFor="tab-btn-1">Работа</label>
      <input type="radio" name="tab-btn" id="tab-btn-2" value="" />
      <label htmlFor="tab-btn-2">Сообщество</label>
      
      <WorkSection work={work} />
      <CommunitySection community={community} />
      
    </div>    
  );
}

export default App;
