<?php
namespace Utils;

class ResponseFormatter {
    public static function success($data = [], $message = 'Success') {
        return json_encode([
            'status' => 'success',
            'message' => $message,
            'data' => $data
        ]);
    }

    public static function error($message = 'Something went wrong', $code = 400) {
        http_response_code($code);
        return json_encode([
            'status' => 'error',
            'message' => $message
        ]);
    }
}
