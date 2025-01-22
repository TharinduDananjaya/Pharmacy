<?php

namespace App\Http\Controllers\Welcome;

use App\Http\Controllers\Controller;
use App\Repositories\All\Services\ServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{

    public function __construct(
        //private ServiceInterface $serviceInterface,
    ){}
    /**
     * Display a listing of the resource.
     */
    public function index()
    
    {

        // $services = $this->serviceInterface->getByColumn(['status' => 'approved'],['*'], ['teacher.user']);
        // foreach ($services as $service) {
        //     $service->average_rating = $service->getAverageRatingAttribute();
        // }

        //dd(jjdada);
        return Inertia::render('PublicArea/All/Index',[
            //'services' => $services,
        ]);
    }

}
