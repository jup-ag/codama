import { RootNode, rootNode } from '@codama/nodes';

import { IdlV00 } from './idl';
import { programNodeFromAnchorV00, programNodeFromAnchorV00Events } from './ProgramNode';

export function rootNodeFromAnchorV00(program: IdlV00, additionalPrograms: IdlV00[] = []): RootNode {
    const programNode = programNodeFromAnchorV00(program);
    const additionalProgramNodes = additionalPrograms.map(programNodeFromAnchorV00);
    return rootNode(programNode, additionalProgramNodes);
}

export function rootNodeFromAnchorV00Events(program: IdlV00): RootNode {
    return rootNode(programNodeFromAnchorV00Events(program));
}
