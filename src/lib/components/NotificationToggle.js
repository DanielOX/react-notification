import React from 'react'
import { NotificationPanel } from './NotificationPanel'
import './Notification.css'

export class NotificationToggle extends  React.Component {
    state = {
        dropdownOpen:false,
        unReadMessages:0,
        wasNotificationPanelOpened:false,
        Notifications:this.props.Notifications           
    }   
    toggleHandler = () => {
        this.setState( () => ({dropdownOpen:!this.state.dropdownOpen,unReadMessages:0,wasNotificationPanelOpened:true}))
    }
    didReadTheMessage = () => {
        this.state.wasNotificationPanelOpened && this.setState( () => ({ Notifications:undefined,wasNotificationPanelOpened:false }) ) 
    }
     singleUnreadMessagesHandler = () => {
         this.setState( () => ({ unReadMessages:this.state.unReadMessages + 1 }))
     }   
     MultiUnreadMessageHandler = () => {
         this.setState( () => ({ unReadMessages:this.state.unReadMessages + this.props.Notifications.length }) )
     }
     componentWillMount() {
        !Array.isArray(this.props.Notifications) ? this.singleUnreadMessagesHandler() : this.MultiUnreadMessageHandler()
     }
    //  componentDidUpdate() {
    //     !Array.isArray(this.props.Notifications) ? this.singleUnreadMessagesHandler() : this.MultiUnreadMessageHandler()
    //  }
    render() {

        return (
        <div> 
           <button className="notification-toggle-btn" onClick={this.toggleHandler}> <i className="icon ion-md-notifications"></i>
               <span className='notification-counter'>{this.state.unReadMessages}</span>
            </button>      
           {this.state.dropdownOpen && 
           <div className="contained" style={{backgroundColor:this.state.bg}}>
            <NotificationPanel wasRead = {this.didReadTheMessage} Notifications = {this.state.Notifications} unReadMessages={this.state.unReadMessages} />                                
        </div>
        }
    </div>
        );
    }
} 


