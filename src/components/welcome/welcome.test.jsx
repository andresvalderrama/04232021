import { html as h } from 'htm/preact';
import { render } from '@testing-library/preact';
import { expect } from 'chai';

import Welcome from './index.jsx';

describe('<Welcome />', () => {
  it('renders learn preact link', () => {
    const { getByText } = render(h`<${Welcome} name="World" />`);
    const linkElement = getByText(/Hello World!/i);

    expect(linkElement).to.not.be.null;
  });
});
