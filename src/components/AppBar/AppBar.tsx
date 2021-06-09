import { PropsWithChildren } from 'react';

interface IBaseAppBarProps extends React.HTMLProps<void> {}

export const BaseAppBar = (props: PropsWithChildren<IBaseAppBarProps>) => {
  const { children, className } = props;

  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
};

export const AppBar = (props: PropsWithChildren<IBaseAppBarProps>) => {
  const { children } = props;

  return <BaseAppBar>{children}</BaseAppBar>;
};
