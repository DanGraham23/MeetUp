import {
    Box, 
    styled, 
    InputBase
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import {axiosPrivate} from '../../utils/axios';
import { searchUsersRoute} from '../../utils/routes';
import { useState, useEffect } from 'react';
import DropdownMenu from './DropdownMenu';

const StyledSearch = styled(Box)(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginBottom: 10,
    border: `1px solid ${theme.palette.text.primary}`,
    '&:hover': {
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

function Search() {

  const [curSearch, setCurSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function fetchUsers(){
    await axiosPrivate(`${searchUsersRoute}/${curSearch}`).then((res) => {
      setSearchResults(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  //This needs a debounce hook, works for now
  useEffect(() => {
    if (curSearch !== ''){
      fetchUsers();
    }else{
      setSearchResults([]);
    }
  }, [curSearch])

  function handleChange(e){
    setCurSearch(e.target.value);
  };

  return (
    <StyledSearch>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
        placeholder="Search by email..."
        inputProps={{ 'aria-label': 'search' }}
        value={curSearch}
        onChange={handleChange}
        />
        {searchResults.length > 0 && <DropdownMenu searchResults={searchResults} />}
    </StyledSearch>
  )
}

export default Search;
