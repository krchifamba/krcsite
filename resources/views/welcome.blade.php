<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Laravel React</title>

        <!-- Styles / Scripts -->
        <!-- <script src="{{ asset('js/app.js') }}" defer></script> -->
        <!-- @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot'))) -->
        @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    </head>
    <body>
        <div id="hello-react"></div>
    </body>
</html>
