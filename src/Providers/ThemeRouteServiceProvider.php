<?php

namespace Waldorfshop8\Providers;

use Plenty\Plugin\RouteServiceProvider;
use Plenty\Plugin\Routing\Router;

class ThemeRouteServiceProvider extends RouteServiceProvider
{
    public function map(Router $router)
    {
        $router->get('/rest/wd/categorysbc/{id}', 'Waldorfshop8\Controllers\ThemeController@showShopBuilderContent');
    }
}
