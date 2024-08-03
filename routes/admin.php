<?php

use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\Auth\PasswordController;
use Illuminate\Support\Facades\Route;

Route::get('admin', function (){
    return inertia('Admin/Welcome');
});

Route::prefix('admin')->name('admin.')->middleware(['adminInertia'])
    ->group(function (){
        Route::get('login', [LoginController::class, 'index'])->name('login');
        Route::post('login', [LoginController::class, 'login']);

        Route::prefix('password')->name('password.')->group(function (){
            Route::get('forgot', [PasswordController::class, 'forgot'])->name('request');
            Route::post('forgot', [PasswordController::class, 'sendMail'])->name('send');
        });
});
