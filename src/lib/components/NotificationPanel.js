import React from 'react'
import './Notification.css'
import Notification from './Notification'
export class NotificationPanel extends React.Component {
    componentWillUnmount() {
        this.props.wasRead();
    }
    render() {
        return (
        <React.Fragment>
        <ul className="NotificationPanel">
            {
                !(typeof this.props.Notifications === 'undefined') ? (
                    !Array.isArray(this.props.Notifications) ? <Notification  notify = {this.props.Notifications}  /> 
                    : this.props.Notifications.map( (N,Index ) => <Notification  key={Index} notify={N}/> )   
                ):
                <Notification  notify = 'error'  /> 
            }
        </ul>
         </React.Fragment>   
    );
}
}