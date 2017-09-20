<?php

namespace App\Http\Controllers;

use App\Cards;
use Illuminate\Http\Request;

class WebsiteController extends Controller
{
    public function index()
    {
        return view('index');
    }
}
