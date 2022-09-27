import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { Layout } from 'components/account';
import { userService, alertService } from 'services';

import Form from '../../components/Form';

export default Register;

function Register() {
    const router = useRouter();

    // form validation rules
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(user) {
        return userService.register(user)
            .then(() => {
                alertService.success('Registration successful', { keepAfterRouteChange: true });
                router.push('login');
            })
            .catch(alertService.error);
    }

    return (
        <Form
            header="Register"
            handleSubmit={handleSubmit(onSubmit)}
            formState={formState.isSubmitting}
            url="/account/login"
            urlName="Cancel"
            items={
                [
                    {
                        name: 'First Name',
                        nameInt: 'firstName',
                        register: register('firstName'),
                        errors: errors.firstName?.message,
                    },
                    {
                        name: 'Last Name',
                        nameInt: 'lastName',
                        register: register('lastName'),
                        errors: errors.lastName?.message,
                    },
                    {
                        name: 'Username',
                        nameInt: 'username',
                        register: register('username'),
                        errors: errors.username?.message,
                    },
                    {
                        name: 'Password',
                        nameInt: 'password',
                        register: register('password'),
                        errors: errors.password?.message,
                        type: 'password',
                    }
                ]
            }
        />
    );
}