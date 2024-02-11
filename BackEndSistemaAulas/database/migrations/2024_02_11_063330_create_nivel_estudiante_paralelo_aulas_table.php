<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nivel_estudiante_paralelo_aula', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_nivel')->constrained('niveles')->onDelete('cascade');
            $table->foreignId('id_estudiante')->constrained('estudiantes')->onDelete('cascade');
            $table->foreignId('id_paralelo')->constrained('paralelos')->onDelete('cascade');
            $table->foreignId('id_aula')->constrained('aulas')->onDelete('cascade');
            $table->year('año');
            $table->timestamps();
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nivel_estudiante_paralelo_aula');
    }
};
