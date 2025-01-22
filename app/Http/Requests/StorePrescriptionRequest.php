<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePrescriptionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'images' => 'required|array|max:5',
            'images.*' => 'image|mimes:jpg,jpeg,png,pdf|max:2048',
            'note' => 'nullable|string|max:500',
            'delivery_address' => 'required|string|max:255',
            'delivery_time' => 'required|string',
        ];
    }

    public function handleFileUploads()
    {
        $imagePaths = [];
        if ($this->has('images')) {
            foreach ($this->file('images') as $image) {
                // Store each image and return the path
                $imagePaths[] = $image->store('prescriptions', 'public');
            }
        }
        return $imagePaths;
    }
}
