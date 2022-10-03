import type { ImportDeclaration, JSCodeshift } from "jscodeshift";
export declare const createVariableDeclarationObjectPattern: (j: JSCodeshift, { source, specifiers }: ImportDeclaration) => import("ast-types").namedTypes.VariableDeclaration;
