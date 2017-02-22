const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      return action.res
    default:
      return state
  }
}

export default events
