import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Paper } from '@mui/material';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    }
  }
}));

const CustomPaper = (props) => {
  return (
    <Paper
      sx={{
        borderRadius: '10px',
        maxHeight: '300px',
        marginTop: '10px'
      }}
      {...props}
    />
  );
};
export default function SearchBar() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);
  const [locations, setLocations] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('http://localhost:3000/locations')
      .then((res) => {
        setLocations(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className='search-bar'>
      <Autocomplete
        sx={{ width: 500 }}
        classes={classes}
        freeSolo
        id='free-solo-2-demo'
        disableClearable
        PaperComponent={CustomPaper}
        options={
          loading ? (
            <CircularProgress />
          ) : (
            locations.map((option) => option.name)
          )
        }
        renderInput={(params) => (
          <TextField
            placeholder='Rechercher un lieu...'
            {...params}
            InputProps={{
              ...params.InputProps,
              type: 'search',
              style: { fontFamily: 'MontserratRegular' }
            }}
          />
        )}
      />
      <SearchIcon sx={{ color: '#4763E6' }} fontSize='large' />
    </div>
  );
}
