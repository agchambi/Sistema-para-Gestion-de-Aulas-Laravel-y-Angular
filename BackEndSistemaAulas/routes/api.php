<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AulaController;
use App\Http\Controllers\EstudianteController;
use App\Http\Controllers\HorarioController;
use App\Http\Controllers\HorarioMateriaAulaController;
use App\Http\Controllers\MaestroController;
use App\Http\Controllers\MateriaController;
use App\Http\Controllers\NivelController;
use App\Http\Controllers\NivelEstudianteParaleloAulaController;
use App\Http\Controllers\ParaleloController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('aulas', AulaController::class);
Route::apiResource('estudiantes', EstudianteController::class);
Route::apiResource('horarios', HorarioController::class);
Route::apiResource('horario-materia-aulas', HorarioMateriaAulaController::class);
Route::apiResource('maestros', MaestroController::class);
Route::apiResource('materias', MateriaController::class);
Route::apiResource('niveles', NivelController::class);
Route::apiResource('nivel-estudiante-paralelo-aulas', NivelEstudianteParaleloAulaController::class);
Route::apiResource('paralelos', ParaleloController::class);
