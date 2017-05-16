// Auto-generated. Do not edit!

// (in-package ur_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class RobotStateRTMsg {
  constructor() {
    this.time = 0.0;
    this.q_target = [];
    this.qd_target = [];
    this.qdd_target = [];
    this.i_target = [];
    this.m_target = [];
    this.q_actual = [];
    this.qd_actual = [];
    this.i_actual = [];
    this.tool_acc_values = [];
    this.tcp_force = [];
    this.tool_vector = [];
    this.tcp_speed = [];
    this.digital_input_bits = 0.0;
    this.motor_temperatures = [];
    this.controller_timer = 0.0;
    this.test_value = 0.0;
    this.robot_mode = 0.0;
    this.joint_modes = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RobotStateRTMsg
    // Serialize message field [time]
    bufferInfo = _serializer.float64(obj.time, bufferInfo);
    // Serialize the length for message field [q_target]
    bufferInfo = _serializer.uint32(obj.q_target.length, bufferInfo);
    // Serialize message field [q_target]
    obj.q_target.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [qd_target]
    bufferInfo = _serializer.uint32(obj.qd_target.length, bufferInfo);
    // Serialize message field [qd_target]
    obj.qd_target.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [qdd_target]
    bufferInfo = _serializer.uint32(obj.qdd_target.length, bufferInfo);
    // Serialize message field [qdd_target]
    obj.qdd_target.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [i_target]
    bufferInfo = _serializer.uint32(obj.i_target.length, bufferInfo);
    // Serialize message field [i_target]
    obj.i_target.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [m_target]
    bufferInfo = _serializer.uint32(obj.m_target.length, bufferInfo);
    // Serialize message field [m_target]
    obj.m_target.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [q_actual]
    bufferInfo = _serializer.uint32(obj.q_actual.length, bufferInfo);
    // Serialize message field [q_actual]
    obj.q_actual.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [qd_actual]
    bufferInfo = _serializer.uint32(obj.qd_actual.length, bufferInfo);
    // Serialize message field [qd_actual]
    obj.qd_actual.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [i_actual]
    bufferInfo = _serializer.uint32(obj.i_actual.length, bufferInfo);
    // Serialize message field [i_actual]
    obj.i_actual.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [tool_acc_values]
    bufferInfo = _serializer.uint32(obj.tool_acc_values.length, bufferInfo);
    // Serialize message field [tool_acc_values]
    obj.tool_acc_values.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [tcp_force]
    bufferInfo = _serializer.uint32(obj.tcp_force.length, bufferInfo);
    // Serialize message field [tcp_force]
    obj.tcp_force.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [tool_vector]
    bufferInfo = _serializer.uint32(obj.tool_vector.length, bufferInfo);
    // Serialize message field [tool_vector]
    obj.tool_vector.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [tcp_speed]
    bufferInfo = _serializer.uint32(obj.tcp_speed.length, bufferInfo);
    // Serialize message field [tcp_speed]
    obj.tcp_speed.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize message field [digital_input_bits]
    bufferInfo = _serializer.float64(obj.digital_input_bits, bufferInfo);
    // Serialize the length for message field [motor_temperatures]
    bufferInfo = _serializer.uint32(obj.motor_temperatures.length, bufferInfo);
    // Serialize message field [motor_temperatures]
    obj.motor_temperatures.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize message field [controller_timer]
    bufferInfo = _serializer.float64(obj.controller_timer, bufferInfo);
    // Serialize message field [test_value]
    bufferInfo = _serializer.float64(obj.test_value, bufferInfo);
    // Serialize message field [robot_mode]
    bufferInfo = _serializer.float64(obj.robot_mode, bufferInfo);
    // Serialize the length for message field [joint_modes]
    bufferInfo = _serializer.uint32(obj.joint_modes.length, bufferInfo);
    // Serialize message field [joint_modes]
    obj.joint_modes.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RobotStateRTMsg
    let tmp;
    let len;
    let data = new RobotStateRTMsg();
    // Deserialize message field [time]
    tmp = _deserializer.float64(buffer);
    data.time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [q_target]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [q_target]
    data.q_target = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.q_target[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [qd_target]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [qd_target]
    data.qd_target = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.qd_target[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [qdd_target]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [qdd_target]
    data.qdd_target = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.qdd_target[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [i_target]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [i_target]
    data.i_target = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.i_target[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [m_target]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [m_target]
    data.m_target = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.m_target[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [q_actual]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [q_actual]
    data.q_actual = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.q_actual[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [qd_actual]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [qd_actual]
    data.qd_actual = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.qd_actual[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [i_actual]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [i_actual]
    data.i_actual = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.i_actual[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [tool_acc_values]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tool_acc_values]
    data.tool_acc_values = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.tool_acc_values[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [tcp_force]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tcp_force]
    data.tcp_force = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.tcp_force[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [tool_vector]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tool_vector]
    data.tool_vector = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.tool_vector[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [tcp_speed]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tcp_speed]
    data.tcp_speed = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.tcp_speed[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [digital_input_bits]
    tmp = _deserializer.float64(buffer);
    data.digital_input_bits = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [motor_temperatures]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [motor_temperatures]
    data.motor_temperatures = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.motor_temperatures[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [controller_timer]
    tmp = _deserializer.float64(buffer);
    data.controller_timer = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [test_value]
    tmp = _deserializer.float64(buffer);
    data.test_value = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [robot_mode]
    tmp = _deserializer.float64(buffer);
    data.robot_mode = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [joint_modes]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [joint_modes]
    data.joint_modes = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.joint_modes[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'ur_msgs/RobotStateRTMsg';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ce6feddd3ccb4ca7dbcd0ff105b603c7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Data structure for the realtime communications interface (aka Matlab interface)
    # used by the Universal Robots controller
    # 
    # This data structure is send at 125 Hz on TCP port 30003
    # 
    # Dokumentation can be found on the Universal Robots Support Wiki
    # (http://wiki03.lynero.net/Technical/RealTimeClientInterface?rev=9)
    
    float64 time
    float64[] q_target
    float64[] qd_target
    float64[] qdd_target
    float64[] i_target
    float64[] m_target
    float64[] q_actual
    float64[] qd_actual
    float64[] i_actual
    float64[] tool_acc_values
    float64[] tcp_force
    float64[] tool_vector
    float64[] tcp_speed
    float64 digital_input_bits
    float64[] motor_temperatures
    float64 controller_timer
    float64 test_value
    float64 robot_mode
    float64[] joint_modes
    
    `;
  }

};

module.exports = RobotStateRTMsg;
