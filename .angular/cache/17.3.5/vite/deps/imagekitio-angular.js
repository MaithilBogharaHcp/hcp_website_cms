import {
  CommonModule,
  NgIf
} from "./chunk-PRXZD2TZ.js";
import {
  Component,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-L4BWLG6A.js";
import "./chunk-WSA2QMXP.js";
import "./chunk-J4B6MK7R.js";

// node_modules/imagekit-javascript/dist/imagekit.esm.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return {
        s: F,
        n: function() {
          if (i >= o.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function(e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function() {
      it = o[Symbol.iterator]();
    },
    n: function() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function(e) {
      didErr = true;
      err = e;
    },
    f: function() {
      try {
        if (!normalCompletion && it.return != null)
          it.return();
      } finally {
        if (didErr)
          throw err;
      }
    }
  };
}
var version = "3.0.2";
var errorMessages = {
  MANDATORY_INITIALIZATION_MISSING: {
    message: "Missing urlEndpoint during SDK initialization",
    help: ""
  },
  INVALID_TRANSFORMATION_POSITION: {
    message: "Invalid transformationPosition parameter",
    help: ""
  },
  PRIVATE_KEY_CLIENT_SIDE: {
    message: "privateKey should not be passed on the client side",
    help: ""
  },
  MISSING_UPLOAD_DATA: {
    message: "Missing data for upload",
    help: ""
  },
  MISSING_UPLOAD_FILE_PARAMETER: {
    message: "Missing file parameter for upload",
    help: ""
  },
  MISSING_UPLOAD_FILENAME_PARAMETER: {
    message: "Missing fileName parameter for upload",
    help: ""
  },
  MISSING_AUTHENTICATION_ENDPOINT: {
    message: "Missing authentication endpoint for upload",
    help: ""
  },
  MISSING_PUBLIC_KEY: {
    message: "Missing public key for upload",
    help: ""
  },
  AUTH_ENDPOINT_TIMEOUT: {
    message: "The authenticationEndpoint you provided timed out in 60 seconds",
    help: ""
  },
  AUTH_ENDPOINT_NETWORK_ERROR: {
    message: "Request to authenticationEndpoint failed due to network error",
    help: ""
  },
  AUTH_INVALID_RESPONSE: {
    message: "Invalid response from authenticationEndpoint. The SDK expects a JSON response with three fields i.e. signature, token and expire.",
    help: ""
  },
  UPLOAD_ENDPOINT_NETWORK_ERROR: {
    message: "Request to ImageKit upload endpoint failed due to network error",
    help: ""
  },
  INVALID_UPLOAD_OPTIONS: {
    message: "Invalid uploadOptions parameter",
    help: ""
  },
  MISSING_SIGNATURE: {
    message: "Missing signature for upload. The SDK expects token, signature and expire for authentication.",
    help: ""
  },
  MISSING_TOKEN: {
    message: "Missing token for upload. The SDK expects token, signature and expire for authentication.",
    help: ""
  },
  MISSING_EXPIRE: {
    message: "Missing expire for upload. The SDK expects token, signature and expire for authentication.",
    help: ""
  },
  INVALID_TRANSFORMATION: {
    message: "Invalid transformation parameter. Please include at least pre, post, or both.",
    help: ""
  },
  INVALID_PRE_TRANSFORMATION: {
    message: "Invalid pre transformation parameter.",
    help: ""
  },
  INVALID_POST_TRANSFORMATION: {
    message: "Invalid post transformation parameter.",
    help: ""
  }
};
function respond(isError, response, callback) {
  if (typeof callback == "function") {
    if (isError) {
      callback(response, null);
    } else {
      callback(null, response);
    }
  }
}
function getResponseHeaderMap(xhr) {
  var headers = {};
  var responseHeaders = xhr.getAllResponseHeaders();
  if (Object.keys(responseHeaders).length) {
    responseHeaders.trim().split(/[\r\n]+/).map(function(value) {
      return value.split(/: /);
    }).forEach(function(keyValue) {
      headers[keyValue[0].trim()] = keyValue[1].trim();
    });
  }
  return headers;
}
var addResponseHeadersAndBody = function addResponseHeadersAndBody2(body, xhr) {
  var response = _objectSpread2({}, body);
  var responseMetadata = {
    statusCode: xhr.status,
    headers: getResponseHeaderMap(xhr)
  };
  Object.defineProperty(response, "$ResponseMetadata", {
    value: responseMetadata,
    enumerable: false,
    writable: false
  });
  return response;
};
var request = function request2(uploadFileXHR, formData, callback) {
  uploadFile(uploadFileXHR, formData).then(function(result) {
    return respond(false, result, callback);
  }, function(ex) {
    return respond(true, ex, callback);
  });
};
var uploadFile = function uploadFile2(uploadFileXHR, formData) {
  return new Promise(function(resolve, reject) {
    uploadFileXHR.open("POST", "https://upload.imagekit.io/api/v1/files/upload");
    uploadFileXHR.onerror = function(e) {
      return reject(errorMessages.UPLOAD_ENDPOINT_NETWORK_ERROR);
    };
    uploadFileXHR.onload = function() {
      if (uploadFileXHR.status === 200) {
        try {
          var body = JSON.parse(uploadFileXHR.responseText);
          var uploadResponse = addResponseHeadersAndBody(body, uploadFileXHR);
          return resolve(uploadResponse);
        } catch (ex) {
          return reject(ex);
        }
      } else {
        try {
          var body = JSON.parse(uploadFileXHR.responseText);
          var uploadError = addResponseHeadersAndBody(body, uploadFileXHR);
          return reject(uploadError);
        } catch (ex) {
          return reject(ex);
        }
      }
    };
    uploadFileXHR.send(formData);
  });
};
var upload = function upload2(xhr, uploadOptions, options, callback) {
  if (!uploadOptions.file) {
    respond(true, errorMessages.MISSING_UPLOAD_FILE_PARAMETER, callback);
    return;
  }
  if (!uploadOptions.fileName) {
    respond(true, errorMessages.MISSING_UPLOAD_FILENAME_PARAMETER, callback);
    return;
  }
  if (!options.publicKey) {
    respond(true, errorMessages.MISSING_PUBLIC_KEY, callback);
    return;
  }
  if (!uploadOptions.token) {
    respond(true, errorMessages.MISSING_TOKEN, callback);
    return;
  }
  if (!uploadOptions.signature) {
    respond(true, errorMessages.MISSING_SIGNATURE, callback);
    return;
  }
  if (!uploadOptions.expire) {
    respond(true, errorMessages.MISSING_EXPIRE, callback);
    return;
  }
  if (uploadOptions.transformation) {
    if (!(Object.keys(uploadOptions.transformation).includes("pre") || Object.keys(uploadOptions.transformation).includes("post"))) {
      respond(true, errorMessages.INVALID_TRANSFORMATION, callback);
      return;
    }
    if (Object.keys(uploadOptions.transformation).includes("pre") && !uploadOptions.transformation.pre) {
      respond(true, errorMessages.INVALID_PRE_TRANSFORMATION, callback);
      return;
    }
    if (Object.keys(uploadOptions.transformation).includes("post")) {
      if (Array.isArray(uploadOptions.transformation.post)) {
        var _iterator = _createForOfIteratorHelper(uploadOptions.transformation.post), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var transformation = _step.value;
            if (transformation.type === "abs" && !(transformation.protocol || transformation.value)) {
              respond(true, errorMessages.INVALID_POST_TRANSFORMATION, callback);
              return;
            } else if (transformation.type === "transformation" && !transformation.value) {
              respond(true, errorMessages.INVALID_POST_TRANSFORMATION, callback);
              return;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        respond(true, errorMessages.INVALID_POST_TRANSFORMATION, callback);
        return;
      }
    }
  }
  var formData = new FormData();
  var key;
  for (key in uploadOptions) {
    if (key) {
      if (key === "file" && typeof uploadOptions.file != "string") {
        formData.append("file", uploadOptions.file, String(uploadOptions.fileName));
      } else if (key === "tags" && Array.isArray(uploadOptions.tags)) {
        formData.append("tags", uploadOptions.tags.join(","));
      } else if (key === "signature") {
        formData.append("signature", uploadOptions.signature);
      } else if (key === "expire") {
        formData.append("expire", String(uploadOptions.expire));
      } else if (key === "token") {
        formData.append("token", uploadOptions.token);
      } else if (key === "responseFields" && Array.isArray(uploadOptions.responseFields)) {
        formData.append("responseFields", uploadOptions.responseFields.join(","));
      } else if (key === "extensions" && Array.isArray(uploadOptions.extensions)) {
        formData.append("extensions", JSON.stringify(uploadOptions.extensions));
      } else if (key === "customMetadata" && _typeof(uploadOptions.customMetadata) === "object" && !Array.isArray(uploadOptions.customMetadata) && uploadOptions.customMetadata !== null) {
        formData.append("customMetadata", JSON.stringify(uploadOptions.customMetadata));
      } else if (key === "transformation" && _typeof(uploadOptions.transformation) === "object" && uploadOptions.transformation !== null) {
        formData.append(key, JSON.stringify(uploadOptions.transformation));
      } else if (key === "checks" && uploadOptions.checks) {
        formData.append("checks", uploadOptions.checks);
      } else if (uploadOptions[key] !== void 0) {
        formData.append(key, String(uploadOptions[key]));
      }
    }
  }
  formData.append("publicKey", options.publicKey);
  request(xhr, formData, callback);
};
var supportedTransforms = {
  width: "w",
  height: "h",
  aspectRatio: "ar",
  quality: "q",
  crop: "c",
  cropMode: "cm",
  focus: "fo",
  x: "x",
  y: "y",
  format: "f",
  radius: "r",
  background: "bg",
  border: "b",
  rotation: "rt",
  rotate: "rt",
  blur: "bl",
  named: "n",
  progressive: "pr",
  lossless: "lo",
  trim: "t",
  metadata: "md",
  colorProfile: "cp",
  defaultImage: "di",
  dpr: "dpr",
  effectSharpen: "e-sharpen",
  effectUSM: "e-usm",
  effectContrast: "e-contrast",
  effectGray: "e-grayscale",
  original: "orig",
  effectShadow: "e-shadow",
  effectGradient: "e-gradient",
  raw: "raw"
};
var DEFAULT_TRANSFORMATION_POSITION = "path";
var QUERY_TRANSFORMATION_POSITION = "query";
var VALID_TRANSFORMATION_POSITIONS = [DEFAULT_TRANSFORMATION_POSITION, QUERY_TRANSFORMATION_POSITION];
var CHAIN_TRANSFORM_DELIMITER = ":";
var TRANSFORM_DELIMITER = ",";
var TRANSFORM_KEY_VALUE_DELIMITER = "-";
var transformationUtils = {
  getDefault: function getDefault() {
    return DEFAULT_TRANSFORMATION_POSITION;
  },
  addAsQueryParameter: function addAsQueryParameter(options) {
    return options.transformationPosition === QUERY_TRANSFORMATION_POSITION;
  },
  validParameters: function validParameters(options) {
    if (typeof options.transformationPosition == "undefined")
      return false;
    return VALID_TRANSFORMATION_POSITIONS.indexOf(options.transformationPosition) != -1;
  },
  getTransformKey: function getTransformKey(transform) {
    if (!transform) {
      return "";
    }
    return supportedTransforms[transform] || supportedTransforms[transform.toLowerCase()] || "";
  },
  getChainTransformDelimiter: function getChainTransformDelimiter() {
    return CHAIN_TRANSFORM_DELIMITER;
  },
  getTransformDelimiter: function getTransformDelimiter() {
    return TRANSFORM_DELIMITER;
  },
  getTransformKeyValueDelimiter: function getTransformKeyValueDelimiter() {
    return TRANSFORM_KEY_VALUE_DELIMITER;
  }
};
var TRANSFORMATION_PARAMETER = "tr";
function removeTrailingSlash(str) {
  if (typeof str == "string" && str[str.length - 1] == "/") {
    str = str.substring(0, str.length - 1);
  }
  return str;
}
function removeLeadingSlash(str) {
  if (typeof str == "string" && str[0] == "/") {
    str = str.slice(1);
  }
  return str;
}
function pathJoin(parts, sep) {
  var separator = sep || "/";
  var replace = new RegExp(separator + "{1,}", "g");
  return parts.join(separator).replace(replace, separator);
}
var buildURL = function buildURL2(opts) {
  if (!opts.path && !opts.src) {
    return "";
  }
  var urlObj, isSrcParameterUsedForURL, urlEndpointPattern;
  try {
    if (opts.path) {
      urlEndpointPattern = new URL(opts.urlEndpoint).pathname;
      urlObj = new URL(pathJoin([opts.urlEndpoint.replace(urlEndpointPattern, ""), opts.path]));
    } else {
      urlObj = new URL(opts.src);
      isSrcParameterUsedForURL = true;
    }
  } catch (e) {
    console.error(e);
    return "";
  }
  for (var i in opts.queryParameters) {
    urlObj.searchParams.append(i, String(opts.queryParameters[i]));
  }
  var transformationString = constructTransformationString(opts.transformation);
  if (transformationString && transformationString.length) {
    if (transformationUtils.addAsQueryParameter(opts) || isSrcParameterUsedForURL) {
      urlObj.searchParams.append(TRANSFORMATION_PARAMETER, transformationString);
    } else {
      urlObj.pathname = pathJoin([TRANSFORMATION_PARAMETER + transformationUtils.getChainTransformDelimiter() + transformationString, urlObj.pathname]);
    }
  }
  if (urlEndpointPattern) {
    urlObj.pathname = pathJoin([urlEndpointPattern, urlObj.pathname]);
  } else {
    urlObj.pathname = pathJoin([urlObj.pathname]);
  }
  return urlObj.href;
};
function constructTransformationString(transformation) {
  if (!Array.isArray(transformation)) {
    return "";
  }
  var parsedTransforms = [];
  for (var i = 0, l = transformation.length; i < l; i++) {
    var parsedTransformStep = [];
    for (var key in transformation[i]) {
      if (transformation[i][key] === void 0 || transformation[i][key] === null)
        continue;
      var transformKey = transformationUtils.getTransformKey(key);
      if (!transformKey) {
        transformKey = key;
      }
      if (transformation[i][key] === "-") {
        parsedTransformStep.push(transformKey);
      } else if (key === "raw") {
        parsedTransformStep.push(transformation[i][key]);
      } else {
        var value = transformation[i][key];
        if (transformKey === "di") {
          value = removeTrailingSlash(removeLeadingSlash(value || ""));
          value = value.replace(/\//g, "@@");
        }
        parsedTransformStep.push([transformKey, value].join(transformationUtils.getTransformKeyValueDelimiter()));
      }
    }
    parsedTransforms.push(parsedTransformStep.join(transformationUtils.getTransformDelimiter()));
  }
  return parsedTransforms.join(transformationUtils.getChainTransformDelimiter());
}
var url = function url2(urlOpts, defaultOptions) {
  return buildURL(_objectSpread2(_objectSpread2({}, defaultOptions), urlOpts));
};
function mandatoryParametersAvailable(options) {
  return options.urlEndpoint;
}
var promisify = function promisify2(thisContext, fn) {
  return function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === fn.length && typeof args[args.length - 1] !== "undefined") {
      if (typeof args[args.length - 1] !== "function") {
        throw new Error("Callback must be a function.");
      }
      fn.call.apply(fn, [thisContext].concat(args));
    } else {
      return new Promise(function(resolve, reject) {
        var callback = function callback2(err) {
          if (err) {
            return reject(err);
          } else {
            for (var _len2 = arguments.length, results = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              results[_key2 - 1] = arguments[_key2];
            }
            resolve(results.length > 1 ? results : results[0]);
          }
        };
        args.pop();
        args.push(callback);
        fn.call.apply(fn, [thisContext].concat(args));
      });
    }
  };
};
var ImageKit = function() {
  function ImageKit2(opts) {
    _classCallCheck(this, ImageKit2);
    _defineProperty(this, "options", {
      sdkVersion: "javascript-".concat(version),
      publicKey: "",
      urlEndpoint: "",
      transformationPosition: transformationUtils.getDefault()
    });
    this.options = _objectSpread2(_objectSpread2({}, this.options), opts || {});
    if (!mandatoryParametersAvailable(this.options)) {
      throw errorMessages.MANDATORY_INITIALIZATION_MISSING;
    }
    if (!transformationUtils.validParameters(this.options)) {
      throw errorMessages.INVALID_TRANSFORMATION_POSITION;
    }
  }
  _createClass(ImageKit2, [{
    key: "url",
    value: function url$1(urlOptions) {
      return url(urlOptions, this.options);
    }
  }, {
    key: "upload",
    value: function upload$1(uploadOptions, callbackOrOptions, options) {
      var callback;
      if (typeof callbackOrOptions === "function") {
        callback = callbackOrOptions;
      } else {
        options = callbackOrOptions || {};
      }
      if (!uploadOptions || _typeof(uploadOptions) !== "object") {
        return respond(true, errorMessages.INVALID_UPLOAD_OPTIONS, callback);
      }
      var mergedOptions = _objectSpread2(_objectSpread2({}, this.options), options);
      var _ref = uploadOptions || {}, userProvidedXHR = _ref.xhr;
      delete uploadOptions.xhr;
      var xhr = userProvidedXHR || new XMLHttpRequest();
      return promisify(this, upload)(xhr, uploadOptions, mergedOptions, callback);
    }
  }]);
  return ImageKit2;
}();
var imagekit_esm_default = ImageKit;

// node_modules/imagekitio-angular/fesm2015/imagekitio-angular.js
function IkUploadComponent_input_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 2);
    ɵɵlistener("change", function IkUploadComponent_input_0_Template_input_change_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleFileInput($event));
    });
    ɵɵelementEnd();
  }
}
function IkUploadComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 3);
    ɵɵlistener("change", function IkUploadComponent_ng_template_1_Template_input_change_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleFileInput($event));
    });
    ɵɵelementEnd();
  }
}
var SDK_VERSION = "5.0.0";
var ImageKitConfiguration = class {
};
var ImagekitService = class {
  constructor(configuration) {
    this.configuration = configuration;
    configuration.sdkVersion = `angular-${SDK_VERSION}`, this._ikInstance = new imagekit_esm_default(this.configuration);
  }
  get ikInstance() {
    return this._ikInstance;
  }
  getUrl(config) {
    const url3 = this._ikInstance.url(config);
    return url3;
  }
};
ImagekitService.ɵfac = function ImagekitService_Factory(t) {
  return new (t || ImagekitService)(ɵɵinject(ImageKitConfiguration));
};
ImagekitService.ɵprov = ɵɵdefineInjectable({
  token: ImagekitService,
  factory: ImagekitService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImagekitService, [{
    type: Injectable
  }], function() {
    return [{
      type: ImageKitConfiguration
    }];
  }, null);
})();
var IkImageComponent = class {
  constructor(el, imagekit) {
    this.el = el;
    this.imagekit = imagekit;
    this.transformation = [];
    this.url = "";
    this.lqipUrl = "";
    this.onImageLoaded = (event) => {
      const {
        loading,
        lqipUrl,
        url: url3
      } = this;
      if (loading !== "lazy" && event.srcElement.src === lqipUrl) {
        this.loadImage(this, url3);
      }
    };
  }
  ngOnInit() {
    const options = this.src ? {
      src: this.src
    } : {
      path: this.path
    };
    options.urlEndpoint = this.urlEndpoint ? this.urlEndpoint : this.imagekit._ikInstance.options.urlEndpoint;
    options.transformation = this.transformation;
    options.transformationPosition = this.transformationPosition;
    options.queryParameters = this.queryParameters;
    options.lqip = this.lqip;
    this.setUrl(options);
  }
  ngOnChanges() {
    this.ngOnInit();
    this.ngAfterViewInit();
  }
  ngAfterViewInit() {
    if (this.loading == "lazy") {
      const that = this;
      if (this.lqipUrl) {
        this.loadImage(this, this.lqipUrl);
      }
      const imageObserver = new IntersectionObserver((entry, observer) => {
        that.handleIntersectionObserver(entry, observer, that.loadImage, that, that.url);
      });
      imageObserver.observe(this.el.nativeElement);
    } else {
      this.loadImage(this, this.lqipUrl ? this.lqipUrl : this.url);
    }
  }
  handleIntersectionObserver(entry, observer, loadImageFunc, context, url3) {
    if (entry[0] && entry[0].isIntersecting) {
      let image = entry[0].target;
      loadImageFunc(context, url3);
      observer.unobserve(image);
    }
  }
  setUrl(options) {
    const config = this.getConfigObject(options);
    this.url = this.imagekit.getUrl(config);
    if (options.lqip && options.lqip.active === true) {
      this.lqipUrl = this.constructLqipUrl(options, options.lqip);
    }
  }
  constructLqipUrl(options, lqip) {
    if (lqip && lqip.active) {
      var quality = Math.round(lqip.quality || lqip.threshold || 20);
      var blur = Math.round(lqip.blur || 6);
      var newTransformation = options.transformation ? [...options.transformation] : [];
      if (lqip.raw && typeof lqip.raw === "string" && lqip.raw.trim() != "") {
        newTransformation.push({
          raw: lqip.raw.trim()
        });
      } else {
        newTransformation.push({
          quality: String(quality),
          blur: String(blur)
        });
      }
      return this.imagekit.ikInstance.url(Object.assign(Object.assign({}, options), {
        transformation: newTransformation
      }));
    }
  }
  getConfigObject(options) {
    const config = {
      transformation: options.transformation
    };
    if (options.urlEndpoint) {
      config["urlEndpoint"] = options.urlEndpoint;
    } else {
      throw new Error("Missing urlEndpoint initialization!");
    }
    if (options.queryParameters) {
      config["queryParameters"] = options.queryParameters;
    }
    if (options.src) {
      config["src"] = options.src;
      config["transformationPosition"] = "query";
    } else if (options.path) {
      config["path"] = options.path;
      if (options.transformationPosition) {
        config["transformationPosition"] = options.transformationPosition;
      }
    } else {
      throw new Error("Missing src / path during initialization!");
    }
    return config;
  }
  loadImage(context, url3) {
    const nativeElement = context.el.nativeElement;
    const attributes = nativeElement.attributes;
    const attrsToSet = context.namedNodeMapToObject(attributes);
    attrsToSet["src"] = url3;
    const image = nativeElement.children[0];
    context.setElementAttributes(image, attrsToSet);
  }
  namedNodeMapToObject(source) {
    let target = {};
    Object.keys(source).forEach((index) => {
      const name = source[index].name;
      const value = source[index].value;
      target[name] = value;
    });
    return target;
  }
  setElementAttributes(element, attributesLiteral) {
    Object.keys(attributesLiteral).filter((attrName) => attrName !== "loading").forEach((attrName) => {
      element.setAttribute(attrName, attributesLiteral[attrName]);
    });
  }
};
IkImageComponent.ɵfac = function IkImageComponent_Factory(t) {
  return new (t || IkImageComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ImagekitService));
};
IkImageComponent.ɵcmp = ɵɵdefineComponent({
  type: IkImageComponent,
  selectors: [["ik-image"]],
  inputs: {
    src: "src",
    path: "path",
    urlEndpoint: "urlEndpoint",
    transformation: "transformation",
    transformationPosition: "transformationPosition",
    queryParameters: "queryParameters",
    lqip: "lqip",
    loading: "loading"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 0,
  consts: [["src", "", 3, "load"]],
  template: function IkImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "img", 0);
      ɵɵlistener("load", function IkImageComponent_Template_img_load_0_listener($event) {
        return ctx.onImageLoaded($event);
      });
      ɵɵelementEnd();
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IkImageComponent, [{
    type: Component,
    args: [{
      selector: "ik-image",
      template: `<img src='' (load)="onImageLoaded($event)">`
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ImagekitService
    }];
  }, {
    src: [{
      type: Input,
      args: ["src"]
    }],
    path: [{
      type: Input,
      args: ["path"]
    }],
    urlEndpoint: [{
      type: Input,
      args: ["urlEndpoint"]
    }],
    transformation: [{
      type: Input,
      args: ["transformation"]
    }],
    transformationPosition: [{
      type: Input,
      args: ["transformationPosition"]
    }],
    queryParameters: [{
      type: Input,
      args: ["queryParameters"]
    }],
    lqip: [{
      type: Input,
      args: ["lqip"]
    }],
    loading: [{
      type: Input,
      args: ["loading"]
    }]
  });
})();
var IkVideoComponent = class {
  constructor(el, imagekit) {
    this.el = el;
    this.imagekit = imagekit;
    this.transformation = [];
    this.url = "";
  }
  ngOnInit() {
    const options = this.src ? {
      src: this.src
    } : {
      path: this.path
    };
    options.transformation = this.transformation;
    options.transformationPosition = this.transformationPosition;
    options.urlEndpoint = this.urlEndpoint;
    options.queryParameters = this.queryParameters;
    this.setUrl(options);
  }
  ngAfterViewInit() {
    this.loadVideo(this.url);
  }
  loadVideo(url3) {
    const nativeElement = this.el.nativeElement;
    const attributes = nativeElement.attributes;
    const attrsToSet = this.namedNodeMapToObject(attributes);
    attrsToSet["src"] = url3;
    const video = nativeElement.children[0];
    this.setElementAttributes(video, attrsToSet);
  }
  namedNodeMapToObject(source) {
    let target = {};
    Object.keys(source).forEach((index) => {
      const name = source[index].name;
      const value = source[index].value;
      target[name] = value;
    });
    return target;
  }
  setUrl(options) {
    const config = this.getConfigObject(options);
    this.url = this.imagekit.getUrl(config);
  }
  getConfigObject(options) {
    const config = {
      transformation: options.transformation
    };
    if (options.urlEndpoint) {
      config["urlEndpoint"] = options.urlEndpoint;
    } else {
      throw new Error("Missing urlEndpoint initialization!");
    }
    if (options.queryParameters) {
      config["queryParameters"] = options.queryParameters;
    }
    if (options.src) {
      config["src"] = options.src;
      config["transformationPosition"] = "query";
    } else if (options.path) {
      config["path"] = options.path;
      if (options.transformationPosition) {
        config["transformationPosition"] = options.transformationPosition;
      }
    } else {
      throw new Error("Missing src / path during initialization!");
    }
    return config;
  }
  setElementAttributes(element, attributesLiteral) {
    Object.keys(attributesLiteral).forEach((attrName) => {
      element.setAttribute(attrName, attributesLiteral[attrName]);
    });
  }
};
IkVideoComponent.ɵfac = function IkVideoComponent_Factory(t) {
  return new (t || IkVideoComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ImagekitService));
};
IkVideoComponent.ɵcmp = ɵɵdefineComponent({
  type: IkVideoComponent,
  selectors: [["ik-video"]],
  inputs: {
    urlEndpoint: "urlEndpoint",
    path: "path",
    src: "src",
    transformation: "transformation",
    transformationPosition: "transformationPosition",
    queryParameters: "queryParameters"
  },
  decls: 2,
  vars: 1,
  consts: [["controls", ""], [3, "src"]],
  template: function IkVideoComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "video", 0);
      ɵɵelement(1, "source", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵpropertyInterpolate("src", ctx.src, ɵɵsanitizeUrl);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IkVideoComponent, [{
    type: Component,
    args: [{
      selector: "ik-video",
      template: `<video controls><source src={{src}}>`
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ImagekitService
    }];
  }, {
    urlEndpoint: [{
      type: Input,
      args: ["urlEndpoint"]
    }],
    path: [{
      type: Input,
      args: ["path"]
    }],
    src: [{
      type: Input,
      args: ["src"]
    }],
    transformation: [{
      type: Input,
      args: ["transformation"]
    }],
    transformationPosition: [{
      type: Input,
      args: ["transformationPosition"]
    }],
    queryParameters: [{
      type: Input,
      args: ["queryParameters"]
    }]
  });
})();
var IkUploadComponent = class {
  constructor(el, imagekit) {
    this.el = el;
    this.imagekit = imagekit;
    this.onError = new EventEmitter();
    this.onSuccess = new EventEmitter();
    this.fileToUpload = null;
    this.handleAuthResponse = ({
      signature,
      token,
      expire
    }, ik, params, options, progressCb) => {
      ik.upload(Object.assign(Object.assign({}, params), {
        signature,
        token,
        expire
      }), (err, result) => {
        this.handleUploadResponse(err, result, options, progressCb);
      });
    };
  }
  ngAfterViewInit() {
    this.buttonRef && this.buttonRef.addEventListener("click", () => {
      this.el.nativeElement.children[0].click();
    });
  }
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }
  handleFileInput(e) {
    const files = e.target.files;
    this.fileToUpload = files.item(0);
    const options = {
      file: this.fileToUpload,
      fileName: this.fileName || this.fileToUpload.name,
      useUniqueFileName: this.useUniqueFileName,
      tags: this.tags,
      folder: this.folder,
      customMetadata: this.customMetadata,
      isPrivateFile: this.isPrivateFile,
      overwriteFile: this.overwriteFile,
      overwriteAITags: this.overwriteAITags,
      overwriteTags: this.overwriteTags,
      overwriteCustomMetadata: this.overwriteCustomMetadata,
      customCoordinates: this.customCoordinates,
      responseFields: this.responseFields,
      extensions: this.extensions,
      webhookUrl: this.webhookUrl,
      onError: this.onError,
      onSuccess: this.onSuccess,
      transformation: this.transformation
    };
    if (!this.checkCustomFileValidation(options.file)) {
      return;
    }
    if (!this.checkAuthenticator(options)) {
      return;
    }
    this.startIkUpload(e, options);
  }
  checkCustomFileValidation(file) {
    if (this.validateFile && typeof this.validateFile === "function") {
      return this.validateFile(file);
    }
    return true;
  }
  checkAuthenticator(options) {
    if (!this.authenticator || typeof this.authenticator !== "function" || this.authenticator.length !== 0 || !(this.authenticator() instanceof Promise)) {
      return this.throwError("The authenticator function is not provided or is not a function.", options);
    }
    return true;
  }
  throwError(message, options) {
    if (options && options.onError instanceof EventEmitter) {
      options.onError.emit({
        message: message || "Something went wrong."
      });
    }
    return false;
  }
  startIkUpload(e, options) {
    if (this.onUploadStart && typeof this.onUploadStart === "function") {
      this.onUploadStart(e);
    }
    options.xhr = new XMLHttpRequest();
    this.xhr = options.xhr;
    const params = this.getUploadParams(options);
    const progressCb = this.createUploadProgressMonitor(options.xhr);
    const ik = this.getIkInstance();
    const authPromise = this.authenticator();
    authPromise.then((obj) => this.handleAuthResponse(obj, ik, params, options, progressCb)).catch((data) => {
      var error;
      if (data instanceof Array) {
        error = data[0];
      } else {
        error = data;
      }
      this.throwError(String(error), options);
    });
  }
  getIkInstance() {
    if (this.publicKey === void 0 || this.urlEndpoint === void 0) {
      return this.imagekit.ikInstance;
    }
    return new ImagekitService({
      urlEndpoint: this.urlEndpoint,
      publicKey: this.publicKey
    })._ikInstance;
  }
  handleUploadResponse(err, result, options, progressCb) {
    if (err) {
      this.throwError(err, options);
    } else {
      if (options.onSuccess instanceof EventEmitter) {
        options.onSuccess.emit(result);
      }
      if (options.xhr)
        options.xhr.upload.removeEventListener("progress", progressCb);
    }
  }
  createUploadProgressMonitor(xhr) {
    const progressCb = (e) => {
      if (this.onUploadProgress && typeof this.onUploadProgress === "function") {
        this.onUploadProgress(e);
      }
    };
    if (xhr)
      xhr.upload.addEventListener("progress", progressCb);
    return progressCb;
  }
  getUploadParams(options) {
    const params = {
      file: options.file,
      fileName: options.fileName
    };
    if (options.useUniqueFileName !== void 0) {
      Object.assign(params, {
        useUniqueFileName: options.useUniqueFileName
      });
    }
    if (options.folder !== void 0) {
      Object.assign(params, {
        folder: options.folder
      });
    }
    if (options.customMetadata !== void 0) {
      Object.assign(params, {
        customMetadata: options.customMetadata
      });
    }
    if (options.webhookUrl !== void 0) {
      Object.assign(params, {
        webhookUrl: options.webhookUrl
      });
    }
    if (options.isPrivateFile !== void 0) {
      Object.assign(params, {
        isPrivateFile: options.isPrivateFile
      });
    }
    if (options.overwriteFile !== void 0) {
      Object.assign(params, {
        overwriteFile: options.overwriteFile
      });
    }
    if (options.overwriteAITags !== void 0) {
      Object.assign(params, {
        overwriteAITags: options.overwriteAITags
      });
    }
    if (options.overwriteTags !== void 0) {
      Object.assign(params, {
        overwriteTags: options.overwriteTags
      });
    }
    if (options.overwriteCustomMetadata !== void 0) {
      Object.assign(params, {
        overwriteCustomMetadata: options.overwriteCustomMetadata
      });
    }
    if (options.tags !== void 0) {
      Object.assign(params, {
        tags: options.tags
      });
    }
    if (options.customCoordinates !== void 0) {
      Object.assign(params, {
        customCoordinates: options.customCoordinates
      });
    }
    if (options.responseFields !== void 0) {
      Object.assign(params, {
        responseFields: options.responseFields
      });
    }
    if (options.extensions !== void 0) {
      Object.assign(params, {
        extensions: options.extensions
      });
    }
    if (options.xhr !== void 0) {
      Object.assign(params, {
        xhr: options.xhr
      });
    }
    if (options.transformation !== void 0) {
      Object.assign(params, {
        transformation: options.transformation
      });
    }
    return params;
  }
};
IkUploadComponent.ɵfac = function IkUploadComponent_Factory(t) {
  return new (t || IkUploadComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ImagekitService));
};
IkUploadComponent.ɵcmp = ɵɵdefineComponent({
  type: IkUploadComponent,
  selectors: [["ik-upload"]],
  inputs: {
    fileName: "fileName",
    useUniqueFileName: "useUniqueFileName",
    tags: "tags",
    folder: "folder",
    publicKey: "publicKey",
    urlEndpoint: "urlEndpoint",
    authenticator: "authenticator",
    isPrivateFile: "isPrivateFile",
    overwriteFile: "overwriteFile",
    overwriteAITags: "overwriteAITags",
    overwriteTags: "overwriteTags",
    overwriteCustomMetadata: "overwriteCustomMetadata",
    customCoordinates: "customCoordinates",
    webhookUrl: "webhookUrl",
    responseFields: "responseFields",
    extensions: "extensions",
    customMetadata: "customMetadata",
    buttonRef: "buttonRef",
    validateFile: "validateFile",
    onUploadStart: "onUploadStart",
    onUploadProgress: "onUploadProgress",
    transformation: "transformation"
  },
  outputs: {
    onError: "onError",
    onSuccess: "onSuccess"
  },
  features: [ɵɵProvidersFeature([ImagekitService])],
  decls: 3,
  vars: 2,
  consts: [["elseBlock", ""], ["type", "file", "style", "display:none", 3, "change", 4, "ngIf", "ngIfElse"], ["type", "file", 2, "display", "none", 3, "change"], ["type", "file", 3, "change"]],
  template: function IkUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, IkUploadComponent_input_0_Template, 1, 0, "input", 1)(1, IkUploadComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const elseBlock_r4 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.buttonRef)("ngIfElse", elseBlock_r4);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IkUploadComponent, [{
    type: Component,
    args: [{
      selector: "ik-upload",
      template: `
  <input *ngIf="buttonRef; else elseBlock" type="file" (change)="handleFileInput($event)" style="display:none"/>
  <ng-template #elseBlock>
    <input type="file" (change)="handleFileInput($event)" />
  </ng-template>
  `,
      providers: [ImagekitService]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ImagekitService
    }];
  }, {
    fileName: [{
      type: Input,
      args: ["fileName"]
    }],
    useUniqueFileName: [{
      type: Input,
      args: ["useUniqueFileName"]
    }],
    tags: [{
      type: Input,
      args: ["tags"]
    }],
    folder: [{
      type: Input,
      args: ["folder"]
    }],
    publicKey: [{
      type: Input,
      args: ["publicKey"]
    }],
    urlEndpoint: [{
      type: Input,
      args: ["urlEndpoint"]
    }],
    authenticator: [{
      type: Input,
      args: ["authenticator"]
    }],
    isPrivateFile: [{
      type: Input,
      args: ["isPrivateFile"]
    }],
    overwriteFile: [{
      type: Input,
      args: ["overwriteFile"]
    }],
    overwriteAITags: [{
      type: Input,
      args: ["overwriteAITags"]
    }],
    overwriteTags: [{
      type: Input,
      args: ["overwriteTags"]
    }],
    overwriteCustomMetadata: [{
      type: Input,
      args: ["overwriteCustomMetadata"]
    }],
    customCoordinates: [{
      type: Input,
      args: ["customCoordinates"]
    }],
    webhookUrl: [{
      type: Input,
      args: ["webhookUrl"]
    }],
    responseFields: [{
      type: Input,
      args: ["responseFields"]
    }],
    extensions: [{
      type: Input,
      args: ["extensions"]
    }],
    customMetadata: [{
      type: Input,
      args: ["customMetadata"]
    }],
    buttonRef: [{
      type: Input,
      args: ["buttonRef"]
    }],
    onError: [{
      type: Output
    }],
    onSuccess: [{
      type: Output
    }],
    validateFile: [{
      type: Input,
      args: ["validateFile"]
    }],
    onUploadStart: [{
      type: Input,
      args: ["onUploadStart"]
    }],
    onUploadProgress: [{
      type: Input,
      args: ["onUploadProgress"]
    }],
    transformation: [{
      type: Input,
      args: ["transformation"]
    }]
  });
})();
var ImagekitioAngularModule = class _ImagekitioAngularModule {
  static forRoot(config) {
    return {
      ngModule: _ImagekitioAngularModule,
      providers: [{
        provide: ImageKitConfiguration,
        useValue: config
      }]
    };
  }
};
ImagekitioAngularModule.ɵfac = function ImagekitioAngularModule_Factory(t) {
  return new (t || ImagekitioAngularModule)();
};
ImagekitioAngularModule.ɵmod = ɵɵdefineNgModule({
  type: ImagekitioAngularModule,
  declarations: [IkImageComponent, IkVideoComponent, IkUploadComponent],
  imports: [CommonModule],
  exports: [IkImageComponent, IkVideoComponent, IkUploadComponent]
});
ImagekitioAngularModule.ɵinj = ɵɵdefineInjector({
  providers: [ImagekitService],
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImagekitioAngularModule, [{
    type: NgModule,
    args: [{
      declarations: [IkImageComponent, IkVideoComponent, IkUploadComponent],
      imports: [CommonModule],
      exports: [IkImageComponent, IkVideoComponent, IkUploadComponent],
      providers: [ImagekitService]
    }]
  }], null, null);
})();
export {
  IkImageComponent,
  IkUploadComponent,
  IkVideoComponent,
  ImageKitConfiguration,
  ImagekitService,
  ImagekitioAngularModule
};
//# sourceMappingURL=imagekitio-angular.js.map
