import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.tsx'],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
            '@components': '/resources/js/Components',
            '@layouts': '/resources/js/Layouts',
            '@hooks': '/resources/js/Hooks',
            '@images': '/resources/assets/images',
            '@css': '/resources/assets/scss',
            // 'ziggy-js': path.resolve('vendor/tightenco/ziggy'),
        }
    }
});
