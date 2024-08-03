<?php

namespace App\Http\Controllers\Admin\Auth;

use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController
{
    public function index()
    {
        return Inertia::render('Admin/Auth/Login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', Password::defaults()]
        ]);

        if(!Auth::guard('admin')->validate($credentials)){
            return back()->withErrors('email', 'Invalid login credentials!');
        }

        return back()->with('success', true);
    }
}
