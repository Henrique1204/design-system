import React from 'react';

declare global {
  export type DefaultProps = {
    testId?: string;
    className?: string;
  };

  export type Component<T = {}> = React.FC<React.PropsWithChildren<DefaultProps & T>>;

  type MergeTypes<T extends any[]> = T extends [infer First, ...infer Rest]
    ? First & MergeTypes<Rest>
    : unknown;

  type UnionTypes<T extends any[]> = T[number];
}
