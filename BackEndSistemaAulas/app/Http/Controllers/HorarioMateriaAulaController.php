<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HorarioMateriaAula;
use Illuminate\Support\Facades\Validator;

class HorarioMateriaAulaController extends Controller
{
    public function index()
    {
        $asignaciones = HorarioMateriaAula::with(['horario', 'materia', 'aula'])->get();
        return response()->json($asignaciones);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_horario' => 'required|exists:horarios,id',
            'id_materia' => 'required|exists:materias,id',
            'id_aula' => 'required|exists:aulas,id',
            'id_maestro' => 'required|exists:maestros,id',
            'año' => 'required|digits:4',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $asignacion = HorarioMateriaAula::create($validator->validated());

        return response()->json($asignacion, 201);
    }

    public function show($id)
    {
        $asignacion = HorarioMateriaAula::with(['horario', 'materia', 'aula'])->find($id);

        if (!$asignacion) {
            return response()->json(['mensaje' => 'Asignación no encontrada'], 404);
        }

        return response()->json($asignacion);
    }

    public function update(Request $request, $id)
    {
        $asignacion = HorarioMateriaAula::find($id);

        if (!$asignacion) {
            return response()->json(['mensaje' => 'Asignación no encontrada'], 404);
        }

        $validator = Validator::make($request->all(), [
            'id_horario' => 'exists:horarios,id',
            'id_materia' => 'exists:materias,id',
            'id_aula' => 'exists:aulas,id',
            'id_maestro' => 'exists:maestros,id',
            'año' => 'digits:4',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $asignacion->update($validator->validated());

        return response()->json($asignacion);
    }

    public function destroy($id)
    {
        $asignacion = HorarioMateriaAula::find($id);

        if (!$asignacion) {
            return response()->json(['mensaje' => 'Asignación no encontrada'], 404);
        }

        $asignacion->delete();

        return response()->json(['mensaje' => 'Asignación eliminada correctamente']);
    }
}

