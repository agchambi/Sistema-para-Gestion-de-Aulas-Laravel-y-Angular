<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class HorarioFactory extends Factory
{
    public function definition()
    {
        return [
            'horaEntrada' => $this->faker->time(),
            'horaSalida' => $this->faker->time(),
            'Dia' => $this->faker->randomElement(['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']),
        ];
    }
}
