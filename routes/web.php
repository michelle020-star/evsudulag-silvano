<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/users', 'UserController@getUsers');
$router->post('/login', 'UserController@login');

$router->post('/create', 'ProductController@createProduct');
$router->post('/buy/{id}', 'ProductController@buyProduct');
$router->post('inactive/{id}', 'ProductController@inactiveProduct');