<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Aula;

class AulaControllerTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /** @test */
    public function can_retrieve_all_aulas()
    {
        // Arrange: Create some aulas
        Aula::factory()->count(3)->create();

        // Act: Make a GET request to the aulas endpoint
        $response = $this->get('/api/aulas');

        // Assert: Check if the response is OK and contains the aulas data
        $response->assertOk();
        $response->assertJsonCount(3);
    }

    /** @test */
    public function can_create_a_new_aula()
    {
        // Arrange: Prepare aula data
        $aulaData = [
            'aula' => 'Aula 101',
            'capacidad' => 30,
            'ubicacion' => 'Primer piso'
        ];

        // Act: Make a POST request to the aulas endpoint
        $response = $this->post('/api/aulas', $aulaData);

        // Assert: Check if the aula was created successfully
        $response->assertCreated();
        $this->assertDatabaseHas('aulas', $aulaData);
    }
}

