// Auto-generated. Do not edit!

// (in-package industrial_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let RobotMode = require('./RobotMode.js');
let TriState = require('./TriState.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class RobotStatus {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.mode = new RobotMode();
    this.e_stopped = new TriState();
    this.drives_powered = new TriState();
    this.motion_possible = new TriState();
    this.in_motion = new TriState();
    this.in_error = new TriState();
    this.error_code = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RobotStatus
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [mode]
    bufferInfo = RobotMode.serialize(obj.mode, bufferInfo);
    // Serialize message field [e_stopped]
    bufferInfo = TriState.serialize(obj.e_stopped, bufferInfo);
    // Serialize message field [drives_powered]
    bufferInfo = TriState.serialize(obj.drives_powered, bufferInfo);
    // Serialize message field [motion_possible]
    bufferInfo = TriState.serialize(obj.motion_possible, bufferInfo);
    // Serialize message field [in_motion]
    bufferInfo = TriState.serialize(obj.in_motion, bufferInfo);
    // Serialize message field [in_error]
    bufferInfo = TriState.serialize(obj.in_error, bufferInfo);
    // Serialize message field [error_code]
    bufferInfo = _serializer.int32(obj.error_code, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RobotStatus
    let tmp;
    let len;
    let data = new RobotStatus();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mode]
    tmp = RobotMode.deserialize(buffer);
    data.mode = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [e_stopped]
    tmp = TriState.deserialize(buffer);
    data.e_stopped = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [drives_powered]
    tmp = TriState.deserialize(buffer);
    data.drives_powered = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [motion_possible]
    tmp = TriState.deserialize(buffer);
    data.motion_possible = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [in_motion]
    tmp = TriState.deserialize(buffer);
    data.in_motion = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [in_error]
    tmp = TriState.deserialize(buffer);
    data.in_error = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [error_code]
    tmp = _deserializer.int32(buffer);
    data.error_code = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'industrial_msgs/RobotStatus';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b733cb45a38101840b75c4c0d6093d19';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # The RobotStatus message contains low level status information 
    # that is specific to an industrial robot controller
    
    # The header frame ID is not used
    Header header
    
    # The robot mode captures the operating mode of the robot.  When in
    # manual, remote motion is not possible.
    industrial_msgs/RobotMode mode
    
    # Estop status: True if robot is e-stopped.  The drives are disabled
    # and motion is not possible.  The e-stop condition must be acknowledged
    # and cleared before any motion can begin.
    industrial_msgs/TriState e_stopped
    
    # Drive power status: True if drives are powered.  Motion commands will 
    # automatically enable the drives if required.  Drive power is not requred
    # for possible motion
    industrial_msgs/TriState drives_powered
    
    # Motion enabled: Ture if robot motion is possible.
    industrial_msgs/TriState motion_possible
    
    # Motion status: True if robot is in motion, otherwise false
    industrial_msgs/TriState in_motion
    
    # Error status: True if there is an error condition on the robot. Motion may
    # or may not be affected (see motion_possible)
    industrial_msgs/TriState in_error
    
    # Error code: Vendor specific error code (non zero indicates error)
    int32 error_code
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    ================================================================================
    MSG: industrial_msgs/RobotMode
    # The Robot mode message encapsulates the mode/teach state of the robot
    # Typically this is controlled by the pendant key switch, but not always
    
    int8 val
    
    # enumerated values
    int8 UNKNOWN=-1                 # Unknown or unavailable         
    int8 MANUAL=1 			 # Teach OR manual mode
    int8 AUTO=2                     # Automatic mode
    
    
    ================================================================================
    MSG: industrial_msgs/TriState
    # The tri-state captures boolean values with the additional state of unknown
    
    int8 val
    
    # enumerated values
    
    # Unknown or unavailable 
    int8 UNKNOWN=-1  
    
    # High state                       
    int8 TRUE=1
    int8 ON=1
    int8 ENABLED=1
    int8 HIGH=1
    int8 CLOSED=1
    
    # Low state
    int8 FALSE=0
    int8 OFF=0
    int8 DISABLED=0
    int8 LOW=0
    int8 OPEN=0
    
    
    `;
  }

};

module.exports = RobotStatus;
