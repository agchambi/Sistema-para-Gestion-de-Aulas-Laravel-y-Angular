<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MateriaFactory extends Factory
{
    public function definition()
    {
        return [
            'materia' => $this->faker->randomElement([
                'Lenguaje', 'Religión', 'Matemáticas', 'Computación',
                'Biología', 'Ciencias Naturales', 'Ciencias Sociales'
            ]),
            'descripcion' => $this->faker->sentence(),
        ];
    }
}
