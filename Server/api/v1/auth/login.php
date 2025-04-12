<?php
require_once '../../core/bootstrap.php';

use Controllers\AuthController;
use Middleware\CorsMiddleware;

CorsMiddleware::handle();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $body = json_decode(file_get_contents('php://input'), true);
    $email = $body['email'] ?? '';
    $password = $body['password'] ?? '';

    echo AuthController::login($email, $password);
}
