
import './App.css';
import LossForm from './LossForm';
import { useState } from 'react';

function App() {
  const [loss, setLoss] = useState (50);
  const handleChange=(e)=>{
    setLoss(e.target.value)
  }

  
  return (
    <div className="App">
    
      <div className="item">TIME IN THE MARKET</div>
      <LossForm loss={loss} handleChange={handleChange}/>
    </div>
  );
}

export default App;
