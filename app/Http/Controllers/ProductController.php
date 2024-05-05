<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Helpers\CustomerHelper;
use App\Models\Product;

class ProductController extends Controller
{
    public function getProduct($id){
        $data = DB::select('SELECT * FROM products WHERE id = ?', [$id]);
        foreach ($data as $product) {
            // Ví dụ: chuyển đổi trường 'price' sang định dạng tiền tệ
            $product->price = number_format($product->price, 0, '.', ',');
        }
        return response([
            'data'=>$data
        ]);
    }
    
    public function getListProduct()
    {
        // Lấy dữ liệu từ cơ sở dữ liệu
        $data = DB::select('SELECT * FROM shop_products');
        $product = json_encode($data);
        // Trả về phản hồi JSON với dữ liệu đã được xử lý
        return response()->json($product, 200);
    }

    
}
