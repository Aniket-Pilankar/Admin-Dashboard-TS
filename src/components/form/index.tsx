import { Box, Button, MenuItem, useMediaQuery } from '@mui/material';

import Select from '../../hookcomponent/Select';
import TextField from '../../hookcomponent/TextField/TextField';
import Header from '../Header';
import { accessLevelOptions } from './constants';
import useFormVM from './vm';

const Form = () => {
  const { formMethods, onSubmit } = useFormVM();

  const { control, handleSubmit } = formMethods;

  const isNonMobile = useMediaQuery('(min-width:600px)');

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
          }}
        >
          <TextField
            required
            label="First Name"
            variant="filled"
            control={control}
            name="firstName"
            sx={{ gridColumn: 'span 2' }}
            helperText="Enter First Name"
          />
          <TextField
            required
            label="Last Name"
            variant="filled"
            control={control}
            name="lastName"
            sx={{ gridColumn: 'span 2' }}
            helperText="Enter Last Name"
            textCentered
          />
          <TextField
            label="Email"
            variant="filled"
            control={control}
            name="email"
            sx={{ gridColumn: 'span 4' }}
          />
          <TextField
            required
            label="Contact"
            variant="filled"
            control={control}
            name="contact"
            sx={{ gridColumn: 'span 4' }}
            type="number"
          />
          <TextField
            required
            label="Address line 1"
            variant="filled"
            control={control}
            name="address1"
            sx={{ gridColumn: 'span 4' }}
            characterLimit={20}
          />
          <TextField
            label="Address line 2"
            variant="filled"
            control={control}
            name="address2"
            sx={{ gridColumn: 'span 4' }}
          />
          <Select name="accessLevel" control={control} label={'Choose your access level'}>
            {accessLevelOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.title}
              </MenuItem>
            ))}
          </Select>
          <TextField
            required
            label="Age"
            variant="filled"
            control={control}
            name="age"
            sx={{ gridColumn: 'span 2' }}
            type="number"
          />
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create New User
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default Form;
