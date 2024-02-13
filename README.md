# Sistema de Gestión de Aulas (Angular y Laravel) por Antony Chambi

## Backend

El backend del sistema de gestión de aulas ha sido desarrollado siguiendo una arquitectura de microservicios, utilizando **Laravel** como framework principal.

### Instalación

Para instalar y configurar el backend, sigue los siguientes pasos:

1. Clona el repositorio del proyecto (agregar el comando de clonación específico aquí).
2. Instala las dependencias de Laravel ejecutando el siguiente comando:

```bash
composer install
php artisan key:generate 
```
Configura tu archivo .env con las credenciales de tu base de datos y otras configuraciones necesarias.
Ejecuta las migraciones y semillas para configurar y llenar tu base de datos:
``` bash
php artisan migrate
php artisan db:seed
``` 

# Documentación de la API del Sistema de Gestión de Aulas

El sistema de gestión de aulas proporciona una serie de endpoints de API RESTful para facilitar la administración de aulas, estudiantes, horarios, y más. A continuación, se detallan las rutas disponibles y ejemplos de cómo utilizar cada método HTTP soportado (GET, POST, PUT, DELETE).

## Rutas de la API

### Aulas

- **GET `/aulas`**: Retorna una lista de todas las aulas.
- **POST `/aulas`**: Crea una nueva aula. Debes proporcionar los detalles del aula en el cuerpo de la solicitud.
- **GET `/aulas/{id}`**: Retorna los detalles de una aula específica.
- **PUT `/aulas/{id}`**: Actualiza la información de una aula existente. Debes proporcionar los detalles actualizados del aula en el cuerpo de la solicitud.
- **DELETE `/aulas/{id}`**: Elimina una aula específica.

### Estudiantes

- **GET `/estudiantes`**: Retorna una lista de todos los estudiantes.
- **POST `/estudiantes`**: Crea un nuevo estudiante. Debes proporcionar los detalles del estudiante en el cuerpo de la solicitud.
- **GET `/estudiantes/{id}`**: Retorna los detalles de un estudiante específico.
- **PUT `/estudiantes/{id}`**: Actualiza la información de un estudiante existente. Debes proporcionar los detalles actualizados del estudiante en el cuerpo de la solicitud.
- **DELETE `/estudiantes/{id}`**: Elimina un estudiante específico.

### Horarios

- **GET `/horarios`**: Retorna una lista de todos los horarios.
- **POST `/horarios`**: Crea un nuevo horario. Debes proporcionar los detalles del horario en el cuerpo de la solicitud.
- **GET `/horarios/{id}`**: Retorna los detalles de un horario específico.
- **PUT `/horarios/{id}`**: Actualiza la información de un horario existente. Debes proporcionar los detalles actualizados del horario en el cuerpo de la solicitud.
- **DELETE `/horarios/{id}`**: Elimina un horario específico.

(Continúa con este formato para las demás rutas: horario-materia-aulas, maestros, materias, niveles, nivel-estudiante-paralelo-aulas, y paralelos.)

