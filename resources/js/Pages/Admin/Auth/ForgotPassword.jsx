import React from 'react';
import AdminAuthLayout from "@layouts/AdminAuthLayout.jsx";
import Button from "@components/UI/Button.jsx";
import {Link, useForm} from "@inertiajs/react";
import TextInput from "@components/UI/TextInput.jsx";

const ForgotPassword = () => {

    const forgotForm = useForm({
        email: ''
    }) ;

    const forgotSubmit = () => {

    }

    return (
        <>
            <form onSubmit={forgotSubmit} className="space-y-4 ">
                <TextInput
                    name="email"
                    label="email"
                    type="email"
                    onChange={e => forgotForm.setData('email', e.target.value)}
                    error={forgotForm.errors.email}
                    className="h-[48px]"
                />

                <Button
                    type="submit"
                    text="Send recovery email"
                    className="btn btn-dark block w-full text-center"
                    isLoading={forgotForm.processing}
                />
            </form>

            <div
                className="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-8 text-sm">
                Forget it,&nbsp;
                <Link
                    href={route('admin.login')}
                    className="text-slate-900 dark:text-white font-medium hover:underline uppercase "
                >
                    Send me Back &nbsp;
                </Link>
                to The Sign In
            </div>
        </>
    );
};

ForgotPassword.layout = (page) => <AdminAuthLayout children={page} title={'Forgot Password'}/>

export default ForgotPassword;
