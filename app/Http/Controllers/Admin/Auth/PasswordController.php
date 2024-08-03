<?php

namespace App\Http\Controllers\Admin\Auth;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PasswordController
{
    public function forgot()
    {
        return Inertia::render('Admin/Auth/ForgotPassword');
    }

    public function sendMail(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email']
        ]);

        return back()->with('success', 'Password reset code sent');
    }
}
