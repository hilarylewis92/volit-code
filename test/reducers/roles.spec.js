import roles from '../../src/reducers/roles.js';
import * as types from '../../src/actions/ActionTypes';

describe('the roles reducer', () => {
  it('should return initial state of empty array', () => {
    const initialState = []
    const action = {}
    const nextState = roles(initialState, action)

    expect(nextState).toEqual([])
  })

  it('should not pass if initial state type does not match returned state', () => {
    const initialState = []
    const action = {}
    const nextState = roles(initialState, action)

    expect(nextState).not.toEqual({})
  })

  it('should handle a CREATE_ROLE action', () => {
    const initialState = []
    const action = {
      type: types.CREATE_ROLE,
      res: [
          { role_name: 'sound guy', event_id: 2 }, { role_name: 'singer', event_id: 2 }
      ]
    }
    const nextState = roles(initialState, action)

    expect(nextState)
  });

});
