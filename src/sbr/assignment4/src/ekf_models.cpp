
#include "ekf_models.hpp"
#include <tf/tf.h>

/**
Author: Chengda Ji
Algorithm for Sensor-Based Robotics
Assignment 4 
This is a homework about the Extended Kalman Filter
*/

/**
   TODO
   Fill in the value of the process covariance matrix. The rows/columns of C are
   in the following order [POS_X POS_Y POS_Z ROT_R ROT_P ROT_Y ].
   \param[out] C Covariance matrix of the process.
*/
void process_covariance( double C[6][6] ){


  for( int r=0; r<6; r++ )
    for( int c=0; c<6; c++ )
      C[r][c] = 0.0;

    // TODO fill in the matrix C
    C[0][0] = (double) 1200; //0.1; //400;
    C[1][1] = (double) 1400; //0.1; //400; //400;
    C[2][2] = (double) 0.01; //0.1; //10000;
    C[3][3] = (double) 0.01; //0.1; //200;
    C[4][4] = (double) 0.01; //0.1; //200;
    C[5][5] = (double) 0.01; //0.1; //200;

    C[0][4] = (double) 0.0001;
    C[0][5] = (double) 0.0001;

    C[1][5] = (double) 0.0001;

    C[4][0] = (double) 0.0001;

    C[5][0] = (double) 0.0001;
    C[5][1] = (double) 0.0001;

}

/**
   TODO
   Fill in the value of the measurement covariance matrix. The rows/columns of C
   are in the following order [POS_X POS_Y POS_Z ROT_R ROT_P ROT_Y ]
   \param[out] C Covariance matrix of the process.
*/
void measurement_covariance( double C[6][6] ){


  for( int r=0; r<6; r++ )
    for( int c=0; c<6; c++ )
      C[r][c] = 0.0;
    
  // TODO fill in the matrix C
  C[0][0] = (double) 0.01; //0.01; //400;
  C[1][1] = (double) 0.01; //0.01; //400; //400;
  C[2][2] = (double) 1.5; //1.0; //100000000;
  C[3][3] = (double) 0.001; //0.01; //200;
  C[4][4] = (double) 0.001; //0.01; //200;
  C[5][5] = (double) 0.001; //0.01; //200;

}


/**
   TODO
   Evaluate the system function.
   Compute the process model.
   This function returns the prediction of the next state based on the 
   current state estimate and the commmand input (linear/angular velocities).
   \param state_in The current state estimate
   \param v     The input linear position increment
   \param w     The input angular position increment
*/
State sys_evaluate_g( const State& state_in, double delta_v, double delta_w ){
  
  double x = state_in.x[State::POS_X];
  double y = state_in.x[State::POS_Y];
  double z = state_in.x[State::POS_Z];
  double R = state_in.x[State::ROT_R];
  double P = state_in.x[State::ROT_P];
  double Y = state_in.x[State::ROT_Y];
 
  State state_out;

  // TODO
  // Fill out state out based on the current state estimate i
  
  // Rotation
  tf::Matrix3x3 R_t;
  tf::Matrix3x3 R_add;
  tf::Matrix3x3 R_t_1;
  R_t.setRPY(R,P,Y);
  R_add.setRPY(0, 0, delta_w);
  R_t_1 = R_t * R_add;
  R_t_1.getRPY(state_out.x[State::ROT_R], state_out.x[State::ROT_P], state_out.x[State::ROT_Y]);

  // Position
  tf::Vector3 P_t;
  tf::Vector3 P_add;
  tf::Vector3 P_t_1;
  P_t.setX(x);
  P_t.setY(y);
  P_t.setZ(z);
  P_add.setX(delta_v);
  P_add.setY(0);
  P_add.setZ(0);
  P_t_1 = R_t * P_add + P_t;
  state_out.x[State::POS_X] = P_t_1.x();
  state_out.x[State::POS_Y] = P_t_1.y();
  state_out.x[State::POS_Z] = P_t_1.z();
  

  return state_out;

}

