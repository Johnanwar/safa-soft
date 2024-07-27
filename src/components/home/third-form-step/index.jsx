import { Box, Stack, Typography } from '@mui/material';

function ThirdStepForm() {
  return (
    <Stack>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          component="img"
          alt="mail photo"
          src="/assets/images/mail.png"
          sx={{ width: '150px', height: '150px', objectFit: 'contain', textAlign: 'center' }}
        />
      </Box>
      <Typography textAlign='center' color='error.main' variant='h6' mt={3}>
         We will send Email for this Email
      </Typography>
      <Typography textAlign='center'  variant='h6'>
         Example@example.com
      </Typography>
    </Stack>
  );
}

export default ThirdStepForm;
