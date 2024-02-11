<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aula;
use Illuminate\Support\Facades\Validator;

class AulaController extends Controller
{
    public function index()
    {
        $aulas = Aula::all();
        return response()->json($aulas);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'aula' => 'required|string|max:255',
            'capacidad' => 'required|integer',
            'ubicacion' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $aula = Aula::create($validator->validated());

        return response()->json($aula, 201);
    }

    public function show($id)
    {
        $aula = Aula::find($id);

        if (!$aula) {
            return response()->json(['mensaje' => 'Aula no encontrada'], 404);
        }

        return response()->json($aula);
    }

    public function update(Request $request, $id)
    {
        $aula = Aula::find($id);

        if (!$aula) {
            return response()->json(['mensaje' => 'Aula no encontrada'], 404);
        }

        $validator = Validator::make($request->all(), [
            'aula' => 'string|max:255',
            'capacidad' => 'integer',
            'ubicacion' => 'string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $aula->update($validator->validated());

        return response()->json($aula);
    }

    public function destroy($id)
    {
        $aula = Aula::find($id);

        if (!$aula) {
            return response()->json(['mensaje' => 'Aula no encontrada'], 404);
        }

        $aula->delete();

        return response()->json(['mensaje' => 'Aula eliminada correctamente']);
    }
}
