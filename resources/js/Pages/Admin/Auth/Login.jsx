import React from 'react';
import AdminAuthLayout from "@layouts/AdminAuthLayout.jsx";
import {Link, useForm} from "@inertiajs/react";
import TextInput from "@components/UI/TextInput.jsx";
import CheckBox from "@components/UI/CheckBox.jsx";
import Button from "@components/UI/Button.jsx";

const Login = () => {

    const loginForm = useForm({
        email: '',
        password: '',
        remember: true
    });

    const loginSubmit = (e) => {
        e.preventDefault();

        loginForm.clearErrors();
        loginForm.post(route('admin.login'), {

        });
    }

    return (
        <>
            <form onSubmit={loginSubmit} className="space-y-4 ">
                <TextInput
                    name="email"
                    label="email"
                    defaultValue="dashcode@gmail.com"
                    type="email"
                    onChange={(e) => loginForm.setData('email', e.target.value)}
                    error={loginForm.errors.email}
                    className="h-[48px]"
                />
                <TextInput
                    name="password"
                    label="passwrod"
                    type="password"
                    defaultValue="dashcode"
                    onChange={(e) => loginForm.setData('password', e.target.value)}
                    error={loginForm.errors.password}
                    className="h-[48px]"
                />
                <div className="flex justify-between">
                    <CheckBox
                        value={loginForm.data.remember}
                        onChange={(e) => loginForm.setData('remember', e.target.checked)}
                        label="Keep me signed in"
                    />
                    <Link
                        href={route('admin.password.request')}
                        className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
                    >
                        Forgot Password?{" "}
                    </Link>
                </div>

                <Button
                    type="submit"
                    text="Sign in"
                    className="btn btn-dark block w-full text-center"
                    isLoading={loginForm.processing}
                />
            </form>
        </>
    );
};

Login.layout = (page) => <AdminAuthLayout children={page} title={'Login'}/>

export default Login;
