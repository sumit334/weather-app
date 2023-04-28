
import axios from 'axios';

const API_KEY='675a6f1f0e4160179b80a9177f7c345d';
const API_URL='https://api.openweathermap.org/data/2.5/weather';

export const getWeather= async (city,country)=>{
    //always whenever you are required to fetch an api then you must use try and catch block to handle the exception so that the call does'nt throws any error
    try {
        let response=await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log('Error while fetching the weather api',error.message);
        return error.response;
    }
}