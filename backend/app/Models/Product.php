<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $primaryKey = 'sku';
    public $incrementing = false; 

    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where($this->getKeyName(), '=', $this->getKeyForSaveQuery())
            ->limit(1);

        return $query;
    }

    protected $fillable = [
        'sku',
        'name',
        'stock',
        'image',
        'cualification'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
