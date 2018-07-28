import React from 'react'
import { NotificationPanel } from './NotificationPanel'
import './Notification.css'

export class NotificationToggle extends  React.Component {
    state = {
        dropdownOpen:true,
        
    }   
    toggleHandler = () => {
        this.setState( () => ({dropdownOpen:!this.state.dropdownOpen}))
        }
    render() {
        return (
        <div> 
           <button className="notification-toggle-btn" onClick={this.toggleHandler}> <i className="icon ion-md-notifications"></i>
               <span className='notification-counter'>7</span>
            </button>      
           {this.state.dropdownOpen && 
           <div className="contained" style={{backgroundColor:this.state.bg}}>
            <NotificationPanel Notifications = {this.props.Notifications} />                                
        </div>
        }
    </div>
        );
    }
} 


