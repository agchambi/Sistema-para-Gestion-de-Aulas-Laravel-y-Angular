<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Maestro;
use App\Models\Materia;
use App\Models\Horario;
use App\Models\Aula;
use App\Models\Estudiante;
use App\Models\Nivel;
use App\Models\Paralelo;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Maestro::factory()->count(10)->create();
        Materia::factory()->count(15)->create();
        Horario::factory()->count(20)->create();
        Aula::factory()->count(5)->create();
        Estudiante::factory()->count(50)->create();
        Nivel::factory()->count(6)->create();
        Paralelo::factory()->count(4)->create();
    }
}
