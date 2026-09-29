import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Pages from 'vite-plugin-pages'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        Pages({
            dirs: 'source/pages'
        })
    ],
    server: {
        open: true
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './source/components')
        }
    }
})
