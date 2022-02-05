// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"adtRi":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ee62429a5d9dacde";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1Z4Rq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./Model.js");
var _sliderJs = require("./slider.js");
var _sliderJsDefault = parcelHelpers.interopDefault(_sliderJs);
var _hyperLinkJs = require("./hyperLink.js");
const navLogo = document.querySelector(".nav-logo");
// MENU
const topOffer = document.querySelector(".top-offer");
const grocery = document.querySelector(".grocery");
const mobiles = document.querySelector(".mobiles");
const fashions = document.querySelector(".fashions");
const Electronics = document.querySelector(".electronics");
const appliances = document.querySelector(".appliances");
const travel = document.querySelector(".travel");
const toys = document.querySelector(".toys");
const menuImage = document.querySelectorAll(".menu--img");
const menuContainer = document.querySelector(".menu-container");
const sectionParent = document.querySelector(".section-fashion");
const navCart = document.querySelector(".nav-cart");
const slideshowContainer = document.querySelector(".slideshow-container");
_sliderJsDefault.default();
const selectionMyCart = function() {
    sectionParent.innerHTML = "";
    sectionParent.insertAdjacentHTML("afterbegin", _hyperLinkJs.myCartParentHtml.call(this, _modelJs.bookmarks));
};
const clothsChoose = function(data) {
    menuImage.forEach((img)=>img.style.display = "none"
    );
    let cloth;
    if (data.classList.contains("fashion-women")) cloth = _modelJs.womenModel.map((html)=>_hyperLinkJs.sectionGridChild.call(this, html)
    ).join("");
    if (data.classList.contains("fashion-men") || data.classList.contains("fashions")) cloth = _modelJs.menModel.map((html)=>_hyperLinkJs.sectionGridChild.call(this, html)
    ).join("");
    sectionParent.innerHTML = "";
    sectionParent.insertAdjacentHTML("afterbegin", _hyperLinkJs.fashionsHtml.call(this, cloth));
};
const electronicsChoose = function(data) {
    menuImage.forEach((img)=>img.style.display = "none"
    );
    const electronic = _modelJs.electronicsModel.map((html)=>_hyperLinkJs.sectionGridChild.call(this, html)
    ).join("");
    sectionParent.innerHTML = "";
    sectionParent.insertAdjacentHTML("afterbegin", _hyperLinkJs.electronicsHtml.call(this, electronic));
};
fashions.addEventListener("click", function(e) {
    e.preventDefault();
    slideshowContainer.style.display = "none";
    clothsChoose(e.target.closest(".fashions"));
});
Electronics.addEventListener("click", function(e) {
    e.preventDefault();
    slideshowContainer.style.display = "none";
    console.log("working");
    electronicsChoose(e.target.closest(".electronics"));
});
sectionParent.addEventListener("click", function(e) {
    e.preventDefault();
    if (e.target.closest(".fashion-women")) clothsChoose(e.target.closest(".fashion-women"));
    if (e.target.closest(".fashion-men")) clothsChoose(e.target.closest(".fashion-men"));
    if (e.target.closest(".product-remove")) {
        const data = e.target.closest(".product-remove").dataset.remove;
        _modelJs.bookmarks.map((mark, i)=>mark.id === data && _modelJs.bookmarks.splice(i, 1)
        );
        selectionMyCart();
    }
    const dataCloths = e.target.closest(".cloth-icon");
    if (dataCloths?.dataset.category === "men") {
        if (dataCloths.dataset.add) {
            const model1 = _modelJs.menModel.filter((model)=>dataCloths.dataset.add === model.id
            );
            _modelJs.bookmarks.push(...model1);
        } else {
            const model4 = _modelJs.menModel.filter((model)=>dataCloths.dataset.remove === model.id
            );
            _modelJs.bookmarks.map((mark, i)=>mark.id === dataCloths && _modelJs.bookmarks.splice(i, 1)
            );
        }
    }
    if (dataCloths?.dataset.category === "women") {
        if (dataCloths.dataset.add) {
            const model7 = _modelJs.womenModel.filter((model)=>dataCloths.dataset.add === model.id
            );
            _modelJs.bookmarks.push(...model7);
        } else {
            const model10 = _modelJs.womenModel.filter((model)=>dataCloths.dataset.remove === model.id
            );
            _modelJs.bookmarks.map((mark, i)=>mark.id === dataCloths && _modelJs.bookmarks.splice(i, 1)
            );
        }
    }
    if (dataCloths?.dataset.category === "electronics") {
        if (dataCloths.dataset.add) {
            const model13 = _modelJs.electronicsModel.filter((model)=>dataCloths.dataset.add === model.id
            );
            _modelJs.bookmarks.push(...model13);
        } else {
            const model16 = _modelJs.electronicsModel.filter((model)=>dataCloths.dataset.remove === model.id
            );
            _modelJs.bookmarks.map((mark, i)=>mark.id === dataCloths && _modelJs.bookmarks.splice(i, 1)
            );
        }
    }
});
navLogo.addEventListener("click", function() {
    menuContainer.style.display = "flex";
    menuImage.forEach((img)=>img.style.display = "block"
    );
    sectionParent.innerHTML = "";
    slideshowContainer.style.display = "block";
    console.log(_modelJs.bookmarks);
});
navCart.addEventListener("click", function(e) {
    e.preventDefault();
    menuContainer.style.display = "none";
    slideshowContainer.style.display = "none";
    menuImage.forEach((img)=>img.style.display = "none"
    );
    selectionMyCart();
});
fashions.addEventListener("click", function(e) {
    e.preventDefault();
    slideshowContainer.style.display = "none";
    clothsChoose(e.target.closest(".fashions"));
});
Electronics.addEventListener("click", function(e) {
    e.preventDefault();
    slideshowContainer.style.display = "none";
    console.log("working");
    electronicsChoose(e.target.closest(".electronics"));
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Model.js":"g1LGT","./slider.js":"23FV9","./hyperLink.js":"gbIox"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"g1LGT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "menModel", ()=>menModel
);
parcelHelpers.export(exports, "womenModel", ()=>womenModel
);
parcelHelpers.export(exports, "electronicsModel", ()=>electronicsModel
);
parcelHelpers.export(exports, "bookmarks", ()=>bookmarks
);
const menModel = [
    {
        id: "men1",
        category: "men",
        brand: "UZee",
        imgURL: "https://rukminim1.flixcart.com/image/580/696/k2krekw0/t-shirt/h/f/8/m-triple-navy-mhrn-panel-uzee-original-imafhwjzayxpdbmb.jpeg?q=50",
        description: "Color Block Men Round Neck White, Maroon T-Shirt",
        price: 600
    },
    {
        id: "men2",
        category: "men",
        brand: "Aelomart",
        imgURL: "https://rukminim1.flixcart.com/image/580/696/kfoapow0-0/t-shirt/z/h/l/l-am-1021m-aelomart-original-imafw2jwmdmz3ayz.jpeg?q=50",
        description: "Color Block Men Round Neck White, Maroon T-Shirt",
        price: 620
    },
    {
        id: "men3",
        category: "men",
        brand: "Eyebogler",
        imgURL: "https://rukminim1.flixcart.com/image/580/696/kkfrjww0/t-shirt/h/1/t/l-t312-cgblwh-new-eyebogler-original-imafzs5hrjgzsfpr.jpeg?q=50",
        description: "Color Block Men Round Neck White, Maroon T-Shirt",
        price: 900
    },
    {
        id: "men4",
        category: "men",
        brand: "Seven Rocks",
        imgURL: "https://rukminim1.flixcart.com/image/580/696/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=50",
        description: "Color Block Men Round Neck White, Maroon T-Shirt",
        price: 499
    },
    {
        id: "men5",
        category: "men",
        brand: "HELMONT",
        imgURL: "https://rukminim1.flixcart.com/image/310/372/kf75fgw0-0/t-shirt/f/6/j/xxl-t325-pwgh-seven-rocks-original-imafvpbgf6nchmfj.jpeg?q=50",
        description: "Color Block Men Round Neck White, Maroon T-Shirt",
        price: 799
    },
    {
        id: "men6",
        category: "men",
        brand: "TRIPR",
        imgURL: "https://rukminim1.flixcart.com/image/580/696/kvpklu80/t-shirt/b/j/e/m-12011186-fila-original-imag8juxwh6axysf.jpeg?q=50",
        description: "Color Block Men Round Neck White, Maroon T-Shirt",
        price: 499
    },
    {
        id: "men7",
        category: "men",
        brand: "FILA",
        imgURL: "https://rukminim1.flixcart.com/image/580/696/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=50",
        description: "Color Block Men Round Neck White, Maroon T-Shirt",
        price: 299
    },
    {
        id: "men8",
        category: "men",
        brand: "Seven Rocks",
        imgURL: "https://rukminim1.flixcart.com/image/310/372/khdqnbk0/t-shirt/r/u/0/m-fc4173-fastcolors-original-imafxettxhthw8ye.jpeg?q=50",
        description: "Color Block Men Round Neck White, Maroon T-Shirt",
        price: 799
    },
    {
        id: "men9",
        category: "men",
        brand: "UZee",
        imgURL: "https://rukminim1.flixcart.com/image/580/696/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=50",
        description: "Color Block Men Round Neck White, Maroon T-Shirt",
        price: 399
    },
    {
        id: "men10",
        category: "men",
        brand: "FLEXIMAA",
        imgURL: "https://rukminim1.flixcart.com/image/310/372/kl2mljk0/t-shirt/a/3/k/4xl-tblhdfulmask-lion-tripr-original-imagy9tcx7q25wym.jpeg?q=50",
        description: "Color Block Men Round Neck White, Maroon T-Shirt",
        price: 299
    }, 
];
const womenModel = [
    {
        id: "women1",
        category: "women",
        brand: "FLEXIMAA",
        imgURL: "https://rukminim1.flixcart.com/image/339/407/khxqt8w0/top/9/t/h/m-wltpsogreymilange-m-fleximaa-original-imafxuehhc2vx9yz.jpeg?q=50",
        description: "Casual Regular Sleeves Printed Women Grey Top",
        price: 810
    },
    {
        id: "women2",
        category: "women",
        brand: "LEVI'S",
        imgURL: "https://rukminim1.flixcart.com/image/339/407/ktd9mkw0/t-shirt/o/w/q/s-23771-0246-levi-s-original-imag6qbxknvs7bqh.jpeg?q=50",
        description: "Printed Women Round Neck White T-Shirt",
        price: 600
    },
    {
        id: "women3",
        category: "women",
        brand: "GIRLS SHOPPIE",
        imgURL: "https://rukminim1.flixcart.com/image/339/407/ksc46fk0/t-shirt/t/y/p/xs-wmb-girls-shoppie-original-imag5xe3sdhgg8sg.jpeg?q=50",
        description: "Color Block Men Round Neck Black, Maroon T-Shirt",
        price: 560
    },
    {
        id: "women4",
        category: "women",
        brand: "FLEXIMAA",
        imgURL: "https://rukminim1.flixcart.com/image/339/407/k23m4cw0/top/r/k/q/s-tttp003130-tokyo-talkies-original-imafhgvqkgap2dtb.jpeg?q=50",
        description: "Casual Regular Sleeves Printed Women Grey Top",
        price: 800
    },
    {
        id: "women5",
        category: "women",
        brand: "Tokyo Talkies",
        imgURL: "https://rukminim1.flixcart.com/image/339/407/khxqt8w0/top/9/t/h/m-wltpsogreymilange-m-fleximaa-original-imafxuehhc2vx9yz.jpeg?q=50",
        description: "Casual Regular Sleeves Solid Women Maroon Top",
        price: 800
    },
    {
        id: "women6",
        category: "women",
        brand: "GIRLS SHOPPIE",
        imgURL: "https://rukminim1.flixcart.com/image/339/407/kltryq80/t-shirt/u/6/p/xl-wkb-girls-shoppie-original-imagyvfxdaharypp.jpeg?q=50",
        description: "Striped Women Round Neck Blue, White T-Shirt",
        price: 678
    },
    {
        id: "women7",
        category: "women",
        brand: "Selvia",
        imgURL: "https://rukminim1.flixcart.com/image/339/407/km0x5zk0/top/j/z/o/m-178tkr2901-selvia-original-imagfyqfytkkfpkn.jpeg?q=50",
        description: "Casual Regular Sleeves Solid Women Maroon Top",
        price: 345
    },
    {
        id: "women8",
        category: "women",
        brand: "Tokyo Talkies ",
        imgURL: "https://rukminim1.flixcart.com/image/880/1056/k0flmkw0/top/7/u/n/l-tttp003124-tokyo-talkies-original-imafk8ynguyznyvv.jpeg?q=50",
        description: "Casual Regular Sleeves Printed Women Yellow Top",
        price: 380
    },
    {
        id: "women9",
        category: "women",
        brand: "Dressberry ",
        imgURL: "https://rukminim1.flixcart.com/image/880/1056/k12go7k0/shirt/y/f/5/s-8883945-dressberry-original-imafkphcdsmwjsxa.jpeg?q=50",
        description: "Women Regular Fit Printed Spread Collar Casual Shirt",
        price: 640
    },
    {
        id: "women10",
        category: "women",
        brand: "indibelle ",
        imgURL: "https://rukminim1.flixcart.com/image/880/1056/jpodaq80/shrug/n/e/q/3xl-ibcp255ml-indibelle-original-imafbufrktnbhwg8.jpeg?q=50",
        description: "Women Straight Half Sleeve Multicolor Shrug",
        price: 500
    }, 
];
const electronicsModel = [
    {
        id: "electronics1",
        category: "electronics",
        brand: "realme ",
        imgURL: "https://rukminim1.flixcart.com/image/416/416/kvzkosw0/headphone/i/i/o/-original-imag8rdvk9nebjkg.jpeg?q=70",
        description: "DIZO by realme TechLife GoPods D with Enviornment Noise Cancellation (ENC) Bluetooth Headset ",
        price: 1299
    },
    {
        id: "electronics2",
        category: "electronics",
        brand: "realme ",
        imgURL: "https://rukminim1.flixcart.com/image/416/416/kvzkosw0/headphone/j/c/n/-original-imag8rdvyeryzgrc.jpeg?q=70",
        description: "DIZO by realme TechLife GoPods D with Enviornment Noise Cancellation (ENC) Bluetooth Headset",
        price: 500
    },
    {
        id: "electronics3",
        category: "electronics",
        brand: "boAt ",
        imgURL: "https://rukminim1.flixcart.com/image/416/416/ksdjma80/headphone/o/f/c/airdopes-131-airdopes-138-boat-original-imag5yz96jehyqrg.jpeg?q=70",
        description: "boAt Airdopes 131 Bluetooth Headset",
        price: 1199
    },
    {
        id: "electronics4",
        category: "electronics",
        brand: "OnePlus ",
        imgURL: "https://rukminim1.flixcart.com/image/416/416/kg8avm80-0/headphone/2/p/r/e304a-oneplus-original-imafwgkvchwhf63s.jpeg?q=70",
        description: "OnePlus Bullets Wireless Z Bass Edition Bluetooth Headset  (Reverb Red, In the Ear)",
        price: 1999
    },
    {
        id: "electronics5",
        category: "electronics",
        brand: "JBL",
        imgURL: "https://rukminim1.flixcart.com/image/416/416/juwzf680/headphone-refurbished/7/h/k/z-c100si-jbl-original-imaffxja5vmgwudz.jpeg?q=70",
        description: "JBL C150SI Wired Headset  (Black, In the Ear)",
        price: 699
    },
    {
        id: "electronics6",
        category: "electronics",
        brand: "realme ",
        imgURL: "https://rukminim1.flixcart.com/image/416/416/krayqa80/headphone/v/k/q/rma2009-realme-original-imag54f5hsazzk99.jpeg?q=70",
        description: "realme Buds Wireless 2 with Dart Charge and Active Noise Cancellation (ANC) Bluetooth Headset  (Grey, In the Ear)",
        price: 2299
    },
    {
        id: "electronics7",
        category: "electronics",
        brand: "Truke ",
        imgURL: "https://rukminim1.flixcart.com/image/416/416/kmwcuq80/headphone/h/d/k/e21-truke-original-imagfp8fbsz6qbgx.jpeg?q=70",
        description: "Truke Buds Q1 with Environmental Noise Cancellation(ENC) Bluetooth Headset  (Black, True Wireless)",
        price: 500
    },
    {
        id: "electronics8",
        category: "electronics",
        brand: "boAt ",
        imgURL: "https://rukminim1.flixcart.com/image/416/416/ksdjma80/headphone/u/4/o/airdopes-131-airdopes-138-boat-original-imag5yzacvxdzu6p.jpeg?q=70",
        description: "boAt Airdopes 131 Bluetooth Headset  (Cherry Blossom, True Wireless)",
        price: 1199
    },
    {
        id: "electronics9",
        category: "electronics",
        brand: "realme ",
        imgURL: "https://rukminim1.flixcart.com/image/416/416/krntoy80/headphone/5/2/o/ydjc02wm-redmi-original-imag5eg9pbxp8rvf.jpeg?q=70",
        description: "Redmi by Mi Hi-Resolution Audio Wired Headset  (Black, In the Ear)",
        price: 599
    },
    {
        id: "electronics10",
        category: "electronics",
        brand: "boAt ",
        imgURL: "https://rukminim1.flixcart.com/image/416/416/kingqkw0-0/speaker/mobile-tablet-speaker/s/8/i/stone-350-boat-original-imafyebfuaumdezs.jpeg?q=70",
        description: "boAt Stone 350 10 W Bluetooth Speaker  (Black, Mono Channel)",
        price: 1499
    }, 
];
const bookmarks = [];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"23FV9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const slider = function() {
    var slideIndex = 1;
    showSlides(slideIndex);
    // Next/previous controls
    document.querySelector(".prev-slider").addEventListener("click", function() {
        showSlides(slideIndex += -1);
    });
    // Thumbnail image controls
    document.querySelector(".next-slider").addEventListener("click", function() {
        showSlides(slideIndex += 1);
    });
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        for(i = 0; i < slides.length; i++)slides[i].style.display = "none";
        slides[slideIndex - 1].style.display = "block";
    }
};
exports.default = slider;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gbIox":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "myCartHtml", ()=>myCartHtml
);
parcelHelpers.export(exports, "sectionGridChild", ()=>sectionGridChild
);
parcelHelpers.export(exports, "fashionsHtml", ()=>fashionsHtml
);
parcelHelpers.export(exports, "electronicsHtml", ()=>electronicsHtml
);
parcelHelpers.export(exports, "emptyMarkup", ()=>emptyMarkup
);
parcelHelpers.export(exports, "myCartParentHtml", ()=>myCartParentHtml
);
const myCartHtml = function(html) {
    let price;
    const num = html.price.toString();
    num.length > 3 ? price = num.slice(-4, -3) + "," + num.slice(-3) : price = num;
    return `
      <div class="products-info">
        <div class="product-img">
          <img
            src="${html.imgURL}"
            alt=""
          />
        </div>
        <div class="product-info">
          <div class="product-brand">${html.brand}</div>
          <div class="product-description">${html.description.slice(0, 63) + "..."}</div>
          <div class="product-seller">Seller:SandSMarketing</div>
          <div class="product-price">₹${price}</div>
          <div class="product-decision">
            <a href="#">SAVE FOR LATER</a>
            <a href="#" data-remove="${html.id}" class="product-remove">REMOVE</a>
          </div>
        </div>
      </div>
    `;
};
const sectionGridChild = function(html) {
    let price;
    const num = html.price.toString();
    num.length > 3 ? price = num.slice(-4, -3) + "," + num.slice(-3) : price = num;
    return `
              <div class="cloth-frame">
                  <div class="cloth-img">
                    <img src="${html.imgURL}" alt="cloths" />
                  </div>
                  <div class="cloth-text">
                      <div class="cloth-band-selector">
                          <p class="cloth-brand">${html.brand}</p>
                          <div class="cloth-cart">
                              <svg xmlns="http://www.w3.org/2000/svg" data-category = ${html.category} data-add = "${html.id}" class="cloth-icon cloth-add" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" data-category = ${html.category} data-remove = "${html.id}" class="cloth-icon cloth-remove" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                              </svg>
                          </div>
                      </div>
                      <div class="cloth-assured-description">
                      <p class="cloth-description">${html.description.slice(0, 15) + "..."}</p>
                      <div class="assured">
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" class="assured--img" />
                      </div>
                    </div>
                      <p class="cloth-price">₹${price}</p>
                  </div>
              </div>
      `;
};
const fashionsHtml = function(cloth) {
    return `
      <div class="fashion">
        <div class="fashion-selector">
                <a href="#" class="fashion-men">MEN</a>
                <a href="#" class="fashion-women">WOMEN</a>
              </div>
        <div class="fashion-cloths">
        ${cloth}
        </div>
      </div>
  `;
};
const electronicsHtml = function(cloth) {
    return `
      <div class="fashion">
        <div class="fashion-selector">
               
              </div>
        <div class="fashion-cloths">
        ${cloth}
        </div>
      </div>
  `;
};
const emptyMarkup = function() {
    return `
<div class ="flex-center">
<h1 class="emptyCart">Your Cart is Empty!</h1>
</div>
`;
};
const myCartParentHtml = function(bookmarks) {
    const checkCartLen = Boolean(bookmarks.length);
    const totalAmt = bookmarks.reduce((acc, mark)=>acc + mark.price
    , 0);
    let price;
    const num = totalAmt.toString();
    num.length > 3 ? price = num.slice(-4, -3) + "," + num.slice(-3) : price = num;
    return `
<div class="myCart">
<div class="myCart-products">
<div class="myCart-name">My Cart</div>
${checkCartLen ? bookmarks.map((html)=>myCartHtml.call(this, html)
    ).join("") : emptyMarkup()}
      </div>
      <div class="myCart-details">
        <div class="products-detail-name">Price Details</div>
        <div class="products-details">
          <div class="products-detail-total-price">
            <div class="detail-price">Price</div>
            <div class="detail-total-price">₹${totalAmt}</div>
          </div>
          <div class="products-detail-discount-price">
            <div class="detail-discount">Discount</div>
            <div class="detail-discount-fee green-text">₹${totalAmt > 0 ? 100 : 0}</div>
          </div>
          <div class="products-detail-delivery-fee">
            <div class="detail-delivery">delivery charges</div>
            <div class="detail-delivery-fee green-text">FREE</div>
          </div>
          <div class="detail-sum-amt">
            <div class="detail-sum">TOTAL AMOUNT</div>
            <div class="detail-amt">₹${totalAmt > 0 ? price : 0}</div>
          </div>
        </div>
      </div>
    </div>
`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["adtRi","1Z4Rq"], "1Z4Rq", "parcelRequire1ffa")

//# sourceMappingURL=index.5d9dacde.js.map
