'use strict';

System.register(['aurelia-framework', '../utils/bootstrap-options'], function (_export, _context) {
    "use strict";

    var inject, bindable, bindingMode, observable, BindingEngine, containerless, bootstrapOptions, _typeof, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, AubsTypeaheadCustomElement;

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
            containerless = _aureliaFramework.containerless;
        }, function (_utilsBootstrapOptions) {
            bootstrapOptions = _utilsBootstrapOptions.bootstrapOptions;
        }],
        execute: function () {
            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            _export('AubsTypeaheadCustomElement', AubsTypeaheadCustomElement = (_dec = inject(BindingEngine), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = containerless(_class = (_class2 = function () {
                function AubsTypeaheadCustomElement(bindingEngine) {
                    var _this = this;

                    _classCallCheck(this, AubsTypeaheadCustomElement);

                    _initDefineProp(this, 'data', _descriptor, this);

                    _initDefineProp(this, 'value', _descriptor2, this);

                    _initDefineProp(this, 'key', _descriptor3, this);

                    _initDefineProp(this, 'id', _descriptor4, this);

                    _initDefineProp(this, 'customEntry', _descriptor5, this);

                    _initDefineProp(this, 'resultsLimit', _descriptor6, this);

                    _initDefineProp(this, 'debounce', _descriptor7, this);

                    _initDefineProp(this, 'onSelect', _descriptor8, this);

                    _initDefineProp(this, 'instantCleanEmpty', _descriptor9, this);

                    _initDefineProp(this, 'disabled', _descriptor10, this);

                    _initDefineProp(this, 'openOnFocus', _descriptor11, this);

                    _initDefineProp(this, 'focusFirst', _descriptor12, this);

                    _initDefineProp(this, 'selectSingleResult', _descriptor13, this);

                    _initDefineProp(this, 'autoComplete', _descriptor14, this);

                    _initDefineProp(this, 'loadingText', _descriptor15, this);

                    _initDefineProp(this, 'inputClass', _descriptor16, this);

                    _initDefineProp(this, 'placeholder', _descriptor17, this);

                    _initDefineProp(this, 'noResultsText', _descriptor18, this);

                    this.promiseQueue = [];
                    this.v4 = false;
                    this.displayData = [];

                    _initDefineProp(this, 'filter', _descriptor19, this);

                    this.focusedIndex = -1;
                    this.focusedItem = null;
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

                    this.showClass = bootstrapOptions.version === 4 ? 'show' : 'open';
                };

                AubsTypeaheadCustomElement.prototype.attached = function attached() {
                    this.dropdownMenu = this.dropdown.getElementsByClassNAme("dropdown-menu")[0];

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

                AubsTypeaheadCustomElement.prototype.dataChanged = function dataChanged() {
                    var _this3 = this;

                    if (this.dataObserver) {
                        this.dataObserver.dispose();
                    }

                    if (Array.isArray(this.data)) {
                        this.dataObserver = this.bindingEngine.collectionObserver(this.data).subscribe(function () {
                            _this3.checkCustomEntry();
                            _this3.applyPlugins();
                        });
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
                    if (this.dropdownMenu.classList.contains(this.showClass)) {
                        return;
                    }

                    this.dropdownMenu.classList.add(this.showClass);
                    this.focusNone();
                    this.applyPlugins();
                };

                AubsTypeaheadCustomElement.prototype.doFocusFirst = function doFocusFirst() {
                    if (this.focusFirst && this.displayData.length > 0) {
                        this.focusedIndex = 0;
                        this.focusedItem = this.displayData[0];
                    }
                };

                AubsTypeaheadCustomElement.prototype.checkCustomEntry = function checkCustomEntry() {
                    if (this.data.length > 0 && typeof this.data[0] !== 'string') {
                        this.customEntry = false;
                    }
                };

                AubsTypeaheadCustomElement.prototype.filterChanged = function filterChanged() {
                    var _this4 = this;

                    if (this.ignoreChange) {
                        this.ignoreChange = false;
                        return;
                    }

                    this.applyPlugins().then(function () {
                        if (_this4.instantCleanEmpty && _this4.filter.length === 0) {
                            _this4.value = null;

                            if (typeof _this4.onSelect === 'function') {
                                _this4.onSelect({ item: null });
                            }
                        } else if (_this4.customEntry) {
                            _this4.value = _this4.filter;

                            if (typeof _this4.onSelect === 'function') {
                                _this4.onSelect({ item: _this4.value });
                            }
                        } else if (_this4.selectSingleResult && _this4.displayData.length === 1) {
                            _this4.itemSelected(_this4.displayData[0]);
                        }
                    });
                };

                AubsTypeaheadCustomElement.prototype.applyPlugins = function applyPlugins() {
                    var _this5 = this;

                    this.focusNone();
                    var localData = void 0;

                    if (typeof this.data === 'function') {
                        this.displayData = [];
                        this.loading = true;

                        var promise = this.data({ filter: this.filter, limit: this.resultsLimit }).then(function (data) {
                            if (_this5.promiseQueue.length > 1) {
                                _this5.promiseQueue.splice(0, 1);
                                return;
                            }

                            _this5.displayData = data;
                            _this5.doFocusFirst();
                            _this5.promiseQueue.splice(0, 1);
                            _this5.loading = false;
                        }).catch(function (error) {
                            _this5.loading = false;
                            _this5.displayData = [];
                            throw error;
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
                    this.focusedItem = null;
                    this.focusedIndex = -1;
                };

                AubsTypeaheadCustomElement.prototype.doFilter = function doFilter(toFilter) {
                    var _this6 = this;

                    return toFilter.filter(function (item) {
                        return !_this6.isNull(item) && _this6.getName(item).toLowerCase().indexOf(_this6.filter.toLowerCase()) > -1;
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
                    var _this7 = this;

                    if (!this.dropdownMenu.classList.contains(this.showClass)) {
                        return;
                    }

                    setTimeout(function () {
                        if (!_this7.dropdownMenu.contains(evt.target)) {
                            _this7.dropdownMenu.classList.remove(_this7.showClass);
                            _this7.focusNone();
                            _this7.resetFilter();
                        }
                    }, this.debounce);
                };

                AubsTypeaheadCustomElement.prototype.itemSelected = function itemSelected(item) {
                    this.value = item;
                    this.dropdownMenu.classList.remove(this.showClass);

                    var newFilter = this.getName(this.value);
                    if (newFilter !== this.filter) {
                        this.ignoreChange = true;
                        this.filter = newFilter;
                    }

                    if (typeof this.onSelect === 'function') {
                        this.onSelect({ item: item });
                    }
                };

                AubsTypeaheadCustomElement.prototype.isNull = function isNull(item) {
                    return item === null || item === undefined;
                };

                AubsTypeaheadCustomElement.prototype.onKeyDown = function onKeyDown(evt) {
                    var _this8 = this;

                    if (this.dropdownMenu.classList.contains(this.showClass)) {
                        this.switchKeyCode(evt.keyCode);
                        return;
                    }

                    this.applyPlugins().then(function () {
                        _this8.switchKeyCode(evt.keyCode);
                        _this8.dropdownMenu.classList.add(_this8.showClass);
                    });
                };

                AubsTypeaheadCustomElement.prototype.switchKeyCode = function switchKeyCode(keyCode) {
                    switch (keyCode) {
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

                    this.focusedIndex++;
                    this.focusedItem = this.displayData[this.focusedIndex];
                };

                AubsTypeaheadCustomElement.prototype.handleUp = function handleUp() {
                    if (this.focusedIndex === 0) {
                        return;
                    }

                    this.focusedIndex--;
                    this.focusedItem = this.displayData[this.focusedIndex];
                };

                AubsTypeaheadCustomElement.prototype.handleEnter = function handleEnter() {
                    if (this.displayData.length === 0 || this.focusedIndex < 0 || !this.dropdownMenu.classList.contains(this.showClass)) {
                        return;
                    }

                    this.itemSelected(this.displayData[this.focusedIndex]);
                };

                AubsTypeaheadCustomElement.prototype.handleScape = function handleScape() {
                    this.dropdownMenu.classList.remove(this.showClass);
                    this.focusNone();
                    this.resetFilter();
                };

                return AubsTypeaheadCustomElement;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'data', [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec2], {
                enumerable: true,
                initializer: null
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'key', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return 'name';
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'customEntry', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'resultsLimit', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'debounce', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return 0;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'onSelect', [bindable], {
                enumerable: true,
                initializer: null
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'instantCleanEmpty', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'openOnFocus', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'focusFirst', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'selectSingleResult', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'autoComplete', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'loadingText', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Loading...';
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'inputClass', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'noResultsText', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return 'No Results';
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'filter', [observable], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            })), _class2)) || _class) || _class));

            _export('AubsTypeaheadCustomElement', AubsTypeaheadCustomElement);
        }
    };
});