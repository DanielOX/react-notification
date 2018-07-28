import React from 'react'

const Notification = (props) => {
const NotificationTypes = {
    Like:'icon ion-md-heart-empty like-color',
    Share:'icon ion-md-paper-plane share-color',
    Comment:'icon ion-md-chatbubbles comment-color'
}
 
    return (
        <li>
        <i className={NotificationTypes[props.notify.type]} ></i>
        <div style={{marginTop:'-30px',marginLeft:'80px'}}>
            <div className="user-profile" style={{backgroundImage:`url(${props.notify.userImage}) `}}></div>
            <p className="user-notification"><strong>{props.notify.username} </strong> - <span> {props.notify.Description}</span> </p>
            
        </div>
    </li>

    );
}

export default Notification