import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({command}) => ({
    base: '/Starlit-Strasbourg',
    build: {
        outDir: 'docs',
        rollupOptions: {
            input: {
                main: resolve(import.meta.dirname, 'index.html'),
                playground: resolve(import.meta.dirname, 'playground/index.html'),
            },
        },
    },
}));