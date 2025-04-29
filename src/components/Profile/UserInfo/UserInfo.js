// deps
import React from "react";

// styles
import './UserInfo.css';

function UserInfo() {
    return (
        <div className="user-info-container">
            <div className="user-email">
                <p>Email Address: </p>
                <input type="text" value={'NeilShouldPlayYakuza0@gmail.com'} />
            </div>
            <div className="habit-streak">
                <p>Current Streak: </p>
                <input type="text" value={'0 days'} />
            </div>
        </div>
    );
}

export default UserInfo;