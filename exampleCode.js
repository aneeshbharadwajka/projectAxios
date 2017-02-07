const axios = require('axios')
const getGoogle = () => axios.get('http://google.com')
const getFacebook = () => axios.get('http://facebook.com')

getGoogle()
  .then(function (response) {
    console.log(response.data)
    return getFacebook()
  })
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error)
  })
//   .catch(function (error) {
//   console.log(error);
// });
