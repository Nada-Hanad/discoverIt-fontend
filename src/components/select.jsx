import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  select: {
    '&:before': {
      borderColor: 'red'
    },
    '&:after': {
      borderColor: 'red'
    }
  }
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const Wilayas = [
  'Adrar',
  'Chlef',
  'Laghouat',
  'Oum El Bouaghi',
  'Batna',
  'Bejaïa',
  'Biskra',
  'Béchar',
  'Blida',
  'Bouira',
  'Tamanrasset',
  'Tebessa',
  'Tlemcen',
  'Tiaret',
  'Tizi Ouzou',
  'Alger',
  'Djelfa',
  'Djijel',
  'Sétif',
  'Saïda',
  'Skikda',
  'Sidi Bel Abbès',
  'Annaba',
  'Guelma',
  'Constantine',
  'Médéa',
  'Mostaganem',
  "M'Sila",
  'Mascara',
  'Ouargla',
  'Oran',
  'El Bayadh',
  'Illizi',
  'Bordj Bou Arreridj',
  'Boumerdès',
  'El Tarf',
  'Tindouf',
  'Tissemsilt',
  'El Oued',
  'Khenchela',
  'Souk Ahras',
  'Tipaza',
  'Mila',
  'Aïn Defla',
  'Naâma',
  'Aïn Témouchent',
  'Ghardaia',
  'Relizane'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function MultipleSelect({ fulllocations, setLocations }) {
  const classes = useStyles();
  const theme = useTheme();
  const [wilayaName, setWilayanName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setWilayanName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    console.log(fulllocations.filter((e) => e.Wilaya === value));
    setLocations(fulllocations.filter((e) => e.Wilaya === value));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id='demo-multiple-name-label'>Wilaya</InputLabel>
        <Select
          className={classes.select}
          labelId='demo-multiple-name-label'
          id='demo-multiple-name'
          value={wilayaName}
          onChange={handleChange}
          input={<OutlinedInput label='Wilaya' />}
          MenuProps={MenuProps}
        >
          {Wilayas.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, wilayaName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
