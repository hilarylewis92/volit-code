const profile = (state = {}, action) => {
  switch (action.type) {
    case 'ADMIN_LOGIN':
      return Object.assign({}, state, { org_name: action.res.name, admin_id: action.res.admin_id, org_id: action.res.id })
    default:
      return state
  }
}

export default profile
