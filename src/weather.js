import { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
    const [weather, setWeather] = useState({ temp: '', city: '', icon: '' });

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
            icon: response.data.weather[0].icon,
            humidity: response.data.main.humidity,
            windSpeed: response.data.wind.speed,
            time: new Date(response.data.dt * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
          });
        } catch (error) {
          console.error('獲取天氣數據失敗:', error);
        }
      };
return (
    <div className="card shadow-sm">
            <div className="card-body">
            <div className="weather-card-header d-flex justify-content-between align-items-center">
            <p className="fs-1 mb-0">{weather.time}</p>
            <a href="#" className="btn text-primary">
            {weather.city} <i className="bx bx-chevron-down" />
            </a>
            </div>
            <div className="weather-quick align-items-center mt-4">
            <div className="row">
            <div className="col-md-8">
                <img
                src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                width={40}
                height={40}
                alt="Weather icon"
                />
                <h1 className="weather-card display-4 ml-3">
                {weather.temp}<span className="text-muted">°</span>
                </h1>
            </div>
            <div className="col-md-4">
                <p className="mb-0 fs-1">
                <i className="bx bx-droplet" /> {weather.humidity}%
                </p>
                <p className="mb-0 fs-1">
                <i className="bx bx-flag" /> {weather.windSpeed}km/h
                </p>
            </div>
            </div>
            </div>
            </div>
        </div>
);
}

export default Weather;