import Axios from 'axios'

export const axios = Axios.create( {
  baseURL:'https://sideboneproductapi.herokuapp.com/products', headers: {Auth: "simple Auth"}, timeout: 3000,
})