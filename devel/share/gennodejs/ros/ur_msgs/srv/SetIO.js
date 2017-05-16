// Auto-generated. Do not edit!

// (in-package ur_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetIORequest {
  constructor() {
    this.fun = 0;
    this.pin = 0;
    this.state = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetIORequest
    // Serialize message field [fun]
    bufferInfo = _serializer.int8(obj.fun, bufferInfo);
    // Serialize message field [pin]
    bufferInfo = _serializer.int8(obj.pin, bufferInfo);
    // Serialize message field [state]
    bufferInfo = _serializer.float32(obj.state, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetIORequest
    let tmp;
    let len;
    let data = new SetIORequest();
    // Deserialize message field [fun]
    tmp = _deserializer.int8(buffer);
    data.fun = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pin]
    tmp = _deserializer.int8(buffer);
    data.pin = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [state]
    tmp = _deserializer.float32(buffer);
    data.state = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'ur_msgs/SetIORequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '144e866c50167f6d4b99948cba355b8c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int8 FUN_SET_DIGITAL_OUT = 1
    int8 FUN_SET_FLAG = 2
    int8 FUN_SET_ANALOG_OUT = 3
    int8 FUN_SET_TOOL_VOLTAGE = 4
    int8 fun
    int8 pin
    float32 state
    
    `;
  }

};

// Constants for message
SetIORequest.Constants = {
  FUN_SET_DIGITAL_OUT: 1,
  FUN_SET_FLAG: 2,
  FUN_SET_ANALOG_OUT: 3,
  FUN_SET_TOOL_VOLTAGE: 4,
}

class SetIOResponse {
  constructor() {
    this.success = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetIOResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetIOResponse
    let tmp;
    let len;
    let data = new SetIOResponse();
    // Deserialize message field [success]
    tmp = _deserializer.bool(buffer);
    data.success = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'ur_msgs/SetIOResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '358e233cde0c8a8bcfea4ce193f8fc15';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool success
    
    
    `;
  }

};

module.exports = {
  Request: SetIORequest,
  Response: SetIOResponse
};
