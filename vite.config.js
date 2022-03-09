import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from '@nabla/vite-plugin-eslint'

const eslintOptions = {
    useEslintrc: true,
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslintPlugin(eslintOptions)],
    build: {
        assetsDir: 'static',
    },
    server: {
        proxy: {
            '/api': 'http://localhost:5000',
        },
    },
})
