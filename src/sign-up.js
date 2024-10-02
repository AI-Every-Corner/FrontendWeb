import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone'; // 引入react-dropzone

function SignUp() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    birth: '',
    age: '',
    gender: '',
    email: '',
    phoneNum: '',
    image: null
  });


  const [preview, setPreview] = useState(null); // 預覽圖片的狀態
  const [passwordError, setPasswordError] = useState('');
  const [imageUploaded, setImageUploaded] = useState(false); // 照片上傳狀態

  // 處理表單輸入
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));

    // 檢查密碼是否匹配
    if (name === 'confirmPassword' || name === 'password') {
      if (name === 'confirmPassword' && value !== formData.password) {
        setPasswordError('密碼不匹配');
      } else if (name === 'password' && value !== formData.confirmPassword) {
        setPasswordError('密碼不匹配');
      } else {
        setPasswordError('');
      }
    }
  };

  // 使用react-dropzone處理圖片拖放上傳和預覽
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setFormData(prevData => ({ ...prevData, image: file }));

    // 建立圖片預覽的URL
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    setImageUploaded(true); // 設置照片上傳狀態為已上傳
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('密碼不匹配');
      return;
    }
    try {
      const { confirmPassword, ...dataToSend } = formData;

      const formDataToSend = new FormData();
      for (let key in dataToSend) {
        if (key === 'image') {
          if (dataToSend[key]) {
            formDataToSend.append(key, dataToSend[key], dataToSend[key].name);
          }
        } else {
          formDataToSend.append(key, dataToSend[key]);
        }
      }

      const response = await axios.post('http://localhost:8080/api/auth/signup', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      alert('註冊成功');
      navigate('/sign-in');
    } catch (error) {
      console.error('註冊失敗:', error);
      if (error.response) {
        alert(`註冊失敗: ${error.response.data.message || error.response.data}`);
      } else if (error.request) {
        alert('無法連接到服務器，請稍後再試');
      } else {
        alert('發生錯誤，請稍後再試');
      }
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false
  });

  return (
    <div className="App">
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="icon" type="image/png" href="assets/images/logo-16x16.png" />
      <title>Argon - Social Network</title>
      <link href="https://fonts.googleapis.com/css?family=Major+Mono+Display" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/boxicons@1.9.2/css/boxicons.min.css" rel="stylesheet" />
      <link href="assets/css/bootstrap/bootstrap.min.css" rel="stylesheet" />
      <link href="assets/css/style.css" rel="stylesheet" />
      <link href="assets/css/components.css" rel="stylesheet" />
      <link href="assets/css/auth.css" rel="stylesheet" />
      <link href="assets/css/media.css" rel="stylesheet" />
      
      <div className="row ht-100v flex-row-reverse no-gutters">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="signup-form">
            <div className="auth-logo text-center mb-5">
              <div className="row">
                <div className="col-md-2">
                  <img src="assets/images/logo-64x64.png" className="logo-img" alt="Logo" />
                </div>
                <div className="col-md-10">
                  <p>Argon Social Network</p>
                  <span>Design System</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="pt-5">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="text" className="form-control" name="username" placeholder="Name" value={formData.username} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                  </div>
                </div>
                {passwordError && (
                  <div className="col-md-12">
                    <p className="text-danger">{passwordError}</p>
                  </div>
                )}
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="date" className="form-control" name="birth" placeholder="Birth Date" value={formData.birth} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="number" className="form-control" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <select name="gender" className="form-control" value={formData.gender} onChange={handleChange}>
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="tel" className="form-control" name="phoneNum" placeholder="Phone Number" value={formData.phoneNum} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    {/* 使用react-dropzone來實現拖放上傳 */}
                    {!imageUploaded && (
                      <div {...getRootProps()} style={dropzoneStyle}>
                        <input {...getInputProps()} />
                        {isDragActive ? (
                          <p>拖放圖片至此...</p>
                        ) : (
                          <p>拖拉或點擊上傳圖片</p>
                        )}
                      </div>
                    )}
                    {preview && (
                      <div style={previewContainerStyle}>
                        <img src={preview} alt="預覽圖片" style={previewImageStyle} />
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  <p className="agree-privacy">By clicking the Sign Up button below you agreed to our privacy policy and terms of use of our website.</p>
                </div>
                <div className="col-md-6">
                  <span className="go-login">
                    Already a member? <Link to="/sign-in">Sign In</Link>
                  </span>
                </div>
                <div className="col-md-6 text-right">
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary sign-up">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 auth-bg-image d-flex justify-content-center align-items-center">
          <div className="auth-left-content mt-5 mb-5 text-center">
            <div className="weather-small text-white">
              <p className="current-weather">
                <i className="bx bx-sun" /> <span>14°</span>
              </p>
              <p className="weather-city">Gyumri</p>
            </div>
            <div className="text-white mt-5 mb-5">
              <h2 className="create-account mb-3">Create Account</h2>
              <p>Enter your personal details and start journey with us.</p>
            </div>
            <div className="auth-quick-links">
              <a href="#" className="btn btn-outline-primary">
                Purchase template
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 樣式設置
const dropzoneStyle = {
  width: '100%',
  height: '150px',
  border: '2px dashed #ccc',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

const previewContainerStyle = {
  marginTop: '10px',
  textAlign: 'center',
};

const previewImageStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  objectFit: 'cover',
};

export default SignUp;
