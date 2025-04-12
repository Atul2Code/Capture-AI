<?php
namespace Controllers;

use Utils\ResponseFormatter;
use Utils\Logger;

class AnalysisController {
    public static function analyze($input) {
        if (empty($input)) {
            return ResponseFormatter::error('No input provided', 400);
        }

        // Dummy response, replace with actual logic (OCR, ML, etc.)
        $result = [
            'original' => $input,
            'analysis' => strtoupper($input)
        ];

        Logger::info("Analysis performed on input: $input");

        return ResponseFormatter::success($result, 'Analysis complete');
    }
}
