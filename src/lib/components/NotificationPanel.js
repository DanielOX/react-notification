import React from 'react'
import './Notification.css'
import Notification from './Notification'
export const NotificationPanel = (props) => {
    return (
        <React.Fragment>
        <ul className="NotificationPanel">
            {
                 !Array.isArray(props.Notifications) ? <Notification notify = {props.Notifications}  /> 
                 : props.Notifications.map( (N,Index ) => <Notification key={Index} notify={N}/> )
            }
        </ul>
         </React.Fragment>   
    );
}