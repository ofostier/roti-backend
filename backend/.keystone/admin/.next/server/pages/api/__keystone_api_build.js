module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u4g4");


/***/ }),

/***/ "1muL":
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "3SxR":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/auth");

/***/ }),

/***/ "99Vv":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/fields");

/***/ }),

/***/ "DBBG":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/keystone/schema");

/***/ }),

/***/ "Kfaf":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/keystone/session");

/***/ }),

/***/ "SXOg":
/***/ (function(module, exports) {

module.exports = require("@keystonejs-contrib-next/list-plugins");

/***/ }),

/***/ "VnZ6":
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),

/***/ "u4g4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "config", function() { return /* reexport */ keystone; });

// EXTERNAL MODULE: external "@keystone-next/auth"
var auth_ = __webpack_require__("3SxR");

// EXTERNAL MODULE: external "@keystone-next/keystone/schema"
var schema_ = __webpack_require__("DBBG");

// EXTERNAL MODULE: external "@keystone-next/keystone/session"
var session_ = __webpack_require__("Kfaf");

// EXTERNAL MODULE: external "@keystone-next/fields"
var fields_ = __webpack_require__("99Vv");

// CONCATENATED MODULE: /Users/131562/react_project/roti-backend/schemas/fields.ts

const permissionFields = {
  canManageRotis: Object(fields_["checkbox"])({
    defaultValue: false,
    label: 'User can Update and delete any roti'
  }),
  canSeeOtherUsers: Object(fields_["checkbox"])({
    defaultValue: false,
    label: 'User can query other users'
  }),
  canManageUsers: Object(fields_["checkbox"])({
    defaultValue: false,
    label: 'User can Edit other users'
  }),
  canManageRoles: Object(fields_["checkbox"])({
    defaultValue: false,
    label: 'User can CRUD roles'
  }),
  canManageCart: Object(fields_["checkbox"])({
    defaultValue: false,
    label: 'User can see and manage cart and cart items'
  }),
  canManageOrders: Object(fields_["checkbox"])({
    defaultValue: false,
    label: 'User can see and manage orders'
  }),
  canManageVotes: Object(fields_["checkbox"])({
    defaultValue: false,
    label: 'User can see and manage votes'
  })
};
const permissionsList = Object.keys(permissionFields);
// CONCATENATED MODULE: /Users/131562/react_project/roti-backend/access.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


// At it's simplest, the access control returns a yes or no value depending on the users session
function isSignedIn({
  session
}) {
  return !!session;
}
const generatedPermissions = Object.fromEntries(permissionsList.map(permission => [permission, function ({
  session
}) {
  var _session$data$role;

  return !!(session !== null && session !== void 0 && (_session$data$role = session.data.role) !== null && _session$data$role !== void 0 && _session$data$role[permission]);
}])); // Permissions check if someone meets a criteria - yes or no.

const permissions = _objectSpread(_objectSpread({}, generatedPermissions), {}, {
  isAwesome({
    session
  }) {
    return !!(session !== null && session !== void 0 && session.data.name.includes('wes'));
  }

}); // Rule based function
// Rules can return a boolean - yes or no - or a filter which limits which products they can CRUD.

