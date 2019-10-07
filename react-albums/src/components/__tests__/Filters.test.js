import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, getByLabelText, prettyDOM } from '@testing-library/react';
import Filters from 'components/Filters';


describe('Filters', () => {
  
  it('renders without crashing', () => {
    render(<Filters />);
  });
  
  it('renders with a filter', () => {
    const { debug, getByLabelText } = render(<Filters filters={{ Single: true }} />);
    
    const checkbox = getByLabelText('Single');
    
    // console.log(prettyDOM(checkbox));
    
    expect(checkbox).toHaveAttribute('checked');
  });
  
});