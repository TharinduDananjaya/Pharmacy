<?php

namespace App\Http\Controllers\Admin\Medicine;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Medicine;

class AdminMedicineController extends Controller
{
    public function index()
    {
        $medicines = Medicine::all();

        return Inertia::render('Admin/Medicine/Index', [
            'medicines' => $medicines,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'price' => 'required|numeric',
        ]);

        $medicine = Medicine::create($validated);

        return response()->json($medicine, 201);
    }

    // Update an existing medicine
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'string',
            'price' => 'numeric',
        ]);

        $medicine = Medicine::findOrFail($id);
        $medicine->update($validated);

        return response()->json($medicine);
    }

    // Delete a medicine
    public function destroy($id)
    {
        $medicine = Medicine::findOrFail($id);
        $medicine->delete();

        return response()->json(['message' => 'Medicine deleted successfully']);
    }
}
