import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


import { Link } from "components";
import { Layout } from "components/account";
import { userService, alertService } from "services";

import Form from "components/Form";

export default Login;

function Login() {
    const router = useRouter();

    // form validation rules
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        return userService.login(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch(alertService.error);
    }

    return (
        <Form
        header="Login"
        handleSubmit={handleSubmit(onSubmit)}
        formState={formState.isSubmitting}
        url="/account/register"
        urlName="Register"
        buttonSpan="Login"
        items={
            [
                {
                    name: "User",
                    nameInt: 'username',
                    register: register('username'),
                    errors: errors.username?.message,
                },
                {
                    name: "Password",
                    nameInt: 'password',
                    register: register('password'),
                    errors: errors.password?.message,
                    type: 'password'
                }
            ]
        }

        />
    );
}
