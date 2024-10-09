import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone'; // 引入react-dropzone

function SignUp() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    nickName: '',
    password: '',
    birth: '',
    gender: '',
    email: '',
    phoneNum: '',
    image: null
  });


  const [preview, setPreview] = useState(null); // 預覽圖片的狀態
  const [passwordError, setPasswordError] = useState('');
  const [imageUploaded, setImageUploaded] = useState(false); // 照片上傳狀態
  const [weather, setWeather] = useState({ temp: '', city: '', icon: '' });
  const [errors, setErrors] = useState({});

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
    // 清除該字段的錯誤
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
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
    // 表單驗證
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Name is required";
    if (!formData.nickName.trim()) newErrors.nickName = "Nickname is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.birth) newErrors.birth = "Date of Birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNum) newErrors.phoneNum = "Phone Number is required";
    if (!formData.image) newErrors.image = "Profile picture is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
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

  useEffect(() => {
    fetchWeather();
  }, []);
  
  const fetchWeather = async () => {
    const API_KEY = '';

    const city_name = 'Taipei'; // 或者使用地理位置API獲取用戶當前位置
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`);
      setWeather({
        temp: Math.round(response.data.main.temp),
        city: response.data.name,
        icon: response.data.weather[0].icon
      });
    } catch (error) {
      console.error('獲取天氣數據失敗:', error);
    }
  };

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
                <div className="col-md-6 mb-3">
                  <input type="text" className={`form-control custom-input ${errors.username ? 'is-invalid' : ''}`} name="username" placeholder="Name" value={formData.username} onChange={handleChange} />
                  {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className={`form-control custom-input ${errors.nickName ? 'is-invalid' : ''}`} name="nickName" placeholder="Nickname" value={formData.nickName} onChange={handleChange} />
                  {errors.nickName && <div className="invalid-feedback">{errors.nickName}</div>}
                </div>
                <div className="col-md-6 mb-3">
                  <input type="password" className={`form-control custom-input ${errors.password ? 'is-invalid' : ''}`} name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="col-md-6 mb-3">
                  <input type="password" className={`form-control custom-input ${errors.confirmPassword ? 'is-invalid' : ''}`} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </div>
                {passwordError && (
                  <div className="col-md-12 mb-3">
                    <p className="text-danger">{passwordError}</p>
                  </div>
                )}
                <div className="col-md-6 mb-3">
                  <input type="date" className={`form-control custom-input ${errors.birth ? 'is-invalid' : ''}`} name="birth" placeholder="Date of Birth" value={formData.birth} onChange={handleChange} />
                  {errors.birth && <div className="invalid-feedback">{errors.birth}</div>}
                </div>
                <div className="col-md-6 mb-3">
                  <select name="gender" className={`form-control custom-input ${errors.gender ? 'is-invalid' : ''}`} value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                </div>
                <div className="col-md-6 mb-3">
                  <input type="email" className={`form-control custom-input ${errors.email ? 'is-invalid' : ''}`} name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="col-md-6 mb-3">
                  <input type="tel" className={`form-control custom-input ${errors.phoneNum ? 'is-invalid' : ''}`} name="phoneNum" placeholder="Phone Number" value={formData.phoneNum} onChange={handleChange} />
                  {errors.phoneNum && <div className="invalid-feedback">{errors.phoneNum}</div>}
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    {/* Use react-dropzone for drag and drop upload */}
                    {!imageUploaded && (
                      <div {...getRootProps()} style={dropzoneStyle} className={errors.image ? 'is-invalid' : ''}>
                        <input {...getInputProps()} />
                        {isDragActive ? (
                          <p>Drop the image here...</p>
                        ) : (
                          <p>Drag and drop or click to upload profile picture</p>
                        )}
                      </div>
                    )}
                    {errors.image && <div className="invalid-feedback">{errors.image}</div>}
                    {preview && (
                      <div style={previewContainerStyle}>
                        <img src={preview} alt="Preview image" style={previewImageStyle} />
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <p className="agree-privacy text-muted">By clicking the Sign Up button below, you agree to our privacy policy and terms of use of our website.</p>
                </div>
                <div className="col-md-6 mt-3">
                  <span className="go-login">
                    Already a member? <Link to="/sign-in" className="text-primary">Sign In</Link>
                  </span>
                </div>
                <div className="col-md-6 text-right mt-3">
                  <button type="submit" className="btn btn-primary sign-up px-4 py-2">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 auth-bg-image d-flex justify-content-center align-items-center">
      <div className="auth-left-content mt-5 mb-5 text-center">
        <div className="weather-small text-white">
          <p className="current-weather">
          <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="Weather icon" /> <span>{weather.temp}°</span>
          </p>
          <p className="weather-city">{weather.city}</p>
        </div>
            <div className="text-white mt-5 mb-5">
              <h2 className="create-account mb-3">Create Account</h2>
              <p>Enter your personal details and start journey with us.</p>
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

// 添加以下 CSS 樣式到您的樣式文件中
const styles = `
.custom-input {
  border-radius: 20px;
  padding: 10px 15px;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.custom-input:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.sign-up {
  border-radius: 20px;
  font-weight: bold;
}

.agree-privacy {
  font-size: 0.9rem;
}
`;

// 將樣式添加到文檔中
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default SignUp;