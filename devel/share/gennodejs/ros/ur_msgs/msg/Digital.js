// Auto-generated. Do not edit!

// (in-package ur_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Digital {
  constructor() {
    this.pin = 0;
    this.state = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Digital
    // Serialize message field [pin]
    bufferInfo = _serializer.uint8(obj.pin, bufferInfo);
    // Serialize message field [state]
    bufferInfo = _serializer.bool(obj.state, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Digital
    let tmp;
    let len;
    let data = new Digital();
    // Deserialize message field [pin]
    tmp = _deserializer.uint8(buffer);
    data.pin = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [state]
    tmp = _deserializer.bool(buffer);
    data.state = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ur_msgs/Digital';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '83707be3fa18d2ffe57381ea034aa262';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8 pin
    bool state
    
    `;
  }

};

module.exports = Digital;
