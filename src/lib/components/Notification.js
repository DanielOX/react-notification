import React from 'react'

const Notification = (props) => {
    return (
        <li>
        <i className="icon ion-md-heart-empty"></i>
        <div>
            <div className="user-profile" style={{backgroundImage:`url(https://media1.popsugar-assets.com/files/thumbor/VtEIEPOZPzOk-Dkf8JN947DPNrs/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/03/27/788/n/24155406/tmp_1BYogo_59d3c106ace0fc9b_GettyImages-803082014.jpg) `}}></div>
            <p className="user-notification"><strong>Robert Downy Jr. </strong> - <span> Liked Your Post</span> </p>
            
        </div>
    </li>

    );
}

export default Notification