(function () {
    'use strict';

    /**
     * Copyright (C) 2023 salesforce.com, inc.
     */
    /**
     * Copyright (C) 2023 salesforce.com, inc.
     */
    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function invariant(value, msg) {
      if (!value) {
        throw new Error(`Invariant Violation: ${msg}`);
      }
    }
    function isTrue$1(value, msg) {
      if (!value) {
        throw new Error(`Assert Violation: ${msg}`);
      }
    }
    function isFalse$1(value, msg) {
      if (value) {
        throw new Error(`Assert Violation: ${msg}`);
      }
    }
    function fail(msg) {
      throw new Error(msg);
    }
    var assert = /*#__PURE__*/Object.freeze({
      __proto__: null,
      fail: fail,
      invariant: invariant,
      isFalse: isFalse$1,
      isTrue: isTrue$1
    });

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const {
      assign,
      create,
      defineProperties,
      defineProperty,
      entries,
      freeze,
      getOwnPropertyDescriptor: getOwnPropertyDescriptor$1,
      getOwnPropertyDescriptors,
      getOwnPropertyNames: getOwnPropertyNames$1,
      getPrototypeOf: getPrototypeOf$1,
      hasOwnProperty: hasOwnProperty$1,
      isFrozen,
      keys,
      seal,
      setPrototypeOf
    } = Object;
    const {
      isArray: isArray$1
    } = Array;
    const {
      concat: ArrayConcat$1,
      copyWithin: ArrayCopyWithin,
      every: ArrayEvery,
      fill: ArrayFill,
      filter: ArrayFilter,
      find: ArrayFind,
      findIndex: ArrayFindIndex,
      includes: ArrayIncludes,
      indexOf: ArrayIndexOf,
      join: ArrayJoin,
      map: ArrayMap,
      pop: ArrayPop,
      push: ArrayPush$1,
      reduce: ArrayReduce,
      reverse: ArrayReverse,
      shift: ArrayShift,
      slice: ArraySlice,
      some: ArraySome,
      sort: ArraySort,
      splice: ArraySplice,
      unshift: ArrayUnshift,
      forEach
    } = Array.prototype;
    const {
      fromCharCode: StringFromCharCode
    } = String;
    const {
      charCodeAt: StringCharCodeAt,
      replace: StringReplace,
      split: StringSplit,
      slice: StringSlice,
      toLowerCase: StringToLowerCase
    } = String.prototype;
    function isUndefined$1(obj) {
      return obj === undefined;
    }
    function isNull(obj) {
      return obj === null;
    }
    function isTrue(obj) {
      return obj === true;
    }
    function isFalse(obj) {
      return obj === false;
    }
    function isFunction$1(obj) {
      return typeof obj === 'function';
    }
    function isObject(obj) {
      return typeof obj === 'object';
    }
    function isString(obj) {
      return typeof obj === 'string';
    }
    function isNumber(obj) {
      return typeof obj === 'number';
    }
    function noop() {
      /* Do nothing */
    }
    const OtS$1 = {}.toString;
    function toString$1(obj) {
      if (obj && obj.toString) {
        // Arrays might hold objects with "null" prototype So using
        // Array.prototype.toString directly will cause an error Iterate through
        // all the items and handle individually.
        if (isArray$1(obj)) {
          return ArrayJoin.call(ArrayMap.call(obj, toString$1), ',');
        }
        return obj.toString();
      } else if (typeof obj === 'object') {
        return OtS$1.call(obj);
      } else {
        return obj + '';
      }
    }
    function getPropertyDescriptor(o, p) {
      do {
        const d = getOwnPropertyDescriptor$1(o, p);
        if (!isUndefined$1(d)) {
          return d;
        }
        o = getPrototypeOf$1(o);
      } while (o !== null);
    }

    /*
     * Copyright (c) 2023, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    // These must be updated when the enum is updated.
    // It's a bit annoying to do have to do this manually, but this makes the file tree-shakeable,
    // passing the `verify-treeshakeable.js` test.
    const LOWEST_API_VERSION = 58 /* APIVersion.V58_244_SUMMER_23 */;
    function isAPIFeatureEnabled(apiVersionFeature, apiVersion) {
      switch (apiVersionFeature) {
        case 0 /* APIFeature.LOWERCASE_SCOPE_TOKENS */:
        case 1 /* APIFeature.TREAT_ALL_PARSE5_ERRORS_AS_ERRORS */:
          return apiVersion >= 59 /* APIVersion.V59_246_WINTER_24 */;
        case 2 /* APIFeature.USE_FRAGMENTS_FOR_LIGHT_DOM_SLOTS */:
        case 3 /* APIFeature.DISABLE_OBJECT_REST_SPREAD_TRANSFORMATION */:
        case 4 /* APIFeature.SKIP_UNNECESSARY_REGISTER_DECORATORS */:
        case 5 /* APIFeature.USE_COMMENTS_FOR_FRAGMENT_BOOKENDS */:
          return apiVersion >= 60 /* APIVersion.V60_248_SPRING_24 */;
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    /**
     * According to the following list, there are 48 aria attributes of which two (ariaDropEffect and
     * ariaGrabbed) are deprecated:
     * https://www.w3.org/TR/wai-aria-1.1/#x6-6-definitions-of-states-and-properties-all-aria-attributes
     *
     * The above list of 46 aria attributes is consistent with the following resources:
     * https://github.com/w3c/aria/pull/708/files#diff-eacf331f0ffc35d4b482f1d15a887d3bR11060
     * https://wicg.github.io/aom/spec/aria-reflection.html
     *
     * NOTE: If you update this list, please update test files that implicitly reference this list!
     * Searching the codebase for `aria-flowto` and `ariaFlowTo` should be good enough to find all usages.
     */
    const AriaPropertyNames = ['ariaActiveDescendant', 'ariaAtomic', 'ariaAutoComplete', 'ariaBusy', 'ariaChecked', 'ariaColCount', 'ariaColIndex', 'ariaColIndexText', 'ariaColSpan', 'ariaControls', 'ariaCurrent', 'ariaDescribedBy', 'ariaDescription', 'ariaDetails', 'ariaDisabled', 'ariaErrorMessage', 'ariaExpanded', 'ariaFlowTo', 'ariaHasPopup', 'ariaHidden', 'ariaInvalid', 'ariaKeyShortcuts', 'ariaLabel', 'ariaLabelledBy', 'ariaLevel', 'ariaLive', 'ariaModal', 'ariaMultiLine', 'ariaMultiSelectable', 'ariaOrientation', 'ariaOwns', 'ariaPlaceholder', 'ariaPosInSet', 'ariaPressed', 'ariaReadOnly', 'ariaRelevant', 'ariaRequired', 'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowIndexText', 'ariaRowSpan', 'ariaSelected', 'ariaSetSize', 'ariaSort', 'ariaValueMax', 'ariaValueMin', 'ariaValueNow', 'ariaValueText', 'ariaBrailleLabel', 'ariaBrailleRoleDescription', 'role'];
    const {
      AriaAttrNameToPropNameMap,
      AriaPropNameToAttrNameMap
    } = /*@__PURE__*/(() => {
      const AriaAttrNameToPropNameMap = create(null);
      const AriaPropNameToAttrNameMap = create(null);
      // Synthetic creation of all AOM property descriptors for Custom Elements
      forEach.call(AriaPropertyNames, propName => {
        const attrName = StringToLowerCase.call(StringReplace.call(propName, /^aria/, () => 'aria-'));
        AriaAttrNameToPropNameMap[attrName] = propName;
        AriaPropNameToAttrNameMap[propName] = attrName;
      });
      return {
        AriaAttrNameToPropNameMap,
        AriaPropNameToAttrNameMap
      };
    })();
    // These attributes take either an ID or a list of IDs as values.
    // This includes aria-* attributes as well as the special non-ARIA "for" attribute
    const ID_REFERENCING_ATTRIBUTES_SET = /*@__PURE__*/new Set(['aria-activedescendant', 'aria-controls', 'aria-describedby', 'aria-details', 'aria-errormessage', 'aria-flowto', 'aria-labelledby', 'aria-owns', 'for']);

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    // See browser support for globalThis:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility
    /* istanbul ignore next */
    // @ts-ignore
    const _globalThis = typeof globalThis === 'object' ? globalThis : window;

    /*
     * Copyright (c) 2023, Salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const KEY__SHADOW_RESOLVER = '$shadowResolver$';
    const KEY__SHADOW_STATIC = '$shadowStaticNode$';
    const KEY__SHADOW_TOKEN = '$shadowToken$';
    const KEY__SYNTHETIC_MODE = '$$lwc-synthetic-mode';
    const KEY__SCOPED_CSS = '$scoped$';
    const KEY__NATIVE_GET_ELEMENT_BY_ID = '$nativeGetElementById$';
    const KEY__NATIVE_QUERY_SELECTOR_ALL = '$nativeQuerySelectorAll$';
    const XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';
    const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    const XLINK_NAMESPACE = 'http://www.w3.org/1999/xlink';

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const CAMEL_REGEX = /-([a-z])/g;
    // These are HTML standard prop/attribute IDL mappings, but are not predictable based on camel/kebab-case conversion
    const SPECIAL_PROPERTY_ATTRIBUTE_MAPPING = /*@__PURE__@*/new Map([['accessKey', 'accesskey'], ['readOnly', 'readonly'], ['tabIndex', 'tabindex'], ['bgColor', 'bgcolor'], ['colSpan', 'colspan'], ['rowSpan', 'rowspan'], ['contentEditable', 'contenteditable'], ['crossOrigin', 'crossorigin'], ['dateTime', 'datetime'], ['formAction', 'formaction'], ['isMap', 'ismap'], ['maxLength', 'maxlength'], ['minLength', 'minlength'], ['noValidate', 'novalidate'], ['useMap', 'usemap'], ['htmlFor', 'for']]);
    /**
     * Map associating previously transformed HTML property into HTML attribute.
     */
    const CACHED_PROPERTY_ATTRIBUTE_MAPPING = /*@__PURE__@*/new Map();
    function htmlPropertyToAttribute(propName) {
      const ariaAttributeName = AriaPropNameToAttrNameMap[propName];
      if (!isUndefined$1(ariaAttributeName)) {
        return ariaAttributeName;
      }
      const specialAttributeName = SPECIAL_PROPERTY_ATTRIBUTE_MAPPING.get(propName);
      if (!isUndefined$1(specialAttributeName)) {
        return specialAttributeName;
      }
      const cachedAttributeName = CACHED_PROPERTY_ATTRIBUTE_MAPPING.get(propName);
      if (!isUndefined$1(cachedAttributeName)) {
        return cachedAttributeName;
      }
      let attributeName = '';
      for (let i = 0, len = propName.length; i < len; i++) {
        const code = StringCharCodeAt.call(propName, i);
        if (code >= 65 &&
        // "A"
        code <= 90 // "Z"
        ) {
          attributeName += '-' + StringFromCharCode(code + 32);
        } else {
          attributeName += StringFromCharCode(code);
        }
      }
      CACHED_PROPERTY_ATTRIBUTE_MAPPING.set(propName, attributeName);
      return attributeName;
    }
    /**
     * Map associating previously transformed kabab-case attributes into camel-case props.
     */
    const CACHED_KEBAB_CAMEL_MAPPING = /*@__PURE__@*/new Map();
    function kebabCaseToCamelCase(attrName) {
      let result = CACHED_KEBAB_CAMEL_MAPPING.get(attrName);
      if (isUndefined$1(result)) {
        result = StringReplace.call(attrName, CAMEL_REGEX, g => g[1].toUpperCase());
        CACHED_KEBAB_CAMEL_MAPPING.set(attrName, result);
      }
      return result;
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    // Increment whenever the LWC template compiler changes
    const LWC_VERSION = "5.1.0";
    const LWC_VERSION_COMMENT_REGEX = /\/\*LWC compiler v([\d.]+)\*\/\s*}/;
    // eslint-disable-next-line no-restricted-properties
    if (!_globalThis.lwcRuntimeFlags) {
      Object.defineProperty(_globalThis, 'lwcRuntimeFlags', {
        value: create(null)
      });
    }
    /**
     * Report to the current dispatcher, if there is one.
     * @param reportingEventId
     * @param payload - data to report
     */
    function report(reportingEventId, payload) {
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function getComponentTag(vm) {
      return `<${StringToLowerCase.call(vm.tagName)}>`;
    }
    // TODO [#1695]: Unify getComponentStack and getErrorComponentStack
    function getComponentStack(vm) {
      const stack = [];
      let prefix = '';
      while (!isNull(vm.owner)) {
        ArrayPush$1.call(stack, prefix + getComponentTag(vm));
        vm = vm.owner;
        prefix += '\t';
      }
      return ArrayJoin.call(stack, '\n');
    }
    function getErrorComponentStack(vm) {
      const wcStack = [];
      let currentVm = vm;
      while (!isNull(currentVm)) {
        ArrayPush$1.call(wcStack, getComponentTag(currentVm));
        currentVm = currentVm.owner;
      }
      return wcStack.reverse().join('\n\t');
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function addErrorComponentStack(vm, error) {
      if (!isFrozen(error) && isUndefined$1(error.wcStack)) {
        const wcStack = getErrorComponentStack(vm);
        defineProperty(error, 'wcStack', {
          get() {
            return wcStack;
          }
        });
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const alreadyLoggedMessages = new Set();
    function log(method, message, vm, once) {
      let msg = `[LWC ${method}]: ${message}`;
      if (!isUndefined$1(vm)) {
        msg = `${msg}\n${getComponentStack(vm)}`;
      }
      if (once) {
        if (alreadyLoggedMessages.has(msg)) {
          return;
        }
        alreadyLoggedMessages.add(msg);
      }
      try {
        throw new Error(msg);
      } catch (e) {
        /* eslint-disable-next-line no-console */
        console[method](e);
      }
    }
    function logError(message, vm) {
      log('error', message, vm, false);
    }
    function logWarn(message, vm) {
      log('warn', message, vm, false);
    }
    function logWarnOnce(message, vm) {
      log('warn', message, vm, true);
    }

    /*
     * Copyright (c) 2019, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const TargetToReactiveRecordMap = new WeakMap();
    function getReactiveRecord(target) {
      let reactiveRecord = TargetToReactiveRecordMap.get(target);
      if (isUndefined$1(reactiveRecord)) {
        const newRecord = create(null);
        reactiveRecord = newRecord;
        TargetToReactiveRecordMap.set(target, newRecord);
      }
      return reactiveRecord;
    }
    let currentReactiveObserver = null;
    function valueMutated(target, key) {
      const reactiveRecord = TargetToReactiveRecordMap.get(target);
      if (!isUndefined$1(reactiveRecord)) {
        const reactiveObservers = reactiveRecord[key];
        if (!isUndefined$1(reactiveObservers)) {
          for (let i = 0, len = reactiveObservers.length; i < len; i += 1) {
            const ro = reactiveObservers[i];
            ro.notify();
          }
        }
      }
    }
    function valueObserved(target, key) {
      // We should determine if an active Observing Record is present to track mutations.
      if (currentReactiveObserver === null) {
        return;
      }
      const ro = currentReactiveObserver;
      const reactiveRecord = getReactiveRecord(target);
      let reactiveObservers = reactiveRecord[key];
      if (isUndefined$1(reactiveObservers)) {
        reactiveObservers = [];
        reactiveRecord[key] = reactiveObservers;
      } else if (reactiveObservers[0] === ro) {
        return; // perf optimization considering that most subscriptions will come from the same record
      }

      if (ArrayIndexOf.call(reactiveObservers, ro) === -1) {
        ro.link(reactiveObservers);
      }
    }
    class ReactiveObserver {
      constructor(callback) {
        this.listeners = [];
        this.callback = callback;
      }
      observe(job) {
        const inceptionReactiveRecord = currentReactiveObserver;
        currentReactiveObserver = this;
        let error;
        try {
          job();
        } catch (e) {
          error = Object(e);
        } finally {
          currentReactiveObserver = inceptionReactiveRecord;
          if (error !== undefined) {
            throw error; // eslint-disable-line no-unsafe-finally
          }
        }
      }
      /**
       * This method is responsible for disconnecting the Reactive Observer
       * from any Reactive Record that has a reference to it, to prevent future
       * notifications about previously recorded access.
       */
      reset() {
        const {
          listeners
        } = this;
        const len = listeners.length;
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            const set = listeners[i];
            if (set.length === 1) {
              // Perf optimization for the common case - the length is usually 1, so avoid the indexOf+splice.
              // If the length is 1, we can also be sure that `this` is the first item in the array.
              set.length = 0;
            } else {
              // Slow case
              const pos = ArrayIndexOf.call(set, this);
              ArraySplice.call(set, pos, 1);
            }
          }
          listeners.length = 0;
        }
      }
      // friend methods
      notify() {
        this.callback.call(undefined, this);
      }
      link(reactiveObservers) {
        ArrayPush$1.call(reactiveObservers, this);
        // we keep track of observing records where the observing record was added to so we can do some clean up later on
        ArrayPush$1.call(this.listeners, reactiveObservers);
      }
    }
    function componentValueMutated(vm, key) {
      // On the server side, we don't need mutation tracking. Skipping it improves performance.
      {
        valueMutated(vm.component, key);
      }
    }
    function componentValueObserved(vm, key) {
      // On the server side, we don't need mutation tracking. Skipping it improves performance.
      {
        valueObserved(vm.component, key);
      }
    }
    function createReactiveObserver(callback) {
      // On the server side, we don't need mutation tracking. Skipping it improves performance.
      return new ReactiveObserver(callback);
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    let nextTickCallbackQueue = [];
    const SPACE_CHAR = 32;
    const EmptyObject = seal(create(null));
    const EmptyArray = seal([]);
    function flushCallbackQueue() {
      {
        if (nextTickCallbackQueue.length === 0) {
          throw new Error(`Internal Error: If callbackQueue is scheduled, it is because there must be at least one callback on this pending queue.`);
        }
      }
      const callbacks = nextTickCallbackQueue;
      nextTickCallbackQueue = []; // reset to a new queue
      for (let i = 0, len = callbacks.length; i < len; i += 1) {
        callbacks[i]();
      }
    }
    function addCallbackToNextTick(callback) {
      {
        if (!isFunction$1(callback)) {
          throw new Error(`Internal Error: addCallbackToNextTick() can only accept a function callback`);
        }
      }
      if (nextTickCallbackQueue.length === 0) {
        Promise.resolve().then(flushCallbackQueue);
      }
      ArrayPush$1.call(nextTickCallbackQueue, callback);
    }
    function flattenStylesheets(stylesheets) {
      const list = [];
      for (const stylesheet of stylesheets) {
        if (!isArray$1(stylesheet)) {
          list.push(stylesheet);
        } else {
          list.push(...flattenStylesheets(stylesheet));
        }
      }
      return list;
    }

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function resolveCircularModuleDependency(fn) {
      const module = fn();
      return (module === null || module === void 0 ? void 0 : module.__esModule) ? module.default : module;
    }
    function isCircularModuleDependency(obj) {
      return isFunction$1(obj) && hasOwnProperty$1.call(obj, '__circular__');
    }
    var _a, _b;
    const instrumentDef = (_a = _globalThis.__lwc_instrument_cmp_def) !== null && _a !== void 0 ? _a : noop;
    const instrumentInstance = (_b = _globalThis.__lwc_instrument_cmp_instance) !== null && _b !== void 0 ? _b : noop;

    /*
     * Copyright (c) 2023, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    // Apply ARIA string reflection behavior to a prototype.
    // This is deliberately kept separate from @lwc/aria-reflection. @lwc/aria-reflection is a global polyfill that is
    // needed for backwards compatibility in LEX, whereas `applyAriaReflection` is designed to only apply to our own
    // LightningElement/BaseBridgeElement prototypes.
    function applyAriaReflection(prototype) {
      for (const propName of keys(AriaPropNameToAttrNameMap)) {
        const attrName = AriaPropNameToAttrNameMap[propName];
        if (isUndefined$1(getOwnPropertyDescriptor$1(prototype, propName))) {
          // Note that we need to call this.{get,set,has,remove}Attribute rather than dereferencing
          // from Element.prototype, because these methods are overridden in LightningElement.
          defineProperty(prototype, propName, {
            get() {
              return this.getAttribute(attrName);
            },
            set(newValue) {
              // TODO [#3284]: there is disagreement between browsers and the spec on how to treat undefined
              // Our historical behavior is to only treat null as removing the attribute
              // See also https://github.com/w3c/aria/issues/1858
              if (isNull(newValue)) {
                this.removeAttribute(attrName);
              } else {
                this.setAttribute(attrName, newValue);
              }
            },
            // configurable and enumerable to allow it to be overridden – this mimics Safari's/Chrome's behavior
            configurable: true,
            enumerable: true
          });
        }
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    // This is a temporary workaround to get the @lwc/engine-server to evaluate in node without having
    // to inject at runtime.
    const HTMLElementConstructor = typeof HTMLElement !== 'undefined' ? HTMLElement : function () {};
    const HTMLElementPrototype = HTMLElementConstructor.prototype;

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    // These properties get added to LWCElement.prototype publicProps automatically
    const defaultDefHTMLPropertyNames = ['accessKey', 'dir', 'draggable', 'hidden', 'id', 'lang', 'spellcheck', 'tabIndex', 'title'];

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    /**
     * This is a descriptor map that contains
     * all standard properties that a Custom Element can support (including AOM properties), which
     * determines what kind of capabilities the Base HTML Element and
     * Base Lightning Element should support.
     */
    const HTMLElementOriginalDescriptors = create(null);
    forEach.call(keys(AriaPropNameToAttrNameMap), propName => {
      // Note: intentionally using our in-house getPropertyDescriptor instead of getOwnPropertyDescriptor here because
      // in IE11, some properties are on Element.prototype instead of HTMLElement, just to be sure.
      const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);
      if (!isUndefined$1(descriptor)) {
        HTMLElementOriginalDescriptors[propName] = descriptor;
      }
    });
    forEach.call(defaultDefHTMLPropertyNames, propName => {
      // Note: intentionally using our in-house getPropertyDescriptor instead of getOwnPropertyDescriptor here because
      // in IE11, id property is on Element.prototype instead of HTMLElement, and we suspect that more will fall into
      // this category, so, better to be sure.
      const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);
      if (!isUndefined$1(descriptor)) {
        HTMLElementOriginalDescriptors[propName] = descriptor;
      }
    });

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    /* eslint @lwc/lwc-internal/no-production-assert: "off" */
    function generateDataDescriptor(options) {
      return assign({
        configurable: true,
        enumerable: true,
        writable: true
      }, options);
    }
    function generateAccessorDescriptor(options) {
      return assign({
        configurable: true,
        enumerable: true
      }, options);
    }
    let isDomMutationAllowed = false;
    function unlockDomMutation() {
      isDomMutationAllowed = true;
    }
    function lockDomMutation() {
      isDomMutationAllowed = false;
    }
    function logMissingPortalWarn(name, type) {
      return logWarn(`The \`${name}\` ${type} is available only on elements that use the \`lwc:dom="manual"\` directive.`);
    }
    function patchElementWithRestrictions(elm, options) {
      const originalOuterHTMLDescriptor = getPropertyDescriptor(elm, 'outerHTML');
      const descriptors = {
        outerHTML: generateAccessorDescriptor({
          get() {
            return originalOuterHTMLDescriptor.get.call(this);
          },
          set(value) {
            logError(`Invalid attempt to set outerHTML on Element.`);
            return originalOuterHTMLDescriptor.set.call(this, value);
          }
        })
      };
      // Apply extra restriction related to DOM manipulation if the element is not a portal.
      if (!options.isLight && options.isSynthetic && !options.isPortal) {
        const {
          appendChild,
          insertBefore,
          removeChild,
          replaceChild
        } = elm;
        const originalNodeValueDescriptor = getPropertyDescriptor(elm, 'nodeValue');
        const originalInnerHTMLDescriptor = getPropertyDescriptor(elm, 'innerHTML');
        const originalTextContentDescriptor = getPropertyDescriptor(elm, 'textContent');
        assign(descriptors, {
          appendChild: generateDataDescriptor({
            value(aChild) {
              logMissingPortalWarn('appendChild', 'method');
              return appendChild.call(this, aChild);
            }
          }),
          insertBefore: generateDataDescriptor({
            value(newNode, referenceNode) {
              if (!isDomMutationAllowed) {
                logMissingPortalWarn('insertBefore', 'method');
              }
              return insertBefore.call(this, newNode, referenceNode);
            }
          }),
          removeChild: generateDataDescriptor({
            value(aChild) {
              if (!isDomMutationAllowed) {
                logMissingPortalWarn('removeChild', 'method');
              }
              return removeChild.call(this, aChild);
            }
          }),
          replaceChild: generateDataDescriptor({
            value(newChild, oldChild) {
              logMissingPortalWarn('replaceChild', 'method');
              return replaceChild.call(this, newChild, oldChild);
            }
          }),
          nodeValue: generateAccessorDescriptor({
            get() {
              return originalNodeValueDescriptor.get.call(this);
            },
            set(value) {
              if (!isDomMutationAllowed) {
                logMissingPortalWarn('nodeValue', 'property');
              }
              originalNodeValueDescriptor.set.call(this, value);
            }
          }),
          textContent: generateAccessorDescriptor({
            get() {
              return originalTextContentDescriptor.get.call(this);
            },
            set(value) {
              logMissingPortalWarn('textContent', 'property');
              originalTextContentDescriptor.set.call(this, value);
            }
          }),
          innerHTML: generateAccessorDescriptor({
            get() {
              return originalInnerHTMLDescriptor.get.call(this);
            },
            set(value) {
              logMissingPortalWarn('innerHTML', 'property');
              return originalInnerHTMLDescriptor.set.call(this, value);
            }
          })
        });
      }
      defineProperties(elm, descriptors);
    }
    function getShadowRootRestrictionsDescriptors(sr) {
      // Disallowing properties in dev mode only to avoid people doing the wrong
      // thing when using the real shadow root, because if that's the case,
      // the component will not work when running with synthetic shadow.
      const originalAddEventListener = sr.addEventListener;
      const originalInnerHTMLDescriptor = getPropertyDescriptor(sr, 'innerHTML');
      const originalTextContentDescriptor = getPropertyDescriptor(sr, 'textContent');
      return {
        innerHTML: generateAccessorDescriptor({
          get() {
            return originalInnerHTMLDescriptor.get.call(this);
          },
          set(value) {
            logError(`Invalid attempt to set innerHTML on ShadowRoot.`);
            return originalInnerHTMLDescriptor.set.call(this, value);
          }
        }),
        textContent: generateAccessorDescriptor({
          get() {
            return originalTextContentDescriptor.get.call(this);
          },
          set(value) {
            logError(`Invalid attempt to set textContent on ShadowRoot.`);
            return originalTextContentDescriptor.set.call(this, value);
          }
        }),
        addEventListener: generateDataDescriptor({
          value(type, listener, options) {
            // TODO [#1824]: Potentially relax this restriction
            if (!isUndefined$1(options)) {
              logError('The `addEventListener` method on ShadowRoot does not support any options.', getAssociatedVMIfPresent(this));
            }
            // Typescript does not like it when you treat the `arguments` object as an array
            // @ts-ignore type-mismatch
            return originalAddEventListener.apply(this, arguments);
          }
        })
      };
    }
    // Custom Elements Restrictions:
    // -----------------------------
    function getCustomElementRestrictionsDescriptors(elm) {
      const originalAddEventListener = elm.addEventListener;
      const originalInnerHTMLDescriptor = getPropertyDescriptor(elm, 'innerHTML');
      const originalOuterHTMLDescriptor = getPropertyDescriptor(elm, 'outerHTML');
      const originalTextContentDescriptor = getPropertyDescriptor(elm, 'textContent');
      return {
        innerHTML: generateAccessorDescriptor({
          get() {
            return originalInnerHTMLDescriptor.get.call(this);
          },
          set(value) {
            logError(`Invalid attempt to set innerHTML on HTMLElement.`);
            return originalInnerHTMLDescriptor.set.call(this, value);
          }
        }),
        outerHTML: generateAccessorDescriptor({
          get() {
            return originalOuterHTMLDescriptor.get.call(this);
          },
          set(value) {
            logError(`Invalid attempt to set outerHTML on HTMLElement.`);
            return originalOuterHTMLDescriptor.set.call(this, value);
          }
        }),
        textContent: generateAccessorDescriptor({
          get() {
            return originalTextContentDescriptor.get.call(this);
          },
          set(value) {
            logError(`Invalid attempt to set textContent on HTMLElement.`);
            return originalTextContentDescriptor.set.call(this, value);
          }
        }),
        addEventListener: generateDataDescriptor({
          value(type, listener, options) {
            // TODO [#1824]: Potentially relax this restriction
            if (!isUndefined$1(options)) {
              logError('The `addEventListener` method in `LightningElement` does not support any options.', getAssociatedVMIfPresent(this));
            }
            // Typescript does not like it when you treat the `arguments` object as an array
            // @ts-ignore type-mismatch
            return originalAddEventListener.apply(this, arguments);
          }
        })
      };
    }
    function getLightningElementPrototypeRestrictionsDescriptors(proto) {
      const originalDispatchEvent = proto.dispatchEvent;
      return {
        dispatchEvent: generateDataDescriptor({
          value(event) {
            const vm = getAssociatedVM(this);
            if (!isNull(event) && isObject(event)) {
              const {
                type
              } = event;
              if (!/^[a-z][a-z0-9_]*$/.test(type)) {
                logError(`Invalid event type "${type}" dispatched in element ${getComponentTag(vm)}.` + ` Event name must start with a lowercase letter and followed only lowercase` + ` letters, numbers, and underscores`, vm);
              }
            }
            // Typescript does not like it when you treat the `arguments` object as an array
            // @ts-ignore type-mismatch
            return originalDispatchEvent.apply(this, arguments);
          }
        })
      };
    }
    // This routine will prevent access to certain properties on a shadow root instance to guarantee
    // that all components will work fine in IE11 and other browsers without shadow dom support.
    function patchShadowRootWithRestrictions(sr) {
      defineProperties(sr, getShadowRootRestrictionsDescriptors(sr));
    }
    function patchCustomElementWithRestrictions(elm) {
      const restrictionsDescriptors = getCustomElementRestrictionsDescriptors(elm);
      const elmProto = getPrototypeOf$1(elm);
      setPrototypeOf(elm, create(elmProto, restrictionsDescriptors));
    }
    function patchLightningElementPrototypeWithRestrictions(proto) {
      defineProperties(proto, getLightningElementPrototypeRestrictionsDescriptors(proto));
    }
    function updateComponentValue(vm, key, newValue) {
      const {
        cmpFields
      } = vm;
      if (newValue !== cmpFields[key]) {
        cmpFields[key] = newValue;
        componentValueMutated(vm, key);
      }
    }

    /**
     * Copyright (C) 2017 salesforce.com, inc.
     */
    const {
      isArray
    } = Array;
    const {
      prototype: ObjectDotPrototype,
      getPrototypeOf,
      create: ObjectCreate,
      defineProperty: ObjectDefineProperty,
      isExtensible,
      getOwnPropertyDescriptor,
      getOwnPropertyNames,
      getOwnPropertySymbols,
      preventExtensions,
      hasOwnProperty
    } = Object;
    const {
      push: ArrayPush,
      concat: ArrayConcat
    } = Array.prototype;
    const OtS = {}.toString;
    function toString(obj) {
      if (obj && obj.toString) {
        return obj.toString();
      } else if (typeof obj === 'object') {
        return OtS.call(obj);
      } else {
        return obj + '';
      }
    }
    function isUndefined(obj) {
      return obj === undefined;
    }
    function isFunction(obj) {
      return typeof obj === 'function';
    }
    const proxyToValueMap = new WeakMap();
    function registerProxy(proxy, value) {
      proxyToValueMap.set(proxy, value);
    }
    const unwrap$1 = replicaOrAny => proxyToValueMap.get(replicaOrAny) || replicaOrAny;
    class BaseProxyHandler {
      constructor(membrane, value) {
        this.originalTarget = value;
        this.membrane = membrane;
      }
      // Shared utility methods
      wrapDescriptor(descriptor) {
        if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = this.wrapValue(descriptor.value);
        } else {
          const {
            set: originalSet,
            get: originalGet
          } = descriptor;
          if (!isUndefined(originalGet)) {
            descriptor.get = this.wrapGetter(originalGet);
          }
          if (!isUndefined(originalSet)) {
            descriptor.set = this.wrapSetter(originalSet);
          }
        }
        return descriptor;
      }
      copyDescriptorIntoShadowTarget(shadowTarget, key) {
        const {
          originalTarget
        } = this;
        // Note: a property might get defined multiple times in the shadowTarget
        //       but it will always be compatible with the previous descriptor
        //       to preserve the object invariants, which makes these lines safe.
        const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
        // TODO: it should be impossible for the originalDescriptor to ever be undefined, this `if` can be removed
        /* istanbul ignore else */
        if (!isUndefined(originalDescriptor)) {
          const wrappedDesc = this.wrapDescriptor(originalDescriptor);
          ObjectDefineProperty(shadowTarget, key, wrappedDesc);
        }
      }
      lockShadowTarget(shadowTarget) {
        const {
          originalTarget
        } = this;
        const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
        targetKeys.forEach(key => {
          this.copyDescriptorIntoShadowTarget(shadowTarget, key);
        });
        const {
          membrane: {
            tagPropertyKey
          }
        } = this;
        if (!isUndefined(tagPropertyKey) && !hasOwnProperty.call(shadowTarget, tagPropertyKey)) {
          ObjectDefineProperty(shadowTarget, tagPropertyKey, ObjectCreate(null));
        }
        preventExtensions(shadowTarget);
      }
      // Shared Traps
      // TODO: apply() is never called
      /* istanbul ignore next */
      apply(shadowTarget, thisArg, argArray) {
        /* No op */
      }
      // TODO: construct() is never called
      /* istanbul ignore next */
      construct(shadowTarget, argArray, newTarget) {
        /* No op */
      }
      get(shadowTarget, key) {
        const {
          originalTarget,
          membrane: {
            valueObserved
          }
        } = this;
        const value = originalTarget[key];
        valueObserved(originalTarget, key);
        return this.wrapValue(value);
      }
      has(shadowTarget, key) {
        const {
          originalTarget,
          membrane: {
            tagPropertyKey,
            valueObserved
          }
        } = this;
        valueObserved(originalTarget, key);
        // since key is never going to be undefined, and tagPropertyKey might be undefined
        // we can simply compare them as the second part of the condition.
        return key in originalTarget || key === tagPropertyKey;
      }
      ownKeys(shadowTarget) {
        const {
          originalTarget,
          membrane: {
            tagPropertyKey
          }
        } = this;
        // if the membrane tag key exists and it is not in the original target, we add it to the keys.
        const keys = isUndefined(tagPropertyKey) || hasOwnProperty.call(originalTarget, tagPropertyKey) ? [] : [tagPropertyKey];
        // small perf optimization using push instead of concat to avoid creating an extra array
        ArrayPush.apply(keys, getOwnPropertyNames(originalTarget));
        ArrayPush.apply(keys, getOwnPropertySymbols(originalTarget));
        return keys;
      }
      isExtensible(shadowTarget) {
        const {
          originalTarget
        } = this;
        // optimization to avoid attempting to lock down the shadowTarget multiple times
        if (!isExtensible(shadowTarget)) {
          return false; // was already locked down
        }

        if (!isExtensible(originalTarget)) {
          this.lockShadowTarget(shadowTarget);
          return false;
        }
        return true;
      }
      getPrototypeOf(shadowTarget) {
        const {
          originalTarget
        } = this;
        return getPrototypeOf(originalTarget);
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
        const {
          originalTarget,
          membrane: {
            valueObserved,
            tagPropertyKey
          }
        } = this;
        // keys looked up via getOwnPropertyDescriptor need to be reactive
        valueObserved(originalTarget, key);
        let desc = getOwnPropertyDescriptor(originalTarget, key);
        if (isUndefined(desc)) {
          if (key !== tagPropertyKey) {
            return undefined;
          }
          // if the key is the membrane tag key, and is not in the original target,
          // we produce a synthetic descriptor and install it on the shadow target
          desc = {
            value: undefined,
            writable: false,
            configurable: false,
            enumerable: false
          };
          ObjectDefineProperty(shadowTarget, tagPropertyKey, desc);
          return desc;
        }
        if (desc.configurable === false) {
          // updating the descriptor to non-configurable on the shadow
          this.copyDescriptorIntoShadowTarget(shadowTarget, key);
        }
        // Note: by accessing the descriptor, the key is marked as observed
        // but access to the value, setter or getter (if available) cannot observe
        // mutations, just like regular methods, in which case we just do nothing.
        return this.wrapDescriptor(desc);
      }
    }
    const getterMap$1 = new WeakMap();
    const setterMap$1 = new WeakMap();
    const reverseGetterMap = new WeakMap();
    const reverseSetterMap = new WeakMap();
    class ReactiveProxyHandler extends BaseProxyHandler {
      wrapValue(value) {
        return this.membrane.getProxy(value);
      }
      wrapGetter(originalGet) {
        const wrappedGetter = getterMap$1.get(originalGet);
        if (!isUndefined(wrappedGetter)) {
          return wrappedGetter;
        }
        const handler = this;
        const get = function () {
          // invoking the original getter with the original target
          return handler.wrapValue(originalGet.call(unwrap$1(this)));
        };
        getterMap$1.set(originalGet, get);
        reverseGetterMap.set(get, originalGet);
        return get;
      }
      wrapSetter(originalSet) {
        const wrappedSetter = setterMap$1.get(originalSet);
        if (!isUndefined(wrappedSetter)) {
          return wrappedSetter;
        }
        const set = function (v) {
          // invoking the original setter with the original target
          originalSet.call(unwrap$1(this), unwrap$1(v));
        };
        setterMap$1.set(originalSet, set);
        reverseSetterMap.set(set, originalSet);
        return set;
      }
      unwrapDescriptor(descriptor) {
        if (hasOwnProperty.call(descriptor, 'value')) {
          // dealing with a data descriptor
          descriptor.value = unwrap$1(descriptor.value);
        } else {
          const {
            set,
            get
          } = descriptor;
          if (!isUndefined(get)) {
            descriptor.get = this.unwrapGetter(get);
          }
          if (!isUndefined(set)) {
            descriptor.set = this.unwrapSetter(set);
          }
        }
        return descriptor;
      }
      unwrapGetter(redGet) {
        const reverseGetter = reverseGetterMap.get(redGet);
        if (!isUndefined(reverseGetter)) {
          return reverseGetter;
        }
        const handler = this;
        const get = function () {
          // invoking the red getter with the proxy of this
          return unwrap$1(redGet.call(handler.wrapValue(this)));
        };
        getterMap$1.set(get, redGet);
        reverseGetterMap.set(redGet, get);
        return get;
      }
      unwrapSetter(redSet) {
        const reverseSetter = reverseSetterMap.get(redSet);
        if (!isUndefined(reverseSetter)) {
          return reverseSetter;
        }
        const handler = this;
        const set = function (v) {
          // invoking the red setter with the proxy of this
          redSet.call(handler.wrapValue(this), handler.wrapValue(v));
        };
        setterMap$1.set(set, redSet);
        reverseSetterMap.set(redSet, set);
        return set;
      }
      set(shadowTarget, key, value) {
        const {
          originalTarget,
          membrane: {
            valueMutated
          }
        } = this;
        const oldValue = originalTarget[key];
        if (oldValue !== value) {
          originalTarget[key] = value;
          valueMutated(originalTarget, key);
        } else if (key === 'length' && isArray(originalTarget)) {
          // fix for issue #236: push will add the new index, and by the time length
          // is updated, the internal length is already equal to the new length value
          // therefore, the oldValue is equal to the value. This is the forking logic
          // to support this use case.
          valueMutated(originalTarget, key);
        }
        return true;
      }
      deleteProperty(shadowTarget, key) {
        const {
          originalTarget,
          membrane: {
            valueMutated
          }
        } = this;
        delete originalTarget[key];
        valueMutated(originalTarget, key);
        return true;
      }
      setPrototypeOf(shadowTarget, prototype) {
        /* istanbul ignore else */
        {
          throw new Error(`Invalid setPrototypeOf invocation for reactive proxy ${toString(this.originalTarget)}. Prototype of reactive objects cannot be changed.`);
        }
      }
      preventExtensions(shadowTarget) {
        if (isExtensible(shadowTarget)) {
          const {
            originalTarget
          } = this;
          preventExtensions(originalTarget);
          // if the originalTarget is a proxy itself, it might reject
          // the preventExtension call, in which case we should not attempt to lock down
          // the shadow target.
          // TODO: It should not actually be possible to reach this `if` statement.
          // If a proxy rejects extensions, then calling preventExtensions will throw an error:
          // https://codepen.io/nolanlawson-the-selector/pen/QWMOjbY
          /* istanbul ignore if */
          if (isExtensible(originalTarget)) {
            return false;
          }
          this.lockShadowTarget(shadowTarget);
        }
        return true;
      }
      defineProperty(shadowTarget, key, descriptor) {
        const {
          originalTarget,
          membrane: {
            valueMutated,
            tagPropertyKey
          }
        } = this;
        if (key === tagPropertyKey && !hasOwnProperty.call(originalTarget, key)) {
          // To avoid leaking the membrane tag property into the original target, we must
          // be sure that the original target doesn't have yet.
          // NOTE: we do not return false here because Object.freeze and equivalent operations
          // will attempt to set the descriptor to the same value, and expect no to throw. This
          // is an small compromise for the sake of not having to diff the descriptors.
          return true;
        }
        ObjectDefineProperty(originalTarget, key, this.unwrapDescriptor(descriptor));
        // intentionally testing if false since it could be undefined as well
        if (descriptor.configurable === false) {
          this.copyDescriptorIntoShadowTarget(shadowTarget, key);
        }
        valueMutated(originalTarget, key);
        return true;
      }
      /*LWC compiler v5.1.0*/
    }
    const getterMap = new WeakMap();
    const setterMap = new WeakMap();
    class ReadOnlyHandler extends BaseProxyHandler {
      wrapValue(value) {
        return this.membrane.getReadOnlyProxy(value);
      }
      wrapGetter(originalGet) {
        const wrappedGetter = getterMap.get(originalGet);
        if (!isUndefined(wrappedGetter)) {
          return wrappedGetter;
        }
        const handler = this;
        const get = function () {
          // invoking the original getter with the original target
          return handler.wrapValue(originalGet.call(unwrap$1(this)));
        };
        getterMap.set(originalGet, get);
        return get;
      }
      wrapSetter(originalSet) {
        const wrappedSetter = setterMap.get(originalSet);
        if (!isUndefined(wrappedSetter)) {
          return wrappedSetter;
        }
        const handler = this;
        const set = function (v) {
          /* istanbul ignore else */
          {
            const {
              originalTarget
            } = handler;
            throw new Error(`Invalid mutation: Cannot invoke a setter on "${originalTarget}". "${originalTarget}" is read-only.`);
          }
        };
        setterMap.set(originalSet, set);
        return set;
      }
      set(shadowTarget, key, value) {
        /* istanbul ignore else */
        {
          const {
            originalTarget
          } = this;
          const msg = isArray(originalTarget) ? `Invalid mutation: Cannot mutate array at index ${key.toString()}. Array is read-only.` : `Invalid mutation: Cannot set "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`;
          throw new Error(msg);
        }
      }
      deleteProperty(shadowTarget, key) {
        /* istanbul ignore else */
        {
          const {
            originalTarget
          } = this;
          throw new Error(`Invalid mutation: Cannot delete "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
        }
      }
      setPrototypeOf(shadowTarget, prototype) {
        /* istanbul ignore else */
        {
          const {
            originalTarget
          } = this;
          throw new Error(`Invalid prototype mutation: Cannot set prototype on "${originalTarget}". "${originalTarget}" prototype is read-only.`);
        }
      }
      preventExtensions(shadowTarget) {
        /* istanbul ignore else */
        {
          const {
            originalTarget
          } = this;
          throw new Error(`Invalid mutation: Cannot preventExtensions on ${originalTarget}". "${originalTarget} is read-only.`);
        }
      }
      defineProperty(shadowTarget, key, descriptor) {
        /* istanbul ignore else */
        {
          const {
            originalTarget
          } = this;
          throw new Error(`Invalid mutation: Cannot defineProperty "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
        }
      }
      /*LWC compiler v5.1.0*/
    }
    function extract(objectOrArray) {
      if (isArray(objectOrArray)) {
        return objectOrArray.map(item => {
          const original = unwrap$1(item);
          if (original !== item) {
            return extract(original);
          }
          return item;
        });
      }
      const obj = ObjectCreate(getPrototypeOf(objectOrArray));
      const names = getOwnPropertyNames(objectOrArray);
      return ArrayConcat.call(names, getOwnPropertySymbols(objectOrArray)).reduce((seed, key) => {
        const item = objectOrArray[key];
        const original = unwrap$1(item);
        if (original !== item) {
          seed[key] = extract(original);
        } else {
          seed[key] = item;
        }
        return seed;
      }, obj);
    }
    const formatter = {
      header: plainOrProxy => {
        const originalTarget = unwrap$1(plainOrProxy);
        // if originalTarget is falsy or not unwrappable, exit
        if (!originalTarget || originalTarget === plainOrProxy) {
          return null;
        }
        const obj = extract(plainOrProxy);
        return ['object', {
          object: obj
        }];
      },
      hasBody: () => {
        return false;
      },
      body: () => {
        return null;
      }
    };
    // Inspired from paulmillr/es6-shim
    // https://github.com/paulmillr/es6-shim/blob/master/es6-shim.js#L176-L185
    /* istanbul ignore next */
    function getGlobal() {
      // the only reliable means to get the global object is `Function('return this')()`
      // However, this causes CSP violations in Chrome apps.
      if (typeof globalThis !== 'undefined') {
        return globalThis;
      }
      if (typeof self !== 'undefined') {
        return self;
      }
      if (typeof window !== 'undefined') {
        return window;
      }
      if (typeof global !== 'undefined') {
        return global;
      }
      // Gracefully degrade if not able to locate the global object
      return {};
    }
    function init$1() {
      const global = getGlobal();
      // Custom Formatter for Dev Tools. To enable this, open Chrome Dev Tools
      //  - Go to Settings,
      //  - Under console, select "Enable custom formatters"
      // For more information, https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview
      const devtoolsFormatters = global.devtoolsFormatters || [];
      ArrayPush.call(devtoolsFormatters, formatter);
      global.devtoolsFormatters = devtoolsFormatters;
    }

    /* istanbul ignore else */
    {
      init$1();
    }
    function defaultValueIsObservable(value) {
      // intentionally checking for null
      if (value === null) {
        return false;
      }
      // treat all non-object types, including undefined, as non-observable values
      if (typeof value !== 'object') {
        return false;
      }
      if (isArray(value)) {
        return true;
      }
      const proto = getPrototypeOf(value);
      return proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null;
    }
    const defaultValueObserved = (obj, key) => {
      /* do nothing */
    };
    const defaultValueMutated = (obj, key) => {
      /* do nothing */
    };
    function createShadowTarget(value) {
      return isArray(value) ? [] : {};
    }
    class ObservableMembrane {
      constructor(options = {}) {
        this.readOnlyObjectGraph = new WeakMap();
        this.reactiveObjectGraph = new WeakMap();
        const {
          valueMutated,
          valueObserved,
          valueIsObservable,
          tagPropertyKey
        } = options;
        this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
        this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
        this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
        this.tagPropertyKey = tagPropertyKey;
      }
      getProxy(value) {
        const unwrappedValue = unwrap$1(value);
        if (this.valueIsObservable(unwrappedValue)) {
          // When trying to extract the writable version of a readonly we return the readonly.
          if (this.readOnlyObjectGraph.get(unwrappedValue) === value) {
            return value;
          }
          return this.getReactiveHandler(unwrappedValue);
        }
        return unwrappedValue;
      }
      getReadOnlyProxy(value) {
        value = unwrap$1(value);
        if (this.valueIsObservable(value)) {
          return this.getReadOnlyHandler(value);
        }
        return value;
      }
      unwrapProxy(p) {
        return unwrap$1(p);
      }
      getReactiveHandler(value) {
        let proxy = this.reactiveObjectGraph.get(value);
        if (isUndefined(proxy)) {
          // caching the proxy after the first time it is accessed
          const handler = new ReactiveProxyHandler(this, value);
          proxy = new Proxy(createShadowTarget(value), handler);
          registerProxy(proxy, value);
          this.reactiveObjectGraph.set(value, proxy);
        }
        return proxy;
      }
      getReadOnlyHandler(value) {
        let proxy = this.readOnlyObjectGraph.get(value);
        if (isUndefined(proxy)) {
          // caching the proxy after the first time it is accessed
          const handler = new ReadOnlyHandler(this, value);
          proxy = new Proxy(createShadowTarget(value), handler);
          registerProxy(proxy, value);
          this.readOnlyObjectGraph.set(value, proxy);
        }
        return proxy;
      }
    }
    /** version: 2.0.0 */

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const lockerLivePropertyKey = Symbol.for('@@lockerLiveValue');
    const reactiveMembrane = new ObservableMembrane({
      valueObserved,
      valueMutated,
      tagPropertyKey: lockerLivePropertyKey
    });
    function getReadOnlyProxy(value) {
      // We must return a frozen wrapper around the value, so that child components cannot mutate properties passed to
      // them from their parents. This applies to both the client and server.
      return reactiveMembrane.getReadOnlyProxy(value);
    }
    function getReactiveProxy(value) {
      // On the server side, we don't need mutation tracking. Skipping it improves performance.
      return reactiveMembrane.getProxy(value);
    }
    // Making the component instance a live value when using Locker to support expandos.
    function markLockerLiveObject(obj) {
      // On the server side, we don't need mutation tracking. Skipping it improves performance.
      {
        obj[lockerLivePropertyKey] = undefined;
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    /**
     * This module is responsible for producing the ComponentDef object that is always
     * accessible via `vm.def`. This is lazily created during the creation of the first
     * instance of a component class, and shared across all instances.
     *
     * This structure can be used to synthetically create proxies, and understand the
     * shape of a component. It is also used internally to apply extra optimizations.
     */
    /**
     * This operation is called with a descriptor of an standard html property
     * that a Custom Element can support (including AOM properties), which
     * determines what kind of capabilities the Base Lightning Element should support. When producing the new descriptors
     * for the Base Lightning Element, it also include the reactivity bit, so the standard property is reactive.
     */
    function createBridgeToElementDescriptor(propName, descriptor) {
      const {
        get,
        set,
        enumerable,
        configurable
      } = descriptor;
      if (!isFunction$1(get)) {
        throw new TypeError(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard getter.`);
      }
      if (!isFunction$1(set)) {
        throw new TypeError(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard setter.`);
      }
      return {
        enumerable,
        configurable,
        get() {
          const vm = getAssociatedVM(this);
          if (isBeingConstructed(vm)) {
            {
              logError(`The value of property \`${propName}\` can't be read from the constructor because the owner component hasn't set the value yet. Instead, use the constructor to set a default value for the property.`, vm);
            }
            return;
          }
          componentValueObserved(vm, propName);
          return get.call(vm.elm);
        },
        set(newValue) {
          const vm = getAssociatedVM(this);
          {
            const vmBeingRendered = getVMBeingRendered();
            if (isInvokingRender) {
              logError(`${vmBeingRendered}.render() method has side effects on the state of ${vm}.${propName}`);
            }
            if (isUpdatingTemplate) {
              logError(`When updating the template of ${vmBeingRendered}, one of the accessors used by the template has side effects on the state of ${vm}.${propName}`);
            }
            if (isBeingConstructed(vm)) {
              logError(`Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
            }
            if (isObject(newValue) && !isNull(newValue)) {
              logError(`Invalid value "${newValue}" for "${propName}" of ${vm}. Value cannot be an object, must be a primitive value.`);
            }
          }
          updateComponentValue(vm, propName, newValue);
          return set.call(vm.elm, newValue);
        }
      };
    }
    const refsCache = new WeakMap();
    /**
     * This class is the base class for any LWC element.
     * Some elements directly extends this class, others implement it via inheritance.
     **/
    // @ts-ignore
    const LightningElement = function () {
      // This should be as performant as possible, while any initialization should be done lazily
      if (isNull(vmBeingConstructed)) {
        // Thrown when doing something like `new LightningElement()` or
        // `class Foo extends LightningElement {}; new Foo()`
        throw new TypeError('Illegal constructor');
      }
      // This is a no-op unless Lightning DevTools are enabled.
      instrumentInstance(this, vmBeingConstructed);
      const vm = vmBeingConstructed;
      const {
        def,
        elm
      } = vm;
      const {
        bridge
      } = def;
      {
        const {
          assertInstanceOfHTMLElement
        } = vm.renderer;
        assertInstanceOfHTMLElement(vm.elm, `Component creation requires a DOM element to be associated to ${vm}.`);
      }
      const component = this;
      setPrototypeOf(elm, bridge.prototype);
      vm.component = this;
      // Locker hooks assignment. When the LWC engine run with Locker, Locker intercepts all the new
      // component creation and passes hooks to instrument all the component interactions with the
      // engine. We are intentionally hiding this argument from the formal API of LightningElement
      // because we don't want folks to know about it just yet.
      if (arguments.length === 1) {
        const {
          callHook,
          setHook,
          getHook
        } = arguments[0];
        vm.callHook = callHook;
        vm.setHook = setHook;
        vm.getHook = getHook;
      }
      markLockerLiveObject(this);
      // Linking elm, shadow root and component with the VM.
      associateVM(component, vm);
      associateVM(elm, vm);
      if (vm.renderMode === 1 /* RenderMode.Shadow */) {
        vm.renderRoot = doAttachShadow(vm);
      } else {
        vm.renderRoot = elm;
      }
      // Adding extra guard rails in DEV mode.
      {
        patchCustomElementWithRestrictions(elm);
      }
      return this;
    };
    function doAttachShadow(vm) {
      const {
        elm,
        mode,
        shadowMode,
        def: {
          ctor
        },
        renderer: {
          attachShadow
        }
      } = vm;
      const shadowRoot = attachShadow(elm, {
        [KEY__SYNTHETIC_MODE]: shadowMode === 1 /* ShadowMode.Synthetic */,
        delegatesFocus: Boolean(ctor.delegatesFocus),
        mode
      });
      vm.shadowRoot = shadowRoot;
      associateVM(shadowRoot, vm);
      {
        patchShadowRootWithRestrictions(shadowRoot);
      }
      return shadowRoot;
    }
    function warnIfInvokedDuringConstruction(vm, methodOrPropName) {
      if (isBeingConstructed(vm)) {
        logError(`this.${methodOrPropName} should not be called during the construction of the custom element for ${getComponentTag(vm)} because the element is not yet in the DOM or has no children yet.`);
      }
    }
    // List of properties on ElementInternals that are formAssociated can be found in the spec:
    // https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-elements
    const formAssociatedProps = new Set(['setFormValue', 'form', 'setValidity', 'willValidate', 'validity', 'validationMessage', 'checkValidity', 'reportValidity', 'labels']);
    // Verify that access to a form-associated property of the ElementInternals proxy has formAssociated set in the LWC.
    function verifyPropForFormAssociation(propertyKey, isFormAssociated) {
      if (isString(propertyKey) && formAssociatedProps.has(propertyKey) && !isFormAssociated) {
        //Note this error message mirrors Chrome and Firefox error messages, in Safari the error is slightly different.
        throw new DOMException(`Failed to execute '${propertyKey}' on 'ElementInternals': The target element is not a form-associated custom element.`);
      }
    }
    const elementInternalsAccessorAllowList = new Set(['shadowRoot', 'role', ...formAssociatedProps]);
    // Prevent access to properties not defined in the HTML spec in case browsers decide to
    // provide new APIs that provide access to form associated properties.
    // This can be removed along with UpgradeableConstructor.
    function isAllowedElementInternalAccessor(propertyKey) {
      let isAllowedAccessor = false;
      // As of this writing all ElementInternal property keys as described in the spec are implemented with strings
      // in Chrome, Firefox, and Safari
      if (isString(propertyKey)) {
        // Allow list is based on HTML spec:
        // https://html.spec.whatwg.org/multipage/custom-elements.html#the-elementinternals-interface
        isAllowedAccessor = elementInternalsAccessorAllowList.has(propertyKey) || /^aria/.test(propertyKey);
        if (!isAllowedAccessor && "development" !== 'production') {
          logWarn('Only properties defined in the ElementInternals HTML spec are available.');
        }
      }
      return isAllowedAccessor;
    }
    // Wrap all ElementInternal objects in a proxy to prevent form association when `formAssociated` is not set on an LWC.
    // This is needed because the 1UpgradeableConstructor1 always sets `formAssociated=true`, which means all
    // ElementInternal objects will have form-associated properties set when an LWC is placed in a form.
    // We are doing this to guard against customers taking a dependency on form elements being associated to ElementInternals
    // when 'formAssociated' has not been set on the LWC.
    function createElementInternalsProxy(elementInternals, isFormAssociated) {
      const elementInternalsProxy = new Proxy(elementInternals, {
        set(target, propertyKey, newValue) {
          if (isAllowedElementInternalAccessor(propertyKey)) {
            // Verify that formAssociated is set for form associated properties
            verifyPropForFormAssociation(propertyKey, isFormAssociated);
            return Reflect.set(target, propertyKey, newValue);
          }
          // As of this writing ElementInternals do not have non-string properties that can be set.
          return false;
        },
        get(target, propertyKey) {
          if (
          // Pass through Object.prototype methods such as toString()
          hasOwnProperty$1.call(Object.prototype, propertyKey) ||
          // As of this writing, ElementInternals only uses Symbol.toStringTag which is called
          // on Object.hasOwnProperty invocations
          Symbol.for('Symbol.toStringTag') === propertyKey ||
          // ElementInternals allow listed properties
          isAllowedElementInternalAccessor(propertyKey)) {
            // Verify that formAssociated is set for form associated properties
            verifyPropForFormAssociation(propertyKey, isFormAssociated);
            const propertyValue = Reflect.get(target, propertyKey);
            return isFunction$1(propertyValue) ? propertyValue.bind(target) : propertyValue;
          }
        }
      });
      return elementInternalsProxy;
    }
    // @ts-ignore
    LightningElement.prototype = {
      constructor: LightningElement,
      dispatchEvent(event) {
        const vm = getAssociatedVM(this);
        const {
          elm,
          renderer: {
            dispatchEvent
          }
        } = vm;
        return dispatchEvent(elm, event);
      },
      addEventListener(type, listener, options) {
        const vm = getAssociatedVM(this);
        const {
          elm,
          renderer: {
            addEventListener
          }
        } = vm;
        {
          const vmBeingRendered = getVMBeingRendered();
          if (isInvokingRender) {
            logError(`${vmBeingRendered}.render() method has side effects on the state of ${vm} by adding an event listener for "${type}".`);
          }
          if (isUpdatingTemplate) {
            logError(`Updating the template of ${vmBeingRendered} has side effects on the state of ${vm} by adding an event listener for "${type}".`);
          }
          if (!isFunction$1(listener)) {
            logError(`Invalid second argument for this.addEventListener() in ${vm} for event "${type}". Expected an EventListener but received ${listener}.`);
          }
        }
        const wrappedListener = getWrappedComponentsListener(vm, listener);
        addEventListener(elm, type, wrappedListener, options);
      },
      removeEventListener(type, listener, options) {
        const vm = getAssociatedVM(this);
        const {
          elm,
          renderer: {
            removeEventListener
          }
        } = vm;
        const wrappedListener = getWrappedComponentsListener(vm, listener);
        removeEventListener(elm, type, wrappedListener, options);
      },
      hasAttribute(name) {
        const vm = getAssociatedVM(this);
        const {
          elm,
          renderer: {
            getAttribute
          }
        } = vm;
        return !isNull(getAttribute(elm, name));
      },
      hasAttributeNS(namespace, name) {
        const vm = getAssociatedVM(this);
        const {
          elm,
          renderer: {
            getAttribute
          }
        } = vm;
        return !isNull(getAttribute(elm, name, namespace));
      },
      removeAttribute(name) {
        const vm = getAssociatedVM(this);
        const {
          elm,
          renderer: {
            removeAttribute
          }
        } = vm;
        removeAttribute(elm, name);
      },
      removeAttributeNS(namespace, name) {
        const {
          elm,
          renderer: {
            removeAttribute
          }
        } = getAssociatedVM(this);
        removeAttribute(elm, name, namespace);
      },
      getAttribute(name) {
        const vm = getAssociatedVM(this);
        const {
          elm
        } = vm;
        const {
          getAttribute
        } = vm.renderer;
        return getAttribute(elm, name);
      },
      getAttributeNS(namespace, name) {
        const vm = getAssociatedVM(this);
        const {
          elm
        } = vm;
        const {
          getAttribute
        } = vm.renderer;
        return getAttribute(elm, name, namespace);
      },
      setAttribute(name, value) {
        const vm = getAssociatedVM(this);
        const {
          elm,
          renderer: {
            setAttribute
          }
        } = vm;
        {
          if (isBeingConstructed(vm)) {
            logError(`Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
          }
        }
        setAttribute(elm, name, value);
      },
      setAttributeNS(namespace, name, value) {
        const vm = getAssociatedVM(this);
        const {
          elm,
          renderer: {
            setAttribute
          }
        } = vm;
        {
          if (isBeingConstructed(vm)) {
            logError(`Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
          }
        }
        setAttribute(elm, name, value, namespace);
      },
      getBoundingClientRect() {
        const vm = getAssociatedVM(this);
        const {
          elm,
          renderer: {
            getBoundingClientRect
          }
        } = vm;
        {
          warnIfInvokedDuringConstruction(vm, 'getBoundingClientRect()');
        }
        return getBoundingClientRect(elm);
      },
      attachInternals() {
        const vm = getAssociatedVM(this);
        const {
          elm,
          def: {
            formAssociated
          },
          renderer: {
            attachInternals
          }
        } = vm;
        if (vm.shadowMode === 1 /* ShadowMode.Synthetic */) {
          throw new Error('attachInternals API is not supported in light DOM or synthetic shadow.');
        }
        const internals = attachInternals(elm);
        // #TODO[2970]: remove proxy once `UpgradeableConstructor` has been removed
        return createElementInternalsProxy(internals, Boolean(formAssociated));
      },
      get isConnected() {
        const vm = getAssociatedVM(this);
        const {
          elm,
          renderer: {
            isConnected
          }
        } = vm;
        return isConnected(elm);
      },
      get classList() {
        const vm = getAssociatedVM(this);
        const {
          elm,
          renderer: {
            getClassList
          }
        } = vm;
        {
          if (isBeingConstructed(vm)) {
            logError(`Failed to construct ${vm}: The result must not have attributes. Adding or tampering with classname in constructor is not allowed in a web component, use connectedCallback() instead.`);
          }
        }
        return getClassList(elm);
      },
      get template() {
        const vm = getAssociatedVM(this);
        {
          if (vm.renderMode === 0 /* RenderMode.Light */) {
            logError('`this.template` returns null for light DOM components. Since there is no shadow, the rendered content can be accessed via `this` itself. e.g. instead of `this.template.querySelector`, use `this.querySelector`.');
          }
        }
        return vm.shadowRoot;
      },
      get refs() {
        const vm = getAssociatedVM(this);
        if (isUpdatingTemplate) {
          {
            logError(`this.refs should not be called while ${getComponentTag(vm)} is rendering. Use this.refs only when the DOM is stable, e.g. in renderedCallback().`);
          }
          // If the template is in the process of being updated, then we don't want to go through the normal
          // process of returning the refs and caching them, because the state of the refs is unstable.
          // This can happen if e.g. a template contains `<div class={foo}></div>` and `foo` is computed
          // based on `this.refs.bar`.
          return;
        }
        {
          warnIfInvokedDuringConstruction(vm, 'refs');
        }
        const {
          refVNodes,
          cmpTemplate
        } = vm;
        // If the `cmpTemplate` is null, that means that the template has not been rendered yet. Most likely this occurs
        // if `this.refs` is called during the `connectedCallback` phase. The DOM elements have not been rendered yet,
        // so log a warning. Note we also check `isBeingConstructed()` to avoid a double warning (due to
        // `warnIfInvokedDuringConstruction` above).
        if (isNull(cmpTemplate) && !isBeingConstructed(vm)) {
          logError(`this.refs is undefined for ${getComponentTag(vm)}. This is either because the attached template has no "lwc:ref" directive, or this.refs was ` + `invoked before renderedCallback(). Use this.refs only when the referenced HTML elements have ` + `been rendered to the DOM, such as within renderedCallback() or disconnectedCallback().`);
        }
        // For backwards compatibility with component written before template refs
        // were introduced, we return undefined if the template has no refs defined
        // anywhere. This fixes components that may want to add an expando called `refs`
        // and are checking if it exists with `if (this.refs)`  before adding it.
        // Note we use a null refVNodes to indicate that the template has no refs defined.
        if (isNull(refVNodes)) {
          return;
        }
        // The refNodes can be cached based on the refVNodes, since the refVNodes
        // are recreated from scratch every time the template is rendered.
        // This happens with `vm.refVNodes = null` in `template.ts` in `@lwc/engine-core`.
        let refs = refsCache.get(refVNodes);
        if (isUndefined$1(refs)) {
          refs = create(null);
          for (const key of keys(refVNodes)) {
            refs[key] = refVNodes[key].elm;
          }
          freeze(refs);
          refsCache.set(refVNodes, refs);
        }
        return refs;
      },
      // For backwards compat, we allow component authors to set `refs` as an expando
      set refs(value) {
        defineProperty(this, 'refs', {
          configurable: true,
          enumerable: true,
          writable: true,
          value
        });
      },
      get shadowRoot() {
        // From within the component instance, the shadowRoot is always reported as "closed".
        // Authors should rely on this.template instead.
        return null;
      },
      get children() {
        const vm = getAssociatedVM(this);
        const renderer = vm.renderer;
        {
          warnIfInvokedDuringConstruction(vm, 'children');
        }
        return renderer.getChildren(vm.elm);
      },
      get childNodes() {
        const vm = getAssociatedVM(this);
        const renderer = vm.renderer;
        {
          warnIfInvokedDuringConstruction(vm, 'childNodes');
        }
        return renderer.getChildNodes(vm.elm);
      },
      get firstChild() {
        const vm = getAssociatedVM(this);
        const renderer = vm.renderer;
        {
          warnIfInvokedDuringConstruction(vm, 'firstChild');
        }
        return renderer.getFirstChild(vm.elm);
      },
      get firstElementChild() {
        const vm = getAssociatedVM(this);
        const renderer = vm.renderer;
        {
          warnIfInvokedDuringConstruction(vm, 'firstElementChild');
        }
        return renderer.getFirstElementChild(vm.elm);
      },
      get lastChild() {
        const vm = getAssociatedVM(this);
        const renderer = vm.renderer;
        {
          warnIfInvokedDuringConstruction(vm, 'lastChild');
        }
        return renderer.getLastChild(vm.elm);
      },
      get lastElementChild() {
        const vm = getAssociatedVM(this);
        const renderer = vm.renderer;
        {
          warnIfInvokedDuringConstruction(vm, 'lastElementChild');
        }
        return renderer.getLastElementChild(vm.elm);
      },
      get ownerDocument() {
        const vm = getAssociatedVM(this);
        const renderer = vm.renderer;
        {
          warnIfInvokedDuringConstruction(vm, 'ownerDocument');
        }
        return renderer.ownerDocument(vm.elm);
      },
      get tagName() {
        const {
          elm,
          renderer
        } = getAssociatedVM(this);
        return renderer.getTagName(elm);
      },
      render() {
        const vm = getAssociatedVM(this);
        return vm.def.template;
      },
      toString() {
        const vm = getAssociatedVM(this);
        return `[object ${vm.def.name}]`;
      }
    };
    const queryAndChildGetterDescriptors = create(null);
    const queryMethods = ['getElementsByClassName', 'getElementsByTagName', 'querySelector', 'querySelectorAll'];
    // Generic passthrough for query APIs on HTMLElement to the relevant Renderer APIs
    for (const queryMethod of queryMethods) {
      queryAndChildGetterDescriptors[queryMethod] = {
        value(arg) {
          const vm = getAssociatedVM(this);
          const {
            elm,
            renderer
          } = vm;
          {
            warnIfInvokedDuringConstruction(vm, `${queryMethod}()`);
          }
          return renderer[queryMethod](elm, arg);
        },
        configurable: true,
        enumerable: true,
        writable: true
      };
    }
    defineProperties(LightningElement.prototype, queryAndChildGetterDescriptors);
    const lightningBasedDescriptors = create(null);
    for (const propName in HTMLElementOriginalDescriptors) {
      lightningBasedDescriptors[propName] = createBridgeToElementDescriptor(propName, HTMLElementOriginalDescriptors[propName]);
    }
    defineProperties(LightningElement.prototype, lightningBasedDescriptors);
    // Apply ARIA reflection to LightningElement.prototype, on both the browser and server.
    // This allows `this.aria*` property accessors to work from inside a component, and to reflect `aria-*` attrs.
    // Note this works regardless of whether the global ARIA reflection polyfill is applied or not.
    applyAriaReflection(LightningElement.prototype);
    defineProperty(LightningElement, 'CustomElementConstructor', {
      get() {
        // If required, a runtime-specific implementation must be defined.
        throw new ReferenceError('The current runtime does not support CustomElementConstructor.');
      },
      configurable: true
    });
    {
      patchLightningElementPrototypeWithRestrictions(LightningElement.prototype);
    }
    function createObservedFieldPropertyDescriptor(key) {
      return {
        get() {
          const vm = getAssociatedVM(this);
          componentValueObserved(vm, key);
          return vm.cmpFields[key];
        },
        set(newValue) {
          const vm = getAssociatedVM(this);
          updateComponentValue(vm, key, newValue);
        },
        enumerable: true,
        configurable: true
      };
    }

    /*
     * Copyright (c) 2023, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const AdapterToTokenMap = new Map();
    function createContextWatcher(vm, wireDef, callbackWhenContextIsReady) {
      const {
        adapter
      } = wireDef;
      const adapterContextToken = AdapterToTokenMap.get(adapter);
      if (isUndefined$1(adapterContextToken)) {
        return; // no provider found, nothing to be done
      }

      const {
        elm,
        context: {
          wiredConnecting,
          wiredDisconnecting
        },
        renderer: {
          registerContextConsumer
        }
      } = vm;
      // waiting for the component to be connected to formally request the context via the token
      ArrayPush$1.call(wiredConnecting, () => {
        // This will attempt to connect the current element with one of its anscestors
        // that can provide context for the given wire adapter. This relationship is
        // keyed on the secret & internal value of `adapterContextToken`, which is unique
        // to a given wire adapter.
        //
        // Depending on the runtime environment, this connection is made using either DOM
        // events (in the browser) or a custom traversal (on the server).
        registerContextConsumer(elm, adapterContextToken, {
          setNewContext(newContext) {
            // eslint-disable-next-line @lwc/lwc-internal/no-invalid-todo
            // TODO: dev-mode validation of config based on the adapter.contextSchema
            callbackWhenContextIsReady(newContext);
          },
          setDisconnectedCallback(disconnectCallback) {
            // adds this callback into the disconnect bucket so it gets disconnected from parent
            // the the element hosting the wire is disconnected
            ArrayPush$1.call(wiredDisconnecting, disconnectCallback);
          }
        });
      });
    }

    /*
     * Copyright (c) 2023, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const DeprecatedWiredElementHost = '$$DeprecatedWiredElementHostKey$$';
    const DeprecatedWiredParamsMeta = '$$DeprecatedWiredParamsMetaKey$$';
    const WIRE_DEBUG_ENTRY = '@wire';
    const WireMetaMap = new Map();
    function createFieldDataCallback(vm, name) {
      return value => {
        updateComponentValue(vm, name, value);
      };
    }
    function createMethodDataCallback(vm, method) {
      return value => {
        // dispatching new value into the wired method
        runWithBoundaryProtection(vm, vm.owner, noop, () => {
          // job
          method.call(vm.component, value);
        }, noop);
      };
    }
    function createConfigWatcher(component, configCallback, callbackWhenConfigIsReady) {
      let hasPendingConfig = false;
      // creating the reactive observer for reactive params when needed
      const ro = createReactiveObserver(() => {
        if (hasPendingConfig === false) {
          hasPendingConfig = true;
          // collect new config in the micro-task
          Promise.resolve().then(() => {
            hasPendingConfig = false;
            // resetting current reactive params
            ro.reset();
            // dispatching a new config due to a change in the configuration
            computeConfigAndUpdate();
          });
        }
      });
      const computeConfigAndUpdate = () => {
        let config;
        ro.observe(() => config = configCallback(component));
        // eslint-disable-next-line @lwc/lwc-internal/no-invalid-todo
        // TODO: dev-mode validation of config based on the adapter.configSchema
        // @ts-ignore it is assigned in the observe() callback
        callbackWhenConfigIsReady(config);
      };
      return {
        computeConfigAndUpdate,
        ro
      };
    }
    function createConnector(vm, name, wireDef) {
      const {
        method,
        adapter,
        configCallback,
        dynamic
      } = wireDef;
      let debugInfo;
      {
        const wiredPropOrMethod = isUndefined$1(method) ? name : method.name;
        debugInfo = create(null);
        debugInfo.wasDataProvisionedForConfig = false;
        vm.debugInfo[WIRE_DEBUG_ENTRY][wiredPropOrMethod] = debugInfo;
      }
      const fieldOrMethodCallback = isUndefined$1(method) ? createFieldDataCallback(vm, name) : createMethodDataCallback(vm, method);
      const dataCallback = value => {
        {
          debugInfo.data = value;
          // Note: most of the time, the data provided is for the current config, but there may be
          // some conditions in which it does not, ex:
          // race conditions in a poor network while the adapter does not cancel a previous request.
          debugInfo.wasDataProvisionedForConfig = true;
        }
        fieldOrMethodCallback(value);
      };
      let context;
      let connector;
      // Workaround to pass the component element associated to this wire adapter instance.
      defineProperty(dataCallback, DeprecatedWiredElementHost, {
        value: vm.elm
      });
      defineProperty(dataCallback, DeprecatedWiredParamsMeta, {
        value: dynamic
      });
      runWithBoundaryProtection(vm, vm, noop, () => {
        // job
        connector = new adapter(dataCallback, {
          tagName: vm.tagName
        });
      }, noop);
      const updateConnectorConfig = config => {
        // every time the config is recomputed due to tracking,
        // this callback will be invoked with the new computed config
        runWithBoundaryProtection(vm, vm, noop, () => {
          // job
          if ("development" !== 'production') {
            debugInfo.config = config;
            debugInfo.context = context;
            debugInfo.wasDataProvisionedForConfig = false;
          }
          connector.update(config, context);
        }, noop);
      };
      // Computes the current wire config and calls the update method on the wire adapter.
      // If it has params, we will need to observe changes in the next tick.
      const {
        computeConfigAndUpdate,
        ro
      } = createConfigWatcher(vm.component, configCallback, updateConnectorConfig);
      // if the adapter needs contextualization, we need to watch for new context and push it alongside the config
      if (!isUndefined$1(adapter.contextSchema)) {
        createContextWatcher(vm, wireDef, newContext => {
          // every time the context is pushed into this component,
          // this callback will be invoked with the new computed context
          if (context !== newContext) {
            context = newContext;
            // Note: when new context arrives, the config will be recomputed and pushed along side the new
            // context, this is to preserve the identity characteristics, config should not have identity
            // (ever), while context can have identity
            if (vm.state === 1 /* VMState.connected */) {
              computeConfigAndUpdate();
            }
          }
        });
      }
      return {
        // @ts-ignore the boundary protection executes sync, connector is always defined
        connector,
        computeConfigAndUpdate,
        resetConfigWatcher: () => ro.reset()
      };
    }
    function storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic) {
      // support for callable adapters
      if (adapter.adapter) {
        adapter = adapter.adapter;
      }
      const method = descriptor.value;
      const def = {
        adapter,
        method,
        configCallback,
        dynamic
      };
      WireMetaMap.set(descriptor, def);
    }
    function storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic) {
      // support for callable adapters
      if (adapter.adapter) {
        adapter = adapter.adapter;
      }
      const def = {
        adapter,
        configCallback,
        dynamic
      };
      WireMetaMap.set(descriptor, def);
    }
    function installWireAdapters(vm) {
      const {
        context,
        def: {
          wire
        }
      } = vm;
      {
        vm.debugInfo[WIRE_DEBUG_ENTRY] = create(null);
      }
      const wiredConnecting = context.wiredConnecting = [];
      const wiredDisconnecting = context.wiredDisconnecting = [];
      for (const fieldNameOrMethod in wire) {
        const descriptor = wire[fieldNameOrMethod];
        const wireDef = WireMetaMap.get(descriptor);
        {
          assert.invariant(wireDef, `Internal Error: invalid wire definition found.`);
        }
        if (!isUndefined$1(wireDef)) {
          const {
            connector,
            computeConfigAndUpdate,
            resetConfigWatcher
          } = createConnector(vm, fieldNameOrMethod, wireDef);
          const hasDynamicParams = wireDef.dynamic.length > 0;
          ArrayPush$1.call(wiredConnecting, () => {
            connector.connect();
            if (!lwcRuntimeFlags.ENABLE_WIRE_SYNC_EMIT) {
              if (hasDynamicParams) {
                Promise.resolve().then(computeConfigAndUpdate);
                return;
              }
            }
            computeConfigAndUpdate();
          });
          ArrayPush$1.call(wiredDisconnecting, () => {
            connector.disconnect();
            resetConfigWatcher();
          });
        }
      }
    }
    function connectWireAdapters(vm) {
      const {
        wiredConnecting
      } = vm.context;
      for (let i = 0, len = wiredConnecting.length; i < len; i += 1) {
        wiredConnecting[i]();
      }
    }
    function disconnectWireAdapters(vm) {
      const {
        wiredDisconnecting
      } = vm.context;
      runWithBoundaryProtection(vm, vm, noop, () => {
        // job
        for (let i = 0, len = wiredDisconnecting.length; i < len; i += 1) {
          wiredDisconnecting[i]();
        }
      }, noop);
    }
    function createPublicPropertyDescriptor(key) {
      return {
        get() {
          const vm = getAssociatedVM(this);
          if (isBeingConstructed(vm)) {
            {
              logError(`Can’t read the value of property \`${toString$1(key)}\` from the constructor because the owner component hasn’t set the value yet. Instead, use the constructor to set a default value for the property.`, vm);
            }
            return;
          }
          componentValueObserved(vm, key);
          return vm.cmpProps[key];
        },
        set(newValue) {
          const vm = getAssociatedVM(this);
          {
            const vmBeingRendered = getVMBeingRendered();
            if (isInvokingRender) {
              logError(`render() method has side effects on the state of property "${toString$1(key)}"`, isNull(vmBeingRendered) ? vm : vmBeingRendered);
            }
            if (isUpdatingTemplate) {
              logError(`Updating the template has side effects on the state of property "${toString$1(key)}"`, isNull(vmBeingRendered) ? vm : vmBeingRendered);
            }
          }
          vm.cmpProps[key] = newValue;
          componentValueMutated(vm, key);
        },
        enumerable: true,
        configurable: true
      };
    }
    function createPublicAccessorDescriptor(key, descriptor) {
      const {
        get,
        set,
        enumerable,
        configurable
      } = descriptor;
      assert.invariant(isFunction$1(get), `Invalid public accessor ${toString$1(key)} decorated with @api. The property is missing a getter.`);
      return {
        get() {
          {
            // Assert that the this value is an actual Component with an associated VM.
            getAssociatedVM(this);
          }
          return get.call(this);
        },
        set(newValue) {
          const vm = getAssociatedVM(this);
          {
            const vmBeingRendered = getVMBeingRendered();
            if (isInvokingRender) {
              logError(`render() method has side effects on the state of property "${toString$1(key)}"`, isNull(vmBeingRendered) ? vm : vmBeingRendered);
            }
            if (isUpdatingTemplate) {
              logError(`Updating the template has side effects on the state of property "${toString$1(key)}"`, isNull(vmBeingRendered) ? vm : vmBeingRendered);
            }
          }
          if (set) {
            set.call(this, newValue);
          } else {
            logError(`Invalid attempt to set a new value for property "${toString$1(key)}" that does not has a setter decorated with @api.`, vm);
          }
        },
        enumerable,
        configurable
      };
    }
    function internalTrackDecorator(key) {
      return {
        get() {
          const vm = getAssociatedVM(this);
          componentValueObserved(vm, key);
          return vm.cmpFields[key];
        },
        set(newValue) {
          const vm = getAssociatedVM(this);
          {
            const vmBeingRendered = getVMBeingRendered();
            if (isInvokingRender) {
              logError(`${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
            }
            if (isUpdatingTemplate) {
              logError(`Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
            }
          }
          const reactiveOrAnyValue = getReactiveProxy(newValue);
          updateComponentValue(vm, key, reactiveOrAnyValue);
        },
        enumerable: true,
        configurable: true
      };
    }
    function internalWireFieldDecorator(key) {
      return {
        get() {
          const vm = getAssociatedVM(this);
          componentValueObserved(vm, key);
          return vm.cmpFields[key];
        },
        set(value) {
          const vm = getAssociatedVM(this);
          /**
           * Reactivity for wired fields is provided in wiring.
           * We intentionally add reactivity here since this is just
           * letting the author to do the wrong thing, but it will keep our
           * system to be backward compatible.
           */
          updateComponentValue(vm, key, value);
        },
        enumerable: true,
        configurable: true
      };
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function getClassDescriptorType(descriptor) {
      if (isFunction$1(descriptor.value)) {
        return "method" /* DescriptorType.Method */;
      } else if (isFunction$1(descriptor.set) || isFunction$1(descriptor.get)) {
        return "accessor" /* DescriptorType.Accessor */;
      } else {
        return "field" /* DescriptorType.Field */;
      }
    }

    function validateObservedField(Ctor, fieldName, descriptor) {
      if (!isUndefined$1(descriptor)) {
        const type = getClassDescriptorType(descriptor);
        const message = `Invalid observed ${fieldName} field. Found a duplicate ${type} with the same name.`;
        // TODO [#3408]: this should throw, not log
        logError(message);
      }
    }
    function validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor) {
      if (!isUndefined$1(descriptor)) {
        const type = getClassDescriptorType(descriptor);
        // TODO [#3408]: this should throw, not log
        logError(`Invalid @track ${fieldName} field. Found a duplicate ${type} with the same name.`);
      }
    }
    function validateFieldDecoratedWithWire(Ctor, fieldName, descriptor) {
      if (!isUndefined$1(descriptor)) {
        const type = getClassDescriptorType(descriptor);
        // TODO [#3408]: this should throw, not log
        logError(`Invalid @wire ${fieldName} field. Found a duplicate ${type} with the same name.`);
      }
    }
    function validateMethodDecoratedWithWire(Ctor, methodName, descriptor) {
      if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse(descriptor.writable)) {
        // TODO [#3441]: This line of code does not seem possible to reach.
        logError(`Invalid @wire ${methodName} field. The field should have a valid writable descriptor.`);
      }
    }
    function validateFieldDecoratedWithApi(Ctor, fieldName, descriptor) {
      if (!isUndefined$1(descriptor)) {
        const type = getClassDescriptorType(descriptor);
        const message = `Invalid @api ${fieldName} field. Found a duplicate ${type} with the same name.`;
        // TODO [#3408]: this should throw, not log
        logError(message);
      }
    }
    function validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor) {
      if (isFunction$1(descriptor.set)) {
        if (!isFunction$1(descriptor.get)) {
          // TODO [#3441]: This line of code does not seem possible to reach.
          logError(`Missing getter for property ${fieldName} decorated with @api in ${Ctor}. You cannot have a setter without the corresponding getter.`);
        }
      } else if (!isFunction$1(descriptor.get)) {
        // TODO [#3441]: This line of code does not seem possible to reach.
        logError(`Missing @api get ${fieldName} accessor.`);
      }
    }
    function validateMethodDecoratedWithApi(Ctor, methodName, descriptor) {
      if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse(descriptor.writable)) {
        // TODO [#3441]: This line of code does not seem possible to reach.
        logError(`Invalid @api ${methodName} method.`);
      }
    }
    /**
     * INTERNAL: This function can only be invoked by compiled code. The compiler
     * will prevent this function from being imported by user-land code.
     */
    function registerDecorators(Ctor, meta) {
      const proto = Ctor.prototype;
      const {
        publicProps,
        publicMethods,
        wire,
        track,
        fields
      } = meta;
      const apiMethods = create(null);
      const apiFields = create(null);
      const wiredMethods = create(null);
      const wiredFields = create(null);
      const observedFields = create(null);
      const apiFieldsConfig = create(null);
      let descriptor;
      if (!isUndefined$1(publicProps)) {
        for (const fieldName in publicProps) {
          const propConfig = publicProps[fieldName];
          apiFieldsConfig[fieldName] = propConfig.config;
          descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
          if (propConfig.config > 0) {
            if (isUndefined$1(descriptor)) {
              // TODO [#3441]: This line of code does not seem possible to reach.
              throw new Error();
            }
            // accessor declaration
            {
              validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor);
            }
            descriptor = createPublicAccessorDescriptor(fieldName, descriptor);
          } else {
            // field declaration
            {
              validateFieldDecoratedWithApi(Ctor, fieldName, descriptor);
            }
            // [W-9927596] If a component has both a public property and a private setter/getter
            // with the same name, the property is defined as a public accessor. This branch is
            // only here for backward compatibility reasons.
            if (!isUndefined$1(descriptor) && !isUndefined$1(descriptor.get)) {
              descriptor = createPublicAccessorDescriptor(fieldName, descriptor);
            } else {
              descriptor = createPublicPropertyDescriptor(fieldName);
            }
          }
          apiFields[fieldName] = descriptor;
          defineProperty(proto, fieldName, descriptor);
        }
      }
      if (!isUndefined$1(publicMethods)) {
        forEach.call(publicMethods, methodName => {
          descriptor = getOwnPropertyDescriptor$1(proto, methodName);
          {
            validateMethodDecoratedWithApi(Ctor, methodName, descriptor);
          }
          if (isUndefined$1(descriptor)) {
            throw new Error();
          }
          apiMethods[methodName] = descriptor;
        });
      }
      if (!isUndefined$1(wire)) {
        for (const fieldOrMethodName in wire) {
          const {
            adapter,
            method,
            config: configCallback,
            dynamic = []
          } = wire[fieldOrMethodName];
          descriptor = getOwnPropertyDescriptor$1(proto, fieldOrMethodName);
          if (method === 1) {
            {
              if (!adapter) {
                // TODO [#3408]: this should throw, not log
                logError(`@wire on method "${fieldOrMethodName}": adapter id must be truthy.`);
              }
              validateMethodDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
            }
            if (isUndefined$1(descriptor)) {
              throw new Error();
            }
            wiredMethods[fieldOrMethodName] = descriptor;
            storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic);
          } else {
            {
              if (!adapter) {
                // TODO [#3408]: this should throw, not log
                logError(`@wire on field "${fieldOrMethodName}": adapter id must be truthy.`);
              }
              validateFieldDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
            }
            descriptor = internalWireFieldDecorator(fieldOrMethodName);
            wiredFields[fieldOrMethodName] = descriptor;
            storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic);
            defineProperty(proto, fieldOrMethodName, descriptor);
          }
        }
      }
      if (!isUndefined$1(track)) {
        for (const fieldName in track) {
          descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
          {
            validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor);
          }
          descriptor = internalTrackDecorator(fieldName);
          defineProperty(proto, fieldName, descriptor);
        }
      }
      if (!isUndefined$1(fields)) {
        for (let i = 0, n = fields.length; i < n; i++) {
          const fieldName = fields[i];
          descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
          {
            validateObservedField(Ctor, fieldName, descriptor);
          }
          // [W-9927596] Only mark a field as observed whenever it isn't a duplicated public nor
          // tracked property. This is only here for backward compatibility purposes.
          const isDuplicatePublicProp = !isUndefined$1(publicProps) && fieldName in publicProps;
          const isDuplicateTrackedProp = !isUndefined$1(track) && fieldName in track;
          if (!isDuplicatePublicProp && !isDuplicateTrackedProp) {
            observedFields[fieldName] = createObservedFieldPropertyDescriptor(fieldName);
          }
        }
      }
      setDecoratorsMeta(Ctor, {
        apiMethods,
        apiFields,
        apiFieldsConfig,
        wiredMethods,
        wiredFields,
        observedFields
      });
      return Ctor;
    }
    const signedDecoratorToMetaMap = new Map();
    function setDecoratorsMeta(Ctor, meta) {
      signedDecoratorToMetaMap.set(Ctor, meta);
    }
    const defaultMeta = {
      apiMethods: EmptyObject,
      apiFields: EmptyObject,
      apiFieldsConfig: EmptyObject,
      wiredMethods: EmptyObject,
      wiredFields: EmptyObject,
      observedFields: EmptyObject
    };
    function getDecoratorsMeta(Ctor) {
      const meta = signedDecoratorToMetaMap.get(Ctor);
      return isUndefined$1(meta) ? defaultMeta : meta;
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    let warned = false;
    function checkVersionMismatch(func, type) {
      const versionMatcher = func.toString().match(LWC_VERSION_COMMENT_REGEX);
      if (!isNull(versionMatcher) && !warned) {
        const version = versionMatcher[1];
        const [major, minor] = version.split('.');
        const [expectedMajor, expectedMinor] = LWC_VERSION.split('.');
        if (major !== expectedMajor || minor !== expectedMinor) {
          warned = true; // only warn once to avoid flooding the console
          // stylesheets and templates do not have user-meaningful names, but components do
          const friendlyName = type === 'component' ? `${type} ${func.name}` : type;
          logError(`LWC WARNING: current engine is v${LWC_VERSION}, but ${friendlyName} was compiled with v${version}.\nPlease update your compiled code or LWC engine so that the versions match.\nNo further warnings will appear.`);
        }
      }
    }
    const signedTemplateSet = new Set();
    function defaultEmptyTemplate() {
      return [];
    }
    signedTemplateSet.add(defaultEmptyTemplate);
    function isTemplateRegistered(tpl) {
      return signedTemplateSet.has(tpl);
    }
    /**
     * INTERNAL: This function can only be invoked by compiled code. The compiler
     * will prevent this function from being imported by userland code.
     */
    function registerTemplate(tpl) {
      {
        checkVersionMismatch(tpl, 'template');
      }
      signedTemplateSet.add(tpl);
      // chaining this method as a way to wrap existing
      // assignment of templates easily, without too much transformation
      return tpl;
    }
    /**
     * EXPERIMENTAL: This function acts like a hook for Lightning Locker Service and other similar
     * libraries to sanitize vulnerable attributes.
     */
    function sanitizeAttribute(tagName, namespaceUri, attrName, attrValue) {
      // locker-service patches this function during runtime to sanitize vulnerable attributes. When
      // ran off-core this function becomes a noop and returns the user authored value.
      return attrValue;
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    /**
     * This module is responsible for creating the base bridge class BaseBridgeElement
     * that represents the HTMLElement extension used for any LWC inserted in the DOM.
     */
    // A bridge descriptor is a descriptor whose job is just to get the component instance
    // from the element instance, and get the value or set a new value on the component.
    // This means that across different elements, similar names can get the exact same
    // descriptor, so we can cache them:
    const cachedGetterByKey = create(null);
    const cachedSetterByKey = create(null);
    function createGetter(key) {
      let fn = cachedGetterByKey[key];
      if (isUndefined$1(fn)) {
        fn = cachedGetterByKey[key] = function () {
          const vm = getAssociatedVM(this);
          const {
            getHook
          } = vm;
          return getHook(vm.component, key);
        };
      }
      return fn;
    }
    function createSetter(key) {
      let fn = cachedSetterByKey[key];
      if (isUndefined$1(fn)) {
        fn = cachedSetterByKey[key] = function (newValue) {
          const vm = getAssociatedVM(this);
          const {
            setHook
          } = vm;
          newValue = getReadOnlyProxy(newValue);
          setHook(vm.component, key, newValue);
        };
      }
      return fn;
    }
    function createMethodCaller(methodName) {
      return function () {
        const vm = getAssociatedVM(this);
        const {
          callHook,
          component
        } = vm;
        const fn = component[methodName];
        return callHook(vm.component, fn, ArraySlice.call(arguments));
      };
    }
    function createAttributeChangedCallback(attributeToPropMap, superAttributeChangedCallback) {
      return function attributeChangedCallback(attrName, oldValue, newValue) {
        if (oldValue === newValue) {
          // Ignore same values.
          return;
        }
        const propName = attributeToPropMap[attrName];
        if (isUndefined$1(propName)) {
          if (!isUndefined$1(superAttributeChangedCallback)) {
            // delegate unknown attributes to the super.
            // Typescript does not like it when you treat the `arguments` object as an array
            // @ts-ignore type-mismatch
            superAttributeChangedCallback.apply(this, arguments);
          }
          return;
        }
        // Reflect attribute change to the corresponding property when changed from outside.
        this[propName] = newValue;
      };
    }
    function createAccessorThatWarns(propName) {
      let prop;
      return {
        get() {
          logWarn(`The property "${propName}" is not publicly accessible. Add the @api annotation to the property declaration or getter/setter in the component to make it accessible.`);
          return prop;
        },
        set(value) {
          logWarn(`The property "${propName}" is not publicly accessible. Add the @api annotation to the property declaration or getter/setter in the component to make it accessible.`);
          prop = value;
        },
        enumerable: true,
        configurable: true
      };
    }
    function HTMLBridgeElementFactory(SuperClass, publicProperties, methods, observedFields, proto, hasCustomSuperClass) {
      const HTMLBridgeElement = class extends SuperClass {
        /*LWC compiler v5.1.0*/
      };
      // generating the hash table for attributes to avoid duplicate fields and facilitate validation
      // and false positives in case of inheritance.
      const attributeToPropMap = create(null);
      const {
        attributeChangedCallback: superAttributeChangedCallback
      } = SuperClass.prototype;
      const {
        observedAttributes: superObservedAttributes = []
      } = SuperClass;
      const descriptors = create(null);
      // present a hint message so that developers are aware that they have not decorated property with @api
      {
        // TODO [#3761]: enable for components that don't extend from LightningElement
        if (!isUndefined$1(proto) && !isNull(proto) && !hasCustomSuperClass) {
          const nonPublicPropertiesToWarnOn = new Set([
          // getters, setters, and methods
          ...keys(getOwnPropertyDescriptors(proto)),
          // class properties
          ...observedFields]
          // we don't want to override HTMLElement props because these are meaningful in other ways,
          // and can break tooling that expects it to be iterable or defined, e.g. Jest:
          // https://github.com/jestjs/jest/blob/b4c9587/packages/pretty-format/src/plugins/DOMElement.ts#L95
          // It also doesn't make sense to override e.g. "constructor".
          .filter(propName => !(propName in HTMLElementPrototype)));
          for (const propName of nonPublicPropertiesToWarnOn) {
            if (ArrayIndexOf.call(publicProperties, propName) === -1) {
              descriptors[propName] = createAccessorThatWarns(propName);
            }
          }
        }
      }
      // expose getters and setters for each public props on the new Element Bridge
      for (let i = 0, len = publicProperties.length; i < len; i += 1) {
        const propName = publicProperties[i];
        attributeToPropMap[htmlPropertyToAttribute(propName)] = propName;
        descriptors[propName] = {
          get: createGetter(propName),
          set: createSetter(propName),
          enumerable: true,
          configurable: true
        };
      }
      // expose public methods as props on the new Element Bridge
      for (let i = 0, len = methods.length; i < len; i += 1) {
        const methodName = methods[i];
        descriptors[methodName] = {
          value: createMethodCaller(methodName),
          writable: true,
          configurable: true
        };
      }
      // creating a new attributeChangedCallback per bridge because they are bound to the corresponding
      // map of attributes to props. We do this after all other props and methods to avoid the possibility
      // of getting overrule by a class declaration in user-land, and we make it non-writable, non-configurable
      // to preserve this definition.
      descriptors.attributeChangedCallback = {
        value: createAttributeChangedCallback(attributeToPropMap, superAttributeChangedCallback)
      };
      // To avoid leaking private component details, accessing internals from outside a component is not allowed.
      descriptors.attachInternals = {
        set() {
          {
            logWarn('attachInternals cannot be accessed outside of a component. Use this.attachInternals instead.');
          }
        },
        get() {
          {
            logWarn('attachInternals cannot be accessed outside of a component. Use this.attachInternals instead.');
          }
        }
      };
      descriptors.formAssociated = {
        set() {
          {
            logWarn('formAssociated cannot be accessed outside of a component. Set the value within the component class.');
          }
        },
        get() {
          {
            logWarn('formAssociated cannot be accessed outside of a component. Set the value within the component class.');
          }
        }
      };
      // Specify attributes for which we want to reflect changes back to their corresponding
      // properties via attributeChangedCallback.
      defineProperty(HTMLBridgeElement, 'observedAttributes', {
        get() {
          return [...superObservedAttributes, ...keys(attributeToPropMap)];
        }
      });
      defineProperties(HTMLBridgeElement.prototype, descriptors);
      return HTMLBridgeElement;
    }
    const BaseBridgeElement = HTMLBridgeElementFactory(HTMLElementConstructor, getOwnPropertyNames$1(HTMLElementOriginalDescriptors), [], [], null, false);
    {
      // This ARIA reflection only really makes sense in the browser. On the server, there is no `renderedCallback()`,
      // so you cannot do e.g. `this.template.querySelector('x-child').ariaBusy = 'true'`. So we don't need to expose
      // ARIA props outside the LightningElement
      //
      // Apply ARIA reflection to HTMLBridgeElement.prototype. This allows `elm.aria*` property accessors to work from
      // outside a component, and to reflect `aria-*` attrs. This is especially important because the template compiler
      // compiles aria-* attrs on components to aria* props.
      // Note this works regardless of whether the global ARIA reflection polyfill is applied or not.
      //
      // Also note that we apply this to BaseBridgeElement.prototype to avoid excessively redefining property
      // accessors inside the HTMLBridgeElementFactory.
      applyAriaReflection(BaseBridgeElement.prototype);
    }
    freeze(BaseBridgeElement);
    seal(BaseBridgeElement.prototype);

    /*
     * Copyright (c) 2023, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const supportsWeakRefs = typeof WeakRef === 'function' && typeof FinalizationRegistry === 'function';
    // In browsers that doesn't support WeakRefs, the values will still leak, but at least the keys won't
    class LegacyWeakMultiMap {
      constructor() {
        this._map = new WeakMap();
      }
      _getValues(key) {
        let values = this._map.get(key);
        if (isUndefined$1(values)) {
          values = new Set();
          this._map.set(key, values);
        }
        return values;
      }
      get(key) {
        return this._getValues(key);
      }
      add(key, vm) {
        const set = this._getValues(key);
        set.add(vm);
      }
      delete(key) {
        this._map.delete(key);
      }
    }
    // This implementation relies on the WeakRef/FinalizationRegistry proposal.
    // For some background, see: https://github.com/tc39/proposal-weakrefs
    class ModernWeakMultiMap {
      constructor() {
        this._map = new WeakMap();
        this._registry = new FinalizationRegistry(weakRefs => {
          // This should be considered an optional cleanup method to remove GC'ed values from their respective arrays.
          // JS VMs are not obligated to call FinalizationRegistry callbacks.
          // Work backwards, removing stale VMs
          for (let i = weakRefs.length - 1; i >= 0; i--) {
            const vm = weakRefs[i].deref();
            if (isUndefined$1(vm)) {
              ArraySplice.call(weakRefs, i, 1); // remove
            }
          }
        });
      }

      _getWeakRefs(key) {
        let weakRefs = this._map.get(key);
        if (isUndefined$1(weakRefs)) {
          weakRefs = [];
          this._map.set(key, weakRefs);
        }
        return weakRefs;
      }
      get(key) {
        const weakRefs = this._getWeakRefs(key);
        const result = new Set();
        for (const weakRef of weakRefs) {
          const vm = weakRef.deref();
          if (!isUndefined$1(vm)) {
            result.add(vm);
          }
        }
        return result;
      }
      add(key, value) {
        const weakRefs = this._getWeakRefs(key);
        // We could check for duplicate values here, but it doesn't seem worth it.
        // We transform the output into a Set anyway
        ArrayPush$1.call(weakRefs, new WeakRef(value));
        // It's important here not to leak the second argument, which is the "held value." The FinalizationRegistry
        // effectively creates a strong reference between the first argument (the "target") and the held value. When
        // the target is GC'ed, the callback is called, and then the held value is GC'ed.
        // Putting the key here would mean the key is not GC'ed until the value is GC'ed, which defeats the purpose
        // of the WeakMap. Whereas putting the weakRefs array here is fine, because it doesn't have a strong reference
        // to anything. See also this example:
        // https://gist.github.com/nolanlawson/79a3d36e8e6cc25c5048bb17c1795aea
        this._registry.register(value, weakRefs);
      }
      delete(key) {
        this._map.delete(key);
      }
    }
    const WeakMultiMap = supportsWeakRefs ? ModernWeakMultiMap : LegacyWeakMultiMap;

    /*
     * Copyright (c) 2020, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const swappedTemplateMap = new WeakMap();
    const swappedComponentMap = new WeakMap();
    const swappedStyleMap = new WeakMap();
    // The important thing here is the weak values – VMs are transient (one per component instance) and should be GC'ed,
    // so we don't want to create strong references to them.
    // The weak keys are kind of useless, because Templates, LightningElementConstructors, and StylesheetFactories are
    // never GC'ed. But maybe they will be someday, so we may as well use weak keys too.
    const activeTemplates = new WeakMultiMap();
    const activeComponents = new WeakMultiMap();
    const activeStyles = new WeakMultiMap();
    function getTemplateOrSwappedTemplate(tpl) {
      const visited = new Set();
      while (swappedTemplateMap.has(tpl) && !visited.has(tpl)) {
        visited.add(tpl);
        tpl = swappedTemplateMap.get(tpl);
      }
      return tpl;
    }
    function getComponentOrSwappedComponent(Ctor) {
      const visited = new Set();
      while (swappedComponentMap.has(Ctor) && !visited.has(Ctor)) {
        visited.add(Ctor);
        Ctor = swappedComponentMap.get(Ctor);
      }
      return Ctor;
    }
    function getStyleOrSwappedStyle(style) {
      const visited = new Set();
      while (swappedStyleMap.has(style) && !visited.has(style)) {
        visited.add(style);
        style = swappedStyleMap.get(style);
      }
      return style;
    }
    function setActiveVM(vm) {
      // tracking active component
      const Ctor = vm.def.ctor;
      // this will allow us to keep track of the hot components
      activeComponents.add(Ctor, vm);
      // tracking active template
      const tpl = vm.cmpTemplate;
      if (tpl) {
        // this will allow us to keep track of the templates that are
        // being used by a hot component
        activeTemplates.add(tpl, vm);
        // tracking active styles associated to template
        const stylesheets = tpl.stylesheets;
        if (!isUndefined$1(stylesheets)) {
          for (const stylesheet of flattenStylesheets(stylesheets)) {
            // this is necessary because we don't hold the list of styles
            // in the vm, we only hold the selected (already swapped template)
            // but the styles attached to the template might not be the actual
            // active ones, but the swapped versions of those.
            const swappedStylesheet = getStyleOrSwappedStyle(stylesheet);
            // this will allow us to keep track of the stylesheet that are
            // being used by a hot component
            activeStyles.add(swappedStylesheet, vm);
          }
        }
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    /**
     * This module is responsible for producing the ComponentDef object that is always
     * accessible via `vm.def`. This is lazily created during the creation of the first
     * instance of a component class, and shared across all instances.
     *
     * This structure can be used to synthetically create proxies, and understand the
     * shape of a component. It is also used internally to apply extra optimizations.
     */
    const CtorToDefMap = new WeakMap();
    function getCtorProto(Ctor) {
      let proto = getPrototypeOf$1(Ctor);
      if (isNull(proto)) {
        throw new ReferenceError(`Invalid prototype chain for ${Ctor.name}, you must extend LightningElement.`);
      }
      // covering the cases where the ref is circular in AMD
      if (isCircularModuleDependency(proto)) {
        const p = resolveCircularModuleDependency(proto);
        {
          if (isNull(p)) {
            throw new ReferenceError(`Circular module dependency for ${Ctor.name}, must resolve to a constructor that extends LightningElement.`);
          }
        }
        // escape hatch for Locker and other abstractions to provide their own base class instead
        // of our Base class without having to leak it to user-land. If the circular function returns
        // itself, that's the signal that we have hit the end of the proto chain, which must always
        // be base.
        proto = p === proto ? LightningElement : p;
      }
      return proto;
    }
    function createComponentDef(Ctor) {
      const {
        shadowSupportMode: ctorShadowSupportMode,
        renderMode: ctorRenderMode,
        formAssociated: ctorFormAssociated
      } = Ctor;
      {
        const ctorName = Ctor.name;
        // Removing the following assert until https://bugs.webkit.org/show_bug.cgi?id=190140 is fixed.
        // assert.isTrue(ctorName && isString(ctorName), `${toString(Ctor)} should have a "name" property with string value, but found ${ctorName}.`);
        if (!Ctor.constructor) {
          // This error seems impossible to hit, due to an earlier check in `isComponentConstructor()`.
          // But we keep it here just in case.
          logError(`Missing ${ctorName}.constructor, ${ctorName} should have a "constructor" property.`);
        }
        if (!isUndefined$1(ctorShadowSupportMode) && ctorShadowSupportMode !== "any" /* ShadowSupportMode.Any */ && ctorShadowSupportMode !== "reset" /* ShadowSupportMode.Default */ && ctorShadowSupportMode !== "native" /* ShadowSupportMode.Native */) {
          logError(`Invalid value for static property shadowSupportMode: '${ctorShadowSupportMode}'`);
        }
        if (!isUndefined$1(ctorRenderMode) && ctorRenderMode !== 'light' && ctorRenderMode !== 'shadow') {
          logError(`Invalid value for static property renderMode: '${ctorRenderMode}'. renderMode must be either 'light' or 'shadow'.`);
        }
      }
      const decoratorsMeta = getDecoratorsMeta(Ctor);
      const {
        apiFields,
        apiFieldsConfig,
        apiMethods,
        wiredFields,
        wiredMethods,
        observedFields
      } = decoratorsMeta;
      const proto = Ctor.prototype;
      let {
        connectedCallback,
        disconnectedCallback,
        renderedCallback,
        errorCallback,
        formAssociatedCallback,
        formResetCallback,
        formDisabledCallback,
        formStateRestoreCallback,
        render
      } = proto;
      const superProto = getCtorProto(Ctor);
      const hasCustomSuperClass = superProto !== LightningElement;
      const superDef = hasCustomSuperClass ? getComponentInternalDef(superProto) : lightingElementDef;
      const bridge = HTMLBridgeElementFactory(superDef.bridge, keys(apiFields), keys(apiMethods), keys(observedFields), proto, hasCustomSuperClass);
      const props = assign(create(null), superDef.props, apiFields);
      const propsConfig = assign(create(null), superDef.propsConfig, apiFieldsConfig);
      const methods = assign(create(null), superDef.methods, apiMethods);
      const wire = assign(create(null), superDef.wire, wiredFields, wiredMethods);
      connectedCallback = connectedCallback || superDef.connectedCallback;
      disconnectedCallback = disconnectedCallback || superDef.disconnectedCallback;
      renderedCallback = renderedCallback || superDef.renderedCallback;
      errorCallback = errorCallback || superDef.errorCallback;
      formAssociatedCallback = formAssociatedCallback || superDef.formAssociatedCallback;
      formResetCallback = formResetCallback || superDef.formResetCallback;
      formDisabledCallback = formDisabledCallback || superDef.formDisabledCallback;
      formStateRestoreCallback = formStateRestoreCallback || superDef.formStateRestoreCallback;
      render = render || superDef.render;
      let shadowSupportMode = superDef.shadowSupportMode;
      if (!isUndefined$1(ctorShadowSupportMode)) {
        shadowSupportMode = ctorShadowSupportMode;
      }
      let renderMode = superDef.renderMode;
      if (!isUndefined$1(ctorRenderMode)) {
        renderMode = ctorRenderMode === 'light' ? 0 /* RenderMode.Light */ : 1 /* RenderMode.Shadow */;
      }

      let formAssociated = superDef.formAssociated;
      if (!isUndefined$1(ctorFormAssociated)) {
        formAssociated = ctorFormAssociated;
      }
      const template = getComponentRegisteredTemplate(Ctor) || superDef.template;
      const name = Ctor.name || superDef.name;
      // installing observed fields into the prototype.
      defineProperties(proto, observedFields);
      const def = {
        ctor: Ctor,
        name,
        wire,
        props,
        propsConfig,
        methods,
        bridge,
        template,
        renderMode,
        shadowSupportMode,
        formAssociated,
        connectedCallback,
        disconnectedCallback,
        errorCallback,
        formAssociatedCallback,
        formDisabledCallback,
        formResetCallback,
        formStateRestoreCallback,
        renderedCallback,
        render
      };
      // This is a no-op unless Lightning DevTools are enabled.
      instrumentDef(def);
      {
        freeze(Ctor.prototype);
      }
      return def;
    }
    /**
     * EXPERIMENTAL: This function allows for the identification of LWC constructors. This API is
     * subject to change or being removed.
     */
    function isComponentConstructor(ctor) {
      if (!isFunction$1(ctor)) {
        return false;
      }
      // Fast path: LightningElement is part of the prototype chain of the constructor.
      if (ctor.prototype instanceof LightningElement) {
        return true;
      }
      // Slow path: LightningElement is not part of the prototype chain of the constructor, we need
      // climb up the constructor prototype chain to check in case there are circular dependencies
      // to resolve.
      let current = ctor;
      do {
        if (isCircularModuleDependency(current)) {
          const circularResolved = resolveCircularModuleDependency(current);
          // If the circular function returns itself, that's the signal that we have hit the end
          // of the proto chain, which must always be a valid base constructor.
          if (circularResolved === current) {
            return true;
          }
          current = circularResolved;
        }
        if (current === LightningElement) {
          return true;
        }
      } while (!isNull(current) && (current = getPrototypeOf$1(current)));
      // Finally return false if the LightningElement is not part of the prototype chain.
      return false;
    }
    function getComponentInternalDef(Ctor) {
      {
        Ctor = getComponentOrSwappedComponent(Ctor);
      }
      let def = CtorToDefMap.get(Ctor);
      if (isUndefined$1(def)) {
        if (isCircularModuleDependency(Ctor)) {
          const resolvedCtor = resolveCircularModuleDependency(Ctor);
          def = getComponentInternalDef(resolvedCtor);
          // Cache the unresolved component ctor too. The next time if the same unresolved ctor is used,
          // look up the definition in cache instead of re-resolving and recreating the def.
          CtorToDefMap.set(Ctor, def);
          return def;
        }
        if (!isComponentConstructor(Ctor)) {
          throw new TypeError(`${Ctor} is not a valid component, or does not extends LightningElement from "lwc". You probably forgot to add the extend clause on the class declaration.`);
        }
        def = createComponentDef(Ctor);
        CtorToDefMap.set(Ctor, def);
      }
      return def;
    }
    function getComponentHtmlPrototype(Ctor) {
      const def = getComponentInternalDef(Ctor);
      return def.bridge;
    }
    const lightingElementDef = {
      ctor: LightningElement,
      name: LightningElement.name,
      props: lightningBasedDescriptors,
      propsConfig: EmptyObject,
      methods: EmptyObject,
      renderMode: 1 /* RenderMode.Shadow */,
      shadowSupportMode: "reset" /* ShadowSupportMode.Default */,
      formAssociated: undefined,
      wire: EmptyObject,
      bridge: BaseBridgeElement,
      template: defaultEmptyTemplate,
      render: LightningElement.prototype.render
    };

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function makeHostToken(token) {
      // Note: if this ever changes, update the `cssScopeTokens` returned by `@lwc/compiler`
      return `${token}-host`;
    }
    function createInlineStyleVNode(content) {
      return api.h('style', {
        key: 'style',
        attrs: {
          type: 'text/css'
        }
      }, [api.t(content)]);
    }
    // TODO [#3733]: remove support for legacy scope tokens
    function updateStylesheetToken(vm, template, legacy) {
      const {
        elm,
        context,
        renderMode,
        shadowMode,
        renderer: {
          getClassList,
          removeAttribute,
          setAttribute
        }
      } = vm;
      const {
        stylesheets: newStylesheets
      } = template;
      const newStylesheetToken = legacy ? template.legacyStylesheetToken : template.stylesheetToken;
      const {
        stylesheets: newVmStylesheets
      } = vm;
      const isSyntheticShadow = renderMode === 1 /* RenderMode.Shadow */ && shadowMode === 1 /* ShadowMode.Synthetic */;
      const {
        hasScopedStyles
      } = context;
      let newToken;
      let newHasTokenInClass;
      let newHasTokenInAttribute;
      // Reset the styling token applied to the host element.
      let oldToken;
      let oldHasTokenInClass;
      let oldHasTokenInAttribute;
      if (legacy) {
        oldToken = context.legacyStylesheetToken;
        oldHasTokenInClass = context.hasLegacyTokenInClass;
        oldHasTokenInAttribute = context.hasLegacyTokenInAttribute;
      } else {
        oldToken = context.stylesheetToken;
        oldHasTokenInClass = context.hasTokenInClass;
        oldHasTokenInAttribute = context.hasTokenInAttribute;
      }
      if (!isUndefined$1(oldToken)) {
        if (oldHasTokenInClass) {
          getClassList(elm).remove(makeHostToken(oldToken));
        }
        if (oldHasTokenInAttribute) {
          removeAttribute(elm, makeHostToken(oldToken));
        }
      }
      // Apply the new template styling token to the host element, if the new template has any
      // associated stylesheets. In the case of light DOM, also ensure there is at least one scoped stylesheet.
      const hasNewStylesheets = hasStyles(newStylesheets);
      const hasNewVmStylesheets = hasStyles(newVmStylesheets);
      if (hasNewStylesheets || hasNewVmStylesheets) {
        newToken = newStylesheetToken;
      }
      // Set the new styling token on the host element
      if (!isUndefined$1(newToken)) {
        if (hasScopedStyles) {
          getClassList(elm).add(makeHostToken(newToken));
          newHasTokenInClass = true;
        }
        if (isSyntheticShadow) {
          setAttribute(elm, makeHostToken(newToken), '');
          newHasTokenInAttribute = true;
        }
      }
      // Update the styling tokens present on the context object.
      if (legacy) {
        context.legacyStylesheetToken = newToken;
        context.hasLegacyTokenInClass = newHasTokenInClass;
        context.hasLegacyTokenInAttribute = newHasTokenInAttribute;
      } else {
        context.stylesheetToken = newToken;
        context.hasTokenInClass = newHasTokenInClass;
        context.hasTokenInAttribute = newHasTokenInAttribute;
      }
    }
    function evaluateStylesheetsContent(stylesheets, stylesheetToken, vm) {
      const content = [];
      let root;
      for (let i = 0; i < stylesheets.length; i++) {
        let stylesheet = stylesheets[i];
        if (isArray$1(stylesheet)) {
          ArrayPush$1.apply(content, evaluateStylesheetsContent(stylesheet, stylesheetToken, vm));
        } else {
          {
            // Check for compiler version mismatch in dev mode only
            checkVersionMismatch(stylesheet, 'stylesheet');
            // in dev-mode, we support hot swapping of stylesheet, which means that
            // the component instance might be attempting to use an old version of
            // the stylesheet, while internally, we have a replacement for it.
            stylesheet = getStyleOrSwappedStyle(stylesheet);
          }
          const isScopedCss = stylesheet[KEY__SCOPED_CSS];
          if (lwcRuntimeFlags.DISABLE_LIGHT_DOM_UNSCOPED_CSS && !isScopedCss && vm.renderMode === 0 /* RenderMode.Light */) {
            logError('Unscoped CSS is not supported in Light DOM in this environment. Please use scoped CSS ' + '(*.scoped.css) instead of unscoped CSS (*.css). See also: https://sfdc.co/scoped-styles-light-dom');
            continue;
          }
          // Apply the scope token only if the stylesheet itself is scoped, or if we're rendering synthetic shadow.
          const scopeToken = isScopedCss || vm.shadowMode === 1 /* ShadowMode.Synthetic */ && vm.renderMode === 1 /* RenderMode.Shadow */ ? stylesheetToken : undefined;
          // Use the actual `:host` selector if we're rendering global CSS for light DOM, or if we're rendering
          // native shadow DOM. Synthetic shadow DOM never uses `:host`.
          const useActualHostSelector = vm.renderMode === 0 /* RenderMode.Light */ ? !isScopedCss : vm.shadowMode === 0 /* ShadowMode.Native */;
          // Use the native :dir() pseudoclass only in native shadow DOM. Otherwise, in synthetic shadow,
          // we use an attribute selector on the host to simulate :dir().
          let useNativeDirPseudoclass;
          if (vm.renderMode === 1 /* RenderMode.Shadow */) {
            useNativeDirPseudoclass = vm.shadowMode === 0 /* ShadowMode.Native */;
          } else {
            // Light DOM components should only render `[dir]` if they're inside of a synthetic shadow root.
            // At the top level (root is null) or inside of a native shadow root, they should use `:dir()`.
            if (isUndefined$1(root)) {
              // Only calculate the root once as necessary
              root = getNearestShadowComponent(vm);
            }
            useNativeDirPseudoclass = isNull(root) || root.shadowMode === 0 /* ShadowMode.Native */;
          }

          ArrayPush$1.call(content, stylesheet(scopeToken, useActualHostSelector, useNativeDirPseudoclass));
        }
      }
      return content;
    }
    function getStylesheetsContent(vm, template) {
      const {
        stylesheets,
        stylesheetToken
      } = template;
      const {
        stylesheets: vmStylesheets
      } = vm;
      let content = [];
      if (hasStyles(stylesheets)) {
        content = evaluateStylesheetsContent(stylesheets, stylesheetToken, vm);
      }
      // VM (component) stylesheets apply after template stylesheets
      if (hasStyles(vmStylesheets)) {
        ArrayPush$1.apply(content, evaluateStylesheetsContent(vmStylesheets, stylesheetToken, vm));
      }
      return content;
    }
    // It might be worth caching this to avoid doing the lookup repeatedly, but
    // perf testing has not shown it to be a huge improvement yet:
    // https://github.com/salesforce/lwc/pull/2460#discussion_r691208892
    function getNearestShadowComponent(vm) {
      let owner = vm;
      while (!isNull(owner)) {
        if (owner.renderMode === 1 /* RenderMode.Shadow */) {
          return owner;
        }
        owner = owner.owner;
      }
      return owner;
    }
    /**
     * If the component that is currently being rendered uses scoped styles,
     * this returns the unique token for that scoped stylesheet. Otherwise
     * it returns null.
     */
    // TODO [#3733]: remove support for legacy scope tokens
    function getScopeTokenClass(owner, legacy) {
      const {
        cmpTemplate,
        context
      } = owner;
      return context.hasScopedStyles && (legacy ? cmpTemplate === null || cmpTemplate === void 0 ? void 0 : cmpTemplate.legacyStylesheetToken : cmpTemplate === null || cmpTemplate === void 0 ? void 0 : cmpTemplate.stylesheetToken) || null;
    }
    function getNearestNativeShadowComponent(vm) {
      const owner = getNearestShadowComponent(vm);
      if (!isNull(owner) && owner.shadowMode === 1 /* ShadowMode.Synthetic */) {
        // Synthetic-within-native is impossible. So if the nearest shadow component is
        // synthetic, we know we won't find a native component if we go any further.
        return null;
      }
      return owner;
    }
    function createStylesheet(vm, stylesheets) {
      const {
        renderMode,
        shadowMode,
        renderer: {
          insertStylesheet
        }
      } = vm;
      if (renderMode === 1 /* RenderMode.Shadow */ && shadowMode === 1 /* ShadowMode.Synthetic */) {
        for (let i = 0; i < stylesheets.length; i++) {
          insertStylesheet(stylesheets[i]);
        }
      } else if (vm.hydrated) {
        // Note: We need to ensure that during hydration, the stylesheets method is the same as those in ssr.
        //       This works in the client, because the stylesheets are created, and cached in the VM
        //       the first time the VM renders.
        // native shadow or light DOM, SSR
        return ArrayMap.call(stylesheets, createInlineStyleVNode);
      } else {
        // native shadow or light DOM, DOM renderer
        const root = getNearestNativeShadowComponent(vm);
        // null root means a global style
        const target = isNull(root) ? undefined : root.shadowRoot;
        for (let i = 0; i < stylesheets.length; i++) {
          insertStylesheet(stylesheets[i], target);
        }
      }
      return null;
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function isVBaseElement(vnode) {
      const {
        type
      } = vnode;
      return type === 2 /* VNodeType.Element */ || type === 3 /* VNodeType.CustomElement */;
    }

    function isSameVnode(vnode1, vnode2) {
      return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
    }
    function isVCustomElement(vnode) {
      return vnode.type === 3 /* VNodeType.CustomElement */;
    }

    function isVFragment(vnode) {
      return vnode.type === 5 /* VNodeType.Fragment */;
    }

    function isVScopedSlotFragment(vnode) {
      return vnode.type === 6 /* VNodeType.ScopedSlotFragment */;
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const ColonCharCode = 58;
    function patchAttributes(oldVnode, vnode, renderer) {
      const {
        attrs,
        external
      } = vnode.data;
      if (isUndefined$1(attrs)) {
        return;
      }
      const oldAttrs = isNull(oldVnode) ? EmptyObject : oldVnode.data.attrs;
      // Attrs may be the same due to the static content optimization, so we can skip diffing
      if (oldAttrs === attrs) {
        return;
      }
      const {
        elm
      } = vnode;
      const {
        setAttribute,
        removeAttribute,
        setProperty
      } = renderer;
      for (const key in attrs) {
        const cur = attrs[key];
        const old = oldAttrs[key];
        if (old !== cur) {
          let propName;
          // For external custom elements, sniff to see if the attr should be considered a prop.
          // Use kebabCaseToCamelCase directly because we don't want to set props like `ariaLabel` or `tabIndex`
          // on a custom element versus just using the more reliable attribute format.
          if (external && (propName = kebabCaseToCamelCase(key)) in elm) {
            setProperty(elm, propName, cur);
          } else if (StringCharCodeAt.call(key, 3) === ColonCharCode) {
            // Assume xml namespace
            setAttribute(elm, key, cur, XML_NAMESPACE);
          } else if (StringCharCodeAt.call(key, 5) === ColonCharCode) {
            // Assume xlink namespace
            setAttribute(elm, key, cur, XLINK_NAMESPACE);
          } else if (isNull(cur) || isUndefined$1(cur)) {
            removeAttribute(elm, key);
          } else {
            setAttribute(elm, key, cur);
          }
        }
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function isLiveBindingProp(sel, key) {
      // For properties with live bindings, we read values from the DOM element
      // instead of relying on internally tracked values.
      return sel === 'input' && (key === 'value' || key === 'checked');
    }
    function patchProps(oldVnode, vnode, renderer) {
      const {
        props
      } = vnode.data;
      if (isUndefined$1(props)) {
        return;
      }
      let oldProps;
      if (!isNull(oldVnode)) {
        oldProps = oldVnode.data.props;
        // Props may be the same due to the static content optimization, so we can skip diffing
        if (oldProps === props) {
          return;
        }
        if (isUndefined$1(oldProps)) {
          oldProps = EmptyObject;
        }
      }
      const isFirstPatch = isNull(oldVnode);
      const {
        elm,
        sel
      } = vnode;
      const {
        getProperty,
        setProperty
      } = renderer;
      for (const key in props) {
        const cur = props[key];
        // Set the property if it's the first time is is patched or if the previous property is
        // different than the one previously set.
        if (isFirstPatch || cur !== (isLiveBindingProp(sel, key) ? getProperty(elm, key) : oldProps[key]) || !(key in oldProps) // this is required because the above case will pass when `cur` is `undefined` and key is missing in `oldProps`
        ) {
          // Additional verification if properties are supported by the element
          // Validation relies on html properties and public properties being defined on the element,
          // SSR has its own custom validation.
          {
            if (!(key in elm)) {
              logWarn(`Unknown public property "${key}" of element <${elm.tagName.toLowerCase()}>. This is either a typo on the corresponding attribute "${htmlPropertyToAttribute(key)}", or the attribute does not exist in this browser or DOM implementation.`);
            }
          }
          setProperty(elm, key, cur);
        }
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const classNameToClassMap = create(null);
    function getMapFromClassName(className) {
      // Intentionally using == to match undefined and null values from computed style attribute
      if (className == null) {
        return EmptyObject;
      }
      // computed class names must be string
      className = isString(className) ? className : className + '';
      let map = classNameToClassMap[className];
      if (map) {
        return map;
      }
      map = create(null);
      let start = 0;
      let o;
      const len = className.length;
      for (o = 0; o < len; o++) {
        if (StringCharCodeAt.call(className, o) === SPACE_CHAR) {
          if (o > start) {
            map[StringSlice.call(className, start, o)] = true;
          }
          start = o + 1;
        }
      }
      if (o > start) {
        map[StringSlice.call(className, start, o)] = true;
      }
      classNameToClassMap[className] = map;
      {
        // just to make sure that this object never changes as part of the diffing algo
        freeze(map);
      }
      return map;
    }
    function patchClassAttribute(oldVnode, vnode, renderer) {
      const {
        elm,
        data: {
          className: newClass
        }
      } = vnode;
      const oldClass = isNull(oldVnode) ? undefined : oldVnode.data.className;
      if (oldClass === newClass) {
        return;
      }
      const {
        getClassList
      } = renderer;
      const classList = getClassList(elm);
      const newClassMap = getMapFromClassName(newClass);
      const oldClassMap = getMapFromClassName(oldClass);
      let name;
      for (name in oldClassMap) {
        // remove only if it is not in the new class collection and it is not set from within the instance
        if (isUndefined$1(newClassMap[name])) {
          classList.remove(name);
        }
      }
      for (name in newClassMap) {
        if (isUndefined$1(oldClassMap[name])) {
          classList.add(name);
        }
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    // The style property is a string when defined via an expression in the template.
    function patchStyleAttribute(oldVnode, vnode, renderer) {
      const {
        elm,
        data: {
          style: newStyle
        }
      } = vnode;
      const oldStyle = isNull(oldVnode) ? undefined : oldVnode.data.style;
      if (oldStyle === newStyle) {
        return;
      }
      const {
        setAttribute,
        removeAttribute
      } = renderer;
      if (!isString(newStyle) || newStyle === '') {
        removeAttribute(elm, 'style');
      } else {
        setAttribute(elm, 'style', newStyle);
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function applyEventListeners(vnode, renderer) {
      var _a;
      const {
        elm
      } = vnode;
      const on = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.on;
      if (isUndefined$1(on)) {
        return;
      }
      const {
        addEventListener
      } = renderer;
      for (const name in on) {
        const handler = on[name];
        addEventListener(elm, name, handler);
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    // The HTML class property becomes the vnode.data.classMap object when defined as a string in the template.
    // The compiler takes care of transforming the inline classnames into an object. It's faster to set the
    // different classnames properties individually instead of via a string.
    function applyStaticClassAttribute(vnode, renderer) {
      const {
        elm,
        data: {
          classMap
        }
      } = vnode;
      if (isUndefined$1(classMap)) {
        return;
      }
      const {
        getClassList
      } = renderer;
      const classList = getClassList(elm);
      for (const name in classMap) {
        classList.add(name);
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    // The HTML style property becomes the vnode.data.styleDecls object when defined as a string in the template.
    // The compiler takes care of transforming the inline style into an object. It's faster to set the
    // different style properties individually instead of via a string.
    function applyStaticStyleAttribute(vnode, renderer) {
      const {
        elm,
        data: {
          styleDecls
        }
      } = vnode;
      if (isUndefined$1(styleDecls)) {
        return;
      }
      const {
        setCSSStyleProperty
      } = renderer;
      for (let i = 0; i < styleDecls.length; i++) {
        const [prop, value, important] = styleDecls[i];
        setCSSStyleProperty(elm, prop, value, important);
      }
    }

    /*
     * Copyright (c) 2023, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    // Set a ref (lwc:ref) on a VM, from a template API
    function applyRefs(vnode, owner) {
      const {
        data
      } = vnode;
      const {
        ref
      } = data;
      if (isUndefined$1(ref)) {
        return;
      }
      if (isUndefined$1(owner.refVNodes)) {
        throw new Error('refVNodes must be defined when setting a ref');
      }
      // If this method is called, then vm.refVNodes is set as the template has refs.
      // If not, then something went wrong and we threw an error above.
      const refVNodes = owner.refVNodes;
      // In cases of conflict (two elements with the same ref), prefer the last one,
      // in depth-first traversal order. This happens automatically due to how we render
      refVNodes[ref] = vnode;
    }

    /*
     * Copyright (c) 2023, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function traverseAndSetElements(root, parts, renderer) {
      const numParts = parts.length;
      // Optimization given that, in most cases, there will be one part, and it's just the root
      if (numParts === 1) {
        const firstPart = parts[0];
        if (firstPart.partId === 0) {
          // 0 means the root node
          firstPart.elm = root;
          return;
        }
      }
      const partIdsToParts = new Map();
      for (const staticPart of parts) {
        partIdsToParts.set(staticPart.partId, staticPart);
      }
      let numFoundParts = 0;
      const {
        previousSibling,
        getLastChild
      } = renderer;
      const stack = [root];
      let partId = -1;
      // Depth-first traversal. We assign a partId to each element, which is an integer based on traversal order.
      while (stack.length > 0) {
        const elm = ArrayShift.call(stack);
        partId++;
        const part = partIdsToParts.get(partId);
        if (!isUndefined$1(part)) {
          part.elm = elm;
          if (++numFoundParts === numParts) {
            return; // perf optimization - stop traversing once we've found everything we need
          }
        }
        // For depth-first traversal, prepend to the stack in reverse order
        // Note that we traverse using `*Child`/`*Sibling` rather than `children` because the browser uses a linked
        // list under the hood to represent the DOM tree, so it's faster to do this than to create an underlying array
        // by calling `children`.
        let child = getLastChild(elm);
        while (!isNull(child)) {
          ArrayUnshift.call(stack, child);
          child = previousSibling(child);
        }
      }
      {
        assert.isTrue(numFoundParts === numParts, `Should have found all parts by now. Found ${numFoundParts}, needed ${numParts}.`);
      }
    }
    /**
     * Given an array of static parts, do all the mounting required for these parts.
     *
     * @param root - the root element
     * @param vnode - the parent VStatic
     * @param renderer - the renderer to use
     * @param mount - true this is a first (mount) render as opposed to a subsequent (patch) render
     */
    function applyStaticParts(root, vnode, renderer, mount) {
      const {
        parts,
        owner
      } = vnode;
      if (isUndefined$1(parts)) {
        return;
      }
      // This adds `part.elm` to each `part`. We have to do this on every mount/patch because the `parts`
      // array is recreated from scratch every time, so each `part.elm` is now undefined.
      // TODO [#3800]: avoid calling traverseAndSetElements on every re-render
      traverseAndSetElements(root, parts, renderer);
      // Currently only event listeners and refs are supported for static vnodes
      for (const part of parts) {
        if (mount) {
          // Event listeners only need to be applied once when mounting
          applyEventListeners(part, renderer);
        }
        // Refs must be updated after every render due to refVNodes getting reset before every render
        applyRefs(part, owner);
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function patchChildren(c1, c2, parent, renderer) {
      if (hasDynamicChildren(c2)) {
        updateDynamicChildren(c1, c2, parent, renderer);
      } else {
        updateStaticChildren(c1, c2, parent, renderer);
      }
    }
    function patch(n1, n2, parent, renderer) {
      var _a, _b;
      if (n1 === n2) {
        return;
      }
      {
        if (!isSameVnode(n1, n2) &&
        // Currently the only scenario when patch does not receive the same vnodes are for
        // dynamic components. When a dynamic component's constructor changes, the value of its
        // tag name (sel) will be different. The engine will unmount the previous element
        // and mount the new one using the new constructor in patchCustomElement.
        !(isVCustomElement(n1) && isVCustomElement(n2))) {
          throw new Error('Expected these VNodes to be the same: ' + JSON.stringify({
            sel: n1.sel,
            key: n1.key
          }) + ', ' + JSON.stringify({
            sel: n2.sel,
            key: n2.key
          }));
        }
      }
      switch (n2.type) {
        case 0 /* VNodeType.Text */:
          // VText has no special capability, fallback to the owner's renderer
          patchText(n1, n2, renderer);
          break;
        case 1 /* VNodeType.Comment */:
          // VComment has no special capability, fallback to the owner's renderer
          patchComment(n1, n2, renderer);
          break;
        case 4 /* VNodeType.Static */:
          patchStatic(n1, n2, renderer);
          break;
        case 5 /* VNodeType.Fragment */:
          patchFragment(n1, n2, parent, renderer);
          break;
        case 2 /* VNodeType.Element */:
          patchElement(n1, n2, (_a = n2.data.renderer) !== null && _a !== void 0 ? _a : renderer);
          break;
        case 3 /* VNodeType.CustomElement */:
          patchCustomElement(n1, n2, parent, (_b = n2.data.renderer) !== null && _b !== void 0 ? _b : renderer);
          break;
      }
    }
    function mount(node, parent, renderer, anchor) {
      var _a, _b;
      switch (node.type) {
        case 0 /* VNodeType.Text */:
          // VText has no special capability, fallback to the owner's renderer
          mountText(node, parent, anchor, renderer);
          break;
        case 1 /* VNodeType.Comment */:
          // VComment has no special capability, fallback to the owner's renderer
          mountComment(node, parent, anchor, renderer);
          break;
        case 4 /* VNodeType.Static */:
          // VStatic cannot have a custom renderer associated to them, using owner's renderer
          mountStatic(node, parent, anchor, renderer);
          break;
        case 5 /* VNodeType.Fragment */:
          mountFragment(node, parent, anchor, renderer);
          break;
        case 2 /* VNodeType.Element */:
          // If the vnode data has a renderer override use it, else fallback to owner's renderer
          mountElement(node, parent, anchor, (_a = node.data.renderer) !== null && _a !== void 0 ? _a : renderer);
          break;
        case 3 /* VNodeType.CustomElement */:
          // If the vnode data has a renderer override use it, else fallback to owner's renderer
          mountCustomElement(node, parent, anchor, (_b = node.data.renderer) !== null && _b !== void 0 ? _b : renderer);
          break;
      }
    }
    function patchText(n1, n2, renderer) {
      n2.elm = n1.elm;
      if (n2.text !== n1.text) {
        updateTextContent(n2, renderer);
      }
    }
    function mountText(vnode, parent, anchor, renderer) {
      const {
        owner
      } = vnode;
      const {
        createText
      } = renderer;
      const textNode = vnode.elm = createText(vnode.text);
      linkNodeToShadow(textNode, owner, renderer);
      insertNode(textNode, parent, anchor, renderer);
    }
    function patchComment(n1, n2, renderer) {
      n2.elm = n1.elm;
      // FIXME: Comment nodes should be static, we shouldn't need to diff them together. However
      // it is the case today.
      if (n2.text !== n1.text) {
        updateTextContent(n2, renderer);
      }
    }
    function mountComment(vnode, parent, anchor, renderer) {
      const {
        owner
      } = vnode;
      const {
        createComment
      } = renderer;
      const commentNode = vnode.elm = createComment(vnode.text);
      linkNodeToShadow(commentNode, owner, renderer);
      insertNode(commentNode, parent, anchor, renderer);
    }
    function mountFragment(vnode, parent, anchor, renderer) {
      const {
        children
      } = vnode;
      mountVNodes(children, parent, renderer, anchor);
      vnode.elm = vnode.leading.elm;
    }
    function patchFragment(n1, n2, parent, renderer) {
      const {
        children,
        stable
      } = n2;
      if (stable) {
        updateStaticChildren(n1.children, children, parent, renderer);
      } else {
        updateDynamicChildren(n1.children, children, parent, renderer);
      }
      // Note: not reusing n1.elm, because during patching, it may be patched with another text node.
      n2.elm = n2.leading.elm;
    }
    function mountElement(vnode, parent, anchor, renderer) {
      const {
        sel,
        owner,
        data: {
          svg
        }
      } = vnode;
      const {
        createElement
      } = renderer;
      const namespace = isTrue(svg) ? SVG_NAMESPACE : undefined;
      const elm = vnode.elm = createElement(sel, namespace);
      linkNodeToShadow(elm, owner, renderer);
      applyStyleScoping(elm, owner, renderer);
      applyDomManual(elm, vnode);
      applyElementRestrictions(elm, vnode);
      patchElementPropsAndAttrsAndRefs$1(null, vnode, renderer);
      insertNode(elm, parent, anchor, renderer);
      mountVNodes(vnode.children, elm, renderer, null);
    }
    function patchStatic(n1, n2, renderer) {
      const elm = n2.elm = n1.elm;
      // The `refs` object is blown away in every re-render, so we always need to re-apply them
      applyStaticParts(elm, n2, renderer, false);
    }
    function patchElement(n1, n2, renderer) {
      const elm = n2.elm = n1.elm;
      patchElementPropsAndAttrsAndRefs$1(n1, n2, renderer);
      patchChildren(n1.children, n2.children, elm, renderer);
    }
    function mountStatic(vnode, parent, anchor, renderer) {
      const {
        owner
      } = vnode;
      const {
        cloneNode,
        isSyntheticShadowDefined
      } = renderer;
      const elm = vnode.elm = cloneNode(vnode.fragment, true);
      linkNodeToShadow(elm, owner, renderer);
      applyElementRestrictions(elm, vnode);
      // Marks this node as Static to propagate the shadow resolver. must happen after elm is assigned to the proper shadow
      const {
        renderMode,
        shadowMode
      } = owner;
      if (isSyntheticShadowDefined) {
        if (shadowMode === 1 /* ShadowMode.Synthetic */ || renderMode === 0 /* RenderMode.Light */) {
          elm[KEY__SHADOW_STATIC] = true;
        }
      }
      insertNode(elm, parent, anchor, renderer);
      applyStaticParts(elm, vnode, renderer, true);
    }
    function mountCustomElement(vnode, parent, anchor, renderer) {
      const {
        sel,
        owner
      } = vnode;
      const {
        createCustomElement
      } = renderer;
      /**
       * Note: if the upgradable constructor does not expect, or throw when we new it
       * with a callback as the first argument, we could implement a more advanced
       * mechanism that only passes that argument if the constructor is known to be
       * an upgradable custom element.
       */
      let vm;
      const upgradeCallback = elm => {
        // the custom element from the registry is expecting an upgrade callback
        vm = createViewModelHook(elm, vnode, renderer);
      };
      // Should never get a tag with upper case letter at this point; the compiler
      // should produce only tags with lowercase letters. However, the Java
      // compiler may generate tagnames with uppercase letters so - for backwards
      // compatibility, we lower case the tagname here.
      const normalizedTagname = sel.toLowerCase();
      const elm = createCustomElement(normalizedTagname, upgradeCallback);
      vnode.elm = elm;
      vnode.vm = vm;
      linkNodeToShadow(elm, owner, renderer);
      applyStyleScoping(elm, owner, renderer);
      if (vm) {
        allocateChildren(vnode, vm);
      }
      patchElementPropsAndAttrsAndRefs$1(null, vnode, renderer);
      insertNode(elm, parent, anchor, renderer);
      if (vm) {
        {
          if (!lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE) {
            {
              // With synthetic lifecycle callbacks, it's possible for elements to be removed without the engine
              // noticing it (e.g. `appendChild` the same host element twice). This test ensures we don't regress.
              assert.isTrue(vm.state === 0 /* VMState.created */, `${vm} cannot be recycled.`);
            }
            runConnectedCallback(vm);
          }
        }
      }
      mountVNodes(vnode.children, elm, renderer, null);
      if (vm) {
        appendVM(vm);
      }
    }
    function patchCustomElement(n1, n2, parent, renderer) {
      // TODO [#3331]: This if branch should be removed in 246 with lwc:dynamic
      if (n1.ctor !== n2.ctor) {
        // If the constructor differs, unmount the current component and mount a new one using the new
        // constructor.
        const anchor = renderer.nextSibling(n1.elm);
        unmount(n1, parent, renderer, true);
        mountCustomElement(n2, parent, anchor, renderer);
      } else {
        // Otherwise patch the existing component with new props/attrs/etc.
        const elm = n2.elm = n1.elm;
        const vm = n2.vm = n1.vm;
        patchElementPropsAndAttrsAndRefs$1(n1, n2, renderer);
        if (!isUndefined$1(vm)) {
          // in fallback mode, the allocation will always set children to
          // empty and delegate the real allocation to the slot elements
          allocateChildren(n2, vm);
          // Solves an edge case with slotted VFragments in native shadow mode.
          //
          // During allocation, in native shadow, slotted VFragment nodes are flattened and their text delimiters are removed
          // to avoid interfering with native slot behavior. When this happens, if any of the fragments
          // were not stable, the children must go through the dynamic diffing algo.
          //
          // If the new children (n2.children) contain no VFragments, but the previous children (n1.children) were dynamic,
          // the new nodes must be marked dynamic so that all nodes are properly updated. The only indicator that the new
          // nodes need to be dynamic comes from the previous children, so we check that to determine whether we need to
          // mark the new children dynamic.
          //
          // Example:
          // n1.children: [div, VFragment('', div, null, ''), div] => [div, div, null, div]; // marked dynamic
          // n2.children: [div, null, div] => [div, null, div] // marked ???
          const {
            shadowMode,
            renderMode
          } = vm;
          if (shadowMode == 0 /* ShadowMode.Native */ && renderMode !== 0 /* RenderMode.Light */ && hasDynamicChildren(n1.children)) {
            // No-op if children has already been marked dynamic by 'allocateChildren()'.
            markAsDynamicChildren(n2.children);
          }
        }
        // in fallback mode, the children will be always empty, so, nothing
        // will happen, but in native, it does allocate the light dom
        patchChildren(n1.children, n2.children, elm, renderer);
        if (!isUndefined$1(vm)) {
          // this will probably update the shadowRoot, but only if the vm is in a dirty state
          // this is important to preserve the top to bottom synchronous rendering phase.
          rerenderVM(vm);
        }
      }
    }
    function mountVNodes(vnodes, parent, renderer, anchor, start = 0, end = vnodes.length) {
      for (; start < end; ++start) {
        const vnode = vnodes[start];
        if (isVNode(vnode)) {
          mount(vnode, parent, renderer, anchor);
        }
      }
    }
    function unmount(vnode, parent, renderer, doRemove = false) {
      const {
        type,
        elm,
        sel
      } = vnode;
      // When unmounting a VNode subtree not all the elements have to removed from the DOM. The
      // subtree root, is the only element worth unmounting from the subtree.
      if (doRemove && type !== 5 /* VNodeType.Fragment */) {
        // The vnode might or might not have a data.renderer associated to it
        // but the removal used here is from the owner instead.
        removeNode(elm, parent, renderer);
      }
      switch (type) {
        case 5 /* VNodeType.Fragment */:
          {
            unmountVNodes(vnode.children, parent, renderer, doRemove);
            break;
          }
        case 2 /* VNodeType.Element */:
          {
            // Slot content is removed to trigger slotchange event when removing slot.
            // Only required for synthetic shadow.
            const shouldRemoveChildren = sel === 'slot' && vnode.owner.shadowMode === 1 /* ShadowMode.Synthetic */;
            unmountVNodes(vnode.children, elm, renderer, shouldRemoveChildren);
            break;
          }
        case 3 /* VNodeType.CustomElement */:
          {
            const {
              vm
            } = vnode;
            // No need to unmount the children here, `removeVM` will take care of removing the
            // children.
            if (!isUndefined$1(vm)) {
              removeVM(vm);
            }
          }
      }
    }
    function unmountVNodes(vnodes, parent, renderer, doRemove = false, start = 0, end = vnodes.length) {
      for (; start < end; ++start) {
        const ch = vnodes[start];
        if (isVNode(ch)) {
          unmount(ch, parent, renderer, doRemove);
        }
      }
    }
    function isVNode(vnode) {
      return vnode != null;
    }
    function linkNodeToShadow(elm, owner, renderer) {
      const {
        renderRoot,
        renderMode,
        shadowMode
      } = owner;
      const {
        isSyntheticShadowDefined
      } = renderer;
      // TODO [#1164]: this should eventually be done by the polyfill directly
      if (isSyntheticShadowDefined) {
        if (shadowMode === 1 /* ShadowMode.Synthetic */ || renderMode === 0 /* RenderMode.Light */) {
          elm[KEY__SHADOW_RESOLVER] = renderRoot[KEY__SHADOW_RESOLVER];
        }
      }
    }
    function updateTextContent(vnode, renderer) {
      const {
        elm,
        text
      } = vnode;
      const {
        setText
      } = renderer;
      {
        unlockDomMutation();
      }
      setText(elm, text);
      {
        lockDomMutation();
      }
    }
    function insertFragmentOrNode(vnode, parent, anchor, renderer) {
      {
        unlockDomMutation();
      }
      if (isVFragment(vnode)) {
        const children = vnode.children;
        for (let i = 0; i < children.length; i += 1) {
          const child = children[i];
          if (!isNull(child)) {
            renderer.insert(child.elm, parent, anchor);
          }
        }
      } else {
        renderer.insert(vnode.elm, parent, anchor);
      }
      {
        lockDomMutation();
      }
    }
    function insertNode(node, parent, anchor, renderer) {
      {
        unlockDomMutation();
      }
      renderer.insert(node, parent, anchor);
      {
        lockDomMutation();
      }
    }
    function removeNode(node, parent, renderer) {
      {
        unlockDomMutation();
      }
      renderer.remove(node, parent);
      {
        lockDomMutation();
      }
    }
    function patchElementPropsAndAttrsAndRefs$1(oldVnode, vnode, renderer) {
      if (isNull(oldVnode)) {
        applyEventListeners(vnode, renderer);
        applyStaticClassAttribute(vnode, renderer);
        applyStaticStyleAttribute(vnode, renderer);
      }
      // Attrs need to be applied to element before props IE11 will wipe out value on radio inputs if
      // value is set before type=radio.
      patchClassAttribute(oldVnode, vnode, renderer);
      patchStyleAttribute(oldVnode, vnode, renderer);
      patchAttributes(oldVnode, vnode, renderer);
      patchProps(oldVnode, vnode, renderer);
      // The `refs` object is blown away in every re-render, so we always need to re-apply them
      applyRefs(vnode, vnode.owner);
    }
    function applyStyleScoping(elm, owner, renderer) {
      const {
        getClassList
      } = renderer;
      // Set the class name for `*.scoped.css` style scoping.
      const scopeToken = getScopeTokenClass(owner, /* legacy */false);
      if (!isNull(scopeToken)) {
        // TODO [#2762]: this dot notation with add is probably problematic
        // probably we should have a renderer api for just the add operation
        getClassList(elm).add(scopeToken);
      }
      // TODO [#3733]: remove support for legacy scope tokens
      if (lwcRuntimeFlags.ENABLE_LEGACY_SCOPE_TOKENS) {
        const legacyScopeToken = getScopeTokenClass(owner, /* legacy */true);
        if (!isNull(legacyScopeToken)) {
          // TODO [#2762]: this dot notation with add is probably problematic
          // probably we should have a renderer api for just the add operation
          getClassList(elm).add(legacyScopeToken);
        }
      }
      // Set property element for synthetic shadow DOM style scoping.
      const {
        stylesheetToken: syntheticToken
      } = owner.context;
      if (owner.shadowMode === 1 /* ShadowMode.Synthetic */) {
        if (!isUndefined$1(syntheticToken)) {
          elm.$shadowToken$ = syntheticToken;
        }
        if (lwcRuntimeFlags.ENABLE_LEGACY_SCOPE_TOKENS) {
          const legacyToken = owner.context.legacyStylesheetToken;
          if (!isUndefined$1(legacyToken)) {
            elm.$legacyShadowToken$ = legacyToken;
          }
        }
      }
    }
    function applyDomManual(elm, vnode) {
      var _a;
      const {
        owner,
        data: {
          context
        }
      } = vnode;
      if (owner.shadowMode === 1 /* ShadowMode.Synthetic */ && ((_a = context === null || context === void 0 ? void 0 : context.lwc) === null || _a === void 0 ? void 0 : _a.dom) === "manual" /* LwcDomMode.Manual */) {
        elm.$domManual$ = true;
      }
    }
    function applyElementRestrictions(elm, vnode) {
      var _a, _b;
      {
        const isSynthetic = vnode.owner.shadowMode === 1 /* ShadowMode.Synthetic */;
        const isPortal = vnode.type === 2 /* VNodeType.Element */ && ((_b = (_a = vnode.data.context) === null || _a === void 0 ? void 0 : _a.lwc) === null || _b === void 0 ? void 0 : _b.dom) === "manual" /* LwcDomMode.Manual */;
        const isLight = vnode.owner.renderMode === 0 /* RenderMode.Light */;
        patchElementWithRestrictions(elm, {
          isPortal,
          isLight,
          isSynthetic
        });
      }
    }
    function allocateChildren(vnode, vm) {
      // A component with slots will re-render because:
      // 1- There is a change of the internal state.
      // 2- There is a change on the external api (ex: slots)
      //
      // In case #1, the vnodes in the cmpSlots will be reused since they didn't changed. This routine emptied the
      // slotted children when those VCustomElement were rendered and therefore in subsequent calls to allocate children
      // in a reused VCustomElement, there won't be any slotted children.
      // For those cases, we will use the reference for allocated children stored when rendering the fresh VCustomElement.
      //
      // In case #2, we will always get a fresh VCustomElement.
      const children = vnode.aChildren || vnode.children;
      const {
        renderMode,
        shadowMode
      } = vm;
      {
        // If any of the children being allocated is a scoped slot fragment, make sure the receiving
        // component is a light DOM component. This is mainly to validate light dom parent running
        // in native shadow mode.
        if (renderMode !== 0 /* RenderMode.Light */ && ArraySome.call(children, child => !isNull(child) && isVScopedSlotFragment(child))) {
          logError(`Invalid usage of 'lwc:slot-data' on ${getComponentTag(vm)} tag. Scoped slot content can only be passed to a light dom child.`);
        }
      }
      // If any of the children being allocated are VFragments, we remove the text delimiters and flatten all immediate
      // children VFragments to avoid them interfering with default slot behavior.
      const allocatedChildren = flattenFragmentsInChildren(children);
      vnode.children = allocatedChildren;
      vm.aChildren = allocatedChildren;
      if (shadowMode === 1 /* ShadowMode.Synthetic */ || renderMode === 0 /* RenderMode.Light */) {
        // slow path
        allocateInSlot(vm, allocatedChildren, vnode.owner);
        // save the allocated children in case this vnode is reused.
        vnode.aChildren = allocatedChildren;
        // every child vnode is now allocated, and the host should receive none directly, it receives them via the shadow!
        vnode.children = EmptyArray;
      }
    }
    /**
     * Flattens the contents of all VFragments in an array of VNodes, removes the text delimiters on those VFragments, and
     * marks the resulting children array as dynamic. Uses a stack (array) to iteratively traverse the nested VFragments
     * and avoid the perf overhead of creating/destroying throwaway arrays/objects in a recursive approach.
     *
     * With the delimiters removed, the contents are marked dynamic so they are diffed correctly.
     *
     * This function is used for slotted VFragments to avoid the text delimiters interfering with slotting functionality.
     */
    function flattenFragmentsInChildren(children) {
      const flattenedChildren = [];
      // Initialize our stack with the direct children of the custom component and check whether we have a VFragment.
      // If no VFragment is found in children, we don't need to traverse anything or mark the children dynamic and can return early.
      const nodeStack = [];
      let fragmentFound = false;
      for (let i = children.length - 1; i > -1; i -= 1) {
        const child = children[i];
        ArrayPush$1.call(nodeStack, child);
        fragmentFound = fragmentFound || !!(child && isVFragment(child));
      }
      if (!fragmentFound) {
        return children;
      }
      let currentNode;
      while (!isUndefined$1(currentNode = ArrayPop.call(nodeStack))) {
        if (!isNull(currentNode) && isVFragment(currentNode)) {
          const fChildren = currentNode.children;
          // Ignore the start and end text node delimiters
          for (let i = fChildren.length - 2; i > 0; i -= 1) {
            ArrayPush$1.call(nodeStack, fChildren[i]);
          }
        } else {
          ArrayPush$1.call(flattenedChildren, currentNode);
        }
      }
      // We always mark the children as dynamic because nothing generates stable VFragments yet.
      // If/when stable VFragments are generated by the compiler, this code should be updated to
      // not mark dynamic if all flattened VFragments were stable.
      markAsDynamicChildren(flattenedChildren);
      return flattenedChildren;
    }
    function createViewModelHook(elm, vnode, renderer) {
      let vm = getAssociatedVMIfPresent(elm);
      // There is a possibility that a custom element is registered under tagName, in which case, the
      // initialization is already carry on, and there is nothing else to do here since this hook is
      // called right after invoking `document.createElement`.
      if (!isUndefined$1(vm)) {
        return vm;
      }
      const {
        sel,
        mode,
        ctor,
        owner
      } = vnode;
      vm = createVM(elm, ctor, renderer, {
        mode,
        owner,
        tagName: sel
      });
      {
        assert.isTrue(isArray$1(vnode.children), `Invalid vnode for a custom element, it must have children defined.`);
      }
      return vm;
    }
    function allocateInSlot(vm, children, owner) {
      var _a, _b;
      const {
        cmpSlots: {
          slotAssignments: oldSlotsMapping
        }
      } = vm;
      const cmpSlotsMapping = create(null);
      // Collect all slots into cmpSlotsMapping
      for (let i = 0, len = children.length; i < len; i += 1) {
        const vnode = children[i];
        if (isNull(vnode)) {
          continue;
        }
        let slotName = '';
        if (isVBaseElement(vnode)) {
          slotName = (_b = (_a = vnode.data.attrs) === null || _a === void 0 ? void 0 : _a.slot) !== null && _b !== void 0 ? _b : '';
        } else if (isVScopedSlotFragment(vnode)) {
          slotName = vnode.slotName;
        }
        // Can't use toString here because Symbol(1).toString() is 'Symbol(1)'
        // but elm.setAttribute('slot', Symbol(1)) is an error.
        // the following line also throws same error for symbols
        // Similar for Object.create(null)
        const normalizedSlotName = '' + slotName;
        const vnodes = cmpSlotsMapping[normalizedSlotName] = cmpSlotsMapping[normalizedSlotName] || [];
        ArrayPush$1.call(vnodes, vnode);
      }
      vm.cmpSlots = {
        owner,
        slotAssignments: cmpSlotsMapping
      };
      if (isFalse(vm.isDirty)) {
        // We need to determine if the old allocation is really different from the new one
        // and mark the vm as dirty
        const oldKeys = keys(oldSlotsMapping);
        if (oldKeys.length !== keys(cmpSlotsMapping).length) {
          markComponentAsDirty(vm);
          return;
        }
        for (let i = 0, len = oldKeys.length; i < len; i += 1) {
          const key = oldKeys[i];
          if (isUndefined$1(cmpSlotsMapping[key]) || oldSlotsMapping[key].length !== cmpSlotsMapping[key].length) {
            markComponentAsDirty(vm);
            return;
          }
          const oldVNodes = oldSlotsMapping[key];
          const vnodes = cmpSlotsMapping[key];
          for (let j = 0, a = cmpSlotsMapping[key].length; j < a; j += 1) {
            if (oldVNodes[j] !== vnodes[j]) {
              markComponentAsDirty(vm);
              return;
            }
          }
        }
      }
    }
    const DynamicChildren = new WeakSet();
    // dynamic children means it was either generated by an iteration in a template
    // or part of an unstable fragment, and will require a more complex diffing algo.
    function markAsDynamicChildren(children) {
      DynamicChildren.add(children);
    }
    function hasDynamicChildren(children) {
      return DynamicChildren.has(children);
    }
    function createKeyToOldIdx(children, beginIdx, endIdx) {
      const map = {};
      // TODO [#1637]: simplify this by assuming that all vnodes has keys
      for (let j = beginIdx; j <= endIdx; ++j) {
        const ch = children[j];
        if (isVNode(ch)) {
          const {
            key
          } = ch;
          if (key !== undefined) {
            map[key] = j;
          }
        }
      }
      return map;
    }
    function updateDynamicChildren(oldCh, newCh, parent, renderer) {
      let oldStartIdx = 0;
      let newStartIdx = 0;
      let oldEndIdx = oldCh.length - 1;
      let oldStartVnode = oldCh[0];
      let oldEndVnode = oldCh[oldEndIdx];
      const newChEnd = newCh.length - 1;
      let newEndIdx = newChEnd;
      let newStartVnode = newCh[0];
      let newEndVnode = newCh[newEndIdx];
      let oldKeyToIdx;
      let idxInOld;
      let elmToMove;
      let before;
      let clonedOldCh = false;
      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (!isVNode(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
        } else if (!isVNode(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (!isVNode(newStartVnode)) {
          newStartVnode = newCh[++newStartIdx];
        } else if (!isVNode(newEndVnode)) {
          newEndVnode = newCh[--newEndIdx];
        } else if (isSameVnode(oldStartVnode, newStartVnode)) {
          patch(oldStartVnode, newStartVnode, parent, renderer);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (isSameVnode(oldEndVnode, newEndVnode)) {
          patch(oldEndVnode, newEndVnode, parent, renderer);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (isSameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patch(oldStartVnode, newEndVnode, parent, renderer);
          // In the case of fragments, the `elm` property of a vfragment points to the leading
          // anchor. To determine the next sibling of the whole fragment, we need to use the
          // trailing anchor as the argument to nextSibling():
          // [..., [leading, ...content, trailing], nextSibling, ...]
          let anchor;
          if (isVFragment(oldEndVnode)) {
            anchor = renderer.nextSibling(oldEndVnode.trailing.elm);
          } else {
            anchor = renderer.nextSibling(oldEndVnode.elm);
          }
          insertFragmentOrNode(oldStartVnode, parent, anchor, renderer);
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (isSameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patch(oldEndVnode, newStartVnode, parent, renderer);
          insertFragmentOrNode(newStartVnode, parent, oldStartVnode.elm, renderer);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (oldKeyToIdx === undefined) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }
          idxInOld = oldKeyToIdx[newStartVnode.key];
          if (isUndefined$1(idxInOld)) {
            // New element
            mount(newStartVnode, parent, renderer, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            elmToMove = oldCh[idxInOld];
            if (isVNode(elmToMove)) {
              if (elmToMove.sel !== newStartVnode.sel) {
                // New element
                mount(newStartVnode, parent, renderer, oldStartVnode.elm);
              } else {
                patch(elmToMove, newStartVnode, parent, renderer);
                // Delete the old child, but copy the array since it is read-only.
                // The `oldCh` will be GC'ed after `updateDynamicChildren` is complete,
                // so we only care about the `oldCh` object inside this function.
                // To avoid cloning over and over again, we check `clonedOldCh`
                // and only clone once.
                if (!clonedOldCh) {
                  clonedOldCh = true;
                  oldCh = [...oldCh];
                }
                // We've already cloned at least once, so it's no longer read-only
                oldCh[idxInOld] = undefined;
                insertFragmentOrNode(elmToMove, parent, oldStartVnode.elm, renderer);
              }
            }
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
      if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
        if (oldStartIdx > oldEndIdx) {
          // There's some cases in which the sub array of vnodes to be inserted is followed by null(s) and an
          // already processed vnode, in such cases the vnodes to be inserted should be before that processed vnode.
          let i = newEndIdx;
          let n;
          do {
            n = newCh[++i];
          } while (!isVNode(n) && i < newChEnd);
          before = isVNode(n) ? n.elm : null;
          mountVNodes(newCh, parent, renderer, before, newStartIdx, newEndIdx + 1);
        } else {
          unmountVNodes(oldCh, parent, renderer, true, oldStartIdx, oldEndIdx + 1);
        }
      }
    }
    function updateStaticChildren(c1, c2, parent, renderer) {
      const c1Length = c1.length;
      const c2Length = c2.length;
      if (c1Length === 0) {
        // the old list is empty, we can directly insert anything new
        mountVNodes(c2, parent, renderer, null);
        return;
      }
      if (c2Length === 0) {
        // the old list is nonempty and the new list is empty so we can directly remove all old nodes
        // this is the case in which the dynamic children of an if-directive should be removed
        unmountVNodes(c1, parent, renderer, true);
        return;
      }
      // if the old list is not empty, the new list MUST have the same
      // amount of nodes, that's why we call this static children
      let anchor = null;
      for (let i = c2Length - 1; i >= 0; i -= 1) {
        const n1 = c1[i];
        const n2 = c2[i];
        if (n2 !== n1) {
          if (isVNode(n1)) {
            if (isVNode(n2)) {
              if (isSameVnode(n1, n2)) {
                // both vnodes are equivalent, and we just need to patch them
                patch(n1, n2, parent, renderer);
                anchor = n2.elm;
              } else {
                // removing the old vnode since the new one is different
                unmount(n1, parent, renderer, true);
                mount(n2, parent, renderer, anchor);
                anchor = n2.elm;
              }
            } else {
              // removing the old vnode since the new one is null
              unmount(n1, parent, renderer, true);
            }
          } else if (isVNode(n2)) {
            mount(n2, parent, renderer, anchor);
            anchor = n2.elm;
          }
        }
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const SymbolIterator = Symbol.iterator;
    function addVNodeToChildLWC(vnode) {
      ArrayPush$1.call(getVMBeingRendered().velements, vnode);
    }
    // [s]tatic [p]art
    function sp(partId, data) {
      return {
        partId,
        data,
        elm: undefined // elm is defined later
      };
    }
    // [s]coped [s]lot [f]actory
    function ssf(slotName, factory) {
      return {
        type: 6 /* VNodeType.ScopedSlotFragment */,
        factory,
        owner: getVMBeingRendered(),
        elm: undefined,
        sel: undefined,
        key: undefined,
        slotName
      };
    }
    // [st]atic node
    function st(fragment, key, parts) {
      const owner = getVMBeingRendered();
      const vnode = {
        type: 4 /* VNodeType.Static */,
        sel: undefined,
        key,
        elm: undefined,
        fragment,
        owner,
        parts
      };
      return vnode;
    }
    // [fr]agment node
    function fr(key, children, stable) {
      const owner = getVMBeingRendered();
      const useCommentNodes = isAPIFeatureEnabled(5 /* APIFeature.USE_COMMENTS_FOR_FRAGMENT_BOOKENDS */, owner.apiVersion);
      const leading = useCommentNodes ? co('') : t('');
      const trailing = useCommentNodes ? co('') : t('');
      return {
        type: 5 /* VNodeType.Fragment */,
        sel: undefined,
        key,
        elm: undefined,
        children: [leading, ...children, trailing],
        stable,
        owner,
        leading,
        trailing
      };
    }
    // [h]tml node
    function h(sel, data, children = EmptyArray) {
      const vmBeingRendered = getVMBeingRendered();
      {
        assert.isTrue(isString(sel), `h() 1st argument sel must be a string.`);
        assert.isTrue(isObject(data), `h() 2nd argument data must be an object.`);
        assert.isTrue(isArray$1(children), `h() 3rd argument children must be an array.`);
        assert.isTrue('key' in data, ` <${sel}> "key" attribute is invalid or missing for ${vmBeingRendered}. Key inside iterator is either undefined or null.`);
        // checking reserved internal data properties
        assert.isFalse(data.className && data.classMap, `vnode.data.className and vnode.data.classMap ambiguous declaration.`);
        assert.isFalse(data.styleDecls && data.style, `vnode.data.styleDecls and vnode.data.style ambiguous declaration.`);
        if (data.style && !isString(data.style)) {
          logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`, vmBeingRendered);
        }
        forEach.call(children, childVnode => {
          if (childVnode != null) {
            assert.isTrue('type' in childVnode && 'sel' in childVnode && 'elm' in childVnode && 'key' in childVnode, `${childVnode} is not a vnode.`);
          }
        });
      }
      const {
        key
      } = data;
      const vnode = {
        type: 2 /* VNodeType.Element */,
        sel,
        data,
        children,
        elm: undefined,
        key,
        owner: vmBeingRendered
      };
      return vnode;
    }
    // [t]ab[i]ndex function
    function ti(value) {
      // if value is greater than 0, we normalize to 0
      // If value is an invalid tabIndex value (null, undefined, string, etc), we let that value pass through
      // If value is less than -1, we don't care
      const shouldNormalize = value > 0 && !(isTrue(value) || isFalse(value));
      {
        const vmBeingRendered = getVMBeingRendered();
        if (shouldNormalize) {
          logError(`Invalid tabindex value \`${toString$1(value)}\` in template for ${vmBeingRendered}. This attribute must be set to 0 or -1.`, vmBeingRendered);
        }
      }
      return shouldNormalize ? 0 : value;
    }
    // [s]lot element node
    function s(slotName, data, children, slotset) {
      {
        assert.isTrue(isString(slotName), `s() 1st argument slotName must be a string.`);
        assert.isTrue(isObject(data), `s() 2nd argument data must be an object.`);
        assert.isTrue(isArray$1(children), `h() 3rd argument children must be an array.`);
      }
      if (!isUndefined$1(slotset) && !isUndefined$1(slotset.slotAssignments) && !isUndefined$1(slotset.slotAssignments[slotName]) && slotset.slotAssignments[slotName].length !== 0) {
        const newChildren = [];
        const slotAssignments = slotset.slotAssignments[slotName];
        for (let i = 0; i < slotAssignments.length; i++) {
          const vnode = slotAssignments[i];
          if (!isNull(vnode)) {
            const assignedNodeIsScopedSlot = isVScopedSlotFragment(vnode);
            // The only sniff test for a scoped <slot> element is the presence of `slotData`
            const isScopedSlotElement = !isUndefined$1(data.slotData);
            // Check if slot types of parent and child are matching
            if (assignedNodeIsScopedSlot !== isScopedSlotElement) {
              {
                logError(`Mismatched slot types for ${slotName === '' ? '(default)' : slotName} slot. Both parent and child component must use standard type or scoped type for a given slot.`, slotset.owner);
              }
              // Ignore slot content from parent
              continue;
            }
            // If the passed slot content is factory, evaluate it and add the produced vnodes
            if (assignedNodeIsScopedSlot) {
              const vmBeingRenderedInception = getVMBeingRendered();
              // Evaluate in the scope of the slot content's owner
              // if a slotset is provided, there will always be an owner. The only case where owner is
              // undefined is for root components, but root components cannot accept slotted content
              setVMBeingRendered(slotset.owner);
              try {
                // The factory function is a template snippet from the slot set owner's template,
                // hence switch over to the slot set owner's template reactive observer
                const {
                  tro
                } = slotset.owner;
                tro.observe(() => {
                  ArrayPush$1.call(newChildren, vnode.factory(data.slotData, data.key));
                });
              } finally {
                setVMBeingRendered(vmBeingRenderedInception);
              }
            } else {
              // If the slot content is standard type, the content is static, no additional
              // processing needed on the vnode
              ArrayPush$1.call(newChildren, vnode);
            }
          }
        }
        children = newChildren;
      }
      const vmBeingRendered = getVMBeingRendered();
      const {
        renderMode,
        shadowMode,
        apiVersion
      } = vmBeingRendered;
      if (renderMode === 0 /* RenderMode.Light */) {
        // light DOM slots - backwards-compatible behavior uses flattening, new behavior uses fragments
        if (isAPIFeatureEnabled(2 /* APIFeature.USE_FRAGMENTS_FOR_LIGHT_DOM_SLOTS */, apiVersion)) {
          return fr(data.key, children, 0);
        } else {
          sc(children);
          return children;
        }
      }
      if (shadowMode === 1 /* ShadowMode.Synthetic */) {
        // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
        sc(children);
      }
      return h('slot', data, children);
    }
    // [c]ustom element node
    function c(sel, Ctor, data, children = EmptyArray) {
      const vmBeingRendered = getVMBeingRendered();
      {
        assert.isTrue(isString(sel), `c() 1st argument sel must be a string.`);
        assert.isTrue(isFunction$1(Ctor), `c() 2nd argument Ctor must be a function.`);
        assert.isTrue(isObject(data), `c() 3nd argument data must be an object.`);
        assert.isTrue(arguments.length === 3 || isArray$1(children), `c() 4nd argument data must be an array.`);
        // checking reserved internal data properties
        assert.isFalse(data.className && data.classMap, `vnode.data.className and vnode.data.classMap ambiguous declaration.`);
        assert.isFalse(data.styleDecls && data.style, `vnode.data.styleDecls and vnode.data.style ambiguous declaration.`);
        if (data.style && !isString(data.style)) {
          logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`, vmBeingRendered);
        }
        if (arguments.length === 4) {
          forEach.call(children, childVnode => {
            if (childVnode != null) {
              assert.isTrue('type' in childVnode && 'sel' in childVnode && 'elm' in childVnode && 'key' in childVnode, `${childVnode} is not a vnode.`);
            }
          });
        }
      }
      const {
        key
      } = data;
      let elm, aChildren, vm;
      const vnode = {
        type: 3 /* VNodeType.CustomElement */,
        sel,
        data,
        children,
        elm,
        key,
        ctor: Ctor,
        owner: vmBeingRendered,
        mode: 'open',
        aChildren,
        vm
      };
      addVNodeToChildLWC(vnode);
      return vnode;
    }
    // [i]terable node
    function i(iterable, factory) {
      const list = [];
      // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
      sc(list);
      const vmBeingRendered = getVMBeingRendered();
      if (isUndefined$1(iterable) || iterable === null) {
        {
          logError(`Invalid template iteration for value "${toString$1(iterable)}" in ${vmBeingRendered}. It must be an Array or an iterable Object.`, vmBeingRendered);
        }
        return list;
      }
      {
        assert.isFalse(isUndefined$1(iterable[SymbolIterator]), `Invalid template iteration for value \`${toString$1(iterable)}\` in ${vmBeingRendered}. It must be an array-like object and not \`null\` nor \`undefined\`.`);
      }
      const iterator = iterable[SymbolIterator]();
      {
        assert.isTrue(iterator && isFunction$1(iterator.next), `Invalid iterator function for "${toString$1(iterable)}" in ${vmBeingRendered}.`);
      }
      let next = iterator.next();
      let j = 0;
      let {
        value,
        done: last
      } = next;
      let keyMap;
      let iterationError;
      {
        keyMap = create(null);
      }
      while (last === false) {
        // implementing a look-back-approach because we need to know if the element is the last
        next = iterator.next();
        last = next.done;
        // template factory logic based on the previous collected value
        const vnode = factory(value, j, j === 0, last === true);
        if (isArray$1(vnode)) {
          ArrayPush$1.apply(list, vnode);
        } else {
          ArrayPush$1.call(list, vnode);
        }
        {
          const vnodes = isArray$1(vnode) ? vnode : [vnode];
          forEach.call(vnodes, childVnode => {
            if (!isNull(childVnode) && isObject(childVnode) && !isUndefined$1(childVnode.sel)) {
              const {
                key
              } = childVnode;
              if (isString(key) || isNumber(key)) {
                if (keyMap[key] === 1 && isUndefined$1(iterationError)) {
                  iterationError = `Duplicated "key" attribute value for "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. A key with value "${childVnode.key}" appears more than once in the iteration. Key values must be unique numbers or strings.`;
                }
                keyMap[key] = 1;
              } else if (isUndefined$1(iterationError)) {
                iterationError = `Invalid "key" attribute value in "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. Set a unique "key" value on all iterated child elements.`;
              }
            }
          });
        }
        // preparing next value
        j += 1;
        value = next.value;
      }
      {
        if (!isUndefined$1(iterationError)) {
          logError(iterationError, vmBeingRendered);
        }
      }
      return list;
    }
    /**
     * [f]lattening
     */
    function f(items) {
      {
        assert.isTrue(isArray$1(items), 'flattening api can only work with arrays.');
      }
      const len = items.length;
      const flattened = [];
      // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
      sc(flattened);
      for (let j = 0; j < len; j += 1) {
        const item = items[j];
        if (isArray$1(item)) {
          ArrayPush$1.apply(flattened, item);
        } else {
          ArrayPush$1.call(flattened, item);
        }
      }
      return flattened;
    }
    // [t]ext node
    function t(text) {
      let sel, key, elm;
      return {
        type: 0 /* VNodeType.Text */,
        sel,
        text,
        elm,
        key,
        owner: getVMBeingRendered()
      };
    }
    // [co]mment node
    function co(text) {
      let sel, elm;
      return {
        type: 1 /* VNodeType.Comment */,
        sel,
        text,
        elm,
        key: 'c',
        owner: getVMBeingRendered()
      };
    }
    // [d]ynamic text
    function d(value) {
      return value == null ? '' : String(value);
    }
    // [b]ind function
    function b(fn) {
      const vmBeingRendered = getVMBeingRendered();
      if (isNull(vmBeingRendered)) {
        throw new Error();
      }
      const vm = vmBeingRendered;
      return function (event) {
        invokeEventListener(vm, fn, vm.component, event);
      };
    }
    // [k]ey function
    function k(compilerKey, obj) {
      switch (typeof obj) {
        case 'number':
        case 'string':
          return compilerKey + ':' + obj;
        case 'object':
          {
            logError(`Invalid key value "${obj}" in ${getVMBeingRendered()}. Key must be a string or number.`);
          }
      }
    }
    // [g]lobal [id] function
    function gid(id) {
      const vmBeingRendered = getVMBeingRendered();
      if (isUndefined$1(id) || id === '') {
        {
          logError(`Invalid id value "${id}". The id attribute must contain a non-empty string.`, vmBeingRendered);
        }
        return id;
      }
      // We remove attributes when they are assigned a value of null
      if (isNull(id)) {
        return null;
      }
      const {
        idx,
        shadowMode
      } = vmBeingRendered;
      if (shadowMode === 1 /* ShadowMode.Synthetic */) {
        return StringReplace.call(id, /\S+/g, id => `${id}-${idx}`);
      }
      return id;
    }
    // [f]ragment [id] function
    function fid(url) {
      const vmBeingRendered = getVMBeingRendered();
      if (isUndefined$1(url) || url === '') {
        {
          if (isUndefined$1(url)) {
            logError(`Undefined url value for "href" or "xlink:href" attribute. Expected a non-empty string.`, vmBeingRendered);
          }
        }
        return url;
      }
      // We remove attributes when they are assigned a value of null
      if (isNull(url)) {
        return null;
      }
      const {
        idx,
        shadowMode
      } = vmBeingRendered;
      // Apply transformation only for fragment-only-urls, and only in shadow DOM
      if (shadowMode === 1 /* ShadowMode.Synthetic */ && /^#/.test(url)) {
        return `${url}-${idx}`;
      }
      return url;
    }
    /**
     * [ddc] - create a (deprecated) dynamic component via `<x-foo lwc:dynamic={Ctor}>`
     *
     * TODO [#3331]: remove usage of lwc:dynamic in 246
     */
    function ddc(sel, Ctor, data, children = EmptyArray) {
      {
        assert.isTrue(isString(sel), `dc() 1st argument sel must be a string.`);
        assert.isTrue(isObject(data), `dc() 3nd argument data must be an object.`);
        assert.isTrue(arguments.length === 3 || isArray$1(children), `dc() 4nd argument data must be an array.`);
      }
      // null or undefined values should produce a null value in the VNodes
      if (isNull(Ctor) || isUndefined$1(Ctor)) {
        return null;
      }
      if (!isComponentConstructor(Ctor)) {
        throw new Error(`Invalid LWC Constructor ${toString$1(Ctor)} for custom element <${sel}>.`);
      }
      return c(sel, Ctor, data, children);
    }
    /**
     * [dc] - create a dynamic component via `<lwc:component lwc:is={Ctor}>`
     */
    function dc(Ctor, data, children = EmptyArray) {
      {
        assert.isTrue(isObject(data), `dc() 2nd argument data must be an object.`);
        assert.isTrue(arguments.length === 3 || isArray$1(children), `dc() 3rd argument data must be an array.`);
      }
      // Null or undefined values should produce a null value in the VNodes.
      // This is the only value at compile time as the constructor will not be known.
      if (isNull(Ctor) || isUndefined$1(Ctor)) {
        return null;
      }
      if (!isComponentConstructor(Ctor)) {
        throw new Error(`Invalid constructor ${toString$1(Ctor)} is not a LightningElement constructor.`);
      }
      // Look up the dynamic component's name at runtime once the constructor is available.
      // This information is only known at runtime and is stored as part of registerComponent.
      const sel = getComponentRegisteredName(Ctor);
      if (isUndefined$1(sel) || sel === '') {
        throw new Error(`Invalid LWC constructor ${toString$1(Ctor)} does not have a registered name`);
      }
      return c(sel, Ctor, data, children);
    }
    /**
     * slow children collection marking mechanism. this API allows the compiler to signal
     * to the engine that a particular collection of children must be diffed using the slow
     * algo based on keys due to the nature of the list. E.g.:
     *
     *   - slot element's children: the content of the slot has to be dynamic when in synthetic
     *                              shadow mode because the `vnode.children` might be the slotted
     *                              content vs default content, in which case the size and the
     *                              keys are not matching.
     *   - children that contain dynamic components
     *   - children that are produced by iteration
     *
     */
    function sc(vnodes) {
      {
        assert.isTrue(isArray$1(vnodes), 'sc() api can only work with arrays.');
      }
      // We have to mark the vnodes collection as dynamic so we can later on
      // choose to use the snabbdom virtual dom diffing algo instead of our
      // static dummy algo.
      markAsDynamicChildren(vnodes);
      return vnodes;
    }
    /**
     * EXPERIMENTAL: This function acts like a hook for Lightning Locker Service and other similar
     * libraries to sanitize HTML content. This hook process the content passed via the template to
     * lwc:inner-html directive.
     * It is meant to be overridden with setSanitizeHtmlContentHook, it throws an error by default.
     */
    let sanitizeHtmlContentHook = () => {
      // locker-service patches this function during runtime to sanitize HTML content.
      throw new Error('sanitizeHtmlContent hook must be implemented.');
    };
    // [s]anitize [h]tml [c]ontent
    function shc(content) {
      return sanitizeHtmlContentHook();
    }
    const api = freeze({
      s,
      h,
      c,
      i,
      f,
      t,
      d,
      b,
      k,
      co,
      dc,
      fr,
      ti,
      st,
      gid,
      fid,
      shc,
      ssf,
      ddc,
      sp
    });

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const operationIdNameMapping = ['constructor', 'render', 'patch', 'connectedCallback', 'renderedCallback', 'disconnectedCallback', 'errorCallback', 'lwc-hydrate', 'lwc-rehydrate'];
    // Even if all the browser the engine supports implements the UserTiming API, we need to guard the measure APIs.
    // JSDom (used in Jest) for example doesn't implement the UserTiming APIs.
    const isUserTimingSupported = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';
    const start = !isUserTimingSupported ? noop : markName => {
      performance.mark(markName);
    };
    const end = !isUserTimingSupported ? noop : (measureName, markName) => {
      performance.measure(measureName, markName);
      // Clear the created marks and measure to avoid filling the performance entries buffer.
      // Note: Even if the entries get deleted, existing PerformanceObservers preserve a copy of those entries.
      performance.clearMarks(markName);
      performance.clearMeasures(measureName);
    };
    function getOperationName(opId) {
      return operationIdNameMapping[opId];
    }
    function getMeasureName(opId, vm) {
      return `${getComponentTag(vm)} - ${getOperationName(opId)}`;
    }
    function getMarkName(opId, vm) {
      // Adding the VM idx to the mark name creates a unique mark name component instance. This is necessary to produce
      // the right measures for components that are recursive.
      return `${getMeasureName(opId, vm)} - ${vm.idx}`;
    }
    function logOperationStart(opId, vm) {
      {
        const markName = getMarkName(opId, vm);
        start(markName);
      }
    }
    function logOperationEnd(opId, vm) {
      {
        const markName = getMarkName(opId, vm);
        const measureName = getMeasureName(opId, vm);
        end(measureName, markName);
      }
    }
    function logGlobalOperationStart(opId, vm) {
      {
        const opName = getOperationName(opId);
        const markName = isUndefined$1(vm) ? opName : getMarkName(opId, vm);
        start(markName);
      }
    }
    function logGlobalOperationEnd(opId, vm) {
      {
        const opName = getOperationName(opId);
        const markName = isUndefined$1(vm) ? opName : getMarkName(opId, vm);
        end(opName, markName);
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    let isUpdatingTemplate = false;
    let vmBeingRendered = null;
    function getVMBeingRendered() {
      return vmBeingRendered;
    }
    function setVMBeingRendered(vm) {
      vmBeingRendered = vm;
    }
    function validateSlots(vm) {
      const {
        cmpSlots
      } = vm;
      for (const slotName in cmpSlots.slotAssignments) {
        // eslint-disable-next-line @lwc/lwc-internal/no-production-assert
        assert.isTrue(isArray$1(cmpSlots.slotAssignments[slotName]), `Slots can only be set to an array, instead received ${toString$1(cmpSlots.slotAssignments[slotName])} for slot "${slotName}" in ${vm}.`);
      }
    }
    function validateLightDomTemplate(template, vm) {
      if (template === defaultEmptyTemplate) {
        return;
      }
      if (vm.renderMode === 0 /* RenderMode.Light */) {
        if (template.renderMode !== 'light') {
          logError(`Light DOM components can't render shadow DOM templates. Add an 'lwc:render-mode="light"' directive to the root template tag of ${getComponentTag(vm)}.`);
        }
      } else {
        if (!isUndefined$1(template.renderMode)) {
          logError(`Shadow DOM components template can't render light DOM templates. Either remove the 'lwc:render-mode' directive from ${getComponentTag(vm)} or set it to 'lwc:render-mode="shadow"`);
        }
      }
    }
    function buildParseFragmentFn(createFragmentFn) {
      return (strings, ...keys) => {
        const cache = create(null);
        return function () {
          const {
            context: {
              hasScopedStyles,
              stylesheetToken,
              legacyStylesheetToken
            },
            shadowMode,
            renderer
          } = getVMBeingRendered();
          const hasStyleToken = !isUndefined$1(stylesheetToken);
          const isSyntheticShadow = shadowMode === 1 /* ShadowMode.Synthetic */;
          const hasLegacyToken = lwcRuntimeFlags.ENABLE_LEGACY_SCOPE_TOKENS && !isUndefined$1(legacyStylesheetToken);
          let cacheKey = 0;
          if (hasStyleToken && hasScopedStyles) {
            cacheKey |= 1 /* FragmentCache.HAS_SCOPED_STYLE */;
          }

          if (hasStyleToken && isSyntheticShadow) {
            cacheKey |= 2 /* FragmentCache.SHADOW_MODE_SYNTHETIC */;
          }

          if (hasLegacyToken) {
            // This isn't strictly required for prod, but it's required for our karma tests
            // since the lwcRuntimeFlag may change over time
            cacheKey |= 4 /* FragmentCache.HAS_LEGACY_SCOPE_TOKEN */;
          }

          if (!isUndefined$1(cache[cacheKey])) {
            return cache[cacheKey];
          }
          // If legacy stylesheet tokens are required, then add them to the rendered string
          const stylesheetTokenToRender = stylesheetToken + (hasLegacyToken ? ` ${legacyStylesheetToken}` : '');
          const classToken = hasScopedStyles && hasStyleToken ? ' ' + stylesheetTokenToRender : '';
          const classAttrToken = hasScopedStyles && hasStyleToken ? ` class="${stylesheetTokenToRender}"` : '';
          const attrToken = hasStyleToken && isSyntheticShadow ? ' ' + stylesheetTokenToRender : '';
          let htmlFragment = '';
          for (let i = 0, n = keys.length; i < n; i++) {
            switch (keys[i]) {
              case 0:
                // styleToken in existing class attr
                htmlFragment += strings[i] + classToken;
                break;
              case 1:
                // styleToken for added class attr
                htmlFragment += strings[i] + classAttrToken;
                break;
              case 2:
                // styleToken as attr
                htmlFragment += strings[i] + attrToken;
                break;
              case 3:
                // ${1}${2}
                htmlFragment += strings[i] + classAttrToken + attrToken;
                break;
            }
          }
          htmlFragment += strings[strings.length - 1];
          cache[cacheKey] = createFragmentFn(htmlFragment, renderer);
          return cache[cacheKey];
        };
      };
    }
    // Note: at the moment this code executes, we don't have a renderer yet.
    const parseFragment = buildParseFragmentFn((html, renderer) => {
      const {
        createFragment
      } = renderer;
      return createFragment(html);
    });
    function evaluateTemplate(vm, html) {
      {
        assert.isTrue(isFunction$1(html), `evaluateTemplate() second argument must be an imported template instead of ${toString$1(html)}`);
        // in dev-mode, we support hot swapping of templates, which means that
        // the component instance might be attempting to use an old version of
        // the template, while internally, we have a replacement for it.
        html = getTemplateOrSwappedTemplate(html);
      }
      const isUpdatingTemplateInception = isUpdatingTemplate;
      const vmOfTemplateBeingUpdatedInception = vmBeingRendered;
      let vnodes = [];
      runWithBoundaryProtection(vm, vm.owner, () => {
        // pre
        vmBeingRendered = vm;
        logOperationStart(1 /* OperationId.Render */, vm);
      }, () => {
        // job
        const {
          component,
          context,
          cmpSlots,
          cmpTemplate,
          tro
        } = vm;
        tro.observe(() => {
          // Reset the cache memoizer for template when needed.
          if (html !== cmpTemplate) {
            if ("development" !== 'production') {
              validateLightDomTemplate(html, vm);
            }
            // Perf opt: do not reset the shadow root during the first rendering (there is
            // nothing to reset).
            if (!isNull(cmpTemplate)) {
              // It is important to reset the content to avoid reusing similar elements
              // generated from a different template, because they could have similar IDs,
              // and snabbdom just rely on the IDs.
              resetComponentRoot(vm);
            }
            // Check that the template was built by the compiler.
            if (!isTemplateRegistered(html)) {
              throw new TypeError(`Invalid template returned by the render() method on ${vm}. It must return an imported template (e.g.: \`import html from "./${vm.def.name}.html"\`), instead, it has returned: ${toString$1(html)}.`);
            }
            vm.cmpTemplate = html;
            // Create a brand new template cache for the swapped templated.
            context.tplCache = create(null);
            // Set the computeHasScopedStyles property in the context, to avoid recomputing it repeatedly.
            context.hasScopedStyles = computeHasScopedStyles(html, vm);
            // Update the scoping token on the host element.
            updateStylesheetToken(vm, html, /* legacy */false);
            if (lwcRuntimeFlags.ENABLE_LEGACY_SCOPE_TOKENS) {
              updateStylesheetToken(vm, html, /* legacy */true);
            }
            // Evaluate, create stylesheet and cache the produced VNode for future
            // re-rendering.
            const stylesheetsContent = getStylesheetsContent(vm, html);
            context.styleVNodes = stylesheetsContent.length === 0 ? null : createStylesheet(vm, stylesheetsContent);
          }
          if ("development" !== 'production') {
            // validating slots in every rendering since the allocated content might change over time
            validateSlots(vm);
            // add the VM to the list of host VMs that can be re-rendered if html is swapped
            setActiveVM(vm);
          }
          // right before producing the vnodes, we clear up all internal references
          // to custom elements from the template.
          vm.velements = [];
          // Set the global flag that template is being updated
          isUpdatingTemplate = true;
          vnodes = html.call(undefined, api, component, cmpSlots, context.tplCache);
          const {
            styleVNodes
          } = context;
          if (!isNull(styleVNodes)) {
            ArrayUnshift.apply(vnodes, styleVNodes);
          }
        });
      }, () => {
        // post
        isUpdatingTemplate = isUpdatingTemplateInception;
        vmBeingRendered = vmOfTemplateBeingUpdatedInception;
        logOperationEnd(1 /* OperationId.Render */, vm);
      });
      {
        if (!isArray$1(vnodes)) {
          logError(`Compiler should produce html functions that always return an array.`);
        }
      }
      return vnodes;
    }
    function computeHasScopedStylesInStylesheets(stylesheets) {
      if (hasStyles(stylesheets)) {
        for (let i = 0; i < stylesheets.length; i++) {
          if (isTrue(stylesheets[i][KEY__SCOPED_CSS])) {
            return true;
          }
        }
      }
      return false;
    }
    function computeHasScopedStyles(template, vm) {
      const {
        stylesheets
      } = template;
      const vmStylesheets = !isUndefined$1(vm) ? vm.stylesheets : null;
      return computeHasScopedStylesInStylesheets(stylesheets) || computeHasScopedStylesInStylesheets(vmStylesheets);
    }
    function hasStyles(stylesheets) {
      return !isUndefined$1(stylesheets) && !isNull(stylesheets) && stylesheets.length > 0;
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    let isInvokingRender = false;
    let vmBeingConstructed = null;
    function isBeingConstructed(vm) {
      return vmBeingConstructed === vm;
    }
    function invokeComponentCallback(vm, fn, args) {
      const {
        component,
        callHook,
        owner
      } = vm;
      runWithBoundaryProtection(vm, owner, noop, () => {
        callHook(component, fn, args);
      }, noop);
    }
    function invokeComponentConstructor(vm, Ctor) {
      const vmBeingConstructedInception = vmBeingConstructed;
      let error;
      logOperationStart(0 /* OperationId.Constructor */, vm);
      vmBeingConstructed = vm;
      /**
       * Constructors don't need to be wrapped with a boundary because for root elements
       * it should throw, while elements from template are already wrapped by a boundary
       * associated to the diffing algo.
       */
      try {
        // job
        const result = new Ctor();
        // Check indirectly if the constructor result is an instance of LightningElement. Using
        // the "instanceof" operator would not work here since Locker Service provides its own
        // implementation of LightningElement, so we indirectly check if the base constructor is
        // invoked by accessing the component on the vm.
        if (vmBeingConstructed.component !== result) {
          throw new TypeError('Invalid component constructor, the class should extend LightningElement.');
        }
      } catch (e) {
        error = Object(e);
      } finally {
        logOperationEnd(0 /* OperationId.Constructor */, vm);
        vmBeingConstructed = vmBeingConstructedInception;
        if (!isUndefined$1(error)) {
          addErrorComponentStack(vm, error);
          // re-throwing the original error annotated after restoring the context
          throw error; // eslint-disable-line no-unsafe-finally
        }
      }
    }

    function invokeComponentRenderMethod(vm) {
      const {
        def: {
          render
        },
        callHook,
        component,
        owner
      } = vm;
      const isRenderBeingInvokedInception = isInvokingRender;
      const vmBeingRenderedInception = getVMBeingRendered();
      let html;
      let renderInvocationSuccessful = false;
      runWithBoundaryProtection(vm, owner, () => {
        // pre
        isInvokingRender = true;
        setVMBeingRendered(vm);
      }, () => {
        // job
        vm.tro.observe(() => {
          html = callHook(component, render);
          renderInvocationSuccessful = true;
        });
      }, () => {
        // post
        isInvokingRender = isRenderBeingInvokedInception;
        setVMBeingRendered(vmBeingRenderedInception);
      });
      // If render() invocation failed, process errorCallback in boundary and return an empty template
      return renderInvocationSuccessful ? evaluateTemplate(vm, html) : [];
    }
    function invokeEventListener(vm, fn, thisValue, event) {
      const {
        callHook,
        owner
      } = vm;
      runWithBoundaryProtection(vm, owner, noop, () => {
        // job
        if ("development" !== 'production') {
          assert.isTrue(isFunction$1(fn), `Invalid event handler for event '${event.type}' on ${vm}.`);
        }
        callHook(thisValue, fn, [event]);
      }, noop);
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const registeredComponentMap = new Map();
    /**
     * INTERNAL: This function can only be invoked by compiled code. The compiler
     * will prevent this function from being imported by userland code.
     */
    function registerComponent(
    // We typically expect a LightningElementConstructor, but technically you can call this with anything
    Ctor, metadata) {
      if (isFunction$1(Ctor)) {
        {
          // There is no point in running this in production, because the version mismatch check relies
          // on code comments which are stripped out in production by minifiers
          checkVersionMismatch(Ctor, 'component');
        }
        // TODO [#3331]: add validation to check the value of metadata.sel is not an empty string.
        registeredComponentMap.set(Ctor, metadata);
      }
      // chaining this method as a way to wrap existing assignment of component constructor easily,
      // without too much transformation
      return Ctor;
    }
    function getComponentRegisteredTemplate(Ctor) {
      var _a;
      return (_a = registeredComponentMap.get(Ctor)) === null || _a === void 0 ? void 0 : _a.tmpl;
    }
    function getComponentRegisteredName(Ctor) {
      var _a;
      return (_a = registeredComponentMap.get(Ctor)) === null || _a === void 0 ? void 0 : _a.sel;
    }
    function getComponentAPIVersion(Ctor) {
      const metadata = registeredComponentMap.get(Ctor);
      const apiVersion = metadata === null || metadata === void 0 ? void 0 : metadata.apiVersion;
      if (isUndefined$1(apiVersion)) {
        // This should only occur in our Karma tests; in practice every component
        // is registered, and so this code path should not get hit. But to be safe,
        // return the lowest possible version.
        return LOWEST_API_VERSION;
      }
      return apiVersion;
    }
    function getTemplateReactiveObserver(vm) {
      return createReactiveObserver(() => {
        const {
          isDirty
        } = vm;
        if (isFalse(isDirty)) {
          markComponentAsDirty(vm);
          scheduleRehydration(vm);
        }
      });
    }
    function renderComponent(vm) {
      {
        assert.invariant(vm.isDirty, `${vm} is not dirty.`);
      }
      vm.tro.reset();
      const vnodes = invokeComponentRenderMethod(vm);
      vm.isDirty = false;
      vm.isScheduled = false;
      return vnodes;
    }
    function markComponentAsDirty(vm) {
      {
        const vmBeingRendered = getVMBeingRendered();
        assert.isFalse(vm.isDirty, `markComponentAsDirty() for ${vm} should not be called when the component is already dirty.`);
        assert.isFalse(isInvokingRender, `markComponentAsDirty() for ${vm} cannot be called during rendering of ${vmBeingRendered}.`);
        assert.isFalse(isUpdatingTemplate, `markComponentAsDirty() for ${vm} cannot be called while updating template of ${vmBeingRendered}.`);
      }
      vm.isDirty = true;
    }
    const cmpEventListenerMap = new WeakMap();
    function getWrappedComponentsListener(vm, listener) {
      if (!isFunction$1(listener)) {
        throw new TypeError('Expected an EventListener but received ' + typeof listener); // avoiding problems with non-valid listeners
      }

      let wrappedListener = cmpEventListenerMap.get(listener);
      if (isUndefined$1(wrappedListener)) {
        wrappedListener = function (event) {
          invokeEventListener(vm, listener, undefined, event);
        };
        cmpEventListenerMap.set(listener, wrappedListener);
      }
      return wrappedListener;
    }

    /*
     * Copyright (c) 2023, Salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    let idx = 0;
    /** The internal slot used to associate different objects the engine manipulates with the VM */
    const ViewModelReflection = new WeakMap();
    function callHook(cmp, fn, args = []) {
      return fn.apply(cmp, args);
    }
    function setHook(cmp, prop, newValue) {
      cmp[prop] = newValue;
    }
    function getHook(cmp, prop) {
      return cmp[prop];
    }
    function rerenderVM(vm) {
      rehydrate(vm);
    }
    function connectRootElement(elm) {
      const vm = getAssociatedVM(elm);
      logGlobalOperationStart(7 /* OperationId.GlobalHydrate */, vm);
      // Usually means moving the element from one place to another, which is observable via
      // life-cycle hooks.
      if (vm.state === 1 /* VMState.connected */) {
        disconnectRootElement(elm);
      }
      runConnectedCallback(vm);
      rehydrate(vm);
      logGlobalOperationEnd(7 /* OperationId.GlobalHydrate */, vm);
    }
    function disconnectRootElement(elm) {
      const vm = getAssociatedVM(elm);
      resetComponentStateWhenRemoved(vm);
    }
    function appendVM(vm) {
      rehydrate(vm);
    }
    // just in case the component comes back, with this we guarantee re-rendering it
    // while preventing any attempt to rehydration until after reinsertion.
    function resetComponentStateWhenRemoved(vm) {
      const {
        state
      } = vm;
      if (state !== 2 /* VMState.disconnected */) {
        const {
          tro
        } = vm;
        // Making sure that any observing record will not trigger the rehydrated on this vm
        tro.reset();
        runDisconnectedCallback(vm);
        // Spec: https://dom.spec.whatwg.org/#concept-node-remove (step 14-15)
        runChildNodesDisconnectedCallback(vm);
        runLightChildNodesDisconnectedCallback(vm);
      }
    }
    // this method is triggered by the diffing algo only when a vnode from the
    // old vnode.children is removed from the DOM.
    function removeVM(vm) {
      {
        if (!lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE) {
          // With native lifecycle, we cannot be certain that connectedCallback was called before a component
          // was removed from the VDOM. If the component is disconnected, then connectedCallback will not fire
          // in native mode, although it will fire in synthetic mode due to appendChild triggering it.
          // See: W-14037619 for details
          assert.isTrue(vm.state === 1 /* VMState.connected */ || vm.state === 2 /* VMState.disconnected */, `${vm} must have been connected.`);
        }
      }
      resetComponentStateWhenRemoved(vm);
    }
    function getNearestShadowAncestor(owner) {
      let ancestor = owner;
      while (!isNull(ancestor) && ancestor.renderMode === 0 /* RenderMode.Light */) {
        ancestor = ancestor.owner;
      }
      return ancestor;
    }
    function createVM(elm, ctor, renderer, options) {
      const {
        mode,
        owner,
        tagName,
        hydrated
      } = options;
      const def = getComponentInternalDef(ctor);
      const apiVersion = getComponentAPIVersion(ctor);
      const vm = {
        elm,
        def,
        idx: idx++,
        state: 0 /* VMState.created */,
        isScheduled: false,
        isDirty: true,
        tagName,
        mode,
        owner,
        refVNodes: null,
        children: EmptyArray,
        aChildren: EmptyArray,
        velements: EmptyArray,
        cmpProps: create(null),
        cmpFields: create(null),
        cmpSlots: {
          slotAssignments: create(null)
        },
        cmpTemplate: null,
        hydrated: Boolean(hydrated),
        renderMode: def.renderMode,
        context: {
          stylesheetToken: undefined,
          hasTokenInClass: undefined,
          hasTokenInAttribute: undefined,
          legacyStylesheetToken: undefined,
          hasLegacyTokenInClass: undefined,
          hasLegacyTokenInAttribute: undefined,
          hasScopedStyles: undefined,
          styleVNodes: null,
          tplCache: EmptyObject,
          wiredConnecting: EmptyArray,
          wiredDisconnecting: EmptyArray
        },
        // Properties set right after VM creation.
        tro: null,
        shadowMode: null,
        stylesheets: null,
        // Properties set by the LightningElement constructor.
        component: null,
        shadowRoot: null,
        renderRoot: null,
        callHook,
        setHook,
        getHook,
        renderer,
        apiVersion
      };
      {
        vm.debugInfo = create(null);
      }
      vm.stylesheets = computeStylesheets(vm, def.ctor);
      vm.shadowMode = computeShadowMode(def, vm.owner, renderer);
      vm.tro = getTemplateReactiveObserver(vm);
      {
        vm.toString = () => {
          return `[object:vm ${def.name} (${vm.idx})]`;
        };
      }
      // Create component instance associated to the vm and the element.
      invokeComponentConstructor(vm, def.ctor);
      // Initializing the wire decorator per instance only when really needed
      if (hasWireAdapters(vm)) {
        installWireAdapters(vm);
      }
      return vm;
    }
    function validateComponentStylesheets(vm, stylesheets) {
      let valid = true;
      const validate = arrayOrStylesheet => {
        if (isArray$1(arrayOrStylesheet)) {
          for (let i = 0; i < arrayOrStylesheet.length; i++) {
            validate(arrayOrStylesheet[i]);
          }
        } else if (!isFunction$1(arrayOrStylesheet)) {
          // function assumed to be a stylesheet factory
          valid = false;
        }
      };
      if (!isArray$1(stylesheets)) {
        valid = false;
      } else {
        validate(stylesheets);
      }
      return valid;
    }
    // Validate and flatten any stylesheets defined as `static stylesheets`
    function computeStylesheets(vm, ctor) {
      warnOnStylesheetsMutation(ctor);
      const {
        stylesheets
      } = ctor;
      if (!isUndefined$1(stylesheets)) {
        const valid = validateComponentStylesheets(vm, stylesheets);
        if (valid) {
          return flattenStylesheets(stylesheets);
        } else {
          logError(`static stylesheets must be an array of CSS stylesheets. Found invalid stylesheets on <${vm.tagName}>`, vm);
        }
      }
      return null;
    }
    function warnOnStylesheetsMutation(ctor) {
      {
        let {
          stylesheets
        } = ctor;
        defineProperty(ctor, 'stylesheets', {
          enumerable: true,
          configurable: true,
          get() {
            return stylesheets;
          },
          set(newValue) {
            logWarnOnce(`Dynamically setting the "stylesheets" static property on ${ctor.name} ` + 'will not affect the stylesheets injected.');
            stylesheets = newValue;
          }
        });
      }
    }
    // Compute the shadowMode/renderMode without creating a VM. This is used in some scenarios like hydration.
    function computeShadowAndRenderMode(Ctor, renderer) {
      const def = getComponentInternalDef(Ctor);
      const {
        renderMode
      } = def;
      // Assume null `owner` - this is what happens in hydration cases anyway
      const shadowMode = computeShadowMode(def, /* owner */null, renderer);
      return {
        renderMode,
        shadowMode
      };
    }
    function computeShadowMode(def, owner, renderer) {
      // Force the shadow mode to always be native. Used for running tests with synthetic shadow patches
      // on, but components running in actual native shadow mode
      if (lwcRuntimeFlags.ENABLE_FORCE_NATIVE_SHADOW_MODE_FOR_TEST) {
        return 0 /* ShadowMode.Native */;
      }

      const {
        isSyntheticShadowDefined
      } = renderer;
      let shadowMode;
      if (isSyntheticShadowDefined) {
        if (def.renderMode === 0 /* RenderMode.Light */) {
          // ShadowMode.Native implies "not synthetic shadow" which is consistent with how
          // everything defaults to native when the synthetic shadow polyfill is unavailable.
          shadowMode = 0 /* ShadowMode.Native */;
        } else if (lwcRuntimeFlags.ENABLE_MIXED_SHADOW_MODE || def.shadowSupportMode === "native" /* ShadowSupportMode.Native */) {
          if (def.shadowSupportMode === "any" /* ShadowSupportMode.Any */ || def.shadowSupportMode === "native" /* ShadowSupportMode.Native */) {
            shadowMode = 0 /* ShadowMode.Native */;
          } else {
            const shadowAncestor = getNearestShadowAncestor(owner);
            if (!isNull(shadowAncestor) && shadowAncestor.shadowMode === 0 /* ShadowMode.Native */) {
              // Transitive support for native Shadow DOM. A component in native mode
              // transitively opts all of its descendants into native.
              shadowMode = 0 /* ShadowMode.Native */;
            } else {
              // Synthetic if neither this component nor any of its ancestors are configured
              // to be native.
              shadowMode = 1 /* ShadowMode.Synthetic */;
            }
          }
        } else {
          shadowMode = 1 /* ShadowMode.Synthetic */;
        }
      } else {
        // Native if the synthetic shadow polyfill is unavailable.
        shadowMode = 0 /* ShadowMode.Native */;
      }

      return shadowMode;
    }
    function assertIsVM(obj) {
      if (isNull(obj) || !isObject(obj) || !('renderRoot' in obj)) {
        throw new TypeError(`${obj} is not a VM.`);
      }
    }
    function associateVM(obj, vm) {
      ViewModelReflection.set(obj, vm);
    }
    function getAssociatedVM(obj) {
      const vm = ViewModelReflection.get(obj);
      {
        assertIsVM(vm);
      }
      return vm;
    }
    function getAssociatedVMIfPresent(obj) {
      const maybeVm = ViewModelReflection.get(obj);
      {
        if (!isUndefined$1(maybeVm)) {
          assertIsVM(maybeVm);
        }
      }
      return maybeVm;
    }
    function rehydrate(vm) {
      if (isTrue(vm.isDirty)) {
        const children = renderComponent(vm);
        patchShadowRoot(vm, children);
      }
    }
    function patchShadowRoot(vm, newCh) {
      const {
        renderRoot,
        children: oldCh,
        renderer
      } = vm;
      // reset the refs; they will be set during `patchChildren`
      resetRefVNodes(vm);
      // caching the new children collection
      vm.children = newCh;
      if (newCh.length > 0 || oldCh.length > 0) {
        // patch function mutates vnodes by adding the element reference,
        // however, if patching fails it contains partial changes.
        if (oldCh !== newCh) {
          runWithBoundaryProtection(vm, vm, () => {
            // pre
            logOperationStart(2 /* OperationId.Patch */, vm);
          }, () => {
            // job
            patchChildren(oldCh, newCh, renderRoot, renderer);
          }, () => {
            // post
            logOperationEnd(2 /* OperationId.Patch */, vm);
          });
        }
      }
      if (vm.state === 1 /* VMState.connected */) {
        // If the element is connected, that means connectedCallback was already issued, and
        // any successive rendering should finish with the call to renderedCallback, otherwise
        // the connectedCallback will take care of calling it in the right order at the end of
        // the current rehydration process.
        runRenderedCallback(vm);
      }
    }
    function runRenderedCallback(vm) {
      const {
        def: {
          renderedCallback
        }
      } = vm;
      if (!isUndefined$1(renderedCallback)) {
        logOperationStart(4 /* OperationId.RenderedCallback */, vm);
        invokeComponentCallback(vm, renderedCallback);
        logOperationEnd(4 /* OperationId.RenderedCallback */, vm);
      }
    }
    let rehydrateQueue = [];
    function flushRehydrationQueue() {
      logGlobalOperationStart(8 /* OperationId.GlobalRehydrate */);
      {
        assert.invariant(rehydrateQueue.length, `If rehydrateQueue was scheduled, it is because there must be at least one VM on this pending queue instead of ${rehydrateQueue}.`);
      }
      const vms = rehydrateQueue.sort((a, b) => a.idx - b.idx);
      rehydrateQueue = []; // reset to a new queue
      for (let i = 0, len = vms.length; i < len; i += 1) {
        const vm = vms[i];
        try {
          rehydrate(vm);
        } catch (error) {
          if (i + 1 < len) {
            // pieces of the queue are still pending to be rehydrated, those should have priority
            if (rehydrateQueue.length === 0) {
              addCallbackToNextTick(flushRehydrationQueue);
            }
            ArrayUnshift.apply(rehydrateQueue, ArraySlice.call(vms, i + 1));
          }
          // we need to end the measure before throwing.
          logGlobalOperationEnd(8 /* OperationId.GlobalRehydrate */);
          // re-throwing the original error will break the current tick, but since the next tick is
          // already scheduled, it should continue patching the rest.
          throw error; // eslint-disable-line no-unsafe-finally
        }
      }

      logGlobalOperationEnd(8 /* OperationId.GlobalRehydrate */);
    }

    function runConnectedCallback(vm) {
      const {
        state
      } = vm;
      if (state === 1 /* VMState.connected */) {
        return; // nothing to do since it was already connected
      }

      vm.state = 1 /* VMState.connected */;
      if (hasWireAdapters(vm)) {
        connectWireAdapters(vm);
      }
      const {
        connectedCallback
      } = vm.def;
      if (!isUndefined$1(connectedCallback)) {
        logOperationStart(3 /* OperationId.ConnectedCallback */, vm);
        invokeComponentCallback(vm, connectedCallback);
        logOperationEnd(3 /* OperationId.ConnectedCallback */, vm);
      }
      // This test only makes sense in the browser, with synthetic lifecycle, and when reporting is enabled or
      // we're in dev mode. This is to detect a particular issue with synthetic lifecycle.
      if (!lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE && ("development" !== 'production' )) {
        if (!vm.renderer.isConnected(vm.elm)) {
          {
            logWarnOnce(`Element <${vm.tagName}> ` + `fired a \`connectedCallback\` and rendered, but was not connected to the DOM. ` + `Please ensure all components are actually connected to the DOM, e.g. using ` + `\`document.body.appendChild(element)\`. This will not be supported in future versions of ` + `LWC and could cause component errors. For details, see: https://sfdc.co/synthetic-lifecycle`);
          }
          report("ConnectedCallbackWhileDisconnected" /* ReportingEventId.ConnectedCallbackWhileDisconnected */, {
            tagName: vm.tagName
          });
        }
      }
    }
    function hasWireAdapters(vm) {
      return getOwnPropertyNames$1(vm.def.wire).length > 0;
    }
    function runDisconnectedCallback(vm) {
      {
        assert.isTrue(vm.state !== 2 /* VMState.disconnected */, `${vm} must be inserted.`);
      }
      if (isFalse(vm.isDirty)) {
        // this guarantees that if the component is reused/reinserted,
        // it will be re-rendered because we are disconnecting the reactivity
        // linking, so mutations are not automatically reflected on the state
        // of disconnected components.
        vm.isDirty = true;
      }
      vm.state = 2 /* VMState.disconnected */;
      if (hasWireAdapters(vm)) {
        disconnectWireAdapters(vm);
      }
      const {
        disconnectedCallback
      } = vm.def;
      if (!isUndefined$1(disconnectedCallback)) {
        logOperationStart(5 /* OperationId.DisconnectedCallback */, vm);
        invokeComponentCallback(vm, disconnectedCallback);
        logOperationEnd(5 /* OperationId.DisconnectedCallback */, vm);
      }
    }
    function runChildNodesDisconnectedCallback(vm) {
      const {
        velements: vCustomElementCollection
      } = vm;
      // Reporting disconnection for every child in inverse order since they are
      // inserted in reserved order.
      for (let i = vCustomElementCollection.length - 1; i >= 0; i -= 1) {
        const {
          elm
        } = vCustomElementCollection[i];
        // There are two cases where the element could be undefined:
        // * when there is an error during the construction phase, and an error
        //   boundary picks it, there is a possibility that the VCustomElement
        //   is not properly initialized, and therefore is should be ignored.
        // * when slotted custom element is not used by the element where it is
        //   slotted into it, as  a result, the custom element was never
        //   initialized.
        if (!isUndefined$1(elm)) {
          const childVM = getAssociatedVMIfPresent(elm);
          // The VM associated with the element might be associated undefined
          // in the case where the VM failed in the middle of its creation,
          // eg: constructor throwing before invoking super().
          if (!isUndefined$1(childVM)) {
            resetComponentStateWhenRemoved(childVM);
          }
        }
      }
    }
    function runLightChildNodesDisconnectedCallback(vm) {
      const {
        aChildren: adoptedChildren
      } = vm;
      recursivelyDisconnectChildren(adoptedChildren);
    }
    /**
     * The recursion doesn't need to be a complete traversal of the vnode graph,
     * instead it can be partial, when a custom element vnode is found, we don't
     * need to continue into its children because by attempting to disconnect the
     * custom element itself will trigger the removal of anything slotted or anything
     * defined on its shadow.
     */
    function recursivelyDisconnectChildren(vnodes) {
      for (let i = 0, len = vnodes.length; i < len; i += 1) {
        const vnode = vnodes[i];
        if (!isNull(vnode) && !isUndefined$1(vnode.elm)) {
          switch (vnode.type) {
            case 2 /* VNodeType.Element */:
              recursivelyDisconnectChildren(vnode.children);
              break;
            case 3 /* VNodeType.CustomElement */:
              {
                const vm = getAssociatedVM(vnode.elm);
                resetComponentStateWhenRemoved(vm);
                break;
              }
          }
        }
      }
    }
    // This is a super optimized mechanism to remove the content of the root node (shadow root
    // for shadow DOM components and the root element itself for light DOM) without having to go
    // into snabbdom. Especially useful when the reset is a consequence of an error, in which case the
    // children VNodes might not be representing the current state of the DOM.
    function resetComponentRoot(vm) {
      recursivelyRemoveChildren(vm.children, vm);
      vm.children = EmptyArray;
      runChildNodesDisconnectedCallback(vm);
      vm.velements = EmptyArray;
    }
    // Helper function to remove all children of the root node.
    // If the set of children includes VFragment nodes, we need to remove the children of those nodes too.
    // Since VFragments can contain other VFragments, we need to traverse the entire of tree of VFragments.
    // If the set contains no VFragment nodes, no traversal is needed.
    function recursivelyRemoveChildren(vnodes, vm) {
      const {
        renderRoot,
        renderer: {
          remove
        }
      } = vm;
      for (let i = 0, len = vnodes.length; i < len; i += 1) {
        const vnode = vnodes[i];
        if (!isNull(vnode)) {
          // VFragments are special; their .elm property does not point to the root element since they have no single root.
          if (isVFragment(vnode)) {
            recursivelyRemoveChildren(vnode.children, vm);
          } else if (!isUndefined$1(vnode.elm)) {
            remove(vnode.elm, renderRoot);
          }
        }
      }
    }
    function scheduleRehydration(vm) {
      if (isTrue(vm.isScheduled)) {
        return;
      }
      vm.isScheduled = true;
      if (rehydrateQueue.length === 0) {
        addCallbackToNextTick(flushRehydrationQueue);
      }
      ArrayPush$1.call(rehydrateQueue, vm);
    }
    function getErrorBoundaryVM(vm) {
      let currentVm = vm;
      while (!isNull(currentVm)) {
        if (!isUndefined$1(currentVm.def.errorCallback)) {
          return currentVm;
        }
        currentVm = currentVm.owner;
      }
    }
    function runWithBoundaryProtection(vm, owner, pre, job, post) {
      let error;
      pre();
      try {
        job();
      } catch (e) {
        error = Object(e);
      } finally {
        post();
        if (!isUndefined$1(error)) {
          addErrorComponentStack(vm, error);
          const errorBoundaryVm = isNull(owner) ? undefined : getErrorBoundaryVM(owner);
          // Error boundaries are not in effect when server-side rendering. `errorCallback`
          // is intended to allow recovery from errors - changing the state of a component
          // and instigating a re-render. That is at odds with the single-pass, synchronous
          // nature of SSR. For that reason, all errors bubble up to the `renderComponent`
          // call site.
          if (isUndefined$1(errorBoundaryVm)) {
            throw error; // eslint-disable-line no-unsafe-finally
          }

          resetComponentRoot(vm); // remove offenders
          logOperationStart(6 /* OperationId.ErrorCallback */, vm);
          // error boundaries must have an ErrorCallback
          const errorCallback = errorBoundaryVm.def.errorCallback;
          invokeComponentCallback(errorBoundaryVm, errorCallback, [error, error.wcStack]);
          logOperationEnd(6 /* OperationId.ErrorCallback */, vm);
        }
      }
    }
    function runFormAssociatedCustomElementCallback(vm, faceCb) {
      const {
        renderMode,
        shadowMode,
        def: {
          formAssociated
        }
      } = vm;
      // Technically the UpgradableConstructor always sets `static formAssociated = true` but silently fail here to match browser behavior.
      if (isUndefined$1(formAssociated) || isFalse(formAssociated)) {
        {
          logWarn(`Form associated lifecycle methods must have the 'static formAssociated' value set in the component's prototype chain.`);
        }
        return;
      }
      if (shadowMode === 1 /* ShadowMode.Synthetic */ && renderMode !== 0 /* RenderMode.Light */) {
        throw new Error('Form associated lifecycle methods are not available in synthetic shadow. Please use native shadow or light DOM.');
      }
      invokeComponentCallback(vm, faceCb);
    }
    function runFormAssociatedCallback(elm) {
      const vm = getAssociatedVM(elm);
      const {
        formAssociatedCallback
      } = vm.def;
      if (!isUndefined$1(formAssociatedCallback)) {
        runFormAssociatedCustomElementCallback(vm, formAssociatedCallback);
      }
    }
    function runFormDisabledCallback(elm) {
      const vm = getAssociatedVM(elm);
      const {
        formDisabledCallback
      } = vm.def;
      if (!isUndefined$1(formDisabledCallback)) {
        runFormAssociatedCustomElementCallback(vm, formDisabledCallback);
      }
    }
    function runFormResetCallback(elm) {
      const vm = getAssociatedVM(elm);
      const {
        formResetCallback
      } = vm.def;
      if (!isUndefined$1(formResetCallback)) {
        runFormAssociatedCustomElementCallback(vm, formResetCallback);
      }
    }
    function runFormStateRestoreCallback(elm) {
      const vm = getAssociatedVM(elm);
      const {
        formStateRestoreCallback
      } = vm.def;
      if (!isUndefined$1(formStateRestoreCallback)) {
        runFormAssociatedCustomElementCallback(vm, formStateRestoreCallback);
      }
    }
    function resetRefVNodes(vm) {
      const {
        cmpTemplate
      } = vm;
      vm.refVNodes = !isNull(cmpTemplate) && cmpTemplate.hasRefs ? create(null) : null;
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    //
    // The goal of this code is to detect invalid cross-root ARIA references in synthetic shadow DOM.
    // These invalid references should be fixed before the offending components can be migrated to native shadow DOM.
    // When invalid usage is detected, we warn in dev mode and call the reporting API if enabled.
    // See: https://sfdc.co/synthetic-aria
    //
    // Use the unpatched native getElementById/querySelectorAll rather than the synthetic one
    const getElementById = _globalThis[KEY__NATIVE_GET_ELEMENT_BY_ID];
    const querySelectorAll = _globalThis[KEY__NATIVE_QUERY_SELECTOR_ALL];
    // This is a "handoff" from synthetic-shadow to engine-core – we want to clean up after ourselves
    // so nobody else can misuse these global APIs.
    delete _globalThis[KEY__NATIVE_GET_ELEMENT_BY_ID];
    delete _globalThis[KEY__NATIVE_QUERY_SELECTOR_ALL];
    function isSyntheticShadowRootInstance(rootNode) {
      return rootNode !== document && isTrue(rootNode.synthetic);
    }
    function reportViolation$1(source, target, attrName) {
      // The vm is either for the source, the target, or both. Either one or both must be using synthetic
      // shadow for a violation to be detected.
      let vm = getAssociatedVMIfPresent(source.getRootNode().host);
      if (isUndefined$1(vm)) {
        vm = getAssociatedVMIfPresent(target.getRootNode().host);
      }
      if (isUndefined$1(vm)) {
        // vm should never be undefined here, but just to be safe, bail out and don't report
        return;
      }
      report("CrossRootAriaInSyntheticShadow" /* ReportingEventId.CrossRootAriaInSyntheticShadow */, {
        tagName: vm.tagName,
        attributeName: attrName
      });
      {
        // Avoid excessively logging to the console in the case of duplicates.
        logWarnOnce(`Element <${source.tagName.toLowerCase()}> uses attribute "${attrName}" to reference element ` + `<${target.tagName.toLowerCase()}>, which is not in the same shadow root. This will break in native shadow DOM. ` + `For details, see: https://sfdc.co/synthetic-aria`, vm);
      }
    }
    function parseIdRefAttributeValue(attrValue) {
      // split on whitespace and skip empty strings after splitting
      return isString(attrValue) ? ArrayFilter.call(StringSplit.call(attrValue, /\s+/), Boolean) : [];
    }
    function detectSyntheticCrossRootAria(elm, attrName, attrValue) {
      const root = elm.getRootNode();
      if (!isSyntheticShadowRootInstance(root)) {
        return;
      }
      if (attrName === 'id') {
        // elm is the target, find the source
        if (!isString(attrValue) || attrValue.length === 0) {
          // if our id is null or empty, nobody can reference us
          return;
        }
        for (const idRefAttrName of ID_REFERENCING_ATTRIBUTES_SET) {
          // Query all global elements with this attribute. The attribute selector syntax `~=` is for values
          // that reference multiple IDs, separated by whitespace.
          const query = `[${idRefAttrName}~="${CSS.escape(attrValue)}"]`;
          const sourceElements = querySelectorAll.call(document, query);
          for (let i = 0; i < sourceElements.length; i++) {
            const sourceElement = sourceElements[i];
            const sourceRoot = sourceElement.getRootNode();
            if (sourceRoot !== root) {
              reportViolation$1(sourceElement, elm, idRefAttrName);
              break;
            }
          }
        }
      } else {
        // elm is the source, find the target
        const ids = parseIdRefAttributeValue(attrValue);
        for (const id of ids) {
          const target = getElementById.call(document, id);
          if (!isNull(target)) {
            const targetRoot = target.getRootNode();
            if (targetRoot !== root) {
              // target element's shadow root is not the same as ours
              reportViolation$1(elm, target, attrName);
            }
          }
        }
      }
    }
    let enabled = false;
    // We want to avoid patching globals whenever possible, so this should be tree-shaken out in prod-mode and if
    // reporting is not enabled. It should also only run once
    function enableDetection$1() {
      if (enabled) {
        return; // don't double-apply the patches
      }

      enabled = true;
      const {
        setAttribute
      } = Element.prototype;
      // Detect calling `setAttribute` to set an idref or an id
      assign(Element.prototype, {
        setAttribute(attrName, attrValue) {
          setAttribute.call(this, attrName, attrValue);
          if (attrName === 'id' || ID_REFERENCING_ATTRIBUTES_SET.has(attrName)) {
            detectSyntheticCrossRootAria(this, attrName, attrValue);
          }
        }
      });
      // Detect `elm.id = 'foo'`
      const idDescriptor = getOwnPropertyDescriptor$1(Element.prototype, 'id');
      if (!isUndefined$1(idDescriptor)) {
        const {
          get,
          set
        } = idDescriptor;
        // These should always be a getter and a setter, but if someone is monkeying with the global descriptor, ignore it
        if (isFunction$1(get) && isFunction$1(set)) {
          defineProperty(Element.prototype, 'id', {
            get() {
              return get.call(this);
            },
            set(value) {
              set.call(this, value);
              detectSyntheticCrossRootAria(this, 'id', value);
            },
            // On the default descriptor for 'id', enumerable and configurable are true
            enumerable: true,
            configurable: true
          });
        }
      }
    }
    // Our detection logic relies on some modern browser features. We can just skip reporting the data
    // for unsupported browsers
    function supportsCssEscape() {
      return typeof CSS !== 'undefined' && isFunction$1(CSS.escape);
    }
    // If this page is not using synthetic shadow, then we don't need to install detection. Note
    // that we are assuming synthetic shadow is loaded before LWC.
    function isSyntheticShadowLoaded() {
      // We should probably be calling `renderer.isSyntheticShadowDefined`, but 1) we don't have access to the renderer,
      // and 2) this code needs to run in @lwc/engine-core, so it can access `logWarn()` and `report()`.
      return hasOwnProperty$1.call(Element.prototype, KEY__SHADOW_TOKEN);
    }
    // Detecting cross-root ARIA in synthetic shadow only makes sense for the browser
    if (supportsCssEscape() && isSyntheticShadowLoaded()) {
      // Always run detection in dev mode, so we can at least print to the console
      {
        enableDetection$1();
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    //
    // The goal of this code is to detect usages of non-standard reflected ARIA properties. These are caused by
    // legacy non-standard Element.prototype extensions added by the @lwc/aria-reflection package.
    //
    // See the README for @lwc/aria-reflection
    const NON_STANDARD_ARIA_PROPS = ['ariaActiveDescendant', 'ariaControls', 'ariaDescribedBy', 'ariaDetails', 'ariaErrorMessage', 'ariaFlowTo', 'ariaLabelledBy', 'ariaOwns'];
    function isGlobalAriaPolyfillLoaded() {
      // Sniff for the legacy polyfill being loaded. The reason this works is because ariaActiveDescendant is a
      // non-standard ARIA property reflection that is only supported in our legacy polyfill. See
      // @lwc/aria-reflection/README.md for details.
      return !isUndefined$1(getOwnPropertyDescriptor$1(Element.prototype, 'ariaActiveDescendant'));
    }
    function findVM(elm) {
      // If it's a shadow DOM component, then it has a host
      const {
        host
      } = elm.getRootNode();
      const vm = isUndefined$1(host) ? undefined : getAssociatedVMIfPresent(host);
      if (!isUndefined$1(vm)) {
        return vm;
      }
      // Else it might be a light DOM component. Walk up the tree trying to find the owner
      let parentElement = elm;
      while (!isNull(parentElement = parentElement.parentElement)) {
        if (parentElement instanceof BaseBridgeElement) {
          // parentElement is an LWC component
          const vm = getAssociatedVMIfPresent(parentElement);
          if (!isUndefined$1(vm)) {
            return vm;
          }
        }
      }
      // If we return undefined, it's because the element was rendered wholly outside a LightningElement
    }

    function checkAndReportViolation(elm, prop, isSetter, setValue) {
      const vm = findVM(elm);
      {
        logWarnOnce(`Element <${elm.tagName.toLowerCase()}> ` + (isUndefined$1(vm) ? '' : `owned by <${vm.elm.tagName.toLowerCase()}> `) + `uses non-standard property "${prop}". This will be removed in a future version of LWC. ` + `See https://sfdc.co/deprecated-aria`);
      }
      let setValueType;
      if (isSetter) {
        // `typeof null` is "object" which is not very useful for detecting null.
        // We mostly want to know null vs undefined vs other types here, due to
        // https://github.com/salesforce/lwc/issues/3284
        setValueType = isNull(setValue) ? 'null' : typeof setValue;
      }
      report("NonStandardAriaReflection" /* ReportingEventId.NonStandardAriaReflection */, {
        tagName: vm === null || vm === void 0 ? void 0 : vm.tagName,
        propertyName: prop,
        isSetter,
        setValueType
      });
    }
    function enableDetection() {
      const {
        prototype
      } = Element;
      for (const prop of NON_STANDARD_ARIA_PROPS) {
        const descriptor = getOwnPropertyDescriptor$1(prototype, prop);
        // The descriptor should exist because the @lwc/aria-reflection polyfill has run by now.
        // This happens automatically because of the ordering of imports.
        {
          /* istanbul ignore if */
          if (isUndefined$1(descriptor) || isUndefined$1(descriptor.get) || isUndefined$1(descriptor.set)) {
            // should never happen
            throw new Error('detect-non-standard-aria.ts loaded before @lwc/aria-reflection');
          }
        }
        // @ts-ignore
        const {
          get,
          set
        } = descriptor;
        // It's important for this defineProperty call to happen _after_ ARIA accessors are applied to the
        // BaseBridgeElement and LightningElement prototypes. Otherwise, we will log/report for access of non-standard
        // props on these prototypes, which we actually don't want. We only care about access on generic HTMLElements.
        defineProperty(prototype, prop, {
          get() {
            checkAndReportViolation(this, prop, false, undefined);
            return get.call(this);
          },
          set(val) {
            checkAndReportViolation(this, prop, true, val);
            return set.call(this, val);
          },
          configurable: true,
          enumerable: true
        });
      }
    }
    // No point in running this code if we're not in a browser, or if the global polyfill is not loaded
    if (isGlobalAriaPolyfillLoaded()) {
      // Always run detection in dev mode, so we can at least print to the console
      {
        enableDetection();
      }
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    // See @lwc/engine-core/src/framework/template.ts
    const TEMPLATE_PROPS = ['slots', 'stylesheetToken', 'stylesheets', 'renderMode'];
    // Expandos that may be placed on a stylesheet factory function, and which are meaningful to LWC at runtime
    const STYLESHEET_PROPS = [
    // SEE `KEY__SCOPED_CSS` in @lwc/style-compiler
    '$scoped$'];
    // Via https://www.npmjs.com/package/object-observer
    const ARRAY_MUTATION_METHODS = ['pop', 'push', 'shift', 'unshift', 'reverse', 'sort', 'fill', 'splice', 'copyWithin'];
    let mutationTrackingDisabled = false;
    function getOriginalArrayMethod(prop) {
      switch (prop) {
        case 'pop':
          return ArrayPop;
        case 'push':
          return ArrayPush$1;
        case 'shift':
          return ArrayShift;
        case 'unshift':
          return ArrayUnshift;
        case 'reverse':
          return ArrayReverse;
        case 'sort':
          return ArraySort;
        case 'fill':
          return ArrayFill;
        case 'splice':
          return ArraySplice;
        case 'copyWithin':
          return ArrayCopyWithin;
      }
    }
    function reportViolation(type, eventId, prop) {
      {
        logWarnOnce(`Mutating the "${prop}" property on a ${type} ` + `is deprecated and will be removed in a future version of LWC. ` + `See: https://sfdc.co/template-mutation`);
      }
    }
    function reportTemplateViolation(prop) {
      reportViolation('template', "TemplateMutation" /* ReportingEventId.TemplateMutation */, prop);
    }
    function reportStylesheetViolation(prop) {
      reportViolation('stylesheet', "StylesheetMutation" /* ReportingEventId.StylesheetMutation */, prop);
    }
    // Warn if the user tries to mutate a stylesheets array, e.g.:
    // `tmpl.stylesheets.push(someStylesheetFunction)`
    function warnOnArrayMutation(stylesheets) {
      // We can't handle users calling Array.prototype.slice.call(tmpl.stylesheets), but
      // we can at least warn when they use the most common mutation methods.
      for (const prop of ARRAY_MUTATION_METHODS) {
        const originalArrayMethod = getOriginalArrayMethod(prop);
        stylesheets[prop] = function arrayMutationWarningWrapper() {
          reportTemplateViolation('stylesheets');
          // @ts-ignore
          return originalArrayMethod.apply(this, arguments);
        };
      }
    }
    // Warn if the user tries to mutate a stylesheet factory function, e.g.:
    // `stylesheet.$scoped$ = true`
    function warnOnStylesheetFunctionMutation(stylesheet) {
      for (const prop of STYLESHEET_PROPS) {
        let value = stylesheet[prop];
        defineProperty(stylesheet, prop, {
          enumerable: true,
          configurable: true,
          get() {
            return value;
          },
          set(newValue) {
            reportStylesheetViolation(prop);
            value = newValue;
          }
        });
      }
    }
    // Warn on either array or stylesheet (function) mutation, in a deeply-nested array
    function trackStylesheetsMutation(stylesheets) {
      traverseStylesheets(stylesheets, subStylesheets => {
        if (isArray$1(subStylesheets)) {
          warnOnArrayMutation(subStylesheets);
        } else {
          warnOnStylesheetFunctionMutation(subStylesheets);
        }
      });
    }
    // Deeply freeze the entire array (of arrays) of stylesheet factory functions
    function deepFreeze(stylesheets) {
      traverseStylesheets(stylesheets, subStylesheets => {
        freeze(subStylesheets);
      });
    }
    // Deep-traverse an array (of arrays) of stylesheet factory functions, and call the callback for every array/function
    function traverseStylesheets(stylesheets, callback) {
      callback(stylesheets);
      for (let i = 0; i < stylesheets.length; i++) {
        const stylesheet = stylesheets[i];
        if (isArray$1(stylesheet)) {
          traverseStylesheets(stylesheet, callback);
        } else {
          callback(stylesheet);
        }
      }
    }
    function trackMutations(tmpl) {
      if (!isUndefined$1(tmpl.stylesheets)) {
        trackStylesheetsMutation(tmpl.stylesheets);
      }
      for (const prop of TEMPLATE_PROPS) {
        let value = tmpl[prop];
        defineProperty(tmpl, prop, {
          enumerable: true,
          configurable: true,
          get() {
            return value;
          },
          set(newValue) {
            if (!mutationTrackingDisabled) {
              reportTemplateViolation(prop);
            }
            value = newValue;
          }
        });
      }
      const originalDescriptor = getOwnPropertyDescriptor$1(tmpl, 'stylesheetTokens');
      defineProperty(tmpl, 'stylesheetTokens', {
        enumerable: true,
        configurable: true,
        get: originalDescriptor.get,
        set(value) {
          reportTemplateViolation('stylesheetTokens');
          // Avoid logging/reporting twice (for both stylesheetToken and stylesheetTokens)
          mutationTrackingDisabled = true;
          originalDescriptor.set.call(this, value);
          mutationTrackingDisabled = false;
        }
      });
    }
    function addLegacyStylesheetTokensShim(tmpl) {
      // When ENABLE_FROZEN_TEMPLATE is false, then we shim stylesheetTokens on top of stylesheetToken for anyone who
      // is accessing the old internal API (backwards compat). Details: W-14210169
      defineProperty(tmpl, 'stylesheetTokens', {
        enumerable: true,
        configurable: true,
        get() {
          const {
            stylesheetToken
          } = this;
          if (isUndefined$1(stylesheetToken)) {
            return stylesheetToken;
          }
          // Shim for the old `stylesheetTokens` property
          // See https://github.com/salesforce/lwc/pull/2332/files#diff-7901555acef29969adaa6583185b3e9bce475cdc6f23e799a54e0018cb18abaa
          return {
            hostAttribute: `${stylesheetToken}-host`,
            shadowAttribute: stylesheetToken
          };
        },
        set(value) {
          // If the value is null or some other exotic object, you would be broken anyway in the past
          // because the engine would try to access hostAttribute/shadowAttribute, which would throw an error.
          // However it may be undefined in newer versions of LWC, so we need to guard against that case.
          this.stylesheetToken = isUndefined$1(value) ? undefined : value.shadowAttribute;
        }
      });
    }
    function freezeTemplate(tmpl) {
      // TODO [#2782]: remove this flag and delete the legacy behavior
      if (lwcRuntimeFlags.ENABLE_FROZEN_TEMPLATE) {
        // Deep freeze the template
        freeze(tmpl);
        if (!isUndefined$1(tmpl.stylesheets)) {
          deepFreeze(tmpl.stylesheets);
        }
      } else {
        // template is not frozen - shim, report, and warn
        // this shim should be applied in both dev and prod
        addLegacyStylesheetTokensShim(tmpl);
        // When ENABLE_FROZEN_TEMPLATE is false, we want to warn in dev mode whenever someone is mutating the template
        {
          trackMutations(tmpl);
        }
      }
    }
    /** version: 5.1.0 */

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    /**
     * Displays the header for a custom element.
     *
     * @param ce the custom element
     * @param componentInstance component instance associated with the custom element.
     */
    function getHeaderForCustomElement(ce, componentInstance) {
      // [element]
      // LWC component instance: [vm.component]
      return ['div', {}, ['object', {
        object: ce,
        config: {
          skip: true
        }
      }], ['div', {}, ['span', {
        style: 'margin: 0 5px; color: red'
      }, 'LWC:'], ['object', {
        object: componentInstance
      }]]];
    }
    function getHeaderForComponentInstance(componentInstance, debugInfo) {
      if (keys(debugInfo).length === 0) {
        // there is no debug information, no need to customize this component instance
        return null;
      }
      // [component]
      // Debug information: [vm.debugInfo]
      return ['div', {}, ['object', {
        object: componentInstance,
        config: {
          skip: true
        }
      }], ['div', {}, ['span', {
        style: 'margin: 0 5px; color: red'
      }, 'Debug:'], ['object', {
        object: debugInfo
      }]]];
    }
    const LightningElementFormatter = {
      name: 'LightningElementFormatter',
      header(obj, config) {
        const vm = getAssociatedVMIfPresent(obj);
        if (!isUndefined$1(vm) && (isUndefined$1(config) || !config.skip)) {
          if (obj instanceof HTMLElement) {
            return getHeaderForCustomElement(obj, vm.component);
          } else {
            return getHeaderForComponentInstance(obj, vm.debugInfo);
          }
        }
        return null;
      },
      hasBody() {
        return false;
      }
    };

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function init() {
      const devtoolsFormatters = _globalThis.devtoolsFormatters || [];
      ArrayPush$1.call(devtoolsFormatters, LightningElementFormatter);
      _globalThis.devtoolsFormatters = devtoolsFormatters;
    }
    {
      init();
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    //
    // Feature detection
    //
    // This check for constructable style sheets is similar to Fast's:
    // https://github.com/microsoft/fast/blob/d49d1ec/packages/web-components/fast-element/src/dom.ts#L51-L53
    // See also: https://github.com/whatwg/webidl/issues/1027#issuecomment-934510070
    const supportsConstructableStylesheets = isFunction$1(CSSStyleSheet.prototype.replaceSync) && isArray$1(document.adoptedStyleSheets);
    const stylesheetCache = new Map();
    function createFreshStyleElement(content) {
      const elm = document.createElement('style');
      elm.type = 'text/css';
      elm.textContent = content;
      return elm;
    }
    function createStyleElement(content, cacheData) {
      const {
        element,
        usedElement
      } = cacheData;
      // If the <style> was already used, then we should clone it. We cannot insert
      // the same <style> in two places in the DOM.
      if (usedElement) {
        // This `<style>` may be repeated multiple times in the DOM, so cache it. It's a bit
        // faster to call `cloneNode()` on an existing node than to recreate it every time.
        return element.cloneNode(true);
      }
      // We don't clone every time, because that would be a perf tax on the first time
      cacheData.usedElement = true;
      return element;
    }
    function createConstructableStylesheet(content) {
      const stylesheet = new CSSStyleSheet();
      stylesheet.replaceSync(content);
      return stylesheet;
    }
    function insertConstructableStylesheet(content, target, cacheData) {
      const {
        adoptedStyleSheets
      } = target;
      const {
        stylesheet
      } = cacheData;
      // The reason we prefer .push() rather than reassignment is for perf: https://github.com/salesforce/lwc/pull/2683
      adoptedStyleSheets.push(stylesheet);
    }
    function insertStyleElement(content, target, cacheData) {
      const elm = createStyleElement(content, cacheData);
      target.appendChild(elm);
    }
    function getCacheData(content, useConstructableStylesheet) {
      let cacheData = stylesheetCache.get(content);
      if (isUndefined$1(cacheData)) {
        cacheData = {
          stylesheet: undefined,
          element: undefined,
          roots: undefined,
          global: false,
          usedElement: false
        };
        stylesheetCache.set(content, cacheData);
      }
      // Create <style> elements or CSSStyleSheets on-demand, as needed
      if (useConstructableStylesheet && isUndefined$1(cacheData.stylesheet)) {
        cacheData.stylesheet = createConstructableStylesheet(content);
      } else if (!useConstructableStylesheet && isUndefined$1(cacheData.element)) {
        cacheData.element = createFreshStyleElement(content);
      }
      return cacheData;
    }
    function insertGlobalStylesheet(content) {
      // Force a <style> element for global stylesheets. See comment below.
      const cacheData = getCacheData(content, false);
      if (cacheData.global) {
        // already inserted
        return;
      }
      cacheData.global = true; // mark inserted
      // TODO [#2922]: use document.adoptedStyleSheets in supported browsers. Currently we can't, due to backwards compat.
      insertStyleElement(content, document.head, cacheData);
    }
    function insertLocalStylesheet(content, target) {
      const cacheData = getCacheData(content, supportsConstructableStylesheets);
      let {
        roots
      } = cacheData;
      if (isUndefined$1(roots)) {
        roots = cacheData.roots = new WeakSet(); // lazily initialize (not needed for global styles)
      } else if (roots.has(target)) {
        // already inserted
        return;
      }
      roots.add(target); // mark inserted
      // Constructable stylesheets are only supported in certain browsers:
      // https://caniuse.com/mdn-api_document_adoptedstylesheets
      // The reason we use it is for perf: https://github.com/salesforce/lwc/pull/2460
      if (supportsConstructableStylesheets) {
        insertConstructableStylesheet(content, target, cacheData);
      } else {
        // Fall back to <style> element
        insertStyleElement(content, target, cacheData);
      }
    }
    function insertStylesheet(content, target) {
      if (isUndefined$1(target)) {
        // global
        insertGlobalStylesheet(content);
      } else {
        // local
        insertLocalStylesheet(content, target);
      }
    }

    /*
     * Copyright (c) 2023, Salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const cachedConstructors = new Map();
    const elementsUpgradedOutsideLWC = new WeakSet();
    let elementBeingUpgradedByLWC = false;
    const lifecycleCallbacks = lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE ? {
      connectedCallback: connectRootElement,
      disconnectedCallback: disconnectRootElement,
      formAssociatedCallback: runFormAssociatedCallback,
      formDisabledCallback: runFormDisabledCallback,
      formResetCallback: runFormResetCallback,
      formStateRestoreCallback: runFormStateRestoreCallback
    } : undefined;
    // Creates a constructor that is intended to be used directly as a custom element, except that the upgradeCallback is
    // passed in to the constructor so LWC can reuse the same custom element constructor for multiple components.
    // Another benefit is that only LWC can create components that actually do anything – if you do
    // `customElements.define('x-foo')`, then you don't have access to the upgradeCallback, so it's a dummy custom element.
    // This class should be created once per tag name.
    const createUpgradableConstructor = () => {
      // TODO [#2972]: this class should expose observedAttributes as necessary
      class UpgradableConstructor extends HTMLElement {
        constructor(upgradeCallback) {
          super();
          // If the element is not created using lwc.createElement(), e.g. `document.createElement('x-foo')`,
          // then elementBeingUpgraded will be false
          if (elementBeingUpgradedByLWC) {
            upgradeCallback(this);
          } else if (!isUndefined$1(lifecycleCallbacks)) {
            // If this element has any lifecycle callbacks, then we need to keep track of
            // instances that were created outside LWC (i.e. not created by `lwc.createElement()`).
            // If the element has no connected or disconnected callbacks, then we don't need to track this.
            elementsUpgradedOutsideLWC.add(this);
            // TODO [#2970]: LWC elements cannot be upgraded via new Ctor()
            // Do we want to support this? Throw an error? Currently for backwards compat it's a no-op.
          }
        }
        /*LWC compiler v5.1.0*/
      }

      UpgradableConstructor.formAssociated = true;
      // Do not unnecessarily add a connectedCallback/disconnectedCallback/etc., as it introduces perf overhead
      // See: https://github.com/salesforce/lwc/pull/3162#issuecomment-1311851174
      if (!isUndefined$1(lifecycleCallbacks)) {
        for (const [propName, callback] of entries(lifecycleCallbacks)) {
          UpgradableConstructor.prototype[propName] = function () {
            if (!elementsUpgradedOutsideLWC.has(this)) {
              callback(this);
            }
          };
        }
      }
      return UpgradableConstructor;
    };
    function getUpgradableConstructor(tagName) {
      let UpgradableConstructor = cachedConstructors.get(tagName);
      if (isUndefined$1(UpgradableConstructor)) {
        if (!isUndefined$1(customElements.get(tagName))) {
          throw new Error(`Unexpected tag name "${tagName}". This name is a registered custom element, preventing LWC to upgrade the element.`);
        }
        UpgradableConstructor = createUpgradableConstructor();
        customElements.define(tagName, UpgradableConstructor);
        cachedConstructors.set(tagName, UpgradableConstructor);
      }
      return UpgradableConstructor;
    }
    const createCustomElement = (tagName, upgradeCallback) => {
      const UpgradableConstructor = getUpgradableConstructor(tagName);
      elementBeingUpgradedByLWC = true;
      try {
        return new UpgradableConstructor(upgradeCallback);
      } finally {
        elementBeingUpgradedByLWC = false;
      }
    };

    /*
     * Copyright (c) 2023, Salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    /**
     * A factory function that produces a renderer.
     * Renderer encapsulates operations that are required to render an LWC component into the underlying
     * runtime environment. In the case of @lwc/enigne-dom, it is meant to be used in a DOM environment.
     * Example usage:
     * import { renderer, rendererFactory } from 'lwc';
     * const customRenderer = rendererFactory(renderer);
     *
     * @param baseRenderer Either null or the base renderer imported from 'lwc'.
     */
    function rendererFactory(baseRenderer) {
      const renderer = function (exports) {
        /**
         * Copyright (C) 2023 salesforce.com, inc.
         */
        /*
         * Copyright (c) 2018, salesforce.com, inc.
         * All rights reserved.
         * SPDX-License-Identifier: MIT
         * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
         */
        function invariant(value, msg) {
          if (!value) {
            throw new Error(`Invariant Violation: ${msg}`);
          }
        }
        function isTrue$1(value, msg) {
          if (!value) {
            throw new Error(`Assert Violation: ${msg}`);
          }
        }
        function isFalse$1(value, msg) {
          if (value) {
            throw new Error(`Assert Violation: ${msg}`);
          }
        }
        function fail(msg) {
          throw new Error(msg);
        }
        var assert = /*#__PURE__*/Object.freeze({
          __proto__: null,
          fail: fail,
          invariant: invariant,
          isFalse: isFalse$1,
          isTrue: isTrue$1
        });
        function isUndefined(obj) {
          return obj === undefined;
        }
        function isNull(obj) {
          return obj === null;
        }
        /** version: 5.1.0 */

        /*
         * Copyright (c) 2023, salesforce.com, inc.
         * All rights reserved.
         * SPDX-License-Identifier: MIT
         * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
         */
        class WireContextSubscriptionEvent extends CustomEvent {
          constructor(adapterToken, {
            setNewContext,
            setDisconnectedCallback
          }) {
            super(adapterToken, {
              bubbles: true,
              composed: true
            });
            this.setNewContext = setNewContext;
            this.setDisconnectedCallback = setDisconnectedCallback;
          }
          /*LWC compiler v5.1.0*/
        }
        function registerContextConsumer(elm, adapterContextToken, subscriptionPayload) {
          dispatchEvent(elm, new WireContextSubscriptionEvent(adapterContextToken, subscriptionPayload));
        }
        function registerContextProvider(elm, adapterContextToken, onContextSubscription) {
          addEventListener(elm, adapterContextToken, evt => {
            evt.stopImmediatePropagation();
            const {
              setNewContext,
              setDisconnectedCallback
            } = evt;
            onContextSubscription({
              setNewContext,
              setDisconnectedCallback
            });
          });
        }

        /*
         * Copyright (c) 2018, salesforce.com, inc.
         * All rights reserved.
         * SPDX-License-Identifier: MIT
         * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
         */
        function cloneNode(node, deep) {
          return node.cloneNode(deep);
        }
        function createElement(tagName, namespace) {
          return isUndefined(namespace) ? document.createElement(tagName) : document.createElementNS(namespace, tagName);
        }
        function createText(content) {
          return document.createTextNode(content);
        }
        function createComment(content) {
          return document.createComment(content);
        }
        // Parse the fragment HTML string into DOM
        function createFragment(html) {
          const template = document.createElement('template');
          template.innerHTML = html;
          return template.content.firstChild;
        }
        function insert(node, parent, anchor) {
          parent.insertBefore(node, anchor);
        }
        function remove(node, parent) {
          parent.removeChild(node);
        }
        function nextSibling(node) {
          return node.nextSibling;
        }
        function previousSibling(node) {
          return node.previousSibling;
        }
        function attachShadow(element, options) {
          // `shadowRoot` will be non-null in two cases:
          //   1. upon initial load with an SSR-generated DOM, while in Shadow render mode
          //   2. when a webapp author places <c-app> in their static HTML and mounts their
          //      root component with customElement.define('c-app', Ctor)
          if (!isNull(element.shadowRoot)) {
            return element.shadowRoot;
          }
          return element.attachShadow(options);
        }
        function setText(node, content) {
          node.nodeValue = content;
        }
        function getProperty(node, key) {
          return node[key];
        }
        function setProperty(node, key, value) {
          node[key] = value;
        }
        function getAttribute(element, name, namespace) {
          return isUndefined(namespace) ? element.getAttribute(name) : element.getAttributeNS(namespace, name);
        }
        function setAttribute(element, name, value, namespace) {
          return isUndefined(namespace) ? element.setAttribute(name, value) : element.setAttributeNS(namespace, name, value);
        }
        function removeAttribute(element, name, namespace) {
          if (isUndefined(namespace)) {
            element.removeAttribute(name);
          } else {
            element.removeAttributeNS(namespace, name);
          }
        }
        function addEventListener(target, type, callback, options) {
          target.addEventListener(type, callback, options);
        }
        function removeEventListener(target, type, callback, options) {
          target.removeEventListener(type, callback, options);
        }
        function dispatchEvent(target, event) {
          return target.dispatchEvent(event);
        }
        function getClassList(element) {
          return element.classList;
        }
        function setCSSStyleProperty(element, name, value, important) {
          // TODO [#0]: How to avoid this type casting? Shall we use a different type interface to
          // represent elements in the engine?
          element.style.setProperty(name, value, important ? 'important' : '');
        }
        function getBoundingClientRect(element) {
          return element.getBoundingClientRect();
        }
        function querySelector(element, selectors) {
          return element.querySelector(selectors);
        }
        function querySelectorAll(element, selectors) {
          return element.querySelectorAll(selectors);
        }
        function getElementsByTagName(element, tagNameOrWildCard) {
          return element.getElementsByTagName(tagNameOrWildCard);
        }
        function getElementsByClassName(element, names) {
          return element.getElementsByClassName(names);
        }
        function getChildren(element) {
          return element.children;
        }
        function getChildNodes(element) {
          return element.childNodes;
        }
        function getFirstChild(element) {
          return element.firstChild;
        }
        function getFirstElementChild(element) {
          return element.firstElementChild;
        }
        function getLastChild(element) {
          return element.lastChild;
        }
        function getLastElementChild(element) {
          return element.lastElementChild;
        }
        function isConnected(node) {
          return node.isConnected;
        }
        function assertInstanceOfHTMLElement(elm, msg) {
          assert.invariant(elm instanceof HTMLElement, msg);
        }
        function ownerDocument(element) {
          return element.ownerDocument;
        }
        function getTagName(elm) {
          return elm.tagName;
        }
        function attachInternals(elm) {
          return attachInternalsFunc.call(elm);
        }
        // Use the attachInternals method from HTMLElement.prototype because access to it is removed
        // in HTMLBridgeElement, ie: elm.attachInternals is undefined.
        // Additionally, cache the attachInternals method to protect against 3rd party monkey-patching.
        const attachInternalsFunc = typeof ElementInternals !== 'undefined' ? HTMLElement.prototype.attachInternals : () => {
          throw new Error('attachInternals API is not supported in this browser environment.');
        };
        exports.addEventListener = addEventListener;
        exports.assertInstanceOfHTMLElement = assertInstanceOfHTMLElement;
        exports.attachInternals = attachInternals;
        exports.attachShadow = attachShadow;
        exports.cloneNode = cloneNode;
        exports.createComment = createComment;
        exports.createElement = createElement;
        exports.createFragment = createFragment;
        exports.createText = createText;
        exports.dispatchEvent = dispatchEvent;
        exports.getAttribute = getAttribute;
        exports.getBoundingClientRect = getBoundingClientRect;
        exports.getChildNodes = getChildNodes;
        exports.getChildren = getChildren;
        exports.getClassList = getClassList;
        exports.getElementsByClassName = getElementsByClassName;
        exports.getElementsByTagName = getElementsByTagName;
        exports.getFirstChild = getFirstChild;
        exports.getFirstElementChild = getFirstElementChild;
        exports.getLastChild = getLastChild;
        exports.getLastElementChild = getLastElementChild;
        exports.getProperty = getProperty;
        exports.getTagName = getTagName;
        exports.insert = insert;
        exports.isConnected = isConnected;
        exports.nextSibling = nextSibling;
        exports.ownerDocument = ownerDocument;
        exports.previousSibling = previousSibling;
        exports.querySelector = querySelector;
        exports.querySelectorAll = querySelectorAll;
        exports.registerContextConsumer = registerContextConsumer;
        exports.registerContextProvider = registerContextProvider;
        exports.remove = remove;
        exports.removeAttribute = removeAttribute;
        exports.removeEventListener = removeEventListener;
        exports.setAttribute = setAttribute;
        exports.setCSSStyleProperty = setCSSStyleProperty;
        exports.setProperty = setProperty;
        exports.setText = setText;
        return exports;
      }({});
      // Meant to inherit any properties passed via the base renderer as the argument to the factory.
      Object.setPrototypeOf(renderer, baseRenderer);
      return renderer;
    }

    /*
     * Copyright (c) 2023, Salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    /**
     * The base renderer that will be used by engine-core.
     * This will be used for DOM operations when lwc is running in a browser environment.
     */
    const renderer = assign(
    // The base renderer will invoke the factory with null and assign additional properties that are
    // shared across renderers
    rendererFactory(null),
    // Properties that are either not required to be sandboxed or rely on a globally shared information
    {
      // insertStyleSheet implementation shares a global cache of stylesheet data
      insertStylesheet,
      // relies on a shared global cache
      createCustomElement,
      defineCustomElement: getUpgradableConstructor,
      isSyntheticShadowDefined: hasOwnProperty$1.call(Element.prototype, KEY__SHADOW_TOKEN)
    });
    function clearNode(node) {
      const childNodes = renderer.getChildNodes(node);
      for (let i = childNodes.length - 1; i >= 0; i--) {
        renderer.remove(childNodes[i], node);
      }
    }
    function buildCustomElementConstructor(Ctor) {
      var _a;
      const HtmlPrototype = getComponentHtmlPrototype(Ctor);
      const {
        observedAttributes
      } = HtmlPrototype;
      const {
        attributeChangedCallback
      } = HtmlPrototype.prototype;
      return _a = class extends HTMLElement {
        constructor() {
          super();
          if (!isNull(this.shadowRoot)) {
            {
              // eslint-disable-next-line no-console
              console.warn(`Found an existing shadow root for the custom element "${Ctor.name}". Call \`hydrateComponent\` instead.`);
            }
            clearNode(this.shadowRoot);
          }
          // Compute renderMode/shadowMode in advance. This must be done before `createVM` because `createVM` may
          // mutate the element.
          const {
            shadowMode,
            renderMode
          } = computeShadowAndRenderMode(Ctor, renderer);
          // Native shadow components are allowed to have pre-existing `childNodes` before upgrade. This supports
          // use cases where a custom element has declaratively-defined slotted content, e.g.:
          // https://github.com/salesforce/lwc/issues/3639
          const isNativeShadow = renderMode === 1 /* RenderMode.Shadow */ && shadowMode === 0 /* ShadowMode.Native */;
          if (!isNativeShadow && this.childNodes.length > 0) {
            {
              // eslint-disable-next-line no-console
              console.warn(`Light DOM and synthetic shadow custom elements cannot have child nodes. ` + `Ensure the element is empty, including whitespace.`);
            }
            clearNode(this);
          }
          createVM(this, Ctor, renderer, {
            mode: 'open',
            owner: null,
            tagName: this.tagName
          });
        }
        connectedCallback() {
          connectRootElement(this);
        }
        disconnectedCallback() {
          disconnectRootElement(this);
        }
        attributeChangedCallback(name, oldValue, newValue) {
          attributeChangedCallback.call(this, name, oldValue, newValue);
        }
        /*LWC compiler v5.1.0*/
      }, _a.observedAttributes = observedAttributes, _a;
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    // TODO [#2472]: Remove this workaround when appropriate.
    // eslint-disable-next-line @lwc/lwc-internal/no-global-node
    const _Node$1 = Node;
    const ConnectingSlot = new WeakMap();
    const DisconnectingSlot = new WeakMap();
    function callNodeSlot(node, slot) {
      {
        assert.isTrue(node, `callNodeSlot() should not be called for a non-object`);
      }
      const fn = slot.get(node);
      if (!isUndefined$1(fn)) {
        fn(node);
      }
      return node; // for convenience
    }

    if (!lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE) {
      // Monkey patching Node methods to be able to detect the insertions and removal of root elements
      // created via createElement.
      const {
        appendChild,
        insertBefore,
        removeChild,
        replaceChild
      } = _Node$1.prototype;
      assign(_Node$1.prototype, {
        appendChild(newChild) {
          const appendedNode = appendChild.call(this, newChild);
          return callNodeSlot(appendedNode, ConnectingSlot);
        },
        insertBefore(newChild, referenceNode) {
          const insertedNode = insertBefore.call(this, newChild, referenceNode);
          return callNodeSlot(insertedNode, ConnectingSlot);
        },
        removeChild(oldChild) {
          const removedNode = removeChild.call(this, oldChild);
          return callNodeSlot(removedNode, DisconnectingSlot);
        },
        replaceChild(newChild, oldChild) {
          const replacedNode = replaceChild.call(this, newChild, oldChild);
          callNodeSlot(replacedNode, DisconnectingSlot);
          callNodeSlot(newChild, ConnectingSlot);
          return replacedNode;
        }
      });
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const ComponentConstructorToCustomElementConstructorMap = new Map();
    function getCustomElementConstructor(Ctor) {
      if (Ctor === LightningElement) {
        throw new TypeError(`Invalid Constructor. LightningElement base class can't be claimed as a custom element.`);
      }
      let ce = ComponentConstructorToCustomElementConstructorMap.get(Ctor);
      if (isUndefined$1(ce)) {
        ce = buildCustomElementConstructor(Ctor);
        ComponentConstructorToCustomElementConstructorMap.set(Ctor, ce);
      }
      return ce;
    }
    /**
     * This static getter builds a Web Component class from a LWC constructor so it can be registered
     * as a new element via customElements.define() at any given time. E.g.:
     *
     *      import Foo from 'ns/foo';
     *      customElements.define('x-foo', Foo.CustomElementConstructor);
     *      const elm = document.createElement('x-foo');
     *
     */
    defineProperty(LightningElement, 'CustomElementConstructor', {
      get() {
        return getCustomElementConstructor(this);
      }
    });
    freeze(LightningElement);
    seal(LightningElement.prototype);
    /** version: 5.1.0 */

    function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
      var shadowSelector = token ? ("[" + token + "]") : "";
      return "_:-ms-lang(x)" + shadowSelector + ", svg" + shadowSelector + " {pointer-events: none;}";
      /*LWC compiler v5.1.0*/
    }
    var iconStylesheets = [stylesheet];

    function tmpl$3($api, $cmp, $slotset, $ctx) {
      const {fid: api_scoped_frag_id, h: api_element} = $api;
      return [api_element("svg", {
        className: $cmp.computedClass,
        attrs: {
          "focusable": "false",
          "data-key": $cmp.name,
          "aria-hidden": "true",
          "part": "icon"
        },
        key: 0,
        svg: true
      }, [api_element("use", {
        attrs: {
          "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", api_scoped_frag_id($cmp.href))
        },
        key: 1,
        svg: true
      })])];
      /*LWC compiler v5.1.0*/
    }
    var _tmpl$4 = registerTemplate(tmpl$3);
    tmpl$3.stylesheets = [];


    if (iconStylesheets) {
      tmpl$3.stylesheets.push.apply(tmpl$3.stylesheets, iconStylesheets);
    }
    tmpl$3.stylesheetToken = "lwc-25f9lgh55ct";
    tmpl$3.legacyStylesheetToken = "lightning-primitiveIcon_primitiveIcon";
    freezeTemplate(tmpl$3);

    /* All Valid Aria Attributes, in camel case
     * - it's better to start from camel-case
     *   because `aria-${_.kebabCase('describedBy')}` => 'aria-described-by' (NOT aria property)
     * - correct aria property: 'aria-describedby'
     *  https://www.w3.org/TR/wai-aria/
     */
    const ARIA_PROP_LIST = ['activeDescendant', 'atomic', 'autoComplete', 'busy', 'checked', 'colCount', 'colIndex', 'colSpan', 'controls', 'current', 'describedAt', 'describedBy', 'description', 'details', 'disabled', 'dropEffect', 'errorMessage', 'expanded', 'flowTo', 'grabbed', 'hasPopup', 'hidden', 'invalid', 'keyShortcuts', 'label', 'labelledBy', 'level', 'live', 'modal', 'multiLine', 'multiSelectable', 'orientation', 'owns', 'placeholder', 'posInSet', 'pressed', 'readOnly', 'relevant', 'required', 'roleDescription', 'rowCount', 'rowIndex', 'rowSpan', 'selected', 'setSize', 'sort', 'valueMax', 'valueMin', 'valueNow', 'valueText'];

    /**
     * Generate an ARIA lookup object when passing in a list of ARIA values
     * @param {Array} list A list of ARIA properties (array of strings)
     * @param {String} type A type which defaults to output ARIA properties as modified kebab-case, or camel-case
     * @example 'valueMax' string becomes: { VALUEMAX: 'aria-valuemax' }
     * @returns {Object} A lookup object for ARIA properties in (modified) kebab-case or camel-case
     */
    const getAriaLookup = (list, type = 'default') => {
      const length = list ? list.length : 0;
      if (length === 0) {
        throw new Error('List of aria properties is required');
      }
      const lookupObj = {};
      if (type === 'default') {
        for (let i = 0; i < length; i += 1) {
          const name = list[i];
          const nameUpperCase = name.toUpperCase();
          if (!lookupObj[nameUpperCase]) {
            lookupObj[nameUpperCase] = `aria-${name.toLowerCase()}`;
          }
        }
        return lookupObj;
      }
      for (let i = 0; i < length; i += 1) {
        const name = list[i];
        const ariaPropertyLowerCase = `aria-${name.toLowerCase()}`;
        if (!lookupObj[ariaPropertyLowerCase]) {
          const ariaPropertyCamelCase = `aria${name[0].toUpperCase()}${name.slice(1)}`;
          lookupObj[ariaPropertyLowerCase] = ariaPropertyCamelCase;
        }
      }
      return lookupObj;
    };

    /**
     * ARIA lookup, 'modified' kebab-case
     * Given an array of aria property strings in camel-case, produce a lookup object
     * NOTE: 'ariaDescribedBy' (camel-case ARIA property) in TRUE kebab-case would be:
     * - 'aria-described-by' (not valid ARIA)
     * - 'aria-describedby' (valid ARIA, or modified kebab-case)
     * Example: 'describedBy' -> { DESCRIBEDBY: 'aria-describedby' }
     */
    getAriaLookup(ARIA_PROP_LIST);

    /**
     * ARIA lookup, aria-property (key): 'ariaCamelCase' (value)
     * Example: 'valueMax' -> { 'aria-valuemax': 'ariaValueMax' }
     * Useful for converting from normal aria properties to aria camel cased values
     */
    getAriaLookup(ARIA_PROP_LIST, 'cc');

    /**
     * Determine if environment is CSR or SSR
     */
    const isCSR = typeof window !== 'undefined';

    /**
     * Utility function to generate an unique guid.
     * used on state objects to provide a performance aid when iterating
     * through the items and marking them for render
     * @returns {String} an unique string ID
     */
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    function classSetToString(classes) {
      let string = '';
      const keys = Object.keys(classes);
      for (let i = 0, {
          length
        } = keys; i < length; i += 1) {
        const key = keys[i];
        if (classes[key]) {
          string += (string.length ? ' ' : '') + key;
        }
      }
      return string;
    }

    const isIE11 = isCSR && isIE11Test(navigator);
    isCSR && isChromeTest(navigator);
    isCSR && isSafariTest(navigator);

    // The following functions are for tests only
    function isIE11Test(navigator) {
      // https://stackoverflow.com/questions/17447373/how-can-i-target-only-internet-explorer-11-with-javascript
      return /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    }
    function isChromeTest(navigator) {
      // https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome
      return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    }
    function isSafariTest(navigator) {
      // via https://stackoverflow.com/questions/49872111/detect-safari-and-stop-script
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    /**
     * Does the browser display animation.
     * Always returns false for IE11 due to performance.
     */
    function hasAnimation() {
      if (isIE11) {
        return false;
      }
      if (!window.matchMedia) {
        return true;
      }
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      return !(!mediaQuery || mediaQuery.matches);
    }

    /**
    A string normalization utility for attributes.
    @param {String} value - The value to normalize.
    @param {Object} config - The optional configuration object.
    @param {String} [config.fallbackValue] - The optional fallback value to use if the given value is not provided or invalid. Defaults to an empty string.
    @param {Array} [config.validValues] - An optional array of valid values. Assumes all input is valid if not provided.
    @return {String} - The normalized value.
    **/
    function normalizeString(value, config = {}) {
      const {
        fallbackValue = '',
        validValues,
        toLowerCase = true
      } = config;
      let normalized = typeof value === 'string' && value.trim() || '';
      normalized = toLowerCase ? normalized.toLowerCase() : normalized;
      if (validValues && validValues.indexOf(normalized) === -1) {
        normalized = fallbackValue;
      }
      return normalized;
    }

    /**
    A boolean normalization utility for attributes.
    @param {Any} value - The value to normalize.
    @return {Boolean} - The normalized value.
    **/
    function normalizeBoolean(value) {
      return typeof value === 'string' || !!value;
    }

    /**
     * Set an attribute on an element, if it's a normal element
     * it will use setAttribute, if it's an LWC component
     * it will use the public property
     *
     * @param {HTMLElement} element The element to act on
     * @param {String} attribute the attribute to set
     * @param {Any} value the value to set
     */
    function smartSetAttribute(element, attribute, value) {
      if (element.tagName.match(/^LIGHTNING/i)) {
        attribute = attribute.replace(/-\w/g, m => m[1].toUpperCase());
        element[attribute] = value ? value : null;
      } else if (value) {
        element.setAttribute(attribute, value);
      } else {
        element.removeAttribute(attribute);
      }
    }

    var _tmpl$3 = void 0;

    class Observable {
      constructor() {
        this._observers = [];
      }
      subscribe(func) {
        const unsubscribe = fn => this._observers = this._observers.filter(observer => observer !== fn);
        this._observers.push(func);
        return () => unsubscribe(func);
      }
      notify(data) {
        this._observers.forEach(observer => observer(data));
      }
    }
    /**
     * The Observer Pattern consist of using observables to notify subscribers when an event occurs.
     * With the observer pattern, we can subscribe certain objects, the observers, to another object,
     * called the observable. Whenever an event occurs, the observable notifies all its observers!
     *
     * Using the observer pattern is a great way to enforce separation of concerns and the single-responsiblity principle.
     * The observer objects aren't tightly coupled to the observable object, and can be (de)coupled at any time.
     * The observable object is responsible for monitoring the events, while the observers simply handle the received data.
     * more info can be found in this article: https://www.patterns.dev/posts/observer-pattern
     **/

    registerComponent(Observable, {
      tmpl: _tmpl$3,
      sel: "lightning-utils-private",
      apiVersion: 60
    });

    /**
     * @param {HTMLElement} element Element to act on
     * @param {Object} values values and attributes to set, if the value is
     *                        falsy it the attribute will be removed
     */
    function synchronizeAttrs(element, values) {
      if (!element) {
        return;
      }
      const attributes = Object.keys(values);
      for (let i = 0, {
          length
        } = attributes; i < length; i += 1) {
        const attr = attributes[i];
        smartSetAttribute(element, attr, values[attr]);
      }
    }

    /**
     * Update the element's attribute with given value.
     * If value is false, the attribute is removed from the element.
     *
     * @param {Object} element - Element
     * @param {string} attrName - Attribute name
     * @param {string|boolean} value - Attribute value
     */
    function reflectAttribute(element, attrName, value) {
      if (!element) {
        return;
      }
      if (typeof value === 'string') {
        element.setAttribute(attrName, value);
      } else if (value === true) {
        element.setAttribute(attrName, '');
      } else if (!value) {
        element.removeAttribute(attrName);
      } else {
        console.warn(`Invalid attribute value for "${attrName}": ${value}`);
      }
    }
    const BUTTON_GROUP_ORDER = {
      FIRST: 'first',
      MIDDLE: 'middle',
      LAST: 'last',
      ONLY: 'only'
    };

    /**
     * returns the SLDS class for the given group order
     * @param groupOrder
     * @returns {string}
     */
    function buttonGroupOrderClass(groupOrder) {
      return {
        [BUTTON_GROUP_ORDER.FIRST]: 'slds-button_first',
        [BUTTON_GROUP_ORDER.MIDDLE]: 'slds-button_middle',
        [BUTTON_GROUP_ORDER.LAST]: 'slds-button_last',
        [BUTTON_GROUP_ORDER.ONLY]: 'single-button'
      }[groupOrder];
    }

    /**
     * Checks if the given component is native
     * @param {Object} cmp Component instance
     * @returns {Boolean} Whether the component is native
     */
    function isNativeComponent(cmp) {
      if (cmp && cmp.template && cmp.template.constructor) {
        return !!String(cmp.template.constructor).match(/\[native code\]/);
      }
      return false;
    }

    function classNamesHash(hash, classes) {
      if (typeof classes === 'string') {
        const array = classes.trim().split(/\s+/);
        for (let i = 0, {
            length
          } = array; i < length; i += 1) {
          hash[array[i]] = true;
        }
        return hash;
      }
      return Object.assign(hash, classes);
    }
    const proto = {
      add(className) {
        return classNamesHash(this, className);
      },
      invert() {
        const keys = Object.keys(this);
        for (let i = 0, {
            length
          } = keys; i < length; i += 1) {
          const key = keys[i];
          this[key] = !this[key];
        }
        return this;
      },
      toString() {
        return classSetToString(this);
      }
    };
    function classSet(config) {
      return classNamesHash({
        __proto__: proto
      }, config);
    }

    /**
     * Takes label strings with placeholder params (`{0}`) and updates the label with given `args`
     * @param {string} str - any label string requiring injections of other strings/params (e.g., 'foo {0}')
     * @param  {string|array} arguments - string(s) to be injected into the `string` param
     * @returns {string} fully replaced string, e.g., '{0} is a {1}' -> 'Hal Jordan is a Green Lantern'
     */

    function formatLabel(str) {
      const args = Array.prototype.slice.call(arguments, 1);
      let replacements = args;
      if (Array.isArray(args[0])) {
        [replacements] = args;
      }
      return str.replace(/{(\d+)}/g, (match, i) => {
        const replacement = replacements[i];
        return replacement !== null && replacement !== undefined ? replacement : '';
      });
    }

    // TODO: remove file when migrating off aura
    /*
     * Regex to test a string for an ISO8601 Date. The following formats are matched.
     *
     *  YYYY
     *  YYYY-MM
     *  YYYY-MM-DD
     *  YYYY-MM-DDThh:mmTZD
     *  YYYY-MM-DDThh:mm:ssTZD
     *  YYYY-MM-DDThh:mm:ss.STZD
     *
     *
     * @see: https://www.w3.org/TR/NOTE-datetime
     */
    const ISO8601_STRICT_PATTERN = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d[:]?\d\d)|Z)?)?)?)?$/i;

    /* Regex to test a string for an ISO8601 partial time or full time:
     * hh:mm
     * hh:mm:ss
     * hh:mm:ss.S
     * full time = partial time + TZD
     */
    const ISO8601_TIME_PATTERN = /^\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d[:]?\d\d)|Z)?$/i;
    const STANDARD_TIME_FORMAT = 'HH:mm:ss.SSS';
    const STANDARD_DATE_FORMAT = 'YYYY-MM-DD';
    const TIME_SEPARATOR = 'T';
    const TIMEZONE_INDICATOR = /(Z|([+-])(\d{2})[:]?(\d{2}))$/i;
    function isValidISODateTimeString(dateTimeString) {
      return isValidISO8601String(dateTimeString) && isValidDate(dateTimeString);
    }
    function isValidISOTimeString(timeString) {
      if (!isValidISO8601TimeString(timeString)) {
        return false;
      }
      const timeOnly = removeTimeZoneSuffix(timeString);
      return isValidDate(`2018-09-09T${timeOnly}Z`);
    }
    function removeTimeZoneSuffix(dateTimeString) {
      if (typeof dateTimeString === 'string') {
        return dateTimeString.split(TIMEZONE_INDICATOR)[0];
      }
      return dateTimeString;
    }
    function isValidISO8601String(dateTimeString) {
      if (typeof dateTimeString !== 'string') {
        return false;
      }
      return ISO8601_STRICT_PATTERN.test(dateTimeString);
    }
    function isValidISO8601TimeString(timeString) {
      if (typeof timeString !== 'string') {
        return false;
      }
      return ISO8601_TIME_PATTERN.test(timeString);
    }
    function isValidDate(value) {
      // Date.parse returns NaN if the argument doesn't represent a valid date
      const timeStamp = Date.parse(value);
      return isFinite(timeStamp);
    }

    var labelSecondsLater = 'in a few seconds';

    var labelSecondsAgo = 'a few seconds ago';

    // These labels will only be used as fallback in browsers that do not support Intl.RelativeTimeFormat
    const fallbackFutureLabel = 'in {0} {1}'; // e.g. in 1 minute
    const fallbackPastLabel = '{0} {1} ago'; // e.g. 1 minute ago
    const fallbackPluralSuffix = 's'; // plural suffix for the units, e.g. in 10 minutes

    // The threshold values come from moment.js
    const units = {
      SECONDS: {
        name: 'second',
        threshold: 45
      },
      // a few seconds to minute
      MINUTES: {
        name: 'minute',
        threshold: 45
      },
      // minutes to hour
      HOURS: {
        name: 'hour',
        threshold: 22
      },
      // hours to day
      DAYS: {
        name: 'day',
        threshold: 26
      },
      // days to month
      MONTHS: {
        name: 'month',
        threshold: 11
      },
      // months to year
      YEARS: {
        name: 'year'
      }
    };
    const SECOND_TO_MILLISECONDS = 1000;
    const MINUTE_TO_MILLISECONDS = 6e4; // 60 * SECOND_TO_MILLISECONDS;
    const HOUR_TO_MILLISECONDS = 36e5; // 60 * MINUTE_TO_MILLISECONDS
    const DAY_TO_MILLISECONDS = 864e5; // 24 * HOUR_TO_MILLISECONDS;

    class Duration {
      constructor(milliseconds) {
        this.milliseconds = 0;
        if (typeof milliseconds !== 'number') {
          this.isValid = false;
          // eslint-disable-next-line no-console
          console.warn(`The value of milliseconds passed into Duration must be of type number,
                but we are getting the ${typeof milliseconds} value "${milliseconds}" instead.
                `);
          return;
        }
        this.isValid = true;
        this.milliseconds = milliseconds;
      }
      humanize(locale) {
        if (!this.isValid) {
          return '';
        }
        const unit = findBestUnitMatch(this);
        if (unit === units.SECONDS) {
          const isLater = this.milliseconds > 0;
          return isLater ? labelSecondsLater : labelSecondsAgo;
        }
        return format(locale, this.asIn(unit), unit.name);
      }
      asIn(unit) {
        switch (unit) {
          case units.SECONDS:
            return Math.round(this.milliseconds / SECOND_TO_MILLISECONDS);
          case units.MINUTES:
            return Math.round(this.milliseconds / MINUTE_TO_MILLISECONDS);
          case units.HOURS:
            return Math.round(this.milliseconds / HOUR_TO_MILLISECONDS);
          case units.DAYS:
            return Math.round(this.milliseconds / DAY_TO_MILLISECONDS);
          case units.MONTHS:
            return Math.round(daysToMonth(this.milliseconds / DAY_TO_MILLISECONDS));
          case units.YEARS:
          default:
            return Math.round(daysToMonth(this.milliseconds / DAY_TO_MILLISECONDS) / 12);
        }
      }
    }
    var Duration$1 = registerComponent(Duration, {
      tmpl: _tmpl$3,
      sel: "lightning-config-provider",
      apiVersion: 60
    });
    function daysToMonth(days) {
      // 400 years have 146097 days (taking into account leap year rules)
      // 400 years have 12 months === 4800
      const daysToMonthRatio = 4800 / 146097;
      return days * daysToMonthRatio;
    }
    function findBestUnitMatch(duration) {
      // Traversing the object keys in order from Seconds to Years
      // http://exploringjs.com/es6/ch_oop-besides-classes.html#_traversal-order-of-properties
      const match = Object.keys(units).find(key => {
        const unit = units[key];
        // Year is the max and doesn't have a threshold
        return unit === units.YEARS || Math.abs(duration.asIn(unit)) < unit.threshold;
      });
      return units[match];
    }
    function format(locale, value, unit) {
      if ('Intl' in window && Intl.RelativeTimeFormat) {
        const formatter = new Intl.RelativeTimeFormat(locale, {
          style: 'long',
          numeric: 'always'
        });
        return formatter.format(value, unit);
      }
      return fallbackFormatter(value, unit);
    }
    function fallbackFormatter(value, unit) {
      // eslint-disable-next-line no-console
      console.warn(`The current environment does not support formatters for relative time.`);
      const absoluteValue = Math.abs(value);
      const unitString = absoluteValue !== 1 ? unit + fallbackPluralSuffix : unit;
      const label = value > 0 ? fallbackFutureLabel : fallbackPastLabel;
      return formatLabel(label, absoluteValue, unitString);
    }

    registerComponent(JSON.parse('{"adlm":"𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙","ahom":"𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹","arab":"٠١٢٣٤٥٦٧٨٩","arabext":"۰۱۲۳۴۵۶۷۸۹","bali":"᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙","beng":"০১২৩৪৫৬৭৮৯","bhks":"𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙","brah":"𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯","cakm":"𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿","cham":"꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙","deva":"०१२३४५६७८९","fullwide":"０１２３４５６７８９","gong":"𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩","gonm":"𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙","gujr":"૦૧૨૩૪૫૬૭૮૯","guru":"੦੧੨੩੪੫੬੭੮੯","hanidec":"〇一二三四五六七八九","hmng":"𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙","hmnp":"𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉","java":"꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙","kali":"꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉","khmr":"០១២៣៤៥៦៧៨៩","knda":"೦೧೨೩೪೫೬೭೮೯","lana":"᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉","lanatham":"᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙","laoo":"໐໑໒໓໔໕໖໗໘໙","latn":"0123456789","lepc":"᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉","limb":"᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏","mathbold":"𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗","mathdbl":"𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡","mathmono":"𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿","mathsanb":"𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵","mathsans":"𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫","mlym":"൦൧൨൩൪൫൬൭൮൯","modi":"𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙","mong":"᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙","mroo":"𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩","mtei":"꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹","mymr":"၀၁၂၃၄၅၆၇၈၉","mymrshan":"႐႑႒႓႔႕႖႗႘႙","mymrtlng":"꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹","newa":"𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙","nkoo":"߀߁߂߃߄߅߆߇߈߉","olck":"᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙","orya":"୦୧୨୩୪୫୬୭୮୯","osma":"𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩","rohg":"𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹","saur":"꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙","shrd":"𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙","sind":"𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹","sinh":"෦෧෨෩෪෫෬෭෮෯","sora":"𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹","sund":"᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹","takr":"𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉","talu":"᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙","tamldec":"௦௧௨௩௪௫௬௭௮௯","telu":"౦౧౨౩౪౫౬౭౮౯","thai":"๐๑๒๓๔๕๖๗๘๙","tibt":"༠༡༢༣༤༥༦༧༨༩","tirh":"𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙","vaii":"꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩","wara":"𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩","wcho":"𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹"}'), {
      tmpl: _tmpl$3,
      sel: "lightning-base-components-scoped-imports",
      apiVersion: 60
    });

    // default implementation of localization service. This covers the current usage of the localizationService in the code base.
    // This should be removed/heavily reworked when migrating off Aura
    const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const DATE_FORMAT = {
      short: 'M/d/yyyy',
      medium: 'MMM d, yyyy',
      long: 'MMMM d, yyyy'
    };
    const TIME_FORMAT = {
      short: 'h:mm a',
      medium: 'h:mm:ss a',
      long: 'h:mm:ss a'
    };

    // The parseTime method normalizes the time format so that minor deviations are accepted
    const TIME_FORMAT_SIMPLE = {
      short: 'h:m a',
      medium: 'h:m:s a',
      long: 'h:m:s a'
    };

    // Only works with dates and iso strings
    // formats the date object by ignoring the timezone offset
    // e.g. assume date is Mar 11 2019 00:00:00 GMT+1100:
    // formatDate(date, 'YYYY-MM-DD') -> 2019-03-11
    function formatDate(value, format) {
      let isUTC = false;
      let dateString = value;
      if (typeof value === 'string') {
        dateString = value.split(TIME_SEPARATOR)[0];
        isUTC = true;
      }
      return formatDateInternal(dateString, format, isUTC);
    }

    // Only works with date objects.
    // formats the date object according to UTC.
    // e.g. assume date is Mar 11 2019 00:00:00 GMT+1100:
    // formatDateUTC(date, 'YYYY-MM-DD') -> 2019-03-10
    function formatDateUTC(value, format) {
      return formatDateInternal(value, format, true);
    }

    // Only works with a date object
    function formatTime(date, format) {
      if (!isDate(date)) {
        return new Date('');
      }
      const hours = (date.getHours() + 11) % 12 + 1;
      const suffix = date.getHours() >= 12 ? 'PM' : 'AM';
      switch (format) {
        case STANDARD_TIME_FORMAT:
          // 16:12:32.000
          return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${doublePad(date.getMilliseconds())}`;
        case TIME_FORMAT.short:
          // 4:12 PM;
          return `${hours}:${pad(date.getMinutes())} ${suffix}`;
        case TIME_FORMAT.medium:
        case TIME_FORMAT.long:
        default:
          // 4:12:32 PM;
          return `${hours}:${pad(date.getMinutes())}:${pad(date.getSeconds())} ${suffix}`;
      }
    }

    // Only works with a date object
    // formats the date object according to UTC.
    // e.g. assume date is Mar 11 2019 00:00:00 GMT+1100:
    // formatDateTimeUTC(date) -> 2019-03-10  1:00:00 PM
    function formatDateTimeUTC(value) {
      if (!isDate(value)) {
        return new Date('');
      }
      const date = new Date(value.getTime());
      return `${formatDateUTC(date)}, ${formatTime(addTimezoneOffset(date))}`;
    }

    // parses ISO8601 date/time strings. Currently only used to parse ISO time strings without a TZD. Some examples:
    // 20:00:00.000             -> Feb 26 2019 20:00:00 GMT-0500
    // 2019-03-11               -> Mar 11 2019 00:00:00 GMT-0400
    // 2019-03-11T00:00:00.000Z -> Mar 10 2019 20:00:00 GMT-0400
    function parseDateTimeISO8601(value) {
      let isoString = null;
      let shouldAddOffset = true;
      if (isValidISOTimeString(value)) {
        isoString = `${getTodayInISO()}T${addTimezoneSuffix(value)}`;
      } else if (isValidISODateTimeString(value)) {
        if (value.indexOf(TIME_SEPARATOR) > 0) {
          isoString = addTimezoneSuffix(value);
          shouldAddOffset = false;
        } else {
          isoString = `${value}T00:00:00.000Z`;
        }
      }
      if (isoString) {
        // Browsers differ on how they treat iso strings without a timezone offset (local vs utc time)
        const parsedDate = new Date(isoString);
        if (shouldAddOffset) {
          addTimezoneOffset(parsedDate);
        }
        return parsedDate;
      }
      return null;
    }

    // called by the datepicker and calendar for parsing iso and formatted date strings
    // called by the timepicker to parse the formatted time string
    function parseDateTime(value, format) {
      if (format === STANDARD_DATE_FORMAT && isValidISODateTimeString(value)) {
        return parseDateTimeISO8601(value);
      }
      if (Object.values(DATE_FORMAT).includes(format)) {
        return parseFormattedDate(value, format);
      }
      if (Object.values(TIME_FORMAT_SIMPLE).includes(format)) {
        return parseFormattedTime(value);
      }
      return null;
    }

    // The input to this method is always an ISO string with timezone offset.
    function parseDateTimeUTC(value) {
      return parseDateTimeISO8601(addTimezoneSuffix(value));
    }
    function isBefore(date1, date2, unit) {
      const normalizedDate1 = getDate(date1);
      const normalizedDate2 = getDate(date2);
      if (!normalizedDate1 || !normalizedDate2) {
        return false;
      }
      return startOf(normalizedDate1, unit).getTime() < startOf(normalizedDate2, unit).getTime();
    }

    // unit can be millisecond, minute, day
    function isAfter(date1, date2, unit) {
      const normalizedDate1 = getDate(date1);
      const normalizedDate2 = getDate(date2);
      if (!normalizedDate1 || !normalizedDate2) {
        return false;
      }
      return startOf(normalizedDate1, unit).getTime() > startOf(normalizedDate2, unit).getTime();
    }

    // We're not doing timezone conversion in the default config. Only converting from UTC to system timezone
    function UTCToWallTime(date, timezone, callback) {
      const utcDate = new Date(date.getTime());
      callback(subtractTimezoneOffset(utcDate));
    }

    // We're not doing timezone conversion in the default config. Only converting from system timezone to UTC
    function WallTimeToUTC(date, timezone, callback) {
      const localDate = new Date(date.getTime());
      callback(addTimezoneOffset(localDate));
    }

    // Similar to Aura equivalent; add years for buddhist calendar
    function translateToOtherCalendar(date) {
      return date;
    }

    // Similar to Aura equivalent; subtract years for buddhist calendar
    function translateFromOtherCalendar(date) {
      return date;
    }

    // Translates from latn digits to digits of current locale
    function translateToLocalizedDigits(input) {
      return input;
    }

    // Translates from current locale digits to latn digits
    function translateFromLocalizedDigits(input) {
      return input;
    }

    // This is called from the numberFormat library when the value exceeds the safe length.
    // We currently rely on aura to format large numbers
    function getNumberFormat() {
      return {
        format: value => {
          // eslint-disable-next-line no-console
          console.warn(`The current environment does not support large numbers and the original value of ${value} will be returned.`);
          return value;
        }
      };
    }

    // relativeDateTime (currently the only user of duration) uses unit="minutes"
    // The default implementation here assumes the unit is always minutes.
    function duration(minutes) {
      return new Duration$1(minutes * 60 * 1000);
    }
    function displayDuration(value) {
      return value.humanize('en');
    }

    // parses a time string formatted in en-US locale i.e. h:mm:ss a
    function parseFormattedTime(value) {
      // for time strings it's easier to just split on :.\s
      const values = value.trim().split(/[:.\s*]/);
      // at least two parts i.e. 12 PM, and at most 5 parts i.e. 12:34:21.432 PM
      const length = values.length;
      if (!values || length < 2 || length > 5) {
        return null;
      }
      const ampm = values[length - 1];
      const isBeforeNoon = ampm.toLowerCase() === 'am';
      const isAfternoon = ampm.toLowerCase() === 'pm';
      // remove ampm
      values.splice(-1, 1);
      const allNumbers = values.every(item => !isNaN(item));
      if (!isAfternoon && !isBeforeNoon || !allNumbers) {
        return null;
      }
      const hours = values[0];
      const hour24 = pad(isAfternoon ? hours % 12 + 12 : hours % 12);
      const minutes = length >= 3 && values[1] || '0';
      const seconds = length >= 4 && values[2] || '0';
      const milliseconds = length === 5 && values[3] || '0';
      const newDate = new Date(getTodayInISO());
      newDate.setHours(hour24, minutes, seconds, milliseconds);
      return isDate(newDate) ? newDate : null;
    }

    // parses a date string formatted in en-US locale, i.e. MMM d, yyyy
    function parseFormattedDate(value, format) {
      // default to medium style pattern
      let pattern = /^([a-zA-Z]{3})\s*(\d{1,2}),\s*(\d{4})$/;
      switch (format) {
        case DATE_FORMAT.short:
          pattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
          break;
        case DATE_FORMAT.long:
          pattern = /^([a-zA-Z]+)\s*(\d{1,2}),\s*(\d{4})$/;
          break;
      }

      // matches[1]: month, matches[2]: day, matches[3]: year
      const match = pattern.exec(value.trim());
      if (!match) {
        return null;
      }
      let month = match[1];
      const day = match[2];
      const year = match[3];

      // for long and medium style formats, we need to find the month index
      if (format !== DATE_FORMAT.short) {
        month = MONTH_NAMES.findIndex(item => item.toLowerCase().includes(month.toLowerCase()));
        // the actual month for the ISO string is 1 more than the index
        month += 1;
      }
      const isoValue = `${year}-${pad(month)}-${pad(day)}`;
      const newDate = new Date(`${isoValue}T00:00:00.000Z`);
      return isDate(newDate) ? addTimezoneOffset(newDate) : null;
    }
    function formatDateInternal(value, format, isUTC) {
      const date = getDate(value);
      if (!date) {
        // return Invalid Date
        return new Date('');
      }
      if (isUTC && isDate(value)) {
        // if value is an ISO string, we already add the timezone offset when parsing the date string.
        addTimezoneOffset(date);
      }
      switch (format) {
        case STANDARD_DATE_FORMAT:
          return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
        case DATE_FORMAT.short:
          return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        case DATE_FORMAT.long:
          return `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        case DATE_FORMAT.medium:
        default:
          {
            const shortMonthName = MONTH_NAMES[date.getMonth()].substring(0, 3);
            return `${shortMonthName} ${date.getDate()}, ${date.getFullYear()}`;
          }
      }
    }

    // unit can be 'day' or 'minute', otherwise will default to milliseconds. These are the only units that are currently used in the codebase.
    function startOf(date, unit) {
      switch (unit) {
        case 'day':
          date.setHours(0);
          date.setMinutes(0);
        // falls through
        case 'minute':
          date.setSeconds(0);
          date.setMilliseconds(0);
          break;
      }
      return date;
    }
    function isDate(value) {
      return Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime());
    }
    function addTimezoneSuffix(value) {
      // first remove TZD if the string has one, and then add Z
      return removeTimeZoneSuffix(value) + 'Z';
    }
    function addTimezoneOffset(date) {
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
      return date;
    }
    function subtractTimezoneOffset(date) {
      date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
      return date;
    }
    function getDate(value) {
      if (!value) {
        return null;
      }
      if (isDate(value)) {
        return new Date(value.getTime());
      }
      if (isFinite(value) && (typeof value === 'number' || typeof value === 'string')) {
        return new Date(parseInt(value, 10));
      }
      if (typeof value === 'string') {
        return parseDateTimeISO8601(value);
      }
      return null;
    }
    function getTodayInISO() {
      return new Date().toISOString().split('T')[0];
    }
    function pad(n) {
      return Number(n) < 10 ? '0' + n : n;
    }
    function doublePad(n) {
      return Number(n) < 10 ? '00' + n : Number(n) < 100 ? '0' + n : n;
    }
    var localizationService = {
      formatDate,
      formatDateUTC,
      formatTime,
      formatDateTimeUTC,
      parseDateTimeISO8601,
      parseDateTime,
      parseDateTimeUTC,
      isBefore,
      isAfter,
      UTCToWallTime,
      WallTimeToUTC,
      translateToOtherCalendar,
      translateFromOtherCalendar,
      translateToLocalizedDigits,
      translateFromLocalizedDigits,
      getNumberFormat,
      duration,
      displayDuration
    };

    function getConfigFromAura($A) {
      return {
        getLocalizationService() {
          return $A.localizationService;
        },
        getPathPrefix() {
          return $A.getContext().getPathPrefix();
        },
        getToken(name) {
          return $A.getToken(name);
        }
      };
    }
    function createStandAloneConfig() {
      return {
        getLocalizationService() {
          return localizationService;
        },
        getPathPrefix() {
          return ''; // @sfdc.playground path-prefix DO-NOT-REMOVE-COMMENT
        },

        getToken() {
          return undefined; // @sfdc.playground token DO-NOT-REMOVE-COMMENT
        },

        getOneConfig() {
          return {
            densitySetting: ''
          };
        }
      };
    }
    function getDefaultConfig() {
      return isCSR && window.$A !== undefined && window.$A.localizationService ? getConfigFromAura(window.$A) : createStandAloneConfig();
    }

    getDefaultConfig();

    const validNameRe = /^([a-zA-Z]+):([a-zA-Z]\w*)$/;
    Object.assign(Object.create(null), {
      action: 'lightning.actionSprite',
      custom: 'lightning.customSprite',
      doctype: 'lightning.doctypeSprite',
      standard: 'lightning.standardSprite',
      utility: 'lightning.utilitySprite'
    });
    Object.assign(Object.create(null), {
      action: 'lightning.actionSpriteRtl',
      custom: 'lightning.customSpriteRtl',
      doctype: 'lightning.doctypeSpriteRtl',
      standard: 'lightning.standardSpriteRtl',
      utility: 'lightning.utilitySpriteRtl'
    });
    Object.assign(Object.create(null), {
      'lightning.actionSprite': '/assets/icons/action-sprite/svg/symbols.svg',
      'lightning.actionSpriteRtl': '/assets/icons/action-sprite/svg/symbols.svg',
      'lightning.customSprite': '/assets/icons/custom-sprite/svg/symbols.svg',
      'lightning.customSpriteRtl': '/assets/icons/custom-sprite/svg/symbols.svg',
      'lightning.doctypeSprite': '/assets/icons/doctype-sprite/svg/symbols.svg',
      'lightning.doctypeSpriteRtl': '/assets/icons/doctype-sprite/svg/symbols.svg',
      'lightning.standardSprite': '/assets/icons/standard-sprite/svg/symbols.svg',
      'lightning.standardSpriteRtl': '/assets/icons/standard-sprite/svg/symbols.svg',
      'lightning.utilitySprite': '/assets/icons/utility-sprite/svg/symbols.svg',
      'lightning.utilitySpriteRtl': '/assets/icons/utility-sprite/svg/symbols.svg'
    });
    const getMatchAtIndex = index => iconName => {
      const result = validNameRe.exec(iconName);
      return result ? result[index] : '';
    };
    const getName = getMatchAtIndex(2);
    const isValidName = iconName => validNameRe.test(iconName);

    var dir = 'ltr';

    // Cache for promises that import icon templates
    const importPromises = {};
    const iconTemplateCache = {};
    function hasIconLibrary(dir, category) {
      const cacheKey = makeCacheKey(dir, category);
      return !!iconTemplateCache[cacheKey];
    }
    function getIconLibrary(dir, category) {
      const cacheKey = makeCacheKey(dir, category);
      return iconTemplateCache[cacheKey] || null;
    }
    function fetchIconLibrary(dir, category) {
      const cacheKey = makeCacheKey(dir, category);

      // If icon template is being requested, return the cached promise
      if (importPromises[cacheKey]) {
        return importPromises[cacheKey];
      }
      const promise = fetchIconTemplate(dir, category);
      promise.then(tmpl => {
        iconTemplateCache[cacheKey] = tmpl;
        delete importPromises[cacheKey];
      }).catch(() => {
        delete importPromises[cacheKey];
      });

      // Cache the promise to import
      importPromises[cacheKey] = promise;
      return promise;
    }
    function makeCacheKey(dir, category) {
      return `${category}${dir}`;
    }

    // eslint-disable-next-line @lwc/lwc/no-async-await
    async function fetchIconTemplate(dir, category) {
      if (dir === 'rtl') {
        switch (category) {
          case 'utility':
            {
              // eslint-disable-next-line @lwc/lwc/no-async-await
              const {
                default: Lib
              } = await import('lightning/iconSvgTemplatesUtilityRtl');
              return Lib;
            }
          case 'action':
            {
              // eslint-disable-next-line @lwc/lwc/no-async-await
              const {
                default: Lib
              } = await import('lightning/iconSvgTemplatesActionRtl');
              return Lib;
            }
          case 'standard':
            {
              // eslint-disable-next-line @lwc/lwc/no-async-await
              const {
                default: Lib
              } = await import('lightning/iconSvgTemplatesStandardRtl');
              return Lib;
            }
          case 'doctype':
            {
              // eslint-disable-next-line @lwc/lwc/no-async-await
              const {
                default: Lib
              } = await import('lightning/iconSvgTemplatesDoctypeRtl');
              return Lib;
            }
          case 'custom':
            {
              // eslint-disable-next-line @lwc/lwc/no-async-await
              const {
                default: Lib
              } = await import('lightning/iconSvgTemplatesCustomRtl');
              return Lib;
            }
          default:
            return null;
        }
      } else {
        switch (category) {
          case 'utility':
            {
              // eslint-disable-next-line @lwc/lwc/no-async-await
              const {
                default: Lib
              } = await import('lightning/iconSvgTemplatesUtility');
              return Lib;
            }
          case 'action':
            {
              // eslint-disable-next-line @lwc/lwc/no-async-await
              const {
                default: Lib
              } = await import('lightning/iconSvgTemplatesAction');
              return Lib;
            }
          case 'standard':
            {
              // eslint-disable-next-line @lwc/lwc/no-async-await
              const {
                default: Lib
              } = await import('lightning/iconSvgTemplatesStandard');
              return Lib;
            }
          case 'doctype':
            {
              // eslint-disable-next-line @lwc/lwc/no-async-await
              const {
                default: Lib
              } = await import('lightning/iconSvgTemplatesDoctype');
              return Lib;
            }
          case 'custom':
            {
              // eslint-disable-next-line @lwc/lwc/no-async-await
              const {
                default: Lib
              } = await import('lightning/iconSvgTemplatesCustom');
              return Lib;
            }
          default:
            return null;
        }
      }
    }

    class LightningPrimitiveIcon extends LightningElement {
      constructor(...args) {
        super(...args);
        this.src = void 0;
        this.svgClass = void 0;
        this._size = 'medium';
        this._variant = '';
        this._iconLibrary = null;
        this._iconName = null;
      }
      get size() {
        return this._size;
      }
      set size(val) {
        this._size = val;
        this.setAttribute('size', this.normalizeSize(this._size));
      }
      get variant() {
        return this._variant;
      }
      set variant(val) {
        this._variant = val;
        this.setAttribute('variant', this.normalizeVariant(this._variant));
      }
      get iconName() {
        return this._iconName;
      }
      set iconName(value) {
        if (value !== this._iconName) {
          this._iconName = value;
          this.requestIconTemplates();
        }
      }
      get category() {
        if (isValidName(this._iconName)) {
          const [spriteName] = this._iconName.split(':');
          return spriteName;
        }
        return null;
      }
      get isReady() {
        return !!this._iconLibrary;
      }

      // eslint-disable-next-line @lwc/lwc/no-async-await
      async requestIconTemplates() {
        if (hasIconLibrary(dir, this.category)) {
          this._iconLibrary = getIconLibrary(dir, this.category);
          return;
        }
        if (this.category) {
          try {
            this._iconLibrary = null;
            if (isCSR) {
              this._iconLibrary = await fetchIconLibrary(dir, this.category);
            }
          } catch (e) {
            // eslint-disable-next-line no-console
            console.warn(`<lightning-primitive-icon> failed to dynamically import icon templates for ${this.category}: ${e.message}`);
          }
        }
      }
      renderedCallback() {
        if (this.isReady || this.iconName !== this.prevIconName) {
          this.prevIconName = this.iconName;
        }
      }
      render() {
        if (this.isReady) {
          // If src is present, should use default template reply on given svg src
          if (!this.src) {
            const name = this.iconName;
            if (isValidName(name)) {
              const [spriteName, iconName] = name.split(':');
              const template = this._iconLibrary[`${spriteName}_${iconName}`];
              if (template) {
                // manually attach the stylesheets in native shadow mode
                if (!this.template.synthetic) {
                  template.stylesheets = iconStylesheets;
                }
                return template;
              }
            }
          }
        }
        return _tmpl$4;
      }
      get href() {
        return this.src || '';
      }
      get name() {
        return getName(this.iconName);
      }
      normalizeSize(val) {
        return normalizeString(val, {
          fallbackValue: 'medium',
          validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
        });
      }
      normalizeVariant(val) {
        // NOTE: Leaving a note here because I just wasted a bunch of time
        // investigating why both 'bare' and 'inverse' are supported in
        // lightning-primitive-icon. lightning-icon also has a deprecated
        // 'bare', but that one is synonymous to 'inverse'. This 'bare' means
        // that no classes should be applied. So this component needs to
        // support both 'bare' and 'inverse' while lightning-icon only needs to
        // support 'inverse'.
        return normalizeString(val, {
          fallbackValue: '',
          validValues: ['bare', 'error', 'inverse', 'warning', 'success']
        });
      }
      get computedClass() {
        const classes = classSet(this.svgClass);
        if (this._variant !== 'bare') {
          classes.add('slds-icon');
        }
        switch (this._variant) {
          case 'error':
            classes.add('slds-icon-text-error');
            break;
          case 'warning':
            classes.add('slds-icon-text-warning');
            break;
          case 'success':
            classes.add('slds-icon-text-success');
            break;
          case 'inverse':
          case 'bare':
            break;
          default:
            // if custom icon is set, we don't want to set
            // the text-default class
            if (!this.src) {
              classes.add('slds-icon-text-default');
            }
        }
        if (this._size !== 'medium') {
          classes.add(`slds-icon_${this._size}`);
        }
        return classes.toString();
      }
      /*LWC compiler v5.1.0*/
    }
    registerDecorators(LightningPrimitiveIcon, {
      publicProps: {
        src: {
          config: 0
        },
        svgClass: {
          config: 0
        },
        size: {
          config: 3
        },
        variant: {
          config: 3
        },
        iconName: {
          config: 3
        }
      },
      fields: ["_size", "_variant", "_iconLibrary", "_iconName"]
    });
    var _lightningPrimitiveIcon = registerComponent(LightningPrimitiveIcon, {
      tmpl: _tmpl$4,
      sel: "lightning-primitive-icon",
      apiVersion: 60
    });

    function tmpl$2($api, $cmp, $slotset, $ctx) {
      const {ti: api_tab_index, b: api_bind, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
      const {_m0, _m1, _m2} = $ctx;
      return [api_element("button", {
        className: $cmp.computedButtonClass,
        attrs: {
          "disabled": $cmp.disabled ? "" : null,
          "aria-disabled": $cmp.disabled,
          "name": $cmp.name,
          "accesskey": $cmp.accessKey,
          "title": $cmp.title,
          "type": $cmp.normalizedType,
          "value": $cmp.value,
          "aria-atomic": $cmp.computedAriaAtomic,
          "aria-busy": $cmp.computedAriaBusy,
          "aria-label": $cmp.ariaLabel,
          "aria-expanded": $cmp.computedAriaExpanded,
          "aria-haspopup": $cmp.computedAriaHasPopup,
          "aria-live": $cmp.computedAriaLive,
          "aria-pressed": $cmp.computedAriaPressed,
          "aria-relevant": $cmp.computedAriaRelevant,
          "part": "button",
          "tabindex": api_tab_index($cmp.tabIndex)
        },
        key: 0,
        on: {
          "focus": _m0 || ($ctx._m0 = api_bind($cmp.handleButtonFocus)),
          "blur": _m1 || ($ctx._m1 = api_bind($cmp.handleButtonBlur)),
          "click": _m2 || ($ctx._m2 = api_bind($cmp.handleButtonClick))
        }
      }, [$cmp.showIconLeft ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
        props: {
          "part": "start",
          "iconName": $cmp.iconName,
          "svgClass": $cmp.computedIconClass,
          "variant": "bare"
        },
        key: 1
      }) : null, api_text(api_dynamic_text($cmp.label)), $cmp.showIconRight ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
        props: {
          "part": "end",
          "iconName": $cmp.iconName,
          "svgClass": $cmp.computedIconClass,
          "variant": "bare"
        },
        key: 2
      }) : null])];
      /*LWC compiler v5.1.0*/
    }
    var _tmpl$2 = registerTemplate(tmpl$2);
    tmpl$2.stylesheets = [];
    tmpl$2.stylesheetToken = "lwc-31cthfl1g6j";
    tmpl$2.legacyStylesheetToken = "mcmclightning-button_button";
    freezeTemplate(tmpl$2);

    // Goal: Move all this to a utility

    /**
     * Added on click.
     */
    const CLICK_CLASS = 'slds-kx-is-animating-from-click';

    /**
     * Kinetics Types.
     */
    const KineticsType = {
      Underline: 'underline',
      Ripple: 'ripple'
    };

    /**
     * Map variants to the Kinetics attributes.
     */
    const variantKinectAttributes = {
      base: {
        'kx-scope': 'button',
        'kx-type': KineticsType.Underline
      },
      neutral: {
        'kx-scope': 'button-neutral',
        'kx-type': KineticsType.Ripple
      },
      brand: {
        'kx-scope': 'button-brand',
        'kx-type': KineticsType.Ripple
      },
      'brand-outline': {
        'kx-scope': 'button-outline',
        'kx-type': KineticsType.Ripple
      },
      destructive: {
        'kx-scope': 'button-filled',
        'kx-type': KineticsType.Ripple
      },
      'destructive-text': {
        'kx-scope': 'button-outline',
        'kx-type': KineticsType.Ripple
      },
      inverse: {
        'kx-scope': 'button-outline',
        'kx-type': KineticsType.Ripple
      },
      success: {
        'kx-scope': 'button-filled',
        'kx-type': KineticsType.Ripple
      }
    };

    /**
     * Retrieve a list of attributes by the variant.
     *
     * @param {string} variant
     */
    function getKineticsAttributes(variant) {
      if (!variant) {
        console.warn('getKineticsAttributes: variant is required');
        return [];
      }
      const attributes = [];
      const map = variantKinectAttributes[variant];
      Object.keys(map).forEach(attribute => {
        attributes.push({
          name: attribute,
          value: map[attribute]
        });
      });
      return attributes;
    }
    const previousTimeRef = {};
    const requestRef = {};
    const previousPointerRef = {};
    const pointerRef = {};

    /**
     * Get component name from kx-scope.
     *
     * @param {HtmlElement} element Element
     */
    function getComponentName(element) {
      const kxScope = element.getAttribute('kx-scope');
      const match = kxScope ? kxScope.match(/^(\w+)/) : null;
      return match ? match[1] : '';
    }

    /**
     * Set x, y CSS Mouse mouse position.
     *
     * @param {HtmlElement} element Element
     */
    function setCssVariables(element) {
      if (!pointerRef || !pointerRef.current || pointerRef.current === previousPointerRef.current) {
        return;
      }
      const {
        offsetX,
        offsetY
      } = pointerRef.current;
      const component = getComponentName(element);
      element.style.setProperty(`--slds-kx-${component}-pointer-position-x`, `${offsetX}px`);
      const kxType = element.getAttribute('kx-type');
      if (kxType !== KineticsType.Underline) {
        element.style.setProperty(`--slds-kx-${component}-pointer-position-y`, `${offsetY}px`);
      }
    }

    /**
     * Cleanup CSS Variables.
     *
     * @param {HtmlElement} element Element
     */
    function removeCssVariables(element) {
      if (!element) {
        return;
      }
      const component = getComponentName(element);
      element.style.removeProperty(`--slds-kx-${component}-pointer-position-x`);
      element.style.removeProperty(`--slds-kx-${component}-pointer-position-y`);
    }
    function handleMouseMove(event) {
      if (!event) {
        return;
      }
      const {
        offsetX,
        offsetY
      } = event;
      pointerRef.current = {
        offsetX,
        offsetY
      };
    }
    function handleMouseEnter(event) {
      const {
        target
      } = event;
      enterAnimate(target);
    }

    /**
     * Attach animation logic.
     *
     * @param {HtmlElement} element Element
     */
    function animate(element) {
      if (!element) {
        return;
      }
      element.addEventListener('mouseenter', handleMouseEnter);
    }
    function enterAnimate(element, timestamp) {
      const kxType = element.getAttribute('kx-type');
      function handleClick() {
        clickAnimate(element);
      }
      function handleMouseLeave() {
        window.cancelAnimationFrame(requestRef.current);
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('click', handleClick);
        element.removeEventListener('mouseleave', handleMouseLeave);
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        setTimeout(() => {
          removeCssVariables(element);
        }, 250);
      }
      if (!timestamp) {
        if (kxType !== KineticsType.Underline) {
          element.addEventListener('click', handleClick);
        }
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mousemove', handleMouseMove);
      }
      if (previousTimeRef.current !== undefined) {
        setCssVariables(element);
        previousPointerRef.current = pointerRef.current;
      }
      previousTimeRef.current = timestamp;
      // eslint-disable-next-line @lwc/lwc/no-async-operation
      requestRef.current = window.requestAnimationFrame(timestamp2 => {
        enterAnimate(element, timestamp2);
      });
    }
    let cacheHandleAnimationEnd;
    function getSingletonHandleAnimationEnd(element) {
      if (cacheHandleAnimationEnd) {
        return cacheHandleAnimationEnd;
      }
      cacheHandleAnimationEnd = function () {
        element.classList.remove(CLICK_CLASS);
        element.removeEventListener('animationend', cacheHandleAnimationEnd);
      };
      return cacheHandleAnimationEnd;
    }
    function clickAnimate(element) {
      const handleAnimationEnd = getSingletonHandleAnimationEnd(element);
      element.removeEventListener('animationend', handleAnimationEnd);
      element.classList.remove(CLICK_CLASS);
      // Restart a css animation allowing another animationend event.
      // Why? Rapidly clicking the button for a smooth ripple.
      // eslint-disable-next-line no-void
      void element.offsetWidth;
      element.addEventListener('animationend', handleAnimationEnd);
      element.classList.add(CLICK_CLASS);
    }

    const stc0$1 = [];
    function tmpl$1($api, $cmp, $slotset, $ctx) {
      return stc0$1;
      /*LWC compiler v5.1.0*/
    }
    var _tmpl$1 = registerTemplate(tmpl$1);
    tmpl$1.stylesheets = [];
    tmpl$1.stylesheetToken = "lwc-50rp014c9i6";
    tmpl$1.legacyStylesheetToken = "lightning-primitiveButton_primitiveButton";
    freezeTemplate(tmpl$1);

    // borrowed from bootstrap
    const screenReaderOnlyStyles = `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
`;
    let microtaskQueued = false;
    const queue = [];
    function flushQueue() {
      const sortedQueue = [...queue].sort((a, b) => a.priority - b.priority);
      queue.length = 0;
      microtaskQueued = false;
      sortedQueue.forEach(({
        callback
      }) => callback());
    }

    // Queue a microtask, but execute with the given priority (lower priority runs first)
    function queueMicrotaskWithPriority(priority, callback) {
      queue.push({
        callback,
        priority
      });
      if (microtaskQueued) {
        return;
      }
      microtaskQueued = true;
      Promise.resolve().then(flushQueue);
    }

    // borrowed from https://github.com/salesforce/kagekiri/blob/cfd0699/src/index.js#L18-L31
    function getChildNodesIgnoringShadowRoot(node) {
      if (node.shadowRoot) {
        // shadow host
        return node.shadowRoot.childNodes;
      } else if (typeof node.assignedNodes === 'function') {
        // slot
        // If the slot has assigned elements, then those
        // should be shown. Otherwise the (default) children should be shown.
        const assigned = node.assignedNodes();
        return assigned.length ? assigned : node.childNodes;
      }
      // regular element
      return node.childNodes;
    }

    // borrowed from https://github.com/salesforce/kagekiri/blob/cfd0699/src/index.js#L72-L87
    function getParentIgnoringShadowRoot(element) {
      // If an element is slotted, ignore the "real" parent and use the shadow DOM parent.
      // Unless the slot is also slotted; just return the parent element in this case.
      if (typeof element.assignedNodes !== 'function' && element.assignedSlot && element.assignedSlot.parentElement) {
        return element.assignedSlot.parentElement;
      }
      if (element.parentElement) {
        return element.parentElement;
      }
      // if an element is inside the shadow DOM, break outside of it
      const rootNode = element.getRootNode();
      /* istanbul ignore else */
      if (rootNode !== document) {
        return rootNode.host;
      }
      return null;
    }
    function isAncestor(node, possibleAncestor) {
      let ancestor = node;
      while (ancestor !== null && ancestor !== undefined) {
        ancestor = getParentIgnoringShadowRoot(ancestor);
        if (ancestor === possibleAncestor) {
          return true;
        }
      }
      return false;
    }

    // MutationObserver that deeply observes open shadow roots

    class DeepMutationObserver {
      constructor(rootNode) {
        this._observers = [];
        this._callbacks = [];
        const observedNodes = [];

        // Avoid adding a mutation observer to a node when its ancestor is already being observed
        // When we cross shadow boundaries, Node.contains() will automatically return false because
        // it's not an ancestor-descendant relationship in the same shadow root
        const alreadyObserved = node => {
          return observedNodes.some(otherNode => otherNode.contains(node));
        };
        const observe = node => {
          if (!alreadyObserved(node)) {
            observedNodes.push(node);
            const observer = new MutationObserver(() => this._mutationCallback());
            observer.observe(node, {
              subtree: true,
              attributes: true,
              childList: true,
              characterData: true
            });
            this._observers.push(observer);
          }
          getChildNodesIgnoringShadowRoot(node).forEach(child => observe(child));
        };
        observe(rootNode);
      }
      onMutation(callback) {
        this._callbacks.push(callback);
      }
      _mutationCallback() {
        queueMicrotaskWithPriority( /* priority */0, () => this._callbacks.forEach(callback => callback()));
      }
      disconnect() {
        this._observers.forEach(observer => observer.disconnect());
        this._observers = undefined;
        this._callbacks = undefined;
      }
    }

    // Figure out what tasks we actually need to do, based on the minimal

    function collateTasks(tasks) {
      const mapOfFromRootsToTasks = new Map();
      tasks.forEach(task => {
        // TODO: fast path if both nodes have the same shadow root
        const {
          fromNode
        } = task;
        const fromRoot = fromNode.getRootNode();
        let collatedTask = mapOfFromRootsToTasks.get(fromRoot);
        if (!collatedTask) {
          collatedTask = {
            relationships: [],
            redundantChildNodes: new Set()
          };
          mapOfFromRootsToTasks.set(fromRoot, collatedTask);
        }
        collatedTask.relationships.push(task);
      });

      // find the common ancestor for all toNodes
      mapOfFromRootsToTasks.forEach(value => {
        const {
          relationships,
          redundantChildNodes
        } = value;
        const allToNodes = relationships.map(relationship => relationship.toNodes).flat();
        for (let i = 0; i < allToNodes.length; i++) {
          for (let j = i + 1; j < allToNodes.length; j++) {
            const toNodeA = allToNodes[i];
            const toNodeB = allToNodes[j];
            if (toNodeA && toNodeB && i !== j) {
              if (isAncestor(toNodeA, toNodeB)) {
                // B is an ancestor of A
                redundantChildNodes.add(toNodeA);
              } else if (isAncestor(toNodeB, toNodeA)) {
                // A is an ancestor of B
                redundantChildNodes.add(toNodeB);
              }
            }
          }
        }
      });
      return mapOfFromRootsToTasks;
    }
    function getAttributes(node) {
      const res = {};
      const {
        attributes
      } = node;
      for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i];
        res[attribute.name] = attribute.value;
      }
      return res;
    }
    const stableIds = new WeakMap();
    function generateId() {
      return 'shadow-aria-' + Math.floor(Math.random() * 1000000000).toString(16);
    }
    function getStableId(referenceNode) {
      let id = stableIds.get(referenceNode);
      if (!id) {
        id = generateId();
        stableIds.set(referenceNode, id);
      }
      return id;
    }

    // Loosely based on https://github.com/focus-trap/tabbable/blob/67452d0/src/index.js#L1-L13
    // We don't actually need to support the full list; only the things that actually get mirrored (e.g. tag name)
    // Also we are fine with false positives.

    const TABBABLE_TAG_NAMES = new Set(['a', 'audio', 'button', 'details', 'input', 'select', 'summary', 'textarea', 'video']);
    function redirectEvents(fromNode, toNode) {
      if (fromNode && toNode) {
        redirectFocusEvent(fromNode, toNode);
      }
    }
    function redirectFocusEvent(fromNode, toNode) {
      fromNode.addEventListener('focus', event => {
        event.preventDefault();
        event.stopImmediatePropagation();
        toNode.dispatchEvent(new event.constructor(event.type, event));
        toNode.focus();
      });
    }

    // These styles have an impact on accessibility (e.g. accessible name calculation, DOM hierarchy calculation),
    // so they must be mirrored
    const STYLE_PROPS_TO_MIRROR = ['display', 'visibility'];
    function mirrorNode(node, existingNode) {
      if (node.nodeType === Node.TEXT_NODE) {
        if (existingNode && existingNode.nodeType === Node.TEXT_NODE) {
          if (existingNode.textContent !== node.textContent) {
            existingNode.textContent = node.textContent;
          }
          return existingNode;
        }
        return node.cloneNode();
      }
      if (node.nodeType !== Node.ELEMENT_NODE) {
        // comment or other unsupported node
        return document.createComment('shadow-aria-deleted');
      }
      let {
        tagName
      } = node;
      if (['style', 'link', 'script'].includes(tagName.toLowerCase())) {
        // semantically useless
        return document.createComment('shadow-aria-deleted');
      }
      // For custom elements and slots, just render a <div> The problem with custom elements
      // is that they may bring their own shadow DOM, which we don't want. The problem
      // with slots is that they will try to render slot content since we're inside a shadow root.
      if (tagName.includes('-') || tagName.toLowerCase() === 'slot') {
        tagName = 'div';
      }
      let oldAttributes;
      let mirroredNode;
      if (existingNode && existingNode.nodeType === Node.ELEMENT_NODE && existingNode.tagName.toLowerCase() === tagName.toLowerCase()) {
        // reuse existing node
        mirroredNode = existingNode;
        oldAttributes = getAttributes(mirroredNode);
      } else {
        // create a brand-new node
        mirroredNode = document.createElement(tagName);
      }
      const newAttributes = Object.fromEntries([...Object.entries(getAttributes(node))].filter(([name]) => name.toLowerCase().startsWith('aria-') || name.toLowerCase() === 'role'));
      const computedStyle = getComputedStyle(node);
      let newStyle = '';
      STYLE_PROPS_TO_MIRROR.forEach(prop => newStyle += `${prop}:${computedStyle[prop]};`);
      if (computedStyle?.display !== 'contents') {
        // Firefox gets confused by IDs on elements with `display:contents`
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1762999
        newAttributes.id = getStableId(node);
      }
      newAttributes.style = newStyle;
      if (TABBABLE_TAG_NAMES.has(tagName.toLowerCase())) {
        newAttributes.tabindex = '-1';
      }
      Object.entries(newAttributes).forEach(([name, value]) => {
        if (!oldAttributes || oldAttributes[name] !== value) {
          mirroredNode.setAttribute(name, value);
        }
      });
      if (oldAttributes) {
        Object.keys(oldAttributes).forEach(name => {
          if (!(name in newAttributes)) {
            mirroredNode.removeAttribute(name);
          }
        });
      }
      redirectEvents(mirroredNode, node);
      return mirroredNode;
    }
    function patchMirrorDomTree(root, existingRoot, trackedNodes) {
      const trackedNodesToMirroredNodes = new Map();
      const mirrorNodeRecursive = (node, existingNode) => {
        const mirroredNode = mirrorNode(node, existingNode);
        if (mirroredNode.nodeType === Node.COMMENT_NODE) {
          // ignore child nodes of comments; we don't care
          return mirroredNode;
        }
        if (trackedNodes.has(node)) {
          trackedNodesToMirroredNodes.set(node, mirroredNode);
        }
        const childNodes = getChildNodesIgnoringShadowRoot(node);
        if (existingNode && existingNode.childNodes.length === childNodes.length) {
          // patch
          for (let i = 0; i < childNodes.length; i++) {
            const existingChild = existingNode.childNodes[i];
            const child = childNodes[i];
            const newChild = mirrorNodeRecursive(child, existingChild);
            if (newChild !== existingChild) {
              existingNode.replaceChild(newChild, existingChild);
            }
          }
        } else {
          // clear and overwrite
          if (existingNode) {
            while (existingNode.childNodes.length) {
              existingNode.childNodes[existingNode.childNodes.length - 1].remove();
            }
          }
          childNodes.forEach(childNode => {
            const mirrorChild = mirrorNodeRecursive(childNode, null);
            mirroredNode.appendChild(mirrorChild);
          });
        }
        return mirroredNode;
      };
      const mirroredDomTree = mirrorNodeRecursive(root, existingRoot);
      return {
        mirroredNode: mirroredDomTree,
        trackedNodesToMirroredNodes
      };
    }
    function updateAttribute(fromNode, toNodes, relationship) {
      const newIds = toNodes.map(toNode => toNode.getAttribute('id'));
      const existingIds = splitIds$1(fromNode.getAttribute(relationship));
      const linkedNodeIds = newIds.filter(newId => !existingIds.includes(newId));
      const unlinkedNodeIds = existingIds.filter(existingId => !newIds.includes(existingId));
      fromNode.setAttribute(relationship, newIds.join(' '));
      return {
        linkedNodeIds,
        unlinkedNodeIds
      };
    }
    function splitIds$1(ids) {
      if (!ids) {
        return [];
      }
      return ids.trim().split(/\s+/);
    }

    // Certain ARIA relationships only support one target, not multiple.
    const SINGLE_TARGET_ARIA_RELATIONSHIPS = ['aria-activedescendant', 'aria-errormessage'];
    const mirroredEnvironments = new WeakMap();
    const taskQueue = [];
    function processTask(fromRoot, task) {
      const mirroredEnvironment = getMirroredEnvironment(fromRoot);
      mirrorNodes(mirroredEnvironment, task);
      linkAndObserveNodes(mirroredEnvironment, task);
    }
    function getMirroredEnvironment(fromRoot) {
      let mirroredEnvironment = mirroredEnvironments.get(fromRoot);
      if (!mirroredEnvironment) {
        const mirrorRoot = document.createElement('div');
        mirrorRoot.setAttribute('class', 'aria-element-reflection-mirror');
        mirrorRoot.setAttribute('style', screenReaderOnlyStyles);
        const fromAnchorRoot = fromRoot.body || fromRoot; // for document, append to body
        fromAnchorRoot.appendChild(mirrorRoot);
        mirroredEnvironment = {
          redundantChildNodes: new Set(),
          nodesToMirroredNodes: new Map(),
          mirrorRoot
        };
        mirroredEnvironments.set(fromRoot, mirroredEnvironment);
      }
      return mirroredEnvironment;
    }
    function mirrorNodes(mirroredEnvironment, task) {
      const {
        redundantChildNodes,
        nodesToMirroredNodes,
        mirrorRoot
      } = mirroredEnvironment;
      task.redundantChildNodes.forEach(node => redundantChildNodes.add(node));
      const rootToNodes = new Set(task.relationships.map(({
        toNodes
      }) => toNodes).flat().filter(Boolean) // skip nulls
      .filter(_ => !redundantChildNodes.has(_)) // skip redundant child nodes
      );

      rootToNodes.forEach(toNode => {
        const trackedNodes = new Set([...redundantChildNodes, toNode]);
        const {
          node: existingMirroredNode = null,
          usage = 0
        } = nodesToMirroredNodes.get(toNode) || {};
        const {
          mirroredNode,
          trackedNodesToMirroredNodes
        } = patchMirrorDomTree(toNode, existingMirroredNode, trackedNodes);
        if (mirroredNode !== existingMirroredNode) {
          // The following line should never happen, but I feel safer having it in
          /* istanbul ignore if */
          if (existingMirroredNode) {
            mirrorRoot.removeChild(existingMirroredNode);
          }
          mirrorRoot.appendChild(mirroredNode);
        }
        trackedNodesToMirroredNodes.forEach((trackedMirroredNode, trackedNode) => nodesToMirroredNodes.set(trackedNode, {
          node: trackedMirroredNode,
          usage
        }));
      });
    }
    function linkAndObserveNodes(mirroredEnvironment, task) {
      const {
        nodesToMirroredNodes
      } = mirroredEnvironment;
      task.relationships.forEach(collatedRelationship => {
        const {
          fromNode,
          toNodes,
          relationship,
          track,
          signal,
          mirrorOnly
        } = collatedRelationship;
        if (toNodes?.length) {
          if (!mirrorOnly) {
            const mirroredNodes = toNodes.map(toNode => nodesToMirroredNodes.get(toNode).node);
            const {
              linkedNodeIds,
              unlinkedNodeIds
            } = updateAttribute(fromNode, mirroredNodes, relationship);
            updateNodeUsage(mirroredEnvironment, unlinkedNodeIds, linkedNodeIds);
            if (track) {
              observeNode(fromNode, toNodes, signal);
            }
          }
        } else {
          // toNodes not existing indicates the relationship is severed
          const {
            unlinkedNodeIds
          } = updateAttribute(fromNode, [], relationship);
          updateNodeUsage(mirroredEnvironment, unlinkedNodeIds);
          fromNode.removeAttribute(relationship);
        }
      });
    }
    function updateNodeUsage(mirroredEnvironment, unlinkedNodes, linkedNodes = []) {
      const {
        nodesToMirroredNodes,
        mirrorRoot
      } = mirroredEnvironment;
      nodesToMirroredNodes.forEach((mirroredNode, node) => {
        if (linkedNodes.includes(mirroredNode.node.id)) {
          mirroredNode.usage++;
        } else if (unlinkedNodes.includes(mirroredNode.node.id) && --mirroredNode.usage <= 0) {
          // If mirrored node is no longer used, remove it from the mirrored environment
          nodesToMirroredNodes.delete(node);
          // If the mirrored node's parent is not the root, then its parent node
          // is being mirrored. Only that parent node can be removed at the top level
          if (mirroredNode.node.parentElement === mirrorRoot) {
            mirrorRoot.removeChild(mirroredNode.node);
          }
        }
      });
    }
    function observeNode(fromNode, toNodes, signal) {
      toNodes.forEach(toNode => {
        const mutationObserver = new DeepMutationObserver(toNode);
        mutationObserver.onMutation(() => {
          updateAriaRelationship(fromNode, [toNode]);
        });
        if (signal) {
          signal.addEventListener('abort', () => {
            mutationObserver.disconnect();
          });
        }
      });
    }
    function processQueue() {
      // Process multiple tasks together so we can collate
      const mapOfFromRootsToTasks = collateTasks(taskQueue);
      taskQueue.length = 0;
      mapOfFromRootsToTasks.forEach((task, fromRoot) => processTask(fromRoot, task));
    }
    function updateAriaRelationship(fromNode, toNodes) {
      queueTask({
        fromNode,
        toNodes,
        mirrorOnly: true
      });
    }
    function queueTask(task) {
      taskQueue.push(task);
      queueMicrotaskWithPriority( /* priority */1, processQueue);
    }

    // We accept an Element, null, or an Array of Elements
    function massageToNodes(toNodes, relationship) {
      if (!Array.isArray(toNodes)) {
        toNodes = [toNodes];
      }
      toNodes = toNodes.filter(Boolean); // remove falsy values

      if (toNodes.length > 1 && SINGLE_TARGET_ARIA_RELATIONSHIPS.includes(relationship)) {
        // Certain ARIA relationships only support one target, not multiple. For those, we should warn
        // when someone tries to set multiple, and only take the first element.
        // See: https://w3c.github.io/aria/#ARIAMixin
        console.warn(`Multiple targets passed to aria relationship "${relationship}". ` + 'This API only accepts a single target. Ignoring elements beyond the first one.');
        toNodes = toNodes.slice(0, 1);
      }
      return toNodes;
    }
    function setAriaRelationship(fromNode, toNodes, relationship, options = {}) {
      const {
        track,
        signal
      } = options;
      toNodes = massageToNodes(toNodes, relationship);
      queueTask({
        fromNode,
        toNodes,
        relationship,
        track,
        signal
      });
    }

    // via https://wicg.github.io/aom/spec/aria-reflection.html#attribute-reflection
    // limited to just those that define an idref relationship

    function setAriaActiveDescendant(fromNode, toNodes, options) {
      setAriaRelationship(fromNode, toNodes, 'aria-activedescendant', options);
    }
    function setAriaControls(fromNode, toNodes, options) {
      setAriaRelationship(fromNode, toNodes, 'aria-controls', options);
    }
    function setAriaDescribedBy(fromNode, toNodes, options) {
      setAriaRelationship(fromNode, toNodes, 'aria-describedby', options);
    }
    function setAriaLabelledBy(fromNode, toNodes, options) {
      setAriaRelationship(fromNode, toNodes, 'aria-labelledby', options);
    }

    /*
        Aria Reflection is used if supported by browser.
        If Aria Reflection is not available, fallback to polyfill
        Aria Reflection: https://wicg.github.io/aom/aria-reflection-explainer.html
        Polyfill: https://git.soma.salesforce.com/lwc/aria-element-reflection
    */
    const SUPPORTED_ATTRIBUTES = new Map([['aria-controls', {
      ariaReflection: 'ariaControlsElements',
      polyfill: setAriaControls
    }], ['aria-labelledby', {
      ariaReflection: 'ariaLabelledByElements',
      polyfill: setAriaLabelledBy
    }], ['aria-describedby', {
      ariaReflection: 'ariaDescribedByElements',
      polyfill: setAriaDescribedBy
    }], ['aria-activedescendant', {
      ariaReflection: 'ariaActiveDescendantElement',
      polyfill: setAriaActiveDescendant
    }]]);
    function extractElements(root, ids) {
      if (typeof ids !== 'string' || ids === '') {
        return [];
      }
      // We must query the elements in the order of ids, so that
      // the content will be extracted in the correct order.
      return splitIds(ids).map(id => root.querySelector(`#${id}`)).filter(el => !!el);
    }
    function splitIds(ids) {
      return ids ? (ids + '').trim().split(/\s+/) : [];
    }
    class AriaObserver {
      constructor(component) {
        this.component = component;
        this.template = component.template;
        this.isNativeShadow = isNativeComponent(component);
        this.state = {};
        this.liveIds = {};
        this.guid = guid();
        this.placeholderContainer = null;
      }
      connectLiveIdRef(refs, callback) {
        const selector = (refs + '').trim().split(/\s+/).map(ref => `[id*="${ref}"]`).join(',');
        const liveId = {
          refs,
          selector,
          callback
        };
        this.liveIds[refs] = liveId;
      }

      /**
       * Connects the internal element and the external reference. It takes an options object with the following keys:
       * @param {String} attribute The name of the aria attribute. Two supported options: `aria-labelledby`, `aria-describedby`, `aria-activedescendant` and `aria-controls`.
       * @param {String} targetSelector The selector to the internal element where the aria attribute should be attached.
       * @param {HTMLElement} targetNode The element where the aria attribute should be attached. If not provided, the `targetSelector` is used.
       * @param {String|Array[String]} relatedNodeIds ID(s) of the external element(s) to which the `targetNode` will be related. Passed as a space separated string `id1 id2 id3`. Combined with `relatedNodes` if both are present.
       * @param {Array[HTMLElement]} relatedNodes an Array of HTMLElement element(s) to which the `targetNode` will be related. Combined with `relatedNodeIds` if both are present.
       */
      connect({
        attribute,
        targetSelector,
        targetNode,
        relatedNodeIds,
        relatedNodes
      }) {
        this.state[attribute] = this.state[attribute] || {};
        const attrState = this.state[attribute];
        attrState.targetNode = targetNode;
        attrState.targetSelector = targetSelector;
        attrState.relatedNodes = (!Array.isArray(relatedNodes) ? [relatedNodes] : relatedNodes).filter(Boolean);
        attrState.relatedNodeIds = Array.isArray(relatedNodeIds) ? relatedNodeIds.join(' ') : relatedNodeIds;
        if (this.component.isConnected) {
          this.privateUpdate(attribute);
        }
      }

      /**
       * Connects the MutationObserver when in native shadow mode and connects the
       * appropriate aria attributes to the correct elements
       * @param {Boolean} isNativeShadow - This flag is used when a subcomponent
       * (like lightning-primitive-input-simple) is in native shadow mode and the parent
       * (lightning-input) that was passed on AriaObserver instantiation is not.
       */
      sync(isNativeShadow) {
        if (isNativeShadow != null) {
          this.isNativeShadow = isNativeShadow;
        }
        if (!this.component.isConnected) {
          throw new Error(`Invalid sync invocation. It can only be invoked during renderedCallback().`);
        }
        if (!this.root) {
          this.root = this.template && this.template.host ? this.template.host.getRootNode() : null;
        }
        this.privateUpdateLiveIds();
        for (const attrName in this.state) {
          if (Object.prototype.hasOwnProperty.call(this.state, attrName)) {
            this.privateUpdate(attrName);
          }
        }
      }
      get privateIsMoRequired() {
        return this.isNativeShadow || Object.keys(this.liveIds).length !== 0;
      }
      get root() {
        return this._root;
      }

      /**
       * Sets the specified root element and observes it. The root element should contain
       * Observes the root element. The root element should contain
       * the related node elements. By default, this is the template host's root node, but can be
       * overridden where required.
       */
      set root(root) {
        this._root = root;
        if (this._root && this.privateIsMoRequired) {
          this.privateCreateMutationObserver();
        }
      }
      privateUpdate(attrName) {
        const {
          targetSelector,
          targetNode = this.template.querySelector(targetSelector),
          relatedNodeIds,
          relatedNodes
        } = this.state[attrName];
        if (!targetNode) {
          return; // nothing to update
        }

        const attribute = SUPPORTED_ATTRIBUTES.get(attrName);
        if (!attribute) {
          throw new Error(`${attrName} is not supported by AriaObserver. Supported attributes: ${Array.from(SUPPORTED_ATTRIBUTES.keys())}`);
        }
        if (this.isNativeShadow) {
          const allRelatedNodes = [...relatedNodes, ...extractElements(this.root, relatedNodeIds)];
          if (targetNode[attribute.ariaReflection]) {
            /*
                Remove any existing polyfill relationships that might have been created
                before the ariaReflection property was available (initial connection can occur before the property
                exists).
            */
            attribute.polyfill(targetNode, null, attrName);
            // Use Aria Reflection to manage relationships
            targetNode[attribute.ariaReflection] = relatedNodes;
          } else {
            attribute.polyfill(targetNode, allRelatedNodes, attrName);
          }
        } else {
          synchronizeAttrs(targetNode, {
            [attrName]: [...splitIds(relatedNodeIds), ...relatedNodes.map(n => n.id)].join(' ')
          });
        }
      }
      privateExtractCorrectElements(selector = '', elements) {
        // Example: 'foo' + '-1'
        const selectors = selector.split(/\s/g);
        const matchSelectors = `(${selectors.join('|')})`;
        const regex = new RegExp(`^${matchSelectors}(-[0-9]+)$`);
        return [...elements].filter(element => {
          return regex.test(element.id);
        });
      }

      /**
       * Observes the root element. The root element should contain
       * the related node elements. By default, this is the template host's root node, but can be
       * overridden where required.
       */
      privateCreateMutationObserver() {
        this.disconnect();
        this.mo = new MutationObserver(() => {
          if (!this.component.isConnected) {
            return; // do nothing when the template is not connected
          }

          this.sync();
        });
        this.mo.observe(this.root, {
          characterData: true,
          childList: true,
          subtree: true
        });
      }
      privateExtractIds(elements) {
        return elements.map(el => {
          return el.getAttribute('id');
        }).join(' ');
      }
      privateUpdateLiveIds() {
        const root = this.template && this.template.host ? this.template.host.getRootNode() : null;

        // if not connected do nothing
        if (!root) {
          return;
        }
        for (const liveId in this.liveIds) {
          if (Object.prototype.hasOwnProperty.call(this.liveIds, liveId)) {
            const thisId = this.liveIds[liveId];
            if (!thisId.elements || !thisId.elements.length) {
              const splitRefIds = splitIds(liveId);
              // element refs are cached
              const refElements = [...root.querySelectorAll(thisId.selector)];
              thisId.elements = refElements.sort((a, b) => {
                const idA = a.getAttribute('id')?.replace(/-[0-9]+$/g, '');
                const idB = b.getAttribute('id')?.replace(/-[0-9]+$/g, '');
                return splitRefIds.indexOf(idA) - splitRefIds.indexOf(idB);
              });
            }
            const newThisId = this.privateExtractCorrectElements(thisId.refs, thisId.elements);
            const newIds = this.privateExtractIds(newThisId);

            // only fire callback if the value changed and the root node has been rendered
            if (newIds.length && newIds !== thisId.ids) {
              thisId.callback(newIds);
              thisId.ids = newIds;
            }
          }
        }
      }
      disconnect() {
        // MutationObservers must be disconnected manually when using @lwc/synthetic-shadow
        // https://lwc.dev/guide/composition#:~:text=memory%20leak
        if (this.mo) {
          this.mo.disconnect();
          this.mo = undefined;
        }
      }
    }
    var AriaObserver$1 = registerComponent(AriaObserver, {
      tmpl: _tmpl$3,
      sel: "lightning-aria-observer",
      apiVersion: 60
    });

    const BUTTON = 'button';
    const ROLE = 'role';

    /**
     * Primitive for button, buttonIcon and buttonIconStateful
     * We try to have those components to set their aria attributes on their template as much as possible
     * to avoid setting those manually, however there are a few instances
     * in which manual setting is still required:
     *
     *  - aria-disabled: Since it dependes on the disabled state, which is controlled by primitive button.
     *  - aria-controls: Abstracts the logic of setting the id-reference on the host element
     *  - aria-cetails: Role that depeneds on AriaObserver for native shadow.
     *  - aria-describedBy: Role that depeneds on AriaObserver for native shadow.
     *  - aria-flowTo: Abstracts the logic of setting the id-reference on the host element.
     *  - aria-labelledby: Role that depeneds on AriaObserver for native shadow.
     *  - aria-owns: Abstracts the logic of setting the id-reference on the host element.
     */
    class LightningPrimitiveButton extends LightningElement {
      /**** COMPONENT PUBLIC APIS ****/
      /**
       * Specifies whether this button should be displayed in a disabled state.
       * Disabled buttons can't be clicked. This value defaults to false.
       *
       * @type {boolean}
       * @default false
       */
      set disabled(value) {
        this.originalDisabledValue = value;
        this.state.disabled = normalizeBoolean(value);
      }
      get disabled() {
        return this.state.disabled;
      }

      /**
       * Specifies a shortcut key to activate or focus an element.
       *
       * @type {string}
       */

      /**
       * Specifies the ID or list of IDs of the element or elements that
       * contain visible descriptive text to describe the button.
       */
      set ariaLabelledBy(value) {
        this.originalAriaLabelledBy = value;
        this.ariaObserver.connect({
          targetSelector: 'button',
          attribute: 'aria-labelledby',
          relatedNodeIds: value
        });
      }
      get ariaLabelledBy() {
        return this.originalAriaLabelledBy;
      }

      /**
       * A space-separated list of element IDs that provide descriptive labels for the button.
       *
       * @type {string}
       */
      set ariaDescribedBy(value) {
        this.originalAriaDescribedBy = value;
        this.ariaObserver.connect({
          targetSelector: 'button',
          attribute: 'aria-describedby',
          relatedNodeIds: value
        });
      }
      get ariaDescribedBy() {
        return this.originalAriaDescribedBy;
      }

      /**
       * A space-separated list of element IDs whose presence or content is controlled by this button.
       *
       * @type {string}
       */
      set ariaControls(value) {
        this.originalAriaControls = value;
        this.setAttribute('aria-controls', value);
        this.setHostRoleAttribute(BUTTON);
      }
      get ariaControls() {
        return this.originalAriaControls;
      }

      /**
       * A space-separated list of element IDs whose presence or content is controlled by this button.
       *
       * @type {string}
       */
      set ariaOwns(value) {
        this.originalAriaOwns = value;
        this.setAttribute('aria-owns', value);
        this.setHostRoleAttribute(BUTTON);
      }
      get ariaOwns() {
        return this.originalAriaOwns;
      }

      /**
       * A space-separated list of element IDs whose presence or content is controlled by this button.
       *
       * @type {string}
       */
      set ariaDetails(value) {
        this.originalAriaDetails = value;
        this.setAttribute('aria-details', value);
        this.setHostRoleAttribute(BUTTON);
      }
      get ariaDetails() {
        return this.originalAriaDetails;
      }

      /**
       * A space-separated list of element IDs whose presence or content is controlled by this button.
       *
       * @type {string}
       */
      set ariaFlowTo(value) {
        this.originalAriaFlowTo = value;
        this.setAttribute('aria-flowto', value);
        this.setHostRoleAttribute(BUTTON);
      }
      get ariaFlowTo() {
        return this.originalAriaFlowTo;
      }

      /**
       * Indicates whether an element that the button controls is expanded or collapsed.
       * Valid values are 'true' or 'false'. The default value is undefined.
       *
       * @type {string}
       * @default undefined
       */
      get ariaExpanded() {
        return this.originalAriaExpanded;
      }
      set ariaExpanded(value) {
        this.originalAriaExpanded = value;
        this.state.ariaExpanded = normalizeString(value, {
          fallbackValue: null,
          validValues: ['true', 'false']
        });
      }
      get computedAriaExpanded() {
        return this.state.ariaExpanded;
      }

      /**
       * Indicates the current "pressed" state of toggle buttons.
       * Valid values are 'true' or 'false'. The default value is undefined.
       *
       * @type {string}
       * @default undefined
       */
      set ariaPressed(value) {
        this.originalAriaPressed = value;
        this.state.ariaPressed = normalizeString(value, {
          fallbackValue: null,
          validValues: ['true', 'false']
        });
      }
      get ariaPressed() {
        return this.originalAriaPressed;
      }
      get computedAriaPressed() {
        return this.state.ariaPressed;
      }

      /**
       * Indicates whether an element that the button controls is expanded or collapsed.
       * Valid values are 'true' or 'false'. The default value is undefined.
       *
       * @type {string}
       * @default undefined
       */
      set ariaHidden(value) {
        this.originalAriaHidden = value;
        this.state.ariaHidden = normalizeString(value, {
          fallbackValue: null,
          validValues: ['true', 'false']
        });
      }
      get ariaHidden() {
        return this.originalAriaHidden;
      }
      get computedAriaHidden() {
        return this.state.ariaHidden;
      }

      /**
       * Indicates the element that represents the current item within a container or set of related elements.
       * For example:
       *   - A page token used to indicate a link within a set of pagination links, where the link is visually styled to
       *   represent the currently-displayed page.
       *   - A step token used to indicate a link within a step indicator for a step-based process, where
       *   the link is visually styled to represent the current step.
       *   - A location token used to indicate the image that is visually highlighted as the current component
       *   of a flow chart.
       *   - A date token used to indicate the current date within a calendar.
       *   - A time token used to indicate the current time within a timetable.
       *
       * @type {string}
       * @default undefined
       */

      /**
       * Indicates that the button has an interactive popup element.
       * Valid values are 'true', 'dialog', 'menu', 'listbox', 'tree', and 'grid' based on ARIA 1.1 specifications.
       * The default value is undefined.
       *
       * @type {string}
       * @default undefined
       */
      set ariaHasPopup(value) {
        this.originalAriaHasPopup = value;
        this.state.ariaHasPopup = normalizeString(value, {
          fallbackValue: null,
          validValues: ['true', 'dialog', 'menu', 'listbox', 'tree', 'grid']
        });
      }
      get ariaHasPopup() {
        return this.originalAriaHasPopup;
      }
      get computedAriaHasPopup() {
        return this.state.ariaHasPopup;
      }

      /**
       * Indicates that the button has an interactive popup element.
       * Valid values are 'true', 'dialog', 'menu', 'listbox', 'tree', and 'grid' based on ARIA 1.1 specifications.
       * The default value is undefined.
       *
       * @type {string}
       * @default undefined
       */
      set ariaRelevant(value) {
        this.originalAriaRelevant = value;
        this.state.ariaRelevant = normalizeString(value, {
          fallbackValue: null,
          validValues: ['additions', 'removals', 'text', 'all']
        });
      }
      get ariaRelevant() {
        return this.originalAriaRelevant;
      }
      get computedAriaRelevant() {
        return this.state.ariaRelevant;
      }

      /**
       * Indicates that the button can be updated when it doesn't have focus.
       * Valid values are 'polite', 'assertive', or 'off'. The polite value causes assistive
       * technologies to notify users of updates at a low priority, generally without interrupting.
       * The assertive value causes assistive technologies to notify users immediately,
       * potentially clearing queued speech updates.
       *
       * @type {string}
       */
      set ariaLive(value) {
        this.originalAriaLive = value;
        this.state.ariaLive = normalizeString(value, {
          fallbackValue: null,
          validValues: ['polite', 'assertive', 'off']
        });
      }
      get ariaLive() {
        return this.originalAriaLive;
      }
      get computedAriaLive() {
        return this.state.ariaLive;
      }

      /**
       * Indicates whether assistive technologies present all, or only parts of,
       * the changed region. Valid values are 'true' or 'false'.
       *
       * @type {string}
       */
      set ariaAtomic(value) {
        this.originalAriaAtomic = value;
        this.state.ariaAtomic = normalizeString(value, {
          fallbackValue: null,
          validValues: ['true', 'false']
        });
      }
      get ariaAtomic() {
        return this.originalAriaAtomic;
      }
      get computedAriaAtomic() {
        return this.state.ariaAtomic;
      }

      /**
       * Indicates an element is being modified and that assistive technologies MAY want to wait
       * until the modifications are complete before exposing them to the user.
       * Refer to W3C aria-busy for more
       *
       * @type {string}
       */
      set ariaBusy(value) {
        this.originalAriaBusy = value;
        this.state.ariaBusy = normalizeString(value, {
          fallbackValue: null,
          validValues: ['true', 'false']
        });
      }
      get ariaBusy() {
        return this.originalAriaBusy;
      }
      get computedAriaBusy() {
        return this.state.ariaBusy;
      }
      get computedButtonClass() {
        const classes = classSet('slds-button');
        classes.add(buttonGroupOrderClass(this.groupOrder));
        return classes.toString();
      }

      /**
       * Sets focus on the element.
       */
      focus() {}

      /**
       * Reserved for internal use only.
       * Describes the order of this element (first, middle or last) inside mcmclightning-button-group.
       * @type {string}
       */

      /**** COMPONENT LIFECYCLE EVENTS ****/

      constructor() {
        super();
        /**** COMPONENT PRIVATE PROPERTIES ****/
        this._initialized = false;
        this.state = {
          ariaAtomic: null,
          ariaBusy: null,
          ariaControls: null,
          ariaDetails: null,
          ariaDescribedBy: null,
          ariaExpanded: null,
          ariaFlowTo: null,
          ariaHasPopup: null,
          ariaHidden: null,
          ariaLabelledBy: null,
          ariaLive: null,
          ariaOwns: null,
          ariaPressed: null,
          ariaRelevant: null,
          disabled: false
        };
        this.originalAriaAtomic = void 0;
        this.originalAriaBusy = void 0;
        this.originalAriaControls = void 0;
        this.originalAriaDetails = void 0;
        this.originalAriaDescribedBy = void 0;
        this.originalAriaExpanded = void 0;
        this.originalAriaFlowTo = void 0;
        this.originalAriaHasPopup = void 0;
        this.originalAriaHidden = void 0;
        this.originalAriaLabelledBy = void 0;
        this.originalAriaLive = void 0;
        this.originalAriaOwns = void 0;
        this.originalAriaPressed = void 0;
        this.originalAriaRelevant = void 0;
        this.originalDisabledValue = void 0;
        this.accessKey = void 0;
        /**
         * Displays tooltip text when the mouse cursor moves over the element.
         *
         * @type {string}
         */
        this.title = void 0;
        /**
         * Label describing the button to assistive technologies.
         *
         * @type {string}
         */
        this.ariaLabel = void 0;
        this.ariaCurrent = void 0;
        /**
         * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
         *
         * @type {string}
         * @default undefined
         */
        this.ariaKeyShortcuts = void 0;
        this.groupOrder = '';
        this.ariaObserver = new AriaObserver$1(this);
        // Workaround for an IE11 bug where click handlers on button ancestors
        // receive the click event even if the button element has the `disabled`
        // attribute set.
        if (isIE11 && isCSR) {
          this.template.addEventListener('click', event => {
            if (this.disabled) {
              event.stopImmediatePropagation();
            }
          });
        }
      }
      connectedCallback() {
        if (!this.ariaObserver) {
          this.ariaObserver = new AriaObserver$1(this);
        }
      }
      renderedCallback() {
        if (this.isConnected) {
          this.ariaObserver.sync();
        }
      }
      disconnectedCallback() {
        if (this.ariaObserver) {
          this.ariaObserver.disconnect();
          this.ariaObserver = undefined;
        }
      }

      /**
       * Utility function to set aria roles on the host element.
       * This is used mainly for native-shadow use cases for aria attributes that
       * depenend on ID references.
       *
       * If the role attribute is present we will respect that, otherwise it will be set to
       * an specific role, in this case button.
       *
       * @type {string}
       * @default undefined
       */
      setHostRoleAttribute(value) {
        let ariaRoleValue = this.getAttribute(ROLE) || value;
        this.setAttribute(ROLE, ariaRoleValue);
      }
      /*LWC compiler v5.1.0*/
    }
    registerDecorators(LightningPrimitiveButton, {
      publicProps: {
        disabled: {
          config: 3
        },
        accessKey: {
          config: 0
        },
        title: {
          config: 0
        },
        ariaLabel: {
          config: 0
        },
        ariaLabelledBy: {
          config: 3
        },
        ariaDescribedBy: {
          config: 3
        },
        ariaControls: {
          config: 3
        },
        ariaOwns: {
          config: 3
        },
        ariaDetails: {
          config: 3
        },
        ariaFlowTo: {
          config: 3
        },
        ariaExpanded: {
          config: 3
        },
        ariaPressed: {
          config: 3
        },
        ariaHidden: {
          config: 3
        },
        ariaCurrent: {
          config: 0
        },
        ariaKeyShortcuts: {
          config: 0
        },
        ariaHasPopup: {
          config: 3
        },
        ariaRelevant: {
          config: 3
        },
        ariaLive: {
          config: 3
        },
        ariaAtomic: {
          config: 3
        },
        ariaBusy: {
          config: 3
        },
        groupOrder: {
          config: 0
        }
      },
      publicMethods: ["focus"],
      track: {
        state: 1
      },
      fields: ["_initialized", "originalAriaAtomic", "originalAriaBusy", "originalAriaControls", "originalAriaDetails", "originalAriaDescribedBy", "originalAriaExpanded", "originalAriaFlowTo", "originalAriaHasPopup", "originalAriaHidden", "originalAriaLabelledBy", "originalAriaLive", "originalAriaOwns", "originalAriaPressed", "originalAriaRelevant", "originalDisabledValue"]
    });
    var LightningPrimitiveButton$1 = registerComponent(LightningPrimitiveButton, {
      tmpl: _tmpl$1,
      sel: "lightning-primitive-button",
      apiVersion: 60
    });

    /**
     * A clickable element used to perform an action.
     */
    class LightningButton extends LightningPrimitiveButton$1 {
      constructor(...args) {
        super(...args);
        this._normalizedVariant = 'neutral';
        this._stretch = false;
        /**
         * The name for the button element.
         * This value is optional and can be used to identify the button in a callback.
         *
         * @type {string}
         */
        this.name = void 0;
        /**
         * The value for the button element.
         * This value is optional and can be used when submitting a form.
         *
         * @type {string}
         */
        this.value = void 0;
        /**
         * The text to be displayed inside the button.
         *
         * @type {string}
         */
        this.label = void 0;
        /**
         * Reserved for internal use only.
         * Should be set to -1 if button should not
         * be focused during tab navigation and should
         * be set to 0 if button should be focused.
         * @type {number}
         */
        this.tabIndex = void 0;
        /**
         * The Lightning Design System name of the icon.
         * Names are written in the format 'utility:down' where 'utility' is the category,
         * and 'down' is the specific icon to be displayed.
         *
         * @type {string}
         */
        this.iconName = void 0;
        /**
         * Describes the position of the icon with respect to the button label.
         * Options include left and right.
         * This value defaults to left.
         *
         * @type {string}
         * @default left
         */
        this.iconPosition = 'left';
        this._originalStretch = false;
        this._normalizedStretch = false;
        /**
         * Specifies the type of button.
         * Valid values are button, reset, and submit.
         * This value defaults to button.
         *
         * @type {string}
         * @default button
         */
        this.type = 'button';
        this._disableAnimation = false;
      }
      /**
       * The variant changes the appearance of the button.
       * Accepted variants include base, neutral, brand, brand-outline, destructive, destructive-text, inverse, and success.
       * This value defaults to neutral.
       *
       * @type {string}
       * @default neutral
       */
      get variant() {
        return this.originalVariant;
      }
      set variant(value) {
        this.originalVariant = value;
        this._normalizedVariant = normalizeString(value, {
          fallbackValue: 'neutral',
          validValues: ['base', 'neutral', 'brand', 'brand-outline', 'destructive', 'destructive-text', 'inverse', 'success']
        });
        reflectAttribute(this, 'variant', this._normalizedVariant);
      }
      /**
       * Setting it to true allows the button to take up the entire available width.
       * This value defaults to false.
       *
       * @type {boolean}
       * @default false
       */
      get stretch() {
        return this._originalStretch;
      }
      set stretch(value) {
        this._originalStretch = value;
        this._normalizedStretch = normalizeBoolean(value);
        reflectAttribute(this, 'stretch', this._normalizedStretch);
      }
      /**
       * Reserved for internal use. If present, disables button animation.
       */
      get disableAnimation() {
        return this._disableAnimation;
      }
      set disableAnimation(value) {
        this._disableAnimation = normalizeBoolean(value);
      }
      render() {
        return _tmpl$2;
      }
      get computedButtonClass() {
        const classes = classSet(super.computedButtonClass);
        return classes.add({
          'slds-button_neutral': this._normalizedVariant === 'neutral',
          'slds-button_brand': this._normalizedVariant === 'brand',
          'slds-button_outline-brand': this._normalizedVariant === 'brand-outline',
          'slds-button_destructive': this._normalizedVariant === 'destructive',
          'slds-button_text-destructive': this._normalizedVariant === 'destructive-text',
          'slds-button_inverse': this._normalizedVariant === 'inverse',
          'slds-button_success': this._normalizedVariant === 'success',
          'slds-button_stretch': this.stretch
        }).toString();
      }
      get normalizedType() {
        return normalizeString(this.type, {
          fallbackValue: 'button',
          validValues: ['button', 'reset', 'submit']
        });
      }
      get normalizedIconPosition() {
        return normalizeString(this.iconPosition, {
          fallbackValue: 'left',
          validValues: ['left', 'right']
        });
      }
      get showIconLeft() {
        return this.iconName && this.normalizedIconPosition === 'left';
      }
      get showIconRight() {
        return this.iconName && this.normalizedIconPosition === 'right';
      }
      get computedIconClass() {
        return classSet('slds-button__icon').add({
          'slds-button__icon_left': this.normalizedIconPosition === 'left',
          'slds-button__icon_right': this.normalizedIconPosition === 'right'
        }).toString();
      }
      handleButtonFocus() {
        this.dispatchEvent(new CustomEvent('focus'));
      }
      handleButtonBlur() {
        this.dispatchEvent(new CustomEvent('blur'));
      }
      handleButtonClick() {
        // In native shadow mode, parent form can't be submitted from within the
        // shadow boundary, so we need to manually find the parent form and submit.
        // Once TD-0118070 is delivered, we can access the parent form using `elementInternals.form`
        if (!this.template.synthetic && this.normalizedType === 'submit') {
          const form = this.template.host.closest('form');
          if (form) {
            form.requestSubmit();
          }
        }
      }

      /**
       * Sets focus on the button.
       */
      focus() {
        if (this._connected) {
          this.button.focus();
        }
      }

      /**
       * Simulates a mouse click on the button.
       */
      click() {
        if (this._connected) {
          this.button.click();
        }
      }
      get button() {
        return isCSR ? this.template.querySelector('button') : null;
      }

      /**
       * Once we are connected, we fire a register event so the button-group (or other) component can register
       * the buttons.
       */
      connectedCallback() {
        super.connectedCallback();
        // Set `data-render-mode` attribute in native shadow mode
        if (!this.template.synthetic) {
          this.setAttribute('data-render-mode', 'shadow');
        }
        if (!this._connected) {
          reflectAttribute(this, 'variant', this._normalizedVariant);
          this._connected = true;
        }
      }
      renderedCallback() {
        // initialize aria attributes in primitiveButton
        super.renderedCallback();
        // button inherits from primitiveButton, button.css not working in this case.
        // change host style to disable pointer event.
        this.template.host.style.pointerEvents = this.disabled ? 'none' : '';
        // setup kinetics
        if (hasAnimation() && !this._disableAnimation) {
          const attributes = getKineticsAttributes(this._normalizedVariant);
          attributes.forEach(({
            name,
            value
          }) => {
            this.button.setAttribute(name, value);
          });
          animate(this.button);
        }
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this._connected = false;
      }
      /*LWC compiler v5.1.0*/
    }
    LightningButton.delegatesFocus = true;
    registerDecorators(LightningButton, {
      publicProps: {
        name: {
          config: 0
        },
        value: {
          config: 0
        },
        label: {
          config: 0
        },
        tabIndex: {
          config: 0
        },
        variant: {
          config: 3
        },
        iconName: {
          config: 0
        },
        iconPosition: {
          config: 0
        },
        stretch: {
          config: 3
        },
        type: {
          config: 0
        },
        disableAnimation: {
          config: 3
        }
      },
      publicMethods: ["focus", "click"],
      fields: ["_normalizedVariant", "_stretch", "_originalStretch", "_normalizedStretch", "_disableAnimation"]
    });
    var _lightningButton = registerComponent(LightningButton, {
      tmpl: _tmpl$2,
      sel: "mcmclightning-button",
      apiVersion: 60
    });
    LightningButton.interopMap = {
      exposeNativeEvent: {
        click: true,
        focus: true,
        blur: true
      }
    };

    const $fragment1 = parseFragment`<h2 class="slds-text-heading_medium slds-m-bottom_medium${0}"${2}>This is the managed chekout component</h2>`;
    const $fragment2 = parseFragment`<p style="color: green"${3}>You checked out successfully</p>`;
    const stc0 = {
      key: 2
    };
    const stc1 = {
      "slds-m-left_x-small": true
    };
    const stc2 = {
      "variant": "brand",
      "label": "Click me to Checkout!",
      "title": "Primary action"
    };
    function tmpl($api, $cmp, $slotset, $ctx) {
      const {st: api_static_fragment, d: api_dynamic_text, t: api_text, h: api_element, b: api_bind, c: api_custom_element} = $api;
      const {_m0} = $ctx;
      return [api_static_fragment($fragment1(), 1), api_element("p", stc0, [api_text("You're webstore id is: " + api_dynamic_text($cmp.webstoreId))]), api_custom_element("mcmclightning-button", _lightningButton, {
        classMap: stc1,
        props: stc2,
        key: 3,
        on: {
          "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
        }
      }), $cmp.checkoutEnabled ? api_static_fragment($fragment2(), 5) : null];
      /*LWC compiler v5.1.0*/
    }
    var _tmpl = registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetToken = "lwc-r7s2bgpc5r";
    tmpl.legacyStylesheetToken = "managed_checkout-embedded_embedded";
    freezeTemplate(tmpl);

    function getModule(key) {
      const mc = window.MANAGED_CHECKOUT_COMPONENT;
      return mc.getModule(key);
    }

    var webstoreId = registerComponent(getModule('@salesforce/webstore/Id'), {
      tmpl: _tmpl$3,
      sel: "@salesforce-webstore-id",
      apiVersion: 60
    });

    class Embedded extends LightningElement {
      constructor(...args) {
        super(...args);
        this.webstoreId = webstoreId;
        this.checkoutEnabled = void 0;
      }
      connectedCallback() {}
      handleClick() {
        this.checkoutEnabled = true;
        setTimeout(() => {
          this.checkoutEnabled = false;
        }, 1000);
      }
      /*LWC compiler v5.1.0*/
    }
    //static renderMode = 'light';
    Embedded.shadowSupportMode = 'native';
    registerDecorators(Embedded, {
      publicProps: {
        webstoreId: {
          config: 0
        },
        checkoutEnabled: {
          config: 0
        }
      }
    });
    var Embedded$1 = registerComponent(Embedded, {
      tmpl: _tmpl,
      sel: "managed_checkout-embedded",
      apiVersion: 60
    });

    // Import the main component and register it as a custom element
    customElements.define("managed_checkout-embedded", Embedded$1.CustomElementConstructor);

})();
