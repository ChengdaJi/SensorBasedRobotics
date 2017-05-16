// Auto-generated. Do not edit!

// (in-package ur_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Analog {
  constructor() {
    this.pin = 0;
    this.state = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Analog
    // Serialize message field [pin]
    bufferInfo = _serializer.uint8(obj.pin, bufferInfo);
    // Serialize message field [state]
    bufferInfo = _serializer.float32(obj.state, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Analog
    let tmp;
    let len;
    let data = new Analog();
    // Deserialize message field [pin]
    tmp = _deserializer.uint8(buffer);
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
    // Returns string type for a message object
    return 'ur_msgs/Analog';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '341541c8828d055b6dcc443d40207a7d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8 pin
    float32 state
    
    `;
  }

};

module.exports = Analog;
