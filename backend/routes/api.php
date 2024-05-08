<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\CategoryController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/auth/register', [RegisterController::class, 'register']);

Route::post('/auth/login', [LoginController::class, 'login']);


// protected routes send 401 if token is invalid
Route::middleware('auth:sanctum')->group(function () {
    //Route to test if the user is authenticated
    Route::get('/auth/me', [LoginController::class, 'me']);


    
    Route::post('/auth/logout', [LoginController::class, 'logout']);

    //All route category
    Route::post('/category', [CategoryController::class, 'create']);
    Route::get('/category', [CategoryController::class, 'index']);
    Route::get('/category/{id}', [CategoryController::class, 'show']);
    Route::put('/category/{id}', [CategoryController::class, 'update']);
    Route::delete('/category/{id}', [CategoryController::class, 'destroy']);

});


// if the route is not found return 404
Route::fallback(function(){
    return response()->json([
        'message' => 'Page Not Found. If error persists, contact web admin'
    ], 404);
});



