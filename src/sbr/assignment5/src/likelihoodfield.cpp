


/**
   likelihood_field
   Implement the likelihood field model for a laser range finder. The function
   returns the probability P( z | s, m ), that is the probability that a 
   measurement z was caused by a robot in a state s and in a map m.
   \input Scan z: A vector of laser beams. Each beam has two members: range and 
                  bearing.
   \input State s: The state of the robot with respect to the world frame.
                   The x coordinate is given by s[0], the y coordinate by s[1]
		   and the angle theta by s[2].
   \input Map* m:  The map of the environment the robot.
   \input Pose laser_pose: The position and orientation of the laser with 
                           respect to the robot's coordinate frame.
   \input sigma_hit: The standard variation of errors
   \input z_max: The laser maximum range
   \input w_hit: The coefficient of measurements
   \input w_rand: The coefficient of random errors
*/


/*
Chengda JI
Algorithm for Sensor Based Robotics
HW5 
*/

#include <math.h>
#define pi 3.1415926

double likelihood_field( Scan& z,
			 State s, 
			 Map* m,
			 Pose laser_pose, 
			 double sigma_hit, 
			 double z_max, 
			 double w_hit, 
			 double w_rand,
			 double w_max ){
  
  double x_l[2];
  double x_r[2];
  double x[2];
  double dist;
  double q = 1.0;
  // double pi = 3.1415926;
  double q_hit;
  double q_rand;

  for(int i = 0; i < z.size(); i++) {
    if(z[i].range != z_max) {
      // laser beam end relative to laser scanner on robot
      x_l[0] = z[i].range*cos(z[i].bearing);
      x_l[1] = z[i].range*sin(z[i].bearing);
      // laser scanner on robot relative to robot
      x_r[0] = x_l[0] * cos(laser_pose[2])- x_l[1] * sin(laser_pose[2]) + laser_pose[0];
      x_r[1] = x_l[0] * sin(laser_pose[2]) - x_l[1] * sin(laser_pose[2]) + laser_pose[1];
      // robot relative to world
      x[0] = x_r[0] * cos(s[2]) - x_r[1] * sin(s[2]) + s[0];
      x[0] = x_r[0] * sin(s[2]) - x_r[1] * cos(s[2]) + s[1];
      
      // get the minimal distance
      dist = GetDistanceFromMap(m, x[0], x[1]);
      
      // get the 
      q_hit = exp(-pow(dist,2)/(2*pow(sigma_hit,2)))/(sigma_hit*sqrt(2*pi));
      
      q_rand = 1.0/z_max;

      q = q+(w_hit*q_hit + w_rand*q_rand);
    }
  }
  return q;
}
