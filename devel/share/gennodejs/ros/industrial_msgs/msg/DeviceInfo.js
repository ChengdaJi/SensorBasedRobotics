// Auto-generated. Do not edit!

// (in-package industrial_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class DeviceInfo {
  constructor() {
    this.model = '';
    this.serial_number = '';
    this.hw_version = '';
    this.sw_version = '';
    this.address = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DeviceInfo
    // Serialize message field [model]
    bufferInfo = _serializer.string(obj.model, bufferInfo);
    // Serialize message field [serial_number]
    bufferInfo = _serializer.string(obj.serial_number, bufferInfo);
    // Serialize message field [hw_version]
    bufferInfo = _serializer.string(obj.hw_version, bufferInfo);
    // Serialize message field [sw_version]
    bufferInfo = _serializer.string(obj.sw_version, bufferInfo);
    // Serialize message field [address]
    bufferInfo = _serializer.string(obj.address, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DeviceInfo
    let tmp;
    let len;
    let data = new DeviceInfo();
    // Deserialize message field [model]
    tmp = _deserializer.string(buffer);
    data.model = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [serial_number]
    tmp = _deserializer.string(buffer);
    data.serial_number = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [hw_version]
    tmp = _deserializer.string(buffer);
    data.hw_version = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sw_version]
    tmp = _deserializer.string(buffer);
    data.sw_version = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [address]
    tmp = _deserializer.string(buffer);
    data.address = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'industrial_msgs/DeviceInfo';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '373ed7fa0fac92d443be9cd5198e80f0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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
    
    `;
  }

};

module.exports = DeviceInfo;
