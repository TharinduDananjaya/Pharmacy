<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use App\Http\Middleware\AdminValidationMiddleware;
use App\Http\Middleware\ClientValidationMiddleware;
use App\Http\Controllers\Home\HomeController;
use App\Http\Controllers\Welcome\WelcomeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Client\Overview\ClientOverviewController;
use App\Http\Controllers\Admin\Overview\AdminOverViewController;
use App\Http\Controllers\Client\Prescription\ClientPrescriptionController;

use Inertia\Inertia;


Route::get('/', [WelcomeController::class, 'index'])->name('welcome.index');


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('admin')->middleware(AdminValidationMiddleware::class)->group(function () {
        Route::resource('overview', AdminOverViewController::class)->names('admins.overview');

        Route::post('/update-status/{id}', [AdminOverviewController::class, 'updateStatus'])->name('update.status');
    });



    // Client
    Route::prefix('client')->middleware(ClientValidationMiddleware::class)->group(function () { 

        
        Route::resource('overviews', ClientOverviewController::class)->names('client.overviews');

        Route::get('/prescriptions', [ClientPrescriptionController::class, 'index'])->name('client.prescriptions.index');
        Route::get('/prescriptions/create', [ClientPrescriptionController::class, 'create'])->name('client.prescriptions.create');
        Route::post('/prescriptions/store', [ClientPrescriptionController::class, 'store'])->name('client.prescriptions.store');




    });
});


require __DIR__.'/auth.php';
