
gdjs.evtsExt__SpriteBasedLighting__Light = gdjs.evtsExt__SpriteBasedLighting__Light || {};

/**
 * Behavior generated from Light
 */
gdjs.evtsExt__SpriteBasedLighting__Light.Light = class Light extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

// Methods:

gdjs.evtsExt__SpriteBasedLighting__Light.Light.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("SpriteBasedLighting::Light", gdjs.evtsExt__SpriteBasedLighting__Light.Light);
