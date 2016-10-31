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