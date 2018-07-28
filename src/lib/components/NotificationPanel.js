import React from 'react'
import './Notification.css'
import Notification from './Notification'
export const NotificationPanel = (props) => {
    return (
        <React.Fragment>
        <ul className="NotificationPanel">
            <Notification />
        </ul>

         </React.Fragment>   
    );
}