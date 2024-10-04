import { Chart } from 'react-google-charts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React,{ useState, useEffect, useContext } from 'react';
import { useNavigate} from 'react-router-dom';
import { UserContext } from './context';
import { logout } from './api';

function Profile() {
    const navigate = useNavigate();
    const { avatarUrl } = useContext(UserContext);

    // State to manage the visibility of the dropdown menu
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [notificationDropdownVisible, setNotificationDropdownVisible] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // Function to toggle notification dropdown visibility
    const toggleNotificationDropdown = () => {
        setNotificationDropdownVisible(!notificationDropdownVisible);
    };

    // Function to handle logout
    const handleLogout = async () => {
        await logout();
        alert('登出成功');
        navigate('/sign-in');
    };

    return (
        <div className="Profile">
            <>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link rel="icon" type="image/png" href="assets/images/logo-16x16.png" />
                {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
                <title>Argon - Social Network</title>
                {/* Fonts */}
                <link
                    href="https://fonts.googleapis.com/css?family=Major+Mono+Display"
                    rel="stylesheet"
                />
                <link
                    href="https://cdn.jsdelivr.net/npm/boxicons@1.9.2/css/boxicons.min.css"
                    rel="stylesheet"
                />
                {/* Styles */}
                <link href="assets/css/bootstrap/bootstrap.min.css" rel="stylesheet" />
                <link href="assets/css/style.css" rel="stylesheet" />
                <link href="assets/css/components.css" rel="stylesheet" />
                <link href="assets/css/profile.css" rel="stylesheet" />
                <link href="assets/css/media.css" rel="stylesheet" />
                <div className="container-fluid newsfeed d-flex" id="wrapper">
                    <div className="row newsfeed-size">
                        <div className="col-md-12 p-0">
                            <div className="row profile-right-side-content">
                                <div className="user-profile">
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
                                    <div className="row profile-rows">
                                        <div className="col-md-3">
                                            <div className="profile-info-left">
                                                <div className="text-center">
                                                    <div className="profile-img w-shadow">
                                                        <div className="profile-img-overlay" />
                                                        <img
                                                            src={avatarUrl}
                                                            alt="Avatar"
                                                            className="avatar img-circle"
                                                        />
                                                        <div className="profile-img-caption">
                                                            <label htmlFor="updateProfilePic" className="upload">
                                                                <i className="bx bxs-camera" /> Update
                                                                <input
                                                                    type="file"
                                                                    id="updateProfilePicInput"
                                                                    className="text-center upload"
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <p className="profile-fullname mt-3">Arthur Minasyan</p>
                                                    <p className="profile-username mb-3 text-muted">
                                                        @arthur_minasyan
                                                    </p>
                                                </div>
                                                <div className="intro mt-4">
                                                    <div className="d-flex">
                                                        <button type="button" className="btn btn-follow mr-3">
                                                            <i className="bx bx-plus" /> Follow
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-start-chat"
                                                            data-toggle="modal"
                                                            data-target="#newMessageModal"
                                                        >
                                                            <i className="bx bxs-message-rounded" />{" "}
                                                            <span className="fs-8">Message</span>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-follow"
                                                            id="moreMobile"
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="bx bx-dots-horizontal-rounded" />{" "}
                                                            <span className="fs-8">More</span>
                                                        </button>
                                                        <div
                                                            className="dropdown-menu dropdown-menu-right profile-ql-dropdown"
                                                            aria-labelledby="moreMobile"
                                                        >
                                                            <a href="newsfeed.html" className="dropdown-item">
                                                                Timeline
                                                            </a>
                                                            <a href="/about" className="dropdown-item">
                                                                About
                                                            </a>
                                                            <a href="followers.html" className="dropdown-item">
                                                                Followers
                                                            </a>
                                                            <a href="following.html" className="dropdown-item">
                                                                Following
                                                            </a>
                                                            <a href="photos.html" className="dropdown-item">
                                                                Photos
                                                            </a>
                                                            <a href="videos.html" className="dropdown-item">
                                                                Videos
                                                            </a>
                                                            <a href="check-ins.html" className="dropdown-item">
                                                                Check-Ins
                                                            </a>
                                                            <a href="events.html" className="dropdown-item">
                                                                Events
                                                            </a>
                                                            <a href="likes.html" className="dropdown-item">
                                                                Likes
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="intro mt-5 mv-hidden">
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <h3 className="intro-about">Intro</h3>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bx-briefcase text-primary" /> Web
                                                            Developer at <a href="#">Company Name</a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bx-map text-primary" /> Lives in{" "}
                                                            <a href="#">City, Country</a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bx-time text-primary" /> Last Login{" "}
                                                            <a href="#">
                                                                Online{" "}
                                                                <span className="ml-1 online-status bg-success" />
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <a
                                                            href="#"
                                                            className="btn btn-quick-link join-group-btn border w-100"
                                                        >
                                                            Edit Details
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="intro mt-5 row mv-hidden">
                                                    <div className="col-md-4">
                                                        <img
                                                            src="assets/images/users/album/album-1.jpg"
                                                            width={95}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <img
                                                            src="assets/images/users/album/album-2.jpg"
                                                            width={95}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <img
                                                            src="assets/images/users/album/album-3.jpg"
                                                            width={95}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="intro mt-5 mv-hidden">
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <h3 className="intro-about">Other Social Accounts</h3>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bxl-facebook-square facebook-color" />{" "}
                                                            <a href="#" target="_blank">
                                                                facebook.com/username
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bxl-twitter twitter-color" />{" "}
                                                            <a href="#" target="_blank">
                                                                twitter.com/username
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <div className="intro-item d-flex justify-content-between align-items-center">
                                                        <p className="intro-title text-muted">
                                                            <i className="bx bxl-instagram instagram-color" />{" "}
                                                            <a href="#" target="_blank">
                                                                instagram.com/username
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-9 p-0">
                                            <div className="profile-info-right">
                                                {/* Posts section */}
                                                <div className="row">
                                                    <div className="col-md-9 profile-center">
                                                        <ul className="list-inline profile-links d-flex justify-content-between w-shadow rounded">
                                                            <li className="list-inline-item profile-active">
                                                                <a href="/profile">Timeline</a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a href="/About">About</a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a href="/friends">Friends</a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a href="/photo">Photos</a>
                                                            </li>
                                                            <li className="list-inline-item dropdown">
                                                                <a
                                                                    href="#"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="bx bx-dots-vertical-rounded" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right profile-ql-dropdown">
                                                                    <a href="#" className="dropdown-item">
                                                                        Activity Log
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        Videos
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        Check-Ins
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        Events
                                                                    </a>
                                                                    <a href="#" className="dropdown-item">
                                                                        Likes
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <Container>
                                                        <Row>
                                                            <Col md={1} lg={1} xl={1}></Col>
                                                            <Col>  <CalendarChart /></Col>
                                                            <Col md={1} lg={1} xl={1}></Col>
                                                        </Row>
                                                      
                                                        </Container>
                                                     
                                                        <div className="bg-white profile-posts-options mt-5 mb-4 py-3 d-flex justify-content-between shadow-sm">
                                                            <div className="col-md-3 col-sm-12">
                                                                <h6 className="timeline-title">Posts</h6>
                                                            </div>
                                                            <div className="col-md-9 col-sm-12">

                                                                <div className="timeline-manage">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-quick-link join-group-btn border btn-sm tmo-buttons"
                                                                    >
                                                                        <i className="bx bxs-cog" /> Manage Posts
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-quick-link join-group-btn border btn-sm tmo-buttons"
                                                                    >
                                                                        <i className="bx bx-align-middle" /> List View
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-quick-link join-group-btn border btn-sm tmo-buttons"
                                                                    >
                                                                        <i className="bx bxs-grid-alt" /> Grid View
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="post border-bottom p-3 bg-white w-shadow">
                                                            <div className="media text-muted pt-3">
                                                                <img
                                                                    src={avatarUrl}
                                                                    alt="Online user"
                                                                    className="mr-3 post-user-image"
                                                                />
                                                                <div className="media-body pb-3 mb-0 small lh-125">
                                                                    <div className="d-flex justify-content-between align-items-center w-100">
                                                                        <span className="post-type text-muted">
                                                                            <a
                                                                                href="#"
                                                                                className="text-gray-dark post-user-name mr-2"
                                                                            >
                                                                                Arthur Minasyan
                                                                            </a>{" "}
                                                                            updated his cover photo.
                                                                        </span>
                                                                        <div className="dropdown">
                                                                            <a
                                                                                href="#"
                                                                                className="post-more-settings"
                                                                                role="button"
                                                                                data-toggle="dropdown"
                                                                                id="postOptions"
                                                                                aria-haspopup="true"
                                                                                aria-expanded="false"
                                                                            >
                                                                                <i className="bx bx-dots-horizontal-rounded" />
                                                                            </a>
                                                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left post-dropdown-menu">
                                                                                <a
                                                                                    href="#"
                                                                                    className="dropdown-item"
                                                                                    aria-describedby="savePost"
                                                                                >
                                                                                    <div className="row">
                                                                                        <div className="col-md-2">
                                                                                            <i className="bx bx-bookmark-plus post-option-icon" />
                                                                                        </div>
                                                                                        <div className="col-md-10">
                                                                                            <span className="fs-9">Save post</span>
                                                                                            <small
                                                                                                id="savePost"
                                                                                                className="form-text text-muted"
                                                                                            >
                                                                                                Add this to your saved items
                                                                                            </small>
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                                <a
                                                                                    href="#"
                                                                                    className="dropdown-item"
                                                                                    aria-describedby="hidePost"
                                                                                >
                                                                                    <div className="row">
                                                                                        <div className="col-md-2">
                                                                                            <i className="bx bx-hide post-option-icon" />
                                                                                        </div>
                                                                                        <div className="col-md-10">
                                                                                            <span className="fs-9">Hide post</span>
                                                                                            <small
                                                                                                id="hidePost"
                                                                                                className="form-text text-muted"
                                                                                            >
                                                                                                See fewer posts like this
                                                                                            </small>
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                                <a
                                                                                    href="#"
                                                                                    className="dropdown-item"
                                                                                    aria-describedby="snoozePost"
                                                                                >
                                                                                    <div className="row">
                                                                                        <div className="col-md-2">
                                                                                            <i className="bx bx-time post-option-icon" />
                                                                                        </div>
                                                                                        <div className="col-md-10">
                                                                                            <span className="fs-9">
                                                                                                Snooze Arthur for 30 days
                                                                                            </span>
                                                                                            <small
                                                                                                id="snoozePost"
                                                                                                className="form-text text-muted"
                                                                                            >
                                                                                                Temporarily stop seeing posts
                                                                                            </small>
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                                <a
                                                                                    href="#"
                                                                                    className="dropdown-item"
                                                                                    aria-describedby="reportPost"
                                                                                >
                                                                                    <div className="row">
                                                                                        <div className="col-md-2">
                                                                                            <i className="bx bx-block post-option-icon" />
                                                                                        </div>
                                                                                        <div className="col-md-10">
                                                                                            <span className="fs-9">Report</span>
                                                                                            <small
                                                                                                id="reportPost"
                                                                                                className="form-text text-muted"
                                                                                            >
                                                                                                I'm concerned about this post
                                                                                            </small>
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <span className="d-block">
                                                                        3 hours ago <i className="bx bx-globe ml-3" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="mt-3">
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit. Quis voluptatem veritatis harum, tenetur,
                                                                    quibusdam voluptatum, incidunt saepe minus maiores
                                                                    ea atque sequi illo veniam sint quaerat corporis
                                                                    totam et. Culpa?
                                                                </p>
                                                            </div>
                                                            <div className="d-block mt-3">
                                                                <img
                                                                    src="assets/images/users/post/post-1.jpg"
                                                                    className="w-100 mb-3"
                                                                    alt="post image"
                                                                />
                                                            </div>
                                                            <div className="mb-2">
                                                                {/* Reactions */}
                                                                <div className="argon-reaction">
                                                                    <span className="like-btn">
                                                                        <a
                                                                            href="#"
                                                                            className="post-card-buttons"
                                                                            id="reactions"
                                                                        >
                                                                            <i className="bx bxs-like mr-2" /> 67
                                                                        </a>
                                                                        <ul className="reactions-box dropdown-shadow">
                                                                            <li
                                                                                className="reaction reaction-like"
                                                                                data-reaction="Like"
                                                                            />
                                                                            <li
                                                                                className="reaction reaction-love"
                                                                                data-reaction="Love"
                                                                            />
                                                                            <li
                                                                                className="reaction reaction-haha"
                                                                                data-reaction="HaHa"
                                                                            />
                                                                            <li
                                                                                className="reaction reaction-wow"
                                                                                data-reaction="Wow"
                                                                            />
                                                                            <li
                                                                                className="reaction reaction-sad"
                                                                                data-reaction="Sad"
                                                                            />
                                                                            <li
                                                                                className="reaction reaction-angry"
                                                                                data-reaction="Angry"
                                                                            />
                                                                        </ul>
                                                                    </span>
                                                                </div>
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    className="post-card-buttons"
                                                                    id="show-comments"
                                                                >
                                                                    <i className="bx bx-message-rounded mr-2" /> 5
                                                                </a>
                                                                <div className="dropdown dropup share-dropup">
                                                                    <a
                                                                        href="#"
                                                                        className="post-card-buttons"
                                                                        data-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="bx bx-share-alt mr-2" /> Share
                                                                    </a>
                                                                    <div className="dropdown-menu post-dropdown-menu">
                                                                        <a href="#" className="dropdown-item">
                                                                            <div className="row">
                                                                                <div className="col-md-2">
                                                                                    <i className="bx bx-share-alt" />
                                                                                </div>
                                                                                <div className="col-md-10">
                                                                                    <span>Share Now (Public)</span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                        <a href="#" className="dropdown-item">
                                                                            <div className="row">
                                                                                <div className="col-md-2">
                                                                                    <i className="bx bx-share-alt" />
                                                                                </div>
                                                                                <div className="col-md-10">
                                                                                    <span>Share...</span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                        <a href="#" className="dropdown-item">
                                                                            <div className="row">
                                                                                <div className="col-md-2">
                                                                                    <i className="bx bx-message" />
                                                                                </div>
                                                                                <div className="col-md-10">
                                                                                    <span>Send as Message</span>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="border-top pt-3 hide-comments"
                                                                style={{ display: "none" }}
                                                            >
                                                                <div className="row bootstrap snippets">
                                                                    <div className="col-md-12">
                                                                        <div className="comment-wrapper">
                                                                            <div className="panel panel-info">
                                                                                <div className="panel-body">
                                                                                    <ul className="media-list comments-list">
                                                                                        <li className="media comment-form">
                                                                                            <a href="#" className="pull-left">
                                                                                                <img
                                                                                                    src={avatarUrl}
                                                                                                    alt=""
                                                                                                    className="img-circle"
                                                                                                />
                                                                                            </a>
                                                                                            <div className="media-body">
                                                                                                <form action="" method="" role="form">
                                                                                                    <div className="row">
                                                                                                        <div className="col-md-12">
                                                                                                            <div className="input-group">
                                                                                                                <input
                                                                                                                    type="text"
                                                                                                                    className="form-control comment-input"
                                                                                                                    placeholder="Write a comment..."
                                                                                                                />
                                                                                                                <div className="input-group-btn">
                                                                                                                    <button
                                                                                                                        type="button"
                                                                                                                        className="btn comment-form-btn"
                                                                                                                        data-toggle="tooltip"
                                                                                                                        data-placement="top"
                                                                                                                        title="Tooltip on top"
                                                                                                                    >
                                                                                                                        <i className="bx bxs-smiley-happy" />
                                                                                                                    </button>
                                                                                                                    <button
                                                                                                                        type="button"
                                                                                                                        className="btn comment-form-btn comment-form-btn"
                                                                                                                        data-toggle="tooltip"
                                                                                                                        data-placement="top"
                                                                                                                        title="Tooltip on top"
                                                                                                                    >
                                                                                                                        <i className="bx bx-camera" />
                                                                                                                    </button>
                                                                                                                    <button
                                                                                                                        type="button"
                                                                                                                        className="btn comment-form-btn comment-form-btn"
                                                                                                                        data-toggle="tooltip"
                                                                                                                        data-placement="top"
                                                                                                                        title="Tooltip on top"
                                                                                                                    >
                                                                                                                        <i className="bx bx-microphone" />
                                                                                                                    </button>
                                                                                                                    <button
                                                                                                                        type="button"
                                                                                                                        className="btn comment-form-btn"
                                                                                                                        data-toggle="tooltip"
                                                                                                                        data-placement="top"
                                                                                                                        title="Tooltip on top"
                                                                                                                    >
                                                                                                                        <i className="bx bx-file-blank" />
                                                                                                                    </button>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </form>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li className="media">
                                                                                            <a href="#" className="pull-left">
                                                                                                <img
                                                                                                    src="assets/images/users/user-2.jpg"
                                                                                                    alt=""
                                                                                                    className="img-circle"
                                                                                                />
                                                                                            </a>
                                                                                            <div className="media-body">
                                                                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                                                                    <strong className="text-gray-dark">
                                                                                                        <a href="#" className="fs-8">
                                                                                                            Karen Minas
                                                                                                        </a>
                                                                                                    </strong>
                                                                                                    <a href="#">
                                                                                                        <i className="bx bx-dots-horizontal-rounded" />
                                                                                                    </a>
                                                                                                </div>
                                                                                                <span className="d-block comment-created-time">
                                                                                                    30 min ago
                                                                                                </span>
                                                                                                <p className="fs-8 pt-2">
                                                                                                    Lorem ipsum dolor sit amet,
                                                                                                    consectetur adipiscing elit. Lorem
                                                                                                    ipsum dolor sit amet,{" "}
                                                                                                    <a href="#">
                                                                                                        #consecteturadipiscing{" "}
                                                                                                    </a>
                                                                                                    .
                                                                                                </p>
                                                                                                <div className="commentLR">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn btn-link fs-8"
                                                                                                    >
                                                                                                        Like
                                                                                                    </button>
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn btn-link fs-8"
                                                                                                    >
                                                                                                        Reply
                                                                                                    </button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li className="media">
                                                                                            <a href="#" className="pull-left">
                                                                                                <img
                                                                                                    src="https://bootdey.com/img/Content/user_2.jpg"
                                                                                                    alt=""
                                                                                                    className="img-circle"
                                                                                                />
                                                                                            </a>
                                                                                            <div className="media-body">
                                                                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                                                                    <strong className="text-gray-dark">
                                                                                                        <a href="#" className="fs-8">
                                                                                                            Lia Earnest
                                                                                                        </a>
                                                                                                    </strong>
                                                                                                    <a href="#">
                                                                                                        <i className="bx bx-dots-horizontal-rounded" />
                                                                                                    </a>
                                                                                                </div>
                                                                                                <span className="d-block comment-created-time">
                                                                                                    2 hours ago
                                                                                                </span>
                                                                                                <p className="fs-8 pt-2">
                                                                                                    Lorem ipsum dolor sit amet,
                                                                                                    consectetur adipiscing elit. Lorem
                                                                                                    ipsum dolor sit amet,{" "}
                                                                                                    <a href="#">
                                                                                                        #consecteturadipiscing{" "}
                                                                                                    </a>
                                                                                                    .
                                                                                                </p>
                                                                                                <div className="commentLR">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn btn-link fs-8"
                                                                                                    >
                                                                                                        Like
                                                                                                    </button>
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn btn-link fs-8"
                                                                                                    >
                                                                                                        Reply
                                                                                                    </button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li className="media">
                                                                                            <a href="#" className="pull-left">
                                                                                                <img
                                                                                                    src="https://bootdey.com/img/Content/user_3.jpg"
                                                                                                    alt=""
                                                                                                    className="img-circle"
                                                                                                />
                                                                                            </a>
                                                                                            <div className="media-body">
                                                                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                                                                    <strong className="text-gray-dark">
                                                                                                        <a href="#" className="fs-8">
                                                                                                            Rusty Mickelsen
                                                                                                        </a>
                                                                                                    </strong>
                                                                                                    <a href="#">
                                                                                                        <i className="bx bx-dots-horizontal-rounded" />
                                                                                                    </a>
                                                                                                </div>
                                                                                                <span className="d-block comment-created-time">
                                                                                                    17 hours ago
                                                                                                </span>
                                                                                                <p className="fs-8 pt-2">
                                                                                                    Lorem ipsum dolor sit amet,
                                                                                                    consectetur adipiscing elit. Lorem
                                                                                                    ipsum dolor sit amet,{" "}
                                                                                                    <a href="#">
                                                                                                        #consecteturadipiscing{" "}
                                                                                                    </a>
                                                                                                    .
                                                                                                </p>
                                                                                                <div className="commentLR">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn btn-link fs-8"
                                                                                                    >
                                                                                                        Like
                                                                                                    </button>
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn btn-link fs-8"
                                                                                                    >
                                                                                                        Reply
                                                                                                    </button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                        <li className="media">
                                                                                            <div className="media-body">
                                                                                                <div className="comment-see-more text-center">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn btn-link fs-8"
                                                                                                    >
                                                                                                        See More
                                                                                                    </button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 profile-quick-media">
                                                        <h6 className="text-muted timeline-title">
                                                            Recent Media
                                                        </h6>
                                                        <div className="quick-media">
                                                            <div className="media-overlay" />
                                                            <a href="#" className="quick-media-img">
                                                                <img
                                                                    src="assets/images/users/album/album-1.jpg"
                                                                    alt="Quick media"
                                                                />
                                                            </a>
                                                            <div className="media-overlay-content">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="media-overlay-owner">
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Media owner image"
                                                                        />
                                                                        <span className="overlay-owner-name fs-9">
                                                                            Irwin M. Spelle
                                                                        </span>
                                                                    </div>
                                                                    <div className="dropdown">
                                                                        <a
                                                                            href="#"
                                                                            className="overlay-more"
                                                                            data-toggle="dropdown"
                                                                            role="button"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="bx bx-dots-horizontal-rounded" />
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right nav-drop dropdown-shadow">
                                                                            <a className="dropdown-item" href="#">
                                                                                Save post
                                                                            </a>
                                                                            <a className="dropdown-item" href="#">
                                                                                Turn on notifications
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay-bottom d-flex justify-content-between align-items-center">
                                                                    <div className="argon-reaction">
                                                                        <span className="like-btn">
                                                                            <a
                                                                                href="#"
                                                                                className="post-card-buttons"
                                                                                id="reactions"
                                                                            >
                                                                                <i className="bx bxs-like mr-1" /> 67
                                                                            </a>
                                                                            <ul className="reactions-box dropdown-shadow">
                                                                                <li
                                                                                    className="reaction reaction-like"
                                                                                    data-reaction="Like"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-love"
                                                                                    data-reaction="Love"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-haha"
                                                                                    data-reaction="HaHa"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-wow"
                                                                                    data-reaction="Wow"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-sad"
                                                                                    data-reaction="Sad"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-angry"
                                                                                    data-reaction="Angry"
                                                                                />
                                                                            </ul>
                                                                        </span>
                                                                    </div>
                                                                    <div className="liked-users">
                                                                        <img
                                                                            src="assets/images/users/user-9.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-6.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Liked users"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="quick-media">
                                                            <div className="media-overlay" />
                                                            <a href="#" className="quick-media-img">
                                                                <img
                                                                    src="assets/images/users/album/album-2.jpg"
                                                                    alt="Quick media"
                                                                />
                                                            </a>
                                                            <div className="media-overlay-content">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="media-overlay-owner">
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Media owner image"
                                                                        />
                                                                        <span className="overlay-owner-name fs-9">
                                                                            Irwin M. Spelle
                                                                        </span>
                                                                    </div>
                                                                    <div className="dropdown">
                                                                        <a
                                                                            href="#"
                                                                            className="overlay-more"
                                                                            data-toggle="dropdown"
                                                                            role="button"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="bx bx-dots-horizontal-rounded" />
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right nav-drop dropdown-shadow">
                                                                            <a className="dropdown-item" href="#">
                                                                                Save post
                                                                            </a>
                                                                            <a className="dropdown-item" href="#">
                                                                                Turn on notifications
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay-bottom d-flex justify-content-between align-items-center">
                                                                    <div className="argon-reaction">
                                                                        <span className="like-btn">
                                                                            <a
                                                                                href="#"
                                                                                className="post-card-buttons"
                                                                                id="reactions"
                                                                            >
                                                                                <i className="bx bxs-like mr-1" /> 67
                                                                            </a>
                                                                            <ul className="reactions-box dropdown-shadow">
                                                                                <li
                                                                                    className="reaction reaction-like"
                                                                                    data-reaction="Like"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-love"
                                                                                    data-reaction="Love"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-haha"
                                                                                    data-reaction="HaHa"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-wow"
                                                                                    data-reaction="Wow"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-sad"
                                                                                    data-reaction="Sad"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-angry"
                                                                                    data-reaction="Angry"
                                                                                />
                                                                            </ul>
                                                                        </span>
                                                                    </div>
                                                                    <div className="liked-users">
                                                                        <img
                                                                            src="assets/images/users/user-9.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-6.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Liked users"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="quick-media">
                                                            <div className="media-overlay" />
                                                            <a href="#" className="quick-media-img">
                                                                <img
                                                                    src="assets/images/users/album/album-3.jpg"
                                                                    alt="Quick media"
                                                                />
                                                            </a>
                                                            <div className="media-overlay-content">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="media-overlay-owner">
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Media owner image"
                                                                        />
                                                                        <span className="overlay-owner-name fs-9">
                                                                            Irwin M. Spelle
                                                                        </span>
                                                                    </div>
                                                                    <div className="dropdown">
                                                                        <a
                                                                            href="#"
                                                                            className="overlay-more"
                                                                            data-toggle="dropdown"
                                                                            role="button"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="bx bx-dots-horizontal-rounded" />
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right nav-drop dropdown-shadow">
                                                                            <a className="dropdown-item" href="#">
                                                                                Save post
                                                                            </a>
                                                                            <a className="dropdown-item" href="#">
                                                                                Turn on notifications
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="overlay-bottom d-flex justify-content-between align-items-center">
                                                                    <div className="argon-reaction">
                                                                        <span className="like-btn">
                                                                            <a
                                                                                href="#"
                                                                                className="post-card-buttons"
                                                                                id="reactions"
                                                                            >
                                                                                <i className="bx bxs-like mr-1" /> 67
                                                                            </a>
                                                                            <ul className="reactions-box dropdown-shadow">
                                                                                <li
                                                                                    className="reaction reaction-like"
                                                                                    data-reaction="Like"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-love"
                                                                                    data-reaction="Love"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-haha"
                                                                                    data-reaction="HaHa"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-wow"
                                                                                    data-reaction="Wow"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-sad"
                                                                                    data-reaction="Sad"
                                                                                />
                                                                                <li
                                                                                    className="reaction reaction-angry"
                                                                                    data-reaction="Angry"
                                                                                />
                                                                            </ul>
                                                                        </span>
                                                                    </div>
                                                                    <div className="liked-users">
                                                                        <img
                                                                            src="assets/images/users/user-9.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-6.png"
                                                                            alt="Liked users"
                                                                        />
                                                                        <img
                                                                            src="assets/images/users/user-12.png"
                                                                            alt="Liked users"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* New message modal */}
                <div
                    className="modal fade"
                    id="newMessageModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="newMessageModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header new-msg-header">
                                <h5 className="modal-title" id="newMessageModalLabel">
                                    Start new conversation
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body new-msg-body">
                                <form action="" method="" className="new-msg-form">
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">
                                            Message:
                                        </label>
                                        <textarea
                                            className="form-control search-input"
                                            rows={5}
                                            id="message-text"
                                            placeholder="Type a message..."
                                            defaultValue={""}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer new-msg-footer">
                                <button type="button" className="btn btn-primary btn-sm">
                                    Send message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Core */}
                {/* Optional */}
            </>

    </div>
  );
}






