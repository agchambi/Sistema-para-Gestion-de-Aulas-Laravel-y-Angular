<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MaestroFactory extends Factory
{
    public function definition()
    {
        return [
            'ci' => $this->faker->unique()->numerify('########'),
            'nombre' => $this->faker->firstName(),
            'apellido' => $this->faker->lastName(),
            'telefono' => $this->faker->phoneNumber(),
        ];
    }
}

