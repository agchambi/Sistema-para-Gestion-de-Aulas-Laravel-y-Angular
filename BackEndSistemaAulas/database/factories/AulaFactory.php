<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AulaFactory extends Factory
{
    public function definition()
    {
        return [
            'aula' => $this->faker->bothify('Aula ##'),
            'capacidad' => $this->faker->numberBetween(20, 50),
            'ubicacion' => $this->faker->sentence(),
        ];
    }
}
