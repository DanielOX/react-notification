import React from 'react';
import NotificationPanel from '../lib/index';
const CustomNotifications = [
  {
    username:'Danial Malik', 
    userImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxn5DVOevswBNewfHx3_cdKHBwkgslPRZ_PUdKCrkSAZ3f9iFp',
    Description:'Liked Your Post',
    type:'Like'
  },
  {
    username:'Danial ', 
    userImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxn5DVOevswBNewfHx3_cdKHBwkgslPRZ_PUdKCrkSAZ3f9iFp',
    Description:'Liked Your Post',
    type:'Share'
  },
  {
    username:'Danial ', 
    userImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxn5DVOevswBNewfHx3_cdKHBwkgslPRZ_PUdKCrkSAZ3f9iFp',
    Description:'Liked Your Post',
    type:'Comment'
  }

];

const App = () => {
console.log(Array.isArray(CustomNotifications));

 return ( 
 <div>
    <NotificationPanel 
    Notifications = {CustomNotifications}
  />
  </div>
);
}
export default App;