/**
   TODO
   Evaluate the system Jacobian.
   This function evaluates the Jacobian of the system functions g (see 
   sys_evaluate_g). The entry G[i][j] represents ( d g_i / d s_j )
   \param[out] G      The 6x6 Jacobian of the function g
   \param      state  The state of the robot
   \param      v      The linear velocity of the robot
   \param      w      The angular velocity of the robot
*/
void sys_evaluate_G( double G[6][6], const State& state, double v, double w ){
  
  // TODO
  double x = state.x[State::POS_X];
  double y = state.x[State::POS_Y];
  double z = state.x[State::POS_Z];
  double R = state.x[State::ROT_R];
  double P = state.x[State::ROT_P];
  double Y = state.x[State::ROT_Y];

  for( int r=0; r<6; r++ )
    for( int c=0; c<6; c++ )
        G[r][c] = 0.0;

  G[0][0] = 1; 
  G[0][4] = -v*cos(Y)*sin(P);
  G[0][5] = -v*cos(P)*sin(Y);

  G[1][1] = 1;
  G[1][4] = -v*sin(P)*sin(Y);
  G[1][5] = v*cos(P)*cos(Y);


  G[2][2] = 1;
  G[2][4] = -v*cos(P);

  G[3][3] = (pow(cos(R),2.0)*pow(cos(P),2.0)*cos(w)*(1.0/pow(cos(R),2.0)*pow(sin(R),2.0)+1.0)+cos(P)*sin(R)*sin(P)*sin(w))/(pow(sin(P)*sin(w)+cos(P)*cos(w)*sin(R),2.0)+pow(cos(R),2.0)*pow(cos(P),2.0));
  G[3][4] = (pow(cos(R),2.0)*pow(cos(P),2.0)*sin(w)*(1.0/cos(R)+(1.0/pow(cos(P),2.0)*pow(sin(P),2.0))/cos(R)))/(pow(sin(P)*sin(w)+cos(P)*cos(w)*sin(R),2.0)+pow(cos(R),2.0)*pow(cos(P),2.0));

  G[4][3] = ((pow(sin(P)*sin(w)+cos(P)*cos(w)*sin(R),2.0)+pow(cos(R),2.0)*pow(cos(P),2.0))*((cos(w)*sin(P)-cos(P)*sin(R)*sin(w))*(cos(R)*pow(cos(P),2.0)*sin(R)*2.0-cos(R)*cos(P)*cos(w)*(sin(P)*sin(w)+cos(P)*cos(w)*sin(R))*2.0)*1.0/pow(pow(sin(P)*sin(w)+cos(P)*cos(w)*sin(R),2.0)+pow(cos(R),2.0)*pow(cos(P),2.0),3.0/2.0)*(1.0/2.0)-cos(R)*cos(P)*sin(w)*1.0/sqrt(pow(sin(P)*sin(w)+cos(P)*cos(w)*sin(R),2.0)+pow(cos(R),2.0)*pow(cos(P),2.0))))/(pow(sin(P)*sin(w)+cos(P)*cos(w)*sin(R),2.0)+pow(cos(w)*sin(P)-cos(P)*sin(R)*sin(w),2.0)+pow(cos(R),2.0)*pow(cos(P),2.0));
  G[4][4] = ((pow(sin(P)*sin(w)+cos(P)*cos(w)*sin(R),2.0)+pow(cos(R),2.0)*pow(cos(P),2.0))*((cos(P)*cos(w)+sin(R)*sin(P)*sin(w))*1.0/sqrt(pow(sin(P)*sin(w)+cos(P)*cos(w)*sin(R),2.0)+pow(cos(R),2.0)*pow(cos(P),2.0))-(cos(w)*sin(P)-cos(P)*sin(R)*sin(w))*((sin(P)*sin(w)+cos(P)*cos(w)*sin(R))*(cos(P)*sin(w)-cos(w)*sin(R)*sin(P))*2.0-pow(cos(R),2.0)*cos(P)*sin(P)*2.0)*1.0/pow(pow(sin(P)*sin(w)+cos(P)*cos(w)*sin(R),2.0)+pow(cos(R),2.0)*pow(cos(P),2.0),3.0/2.0)*(1.0/2.0)))/(pow(sin(P)*sin(w)+cos(P)*cos(w)*sin(R),2.0)+pow(cos(w)*sin(P)-cos(P)*sin(R)*sin(w),2.0)+pow(cos(R),2.0)*pow(cos(P),2.0));

  G[5][3] = -(sin(P)*(pow(cos(R),2.0)*pow(sin(w),2.0)+pow(sin(R),2.0)*pow(sin(w),2.0))+cos(P)*cos(w)*sin(R)*sin(w))/(pow(cos(P),2.0)*pow(cos(w),2.0)+pow(cos(R),2.0)*pow(sin(w),2.0)+pow(sin(R),2.0)*pow(sin(P),2.0)*pow(sin(w),2.0)+cos(P)*cos(w)*sin(R)*sin(P)*sin(w)*2.0);
  G[5][4] = -(cos(R)*(cos(P)*sin(R)*pow(sin(w),2.0)-cos(w)*sin(P)*sin(w)))/(pow(cos(P),2.0)*pow(cos(w),2.0)+pow(cos(R),2.0)*pow(sin(w),2.0)+pow(sin(R),2.0)*pow(sin(P),2.0)*pow(sin(w),2.0)+cos(P)*cos(w)*sin(R)*sin(P)*sin(w)*2.0);   G[5][5] = 1;

}

