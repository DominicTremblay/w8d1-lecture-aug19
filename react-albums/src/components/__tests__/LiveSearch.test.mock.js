import React from 'react';
import { render, prettyDOM, fireEvent, getByPlaceholderText, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LiveSearch from 'components/LiveSearch';
import axios from 'axios';

jest.mock('axios');

const result = {
    resultCount: 1,
    results: [
        {
            wrapperType: 'collection',
            collectionType: 'Album',
            artistId: 876636555,
            collectionId: 874928227,
            artistName: 'Rilès',
            collectionName: 'Vanity Plus Mind',
            collectionCensoredName: 'Vanity Plus Mind',
            artistViewUrl: 'https://music.apple.com/ca/artist/ril%C3%A8s/876636555?uo=4',
            collectionViewUrl: 'https://music.apple.com/ca/album/vanity-plus-mind/874928227?uo=4',
            artworkUrl60:
                'https://is2-ssl.mzstatic.com/image/thumb/Music2/v4/a8/11/00/a811002c-2441-76ac-e393-42280d124bfb/source/60x60bb.jpg',
            artworkUrl100:
                'https://is2-ssl.mzstatic.com/image/thumb/Music2/v4/a8/11/00/a811002c-2441-76ac-e393-42280d124bfb/source/100x100bb.jpg',
            collectionPrice: 6.93,
            collectionExplicitness: 'explicit',
            contentAdvisoryRating: 'Explicit',
            trackCount: 7,
            copyright: '℗ 2014 Rilès',
            country: 'CAN',
            currency: 'CAD',
            releaseDate: '2014-05-08T07:00:00Z',
            primaryGenreName: 'Hip-Hop/Rap',
        },
    ],
};

describe('LiveSearch', () => {
    it('it renders without crashing', () => {
        const { debug } = render(<LiveSearch />);
        // debug();
    });

    it('loads data for artists and renders', async () => {
        // from JEST doc
        axios.get.mockResolvedValue({ data: result });
        const { debug, getByText, getByPlaceholderText } = render(<LiveSearch />);

        fireEvent.change(getByPlaceholderText(/search artists/i), { target: { value: 'Rilès' } });

        return waitForElement(() => getByText('Vanity Plus Mind'));

        // const search = await waitForElement(() => getByPlaceholderText(/search artists/i));
        debug();
        // const div = await waitForElement(() => getByText('Vanity Plus Mind'));
    });
});
