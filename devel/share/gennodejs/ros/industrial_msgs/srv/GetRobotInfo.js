// Auto-generated. Do not edit!

// (in-package industrial_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let DeviceInfo = require('../msg/DeviceInfo.js');
let ServiceReturnCode = require('../msg/ServiceReturnCode.js');

//-----------------------------------------------------------

class GetRobotInfoRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetRobotInfoRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetRobotInfoRequest
    let tmp;
    let len;
    let data = new GetRobotInfoRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'industrial_msgs/GetRobotInfoRequest';
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

class GetRobotInfoResponse {
  constructor() {
    this.controller = new DeviceInfo();
    this.robots = [];
    this.code = new ServiceReturnCode();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetRobotInfoResponse
    // Serialize message field [controller]
    bufferInfo = DeviceInfo.serialize(obj.controller, bufferInfo);
    // Serialize the length for message field [robots]
    bufferInfo = _serializer.uint32(obj.robots.length, bufferInfo);
    // Serialize message field [robots]
    obj.robots.forEach((val) => {
      bufferInfo = DeviceInfo.serialize(val, bufferInfo);
    });
    // Serialize message field [code]
    bufferInfo = ServiceReturnCode.serialize(obj.code, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetRobotInfoResponse
    let tmp;
    let len;
    let data = new GetRobotInfoResponse();
    // Deserialize message field [controller]
    tmp = DeviceInfo.deserialize(buffer);
    data.controller = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [robots]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [robots]
    data.robots = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = DeviceInfo.deserialize(buffer);
      data.robots[i] = tmp.data;
      buffer = tmp.buffer;
    }
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
    return 'industrial_msgs/GetRobotInfoResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5db3230b3e61c85a320b999ffd7f3b3f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    industrial_msgs/DeviceInfo controller
    industrial_msgs/DeviceInfo[] robots
    industrial_msgs/ServiceReturnCode code
    
    
    ================================================================================
    MSG: industrial_msgs/DeviceInfo
    # Device info captures device agnostic information about a piece of hardware.
    # This message is meant as a generic as possible.  Items that don't apply should
    # be left blank.  This message is not meant to replace diagnostic messages, but
    # rather provide a standard service message that can be used to populate standard
    # components (like a GUI for example)
    
    string model
    string serial_number
    string hw_version
    string sw_version
    string address
    
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
  Request: GetRobotInfoRequest,
  Response: GetRobotInfoResponse
};
