<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Paralelo;
use Illuminate\Support\Facades\Validator;

class ParaleloController extends Controller
{
    public function index()
    {
        $paralelos = Paralelo::all();
        return response()->json($paralelos);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'paralelo' => 'required|string|unique:paralelos|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $paralelo = Paralelo::create($validator->validated());

        return response()->json($paralelo, 201);
    }

    public function show($id)
    {
        $paralelo = Paralelo::find($id);

        if (!$paralelo) {
            return response()->json(['mensaje' => 'Paralelo no encontrado'], 404);
        }

        return response()->json($paralelo);
    }

    public function update(Request $request, $id)
    {
        $paralelo = Paralelo::find($id);

        if (!$paralelo) {
            return response()->json(['mensaje' => 'Paralelo no encontrado'], 404);
        }

        $validator = Validator::make($request->all(), [
            'paralelo' => 'string|unique:paralelos,paralelo,' . $id . '|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $paralelo->update($validator->validated());

        return response()->json($paralelo);
    }

    public function destroy($id)
    {
        $paralelo = Paralelo::find($id);

        if (!$paralelo) {
            return response()->json(['mensaje' => 'Paralelo no encontrado'], 404);
        }

        $paralelo->delete();

        return response()->json(['mensaje' => 'Paralelo eliminado correctamente']);
    }
}
