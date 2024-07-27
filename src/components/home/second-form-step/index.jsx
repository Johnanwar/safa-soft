import CustomAutocomplete from '../../hook-form/custom-autocomplete';
import CustomSelect from '../../hook-form/custom-select';
import CustomTextField from '../../hook-form/custom-text-field';
import { Divider, InputAdornment, MenuItem, Stack } from '@mui/material';

function SecondStepForm() {
  const citiesData = [
    { id: 1, name: 'Cairo' },
    { id: 2, name: 'Hurgada' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Giza' },
  ];
  const countriesData = [
    { id: 1, name: 'Egypt' },
    { id: 2, name: 'Palestine' },
    { id: 3, name: 'England' },
    { id: 4, name: 'Spain' },
  ];
  return (
    <Stack spacing={2.5}>
      <CustomTextField
        name="company_name"
        label="company name"
        placeholder="Enter your company name"
      />
      <CustomTextField name="company_address" label="address" placeholder="Enter your address" />
      <CustomTextField
        type="email"
        name="company_email"
        label="Business Email"
        placeholder="Enter your email address"
      />
      <Stack direction="row" spacing={1.5}>
        <CustomAutocomplete
          name="company_country_id"
          label="Country"
          sx={{width:"100%"}}
          placeholder="Choose your country"
          options={countriesData}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.value}
          renderOption={(props, option) => (
            <li {...props} key={option.id}>
              {option.name}
            </li>
          )}
        />
        <CustomSelect name="company_city_id" label="City" placeholder="Choose your City">
          {citiesData?.map((item) => (
            <MenuItem key={item?.id} value={item?.id}>
              {item?.name}
            </MenuItem>
          ))}
        </CustomSelect>
      </Stack>
      <Stack direction="row" spacing={1.5}>
        <CustomTextField
          name="company_phone"
          label="Phone Number"
          preventedChars={['e', '.' ,',']}
          placeholder="Enter your phone number"
          type="number"
          InputProps={{
            startAdornment: (
              <>
                <InputAdornment position="start">+20 </InputAdornment>{' '}
                <Divider orientation="vertical" variant="middle" flexItem sx={{ mr: '10px' }} />
              </>
            ),
          }}
        />
        <CustomTextField
          name="phoneNumber"
          label="Phone Number"
          preventedChars={['e', '.' ,',']}
          placeholder="Enter your phone number"
          type="number"
          InputProps={{
            startAdornment: (
              <>
                <InputAdornment position="start">+20 </InputAdornment>{' '}
                <Divider orientation="vertical" variant="middle" flexItem sx={{ mr: '10px' }} />
              </>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
}

export default SecondStepForm;
