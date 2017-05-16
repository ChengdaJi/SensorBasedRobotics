// Auto-generated. Do not edit!

// (in-package industrial_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class TriState {
  constructor() {
    this.val = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TriState
    // Serialize message field [val]
    bufferInfo = _serializer.int8(obj.val, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TriState
    let tmp;
    let len;
    let data = new TriState();
    // Deserialize message field [val]
    tmp = _deserializer.int8(buffer);
    data.val = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'industrial_msgs/TriState';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'deb03829f3c2d0f1b647fa38d7087952';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

// Constants for message
TriState.Constants = {
  UNKNOWN: -1,
  TRUE: 1,
  ON: 1,
  ENABLED: 1,
  HIGH: 1,
  CLOSED: 1,
  FALSE: 0,
  OFF: 0,
  DISABLED: 0,
  LOW: 0,
  OPEN: 0,
}

module.exports = TriState;
