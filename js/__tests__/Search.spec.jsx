/* @flow */
import React from 'react';
import Search from '../Search';
import preload from '../../data.json';
// Enzyme is a wrapper around react-test-renderer, that will stubout all the child components
// from a Component. That way things in parent components will fail if something changed in them
// rather than failing when their children change
import { shallow } from 'enzyme';
import ShowCard from '../ShowCard';

test('Search renders correctly', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of shows based on searchTerm', () => {
  const searchWord = 'black';
  const component = shallow(<Search shows={preload.shows} />);
  // Find the input and simulate as if the user entered the search word
  component.find('input').simulate('change', { target: { value: searchWord } });

  // Get the show count by filtering on the searchTerm
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  ).length;

  expect(component.find(ShowCard).length).toEqual(showCount);
});
