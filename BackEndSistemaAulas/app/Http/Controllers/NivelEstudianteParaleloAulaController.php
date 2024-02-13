<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NivelEstudianteParaleloAula;
use Illuminate\Support\Facades\Validator;

class NivelEstudianteParaleloAulaController extends Controller
{
    public function index()
    {
        $asignaciones = NivelEstudianteParaleloAula::with(['nivel', 'estudiante', 'paralelo', 'aula'])->get();
        return response()->json($asignaciones);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_nivel' => 'required|exists:niveles,id',
            'id_estudiante' => 'required|exists:estudiantes,id',
            'id_paralelo' => 'required|exists:paralelos,id',
            'id_aula' => 'required|exists:aulas,id',
            'anio' => 'required|digits:4',
     ]);

        if ($validator->fails()) {
         return response()->json($validator->errors(), 400);
        }

        $validated = $validator->validated();
        $validated['anio'] = $validated['anio'] ?? date('Y');

        $asignacion = NivelEstudianteParaleloAula::create($validated);

        return response()->json($asignacion, 201);
    }


    public function show($id)
    {
        $asignacion = NivelEstudianteParaleloAula::with(['nivel', 'estudiante', 'paralelo', 'aula'])->find($id);

        if (!$asignacion) {
            return response()->json(['mensaje' => 'Asignación no encontrada'], 404);
        }

        return response()->json($asignacion);
    }

    public function update(Request $request, $id)
    {
        $asignacion = NivelEstudianteParaleloAula::find($id);

        if (!$asignacion) {
            return response()->json(['mensaje' => 'Asignación no encontrada'], 404);
        }

        $validator = Validator::make($request->all(), [
            'id_nivel' => 'exists:niveles,id',
            'id_estudiante' => 'exists:estudiantes,id',
            'id_paralelo' => 'exists:paralelos,id',
            'id_aula' => 'exists:aulas,id',
            'anio' => 'digits:4',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $asignacion->update($validator->validated());

        return response()->json($asignacion);
    }

    public function destroy($id)
    {
        $asignacion = NivelEstudianteParaleloAula::find($id);

        if (!$asignacion) {
            return response()->json(['mensaje' => 'Asignación no encontrada'], 404);
        }

        $asignacion->delete();

        return response()->json(['mensaje' => 'Asignación eliminada correctamente']);
    }
}
