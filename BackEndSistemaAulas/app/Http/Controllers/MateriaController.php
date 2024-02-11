<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Materia;
use Illuminate\Support\Facades\Validator;

class MateriaController extends Controller
{
    public function index()
    {
        $materias = Materia::all();
        return response()->json($materias);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'materia' => 'required|string|unique:materias|max:255',
            'descripcion' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $materia = Materia::create($validator->validated());

        return response()->json($materia, 201);
    }

    public function show($id)
    {
        $materia = Materia::find($id);

        if (!$materia) {
            return response()->json(['mensaje' => 'Materia no encontrada'], 404);
        }

        return response()->json($materia);
    }

    public function update(Request $request, $id)
    {
        $materia = Materia::find($id);

        if (!$materia) {
            return response()->json(['mensaje' => 'Materia no encontrada'], 404);
        }

        $validator = Validator::make($request->all(), [
            'materia' => 'string|unique:materias,materia,' . $id . '|max:255',
            'descripcion' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $materia->update($validator->validated());

        return response()->json($materia);
    }

    public function destroy($id)
    {
        $materia = Materia::find($id);

        if (!$materia) {
            return response()->json(['mensaje' => 'Materia no encontrada'], 404);
        }

        $materia->delete();

        return response()->json(['mensaje' => 'Materia eliminada correctamente']);
    }
}
