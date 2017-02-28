const profile = (state = {}, action) => {
  switch (action.type) {
    case 'ADMIN_LOGIN':
      return Object.assign({}, state, {
        organization: {
          org_name: action.organization.name,
          admin_id: action.organization.admin_id,
          org_id: action.organization.id,
        },
        user: {
          name: action.user.name,
          email: action.user.email,
          phone_number: action.user.phone_number,
          picture: action.user.picture
        }
      }, {})
    default:
      return state
  }
}

export default profile
