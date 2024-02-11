<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Estudiante;

class EstudianteControllerTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /** @test */
    public function a_user_can_retrieve_estudiantes()
    {
        // Arrange
        $estudiantes = Estudiante::factory()->count(3)->create();

        // Act
        $response = $this->getJson('/api/estudiantes');

        // Assert
        $response->assertOk();
        $response->assertJsonCount(3);
    }

    /** @test */
    public function a_user_can_create_an_estudiante()
    {
        // Arrange
        $estudianteData = [
            'ci' => '12345678',
            'nombre' => 'Juan',
            'apellido' => 'Perez',
            'telefono' => '1234567890'
        ];

        // Act
        $response = $this->postJson('/api/estudiantes', $estudianteData);

        // Assert
        $response->assertStatus(201);
        $this->assertDatabaseHas('estudiantes', $estudianteData);
    }

    /** @test */
    public function a_user_can_retrieve_an_estudiante()
    {
        // Arrange
        $estudiante = Estudiante::factory()->create();

        // Act
        $response = $this->getJson("/api/estudiantes/{$estudiante->id}");

        // Assert
        $response->assertOk();
        $response->assertJson($estudiante->toArray());
    }

    /** @test */
    public function a_user_can_update_an_estudiante()
    {
        // Arrange
        $estudiante = Estudiante::factory()->create();

        $estudianteData = [
            'ci' => '87654321',
            'nombre' => 'Maria',
            'apellido' => 'Lopez',
            'telefono' => '0987654321'
        ];

        // Act
        $response = $this->putJson("/api/estudiantes/{$estudiante->id}", $estudianteData);

        // Assert
        $response->assertOk();
        $estudiante->refresh();
        $this->assertEquals($estudianteData['nombre'], $estudiante->nombre);
        $this->assertEquals($estudianteData['apellido'], $estudiante->apellido);
    }

    /** @test */
    public function a_user_can_delete_an_estudiante()
    {
        // Arrange
        $estudiante = Estudiante::factory()->create();

        // Act
        $response = $this->deleteJson("/api/estudiantes/{$estudiante->id}");

        // Assert
        $response->assertNoContent();
        $this->assertDatabaseMissing('estudiantes', ['id' => $estudiante->id]);
    }
}
