'use strict';

System.register(['aurelia-framework', '../utils/bootstrap-options'], function (_export, _context) {
  "use strict";

  var inject, bindable, bindingMode, observable, BindingEngine, bootstrapOptions, _typeof, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, AubsTypeaheadCustomElement;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      observable = _aureliaFramework.observable;
      BindingEngine = _aureliaFramework.BindingEngine;
    }, function (_utilsBootstrapOptions) {
      bootstrapOptions = _utilsBootstrapOptions.bootstrapOptions;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      _export('AubsTypeaheadCustomElement', AubsTypeaheadCustomElement = (_dec = inject(BindingEngine), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = function () {
        function AubsTypeaheadCustomElement(bindingEngine) {
          var _this = this;

          _classCallCheck(this, AubsTypeaheadCustomElement);

          _initDefineProp(this, 'value', _descriptor, this);

          _initDefineProp(this, 'data', _descriptor2, this);

          _initDefineProp(this, 'disabled', _descriptor3, this);

          _initDefineProp(this, 'openOnFocus', _descriptor4, this);

          _initDefineProp(this, 'resultsLimit', _descriptor5, this);

          _initDefineProp(this, 'focusFirst', _descriptor6, this);

          _initDefineProp(this, 'selectSingleResult', _descriptor7, this);

          _initDefineProp(this, 'loadingText', _descriptor8, this);

          _initDefineProp(this, 'inputClass', _descriptor9, this);

          _initDefineProp(this, 'placeholder', _descriptor10, this);

          _initDefineProp(this, 'key', _descriptor11, this);

          _initDefineProp(this, 'noResultsText', _descriptor12, this);

          _initDefineProp(this, 'waitTime', _descriptor13, this);

          _initDefineProp(this, 'instantCleanEmpty', _descriptor14, this);

          _initDefineProp(this, 'customEntry', _descriptor15, this);

          this.promiseQueue = [];
          this.v4 = false;
          this.displayData = [];

          _initDefineProp(this, 'filter', _descriptor16, this);

          this.focusedIndex = -1;
          this.loading = false;

          this.bindingEngine = bindingEngine;

          this.openListener = function () {
            return _this.openDropdown();
          };
          this.outsideClickListener = function (evt) {
            return _this.handleBlur(evt);
          };
          this.keyDownListener = function (evt) {
            return _this.onKeyDown(evt);
          };
        }

        AubsTypeaheadCustomElement.prototype.bind = function bind() {
          var _this2 = this;

          if (bootstrapOptions.version === 4) {
            this.v4 = true;
          }

          if (Array.isArray(this.data)) {
            this.dataObserver = this.bindingEngine.collectionObserver(this.data).subscribe(function () {
              _this2.checkCustomEntry();
              _this2.applyPlugins();
            });
          }

          this.checkCustomEntry();
        };

        AubsTypeaheadCustomElement.prototype.attached = function attached() {
          if (this.openOnFocus) {
            this.input.addEventListener('focus', this.openListener);
            this.input.addEventListener('click', this.openListener);
          }

          document.addEventListener('click', this.outsideClickListener);
          this.input.addEventListener('keydown', this.keyDownListener);
        };

        AubsTypeaheadCustomElement.prototype.detached = function detached() {
          if (this.dataObserver) {
            this.dataObserver.dispose();
          }

          document.removeEventListener('click', this.outsideClickListener);
          this.input.removeEventListener('keydown', this.keyDownListener);

          if (this.openOnFocus) {
            this.input.removeEventListener('focus', this.openListener);
            this.input.removeEventListener('click', this.openListener);
          }
        };

        AubsTypeaheadCustomElement.prototype.valueChanged = function valueChanged() {
          var newFilter = this.getName(this.value);

          if (newFilter !== this.filter) {
            this.ignoreChange = true;
            this.filter = newFilter;
          }
        };

        AubsTypeaheadCustomElement.prototype.openDropdown = function openDropdown() {
          if (this.dropdown.classList.contains('open')) {
            return;
          }

          this.dropdown.classList.add('open');
          this.focusNone();
          this.applyPlugins();
        };

        AubsTypeaheadCustomElement.prototype.doFocusFirst = function doFocusFirst() {
          if (this.focusFirst && this.displayData.length > 0) {
            this.displayData[0].$focused = true;
            this.focusedIndex = 0;
          }
        };

        AubsTypeaheadCustomElement.prototype.checkCustomEntry = function checkCustomEntry() {
          if (this.data.length > 0 && _typeof(this.data[0]) === 'object') {
            this.customEntry = false;
          }
        };

        AubsTypeaheadCustomElement.prototype.filterChanged = function filterChanged() {
          var _this3 = this;

          if (this.ignoreChange) {
            this.ignoreChange = false;
            return;
          }

          this.applyPlugins().then(function () {
            if (_this3.instantCleanEmpty && _this3.filter.length === 0) {
              _this3.value = null;
            } else if (_this3.customEntry) {
              _this3.value = _this3.filter;
            } else if (_this3.selectSingleResult && _this3.displayData.length === 1) {
              _this3.itemSelected(_this3.displayData[0]);
            }
          });
        };

        AubsTypeaheadCustomElement.prototype.applyPlugins = function applyPlugins() {
          var _this4 = this;

          this.focusNone();
          var localData = void 0;

          if (typeof this.data === 'function') {
            this.displayData = [];
            this.loading = true;

            var promise = this.data({ filter: this.filter, limit: this.resultsLimit }).then(function (data) {
              if (_this4.promiseQueue.length > 1) {
                _this4.promiseQueue.splice(0, 1);
                return;
              }

              _this4.displayData = data;
              _this4.doFocusFirst();
              _this4.promiseQueue.splice(0, 1);
              _this4.loading = false;
            }).catch(function () {
              _this4.loading = false;
              _this4.displayData = [];
              throw new Error('Unable to retrieve data');
            });

            this.promiseQueue.push(promise);
            return promise;
          }

          localData = [].concat(this.data);
          if (this.filter && this.filter.length > 0) {
            localData = this.doFilter(localData);
          }

          if (!this.isNull(this.resultsLimit) && !isNaN(this.resultsLimit)) {
            localData = localData.slice(0, this.resultsLimit);
          }

          this.displayData = localData;
          this.doFocusFirst();

          return Promise.resolve({});
        };

        AubsTypeaheadCustomElement.prototype.focusNone = function focusNone() {
          var focused = this.displayData.find(function (next) {
            return next.$focused;
          });
          if (focused) {
            focused.$focused = false;
          }

          this.focusedIndex = -1;
        };

        AubsTypeaheadCustomElement.prototype.doFilter = function doFilter(toFilter) {
          var _this5 = this;

          return toFilter.filter(function (item) {
            return !_this5.isNull(item) && _this5.getName(item).toLowerCase().indexOf(_this5.filter.toLowerCase()) > -1;
          });
        };

        AubsTypeaheadCustomElement.prototype.getName = function getName(item) {
          if (this.isNull(item)) {
            return '';
          }

          if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
            return item[this.key].toString();
          }

          return item.toString();
        };

        AubsTypeaheadCustomElement.prototype.resetFilter = function resetFilter() {
          if (this.filter.length === 0) {
            this.value = null;
          }

          var newFilter = void 0;
          if (this.isNull(this.value)) {
            newFilter = '';
          } else {
            newFilter = this.getName(this.value);
          }

          if (newFilter !== this.filter) {
            this.ignoreChange = true;
            this.filter = newFilter;
          }
        };

        AubsTypeaheadCustomElement.prototype.handleBlur = function handleBlur(evt) {
          var _this6 = this;

          if (!this.dropdown.classList.contains('open')) {
            return;
          }

          setTimeout(function () {
            if (!_this6.dropdown.contains(evt.target)) {
              _this6.dropdown.classList.remove('open');
              _this6.focusNone();
              _this6.resetFilter();
            }
          }, this.waitTime);
        };

        AubsTypeaheadCustomElement.prototype.itemSelected = function itemSelected(item) {
          this.value = item;
          this.dropdown.classList.remove('open');

          var newFilter = this.getName(this.value);
          if (newFilter !== this.filter) {
            this.ignoreChange = true;
            this.filter = newFilter;
          }
        };

        AubsTypeaheadCustomElement.prototype.isNull = function isNull(item) {
          return item === null || item === undefined;
        };

        AubsTypeaheadCustomElement.prototype.onKeyDown = function onKeyDown(evt) {
          this.dropdown.classList.add('open');

          switch (evt.keyCode) {
            case 40:
              return this.handleDown();
            case 38:
              return this.handleUp();
            case 13:
            case 9:
              return this.handleEnter();
            case 27:
              return this.handleScape();
            default:
              return;
          }
        };

        AubsTypeaheadCustomElement.prototype.handleDown = function handleDown() {
          if (this.focusedIndex >= this.displayData.length - 1) {
            return;
          }

          if (this.focusedIndex >= 0) {
            this.displayData[this.focusedIndex].$focused = false;
          }
          this.displayData[++this.focusedIndex].$focused = true;
        };

        AubsTypeaheadCustomElement.prototype.handleUp = function handleUp() {
          if (this.focusedIndex === 0) {
            return;
          }

          this.displayData[this.focusedIndex--].$focused = false;
          this.displayData[this.focusedIndex].$focused = true;
        };

        AubsTypeaheadCustomElement.prototype.handleEnter = function handleEnter() {
          if (this.displayData.length === 0 || this.focusedIndex < 0) {
            return;
          }

          this.itemSelected(this.displayData[this.focusedIndex]);
        };

        AubsTypeaheadCustomElement.prototype.handleScape = function handleScape() {
          this.dropdown.classList.remove('open');
          this.focusNone();
          this.resetFilter();
        };

        return AubsTypeaheadCustomElement;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec2], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'data', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'openOnFocus', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'resultsLimit', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'focusFirst', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'selectSingleResult', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'loadingText', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'Loading...';
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'inputClass', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'Start typing to get results';
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'key', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'name';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'noResultsText', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'No Results';
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'waitTime', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 350;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'instantCleanEmpty', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'customEntry', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'filter', [observable], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));

      _export('AubsTypeaheadCustomElement', AubsTypeaheadCustomElement);
    }
  };
});