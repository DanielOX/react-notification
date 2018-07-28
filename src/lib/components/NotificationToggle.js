import React from 'react'
import { NotificationPanel } from './NotificationPanel'

export class NotificationToggle extends  React.Component {
    state = {
        dropdownOpen:false
    }   
    toggleHandler = () => {
        this.setState( () => ({dropdownOpen:!this.state.dropdownOpen}))
    }
    render() {
        return (
                    <NotificationPanel />
        );
    }
} 


