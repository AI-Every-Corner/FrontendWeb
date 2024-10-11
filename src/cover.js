import React from 'react';

function Cover() {

    return (
        <div>
            <div className="profile-header-background">
                <a href="#" className="profile-cover">
                    <img
                        src="assets/images/users/cover/cover-1.gif"
                        alt="Profile Header Background"
                    />
                </a>
                <div className="cover-overlay">
                    <a href="#" className="profile-cover"></a>
                    <a href="#" className="btn btn-update-cover">
                        <i className="bx bxs-camera" /> Update Cover Photo
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Cover;