<?php
require_once '../../core/bootstrap.php';

use Controllers\AnalysisController;
use Middleware\CorsMiddleware;
use Middleware\AuthMiddleware;

CorsMiddleware::handle();
AuthMiddleware::handle();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $body = json_decode(file_get_contents('php://input'), true);
    $input = $body['input'] ?? '';

    echo AnalysisController::analyze($input);
}
