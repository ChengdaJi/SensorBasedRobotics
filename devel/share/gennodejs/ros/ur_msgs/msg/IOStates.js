// Auto-generated. Do not edit!

// (in-package ur_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Digital = require('./Digital.js');
let Analog = require('./Analog.js');

//-----------------------------------------------------------

class IOStates {
  constructor() {
    this.digital_in_states = [];
    this.digital_out_states = [];
    this.flag_states = [];
    this.analog_in_states = [];
    this.analog_out_states = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type IOStates
    // Serialize the length for message field [digital_in_states]
    bufferInfo = _serializer.uint32(obj.digital_in_states.length, bufferInfo);
    // Serialize message field [digital_in_states]
    obj.digital_in_states.forEach((val) => {
      bufferInfo = Digital.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [digital_out_states]
    bufferInfo = _serializer.uint32(obj.digital_out_states.length, bufferInfo);
    // Serialize message field [digital_out_states]
    obj.digital_out_states.forEach((val) => {
      bufferInfo = Digital.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [flag_states]
    bufferInfo = _serializer.uint32(obj.flag_states.length, bufferInfo);
    // Serialize message field [flag_states]
    obj.flag_states.forEach((val) => {
      bufferInfo = Digital.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [analog_in_states]
    bufferInfo = _serializer.uint32(obj.analog_in_states.length, bufferInfo);
    // Serialize message field [analog_in_states]
    obj.analog_in_states.forEach((val) => {
      bufferInfo = Analog.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [analog_out_states]
    bufferInfo = _serializer.uint32(obj.analog_out_states.length, bufferInfo);
    // Serialize message field [analog_out_states]
    obj.analog_out_states.forEach((val) => {
      bufferInfo = Analog.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type IOStates
    let tmp;
    let len;
    let data = new IOStates();
    // Deserialize array length for message field [digital_in_states]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [digital_in_states]
    data.digital_in_states = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Digital.deserialize(buffer);
      data.digital_in_states[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [digital_out_states]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [digital_out_states]
    data.digital_out_states = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Digital.deserialize(buffer);
      data.digital_out_states[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [flag_states]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [flag_states]
    data.flag_states = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Digital.deserialize(buffer);
      data.flag_states[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [analog_in_states]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [analog_in_states]
    data.analog_in_states = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Analog.deserialize(buffer);
      data.analog_in_states[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [analog_out_states]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [analog_out_states]
    data.analog_out_states = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Analog.deserialize(buffer);
      data.analog_out_states[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ur_msgs/IOStates';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0a5c7b73e3189e9a2caf8583d1bae2e2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Digital[] digital_in_states
    Digital[] digital_out_states
    Digital[] flag_states
    Analog[] analog_in_states
    Analog[] analog_out_states
    
    ================================================================================
    MSG: ur_msgs/Digital
    uint8 pin
    bool state
    
    ================================================================================
    MSG: ur_msgs/Analog
    uint8 pin
    float32 state
    
    `;
  }

};

module.exports = IOStates;
