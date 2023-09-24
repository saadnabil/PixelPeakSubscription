<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValidateEmail;
use App\Models\Subscription;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public function index(){
        return view('home.index');
    }
    public function subscribe(ValidateEmail $request){
        $data = $request->validated();
        Subscription::create($data);
        return redirect()->route('homePage')->with(['success' => 'Subsribed Successfully']);
    }
}
