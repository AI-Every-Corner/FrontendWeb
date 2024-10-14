import React from 'react';

const recentmedia = () => {

    return (<div className="col-md-3 profile-quick-media">
        <h6 className="text-muted timeline-title">
            Recent Media
        </h6>
        <div className="quick-media">
            <div className="media-overlay" />
            <a href=" " className="quick-media-img">
                <img
                    src="assets/images/users/album/album-1.jpg"
                    alt="Quick media"
                />
            </a>
        </div>

        <div className="quick-media">
            <div className="media-overlay" />
            <a href=" " className="quick-media-img">
                <img
                    src="assets/images/users/album/album-2.jpg"
                    alt="Quick media"
                />
            </a>
        </div>

        <div className="quick-media">
            <div className="media-overlay" />
            <a href=" " className="quick-media-img">
                <img
                    src="assets/images/users/album/album-3.jpg"
                    alt="Quick media"
                />
            </a>
        </div>
    </div>
    );
}
export default recentmedia;