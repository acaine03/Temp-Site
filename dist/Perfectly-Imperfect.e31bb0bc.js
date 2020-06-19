// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<!-- top-banner and left-side-nav will be stationary on every page to keep uniformity -->\n    <div class=\"top-banner\">\n        <h1>Perfectly</h1>\n    </div>\n";
};

exports.default = _default;
},{}],"components/Nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(links) {
  return "\n<div class=\"main-section\">\n\n<div class=\"left-side-nav\">\n\n  <ul>\n  ".concat(links.map(function (link) {
    return "<a href=\"/".concat(link.title, "\">").concat(link.text, "</a><br>");
  }).join(""), "\n  </ul>\n\n</div>\n");
};

exports.default = _default;
},{}],"img/home.jpg":[function(require,module,exports) {
module.exports = "/home.dc07cc9e.jpg";
},{}],"img/team.jpg":[function(require,module,exports) {
module.exports = "/team.d60cd625.jpg";
},{}],"img/services.jpg":[function(require,module,exports) {
module.exports = "/services.8c836a2a.jpg";
},{}],"img/resources.jpg":[function(require,module,exports) {
module.exports = "/resources.3239f357.jpg";
},{}],"img/career.jpg":[function(require,module,exports) {
module.exports = "/career.8fe724dd.jpg";
},{}],"img/contact.jpg":[function(require,module,exports) {
module.exports = "/contact.39f7414c.jpg";
},{}],"components/views/HomePage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var homePage = require('../../img/home.jpg');

var meetOurTeamPage = require('../../img/team.jpg');

var clientServicesPage = require('../../img/services.jpg');

var resourcesPage = require('../../img/resources.jpg');

var careerOpportunitiesPage = require('../../img/career.jpg');

var contactUs = require('../../img/contact.jpg');

var _default = function _default() {
  return "\n    <div class=\"right-side-content\">\n    <div class=\"home-greeting\">\n    <h3>Hello, Admin.</h3>\n    \n    </div>  \n    \n        <div class=\"home-nav\">\n          <a href=\"/HomePage\"><img src=\"".concat(homePage, "\" class=\"home\"><figcaption>Home</figcaption></a>\n          <a><img src=\"").concat(meetOurTeamPage, "\" class=\"team\"><figcaption>Meet Our Team</figcaption></a>\n          <a><img src=\"").concat(clientServicesPage, "\" class=\"banking\"><figcaption>Banking</figcaption></a>\n          <a><img src=\"").concat(resourcesPage, "\" class=\"resources\"><figcaption>Resources</figcaption></a>\n          <a><img src=\"").concat(careerOpportunitiesPage, "\" class=\"careerOpportunities\"><figcaption>Career Opportunities</figcaption></a>\n          <a><img src=\"").concat(contactUs, "\" class=\"contactUs\"><figcaption>Contact Us</figcaption></a>\n        </div>\n    </div>\n");
};

exports.default = _default;
},{"../../img/home.jpg":"img/home.jpg","../../img/team.jpg":"img/team.jpg","../../img/services.jpg":"img/services.jpg","../../img/resources.jpg":"img/resources.jpg","../../img/career.jpg":"img/career.jpg","../../img/contact.jpg":"img/contact.jpg"}],"img/updates.png":[function(require,module,exports) {
module.exports = "/updates.6ba6a658.png";
},{}],"components/views/MeetOurTeam.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var updatesComing = require('../../img/updates.png');

var _default = function _default() {
  return "\n    <div class=\"right-side-content\">\n        <div class=\"meet-our-team\">\n    \n        <img src=\"".concat(updatesComing, "\" class=\"work-in-progress\">\n        </div>\n    </div>\n");
};

exports.default = _default;
},{"../../img/updates.png":"img/updates.png"}],"components/views/ClientServices.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var updatesComing = require('../../img/updates.png');

var _default = function _default() {
  return "\n    <div class=\"right-side-content\">\n        <div class=\"client-services\">\n    \n        <img src=\"".concat(updatesComing, "\" class=\"work-in-progress\">\n        </div>\n    </div>\n");
};

exports.default = _default;
},{"../../img/updates.png":"img/updates.png"}],"components/views/Resources.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var updatesComing = require('../../img/updates.png');

