<?php

namespace App\Http\Controllers\Client\Prescription;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Prescription;
use App\Http\Requests\StorePrescriptionRequest;


class ClientPrescriptionController extends Controller
{
    public function index()
    {
        // //dd('fafa');
        $prescriptions = Prescription::where('user_id', auth()->id())->get();

       
        // Return the data to the Inertia view
        return Inertia::render('Client/Prescription/All/Index', [
            'prescriptions' => $prescriptions,
        ]);
    }

     

    public function create()
    {
      
        return Inertia::render('Client/Prescription/Create/Index', []);
    }


    public function store(StorePrescriptionRequest $request)
    {
        // Handle the uploaded images
        $imagePaths = $request->handleFileUploads();

        // Create a new Prescription in the database
        Prescription::create([
            'user_id' => auth()->id(),  // assuming the user is authenticated
            'note' => $request->note,
            'delivery_address' => $request->delivery_address,
            'delivery_time' => $request->delivery_time,
            'images' => $imagePaths, // Store image paths as JSON
        ]);

        // Optionally, you can return a success response or redirect
        return redirect()->route('client.prescriptions.index')->with('success', 'Prescription uploaded successfully.');
    }
    
}
