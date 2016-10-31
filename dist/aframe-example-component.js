/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/* global AFRAME */

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}

	/**
	 * Viewable component for A-Frame.
	 */
	AFRAME.registerComponent('viewable', {
	  dependencies: ['rotation'],
	  schema: {
	    maxpitch: {default: null},
	    maxyaw: {default: null}
	  },
	  init: function () {
	    // Convert max pitch/yaw degrees to radians for easier evaluation against object3D values
	    this.maxPitchRadians = (this.data.maxpitch ? this.degreesToRadian(this.data.maxpitch) : null); 
	    this.maxYawRadians = (this.data.maxpitch ? this.degreesToRadian(this.data.maxyaw) : null); 
	  },
	  tick: function (t) {
	    this.update();
	  },
	  update: function () {
	    if(this.maxPitchRadians){
	      this.fixAxisToMaximum('y', this.maxPitchRadians);
	    }
	    if(this.maxYawRadians){
	      this.fixAxisToMaximum('x', this.maxYawRadians);
	    }      
	  },  
	  fixAxisToMaximum: function (axis, maximum) {
	    // If user has tried to move beyond the maximum for this axis
	    // Reset to the maximum (positive/negative)
	    if(Math.abs(this.el.object3D.rotation[axis]) > maximum){
	      this.el.object3D.rotation[axis] = (this.el.object3D.rotation[axis]< 0 ? -maximum : maximum)
	    }
	  },
	  degreesToRadian(d){
	    return (d * Math.PI) / 180;
	  } 
	});

/***/ }
/******/ ]);