import React from 'react'

class Notification extends React.Component {
state = {
    
    NotificationTypes: {
    Like:'icon ion-md-heart-empty like-color',
    Share:'icon ion-md-paper-plane share-color',
    Comment:'icon ion-md-chatbubbles comment-color'
}
}
render() {
        return (
            <li>
                { !(typeof this.props.notify === 'string' && this.props.notify === 'error') 
                ? 
                <React.Fragment>
                <i className={this.state.NotificationTypes[this.props.notify.type]} ></i>
                <div style={{marginTop:'-30px',marginLeft:'80px'}}>
                    <div className="user-profile" style={{backgroundImage:`url(${this.props.notify.userImage}) `}}></div>
                    <p className="user-notification"><strong>{this.props.notify.username} </strong> - <span> {this.props.notify.Description}</span> </p>
                    
                </div>
                 </React.Fragment>   
                :
                <div>
                    All Caught Up!
                </div>    
            
            }
            </li>
    
        );
    
    }

}

export default Notification