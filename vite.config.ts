import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import eslintPlugin from '@nabla/vite-plugin-eslint'

import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import { ESLint } from 'eslint'

const eslintOptions: Partial<ESLint.Options> = {
    useEslintrc: true,
}

const pwaOptions: Partial<VitePWAOptions> = {
    // outDir: 'dist/static',
    manifest: {
        name: 'Quicktrack Lite',
        short_name: 'QTLite',
        theme_color: '#3f88c5',
        icons: [
            {
                src: 'static/icons/manifest-icon-192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable any',
            },
            {
                src: 'static/icons/manifest-icon-512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable any',
            },
        ],
        start_url: '/',
        display: 'standalone',
        background_color: '#131516',
    },
    strategies: 'generateSW',
    workbox: {
        navigateFallback: null,
    },
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        eslintPlugin({ eslintOptions: eslintOptions }),
        VitePWA(pwaOptions),
    ],
    build: {
        assetsDir: 'static',
    },
    server: {
        proxy: {
            '/api': 'http://localhost:5000',
        },
    },
})
