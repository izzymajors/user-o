import * as yup from 'yup';

export default yup.object().shape({
    username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be 3 charar long'),
    email: yup
    .string(),
})