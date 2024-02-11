<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Maestro;
use Illuminate\Support\Facades\Validator;

class MaestroController extends Controller
{
    public function index()
    {
        $maestros = Maestro::all();
        return response()->json($maestros);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ci' => 'required|string|unique:maestros|max:255',
            'nombre' => 'required|string|max:255',
            'apellido' => 'required|string|max:255',
            'telefono' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $maestro = Maestro::create($validator->validated());

        return response()->json($maestro, 201);
    }

    public function show($id)
    {
        $maestro = Maestro::find($id);

        if (!$maestro) {
            return response()->json(['mensaje' => 'Maestro no encontrado'], 404);
        }

        return response()->json($maestro);
    }

    public function update(Request $request, $id)
    {
        $maestro = Maestro::find($id);

        if (!$maestro) {
            return response()->json(['mensaje' => 'Maestro no encontrado'], 404);
        }

        $validator = Validator::make($request->all(), [
            'ci' => 'string|unique:maestros,ci,' . $id . '|max:255',
            'nombre' => 'string|max:255',
            'apellido' => 'string|max:255',
            'telefono' => 'string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $maestro->update($validator->validated());

        return response()->json($maestro);
    }

    public function destroy($id)
    {
        $maestro = Maestro::find($id);

        if (!$maestro) {
            return response()->json(['mensaje' => 'Maestro no encontrado'], 404);
        }

        $maestro->delete();

        return response()->json(['mensaje' => 'Maestro eliminado correctamente']);
    }
}
