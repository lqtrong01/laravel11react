<?php

namespace App\Helpers;

class CustomerHelper
{
    public static function convertBreadcrumbs($string)
    {
        // Tách các phần tử bằng dấu phẩy
        $items = explode(',', $string);
        $breadcrumbs = [];

        foreach ($items as $item) {
            // Tách id, name, href từ chuỗi
            preg_match_all('/\w+: "([^"]+)"/', $item, $matches);
            $breadcrumb = [];
            foreach ($matches[0] as $index => $key) {
                $breadcrumb[str_replace(': ', '', $key)] = $matches[1][$index];
            }
            $breadcrumbs[] = $breadcrumb;
        }

        return $breadcrumbs;
    }

    public static function convertImages($string)
    {
        // Tách các phần tử bằng dấu phẩy
        $items = explode(',', $string);
        $images = [];

        foreach ($items as $item) {
            // Tách src, alt từ chuỗi
            preg_match_all('/\w+: "([^"]+)"/', $item, $matches);
            $image = [];
            foreach ($matches[0] as $index => $key) {
                $image[str_replace(': ', '', $key)] = $matches[1][$index];
            }
            $images[] = $image;
        }

        return $images;
    }

    public static function convertColors($string)
    {
        // Tách các phần tử bằng dấu phẩy
        $items = explode(',', $string);
        $colors = [];

        foreach ($items as $item) {
            // Tách name, class, selectedClass từ chuỗi
            preg_match_all('/\w+: "([^"]+)"/', $item, $matches);
            $color = [];
            foreach ($matches[0] as $index => $key) {
                $color[str_replace(': ', '', $key)] = $matches[1][$index];
            }
            $colors[] = $color;
        }

        return $colors;
    }

    public static function convertSizes($string)
    {
        // Tách các phần tử bằng dấu phẩy
        $items = explode(',', $string);
        $sizes = [];

        foreach ($items as $item) {
            // Tách name, inStock từ chuỗi
            preg_match_all('/\w+: "([^"]+)"/', $item, $matches);
            $size = [];
            foreach ($matches[0] as $index => $key) {
                $size[str_replace(': ', '', $key)] = $matches[1][$index];
            }
            $sizes[] = $size;
        }

        return $sizes;
    }
}
