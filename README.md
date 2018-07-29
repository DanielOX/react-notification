# React-Notification

An create to create react notification panel and which is initialized using only react single component. A library made for developers :neckbeard: by @DanielOX with :heart:

## Getting Started

It is simple to use.


## [View] Of Notification Panel

![react-notification](https://user-images.githubusercontent.com/33195456/43364772-af476222-92d5-11e8-82c7-3b61ee318406.PNG)


##  [Auto Detects] If the Notification is read by the user ?

![react-notification-all-caught-up](https://user-images.githubusercontent.com/33195456/43364775-b5fcd6ba-92d5-11e8-93d4-f3d3ce646379.PNG)


## Features 

###### You can pass a single Object
###### You can pass an Array
######  Auto detects if the user has read the notification and then resets the count of notification && displays "All caught up message!"
######  Still Needs Some Responsiveness Issuess but will work great

```
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

class App extends React.Component {
  render() {
    return ( 
      <div>
         <NotificationPanel 
         Notifications = {CustomNotifications}
       />
       </div>
     );
     
  }
}
export default App;

```



### Installing
git clone https://github.com/DanielOX/react-notification
## Built With

* [React] React Js
* [HTML5] HTML 5
* [CSS3]  CSS 3

## Authors
@DanielOX
## License
Apache 2.0
This project is licensed under the Apache 2.0

