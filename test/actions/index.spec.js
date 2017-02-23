import * as actions from '../../src/actions/index.js';
import * as types from '../../src/actions/ActionTypes.js';

describe('actions', () => {

  it('the setProfile action creator should create an ADMIN_login action', () => {
    const res = {organization: [{admin_id: 1, id: 1, name: 'Habitat for Alex'}], user: {email:'lol@yahoo.com', id: 1, name: "Tofu Salad", phone_number: '555-555-6666'}}

    const expected = {
      type: types.ADMIN_LOGIN,
      organization: {admin_id: 1, id: 1, name: 'Habitat for Alex'},
      user: {email:'lol@yahoo.com', id: 1, name: "Tofu Salad", phone_number: '555-555-6666'}
    }

    expect(actions.setProfile(res)).toEqual(expected)

  });

  it('the setEvents action create should create a CREATE_EVENT action', () => {
    const res = {
      event_address:"1052 Chowda street", event_date:"2017-02-22T07:00:00.000Z", event_description:"It's going to be great", event_name:"Foam Partay",id: 1, organization_id: 1, volunteer_count: null
    }
    const expected = {
      type: types.CREATE_EVENT,
      res: {
        event_address:"1052 Chowda street", event_date:"2017-02-22T07:00:00.000Z", event_description:"It's going to be great", event_name:"Foam Partay",id: 1, organization_id: 1, volunteer_count: null
      }
    }

    expect(actions.setEvents(res)).toEqual(expected)
  });

  // xit('should create an action to add an item', () => {
  //   const item = 'example two';
  //   const expectedAction = {
  //     type: types.ITEM__CREATE,
  //     item
  //   };
  //
  //   expect(actions.addItemSuccess(item)).toEqual(expectedAction);
  // });
  //
  // xit('should create an action to add a flash message', () => {
  //   const text = 'A thing was successful!';
  //   const messageType = 'notification';
  //   const expectedAction = {
  //     type: types.FLASH_MESSAGE__CREATE,
  //     messageType,
  //     text
  //   };
  //
  //   expect(actions.addFlashMessage(text, messageType)).toEqual(expectedAction);
  // });
  //
  // xit('should create an action to delete a flash message', () => {
  //   const timestamp = 12345;
  //   const expectedAction = {
  //     type: types.FLASH_MESSAGE__DELETE,
  //     timestamp
  //   };
  //
  //   expect(actions.deleteFlashMessage(timestamp)).toEqual(expectedAction);
  // });
});
