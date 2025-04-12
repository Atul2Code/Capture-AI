<?php
namespace Middleware;

use Utils\ResponseFormatter;

class AuthMiddleware {
    public static function handle() {
        $headers = getallheaders();
        if (!isset($headers['Authorization'])) {
            echo ResponseFormatter::error('Unauthorized: No token provided', 401);
            exit;
        }

        $token = trim(str_replace('Bearer', '', $headers['Authorization']));
        
        // Replace with your own validation logic or token decoding
        if ($token !== 'mysecrettoken') {
            echo ResponseFormatter::error('Unauthorized: Invalid token', 401);
            exit;
        }

        return true;
    }
}
