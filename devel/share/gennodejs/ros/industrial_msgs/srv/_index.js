
"use strict";

let StartMotion = require('./StartMotion.js')
let GetRobotInfo = require('./GetRobotInfo.js')
let CmdJointTrajectory = require('./CmdJointTrajectory.js')
let StopMotion = require('./StopMotion.js')
let SetRemoteLoggerLevel = require('./SetRemoteLoggerLevel.js')
let SetDrivePower = require('./SetDrivePower.js')

module.exports = {
  StartMotion: StartMotion,
  GetRobotInfo: GetRobotInfo,
  CmdJointTrajectory: CmdJointTrajectory,
  StopMotion: StopMotion,
  SetRemoteLoggerLevel: SetRemoteLoggerLevel,
  SetDrivePower: SetDrivePower,
};
