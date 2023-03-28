import styled from 'styled-components'; 
import React, {useState, useEffect} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: centre;
align-item: centre
box-shadow: 0 0 20px 0 rgba(0,0,0,.1);
` 


function TestimonialCarousel(props)
{
    const [data, setData] = useState([]);

    useEffect(() => {
        let fetchData = async () => { 
        let data = await fetch('http://localhost:3500/testimonials');
        data = await data.json();
        console.log(data)
        setData(data);
        }
        fetchData();
    },[])

    var items = data;

    return (
        <Carousel autoplay = {true} animation = {'fade'} >
            {
                items.filter(item => item.active).map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
    <div style = {{display: "flex", flexDirection: "row"}}>
        <Paper style = {{display: "flex", flexDirection: "row"}}>
            <Div>
                <MediaCard item = {props.item}/>
            </Div>
        </Paper>
    </div>
    )
}



function MediaCard(props) {
    return (
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.testimonial_description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  
export default TestimonialCarousel;



