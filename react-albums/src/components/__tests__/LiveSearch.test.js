import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, getByLabelText, prettyDOM, fireEvent, waitForElement } from '@testing-library/react';
import LiveSearch from 'components/LiveSearch';

it('renders without crashing', async () => {
    const { debug, getByPlaceholderText, getByText } = render(<LiveSearch />);

    const search = getByPlaceholderText(/search artists/i);

    fireEvent.change(search, { target: { value: 'Riles' } });

    const result = await waitForElement(() => getByText('Vanity Plus Mind'));


    expect(result).toBeInTheDocument();
    // debug();

    console.log(prettyDOM(result));
});

it('loads and renders with the data', () => {});
