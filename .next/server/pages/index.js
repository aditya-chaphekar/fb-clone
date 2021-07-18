(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 255:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(426);

__webpack_unused_export__ = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(169));

var _extends2 = _interopRequireDefault(__webpack_require__(566));

var _react = _interopRequireDefault(__webpack_require__(297));

var _head = _interopRequireDefault(__webpack_require__(273));

var _toBase = __webpack_require__(519);

var _imageConfig = __webpack_require__(444);

var _useIntersection = __webpack_require__(749);

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ 391:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ 749:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(297);

var _requestIdleCallback = __webpack_require__(391);

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ 708:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(104);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "@heroicons/react/outline"
var outline_namespaceObject = require("@heroicons/react/outline");;
;// CONCATENATED MODULE: external "@heroicons/react/solid"
var solid_namespaceObject = require("@heroicons/react/solid");;
;// CONCATENATED MODULE: external "firebase"
var external_firebase_namespaceObject = require("firebase");;
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_namespaceObject);
;// CONCATENATED MODULE: external "firebase/storage"
var storage_namespaceObject = require("firebase/storage");;
;// CONCATENATED MODULE: ./firebase.js
// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler


const firebaseConfig = {
  apiKey: "AIzaSyBhY6yQmIXFUFPtCsv1flzMcNiWEss3uYc",
  authDomain: "fb-clone-f914a.firebaseapp.com",
  projectId: "fb-clone-f914a",
  storageBucket: "fb-clone-f914a.appspot.com",
  messagingSenderId: "934386197099",
  appId: "1:934386197099:web:2db4ee6b511f66c6be072e"
};
const app = !(external_firebase_default()).apps.length ? external_firebase_default().initializeApp(firebaseConfig) : external_firebase_default().app();
const db = app.firestore();
const auth = app.auth();
const storage = external_firebase_default().storage();

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/InputBox.js










function InputBox() {
  const [session] = (0,client_.useSession)();
  const inputRef = (0,external_react_.useRef)(null);
  const {
    0: imageToPost,
    1: setImageToPost
  } = (0,external_react_.useState)(null);
  const filepickerRef = (0,external_react_.useRef)(null);

  const sendPost = e => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    db.collection("posts").add({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: external_firebase_default().firestore.FieldValue.serverTimestamp()
    }).then(doc => {
      if (imageToPost) {
        const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, "data_url");
        removeImage();
        uploadTask.on("state_changed", null, error => {
          // ERROR function
          console.log(error);
        }, () => {
          // COMPLETE function
          storage.ref("posts").child(doc.id).getDownloadURL().then(url => {
            db.collection("posts").doc(doc.id).set({
              postImage: url
            }, {
              merge: true
            });
          });
        });
      }
    });
    inputRef.current.value = "";
  };

  const addImageToPost = e => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = readerEvent => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex space-x-4 p-4 items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        className: "rounded-full",
        src: session.user.image,
        width: 40,
        height: 40,
        layout: "fixed"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        className: "flex flex-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none",
          type: "text",
          placeholder: `What's on your mind, ${session.user.name}?`,
          ref: inputRef
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          hidden: true,
          onClick: sendPost,
          children: "Submit"
        })]
      }), imageToPost && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        onClick: removeImage,
        className: "flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "h-10 object-contain ",
          src: imageToPost,
          alt: ""
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs text-red-500 text-center",
          children: "Remove"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-evenly p-3 border-t",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inputIcon",
        children: [/*#__PURE__*/jsx_runtime_.jsx(solid_namespaceObject.VideoCameraIcon, {
          className: "h-7 text-red-500"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs sm:text-sm xl:text-base",
          children: "Live Video"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        onClick: () => filepickerRef.current.click(),
        className: "inputIcon",
        children: [/*#__PURE__*/jsx_runtime_.jsx(solid_namespaceObject.CameraIcon, {
          className: "h-7 text-green-400"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs sm:text-sm xl:text-base",
          children: "Photo/Video"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          onChange: addImageToPost,
          ref: filepickerRef,
          type: "file",
          hidden: true
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inputIcon",
        children: [/*#__PURE__*/jsx_runtime_.jsx(outline_namespaceObject.EmojiHappyIcon, {
          className: "h-7 text-yellow-300"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs sm:text-sm xl:text-base",
          children: "Feeling/Activity"
        })]
      })]
    })]
  });
}

