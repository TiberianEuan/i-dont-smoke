gdjs.menuCode = {};
gdjs.menuCode.forEachIndex2 = 0;

gdjs.menuCode.forEachObjects2 = [];

gdjs.menuCode.forEachTemporary2 = null;

gdjs.menuCode.forEachTotalCount2 = 0;

gdjs.menuCode.GDplayerObjects1= [];
gdjs.menuCode.GDplayerObjects2= [];
gdjs.menuCode.GDweaponObjects1= [];
gdjs.menuCode.GDweaponObjects2= [];
gdjs.menuCode.GDgibObjects1= [];
gdjs.menuCode.GDgibObjects2= [];
gdjs.menuCode.GDheartgibObjects1= [];
gdjs.menuCode.GDheartgibObjects2= [];
gdjs.menuCode.GDlunggibObjects1= [];
gdjs.menuCode.GDlunggibObjects2= [];
gdjs.menuCode.GDheadgibObjects1= [];
gdjs.menuCode.GDheadgibObjects2= [];
gdjs.menuCode.GDbulletObjects1= [];
gdjs.menuCode.GDbulletObjects2= [];
gdjs.menuCode.GDKillsObjects1= [];
gdjs.menuCode.GDKillsObjects2= [];
gdjs.menuCode.GDrandom_95upgradeObjects1= [];
gdjs.menuCode.GDrandom_95upgradeObjects2= [];
gdjs.menuCode.GDupgrade_95speedObjects1= [];
gdjs.menuCode.GDupgrade_95speedObjects2= [];
gdjs.menuCode.GDupgrade_95sizeObjects1= [];
gdjs.menuCode.GDupgrade_95sizeObjects2= [];
gdjs.menuCode.GDupgrade_95fire_95rateObjects1= [];
gdjs.menuCode.GDupgrade_95fire_95rateObjects2= [];
gdjs.menuCode.GDarmngleObjects1= [];
gdjs.menuCode.GDarmngleObjects2= [];
gdjs.menuCode.GDrestart_95timer_95readoutObjects1= [];
gdjs.menuCode.GDrestart_95timer_95readoutObjects2= [];
gdjs.menuCode.GDfabricator_95lObjects1= [];
gdjs.menuCode.GDfabricator_95lObjects2= [];
gdjs.menuCode.GDlightObjects1= [];
gdjs.menuCode.GDlightObjects2= [];
gdjs.menuCode.GDbackgroundObjects1= [];
gdjs.menuCode.GDbackgroundObjects2= [];
gdjs.menuCode.GDheartgibbloodObjects1= [];
gdjs.menuCode.GDheartgibbloodObjects2= [];
gdjs.menuCode.GDbloodsprayObjects1= [];
gdjs.menuCode.GDbloodsprayObjects2= [];
gdjs.menuCode.GDgroundObjects1= [];
gdjs.menuCode.GDgroundObjects2= [];
gdjs.menuCode.GDjumpthrugroundObjects1= [];
gdjs.menuCode.GDjumpthrugroundObjects2= [];
gdjs.menuCode.GDenemyObjects1= [];
gdjs.menuCode.GDenemyObjects2= [];
gdjs.menuCode.GDmouse_95locationObjects1= [];
gdjs.menuCode.GDmouse_95locationObjects2= [];
gdjs.menuCode.GDlungsObjects1= [];
gdjs.menuCode.GDlungsObjects2= [];
gdjs.menuCode.GDdoorObjects1= [];
gdjs.menuCode.GDdoorObjects2= [];
gdjs.menuCode.GDcrouch_95tipObjects1= [];
gdjs.menuCode.GDcrouch_95tipObjects2= [];
gdjs.menuCode.GDsmokeObjects1= [];
gdjs.menuCode.GDsmokeObjects2= [];
gdjs.menuCode.GDventObjects1= [];
gdjs.menuCode.GDventObjects2= [];
gdjs.menuCode.GDexit_95doorObjects1= [];
gdjs.menuCode.GDexit_95doorObjects2= [];
gdjs.menuCode.GDceiling_95lampObjects1= [];
gdjs.menuCode.GDceiling_95lampObjects2= [];
gdjs.menuCode.GDabyssObjects1= [];
gdjs.menuCode.GDabyssObjects2= [];
gdjs.menuCode.GDbroken_95pipeObjects1= [];
gdjs.menuCode.GDbroken_95pipeObjects2= [];
gdjs.menuCode.GDboss_95headObjects1= [];
gdjs.menuCode.GDboss_95headObjects2= [];
gdjs.menuCode.GDboss_95handObjects1= [];
gdjs.menuCode.GDboss_95handObjects2= [];
gdjs.menuCode.GDif_95frozenObjects1= [];
gdjs.menuCode.GDif_95frozenObjects2= [];
gdjs.menuCode.GDright_95arrowObjects1= [];
gdjs.menuCode.GDright_95arrowObjects2= [];
gdjs.menuCode.GDleft_95arrowObjects1= [];
gdjs.menuCode.GDleft_95arrowObjects2= [];
gdjs.menuCode.GDup_95arrowObjects1= [];
gdjs.menuCode.GDup_95arrowObjects2= [];
gdjs.menuCode.GDdown_95arrowObjects1= [];
gdjs.menuCode.GDdown_95arrowObjects2= [];
gdjs.menuCode.GDchosen_95levelObjects1= [];
gdjs.menuCode.GDchosen_95levelObjects2= [];
gdjs.menuCode.GDlevelhelpObjects1= [];
gdjs.menuCode.GDlevelhelpObjects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};
gdjs.menuCode.condition2IsTrue_0 = {val:false};
gdjs.menuCode.conditionTrue_1 = {val:false};
gdjs.menuCode.condition0IsTrue_1 = {val:false};
gdjs.menuCode.condition1IsTrue_1 = {val:false};
gdjs.menuCode.condition2IsTrue_1 = {val:false};


