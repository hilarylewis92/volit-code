import roles from '../../src/reducers/roles.js'
import * as types from '../../src/actions/ActionTypes'

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
          { id: 1, role_name: 'sound guy', event_id: 2 }, { id: 2, role_name: 'singer', event_id: 2 }
      ]
    }
    const nextState = roles(initialState, action)

    expect(nextState.length).toEqual(2)
    expect(nextState[0].id).toEqual(1)
    expect(nextState[0].event_id).toEqual(2)
    expect(nextState[1].id).toEqual(2)
  })

  it('should have the correct number of items in role state after CREATE_ROLE action', () => {
    const initialState = []
    const action = {
      type: types.CREATE_ROLE,
      res: [
          { id: 1, role_name: 'sound guy', event_id: 2 }, { id: 2, role_name: 'singer', event_id: 2 }
      ]
    }
    const nextState = roles(initialState, action)
    expect(nextState.length).toEqual(2)
  })
})
