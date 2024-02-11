<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NivelEstudianteParaleloAula extends Model
{
    use HasFactory;
    protected $fillable = ['id_nivel', 'id_estudiante', 'id_paralelo', 'id_aula', 'año'];
}
