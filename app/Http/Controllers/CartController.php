<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CartRequest;
use App\Models\Cart;

class CartController extends Controller
{
    
    public function create(CartRequest $request)
    {

        $request->validate([
            'user_id' => 'required',
            'name' => 'required',
            'img_url' => 'required',
            'price' => 'required|numeric',
            'description' => 'required',
            'status' => 'required',
        ]);

        $cart = Cart::create([
            'user_id' => $request->user_id,
            'name' => $request->name,
            'img_url' => $request->img_url,
            'price' => $request->price,
            'description' => $request->description,
            'status' => $request->status,
        ]);

        return response()->json(['message' => 'Cart created successfully', 'cart' => $cart], 201);
    }

}
