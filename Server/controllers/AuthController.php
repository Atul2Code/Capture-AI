<?php
namespace Controllers;

use Utils\ResponseFormatter;

class AuthController {
    public static function login($email, $password) {
        // Replace with database validation
        if ($email === 'user@example.com' && $password === 'password123') {
            return ResponseFormatter::success([
                'token' => 'mysecrettoken'
            ], 'Login successful');
        }

        return ResponseFormatter::error('Invalid credentials', 401);
    }
}