const rules = {
  canManageRotis({
    session
  }) {
    if (!isSignedIn({
      session
    })) {
      return false;
    } // 1. Do they have the permission of canManageProducts


    if (permissions.canManageRotis({
      session
    })) {
      return true;
    } // 2. If not, do they own this item?


    return {
      user: {
        id: session === null || session === void 0 ? void 0 : session.itemId
      }
    };
  },

  // canOrder({ session }: ListAccessArgs) {
  //   if (!isSignedIn({ session })) {
  //     return false;
  //   }
  //   // 1. Do they have the permission of canManageProducts
  //   if (permissions.canManageCart({ session })) {
  //     return true;
  //   }
  //   // 2. If not, do they own this item?
  //   return { user: { id: session?.itemId } };
  // },
  // canManageOrderItems({ session }: ListAccessArgs) {
  //   if (!isSignedIn({ session })) {
  //     return false;
  //   }
  //   // 1. Do they have the permission of canManageProducts
  //   if (permissions.canManageCart({ session })) {
  //     return true;
  //   }
  //   // 2. If not, do they own this item?
  //   return { order: { user: { id: session?.itemId } } };
  // },
  canReadRotis({
    session
  }) {
    if (!isSignedIn({
      session
    })) {
      return false;
    }

    if (permissions.canManageRotis({
      session
    })) {
      return true; // They can read everything!
    } // They should only see available products (based on the status field)


    return {
      status: 'AVAILABLE'
    };
  },

  canManageUsers({
    session
  }) {
    if (!isSignedIn({
      session
    })) {
      return false;
    }

    if (permissions.canManageUsers({
      session
    })) {
      return true;
    } // Otherwise they may only update themselves!


    return {
      id: session === null || session === void 0 ? void 0 : session.itemId
    };
  }

};
// CONCATENATED MODULE: /Users/131562/react_project/roti-backend/schemas/Role.ts
function Role_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Role_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Role_ownKeys(Object(source), true).forEach(function (key) { Role_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Role_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Role_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Role = Object(schema_["list"])({
  access: {
    create: permissions.canManageRoles,
    read: permissions.canManageRoles,
    update: permissions.canManageRoles,
    delete: permissions.canManageRoles
  },
  ui: {
    hideCreate: args => !permissions.canManageRoles(args),
    hideDelete: args => !permissions.canManageRoles(args),
    isHidden: args => !permissions.canManageRoles(args)
  },
  fields: Role_objectSpread(Role_objectSpread({
    name: Object(fields_["text"])({
      isRequired: true
    })
  }, permissionFields), {}, {
    assignedTo: Object(fields_["relationship"])({
      ref: 'User.role',
      // TODO: Add this to the User
      many: true,
      ui: {
        itemView: {
          fieldMode: 'read'
        }
      }
    })
  })
});
// EXTERNAL MODULE: external "@keystonejs-contrib-next/list-plugins"
var list_plugins_ = __webpack_require__("SXOg");

// CONCATENATED MODULE: /Users/131562/react_project/roti-backend/schemas/Roti.ts
 //import { atTracking } from '@keystone-next/keystone';



 //import { ProductImage } from './ProductImage';

const withAtTracking = Object(list_plugins_["atTracking"])({}); // TODO: [RR-1] Add byTracking KEYSTONE Plugin
// Capacity to automated CreatedBy and UpdateBy

const Roti = Object(schema_["list"])( //  withAtTracking(
{
  // access:
  access: {
    create: isSignedIn,
    read: rules.canReadRotis,
    update: rules.canManageRotis,
    delete: rules.canManageRotis
  },
  fields: {
    subject: Object(fields_["text"])({
      isRequired: true
    }),
    description: Object(fields_["text"])({
      ui: {
        displayMode: 'textarea'
      }
    }),
    shorturl: Object(fields_["text"])({
      isRequired: true
    }),
    datecreated: Object(fields_["timestamp"])({
      //format: 'dd/MM/yyyy HH:mm O',
      //yearPickerType: 'auto',
      defaultValue: () => new Date().getTime()
    }),
    status: Object(fields_["select"])({
      options: [{
        label: 'Draft',
        value: 'DRAFT'
      }, {
        label: 'Availlable',
        value: 'AVAILABLE'
      }, {
        label: 'Unavailable',
        value: 'UNAVAILABLE '
      }, {
        label: 'Closed',
        value: 'CLOSED'
      }],
      defaultValue: 'AVAILABLE',
      ui: {
        displayMode: 'segmented-control',
        createView: {
          fieldMode: 'hidden'
        }
      }
    }),
    user: Object(fields_["relationship"])({
      ref: 'User.rotis',
      defaultValue: ({
        context
      }) => ({
        connect: {
          id: context.session.itemId
        }
      })
    }),
    votes: Object(fields_["relationship"])({
      ref: 'Vote.rotis',
      many: true
    }),
    tags: Object(fields_["text"])({
      isRequired: false
    }) // tags: virtual({
    //     resolver: (item) => `TOTO`,
    //     //graphQLReturnType: 'String',
    // }),

  } // plugins: [
  //   atTracking(),
  // ]

} //)
);
// CONCATENATED MODULE: /Users/131562/react_project/roti-backend/schemas/Vote.ts

 //import { atTracking } from '@keystone-next/keystone';


 //import { ProductImage } from './ProductImage';

const Vote_withAtTracking = Object(list_plugins_["atTracking"])({}); // TODO: [RR-1] Add byTracking KEYSTONE Plugin
// Capacity to automated CreatedBy and UpdateBy

const Vote = Object(schema_["list"])( //withAtTracking(
{
  // access:
  access: {
    create: isSignedIn,
    read: rules.canReadRotis,
    update: rules.canManageRotis,
    delete: rules.canManageRotis
  },
  fields: {
    name: Object(fields_["text"])({
      isRequired: false
    }),
    email: Object(fields_["text"])({
      isRequired: false
    }),
    note: Object(fields_["select"])({
      options: [{
        value: '0',
        label: '0'
      }, {
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }, {
        value: '5',
        label: '5'
      }],
      defaultValue: 1 //dataType: 'integer',
      // ui: {
      //   displayMode: 'segmented-control',
      //   //createView: { fieldMode: 'hidden' },
      // },

    }),
    mood: Object(fields_["select"])({
      options: [{
        value: '0',
        label: '0'
      }, {
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }, {
        value: '5',
        label: '5'
      }],
      defaultValue: 1 //dataType: 'integer',

    }),
    comment: Object(fields_["text"])({
      ui: {
        displayMode: 'textarea'
      }
    }),
    rotis: Object(fields_["relationship"])({
      ref: 'Roti.votes',
      many: true //isIndexed: true,

    })
  } // plugins: [
  //   atTracking(),
  // ]

} //)
);
// CONCATENATED MODULE: /Users/131562/react_project/roti-backend/schemas/User.ts



const User = Object(schema_["list"])({
  access: {
    create: () => true,
    read: rules.canManageUsers,
    update: rules.canManageUsers,
    // only people with the permission can delete themselves!
    // You can't delete yourself
    delete: permissions.canManageUsers
  },
  ui: {
    // hide the backend UI from regular users
    hideCreate: args => !permissions.canManageUsers(args),
    hideDelete: args => !permissions.canManageUsers(args)
  },
  fields: {
    name: Object(fields_["text"])({
      isRequired: true
    }),
    firstname: Object(fields_["text"])({
      isRequired: false
    }),
    email: Object(fields_["text"])({
      isRequired: true,
      isUnique: true
    }),
    password: Object(fields_["password"])(),
    phone: Object(fields_["text"])({
      isRequired: false
    }),
    rotis: Object(fields_["relationship"])({
      ref: 'Roti.user',
      many: true
    }),
    // cart: relationship({
    //   ref: 'CartItem.user',
    //   many: true,
    //   ui: {
    //     createView: { fieldMode: 'hidden' },
    //     itemView: { fieldMode: 'read' },
    //   },
    // }),
    // orders: relationship({ ref: 'Order.user', many: true }),
    language: Object(fields_["select"])({
      options: [{
        label: 'Français',
        value: 'fr'
      }, {
        label: 'English',
        value: 'en-gb'
      }],
      defaultValue: 'en-gb',
      ui: {
        displayMode: 'segmented-control',
        createView: {
          fieldMode: 'hidden'
        }
      }
    }),
    role: Object(fields_["relationship"])({
      ref: 'Role.assignedTo',
      access: {
        create: permissions.canManageUsers,
        update: permissions.canManageUsers
      }
    }) // products: relationship({
    //   ref: 'Product.user',
    //   many: true,
    // }),

  }
});
// EXTERNAL MODULE: external "dotenv/config"
var config_ = __webpack_require__("VnZ6");

// CONCATENATED MODULE: /Users/131562/react_project/roti-backend/seed-data/data.ts
function timestamp() {
  // sometime in the last 30 days
  const stampy = Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

const products = [{
  name: 'Yeti Hondo',
  description: 'soo nice',
  status: 'AVAILABLE',
  price: 3423,
  photo: {
    id: '5dfbed262849d7961377c2c0',
    filename: 'hondo.jpg',
    originalFilename: 'hondo.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5dfbed262849d7961377c2c0',
      version: 1576791335,
      signature: '9f7d5115788b7677307a39214f9684dd827ea5f9',
      width: 750,
      height: 457,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 27871,
      type: 'upload',
      etag: 'e1fdf84d5126b6ca2e1c8ef9532be5a5',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg',
      original_filename: 'file'
    }
  } // createdBy: null,
  // updatedBy: null,
  // updatedAt_utc: '2020-12-19T21:35:35.739Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-12-19T21:35:35.739Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Airmax 270',
  description: 'Great shoes!',
  status: 'AVAILABLE',
  price: 5234,
  photo: {
    id: '5e2a13f0689b2835ae71d1a5',
    filename: '270-camo-sunset.jpg',
    originalFilename: '270-camo-sunset.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a13f0689b2835ae71d1a5',
      version: 1579815920,
      signature: 'a430b2d35f6a03dc562f6f56a474deb6810e393f',
      width: 960,
      height: 640,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 45455,
      type: 'upload',
      etag: 'aebe8e9cc98ee4ad71682f19af85745b',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:45:20.833Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:45:20.833Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'KITH Hoodie',
  description: 'Love this hoodie',
  status: 'AVAILABLE',
  price: 23562,
  photo: {
    id: '5e2a13ff689b2835ae71d1a7',
    filename: 'kith-hoodie.jpg',
    originalFilename: 'kith-hoodie.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a13ff689b2835ae71d1a7',
      version: 1579815935,
      signature: '360df116020320a14845cf235b87a4a5cdc23f86',
      width: 2000,
      height: 2000,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 202924,
      type: 'upload',
      etag: 'b6fbc18b196c68e2b87f51539b849e70',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:45:36.012Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:45:36.012Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Fanorak',
  description: 'Super hip. Comes in a number of colours',
  status: 'AVAILABLE',
  price: 252342,
  photo: {
    id: '5e2a1413689b2835ae71d1a9',
    filename: 'TNF-fanorak.png',
    originalFilename: 'TNF-fanorak.png',
    mimetype: 'image/png',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a1413689b2835ae71d1a9',
      version: 1579815957,
      signature: 'affd16fa20107a4d5399aab553ea77fff1c4b2ef',
      width: 1276,
      height: 1490,
      format: 'png',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 2454948,
      type: 'upload',
      etag: 'ce0f36da93c60c5d4406657225206f70',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:45:58.336Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:45:58.336Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Nike Vapormax',
  description: 'Kind of squeaky on some floors',
  status: 'AVAILABLE',
  price: 83456,
  photo: {
    id: '5e2a142c689b2835ae71d1ab',
    filename: 'vapormax.jpg',
    originalFilename: 'vapormax.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a142c689b2835ae71d1ab',
      version: 1579815980,
      signature: '6dd95447407c06ba955164c4961bd4abc2fb9f4d',
      width: 1100,
      height: 735,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 183071,
      type: 'upload',
      etag: '5550566c7fab113ba32d85ed08f54faa',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:46:21.015Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:46:21.015Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Yeti Cooler',
  description: 'Who spends this much on a cooler?!',
  status: 'AVAILABLE',
  price: 75654,
  photo: {
    id: '5e2a143f689b2835ae71d1ad',
    filename: 'coral-yeti.jpg',
    originalFilename: 'coral-yeti.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a143f689b2835ae71d1ad',
      version: 1579815999,
      signature: '97e8f27cdbb6a736062391b9ac3a5c689bd50646',
      width: 1300,
      height: 1144,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 286643,
      type: 'upload',
      etag: '3655bfd83998492b8421782db868c9df',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579815999/sick-fits-keystone/5e2a143f689b2835ae71d1ad.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579815999/sick-fits-keystone/5e2a143f689b2835ae71d1ad.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:46:40.526Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:46:40.526Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Naked and Famous Denim',
  description: 'Japanese Denim, made in Canada',
  status: 'AVAILABLE',
  price: 10924,
  photo: {
    id: '5e2a145d689b2835ae71d1af',
    filename: 'naked-and-famous-denim.jpg',
    originalFilename: 'naked-and-famous-denim.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a145d689b2835ae71d1af',
      version: 1579816030,
      signature: '76dec3670cc4a4c22723720bb94496a35945c626',
      width: 1024,
      height: 683,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 146817,
      type: 'upload',
      etag: '3d68591332785ae5273ed43b1aa91712',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579816030/sick-fits-keystone/5e2a145d689b2835ae71d1af.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579816030/sick-fits-keystone/5e2a145d689b2835ae71d1af.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:47:11.415Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:47:11.415Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Rimowa Luggage',
  description: 'S T E A L T H',
  status: 'AVAILABLE',
  price: 47734,
  photo: {
    id: '5e2a147b689b2835ae71d1b1',
    filename: 'rimowa.png',
    originalFilename: 'rimowa.png',
    mimetype: 'image/png',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a147b689b2835ae71d1b1',
      version: 1579816060,
      signature: 'a6161568d2d59a59e8dba9b15e705581198ea377',
      width: 800,
      height: 1004,
      format: 'png',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 953657,
      type: 'upload',
      etag: 'd89ab8ecc366bc63464a3eeef6ef3010',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579816060/sick-fits-keystone/5e2a147b689b2835ae71d1b1.png',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579816060/sick-fits-keystone/5e2a147b689b2835ae71d1b1.png',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:47:41.358Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:47:41.358Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Black Hole ',
  description: 'Outdoorsy ',
  status: 'AVAILABLE',
  price: 4534,
  photo: {
    id: '5e2a149b689b2835ae71d1b3',
    filename: 'patagonia black hole.jpg',
    originalFilename: 'patagonia black hole.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a149b689b2835ae71d1b3',
      version: 1579816093,
      signature: '6ac148051cb4ba0227ee49fd61fa1348ab4a9870',
      width: 2000,
      height: 2000,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 515360,
      type: 'upload',
      etag: '8aed0984d37a3d12faa832860b29d24b',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579816093/sick-fits-keystone/5e2a149b689b2835ae71d1b3.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579816093/sick-fits-keystone/5e2a149b689b2835ae71d1b3.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:48:13.812Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:48:13.812Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Nudie Belt',
  description: 'Sick design',
  status: 'AVAILABLE',
  price: 5234,
  photo: {
    id: '5e2a14b1689b2835ae71d1b5',
    filename: 'nudie-belt.jpg',
    originalFilename: 'nudie-belt.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a14b1689b2835ae71d1b5',
      version: 1579816114,
      signature: '24f3ff4ae91dfcc8d1ddeb1a713215730e834be4',
      width: 650,
      height: 650,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 71291,
      type: 'upload',
      etag: '3a4b97ef88c550dcd6c2d399d1bc698e',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579816114/sick-fits-keystone/5e2a14b1689b2835ae71d1b5.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579816114/sick-fits-keystone/5e2a14b1689b2835ae71d1b5.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:48:34.398Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:48:34.398Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Goose',
  description: 'Keep warm.',
  status: 'AVAILABLE',
  price: 74544,
  photo: {
    id: '5e2a14bf689b2835ae71d1b7',
    filename: 'canada-goose.jpg',
    originalFilename: 'canada-goose.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a14bf689b2835ae71d1b7',
      version: 1579816128,
      signature: 'bebf3d817e91cdbb91768e8c9c2133a78798a317',
      width: 800,
      height: 800,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 180261,
      type: 'upload',
      etag: 'f9c8725f815a6873cbdc47ba3f869049',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579816128/sick-fits-keystone/5e2a14bf689b2835ae71d1b7.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579816128/sick-fits-keystone/5e2a14bf689b2835ae71d1b7.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:48:48.633Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:48:48.633Z',
  // createdAt_offset: '+00:00',

}, {
  name: 'Ultraboost',
  description: 'blacked out',
  status: 'AVAILABLE',
  price: 6344,
  photo: {
    id: '5e2a14cc689b2835ae71d1b9',
    filename: 'ultra-boost.jpg',
    originalFilename: 'ultra-boost.jpg',
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      public_id: 'sick-fits-keystone/5e2a14cc689b2835ae71d1b9',
      version: 1579816141,
      signature: '18720c13b7f6d4fcde919dddb33d1c711a459c14',
      width: 565,
      height: 372,
      format: 'jpg',
      resource_type: 'image',
      created_at: timestamp(),
      tags: [],
      bytes: 50754,
      type: 'upload',
      etag: '44cf57f8218f135b82cfa5df0da92a49',
      placeholder: false,
      url: 'http://res.cloudinary.com/wesbos/image/upload/v1579816141/sick-fits-keystone/5e2a14cc689b2835ae71d1b9.jpg',
      secure_url: 'https://res.cloudinary.com/wesbos/image/upload/v1579816141/sick-fits-keystone/5e2a14cc689b2835ae71d1b9.jpg',
      original_filename: 'file'
    }
  } // createdBy: '5de9a29642ca551f24c596ba',
  // updatedBy: '5de9a29642ca551f24c596ba',
  // updatedAt_utc: '2020-01-23T21:49:01.569Z',
  // updatedAt_offset: '+00:00',
  // createdAt_utc: '2020-01-23T21:49:01.569Z',
  // createdAt_offset: '+00:00',

}];
// CONCATENATED MODULE: /Users/131562/react_project/roti-backend/seed-data/index.ts

async function insertSeedData({
  prisma
}) {
  console.log(`🌱 Inserting Seed Data: ${products.length} Products`);

  for (const product of products) {
    console.log(`  🛍️ Adding Product: ${product.name}`);
    const {
      id
    } = await prisma.productImage.create({
      data: {
        image: JSON.stringify(product.photo),
        altText: product.description
      }
    }); // @ts-ignore

    delete product.photo; // @ts-ignore

    product.photoId = id;
    await prisma.product.create({
      data: product
    });
  }

  console.log(`✅ Seed Data Inserted: ${products.length} Products`);
  console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);
  process.exit();
}
// EXTERNAL MODULE: external "nodemailer"
var external_nodemailer_ = __webpack_require__("1muL");

// CONCATENATED MODULE: /Users/131562/react_project/roti-backend/lib/mail.ts

const transport = Object(external_nodemailer_["createTransport"])({
  // @ts-ignore
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

function makeANiceEmail(text) {
  return `
    <div className="email" style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px;
    ">
      <h2>Hello There!</h2>
      <p>${text}</p>

      <p>😘, Wes Bos</p>
    </div>
  `;
}

async function sendPasswordResetEmail(resetToken, to) {
  var _process$env$MAIL_USE;

  // email the user a token
  const info = await transport.sendMail({
    to,
    from: 'wes@wesbos.com',
    subject: 'Your password reset token!',
    html: makeANiceEmail(`Your Password Reset Token is here!
      <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click Here to reset</a>
    `)
  });

  if ((_process$env$MAIL_USE = process.env.MAIL_USER) !== null && _process$env$MAIL_USE !== void 0 && _process$env$MAIL_USE.includes('ethereal.email')) {
    // @ts-ignore
    console.log(`� Message Sent!  Preview it at ${Object(external_nodemailer_["getTestMessageUrl"])(info)}`);
  }
}
// CONCATENATED MODULE: /Users/131562/react_project/roti-backend/keystone.ts




 // import { OrderItem } from './schemas/OrderItem';
// import { Order } from './schemas/Order';
// import { CartItem } from './schemas/CartItem';
// import { ProductImage } from './schemas/ProductImage';
// import { Product } from './schemas/Product';






 //import { extendGraphqlSchema } from './mutations';

const databaseURL = process.env.DATABASE_URL || 'file:./keystone.db';
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  // How long they stay signed in?
  secret: process.env.COOKIE_SECRET || 'this secret should only be used in testing'
};
const {
  withAuth
} = Object(auth_["createAuth"])({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'] // TODO: Add in inital roles here

  },
  passwordResetLink: {
    async sendToken(args) {
      // send the email
      await sendPasswordResetEmail(args.token, args.identity);
    }

  },
  sessionData: `id name email role { ${permissionsList.join(' ')} }`
});
/* harmony default export */ var keystone = (withAuth(Object(schema_["config"])({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true
    }
  },
  db: process.env.DATABASE_URL ? {
    provider: 'postgresql',
    url: process.env.DATABASE_URL
  } : {
    // provider: 'sqlite',
    // url: databaseURL,
    provider: 'postgresql',
    url: 'postgresql://postgres:mQHM64%Q@postgredb-1.cn4e9mtddv9n.eu-west-1.rds.amazonaws.com:5432/keystone-e2',

    async onConnect(context) {
      console.log('Connected to the database!');

      if (process.argv.includes('--seed-data')) {
        await insertSeedData(context);
      }
    }

  },
  lists: Object(schema_["createSchema"])({
    // Schema items go in here
    User: User,
    Roti: Roti,
    Vote: Vote,
    // Product,
    // ProductImage,
    // CartItem,
    // OrderItem,
    // Order,
    Role: Role
  }),
  // extendGraphqlSchema,
  // ui: {
  //   // Show the UI only for poeple who pass this test
  //   isAccessAllowed: ({ session }) =>
  //     // console.log(session);
  //     !!session?.data,
  // },
  session: Object(session_["statelessSessions"])(sessionConfig)
})));
// CONCATENATED MODULE: ./pages/api/__keystone_api_build.js

/* harmony default export */ var _keystone_api_build = __webpack_exports__["default"] = (function (req, res) {
  return res.status(500);
});

/***/ })

/******/ });