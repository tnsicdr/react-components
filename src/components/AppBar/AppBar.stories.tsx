import { AppBar } from './AppBar';

export default {
    title: `Components/${AppBar.name}`,
    component: AppBar
};

export const AppBarBase = () => {
    return <AppBar />;
}

export const AppBarWithTitleText = () => {
    return <AppBar title={'Title'} />;
}

export const AppBarWithTitleComponent = () => {
    return <AppBar title={<a href="#">Link Title</a>} />;
}