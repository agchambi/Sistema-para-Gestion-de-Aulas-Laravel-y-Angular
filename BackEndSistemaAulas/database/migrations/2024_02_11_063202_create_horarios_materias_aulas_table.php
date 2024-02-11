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
        Schema::create('horarios_materias_aulas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_horario')->constrained('horarios')->onDelete('cascade');
            $table->foreignId('id_materia')->constrained('materias')->onDelete('cascade');
            $table->foreignId('id_aula')->constrained('aulas')->onDelete('cascade');
            $table->foreignId('id_maestro')->constrained('maestros')->onDelete('cascade');
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
        Schema::dropIfExists('horarios_materias_aulas');
    }
};
