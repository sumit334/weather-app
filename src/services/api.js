import axios from 'axios';
const API_KEY = '675a6f1f0e4160179b80a9177f7c345d';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
  try {
    let response = await axios.get(
      `${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    showSnackbar('Got the weather');
    return response.data;
  } catch (error) {
    showSnackbar('Enter the Info');
    
    //return error.response;
  }
};

const showSnackbar = (message) => {
  const snackbar = document.createElement('div');
  snackbar.textContent = message;
  if(message==='Got the weather'){
    snackbar.style.cssText = `
    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    background-color: green;
    color: #fff;
    padding: 16px;
    border-radius: 4px;
    font-family: Arial, sans-serif;
    z-index: 9999;
  `;
  }
  else{
    snackbar.style.cssText = `
    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    background-color: orange;
    color: #fff;
    padding: 16px;
    border-radius: 4px;
    font-family: Arial, sans-serif;
    z-index: 9999;
  `;
  }
  document.body.appendChild(snackbar);
  setTimeout(() => {
    snackbar.remove();
  }, 3000);
};
