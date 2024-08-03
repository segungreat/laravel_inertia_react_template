import React from 'react';
import {Link} from "@inertiajs/react";
import AdminLayout from "@layouts/AdminLayout.jsx";

const Welcome = () => {
    return (
        <div>
            Welcome
            <Link href={route('admin.login')}>Login</Link>
        </div>
    );
};

Welcome.layout = (page) => <AdminLayout children={page} pageTitle={'Dashboard'} />

export default Welcome;
