"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_fast_compare_1 = __importDefault(require("react-fast-compare"));
var styles_1 = __importDefault(require("./styles"));
var constants_1 = require("./constants");
var draw_1 = __importDefault(require("./draw"));
var events_1 = require("./events");
__exportStar(require("./types"), exports);
var ImageMapper = function (props) {
    var containerRef = props.containerRef, active = props.active, disabled = props.disabled, fillColorProp = props.fillColor, lineWidthProp = props.lineWidth, mapProp = props.map, srcProp = props.src, strokeColorProp = props.strokeColor, natural = props.natural, heightProp = props.height, widthProp = props.width, imageWidthProp = props.imgWidth, areaKeyName = props.areaKeyName, stayHighlighted = props.stayHighlighted, stayMultiHighlighted = props.stayMultiHighlighted, toggleHighlighted = props.toggleHighlighted, parentWidth = props.parentWidth, responsive = props.responsive, onLoad = props.onLoad, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onClick = props.onClick;
    var _a = (0, react_1.useState)(mapProp), map = _a[0], setMap = _a[1];
    var _b = (0, react_1.useState)(map), storedMap = _b[0], setStoredMap = _b[1];
    var _c = (0, react_1.useState)(false), isRendered = _c[0], setRendered = _c[1];
    var _d = (0, react_1.useState)(null), imgRef = _d[0], setImgRef = _d[1];
    var container = (0, react_1.useRef)(null);
    var img = (0, react_1.useRef)(null);
    var canvas = (0, react_1.useRef)(null);
    var ctx = (0, react_1.useRef)(null);
    var isInitialMount = (0, react_1.useRef)(true);
    var interval = (0, react_1.useRef)(0);
    (0, react_1.useEffect)(function () {
        if (!isRendered) {
            interval.current = window.setInterval(function () {
                var _a;
                if ((_a = img.current) === null || _a === void 0 ? void 0 : _a.complete)
                    setRendered(true);
            }, 500);
        }
        else {
            clearInterval(interval.current);
        }
    }, [isRendered]);
    (0, react_1.useEffect)(function () {
        if (isRendered && canvas.current) {
            initCanvas(true);
            ctx.current = canvas.current.getContext('2d');
            updateCacheMap();
        }
    }, [isRendered]);
    (0, react_1.useEffect)(function () {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
            updateCacheMap();
            initCanvas();
            if (imgRef)
                updateCanvas();
        }
    }, [props, isInitialMount, imgRef]);
    (0, react_1.useEffect)(function () {
        container.current.clearHighlightedArea = function () {
            setMap(storedMap);
            initCanvas();
        };
        if (containerRef) {
            containerRef.current = container.current;
        }
    }, [imgRef]);
    (0, react_1.useEffect)(function () {
        if (responsive)
            initCanvas();
    }, [parentWidth]);
    var updateCacheMap = function () {
        setMap(mapProp);
        setStoredMap(mapProp);
    };
    var getDimensions = function (type) {
        var _a = props, _b = type, dimension = _a[_b];
        if (typeof dimension === 'function') {
            // @ts-ignore
            return dimension(img.current);
        }
        return dimension;
    };
    var getValues = function (type, measure, name) {
        if (name === void 0) { name = 'area'; }
        var _a = img.current, naturalWidth = _a.naturalWidth, naturalHeight = _a.naturalHeight, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
        if (type === 'width') {
            if (responsive)
                return parentWidth;
            if (natural)
                return naturalWidth;
            if (widthProp || name === 'image')
                return measure;
            return clientWidth;
        }
        if (type === 'height') {
            if (responsive)
                return clientHeight;
            if (natural)
                return naturalHeight;
            if (heightProp || name === 'image')
                return measure;
            return clientHeight;
        }
        return 0;
    };
    var initCanvas = function (firstLoad) {
        if (firstLoad === void 0) { firstLoad = false; }
        if (!firstLoad && !imgRef)
            return;
        var imgWidth = getDimensions('width');
        var imgHeight = getDimensions('height');
        var imageWidth = getValues('width', imgWidth);
        var imageHeight = getValues('height', imgHeight);
        if (widthProp || responsive) {
            img.current.width = getValues('width', imgWidth, 'image');
        }
        if (heightProp || responsive) {
            img.current.height = getValues('height', imgHeight, 'image');
        }
        canvas.current.width = imageWidth;
        canvas.current.height = imageHeight;
        container.current.style.width = "".concat(imageWidth, "px");
        container.current.style.height = "".concat(imageHeight, "px");
        ctx.current = canvas.current.getContext('2d');
        ctx.current.fillStyle = fillColorProp;
        if (onLoad && imgRef) {
            onLoad(img.current, {
                width: imageWidth,
                height: imageHeight,
            });
        }
        setImgRef(img.current);
        if (imgRef)
            renderPrefilledAreas();
    };
    var highlightArea = function (area) {
        var _a;
        return (0, draw_1.default)(area.shape, area.scaledCoords, area.fillColor || fillColorProp, area.lineWidth || lineWidthProp, area.strokeColor || strokeColorProp, (_a = area.active) !== null && _a !== void 0 ? _a : true, ctx);
    };
    var clearCanvas = function () {
        return ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
    };
    var hoverOn = function (area, index, event) {
        if (active)
            highlightArea(area);
        if (onMouseEnter)
            onMouseEnter(area, index, event);
    };
    var hoverOff = function (area, index, event) {
        if (active) {
            clearCanvas();
            renderPrefilledAreas();
        }
        if (onMouseLeave)
            onMouseLeave(area, index, event);
    };
    var click = function (area, index, event) {
        var _a;
        var isAreaActive = (_a = area.active) !== null && _a !== void 0 ? _a : true;
        if (isAreaActive && (stayHighlighted || stayMultiHighlighted || toggleHighlighted)) {
            var newArea_1 = __assign({}, area);
            var chosenArea = stayMultiHighlighted ? map : storedMap;
            if (toggleHighlighted && newArea_1.preFillColor) {
                var isPreFillColorFromJSON = storedMap.areas.find(function (c) { return c[areaKeyName] === area[areaKeyName]; });
                if (isPreFillColorFromJSON && !isPreFillColorFromJSON.preFillColor) {
                    delete newArea_1.preFillColor;
                }
            }
            else if (stayHighlighted || stayMultiHighlighted) {
                newArea_1.preFillColor = area.fillColor || fillColorProp;
            }
            var updatedAreas_1 = chosenArea.areas.map(function (cur) {
                return cur[areaKeyName] === area[areaKeyName] ? newArea_1 : cur;
            });
            setMap(function (prev) { return (__assign(__assign({}, prev), { areas: updatedAreas_1 })); });
            if (!stayMultiHighlighted) {
                updateCanvas();
                highlightArea(area);
            }
        }
        // alert(area.title); //記得刪除
        if (onClick) {
            alert('::'+area.title); //記得刪除
            event.preventDefault();
            location.href = 'http://localhost:8000/ToTheZone/?' + area.title;
            onClick(area, index, event);
        }
    };
    var scaleCoords = function (coords) {
        var scale = widthProp && imageWidthProp && imageWidthProp > 0
            ? widthProp / imageWidthProp
            : 1;
        if (responsive && parentWidth) {
            return coords.map(function (coord) { return coord / (imgRef.naturalWidth / parentWidth); });
        }
        return coords.map(function (coord) { return coord * scale; });
    };
    var renderPrefilledAreas = function (mapObj) {
        if (mapObj === void 0) { mapObj = map; }
        mapObj.areas.forEach(function (area) {
            if (!area.preFillColor)
                return false;
            (0, draw_1.default)(area.shape, scaleCoords(area.coords), area.preFillColor, area.lineWidth || lineWidthProp, area.strokeColor || strokeColorProp, true, ctx);
            return true;
        });
    };
    var computeCenter = function (area) {
        if (!area)
            return [0, 0];
        var scaledCoords = scaleCoords(area.coords);
        switch (area.shape) {
            case 'circle':
                return [scaledCoords[0], scaledCoords[1]];
            case 'poly':
            case 'rect':
            default: {
                var n_1 = scaledCoords.length / 2;
                var _a = scaledCoords.reduce(function (_a, val, idx) {
                    var y = _a.y, x = _a.x;
                    return (!(idx % 2) ? { y: y, x: x + val / n_1 } : { y: y + val / n_1, x: x });
                }, { y: 0, x: 0 }), scaleY = _a.y, scaleX = _a.x;
                return [scaleX, scaleY];
            }
        }
    };
    var updateCanvas = function () {
        clearCanvas();
        renderPrefilledAreas(mapProp);
    };
    var renderAreas = function () {
        return map.areas.map(function (area, index) {
            var scaledCoords = scaleCoords(area.coords);
            var center = computeCenter(area);
            var extendedArea = __assign(__assign({}, area), { scaledCoords: scaledCoords, center: center });
            if (area.disabled)
                return null;
            return (react_1.default.createElement("area", __assign({}, (area.preFillColor ? { className: 'img-mapper-area-highlighted' } : {}), { key: area[areaKeyName] || index.toString(), shape: area.shape, coords: scaledCoords.join(','), onMouseEnter: function (event) { return hoverOn(extendedArea, index, event); }, onMouseLeave: function (event) { return hoverOff(extendedArea, index, event); }, onMouseMove: function (event) { return (0, events_1.mouseMove)(extendedArea, index, event, props); }, onMouseDown: function (event) { return (0, events_1.mouseDown)(extendedArea, index, event, props); }, onMouseUp: function (event) { return (0, events_1.mouseUp)(extendedArea, index, event, props); }, onTouchStart: function (event) { return (0, events_1.touchStart)(extendedArea, index, event, props); }, onTouchEnd: function (event) { return (0, events_1.touchEnd)(extendedArea, index, event, props); }, onClick: function (event) { return click(extendedArea, index, event); }, href: area.href, alt: "map" })));
        });
    };
    return (react_1.default.createElement("div", { ref: container, id: "img-mapper", style: (0, styles_1.default)(props).container },
        react_1.default.createElement("img", { ref: img, role: "presentation", className: "img-mapper-img", style: __assign(__assign({}, (0, styles_1.default)(props).img), (!imgRef ? { display: 'none' } : {})), src: srcProp, useMap: "#".concat(map.name), alt: "map", onClick: function (event) { return (0, events_1.imageClick)(event, props); }, onMouseMove: function (event) { return (0, events_1.imageMouseMove)(event, props); } }),
        react_1.default.createElement("canvas", { ref: canvas, className: "img-mapper-canvas", style: (0, styles_1.default)().canvas }),
        react_1.default.createElement("map", { className: "img-mapper-map", name: map.name, style: (0, styles_1.default)().map }, isRendered && !disabled && imgRef && renderAreas())));
};
ImageMapper.defaultProps = constants_1.ImageMapperDefaultProps;
exports.default = react_1.default.memo(ImageMapper, function (prevProps, nextProps) {
    var watchedProps = __spreadArray(__spreadArray([], constants_1.rerenderPropsList, true), nextProps.rerenderProps, true);
    var propChanged = watchedProps.some(function (prop) { return prevProps[prop] !== nextProps[prop]; });
    return (0, react_fast_compare_1.default)(prevProps.map, nextProps.map) && !propChanged;
});
