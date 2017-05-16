// Auto-generated. Do not edit!

// (in-package industrial_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class RobotMode {
  constructor() {
    this.val = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RobotMode
    // Serialize message field [val]
    bufferInfo = _serializer.int8(obj.val, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RobotMode
    let tmp;
    let len;
    let data = new RobotMode();
    // Deserialize message field [val]
    tmp = _deserializer.int8(buffer);
    data.val = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'industrial_msgs/RobotMode';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '24ac279e988b6b3db836e437e6ed1ba0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # The Robot mode message encapsulates the mode/teach state of the robot
    # Typically this is controlled by the pendant key switch, but not always
    
    int8 val
    
    # enumerated values
    int8 UNKNOWN=-1                 # Unknown or unavailable         
    int8 MANUAL=1 			 # Teach OR manual mode
    int8 AUTO=2                     # Automatic mode
    
    
    `;
  }

};

// Constants for message
RobotMode.Constants = {
  UNKNOWN: -1,
  MANUAL: 1,
  AUTO: 2,
}

module.exports = RobotMode;
