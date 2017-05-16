// Auto-generated. Do not edit!

// (in-package industrial_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class ServiceReturnCode {
  constructor() {
    this.val = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ServiceReturnCode
    // Serialize message field [val]
    bufferInfo = _serializer.int8(obj.val, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ServiceReturnCode
    let tmp;
    let len;
    let data = new ServiceReturnCode();
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
    return 'industrial_msgs/ServiceReturnCode';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '85a4e241266be66b1e1426b03083a412';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Service return codes for simple requests.  All ROS-Industrial service
    # replies are required to have a return code indicating success or failure
    # Specific return codes for different failure should be negative.
    int8 val
    
    int8 SUCCESS = 1
    int8 FAILURE = -1
    
    
    `;
  }

};

// Constants for message
ServiceReturnCode.Constants = {
  SUCCESS: 1,
  FAILURE: -1,
}

module.exports = ServiceReturnCode;
