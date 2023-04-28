
import { Box,Typography,styled} from "@mui/material";
import {LocationOn,SettingsBrightness,Opacity,Brightness5,Brightness6,Dehaze,Cloud} from '@mui/icons-material'

const Values=styled(Typography)({
    padding:10,
    fontSize: 20,
    letterSpacing:2,
    '&>svg':{
        marginRight:10
    }
})

const Empty=styled(Typography)({
    color:'red',
    margin:50,
    padding:20
})

const Information=({result})=>{
    return (
        result!=null && Object.keys(result).length>0 ?
        <Box>
            <Values><LocationOn/>Locations: {result.name} , {result.sys.country}</Values>
            <Values><SettingsBrightness />Temperature : {result.main.temp}</Values>
            <Values><Opacity />Humidity : {result.main.humidity}</Values>
            <Values><Brightness5 />Sun Rise : {new Date(result.sys.sunrise*1000).toLocaleTimeString()}</Values>
            <Values><Brightness6 />Sun Set : {new Date(result.sys.sunset*1000).toLocaleTimeString()}</Values>
            <Values><Dehaze />Humidity : {result.weather[0].main}</Values>
            <Values><Cloud />Clouds : {result.clouds.all} %</Values>
            
        </Box>
        : <Empty>Enter the City and Country to get the Weather</Empty>
    )
}

export default Information;