gdjs.menuCode.eventsList0 = function(runtimeScene) {

};gdjs.menuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.menuCode.GDenemyObjects1);

for(gdjs.menuCode.forEachIndex2 = 0;gdjs.menuCode.forEachIndex2 < gdjs.menuCode.GDenemyObjects1.length;++gdjs.menuCode.forEachIndex2) {
gdjs.menuCode.GDenemyObjects2.length = 0;


gdjs.menuCode.forEachTemporary2 = gdjs.menuCode.GDenemyObjects1[gdjs.menuCode.forEachIndex2];
gdjs.menuCode.GDenemyObjects2.push(gdjs.menuCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.menuCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDenemyObjects2[i].activateBehavior("Pathfinding", false);
}
}{for(var i = 0, len = gdjs.menuCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDenemyObjects2[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.menuCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDenemyObjects2[i].activateBehavior("InOnScreen", false);
}
}}
}

}


};gdjs.menuCode.eventsList2 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition0IsTrue_0;
gdjs.menuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16460276);
}
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.menuCode.eventsList3 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition0IsTrue_0;
gdjs.menuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16461308);
}
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}}

}


};gdjs.menuCode.eventsList4 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
{gdjs.menuCode.conditionTrue_1 = gdjs.menuCode.condition0IsTrue_0;
gdjs.menuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16462260);
}
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))), true);
}}

}


};gdjs.menuCode.eventsList5 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("chosen_level"), gdjs.menuCode.GDchosen_95levelObjects1);
{for(var i = 0, len = gdjs.menuCode.GDchosen_95levelObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDchosen_95levelObjects1[i].setString("Level: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("boss_hand"), gdjs.menuCode.GDboss_95handObjects1);
gdjs.copyArray(runtimeScene.getObjects("boss_head"), gdjs.menuCode.GDboss_95headObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.menuCode.GDplayerObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.menuCode.GDboss_95headObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDboss_95headObjects1[i].activateBehavior("BoidsMovement", false);
}
}{for(var i = 0, len = gdjs.menuCode.GDboss_95headObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDboss_95headObjects1[i].activateBehavior("Health", false);
}
}{for(var i = 0, len = gdjs.menuCode.GDboss_95headObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDboss_95headObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.menuCode.GDboss_95handObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDboss_95handObjects1[i].activateBehavior("BoidsMovement", false);
}
}{for(var i = 0, len = gdjs.menuCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDplayerObjects1[i].activateBehavior("Health", false);
}
}{for(var i = 0, len = gdjs.menuCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDplayerObjects1[i].activateBehavior("Physics2", false);
}
}{for(var i = 0, len = gdjs.menuCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDplayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.menuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 7;
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.menuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 0;
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.menuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.menuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.menuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
}if (gdjs.menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("if_frozen"), gdjs.menuCode.GDif_95frozenObjects1);
{for(var i = 0, len = gdjs.menuCode.GDif_95frozenObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDif_95frozenObjects1[i].hide(false);
}
}}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) != 6;
}if (gdjs.menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("if_frozen"), gdjs.menuCode.GDif_95frozenObjects1);
{for(var i = 0, len = gdjs.menuCode.GDif_95frozenObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDif_95frozenObjects1[i].hide();
}
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDplayerObjects1.length = 0;
gdjs.menuCode.GDplayerObjects2.length = 0;
gdjs.menuCode.GDweaponObjects1.length = 0;
gdjs.menuCode.GDweaponObjects2.length = 0;
gdjs.menuCode.GDgibObjects1.length = 0;
gdjs.menuCode.GDgibObjects2.length = 0;
gdjs.menuCode.GDheartgibObjects1.length = 0;
gdjs.menuCode.GDheartgibObjects2.length = 0;
gdjs.menuCode.GDlunggibObjects1.length = 0;
gdjs.menuCode.GDlunggibObjects2.length = 0;
gdjs.menuCode.GDheadgibObjects1.length = 0;
gdjs.menuCode.GDheadgibObjects2.length = 0;
gdjs.menuCode.GDbulletObjects1.length = 0;
gdjs.menuCode.GDbulletObjects2.length = 0;
gdjs.menuCode.GDKillsObjects1.length = 0;
gdjs.menuCode.GDKillsObjects2.length = 0;
gdjs.menuCode.GDrandom_95upgradeObjects1.length = 0;
gdjs.menuCode.GDrandom_95upgradeObjects2.length = 0;
gdjs.menuCode.GDupgrade_95speedObjects1.length = 0;
gdjs.menuCode.GDupgrade_95speedObjects2.length = 0;
gdjs.menuCode.GDupgrade_95sizeObjects1.length = 0;
gdjs.menuCode.GDupgrade_95sizeObjects2.length = 0;
gdjs.menuCode.GDupgrade_95fire_95rateObjects1.length = 0;
gdjs.menuCode.GDupgrade_95fire_95rateObjects2.length = 0;
gdjs.menuCode.GDarmngleObjects1.length = 0;
gdjs.menuCode.GDarmngleObjects2.length = 0;
gdjs.menuCode.GDrestart_95timer_95readoutObjects1.length = 0;
gdjs.menuCode.GDrestart_95timer_95readoutObjects2.length = 0;
gdjs.menuCode.GDfabricator_95lObjects1.length = 0;
gdjs.menuCode.GDfabricator_95lObjects2.length = 0;
gdjs.menuCode.GDlightObjects1.length = 0;
gdjs.menuCode.GDlightObjects2.length = 0;
gdjs.menuCode.GDbackgroundObjects1.length = 0;
gdjs.menuCode.GDbackgroundObjects2.length = 0;
gdjs.menuCode.GDheartgibbloodObjects1.length = 0;
gdjs.menuCode.GDheartgibbloodObjects2.length = 0;
gdjs.menuCode.GDbloodsprayObjects1.length = 0;
gdjs.menuCode.GDbloodsprayObjects2.length = 0;
gdjs.menuCode.GDgroundObjects1.length = 0;
gdjs.menuCode.GDgroundObjects2.length = 0;
gdjs.menuCode.GDjumpthrugroundObjects1.length = 0;
gdjs.menuCode.GDjumpthrugroundObjects2.length = 0;
gdjs.menuCode.GDenemyObjects1.length = 0;
gdjs.menuCode.GDenemyObjects2.length = 0;
gdjs.menuCode.GDmouse_95locationObjects1.length = 0;
gdjs.menuCode.GDmouse_95locationObjects2.length = 0;
gdjs.menuCode.GDlungsObjects1.length = 0;
gdjs.menuCode.GDlungsObjects2.length = 0;
gdjs.menuCode.GDdoorObjects1.length = 0;
gdjs.menuCode.GDdoorObjects2.length = 0;
gdjs.menuCode.GDcrouch_95tipObjects1.length = 0;
gdjs.menuCode.GDcrouch_95tipObjects2.length = 0;
gdjs.menuCode.GDsmokeObjects1.length = 0;
gdjs.menuCode.GDsmokeObjects2.length = 0;
gdjs.menuCode.GDventObjects1.length = 0;
gdjs.menuCode.GDventObjects2.length = 0;
gdjs.menuCode.GDexit_95doorObjects1.length = 0;
gdjs.menuCode.GDexit_95doorObjects2.length = 0;
gdjs.menuCode.GDceiling_95lampObjects1.length = 0;
gdjs.menuCode.GDceiling_95lampObjects2.length = 0;
gdjs.menuCode.GDabyssObjects1.length = 0;
gdjs.menuCode.GDabyssObjects2.length = 0;
gdjs.menuCode.GDbroken_95pipeObjects1.length = 0;
gdjs.menuCode.GDbroken_95pipeObjects2.length = 0;
gdjs.menuCode.GDboss_95headObjects1.length = 0;
gdjs.menuCode.GDboss_95headObjects2.length = 0;
gdjs.menuCode.GDboss_95handObjects1.length = 0;
gdjs.menuCode.GDboss_95handObjects2.length = 0;
gdjs.menuCode.GDif_95frozenObjects1.length = 0;
gdjs.menuCode.GDif_95frozenObjects2.length = 0;
gdjs.menuCode.GDright_95arrowObjects1.length = 0;
gdjs.menuCode.GDright_95arrowObjects2.length = 0;
gdjs.menuCode.GDleft_95arrowObjects1.length = 0;
gdjs.menuCode.GDleft_95arrowObjects2.length = 0;
gdjs.menuCode.GDup_95arrowObjects1.length = 0;
gdjs.menuCode.GDup_95arrowObjects2.length = 0;
gdjs.menuCode.GDdown_95arrowObjects1.length = 0;
gdjs.menuCode.GDdown_95arrowObjects2.length = 0;
gdjs.menuCode.GDchosen_95levelObjects1.length = 0;
gdjs.menuCode.GDchosen_95levelObjects2.length = 0;
gdjs.menuCode.GDlevelhelpObjects1.length = 0;
gdjs.menuCode.GDlevelhelpObjects2.length = 0;

gdjs.menuCode.eventsList5(runtimeScene);
return;

}

gdjs['menuCode'] = gdjs.menuCode;
