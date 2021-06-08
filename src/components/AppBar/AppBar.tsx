import { PropsWithChildren } from 'react';

interface IBaseAppBarProps {}

export const BaseAppBar = (props: PropsWithChildren<IBaseAppBarProps>) => {
  const { children } = props;

  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export const AppBar = (props: PropsWithChildren<IBaseAppBarProps>) => {
  const { children } = props;

  return <BaseAppBar>{children}</BaseAppBar>;
};
