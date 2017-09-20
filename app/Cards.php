<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cards extends Model
{
    protected $fillable = [
        'title',
        'description',
        'type',
        'location',
        'link'
    ];
}