/**
   TODO
   Evaluate the GPS observation function.
   This function returns the expected satellite fix given the state of the robot
   \param state The state estimate
   \return      A satellite navigation fix (only the latitute, longitude
                and altitude members are used)
*/
sensor_msgs::NavSatFix meas_evaluate_gps( const State& state ){
  sensor_msgs::NavSatFix nsf;

  // TODO
  // Given the state, compute the expected longitude, latitude and altitude
  // of the satellite fix message

  double f = 180/(6367445 * 3.14159);
  nsf.latitude = state.x[State::POS_X]*f;
  nsf.longitude = -state.x[State::POS_Y]*f;
  nsf.altitude = state.x[State::POS_Z];




  return nsf;
}

/**
   TODO
   Evaluate the IMU observation function.
   This function computes the expected imu orientation given the state of the 
   robot.
   \param state_in The current state estimate
   \return         A inertial navigation unit measurement (only the orientation
                   member is used).
*/
sensor_msgs::Imu meas_evaluate_imu( const State& state ){
  sensor_msgs::Imu imu;

  // TODO
  // Given the state, compute the expected orientation of the imu message
  tf::Quaternion Q;
  
  Q.setRPY(state.x[State::ROT_R],state.x[State::ROT_P],state.x[State::ROT_Y]);

  imu.orientation.x = Q[0];
  imu.orientation.y = Q[1];
  imu.orientation.z = Q[2];
  imu.orientation.w = Q[3];

  return imu;
}

/** 
    TODO
    Observation Jacobian of the GPS
    This function returns the 3x3 observation Jacobian of the GPS. Essentially,
    this is the Jacobian of your meas_evaluate_gps function.
    \param[out] Hgps The 3x3 GPS Jacobian.
    \param[in]  state The state of the robot
*/
void meas_evaluate_Hgps( double Hgps[3][3], const State& state ){

  // TODO

  double jaco = 180/(6367445 * 3.14159);
  
  Hgps[0][0] = jaco;
  Hgps[0][1] = 0.0;
  Hgps[0][2] = 0.0;

  Hgps[1][0] = 0.0;
  Hgps[1][1] = -jaco;
  Hgps[1][2] = 0.0;

  Hgps[2][0] = 0.0;
  Hgps[2][1] = 0.0;
  Hgps[2][2] = 1.0;

  Hgps[0][0] = 180.0/(6367445 * 3.14159);
  Hgps[0][1] = 0.0;
  Hgps[0][2] = 0.0;

  Hgps[1][0] = 0.0;
  Hgps[1][1] = -180.0/(6367445 * 3.14159);
  Hgps[1][2] = 0.0;

  Hgps[2][0] = 0;
  Hgps[2][1] = 0;
  Hgps[2][2] = 1;

}

/** 
    Observation Jacobian of the IMU
    This function returns the 3x3 observation Jacobian of the IMU. Essentially,
    this is the Jacobian of your meas_evaluate_imu function.
    \param[out] Himu The 3x3 IMU Jacobian.
    \param[in]  state The state of the robot
*/
void meas_evaluate_Himu( double Himu[3][3], const State& state ){

  // TODO
  Himu[0][0] = 1.0;
  Himu[0][1] = 0.0;
  Himu[0][2] = 0.0; 

  Himu[1][0] = 0.0;
  Himu[1][1] = 1.0;
  Himu[1][2] = 0.0; 

  Himu[2][0] = 0.0;
  Himu[2][1] = 0.0;
  Himu[2][2] = 1.0; 


}

