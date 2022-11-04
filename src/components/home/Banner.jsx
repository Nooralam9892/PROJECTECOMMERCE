import Carousel from "react-multi-carousel";

import {styled} from "@mui/material"
import { bannerData } from "../../constants/data";



const Image = styled(`img`)({
    width:'100%',
    height:280
})
const responsive = {
   
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Banner=()=> {
  return (
<Carousel 
responsive={responsive}
>
  {
    bannerData.map(data =>(
        <img src={data.url} alt="banner"/>
    ))
  }
  </Carousel>  
  )
}

export default Banner