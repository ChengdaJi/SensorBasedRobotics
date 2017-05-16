// Auto-generated. Do not edit!

// (in-package ur_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetPayloadRequest {
  constructor() {
    this.payload = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetPayloadRequest
    // Serialize message field [payload]
    bufferInfo = _serializer.float32(obj.payload, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetPayloadRequest
    let tmp;
    let len;
    let data = new SetPayloadRequest();
    // Deserialize message field [payload]
    tmp = _deserializer.float32(buffer);
    data.payload = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'ur_msgs/SetPayloadRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd12269f931817591aa52047629ca66ca';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 payload
    
    `;
  }

};

class SetPayloadResponse {
  constructor() {
    this.success = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetPayloadResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetPayloadResponse
    let tmp;
    let len;
    let data = new SetPayloadResponse();
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
    return 'ur_msgs/SetPayloadResponse';
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
  Request: SetPayloadRequest,
  Response: SetPayloadResponse
};
