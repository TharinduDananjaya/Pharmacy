<?php

namespace App\Http\Controllers\Client\Overview;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;


class ClientOverviewController extends Controller
{
    public function index()
    {
        //dd('fafa');
        return Inertia::render('Client/Overview/Index', [
        ]);
    }
}
