import {defineConfig} from '@virmator/frontend/configs/vite.config.base.ts';
import {join, resolve} from 'node:path';

export default defineConfig(
    {forGitHubPages: false, packageDirPath: resolve(import.meta.dirname, '..')},
    (baseConfig, basePaths) => {
        return {
            ...baseConfig,
            base: '/game-vir/book',
            esbuild: {
                keepNames: true,
            },
            build: {
                ...baseConfig.build,
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
    },
);
