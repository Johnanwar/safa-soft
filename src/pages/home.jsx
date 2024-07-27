import FormProvider from '../components/hook-form/form-provider';
import { Box, Button, Card, Container, Stack, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import LoadingButton from '@mui/lab/LoadingButton';
import CustomizedSteppers from '../components/home/stepper';
import { useState } from 'react';
import FirstStepForm from '../components/home/first-form-step';
import SecondStepForm from '../components/home/second-form-step';
import ThirdStepForm from '../components/home/third-form-step';
import Iconify from '../components/iconify';
import { stepOneSchema, stepTwoSchema } from '../utils/schemas';
import { AnimatePresence, motion } from 'framer-motion';



function Home() {
  const { enqueueSnackbar } = useSnackbar();
  const [step, setStep] = useState(1);

  const methods = useForm({
    resolver: yupResolver(step === 1 ? stepOneSchema : stepTwoSchema),
    mode: 'onBlur',
  });

  //post data request
  async function submitDData(url = '', data = {}) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  const {
    handleSubmit,
    trigger,
    formState: { isSubmitting },
  } = methods;

// submit function 
  const onSubmit = async (data) => {
    if (step === 1) {
      const isValid = await trigger();
      if (isValid) {
        setStep(2);
      } else {
        enqueueSnackbar('Please check your data and try again!', {
          variant: 'error',
        });
      }
    } else if (step === 2) {
      data.company_country_id = data.company_country_id?.id;
      data.company_city_id = Number(data.company_city_id);
      try {
        const result = await submitDData('https://id.safav2.io.safavisa.com/register', data);
        console.log('Success:', result);
        enqueueSnackbar('Form submitted successfully!', {
          variant: 'success',
        });
        setStep(3);
      } catch (error) {
        enqueueSnackbar('Please check your data and try again!', {
          variant: 'error',
        });
      }
    }
  };

  return (
    <Container>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack mt={5} mx="auto" sx={{ width: { md: '50%', sm: '70%', xs: '90%' } }}>
           {/* steps component */}
          <CustomizedSteppers step={step} />
          <Typography textAlign="center" pt="2rem" variant="h6" color="grey.600">
            {step === 1
              ? 'Tell us more about you'
              : step === 2
                ? 'Verify your company'
                : 'You are all set. Ready? '}
          </Typography>
        </Stack>
        <Card
          sx={{
            p: '1.9rem',
            mt: '1.5rem',
            mx: 'auto',
            width: { md: '50%', sm: '70%', xs: '90%' },
          }}
        >
          <AnimatePresence wait>
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.2 }}
              >
                <FirstStepForm />
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.2 }}
              >
                <SecondStepForm />
              </motion.div>
            )}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.2 }}
              >
                <ThirdStepForm />
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
        <Box
          sx={{ mx: 'auto', mt: '1rem', width: { md: '50%', sm: '70%', xs: '90%' } }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
           {step === 1 && <Button color="inherit" size="small">
            <Iconify icon="ion:caret-back" /> Back to login
          </Button>}

          <Box alignItems="center" display="flex" justifyContent="flex-end" ml='auto'>
            <Button
              disabled={step !== 2 || isSubmitting}
              onClick={() => setStep(step - 1)}
              sx={{ mx: '.7rem', py: '1rem', px: '2.4rem' }}
              color="inherit"
              variant="outlined"
              size="small"
            >
              Back
            </Button>
            <LoadingButton
              color="inherit"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={{
                color: 'common.white',
                px: '6rem',
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.light',
                },
              }}
            >
              {step === 2 ? 'Submit' : 'Next'}
            </LoadingButton>
          </Box>
        </Box>
      </FormProvider>
    </Container>
  );
}

export default Home;
