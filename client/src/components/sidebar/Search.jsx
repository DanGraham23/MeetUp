import {
    Box, 
    styled, 
    InputBase

} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import {axiosPrivate} from '../../utils/axios';

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
  return (
    <StyledSearch>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
        placeholder="Search by email..."
        inputProps={{ 'aria-label': 'search' }}
        />
    </StyledSearch>
  )
}

export default Search;
