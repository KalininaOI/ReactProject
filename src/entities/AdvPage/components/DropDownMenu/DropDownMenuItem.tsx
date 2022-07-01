import React, { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

type Props = {
  active: boolean;
  //   disabled: boolean;
  //   value: any;
  //   onClick?(): void;
} & HTMLAttributes<HTMLDivElement>;

export const MenuItem = forwardRef<HTMLDivElement, PropsWithChildren<Props>>((props, ref) => {
  const { active } = props;

  return <div ref={ref}>{props.children}</div>;
});
