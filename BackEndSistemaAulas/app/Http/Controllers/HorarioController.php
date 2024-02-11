<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Horario;
use Illuminate\Support\Facades\Validator;

class HorarioController extends Controller
{
    public function index()
    {
        $horarios = Horario::all();
        return response()->json($horarios);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'horaEntrada' => 'required|date_format:H:i',
            'horaSalida' => 'required|date_format:H:i|after:horaEntrada',
            'Dia' => 'required|in:Lunes,Martes,Miércoles,Jueves,Viernes,Sábado,Domingo',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $horario = Horario::create($validator->validated());

        return response()->json($horario, 201);
    }

    public function show($id)
    {
        $horario = Horario::find($id);

        if (!$horario) {
            return response()->json(['mensaje' => 'Horario no encontrado'], 404);
        }

        return response()->json($horario);
    }

    public function update(Request $request, $id)
    {
        $horario = Horario::find($id);

        if (!$horario) {
            return response()->json(['mensaje' => 'Horario no encontrado'], 404);
        }

        $validator = Validator::make($request->all(), [
            'horaEntrada' => 'date_format:H:i',
            'horaSalida' => 'date_format:H:i|after:horaEntrada',
            'Dia' => 'in:Lunes,Martes,Miércoles,Jueves,Viernes,Sábado,Domingo',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $horario->update($validator->validated());

        return response()->json($horario);
    }

    public function destroy($id)
    {
        $horario = Horario::find($id);

        if (!$horario) {
            return response()->json(['mensaje' => 'Horario no encontrado'], 404);
        }

        $horario->delete();

        return response()->json(['mensaje' => 'Horario eliminado correctamente']);
    }
}

