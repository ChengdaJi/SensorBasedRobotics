// Auto-generated. Do not edit!

// (in-package ur_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class MasterboardDataMsg {
  constructor() {
    this.digital_input_bits = 0;
    this.digital_output_bits = 0;
    this.analog_input_range0 = 0;
    this.analog_input_range1 = 0;
    this.analog_input0 = 0.0;
    this.analog_input1 = 0.0;
    this.analog_output_domain0 = 0;
    this.analog_output_domain1 = 0;
    this.analog_output0 = 0.0;
    this.analog_output1 = 0.0;
    this.masterboard_temperature = 0.0;
    this.robot_voltage_48V = 0.0;
    this.robot_current = 0.0;
    this.master_io_current = 0.0;
    this.master_safety_state = 0;
    this.master_onoff_state = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MasterboardDataMsg
    // Serialize message field [digital_input_bits]
    bufferInfo = _serializer.int16(obj.digital_input_bits, bufferInfo);
    // Serialize message field [digital_output_bits]
    bufferInfo = _serializer.int16(obj.digital_output_bits, bufferInfo);
    // Serialize message field [analog_input_range0]
    bufferInfo = _serializer.int8(obj.analog_input_range0, bufferInfo);
    // Serialize message field [analog_input_range1]
    bufferInfo = _serializer.int8(obj.analog_input_range1, bufferInfo);
    // Serialize message field [analog_input0]
    bufferInfo = _serializer.float64(obj.analog_input0, bufferInfo);
    // Serialize message field [analog_input1]
    bufferInfo = _serializer.float64(obj.analog_input1, bufferInfo);
    // Serialize message field [analog_output_domain0]
    bufferInfo = _serializer.int8(obj.analog_output_domain0, bufferInfo);
    // Serialize message field [analog_output_domain1]
    bufferInfo = _serializer.int8(obj.analog_output_domain1, bufferInfo);
    // Serialize message field [analog_output0]
    bufferInfo = _serializer.float64(obj.analog_output0, bufferInfo);
    // Serialize message field [analog_output1]
    bufferInfo = _serializer.float64(obj.analog_output1, bufferInfo);
    // Serialize message field [masterboard_temperature]
    bufferInfo = _serializer.float32(obj.masterboard_temperature, bufferInfo);
    // Serialize message field [robot_voltage_48V]
    bufferInfo = _serializer.float32(obj.robot_voltage_48V, bufferInfo);
    // Serialize message field [robot_current]
    bufferInfo = _serializer.float32(obj.robot_current, bufferInfo);
    // Serialize message field [master_io_current]
    bufferInfo = _serializer.float32(obj.master_io_current, bufferInfo);
    // Serialize message field [master_safety_state]
    bufferInfo = _serializer.uint8(obj.master_safety_state, bufferInfo);
    // Serialize message field [master_onoff_state]
    bufferInfo = _serializer.uint8(obj.master_onoff_state, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MasterboardDataMsg
    let tmp;
    let len;
    let data = new MasterboardDataMsg();
    // Deserialize message field [digital_input_bits]
    tmp = _deserializer.int16(buffer);
    data.digital_input_bits = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [digital_output_bits]
    tmp = _deserializer.int16(buffer);
    data.digital_output_bits = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [analog_input_range0]
    tmp = _deserializer.int8(buffer);
    data.analog_input_range0 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [analog_input_range1]
    tmp = _deserializer.int8(buffer);
    data.analog_input_range1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [analog_input0]
    tmp = _deserializer.float64(buffer);
    data.analog_input0 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [analog_input1]
    tmp = _deserializer.float64(buffer);
    data.analog_input1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [analog_output_domain0]
    tmp = _deserializer.int8(buffer);
    data.analog_output_domain0 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [analog_output_domain1]
    tmp = _deserializer.int8(buffer);
    data.analog_output_domain1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [analog_output0]
    tmp = _deserializer.float64(buffer);
    data.analog_output0 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [analog_output1]
    tmp = _deserializer.float64(buffer);
    data.analog_output1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [masterboard_temperature]
    tmp = _deserializer.float32(buffer);
    data.masterboard_temperature = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [robot_voltage_48V]
    tmp = _deserializer.float32(buffer);
    data.robot_voltage_48V = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [robot_current]
    tmp = _deserializer.float32(buffer);
    data.robot_current = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [master_io_current]
    tmp = _deserializer.float32(buffer);
    data.master_io_current = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [master_safety_state]
    tmp = _deserializer.uint8(buffer);
    data.master_safety_state = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [master_onoff_state]
    tmp = _deserializer.uint8(buffer);
    data.master_onoff_state = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ur_msgs/MasterboardDataMsg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a4aa4d8ccbd10a18ef4008b679f6ccbe';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This data structure contains the MasterboardData structure
    # used by the Universal Robots controller
    #
    # MasterboardData is part of the data structure being send on the 
    # secondary client communications interface
    # 
    # This data structure is send at 10 Hz on TCP port 30002
    # 
    # Dokumentation can be found on the Universal Robots Support Wiki
    # (http://wiki03.lynero.net/Technical/DataStreamFromURController?rev=8)
    
    int16 digital_input_bits
    int16 digital_output_bits
    int8 analog_input_range0
    int8 analog_input_range1
    float64 analog_input0
    float64 analog_input1
    int8 analog_output_domain0
    int8 analog_output_domain1
    float64 analog_output0
    float64 analog_output1
    float32 masterboard_temperature
    float32 robot_voltage_48V
    float32 robot_current
    float32 master_io_current
    uint8 master_safety_state
    uint8 master_onoff_state
    
    `;
  }

};

module.exports = MasterboardDataMsg;
