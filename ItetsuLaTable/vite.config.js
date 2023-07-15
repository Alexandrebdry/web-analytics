import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias : {
            '@' : path.resolve(__dirname,'./src')
        }
    },
    server: {
        port: 80,
        host : '0.0.0.0',
        watch: {
            usePolling: true
        }
    }
})