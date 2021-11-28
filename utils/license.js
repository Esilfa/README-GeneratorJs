// axios gets github Info
const axios = require('axios')
const LicenseInfo = (license) => {
    return axios.get("https://api.github.com/licenses" + license);
  };
module.exports +LicenseInfo