/* harmony default export */ var components_InputBox = (InputBox);
;// CONCATENATED MODULE: ./components/StoryCard.js




function StoryCard({
  name,
  src,
  profile
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      className: "absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10",
      src: profile,
      width: 40,
      height: 40,
      layout: "fixed",
      objectFit: "cover"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      className: "object-cover filter brightness-75 rounded-full lg:rounded-3xl",
      src: src,
      layout: "fill"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate",
      children: name
    })]
  });
}

/* harmony default export */ var components_StoryCard = (StoryCard);
;// CONCATENATED MODULE: ./components/Stories.js



const stories = [{
  name: "Elon Musk",
  src: "https://links.papareact.com/4zn",
  profile: "https://links.papareact.com/kxk"
}, {
  name: "Jeff Bezoz",
  src: "https://links.papareact.com/k2j",
  profile: "https://links.papareact.com/f0p"
}, {
  name: "Mark Zuckerberg",
  src: "https://links.papareact.com/xql",
  profile: "https://links.papareact.com/snf"
}, {
  name: "Bill Gates",
  src: "https://links.papareact.com/4u4",
  profile: "https://links.papareact.com/zvy"
}];

function Stories() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex justify-center space-x-3 mx-auto",
    children: stories.map(story => /*#__PURE__*/jsx_runtime_.jsx(components_StoryCard, {
      name: story.name,
      src: story.src,
      profile: story.profile
    }))
  });
}

/* harmony default export */ var components_Stories = (Stories);
;// CONCATENATED MODULE: external "react-firebase-hooks/firestore"
var firestore_namespaceObject = require("react-firebase-hooks/firestore");;
;// CONCATENATED MODULE: ./components/Post.js





function Post({
  name,
  message,
  email,
  postImage,
  image,
  timestamp
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "p-5 bg-white mt-5 rounded-t-2xl shadow-sm",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center space-x-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "rounded-full",
          src: image,
          width: 40,
          height: 40
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-medium",
            children: name
          }), timestamp ? /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-xs text-gray-400",
            children: new Date(timestamp === null || timestamp === void 0 ? void 0 : timestamp.toDate()).toLocaleString()
          }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-xs text-gray-400",
            children: "Loading"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "pt-4",
        children: message
      })]
    }), postImage && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative h-56 md:h-96 bg-white",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        loader: ({
          src
        }) => src,
        src: postImage,
        objectFit: "cover",
        layout: "fill"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inputIcon p-3 rounded-none rounded-bl-2xl",
        children: [/*#__PURE__*/jsx_runtime_.jsx(outline_namespaceObject.ThumbUpIcon, {
          className: "h-4"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs sm:text-base",
          children: "Like"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inputIcon p-3 rounded-none",
        children: [/*#__PURE__*/jsx_runtime_.jsx(outline_namespaceObject.ChatAltIcon, {
          className: "h-4"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs sm:text-base",
          children: "Comment"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inputIcon p-3 rounded-none rounded-br-2xl",
        children: [/*#__PURE__*/jsx_runtime_.jsx(outline_namespaceObject.ShareIcon, {
          className: "h-4"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs sm:text-base",
          children: "Share"
        })]
      })]
    })]
  });
}

/* harmony default export */ var components_Post = (Post);
;// CONCATENATED MODULE: ./components/Posts.js





