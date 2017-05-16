// Auto-generated. Do not edit!

// (in-package aruco_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Marker = require('./Marker.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class MarkerArray {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.markers = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MarkerArray
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [markers]
    bufferInfo = _serializer.uint32(obj.markers.length, bufferInfo);
    // Serialize message field [markers]
    obj.markers.forEach((val) => {
      bufferInfo = Marker.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MarkerArray
    let tmp;
    let len;
    let data = new MarkerArray();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [markers]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [markers]
    data.markers = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Marker.deserialize(buffer);
      data.markers[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'aruco_msgs/MarkerArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9d486b76ee1f72a8b0d33e8c66a97306';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    aruco_msgs/Marker[] markers
    
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
    MSG: aruco_msgs/Marker
    Header header
    uint32 id
    geometry_msgs/PoseWithCovariance pose
    float64 confidence
    
    ================================================================================
    MSG: geometry_msgs/PoseWithCovariance
    # This represents a pose in free space with uncertainty.
    
    Pose pose
    
    # Row-major representation of the 6x6 covariance matrix
    # The orientation parameters use a fixed-axis representation.
    # In order, the parameters are:
    # (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)
    float64[36] covariance
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

module.exports = MarkerArray;
