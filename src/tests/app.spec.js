import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './components/app';

const props = {
  message: 'Hello World!'
}
const container = shallow(<App {...props} />);

describe('<App> component', () => {

  it('Should render component', () => {
    expect(container.find(App)).to.exist;
  });

  it('Should render <div>', () => {
    expect(container.find(App).find('div')).to.exist;
  });

  it('Should render <h1> inside <div>', () => {
    expect(container.find(App).find('div').find('h1')).to.exist;
  });

  it('Should render <img> inside <div>', () => {
    expect(container.find(App).find('div').find('img')).to.exist;
  });

  it('Should render component with exactly one <div> tag', () => {
    expect(container.find('div').length).to.equal(1);
  });

  it('Should render component with exactly one <h1> tag', () => {
    expect(container.find('div').find('h1').length).to.equal(1);
  });

  it('Should render component with exactly one <img> tag', () => {
    expect(container.find('div').find('img').length).to.equal(1);
  });

  it('Should render component nested <h1> tag with correct class applied', () => {
    expect(container.find('div').find('h1').hasClass('heading')).to.equal(true);
  });

  it('Should render component with the message passed as props', () => {
    expect(container.find('div').find('h1').html()).to.equal(`<h1 class="heading">${props.message}</h1>`);
  });

});
