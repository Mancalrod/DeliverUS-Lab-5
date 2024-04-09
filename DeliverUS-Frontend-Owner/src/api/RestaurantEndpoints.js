import { get } from './helpers/ApiRequestsHelper'
function getAll () {
  return get('/users/myrestaurants')
}

function getDetail (id) {
  return get('/users/myrestaurants/id')
}

export { getAll, getDetail }
