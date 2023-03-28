import styled from 'styled-components';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import background from '../images/header-bg.jpg'

const H3 = styled.h3`
font-size: 44px;
line-height: 55px;
color: #121212;
font-weight: 100%;
max-width: 60.333333%;
align-self: center;
`;
const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: centre;
align-items: centre;
padding-top: 195px;
position: relative;
box-sizing: border-box;
padding: 8%;
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 850px;
position: relative;
box-sizing: border-box;
&:before {
    content: "";
    // background: linear-gradient(rgba(100,100,100,0.9),rgba(100,100,100,0.9) 50%,rgba(254,255,244,0.3) 68%,rgba(255,255,255,0.12));
    background-attachment: scroll;
    // background-image: linear-gradient(rgba(232, 237, 255, 0.9), rgba(239, 254, 255, 0.9) 50%, rgba(254, 255, 244, 0.3) 68%, rgba(255, 255, 255, 0.12));
    background-size: auto;
    background-origin: padding-box;
    background-clip: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
};
}
`;

const P = styled.p`
font-size: 20px;
line-height: 32px;
color: #6c6c6c;
margin-top: 8px;
font-weight: 100%;
max-width: 60%;
align-self: center;
`;
const Btn = {
borderRadius: "30px",
color: "#fff",
// padding: "2%",
overflow: "hidden",
boxShadow: "0 3px 6px 0 rgba(0,0,0,.16)",
border: 0,
lineHeight: "30px",
background: "linear-gradient(to right,#0067f4 0%,#2bdbdc 50%,#0067f4 100%)"}

const Btn2 = {
borderRadius: "30px",
backgroundColor:" #fff",
color: "#0067f4",   
overflow: "hidden",
boxShadow: "0 3px 6px 0 rgba(0,0,0,.16)",
border: 0,
lineHeight: "30px",
}



export default function Home (){
    return (
        <Div style = {{ backgroundImage: `url(${background})` }}>
            <H3>
            Handcrafted Landing Page for Startups and SaaS Businesses
            </H3>
            <P>A simple, customizable, and, beautiful SaaS business focused landing page to make your project closer to launch!</P>
            <>
            <Stack direction="row" spacing={2} style = {{alignSelf: "center"}}>
               <Button vari ant="contained" style = {Btn}>GET IN TOUCH</Button>
               <Button variant="contained"  endIcon={<PlayArrowIcon /> } style = {Btn2}>WATCH THE VIDEO</Button>
            </Stack>
            </>
        </Div>
    );
}