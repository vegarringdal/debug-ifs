const checker = require('fuse-box-typechecker').TypeChecker({
    tsConfigOverride: {
        compilerOptions: {
            outDir: `./dist`,
            rootDir: `./src`,
            target: 'es2018',
            module: 'esNext',
            lib: ['es2019', 'dom'],
            moduleResolution: 'node',
            isolatedModules: false,
            preserveConstEnums: true,
            allowSyntheticDefaultImports: true,
            skipLibCheck: true,
            sourceMap: true,
            preserveSymlinks: true,
            declaration: true,
            noImplicitAny: true,
            noImplicitReturns: true,
            noImplicitUseStrict: true,
            noUnusedParameters: true,
            suppressImplicitAnyIndexErrors: true,
            noFallthroughCasesInSwitch: true,
            noImplicitThis: false,
            noUnusedLocals: true,
            allowUnreachableCode: false,
            removeComments: true,
            emitDecoratorMetadata: true,
            importHelpers: true,
            strictNullChecks: false,
            experimentalDecorators: true
        },
        exclude: ['dist', 'node_modules']
    },
    basePath: `./`,
    name: `simple build`
});

checker.printSettings();
const result = checker.inspectOnly();
checker.printOnly(result);
result.oldProgram.emit();