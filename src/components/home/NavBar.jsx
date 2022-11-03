import { Box, styled} from "@mui/material"
import {navData} from '../../constants/data';

const Component = styled(Box)`
display:flex;
margin:55px 130px 0 130px;
justify-content:space-between;
margin-right:30px;
`
const NavBar =()=> {
  return (
    <Component>
    {
        navData.map(data => (
            <Box>
                <img src={data.url} alt="nav"/>
                <p>{data.text}</p>
            </Box>
        ))
    }
    </Component>
  )
}          

export default NavBar