function CalendarChart() {
  const data = [
    [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Mood Score' }],
    [new Date(2024, 5, 12), 3],
    [new Date(2024, 8, 5), 10],
    [new Date(2024, 0, 16), 4],
    [new Date(2024, 5, 16), 9],
    [new Date(2024, 9, 18), 5],
    [new Date(2024, 10, 18), 5],
    [new Date(2024, 10, 26), 3],
    [new Date(2024, 4, 8), 9],
    [new Date(2024, 1, 16), 8],
    [new Date(2024, 5, 1), 9],
    [new Date(2024, 8, 2), 8],
    [new Date(2024, 11, 15), 5],
    [new Date(2024, 5, 11), 2],
    [new Date(2024, 6, 18), 9],
   
  ];
  

  const options = {
    title: "Your Mood for 2024",
    height: 350,
    calendar: {
      cellSize: 11,  // 單元格大小
      dayOfWeekLabel: {
        fontName: 'Arial',
        fontSize: 14,
        color: '#666',
      },
      monthLabel: {
        fontName: 'Arial',
        fontSize: 18,
        color: '#333',
      },
      focusedCellColor: {
        stroke: '#ff0000',
        strokeOpacity: 0.8,
      },
      colorAxis: {
        minValue: 0,
        maxValue: 10,
        colors: ['#ffffff', '#00008b'],  // 白色到深藍色
      },
    },
  };

  return (
    <div style={{ width: '100%', 
      aspectRatio: '6 / 1' ,

      }}>
      <Chart
        chartType="Calendar"
        data={data}
        options={options}
        width="100%"  // 寬度設為 100%
        height="100%"  // 高度設為 100%
        loader={<div>Loading Chart...</div>}
      />
    </div>
  );
}

export default Profile;