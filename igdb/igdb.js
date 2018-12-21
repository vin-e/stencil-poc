/**
 * Importing this file:
 * import igdb from 'THIS_FILE_LOCATION'
 * == OR ==
 * var igdb = require('THIS_FILE_LOCATION')
 *
 * Then you would use either of the two commands:
 * igdb.get(id, filters)
 * == OR ==
 * igdb.list(query, startYear, endYear, fields, orderBy)
 *
 * See the comments below for the individual api calls.
 *
 * Any questions please reach out immediately
 */
// import axios from 'axios'

// var http = axios.create({
//   baseURL: 'https://disco-api.herokuapp.com/',
//   headers: {
//     /**
//      * To acquire a api key go to https://api.igdb.com/signup and
//      * register for a key. After signing up it will give you an api or as
//      * they state a "user-key". If there are any issues please reach out as soon as you run into issues
//      **/
//     // 'user-key': '418b95d2f972c7d0b1135e53806a94b5',
//   }
// })

/**
 * Get the individual game by id from a list query
 * @param {*} id
 * @param {*} fields the defaults are supplied in the fields line below. But you can also specific a star (*) and get all fields from the api
 */
function get (id, fields) {
  if (!id) throw Error('igdb get requires a game identifier')

  var params = {
    id: id,
    fields: fields || '*'
  }

  let fetchData = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(params)
  }

  return fetch('https://disco-api.herokuapp.com/get', fetchData).then(response => response.json())

  // return http
  //   .post('get', {
  //     params: params
  //   })
  //   .then(res => {
  //     // returning only the element queried
  //     return res.data
  //   })
}

/**
 * List and search igdb api by name, release year.
 * You can also filter out specific fields and order by
 * @param {*} query
 * @param {*} startYear in format of 'YYYY-MM-DD'
 * @param {*} endYear in format of 'YYYY-MM-DD'
 * @param {*} fields the defaults are supplied in the fields line below. But you can also specific a star (*) and get all fields from the api
 * @param {*} orderBy a specific field and define a direction (either asc or desc). With our default fields below you can sort by name, first_release_date, rating, rating_count or any of the other fields in the data
 */
function list (query, startYear, endYear, fields, orderBy) {
  var params = {
    fields: fields || '*',
    orderBy: orderBy || 'popularity:desc'
  }

  if (query) {
    params['search'] = query
  }

  if (startYear) {
    params['filter[release_dates.date][gte]'] = startYear
  }

  if (endYear) {
    params['filter[release_dates.date][lte]'] = endYear
  }

  let fetchData = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({ params })
  }

  return fetch('https://disco-api.herokuapp.com/list', fetchData).then(response => response.json())
}

export default {
  get: get,
  list: list
}
