import React from 'react';
import { Provider } from 'react-redux';
import { mount, wrapper } from 'enzyme';

import EventManagerContainer from '../../src/containers/EventManagerContainer.js';
import EventList from '../../src/components/EventList';
let sinon = require('sinon');


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

    it('should render', () => {

      const store = storeFake({
        profile: {
          user: {name: 'Alex Tideman',
                email: 'scubasteve87@hotmail.com',
                phone_number: "555-555-5555"},
          organization: {
            org_name: 'Puppies R Important',
            admin_id: 1,
            org_id: 1
          }
        },
        events: {
          id: 16,
          event_name: "Puppy Bowl",
          event_date: "2017-03-29T06:00:00.000Z",
          event_description: "puppies wandering around",
          event_address: "1052 Lipan St",
          volunteer_count: null,
          organization_id: 5
        }
      });

  		const wrapper = mount(
  			<Provider store={store}>
  				<EventManagerContainer profile={store.profile} events={store.events} auth={store.auth} />
  			</Provider>
      );

      let yay = wrapper.find(EventList);


      console.log(store)
		expect(yay.length).toBeTruthy();
	});
})
