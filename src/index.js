import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './mainpage'
import Blank from './blank';
import Components from './components';
import Friends from './friends';
import Groups from './groups';
import MarcketPlace from './marketplace';
import Messages from './messages';
import Modal from './modal';
import NewsFeed2 from './newsfeed-2';
import Profile from './profile';
import About from './about';
import Photo from './photo';
import Settings from './settings';
import SignIn from './sign-in';
import SignUp from './sign-up';
// import Widgets from './widgets';
import reportWebVitals from './reportWebVitals';
import PrivateRoute from './PrivateRoute';
import { UserProvider } from './context';
import { RefreshProvider } from './refreshContext';
import Header from './header';
import Intro from './intro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <Router>
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/*' element={
          <>
            <Header />
            <div className="main-content">
              <Routes>
                <Route path='/' element={<PrivateRoute element={MainPage} />} />
                <Route path='/blanck' element={<PrivateRoute element={Blank} />} />
                <Route path='/components' element={<PrivateRoute element={Components} />} />
                <Route path='/friends' element={<PrivateRoute element={Friends} />} />
                <Route path='/groups' element={<PrivateRoute element={Groups} />} />
                <Route path='/marcketplace' element={<PrivateRoute element={MarcketPlace} />} />
                <Route path='/messages' element={<PrivateRoute element={Messages} />} />
                <Route path='/modal' element={<PrivateRoute element={Modal} />} />
                <Route path='/newsfeed-2' element={<PrivateRoute element={NewsFeed2} />} />
                <Route path='/profile' element={<PrivateRoute element={Profile} />} />
                <Route path='/settings' element={<PrivateRoute element={Settings} />} />
                <Route path='/about' element={<PrivateRoute element={About} />} />
                <Route path='/photo' element={<PrivateRoute element={Photo} />} />
                <Route path='/intro' element={<PrivateRoute element={Intro} />} />
                <Route
                  path="/profile/:userid"
                  element={<PrivateRoute element={Profile} />}
                />
              </Routes>
            </div>
          </>
        } />
      </Routes>
    </Router>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();