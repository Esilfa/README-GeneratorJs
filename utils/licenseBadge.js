let getBadge = (license) => {
    if (license === "mit") {
        return "[[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    if (license === "lgpl-3.0") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    }
    if (license === "mpl-2.0") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
}
};
    module.exports = getBadge;