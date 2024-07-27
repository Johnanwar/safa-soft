import * as Yup from 'yup';
import { MIN_CHARS } from '../../constants';


export const stepOneSchema = Yup.object().shape({
    fullName: Yup.string()
    .required('Full Name is required')
    .min(MIN_CHARS, 'Full Name must be at least 2 characters'), // we can apply min and max for all fields as business need 
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    phoneNumber: Yup.string()
      .matches(
        /^(12|15|17|18|10|11)\d{8}$/,
        'Phone number must start with 12, 15, 17, 18, 10, or 11 and be exactly 10 digits'
      )
      .required('Phone number is required'),
  });
  
  export const stepTwoSchema = Yup.object().shape({
    company_name: Yup.string().required('Company Name is required'),
    company_email: Yup.string().email('Email is invalid').required('Email is required'),
    company_address: Yup.string().required('Address is required'),
    company_phone: Yup.string()
      .matches(
        /^(12|15|17|18|10|11)\d{8}$/,
        'Phone number must start with 12, 15, 17, 18, 10, or 11 and be exactly 10 digits'
      )
      .required('Phone number is required'),
    company_country_id: Yup.object().required('Country is required'),
    company_city_id: Yup.string().required('city is required'),
  });