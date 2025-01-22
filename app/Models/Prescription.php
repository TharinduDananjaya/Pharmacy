<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Prescription extends Model
{
    use HasFactory;

   

    protected $fillable = [
        'user_id',
        'image',
        'note',
        'delivery_address',
        'delivery_time',
        'status',
    ];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute() {
        return $this->image ? Storage::url($this->image) : null;
    }

    
    /**
     * The user who owns the prescription.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Check if the prescription is pending.
     */
    public function isPending(): bool
    {
        return $this->status === 'pending';
    }

    /**
     * Check if the prescription is quoted.
     */
    public function isQuoted(): bool
    {
        return $this->status === 'quoted';
    }

    /**
     * Check if the prescription is accepted.
     */
    public function isAccepted(): bool
    {
        return $this->status === 'accepted';
    }

    /**
     * Check if the prescription is rejected.
     */
    public function isRejected(): bool
    {
        return $this->status === 'rejected';
    }
}
