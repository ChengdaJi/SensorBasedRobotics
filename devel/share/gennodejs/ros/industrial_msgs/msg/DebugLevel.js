// Auto-generated. Do not edit!

// (in-package industrial_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class DebugLevel {
  constructor() {
    this.val = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DebugLevel
    // Serialize message field [val]
    bufferInfo = _serializer.uint8(obj.val, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DebugLevel
    let tmp;
    let len;
    let data = new DebugLevel();
    // Deserialize message field [val]
    tmp = _deserializer.uint8(buffer);
    data.val = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'industrial_msgs/DebugLevel';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5bfde194fd95d83abdb02a03ee48fbe7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

// Constants for message
DebugLevel.Constants = {
  DEBUG: 5,
  INFO: 4,
  WARN: 3,
  ERROR: 2,
  FATAL: 1,
  NONE: 0,
}

module.exports = DebugLevel;
