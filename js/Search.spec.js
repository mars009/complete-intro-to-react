import React from 'react'
import Search from './Search'
import ShowCard from './ShowCard'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import preload from '../public/data.json'

// This is how you write a snapshot test.
// ~ If the snapshot test doesn't exist it will create one and will use that going forward
test('Search snapshot test', () => {
    const component = shallow( <Search/>)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
})

test('Search should render a ShowCard for each show', () => {
    const component = shallow( <Search/> )
    expect(preload.shows.length).toEqual(component.find(ShowCard).length)
})

test('Search should render correct amount of shows based on search', () => {
    const searchWord = 'house'
    const component = shallow( <Search/> )
        // Simulating a 'change' event passing it a syntetic event with the 'searchWord'
    component.find('input').simulate('change', { target: { value: searchWord } })

    const showCount = preload.shows.filter(show => {
        // If you find the search term within the title or the description then let the show through
        return `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
    }).length

    expect(component.find(ShowCard).length).toEqual(showCount)
})