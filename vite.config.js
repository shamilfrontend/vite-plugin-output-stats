import { defineConfig } from 'vite'

import { outputPluginStats } from './vite-plugins'

export default defineConfig({
    plugins: [
        outputPluginStats()
    ]
})
