import React, { useState } from 'react';
import './App.css';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const iconStyle = {
    height:'200px',
    width:'200px',
    margin:'200px',
    marginLeft:'600px',
    cursor:'pointer', 
    
  }
  return (
    <div>
      {/* <AccessAlarmIcon style={iconStyle} ></AccessAlarmIcon> */}
      <ThumbUpAltIcon onClick={() => setLikeColor(likeColor ? '' : 'primary')} color={likeColor} style={iconStyle} ></ThumbUpAltIcon>
    </div>
  );
}

export default App;