var _default = function _default() {
  return "\n    <div class=\"right-side-content\">\n        <div class=\"resources\">\n    \n        <img src=\"".concat(updatesComing, "\" class=\"work-in-progress\">\n        </div>\n    </div>\n");
};

exports.default = _default;
},{"../../img/updates.png":"img/updates.png"}],"components/views/CareerOpportunities.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var updatesComing = require('../../img/updates.png');

var _default = function _default() {
  return "\n    <div class=\"right-side-content\">\n        <div class=\"career-opportunities\">\n    \n        <img src=\"".concat(updatesComing, "\" class=\"work-in-progress\">\n        </div>\n    </div>\n");
};

exports.default = _default;
},{"../../img/updates.png":"img/updates.png"}],"components/views/ContactUs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n    <div class=\"right-side-content\">\n        <div class=\"contact-us\">\n            <h2>Contact Us</h2>\n        \n        </div>\n        <div class=\"contact-information\">\n            \n            Questions?<a href=\"\">Email Us</a><br>\n            *Please Include*<br>\n            First Name<br>\n            Last Name<br>\n            Subject Line<br>\n            Message - Reason for Contact<br>\n            Best time to reach you<br>\n            \n            A representative will respond within 48 hours.<br><br>\n            Technical Issues? <a href=\"support@perfectlyimperfect-counseling.com\">Contact Support</a>\n        </div>\n    </div>    \n";
};

exports.default = _default;
},{}],"components/views/Main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<!-- top-banner and left-side-nav will be stationary on every page to keep uniformity -->\n    <div class=\"top-banner\">\n        <h1>Perfectly</h1>\n    </div>\n    <div class=\"main-section\">\n    <div class=\"left-side-nav\">\n        \n    </div>\n";
};

exports.default = _default;
},{}],"components/views/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "HomePage", {
  enumerable: true,
  get: function () {
    return _HomePage.default;
  }
});
Object.defineProperty(exports, "MeetOurTeam", {
  enumerable: true,
  get: function () {
    return _MeetOurTeam.default;
  }
});
Object.defineProperty(exports, "ClientServices", {
  enumerable: true,
  get: function () {
    return _ClientServices.default;
  }
});
Object.defineProperty(exports, "Resources", {
  enumerable: true,
  get: function () {
    return _Resources.default;
  }
});
Object.defineProperty(exports, "CareerOpportunities", {
  enumerable: true,
  get: function () {
    return _CareerOpportunities.default;
  }
});
Object.defineProperty(exports, "ContactUs", {
  enumerable: true,
  get: function () {
    return _ContactUs.default;
  }
});
Object.defineProperty(exports, "Main", {
  enumerable: true,
  get: function () {
    return _Main.default;
  }
});

var _HomePage = _interopRequireDefault(require("./HomePage"));

var _MeetOurTeam = _interopRequireDefault(require("./MeetOurTeam"));

var _ClientServices = _interopRequireDefault(require("./ClientServices"));

var _Resources = _interopRequireDefault(require("./Resources"));

var _CareerOpportunities = _interopRequireDefault(require("./CareerOpportunities.js"));

var _ContactUs = _interopRequireDefault(require("./ContactUs"));

var _Main = _interopRequireDefault(require("./Main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./HomePage":"components/views/HomePage.js","./MeetOurTeam":"components/views/MeetOurTeam.js","./ClientServices":"components/views/ClientServices.js","./Resources":"components/views/Resources.js","./CareerOpportunities.js":"components/views/CareerOpportunities.js","./ContactUs":"components/views/ContactUs.js","./Main":"components/views/Main.js"}],"components/Main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var views = _interopRequireWildcard(require("./views"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = function _default(st) {
  return "\n".concat(views[st.view](st), "\n");
};

exports.default = _default;
},{"./views":"components/views/index.js"}],"components/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<footer>\n    <div class=\"footer\">\n        <h6>&copy; 2020 Perfectly Imperfect Counseling LLP</h6>\n    </div>\n</footer>\n";
};

