import { $ } from 'execa';
import * as esbuild from 'esbuild';
import fs from 'node:fs/promises';
import path from 'node:path';

const cjsPath = path.join('dist', 'cjs');
const entryPoints = [path.join('src', 'index.ts')];
const esmPath = path.join('dist', 'esm');
const commonBuildOptions = { bundle: true, entryPoints, platform: 'node', sourcemap: true };
const typesTmpPath = path.join('dist', 'types-tmp');

// Dependent on the types being built before this is called.
async function buildCjs() {
    await esbuild.build({ ...commonBuildOptions, format: 'cjs', outdir: cjsPath });

    const cjsPackageJson = JSON.stringify({ type: 'commonjs' }, null, 2);

    await fs.writeFile(path.join(cjsPath, 'package.json'), cjsPackageJson);

    await fs.cp(typesTmpPath, cjsPath, { recursive: true });
}

// Dependent on the types being built before this is called.
async function buildEsm() {
    await esbuild.build({ ...commonBuildOptions, format: 'esm', outdir: esmPath, packages: 'external' });

    const esmPackageJson = JSON.stringify({ type: 'module' }, null, 2);

    await fs.writeFile(path.join(esmPath, 'package.json'), esmPackageJson);

    await fs.cp(typesTmpPath, esmPath, { recursive: true });
}

await $`tsc --declaration --declarationMap --emitDeclarationOnly --outDir ${typesTmpPath}`;

await buildCjs();

await buildEsm();

await $`rimraf ${typesTmpPath}`;
