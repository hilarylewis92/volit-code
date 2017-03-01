import * as actions from '../../src/actions/index.js'
import * as types from '../../src/actions/ActionTypes.js'

describe('ADMIN_LOGIN action creator', () => {
  let res, expected

  beforeEach(() => {
    res = {
      organization: [{
        admin_id: 1,
        id: 1,
        name: 'Habitat for Alex' }],
      user: {
        email:'lol@yahoo.com',
        id: 1,
        name: "Tofu Salad",
        phone_number: '555-555-6666'
      }}

    expected = {
      type: types.ADMIN_LOGIN,
      organization: { admin_id: 1, id: 1, name: 'Habitat for Alex' },
      user: { email:'lol@yahoo.com', id: 1, name: "Tofu Salad", phone_number: '555-555-6666' }
    }
  })

  it('the setProfile action creator should create action object', () => {
    expect(actions.setProfile(res)).toEqual(expected)
  })

  it('should have an organization property', () => {
    expect(actions.setProfile(res).organization).toEqual(expected.organization)
  })

  it('should have an user property', () => {
    expect(actions.setProfile(res).user).toEqual(expected.user)
  })
})

describe('CREATE_EVENT action creator', () => {
  let res, expected

  beforeEach(() => {
    res = {
      event_address:"1052 Chowda street", event_date:"2017-02-22T07:00:00.000Z",
      event_description:"It's going to be great",
      event_name:"Foam Partay",
      id: 1,
      organization_id: 1,
      volunteer_count: null
    }

    expected = {
      type: types.CREATE_EVENT,
      res: {
        event_address:"1052 Chowda street", event_date:"2017-02-22T07:00:00.000Z",
        event_description:"It's going to be great",
        event_name:"Foam Partay",id: 1,
        organization_id: 1,
        volunteer_count: null
      }
    }
  })

  it('should have an event_name, vent_address, event_date, event_address property', () => {
    expect(actions.setEvents(res).event_name).toEqual(expected.event_name)
    expect(actions.setEvents(res).event_address).toEqual(expected.event_address)
    expect(actions.setEvents(res).event_date).toEqual(expected.event_date)
    expect(actions.setEvents(res).event_address).toEqual(expected.event_address)
  })

  it('should have an organization_id and volunteer_count property', () => {
    expect(actions.setEvents(res).organization_id).toEqual(expected.organization_id)
    expect(actions.setEvents(res).volunteer_count).toEqual(expected.volunteer_count)
  })

  it('the setEvents action create should create an action object', () => {
    expect(actions.setEvents(res)).toEqual(expected)
  })
})

describe('CREATE_ROLE action creator', () => {
  let res, expected

  beforeEach(() => {
    res = [
        { id: 1, role_name: 'sound guy', event_id: 2 },
        { id: 2, role_name: 'singer', event_id: 2 }
    ]

    expected = {
      type: types.CREATE_ROLE,
      res: [
          { id: 1, role_name: 'sound guy', event_id: 2 },
          { id: 2, role_name: 'singer', event_id: 2 }
      ]
    }
  })

  it('the setRoles should create an action object', () => {
    expect(actions.setRoles(res)).toEqual(expected)
  })

  it('the setRoles action should have correct length', () => {
    expect(actions.setRoles(res).length).toEqual(expected.length)
  })

  it('the setRoles action res should have correct items', () => {
    expect(actions.setRoles(res).res[0].id).toEqual(1)
  })
})
