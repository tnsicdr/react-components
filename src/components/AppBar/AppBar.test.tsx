import { render, screen } from '@testing-library/react';

import AppBar from './index';

describe('AppBar', () => {
    test('renders AppBar component', () => {
        render(<AppBar />);

        screen.debug();
    });
});