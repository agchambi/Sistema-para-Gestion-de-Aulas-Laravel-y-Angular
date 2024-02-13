<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NivelEstudianteParaleloAula extends Model
{
    use HasFactory;
    protected $table = 'nivel_estudiante_paralelo_aulas';
    protected $fillable = ['id_nivel', 'id_estudiante', 'id_paralelo', 'id_aula', 'anio'];

    public function nivel()
    {
        return $this->belongsTo(Nivel::class, 'id_nivel');
    }
    public function estudiante()
    {
        return $this->belongsTo(Estudiante::class, 'id_estudiante');
    }
    public function paralelo()
    {
        return $this->belongsTo(Paralelo::class, 'id_paralelo');
    }
    public function aula()
    {
        return $this->belongsTo(Aula::class, 'id_aula');
    }

}