exports.default = _default;
},{}],"components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function () {
    return _Header.default;
  }
});
Object.defineProperty(exports, "Nav", {
  enumerable: true,
  get: function () {
    return _Nav.default;
  }
});
Object.defineProperty(exports, "Main", {
  enumerable: true,
  get: function () {
    return _Main.default;
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function () {
    return _Footer.default;
  }
});

var _Header = _interopRequireDefault(require("./Header"));

var _Nav = _interopRequireDefault(require("./Nav"));

var _Main = _interopRequireDefault(require("./Main"));

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Header":"components/Header.js","./Nav":"components/Nav.js","./Main":"components/Main.js","./Footer":"components/Footer.js"}],"store/HomePage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "Home Page",
  view: "HomePage"
};
exports.default = _default;
},{}],"store/Links.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  title: "Home",
  text: "Home"
}, {
  title: "AboutUs",
  text: "About Us"
}, {
  title: "MeetOurTeam",
  text: "Meet Our Team"
}, {
  title: "ClientServices",
  text: "Client Services"
}, {
  title: "Resources",
  text: "Resources"
}, {
  title: "CareerOpportunities",
  text: "Career Opportunities"
}, {
  title: "ContactUs",
  text: "Contact Us"
}];
exports.default = _default;
},{}],"store/AboutUs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "About Us",
  view: "AboutUs"
};
exports.default = _default;
},{}],"store/MeetOurTeam.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "Meet Our Team",
  view: "MeetOurTeam"
};
exports.default = _default;
},{}],"store/ClientServices.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "Client Services",
  view: "ClientServices"
};
exports.default = _default;
},{}],"store/Resources.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "Resources",
  view: "Resources"
};
exports.default = _default;
},{}],"store/CareerOpportunities.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "Career Opportunities",
  view: "CareerOpportunities"
};
exports.default = _default;
},{}],"store/ContactUs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  header: "Contact Us",
  view: "ContactUs"
};
exports.default = _default;
},{}],"store/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "HomePage", {
  enumerable: true,
  get: function () {
    return _HomePage.default;
  }
});
Object.defineProperty(exports, "Links", {
  enumerable: true,
  get: function () {
    return _Links.default;
  }
});
Object.defineProperty(exports, "AboutUs", {
  enumerable: true,
  get: function () {
    return _AboutUs.default;
  }
});
Object.defineProperty(exports, "MeetOurTeam", {
  enumerable: true,
  get: function () {
    return _MeetOurTeam.default;
  }
});
Object.defineProperty(exports, "ClientServices", {
  enumerable: true,
  get: function () {
    return _ClientServices.default;
  }
});
Object.defineProperty(exports, "Resources", {
  enumerable: true,
  get: function () {
    return _Resources.default;
  }
});
Object.defineProperty(exports, "CareerOpportunities", {
  enumerable: true,
  get: function () {
    return _CareerOpportunities.default;
  }
});
Object.defineProperty(exports, "ContactUs", {
  enumerable: true,
  get: function () {
    return _ContactUs.default;
  }
});

var _HomePage = _interopRequireDefault(require("./HomePage"));

var _Links = _interopRequireDefault(require("./Links"));

var _AboutUs = _interopRequireDefault(require("./AboutUs"));

var _MeetOurTeam = _interopRequireDefault(require("./MeetOurTeam"));

var _ClientServices = _interopRequireDefault(require("./ClientServices"));

var _Resources = _interopRequireDefault(require("./Resources"));

var _CareerOpportunities = _interopRequireDefault(require("./CareerOpportunities"));

