import profile from '../../src/reducers/profile.js';
import * as types from '../../src/actions/ActionTypes';

describe('the profile reducer', () => {
  it('should return the initial state of an empty array', () => {
    const initialState = []
    const action = {}
    const nextState = profile(initialState, action);

    expect(nextState).toEqual([])
  })

  it('should handle an ADMIN_LOGIN action', () => {
    const state = {}
    const action = {
      type: types.ADMIN_LOGIN,
      organization: {admin_id: 1, id: 1, name: 'Habitat for Alex'},
      user: {email:'lol@yahoo.com', id: 1, name: "Tofu Salad", phone_number: '555-555-6666'}
    }
    const nextState = profile(state, action)
    expect(nextState.organization.org_name).toEqual('Habitat for Alex')
    expect(nextState.organization.admin_id).toEqual(1)
    expect(nextState.organization.org_id).toEqual(1)
    expect(nextState.user.name).toEqual('Tofu Salad')
    expect(nextState.user.email).toEqual('lol@yahoo.com')
    expect(nextState.user.phone_number).toEqual('555-555-6666')
  })
})
