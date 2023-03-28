import styled from 'styled-components'; 

const Div = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 99;
background-color: #fff;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.16);
transition: all .3s ease-out 0s;
margin: 0;
padding: 0;
box-sizing: border-box;
display: block;
` 
export default function Header(){
    return(
    <Div>
        
    </Div>
    )
}