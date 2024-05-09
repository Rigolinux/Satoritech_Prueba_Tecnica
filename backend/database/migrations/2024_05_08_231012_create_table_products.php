<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {

            $table->string('SKU')->unique()->index();
            $table->string('name');
            //int stock
            $table->integer('stock');
            //image
            $table->string('image');
            //cualification upper to 0 and lower to 5
            $table->integer('cualification')->default(0);
            $table->timestamps();
        });

        // add a foreign key with cascade on delete to the categories table
        Schema::table('products', function (Blueprint $table) {
            $table->foreignId('category_id')->constrained()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_products');
    }
};
