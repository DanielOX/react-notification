export const toggleHandler = () => {
    this.setState( () => ({dropdownOpen:!this.state.dropdownOpen,unReadMessages:0,wasNotificationPanelOpened:true}))
}
export const didReadTheMessage = () => {
    this.state.wasNotificationPanelOpened && this.setState( () => ({ Notifications:undefined,wasNotificationPanelOpened:false }) ) 
}
export const singleUnreadMessagesHandler = () => {
     this.setState( () => ({ unReadMessages:this.state.unReadMessages + 1 }))
 }   
 export const MultiUnreadMessageHandler = () => {
     this.setState( () => ({ unReadMessages:this.state.unReadMessages + this.props.Notifications.length }) )
 }
