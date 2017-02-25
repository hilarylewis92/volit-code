import events from '../../src/reducers/events.js';
import * as types from '../../src/actions/ActionTypes';

describe('the event reducer', () => {
  it('should return the initial state of an empty array', () => {
    const initialState = []
    const action = {}
    const nextState = events(initialState, action);

    expect(nextState).toEqual([])
  })

  it('should handle an CREATE_EVENT action', () => {
    const state = {}
    const action = {
      type: types.CREATE_EVENT,
      res: {
        event_address:"1052 Chowda street", event_date:"2017-02-22T07:00:00.000Z", event_description:"It's going to be great", event_name:"Foam Partay",id: 1, organization_id: 1, volunteer_count: null
      }
    }
    const nextState = events(state, action)
    expect(nextState.event_address).toEqual('1052 Chowda street')
    expect(nextState.event_date).toEqual("2017-02-22T07:00:00.000Z")
    expect(nextState.volunteer_count).toEqual(null)

  })
})
