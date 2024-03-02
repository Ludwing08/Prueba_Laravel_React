<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Http::get("https://semprovec.com.ec/api/quiz-categories");
        $categories = json_decode($categories, true);
        $categories = $categories['dataCategorias'];
        // dd($data);
        $products = Http::get("https://semprovec.com.ec/api/quiz-products");
        $products = json_decode($products, true);
        $products = $products["dataProductos"];
        // dd($products);     

        return inertia('Categories/Index', compact('categories', 'products'));
    }

    public function subproducts($id)
    {
        $products = Http::get("https://semprovec.com.ec/api/quiz-byproducts/".$id);
        $products = json_decode($products,true);
        // dd($subproducts['dataSubProductos']);
        $products = $products['dataSubProductos'];
        return inertia('Categories/Subproducts', compact('products'));
    }
}
