// Auto-generated. Do not edit!

// (in-package industrial_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let trajectory_msgs = _finder('trajectory_msgs');

//-----------------------------------------------------------

let ServiceReturnCode = require('../msg/ServiceReturnCode.js');

//-----------------------------------------------------------

class CmdJointTrajectoryRequest {
  constructor() {
    this.trajectory = new trajectory_msgs.msg.JointTrajectory();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CmdJointTrajectoryRequest
    // Serialize message field [trajectory]
    bufferInfo = trajectory_msgs.msg.JointTrajectory.serialize(obj.trajectory, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CmdJointTrajectoryRequest
    let tmp;
    let len;
    let data = new CmdJointTrajectoryRequest();
    // Deserialize message field [trajectory]
    tmp = trajectory_msgs.msg.JointTrajectory.deserialize(buffer);
    data.trajectory = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'industrial_msgs/CmdJointTrajectoryRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2a0eff76c870e8595636c2a562ca298e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    
    
    trajectory_msgs/JointTrajectory trajectory
    
    ================================================================================
    MSG: trajectory_msgs/JointTrajectory
    Header header
    string[] joint_names
    JointTrajectoryPoint[] points
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
    MSG: trajectory_msgs/JointTrajectoryPoint
    # Each trajectory point specifies either positions[, velocities[, accelerations]]
    # or positions[, effort] for the trajectory to be executed.
    # All specified values are in the same order as the joint names in JointTrajectory.msg
    
    float64[] positions
    float64[] velocities
    float64[] accelerations
    float64[] effort
    duration time_from_start
    
    `;
  }

};

class CmdJointTrajectoryResponse {
  constructor() {
    this.code = new ServiceReturnCode();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CmdJointTrajectoryResponse
    // Serialize message field [code]
    bufferInfo = ServiceReturnCode.serialize(obj.code, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CmdJointTrajectoryResponse
    let tmp;
    let len;
    let data = new CmdJointTrajectoryResponse();
    // Deserialize message field [code]
    tmp = ServiceReturnCode.deserialize(buffer);
    data.code = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'industrial_msgs/CmdJointTrajectoryResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '50b1f38f75f5677e5692f3b3e7e1ea48';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    industrial_msgs/ServiceReturnCode code
    
    
    ================================================================================
    MSG: industrial_msgs/ServiceReturnCode
    # Service return codes for simple requests.  All ROS-Industrial service
    # replies are required to have a return code indicating success or failure
    # Specific return codes for different failure should be negative.
    int8 val
    
    int8 SUCCESS = 1
    int8 FAILURE = -1
    
    
    `;
  }

};

module.exports = {
  Request: CmdJointTrajectoryRequest,
  Response: CmdJointTrajectoryResponse
};
