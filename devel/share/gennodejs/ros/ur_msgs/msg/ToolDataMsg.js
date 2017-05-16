// Auto-generated. Do not edit!

// (in-package ur_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class ToolDataMsg {
  constructor() {
    this.analog_input_range2 = 0;
    this.analog_input_range3 = 0;
    this.analog_input2 = 0.0;
    this.analog_input3 = 0.0;
    this.tool_voltage_48v = 0.0;
    this.tool_output_voltage = 0;
    this.tool_current = 0.0;
    this.tool_temperature = 0.0;
    this.tool_mode = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ToolDataMsg
    // Serialize message field [analog_input_range2]
    bufferInfo = _serializer.int8(obj.analog_input_range2, bufferInfo);
    // Serialize message field [analog_input_range3]
    bufferInfo = _serializer.int8(obj.analog_input_range3, bufferInfo);
    // Serialize message field [analog_input2]
    bufferInfo = _serializer.float64(obj.analog_input2, bufferInfo);
    // Serialize message field [analog_input3]
    bufferInfo = _serializer.float64(obj.analog_input3, bufferInfo);
    // Serialize message field [tool_voltage_48v]
    bufferInfo = _serializer.float32(obj.tool_voltage_48v, bufferInfo);
    // Serialize message field [tool_output_voltage]
    bufferInfo = _serializer.uint8(obj.tool_output_voltage, bufferInfo);
    // Serialize message field [tool_current]
    bufferInfo = _serializer.float32(obj.tool_current, bufferInfo);
    // Serialize message field [tool_temperature]
    bufferInfo = _serializer.float32(obj.tool_temperature, bufferInfo);
    // Serialize message field [tool_mode]
    bufferInfo = _serializer.uint8(obj.tool_mode, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ToolDataMsg
    let tmp;
    let len;
    let data = new ToolDataMsg();
    // Deserialize message field [analog_input_range2]
    tmp = _deserializer.int8(buffer);
    data.analog_input_range2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [analog_input_range3]
    tmp = _deserializer.int8(buffer);
    data.analog_input_range3 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [analog_input2]
    tmp = _deserializer.float64(buffer);
    data.analog_input2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [analog_input3]
    tmp = _deserializer.float64(buffer);
    data.analog_input3 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tool_voltage_48v]
    tmp = _deserializer.float32(buffer);
    data.tool_voltage_48v = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tool_output_voltage]
    tmp = _deserializer.uint8(buffer);
    data.tool_output_voltage = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tool_current]
    tmp = _deserializer.float32(buffer);
    data.tool_current = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tool_temperature]
    tmp = _deserializer.float32(buffer);
    data.tool_temperature = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tool_mode]
    tmp = _deserializer.uint8(buffer);
    data.tool_mode = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ur_msgs/ToolDataMsg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '404fc266f37d89f75b372d12fa94a122';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This data structure contains the ToolData structure
    # used by the Universal Robots controller
    
    int8 ANALOG_INPUT_RANGE_CURRENT = 0
    int8 ANALOG_INPUT_RANGE_VOLTAGE = 1
    
    int8 analog_input_range2 # one of ANALOG_INPUT_RANGE_*
    int8 analog_input_range3 # one of ANALOG_INPUT_RANGE_*
    float64 analog_input2
    float64 analog_input3
    float32 tool_voltage_48v
    uint8 tool_output_voltage
    float32 tool_current
    float32 tool_temperature
    
    uint8 TOOL_BOOTLOADER_MODE = 249
    uint8 TOOL_RUNNING_MODE = 253
    uint8 TOOL_IDLE_MODE = 255
    
    uint8 tool_mode # one of TOOL_*
    
    `;
  }

};

// Constants for message
ToolDataMsg.Constants = {
  ANALOG_INPUT_RANGE_CURRENT: 0,
  ANALOG_INPUT_RANGE_VOLTAGE: 1,
  TOOL_BOOTLOADER_MODE: 249,
  TOOL_RUNNING_MODE: 253,
  TOOL_IDLE_MODE: 255,
}

module.exports = ToolDataMsg;
