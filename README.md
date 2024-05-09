# Prueba técnica

este proyecto esta separado en dos partes una carpeta backend(laravel 11) y otra frontend(vue3)

## Instalación

Clonar el repositorio

### Backend

1. Moverse a la carpeta atraves de la terminar o explorador de archivos
2. Instalar las dependencias de composer.

```bash
   composer install
```

3. Asignar las variables de entorno en este caso se utiliza mysql como base de datos

```bash
   php artisan migrate
```
4. Iniciar el servidor de php 
```bash
   php artisan serve
```
5. (Opcional) ejecutar las semillas para datos de prueba
```bash
 php artisan db:seed --class=UserSeeder
 php artisan db:seed --class=CategorySeeder
```
en el caso de la semilla para usuarios la contraseña por defecto es **password**

### Frontend

1. Moverse a la carpeta atraves de la terminar o explorador de archivos

2. Instalar las dependencias de node
```bash
   npm install
```

3. Ejecutar el servicio
```bash
   npm run dev
```