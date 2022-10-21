import { InputBase,Box,styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchCotainer = styled(Box)`
     background:#fff;
     width:38%;
     margin-left:10px;
     display:flex;

`

const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
border-redius:2px;
`
const SearchIconWrapper= styled(Box)`
color:#2874f0;
padding:5px;
display:flex;
`
const Search= () => {
  return (
    <SearchCotainer> 
    <InputSearchBase 
     placeholder='Search for products,brands and more '
     />
     <SearchIconWrapper>
     <SearchIcon/>
     </SearchIconWrapper>
    </SearchCotainer>
  )
}

export default Search