// Auto-generated. Do not edit!

// (in-package industrial_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let ServiceReturnCode = require('../msg/ServiceReturnCode.js');

//-----------------------------------------------------------

class StopMotionRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type StopMotionRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type StopMotionRequest
    let tmp;
    let len;
    let data = new StopMotionRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'industrial_msgs/StopMotionRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    `;
  }

};

class StopMotionResponse {
  constructor() {
    this.code = new ServiceReturnCode();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type StopMotionResponse
    // Serialize message field [code]
    bufferInfo = ServiceReturnCode.serialize(obj.code, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type StopMotionResponse
    let tmp;
    let len;
    let data = new StopMotionResponse();
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
    return 'industrial_msgs/StopMotionResponse';
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
  Request: StopMotionRequest,
  Response: StopMotionResponse
};