function Posts({
  posts
}) {
  const [realtimePosts, loading, error] = (0,firestore_namespaceObject.useCollection)(db.collection("posts").orderBy("timestamp", "desc"));
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: realtimePosts ? realtimePosts === null || realtimePosts === void 0 ? void 0 : realtimePosts.docs.map(post => /*#__PURE__*/jsx_runtime_.jsx(components_Post, {
      name: post.data().name,
      message: post.data().message,
      email: post.data().email,
      timestamp: post.data().timestamp,
      image: post.data().image,
      postImage: post.data().postImage
    }, post.id)) : posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(components_Post, {
      name: post.name,
      message: post.message,
      email: post.email,
      timestamp: post.timestamp,
      image: post.image,
      postImage: post.postImage
    }, post.id))
  });
}

/* harmony default export */ var components_Posts = (Posts);
;// CONCATENATED MODULE: ./components/Feed.js







function Feed({
  posts
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mx-auto max-w-md md:max-w-lg lg:max-w-2xl",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Stories, {}), /*#__PURE__*/jsx_runtime_.jsx(components_InputBox, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Posts, {
        posts: posts
      })]
    })
  });
}

/* harmony default export */ var components_Feed = (Feed);
;// CONCATENATED MODULE: ./components/HeaderIcon.js


function HeaderIcon({
  active,
  Icon
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex items-center md:px-10 sm:h-14 cursor-pointer md:hover:bg-gray-100 rounded-xl group active:border-b-2 active:border-blue-500",
    children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
      className: `${active ? "text-blue-500" : "text-gray-500"}  text-center h-5 sm:h-7 mx-auto my-auto group-hover:text-blue-500`
    })
  });
}

/* harmony default export */ var components_HeaderIcon = (HeaderIcon);
;// CONCATENATED MODULE: ./components/Header.js








function Header() {
  const [session] = (0,client_.useSession)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "https://links.papareact.com/5me",
        width: "40",
        height: "40",
        layout: "fixed"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "hidden md:inline-flex ml-2 items-center rounded-full bg-gray-100 p-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx(outline_namespaceObject.SearchIcon, {
          className: "h-6 text-gray-600"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "hidden lg:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink",
          placeholder: "Search Facebook"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-center flex-grow",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex space-x-6 md:space-x-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_HeaderIcon, {
          active: true,
          Icon: solid_namespaceObject.HomeIcon
        }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderIcon, {
          Icon: outline_namespaceObject.FlagIcon
        }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderIcon, {
          Icon: outline_namespaceObject.PlayIcon
        }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderIcon, {
          Icon: outline_namespaceObject.ShoppingCartIcon
        }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderIcon, {
          Icon: solid_namespaceObject.UserGroupIcon
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center sm:space-x-2 justify-end",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        onClick: () => (0,client_.signOut)(),
        className: "rounded-full cursor-pointer",
        src: session.user.image,
        width: "40",
        height: "40",
        layout: "fixed"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3",
        children: session.user.name
      }), /*#__PURE__*/jsx_runtime_.jsx(solid_namespaceObject.ViewGridIcon, {
        className: "icon"
      }), /*#__PURE__*/jsx_runtime_.jsx(solid_namespaceObject.ChatIcon, {
        className: "icon"
      }), /*#__PURE__*/jsx_runtime_.jsx(solid_namespaceObject.BellIcon, {
        className: "icon"
      }), /*#__PURE__*/jsx_runtime_.jsx(solid_namespaceObject.ChevronDownIcon, {
        className: "icon"
      })]
    })]
  });
}

/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: ./components/Login.js





function Login() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "grid place-items-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: "https://links.papareact.com/t4i",
      height: 400,
      width: 400,
      objectFit: "contain"
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "p-5 bg-blue-500 rounded-full text-white text-center w-1/6 cursor-pointer",
      onClick: client_.signIn,
      children: "Login with Facebook"
    })]
  });
}

/* harmony default export */ var components_Login = (Login);
;// CONCATENATED MODULE: ./components/SidebarRow.js





