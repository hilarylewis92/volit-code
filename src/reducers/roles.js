const roles = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_ROLE':
      return action.res
    default:
      return state
  }
}

export default roles
