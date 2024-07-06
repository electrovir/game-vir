import {join, resolve} from 'path';
import {defineConfig} from 'virmator/dist/compiled-base-configs/base-vite';

export default defineConfig({forGitHubPages: false}, (baseConfig, basePaths) => {
    return {
        ...baseConfig,
        base: '/game-vir/book',
        build: {
            outDir: join(basePaths.cwd, 'dist-book'),
            emptyOutDir: true,
        },
        resolve: {
            alias: {
                '@game-vir/handle-input': resolve('../handle-input/src/index.ts'),
                '@game-vir/render': resolve('../render/src/index.ts'),
            },
        },
    };
});
