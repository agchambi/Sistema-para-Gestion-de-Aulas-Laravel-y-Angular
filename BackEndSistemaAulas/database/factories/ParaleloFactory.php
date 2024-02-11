<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ParaleloFactory extends Factory
{
    public function definition()
    {
        return [
            'paralelo' => $this->faker->randomElement(['A', 'B', 'C', 'D']),
        ];
    }
}
