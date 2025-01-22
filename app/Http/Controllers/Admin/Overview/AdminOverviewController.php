<?php

namespace App\Http\Controllers\Admin\Overview;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Prescription;

class AdminOverviewController extends Controller
{
    public function index()
    {
        $prescriptions = Prescription::all();

        return Inertia::render('Admin/Overview/Index', [
            'prescriptions' => $prescriptions,
        ]);
    }

    public function updateStatus(Request $request, $id)
    {
        // Validate the incoming request
        $validated = $request->validate([
            'status' => 'required|in:pending,quoted,accepted,rejected',
        ]);

        // Find the prescription by ID
        $prescription = Prescription::findOrFail($id);

        // Update the status of the prescription
        $prescription->status = $validated['status'];
        $prescription->save();

        return response()->json([
            'message' => 'Prescription status updated successfully.',
            'status' => $prescription->status,
        ]);
    }
}
