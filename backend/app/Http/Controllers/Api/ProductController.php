<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;
class ProductController extends Controller
{
    //Create a new product

    public function create(Request $request)
    {
        $request->validate([
            'sku' => 'required|string|uppercase|unique:products,SKU',
            'name' => 'required|string',
            'stock' => 'required|integer|min:0',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'cualification' => 'required|numeric|min:0|max:5',
            'category_id' => 'required|integer',
        ]);

        $imagePath = $request->file('image')->store('public/products');

        $product = new Product();
        $product->sku = $request->sku;
        $product->name = $request->name;
        $product->stock = $request->stock;
        $product->image = $imagePath;
        $product->cualification = $request->cualification;
        $product->category_id = $request->category_id;

        $product->save();

        return response()->json([
            'message' => 'Product created successfully',
            'product' => $product,
        ], 201);
    }


    //Get all products
    public function index()
    {
        // add category name to each product only get name of category and rename it to category
        $products = Product::with('category')->get();


        $productsData = $products->map(function ($product) {

            $imageUrl = asset('storage/' . $product->image);
            $imageUrl = str_replace('public/', '', $imageUrl);
            $productData = $product->toArray();
            $productData['image_url'] = $imageUrl;
            return $productData;
        });


        return response()->json($productsData, 200);
    }

    public function getOne($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $imageUrl = asset('storage/' . $product->image);
        $imageUrl = str_replace('public/', '', $imageUrl);

        $productData = $product->toArray();
        $productData['image_url'] = $imageUrl;

        return response()->json($productData, 200);
    }


    //Update a product

    public function update(Request $request, $sku)
    {
        // Find product by SKU

        try{

        // show product in the console

       

        $request->validate([
            'sku' => 'required|string|uppercase|unique:products,SKU',
            'name' => 'required|string',
            'stock' => 'required|integer|min:0',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'cualification' => 'required|numeric|min:0|max:5',
            'category_id' => 'required|integer',
        ]);

        $product = Product::where('sku', $sku)->first();

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Update product information
        $product->sku = $request->sku;
        $product->name = $request->name;
        $product->stock = $request->stock;
        $product->qualification = $request->qualification; // Corrected the field name
        $product->category_id = $request->category_id;

        // Handle image upload
        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($product->image && Storage::exists($product->image)) {
                Storage::delete($product->image);
            }
            $imagePath = $request->file('image')->store('public/products');
            $product->image = $imagePath;

        }


        // Save the updated product
        $product->save();

        return response()->json([
            'message' => 'Product updated successfully',
            'product' => $product,
        ], 200);
    } catch (\Exception $e) {
        return response()->json(['message' => $e->getMessage()], 500);
    }
    }


}
