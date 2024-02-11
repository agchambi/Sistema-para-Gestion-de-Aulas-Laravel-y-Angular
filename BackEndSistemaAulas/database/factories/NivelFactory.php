<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class NivelFactory extends Factory
{
    public function definition()
    {
        return [
            'nivel' => $this->faker->randomElement([
                'Primero de Primaria', 'Segundo de Primaria', 'Tercero de Primaria',
                'Cuarto de Primaria', 'Quinto de Primaria', 'Sexto de Primaria',
                'Primero de Secundaria', 'Segundo de Secundaria', 'Tercero de Secundaria',
                'Cuarto de Secundaria', 'Quinto de Secundaria'
            ]),

        ];
    }
}

