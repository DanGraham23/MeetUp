import { Box, MenuList, styled } from '@mui/material';
import DropdownMenuItem from './DropdownMenuItem';

const StyledMenuList = styled(MenuList)(({ theme }) => ({
  width: '100%',
  minHeight: '50px',
  maxHeight: '600px',
  overflowY: 'scroll',
  position: 'absolute',
  backgroundColor: theme.palette.background.default,
  zIndex: '5',
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.text.primary}`,
}));

function DropdownMenu({ searchResults }) {
  return (
    //Map user objects here
    <StyledMenuList>
      {searchResults.map((result) => {
        return (
          <DropdownMenuItem
            key={result.id}
            id={result.id}
            email={result.email}
          />
        );
      })}
    </StyledMenuList>
  );
}

export default DropdownMenu;
