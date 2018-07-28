import React from 'react'
import './Notification.css'
export const NotificationPanel = () => {
    
    return (
        <div className="contained">
        <ul className="NotificationPanel">
            <li>
                <i className="icon ion-md-heart-empty"></i>
                <div>
                    <div className="user-profile" style={{backgroundImage:`url(https://media1.popsugar-assets.com/files/thumbor/VtEIEPOZPzOk-Dkf8JN947DPNrs/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/03/27/788/n/24155406/tmp_1BYogo_59d3c106ace0fc9b_GettyImages-803082014.jpg) `}}></div>
                    <p className="user-notification"><strong>Robert Downy Jr. </strong> Liked Your Post</p>
                    
                </div>
            </li>
            <li>
                <i className="icon ion-md-paper-plane"></i>
                <div>
                    <div className="user-profile" style={{backgroundImage:`url(https://s3.amazonaws.com/bgn2018media/wp-content/uploads/2016/03/29164504/oliver-queen-arrow-wallpapers_35231_768x1024-inside-oliver-queen-s-phone-apps-of-a-hero-jpeg-195558_opt.jpg)`}}></div>
                    <p className="user-notification"><strong>Oliver Queen</strong> Shared Your Post </p>
                </div>
            </li>
            <li>
                <i className="icon ion-md-water"></i>
                <div>
                    <div className="user-profile" style={{backgroundImage:`url(https://cdn.mos.cms.futurecdn.net/z6ia6LxLhDKM62yiQwvEm3.jpg)`}}>
                    </div>
                    <p className="user-notification"><strong>Mr. Wrench </strong> Dropped Your Post</p>
                </div>
            </li>
        </ul>
    </div>
    );
}