import  {Box,styled} from "@mui/material"
import Sunsetimg from '../assests/images/bg.jpg'
import Form from "../components/Form"
import Information from "../components/Information"
import {useState} from "react"

const Component=styled(Box)({
    height:'100vh',
    display:'flex',//side by side allignment of the img and the word
    width:'65%',
    alignItems:'center',
    margin:'0 auto'
})
const Image=styled(Box)({
    backgroundImage:`url(${Sunsetimg})`,
    width:'28%',
    height:'80%',
    backgroundSize:'cover',
    borderRadius:'20px 0 0 20px'
})

const Home = () =>{
    const [result,setResult]=useState({})

    return(
        <Component>
            <Image></Image>
            <Box style={{width:'72%',height:'80%'}}>
                <Form setResult={setResult} />
                <Information result={result} />
            </Box>
        </Component>
    )
}

export default Home;