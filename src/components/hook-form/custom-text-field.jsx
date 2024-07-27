import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import { preventInvalidChars } from '../../utils/prevent-invalid-chars';


// ----------------------------------------------------------------------

export default function CustomTextField({ name, helperText, type,maxChars, preventedChars, variant='filled',...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          value={field.value}
          variant={variant}
          onKeyDown={(e) =>
            preventInvalidChars(e, ["+", "-", ...(preventedChars ?? [])])
          }
  
          onChange={(event) => {
            if (event.target.value?.length <= (maxChars || 255)) {
                field.onChange(event.target.value);
              
            }
          }}

          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
  );
}

CustomTextField.propTypes = {
  helperText: PropTypes.object,
  name: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  maxChars:PropTypes.number,
  preventedChars:PropTypes.array,
};
