import { Box} from '@mui/material';
import DropdownMenuItem from './DropdownMenuItem';

function DropdownMenu({searchResults}) {

  return (
    //Map user objects here
    <Box sx={{width:'100%', minHeight:'50px', position:'absolute', backgroundColor:'gray', zIndex:'5', color:'black'}}>
        {searchResults.map((result) => {
            return (
                <DropdownMenuItem 
                key={result.id}
                id={result.id}
                email={result.email}
            />
            )
        })}
    </Box>
  );
}

export default DropdownMenu;