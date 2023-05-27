// import {Box,InputBase,Button,styled} from '@mui/material'
// import {useState} from 'react'
// import {getWeather} from '../services/api';

// const Container=styled(Box)({
//     background:'#445A6F',
//     padding:'10px'
// });

// const Input=styled(InputBase)({
//     color:'#FFF',
//     marginRight:'20px',
//     fontSize:'18px'
// });

// const GetButton=styled(Button)({
//     background:'#e67e22',
// })


// const Form=({setResult})=>{
//     const [data,setData]=useState({city:'',country:''})

//     const handleChange=(e)=>{
//         setData({...data ,[e.target.name]:e.target.value})
//         //console.log(data);
//     }

//     const getWeatherInfo= async ()=>{
//         let response = await getWeather(data.city,data.country);
//         setResult(response);
//         //console.log(response);
//     }

//     return (
//         <Container>
//             <Input
//                 placeholder='City'
//                 onChange={(e)=>handleChange(e)}
//                 name='city'
//             />
//             <Input
//                 placeholder='Country'
//                 onChange={(e)=>handleChange(e)}
//                 name='country'
//             />
//             <GetButton
//                 variant='contained'
//                 onClick={()=>getWeatherInfo()}
//             >Get Weather</GetButton>
//         </Container>
//     )
// }

// export default Form;
//default export should be only one in one file
//otherwise we need to use name export

//for More Responsive view:


import {Grid,InputBase,Button,styled} from '@mui/material'
import {useState} from 'react'
import {getWeather} from '../services/api';


// const Container=styled(Box)({
//     background:'#445A6F',
//     padding:'10px'
// });

const Input=styled(InputBase)({
    color:'#FFF',
    marginRight:'20px',
    fontSize:'18px'
});

const GetButton=styled(Button)({
    background:'#e67e22',
})


const Form = ({ setResult }) => {
    const [data, setData] = useState({ city: '', country: '' })
  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value })
    }
  
    const getWeatherInfo = async () => {
      let response = await getWeather(data.city, data.country)
      setResult(response)
    }
  
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ bgcolor: '#445A6F', padding: '10px' }}
      >
        <Grid item xs={12} sm={4} md={3}>
          <Input
            placeholder='City'
            onChange={(e) => handleChange(e)}
            name='city'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Input
            placeholder='Country'
            onChange={(e) => handleChange(e)}
            name='country'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <GetButton
            variant='contained'
            onClick={() => getWeatherInfo()}
            fullWidth
          >
            Get Weather
          </GetButton>
        </Grid>
      </Grid>
    )
  }

export default Form;
//default export should be only one in one file
//otherwise we need to use name export