var _ContactUs = _interopRequireDefault(require("./ContactUs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./HomePage":"store/HomePage.js","./Links":"store/Links.js","./AboutUs":"store/AboutUs.js","./MeetOurTeam":"store/MeetOurTeam.js","./ClientServices":"store/ClientServices.js","./Resources":"store/Resources.js","./CareerOpportunities":"store/CareerOpportunities.js","./ContactUs":"store/ContactUs.js"}],"node_modules/navigo/lib/navigo.min.js":[function(require,module,exports) {
var define;
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Navigo=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function n(e,n,o){this.root=null,this._routes=[],this._useHash=n,this._hash=void 0===o?"#":o,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!n&&t(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=n?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):n&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function o(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function i(e){return e.replace(/\/$/,"").split("/").length}function s(e,t){return i(t)-i(e)}function r(e,t){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(t){var i=function(e){var t=[];return{regexp:e instanceof RegExp?e:new RegExp(e.replace(n.PARAMETER_REGEXP,function(e,o,i){return t.push(i),n.REPLACE_VARIABLE_REGEXP}).replace(n.WILDCARD_REGEXP,n.REPLACE_WILDCARD)+n.FOLLOWED_BY_SLASH_REGEXP,n.MATCH_REGEXP_FLAGS),paramNames:t}}(o(t.route)),s=i.regexp,r=i.paramNames,a=e.replace(/^\/+/,"/").match(s),h=function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}(a,r);return!!a&&{match:a,route:t,params:h}}).filter(function(e){return e})}(e,t)[0]||!1}function a(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),i=o(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:i}function h(e,n,o){var i,s=function(e){return e.split(/\?(.*)?$/)[0]};return void 0===o&&(o="#"),t()&&!n?s(e).split(o)[0]:(i=e.split(o)).length>1?s(i[1]):s(i[0])}function u(t,n,o){if(n&&"object"===(void 0===n?"undefined":e(n))){if(n.before)return void n.before(function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(t(),n.after&&n.after(o))},o);if(n.after)return t(),void(n.after&&n.after(o))}t()}return n.prototype={helpers:{match:r,root:a,clean:o,getOnlyURL:h},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];if("function"==typeof o[0])this._defaultHandler={handler:o[0],hooks:o[1]};else if(o.length>=2)if("/"===o[0]){var r=o[1];"object"===e(o[1])&&(r=o[1].uses),this._defaultHandler={handler:r,hooks:o[2]}}else this._add(o[0],o[1],o[2]);else"object"===e(o[0])&&Object.keys(o[0]).sort(s).forEach(function(e){t.on(e,o[0][e])});return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var n,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var a=function(e){return e.split(/\?(.*)?$/).slice(1).join("")}(e||this._cLoc()),l=h(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&l===this._lastRouteResolved.url&&a===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=r(l,this._routes))?(this._callLeave(),this._lastRouteResolved={url:l,query:a,hooks:o.route.hooks,params:o.params,name:o.route.name},n=o.route.handler,u(function(){u(function(){o.route.route instanceof RegExp?n.apply(void 0,o.match.slice(1,o.match.length)):n(o.params,a)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===l||"/"===l||l===this._hash||function(e,n,o){if(t()&&!n)return!1;if(!e.match(o))return!1;var i=e.split(o);return i.length<2||""===i[1]}(l,this._useHash,this._hash))?(u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(a)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(a)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){if((n.ctrlKey||n.metaKey)&&"a"==n.target.tagName.toLowerCase())return!1;var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e)for(i in n=o.route,t)n=n.toString().replace(":"+i,t[i]);return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,this._historyAPIUpdateMethod=e?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return void 0===e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){t()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof t&&(t=encodeURI(t)),this._routes.push("object"===(void 0===n?"undefined":e(n))?{route:t,handler:n.uses,name:n.as,hooks:o||n.hooks}:{route:t,handler:n,hooks:o}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=a(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;(o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:o(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var e=this._lastRouteResolved;e&&e.hooks&&e.hooks.leave&&e.hooks.leave(e.params)}},n.PARAMETER_REGEXP=/([:*])(\w+)/g,n.WILDCARD_REGEXP=/\*/g,n.REPLACE_VARIABLE_REGEXP="([^/]+)",n.REPLACE_WILDCARD="(?:.*)",n.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",n.MATCH_REGEXP_FLAGS="",n});


},{}],"index.js":[function(require,module,exports) {
"use strict";

var components = _interopRequireWildcard(require("./components"));

var state = _interopRequireWildcard(require("./store"));

var _navigo = _interopRequireDefault(require("navigo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = new _navigo.default(window.location.origin);
router.on({
  ":page": function page(params) {
    return render(state[params.page]);
  },
  "/": function _() {
    return render(state.HomePage);
  }
}).resolve();

function render(st) {
  console.log(st);
  document.querySelector("#root").innerHTML = "\n    ".concat((0, components.Header)(st), "\n    ").concat((0, components.Nav)(state.Links), "\n    ").concat((0, components.Main)(st), "\n    ").concat((0, components.Footer)(), "\n    ");
}

router.updatePageLinks();
},{"./components":"components/index.js","./store":"store/index.js","navigo":"node_modules/navigo/lib/navigo.min.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60471" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Perfectly-Imperfect.e31bb0bc.js.map