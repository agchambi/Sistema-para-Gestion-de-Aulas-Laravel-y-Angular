<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HorarioMateriaAula extends Model
{
    use HasFactory;
    protected $fillable = ['id_horario', 'id_materia', 'id_aula', 'id_maestro', 'año'];
}
