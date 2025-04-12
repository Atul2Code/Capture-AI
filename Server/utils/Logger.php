<?php
namespace Utils;

class Logger {
    private static $logFile = __DIR__ . '/../logs/app.log';

    public static function log($message, $level = 'INFO') {
        $timestamp = date('Y-m-d H:i:s');
        $formatted = "[$timestamp] [$level] $message" . PHP_EOL;
        file_put_contents(self::$logFile, $formatted, FILE_APPEND);
    }

    public static function error($message) {
        self::log($message, 'ERROR');
    }

    public static function info($message) {
        self::log($message, 'INFO');
    }
}