function SidebarRow({
  src,
  Icon,
  title
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer",
    children: [src && /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      className: "rounded-full",
      src: src,
      width: 30,
      height: 30,
      layout: "fixed"
    }), Icon && /*#__PURE__*/jsx_runtime_.jsx(Icon, {
      className: "h-8 w-8 text-blue-500"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "hidden sm:inline-flex font-medium",
      children: title
    })]
  });
}

/* harmony default export */ var components_SidebarRow = (SidebarRow);
;// CONCATENATED MODULE: ./components/Sidebar.js








function Sidebar() {
  const [session, loading] = (0,client_.useSession)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "p-2 mt-5 max-w-[600px] xl:min-w-[300px]",
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      src: session.user.image,
      title: session.user.name
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      Icon: solid_namespaceObject.UsersIcon,
      title: "Friends"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      Icon: outline_namespaceObject.UserGroupIcon,
      title: "Groups"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      Icon: outline_namespaceObject.ShoppingBagIcon,
      title: "Marketplace"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      Icon: solid_namespaceObject.DesktopComputerIcon,
      title: "Watch"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      Icon: solid_namespaceObject.CalendarIcon,
      title: "Events"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      Icon: solid_namespaceObject.ClockIcon,
      title: "Memories"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      Icon: outline_namespaceObject.ChevronDownIcon,
      title: "See More"
    })]
  });
}

/* harmony default export */ var components_Sidebar = (Sidebar);
;// CONCATENATED MODULE: ./components/Contact.js




function Contact({
  src,
  name
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      className: "rounded-full",
      objectFit: "cover",
      src: src,
      width: 50,
      height: 50,
      layout: "fixed"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: name
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"
    })]
  });
}

/* harmony default export */ var components_Contact = (Contact);
;// CONCATENATED MODULE: ./components/Widgets.js







function Widgets() {
  const contacts = [{
    src: "https://links.papareact.com/f0p",
    name: "Jeff Bezoz"
  }, {
    src: "https://links.papareact.com/kxk",
    name: "Elon Musk"
  }, {
    src: "https://links.papareact.com/zvy",
    name: "Bill Gates"
  }, {
    src: "https://links.papareact.com/snf",
    name: "Mark Zuckerberg"
  }, {
    src: "https://links.papareact.com/d0c",
    name: "Harry Potter"
  }, {
    src: "https://links.papareact.com/6gg",
    name: "The Queen"
  }, {
    src: "https://links.papareact.com/r57",
    name: "James Bond"
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "hidden lg:flex flex-col w-60 p-2 mt-5",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-between items-center text-gray-500 mb-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-xl",
        children: "Contacts"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex space-x-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx(solid_namespaceObject.VideoCameraIcon, {
          className: "h-6"
        }), /*#__PURE__*/jsx_runtime_.jsx(outline_namespaceObject.SearchIcon, {
          className: "h-6"
        }), /*#__PURE__*/jsx_runtime_.jsx(solid_namespaceObject.DotsHorizontalIcon, {
          className: "h-6"
        })]
      })]
    }), contacts.map(contact => /*#__PURE__*/jsx_runtime_.jsx(components_Contact, {
      src: contact.src,
      name: contact.name
    }, contact.src))]
  });
}

/* harmony default export */ var components_Widgets = (Widgets);
;// CONCATENATED MODULE: ./pages/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function Home({
  session,
  posts
}) {
  if (!session) return /*#__PURE__*/jsx_runtime_.jsx(components_Login, {});
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "h-screen bg-gray-100 overflow-hidden",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Facebook"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "flex",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Sidebar, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Feed, {
        posts: posts
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Widgets, {})]
    })]
  });
}
async function getServerSideProps(context) {
  // Get User
  const session = await (0,client_.getSession)(context);
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
  const docs = posts.docs.map(post => _objectSpread(_objectSpread({
    id: post.id
  }, post.data()), {}, {
    timestamp: null
  }));
  return {
    props: {
      session,
      posts: docs
    }
  };
}

/***/ }),

/***/ 675:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(255)


/***/ }),

/***/ 566:
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ 426:
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ 169:
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ 104:
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(708));
module.exports = __webpack_exports__;

})();