import { RootNode } from '@codama/nodes';
import { visit } from '@codama/visitors';

import { defaultVisitor } from './defaultVisitor';
import { IdlV00, rootNodeFromAnchorV00, rootNodeFromAnchorV00Events } from './v00';
import { IdlV01, rootNodeFromAnchorV01, rootNodeFromAnchorV01Events } from './v01';

export * from './defaultVisitor';
export * from './discriminators';
export * from './v00';
export * from './v01';

export type AnchorIdl = IdlV00 | IdlV01;

export function rootNodeFromAnchor(idl: AnchorIdl): RootNode {
    return visit(rootNodeFromAnchorWithoutDefaultVisitor(idl), defaultVisitor());
}

export function rootNodeFromAnchorWithoutDefaultVisitor(idl: AnchorIdl): RootNode {
    if ((idl.metadata as { spec?: string })?.spec === '0.1.0') {
        return rootNodeFromAnchorV01(idl as IdlV01);
    }

    return rootNodeFromAnchorV00(idl as IdlV00);
}

export function rootNodeFromAnchorEvents(idl: AnchorIdl): RootNode {
    return visit(rootNodeFromAnchorEventsWithoutDefaultVisitor(idl), defaultVisitor());
}

export function rootNodeFromAnchorEventsWithoutDefaultVisitor(idl: AnchorIdl): RootNode {
    if ((idl.metadata as { spec?: string })?.spec === '0.1.0') {
        return rootNodeFromAnchorV01Events(idl as IdlV01);
    }

    return rootNodeFromAnchorV00Events(idl as IdlV00);
}
