// Auto-generated. Do not edit!

// (in-package industrial_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let DebugLevel = require('../msg/DebugLevel.js');

//-----------------------------------------------------------

let ServiceReturnCode = require('../msg/ServiceReturnCode.js');

//-----------------------------------------------------------

class SetRemoteLoggerLevelRequest {
  constructor() {
    this.level = new DebugLevel();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetRemoteLoggerLevelRequest
    // Serialize message field [level]
    bufferInfo = DebugLevel.serialize(obj.level, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetRemoteLoggerLevelRequest
    let tmp;
    let len;
    let data = new SetRemoteLoggerLevelRequest();
    // Deserialize message field [level]
    tmp = DebugLevel.deserialize(buffer);
    data.level = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'industrial_msgs/SetRemoteLoggerLevelRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3a0089a136293a269fa1a44788ce9777';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    
    industrial_msgs/DebugLevel level
    
    ================================================================================
    MSG: industrial_msgs/DebugLevel
    # Debug level message enumeration.  This may replicate some functionality that
    # alreay exists in the ROS logger.
    # TODO: Get more information on the ROS Logger.
    uint8 val
    
    uint8 DEBUG = 5
    uint8 INFO = 4
    uint8 WARN = 3
    uint8 ERROR = 2
    uint8 FATAL = 1
    uint8 NONE = 0 
    
    `;
  }

};

class SetRemoteLoggerLevelResponse {
  constructor() {
    this.code = new ServiceReturnCode();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetRemoteLoggerLevelResponse
    // Serialize message field [code]
    bufferInfo = ServiceReturnCode.serialize(obj.code, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetRemoteLoggerLevelResponse
    let tmp;
    let len;
    let data = new SetRemoteLoggerLevelResponse();
    // Deserialize message field [code]
    tmp = ServiceReturnCode.deserialize(buffer);
    data.code = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'industrial_msgs/SetRemoteLoggerLevelResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '50b1f38f75f5677e5692f3b3e7e1ea48';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    industrial_msgs/ServiceReturnCode code
    
    
    ================================================================================
    MSG: industrial_msgs/ServiceReturnCode
    # Service return codes for simple requests.  All ROS-Industrial service
    # replies are required to have a return code indicating success or failure
    # Specific return codes for different failure should be negative.
    int8 val
    
    int8 SUCCESS = 1
    int8 FAILURE = -1
    
    
    `;
  }

};

module.exports = {
  Request: SetRemoteLoggerLevelRequest,
  Response: SetRemoteLoggerLevelResponse
};
