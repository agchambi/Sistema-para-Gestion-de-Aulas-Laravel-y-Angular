<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Nivel;
use Illuminate\Support\Facades\Validator;

class NivelController extends Controller
{
    public function index()
    {
        $niveles = Nivel::all();
        return response()->json($niveles);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nivel' => 'required|string|unique:niveles|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $nivel = Nivel::create($validator->validated());

        return response()->json($nivel, 201);
    }

    public function show($id)
    {
        $nivel = Nivel::find($id);

        if (!$nivel) {
            return response()->json(['mensaje' => 'Nivel no encontrado'], 404);
        }

        return response()->json($nivel);
    }

    public function update(Request $request, $id)
    {
        $nivel = Nivel::find($id);

        if (!$nivel) {
            return response()->json(['mensaje' => 'Nivel no encontrado'], 404);
        }

        $validator = Validator::make($request->all(), [
            'nivel' => 'string|unique:niveles,nivel,' . $id . '|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $nivel->update($validator->validated());

        return response()->json($nivel);
    }

    public function destroy($id)
    {
        $nivel = Nivel::find($id);

        if (!$nivel) {
            return response()->json(['mensaje' => 'Nivel no encontrado'], 404);
        }

        $nivel->delete();

        return response()->json(['mensaje' => 'Nivel eliminado correctamente']);
    }
}
