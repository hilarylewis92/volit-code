import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import EventManagerContainer from '../../src/containers/EventManagerContainer.js';
import SideBarContainer from '../../src/containers/SideBarContainer';
import EventList from '../../src/components/EventList';

const storeFake = (state) => {
	return {
		default: () => {},
		subscribe: () => {},
		dispatch: () => {},
		getState: () => {
			return { ...state };
		},
	};
};


describe('EventManagerContainer', function() {
  let Component
  let EventList
  beforeEach(() => {
		const store = storeFake({
      profile:
      organization: 
    });

		const wrapper = mount(
			<Provider store={store}>
				<EventManagerContainer />
			</Provider>
		);

    Component = wrapper.find(SideBarContainer);
		EventList = Component.find(EventList);
  });

    it('should render', () => {
		expect(Component.length).toBeTruthy();
		expect(EventList.length).toBeTruthy();
	});
})
