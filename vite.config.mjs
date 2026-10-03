import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({command}) => ({
    base: command === 'build' ? 'Starlit-Strasbourg' : '/',
    build: {

        //Will use a new branch for vite deployment
        rollupOptions: {
            input: {
                main: resolve(import.meta.dirname, 'index.html'),
                playground: resolve(import.meta.dirname, 'playground/index.html'),
            },
            exclude: ['**/_*'],
        },
    },
}));