import styled from 'styled-components';

const Div = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center
box-shadow: 0 0 20px 0 rgba(0,0,0,.1);
`
const Div2 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-item: center;
// box-shadow: 0 0 20px 0 rgba(0,0,0,.1);
width: 100vw;
`
const Div3 = styled.div`
flex-direction: row;
justify-content: center;
align-item: center;
box-shadow: 0 0 20px 0 rgba(0,0,0,.1);
height: 55vh;
width: 20vw;
margin: 20px;
border-radius: 5px;
`

const H4 = styled.h4`
font-size: 50px;
max-width: 30%;
font-weight: 600;
line-height: 55px;
color: #121212;
margin-bottom: 10px;
`

const P = styled.p`
max-width: 30%;
font-size: 16px;
line-height: 24px;
color: #6c6c6c;
margin-top: 24px;
}
`

export default function Pricing(){
    return (<>
        <Div> 
            <H4> OUR PRICING </H4>
            <P> Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! </P>
            <Div2>
                <Div3></Div3>
                <Div3></Div3>
                <Div3></Div3>
            </Div2>
        </Div>
        
        </>);
}

function CreateCard(props){
return (
    <>

    </>
)
}