/*
Author: Chengda Ji
Data: Thu Mar 23 
Assignment 3
Algroithm for Sensor-based Robotics 
*/

#include "assignment3_context.h"
#include <moveit_msgs/RobotTrajectory.h>
#include <moveit/planning_scene/planning_scene.h>
#include <cstdlib>
#include <ctime>
#include <iostream>

// utility function to interpolate between two configuration
// given a start position an end position, a time t, then we can define the current position
CS436Context::vertex interpolate( const CS436Context::vertex& qA, 
				  const CS436Context::vertex& qB, 
				  double t ){  

  CS436Context::vertex qt( qA.size(), 0.0 );
  for( std::size_t i=0; i<qt.size(); i++ )
    { qt[i] = ( 1.0 - t )*qA[i] + t*qB[i]; }
  return qt;

}



CS436Context::CS436Context( const robot_model::RobotModelConstPtr& robotmodel,
			    const std::string& name, 
			    const std::string& group, 
			    const ros::NodeHandle& nh ) :
  planning_interface::PlanningContext( name, group ),
  robotmodel( robotmodel ){}

CS436Context::~CS436Context(){}

bool CS436Context::state_collides( const vertex& q ) const {

  // create a robot state
  moveit::core::RobotState robotstate( robotmodel );
  robotstate.setJointGroupPositions( "manipulator", q );

  if( getPlanningScene()->isStateColliding( robotstate, "manipulator", false ) )
    { return true; }
  else
    { return false; }
  
}

bool CS436Context::edge_collides( const vertex& qA, 
				  const vertex& qB, 
				  double step )const{
  
  // Simple trajectory in configuration space
  for( double t=0.0; t<1.0; t+=step ){
      if( state_collides( interpolate( qA, qB, t ) ) ) { return true; }
  }

  return false;

}

std::vector<CS436Context::vertex> CS436Context::make_vertices( int N )const{

  std::vector<CS436Context::vertex> V( N );

  // TODO
  // Find and return N vertices that correspond to N collision-free 
  // configurations
  std::cout<<"start function make_vertices"<<std::endl;
  std::srand(std::time(0));
  CS436Context::vertex CurrVertex(6);
  double Jointangles;
  double Jointangles_neg;
  int i=0;
  int poss;
  while(i<N){
    for(int j=0; j<CurrVertex.size(); j++){
      Jointangles = std::rand()%360;
      if (Jointangles<=180){
        Jointangles=Jointangles/180*3.1415926;

      }
      else {
        Jointangles=-(Jointangles-180)/180*3.1415926;
        Jointangles_neg = Jointangles;
      }
      if (j==1){
        poss = std::rand()%3;
        if (poss==1){
          CurrVertex[j]=Jointangles;
        }
        else{
          CurrVertex[j]=Jointangles_neg;
        }
      }
      else{
        CurrVertex[j]=Jointangles;
      }
      
    }
    if(!state_collides(CurrVertex)){
      
      V[i]=CurrVertex;
      i++;
    }
  }
  //std::cout<<"Number of Vertices: "<<V.size()<<std::endl;

  return V;

}

std::vector<CS436Context::edge> 
CS436Context::make_edges
( const std::vector<CS436Context::vertex>& V )const{

  std::vector<CS436Context::edge> E;
  std::cout<<"start function make_edges"<<std::endl;

  // TODO
  // Find and return collision-free edges to connect vertices in V
  CS436Context::edge edge_one;
  CS436Context::edge edge_two;
  for(int i=0; i<V.size(); i++){
    for(int j=i+1; j<V.size(); j++){
      if(!edge_collides(V[i],V[j],0.01)){
        edge_one.first=i;
        edge_one.second=j;
        edge_two.first=j;
        edge_two.second=i;
        E.push_back(edge_one);
        E.push_back(edge_two);
      }
    }
  }
  // std::cout<<"size of E: "<<E.size()<<std::endl;

  return E;

}

CS436Context::index
CS436Context::search_accessibility
( const std::vector<CS436Context::vertex>& V, 
  const CS436Context::vertex& q )const{
  std::cout<<"start function search_accessibility"<<std::endl;



  // TODO
  // Find and return the index of the accessible vertex
  // return V.size() if no vertex is accessible
  
  for (int i=0; i<V.size(); i++){
    if ( !edge_collides(V[i], q, 0.001)){
      return i;
    }
  }
  
  return V.size();

}

CS436Context::index 
CS436Context::search_departability
( const std::vector<CS436Context::vertex>& V, 
  const CS436Context::vertex& q )const{
  std::cout<<"start function search_departability"<<std::endl;

  for (int i=0; i<V.size(); i++){
    if ( !edge_collides (V[i], q, 0.001)){
      return i;
    }
  }
  return V.size();

  // TODO
  // Find and return the index of the departable vertex
  // return V.size() if no vertex is departable

}


CS436Context::path 
CS436Context::search_path
( const std::vector<CS436Context::vertex>& V,
  const std::vector<CS436Context::edge>& E,
  CS436Context::index idx_start,
  CS436Context::index idx_final )const{
  std::cout << "start function search_path " << std::endl;
  std::vector<CS436Context::index> path;

  if (idx_start == idx_final){
  	path.push_back(idx_start);
  	return path;
  }

  // Based on BFS
  std::vector<CS436Context::path> path_vector;
  std::vector<CS436Context::edge> queue;
  std::vector<CS436Context::edge> level_queue;
  std::vector<CS436Context::index> used_queue;
  CS436Context::edge current_vertex;
  CS436Context::edge child_vertex;
  //Place the starting node s on the queue. 
  int flag=0;
  int level =0;
  int current_level;
  int pos =0;
  int final_level=22;
  current_vertex = std::make_pair(idx_start, level);  
  queue.push_back(current_vertex);
  used_queue.push_back(current_vertex.first);

  while(!queue.empty()){
  	current_level = queue[0].second;
    current_vertex = queue[0];
    //std::cout<<"LEVEL "<<current_level<<" queue size: "<<queue.size()<<std::endl;
    //std::cout<<"current_vertex: "<< current_vertex.first <<std::endl;
  	//std::cout<<"queue: level: "<<queue[0].second<<" index: "<<queue[0].first<<std::endl;
  	level_queue.push_back (queue[0]);
  	if (current_vertex.first!=idx_final){
  		for (int j=0; j<E.size(); j++){
        // std::cout<<"Choice of next index"<<E[j].first<<std::endl;
  			if (current_vertex.first==E[j].first){
          // std::cout<<"same come to if"<<std::endl;
  				int child_index = E[j].second;
  				for (int k=0; k<used_queue.size();k++){
  					if (used_queue[k]==child_index){
                // std::cout<<"Same in used"<<std::endl;
  					    flag = 1;
  					    break;
  				    }
  				}
  				if (flag==0){
  				    child_vertex=std::make_pair(child_index,current_level+1);
  				    queue.push_back(child_vertex);
  				    used_queue.push_back(child_index);
              //std::cout << "child_vertex index: " << child_index << " level:" << current_level+1<<"";
              //std::cout << " "<< "queue size:"<< queue.size()<<std::endl;
  				    if (child_index==idx_final){
  				    	final_level=current_level+1;
                //std::cout<<"final_level: "<<final_level<<std::endl;
  				    	break;
  				    }
  			    }
            flag=0;
  			}
            
  			if (current_vertex.first==E[j].second){
          // std::cout<<"same come to if"<<std::endl;
  				int child_index = E[j].first;
  				for (int k=0; k<used_queue.size();k++){

  					if (used_queue[k]==child_index){
              // std::cout<<"Same in used"<<std::endl;
  						flag = 1;
  						break;
  					}			
  				}
  				if (flag==0){
  				    child_vertex=std::make_pair(child_index,current_level+1);
  				    queue.push_back(child_vertex);
  				    used_queue.push_back(child_index);
              //std::cout << "child_vertex index: " << child_index << " level:" << current_level+1<<"";
              //std::cout << " "<<"queue size:"<< queue.size()<<std::endl;
  				    if (child_index==idx_final){
                final_level=current_level+1;
                std::cout<<"final_level: "<<final_level<<std::endl;
  				    	break;
  				    }  				    
  			    }
          flag=0;            
  			}
  		}
  		
  	}
  	if (current_vertex.first==idx_final){
        // std::cout<<"current_vertex.first==idx_final!!!!!!!!!!!!"<<std::endl;
	      break;
    }
    // std::cout<< "queue before minus one while: " << queue.size()<<std::endl;
    queue.erase(queue.begin());
    //std::cout<< "queue size at end of while: " << queue.size()<<std::endl<<std::endl;
  }

  // std::cout<<"level_queue"<<std::endl;
  // for (int i=0; i<level_queue.size(); i++){
  //   std::cout<<level_queue[i].first<<" "<<level_queue[i].second<<std::endl;
  // }
  // std::cout<<"end of level_queue"<<std::endl;

  //std::cout<<"final_level: "<<final_level<<std::endl;
  current_vertex = std::make_pair(idx_final, final_level);
  std::cout<<"final vertex: "<<idx_final<<" "<<final_level<<std::endl;

  path.push_back(current_vertex.first);
  
  current_level = final_level;
  
  for (int i=current_level; i>0;i--){
  	for (int j=level_queue.size(); j>-1; j--)
  	{
      if (level_queue[j].second == i-1){
      	 if (!edge_collides (V[current_vertex.first], V[level_queue[j].first], 0.01)){
             current_vertex = level_queue[j];

             std::cout<<"level: "<<level_queue[j].second<<"; path insert: "<<level_queue[j].first<<std::endl;
      	     path.insert(path.begin(),level_queue[j].first);
             break;    		
      	 }
      }
  	}
  }
  std::cout << "idx_start:  " << idx_start << std::endl;
  std::cout << "idx_final:  " << idx_final << std::endl;
  // std::cout << "Path" << std::endl;
  // for (int i=0; i<path.size(); i++)
  // {
  //   std::cout << "level: " << i << " "<< path[i]<< std::endl;
  // }
  // TODO
  // Find and return a path between the vertices idx_start and idx_final
  return path;

}


// This is the method that is called each time a plan is requested
bool CS436Context::solve( planning_interface::MotionPlanResponse &res ){
  std::cout<<"start solve"<<std::endl;
  // Create a new empty trajectory
  res.trajectory_.reset(new robot_trajectory::RobotTrajectory(robotmodel, 
  							      getGroupName()));
  res.trajectory_->clear();
  std::cout<<"define qstart and qfinal"<<std::endl;
  // copy the initial/final joints configurations to vectors qfin and qini
  // This is mainly for convenience.
  std::vector<double> qstart, qfinal;
  for( size_t i=0; i<robotmodel->getVariableCount(); i++ ){
    qfinal.push_back(request_.goal_constraints[0].joint_constraints[i].position);
    qstart.push_back(request_.start_state.joint_state.position[i]);
  }
  std::cout<<"qstart"<<std::endl<<"[ ";
  for (int j=0; j<6; j++){
	std::cout<<qstart[j]<<" ";
  }
  std::cout<<"]"<<std::endl<<"qfinal"<<std::endl<<"[ ";
  for (int j=0; j<6; j++){
	std::cout<<qfinal[j]<<" ";
  }
  std::cout<<"]"<<std::endl;
  // start the timer
  ros::Time begin = ros::Time::now();

  // TODO
  // Adjust N to your need
  int N = 110;
  // std::cout<<"N="<<N<<std::endl;

  // Create a vector of collision-free vertices
  std::vector<vertex> V = make_vertices( N );

  // Find the index of the accessible vertex
  //std::cout<<"search_accessibility"<<std::endl;
  index idx_start = search_accessibility( V, qstart );
  // Find the index of the departable vertex
  //std::cout<<"search_departability"<<std::endl;
  index idx_final = search_departability( V, qfinal );
  //std::cout << "idx_start:  " << idx_start << std::endl;
  //std::cout << "idx_final:  " << idx_final << std::endl;
  // Both index must be valid (accessible and departable vertices exist)
  if( V.size() <= idx_start || V.size() <= idx_final ) { return false; }

  // Create a vector edges
  std::vector<edge> E = make_edges( V );
  
  // Find a path between the start index and final index
  
 
  path P = search_path( V, E, idx_start, idx_final );
  std::cout<<"P=[ ";
  for (int j=0; j<P.size(); j++){
    std::cout << P[j]<<" ";
  }
  std::cout<<"]"<<std::endl;
  // end the timer
  ros::Time end = ros::Time::now();

  // The rest is to fill in the animation. You can ignore this part.
  moveit::core::RobotState robotstate( robotmodel );
  // std::cout<<"qstart ";
  robotstate.setJointGroupPositions( "manipulator", qstart );
  // std::cout << "for idx_start" <<std::endl; 
  for( double t=0.0; t<=1.0; t+=0.01 ){
    vertex q = interpolate( qstart, V[P[0]], t );
    robotstate.setJointGroupPositions( "manipulator", q );
    res.trajectory_->addSuffixWayPoint( robotstate, 0.01 );
  }

  for( std::size_t i=0; i<P.size()-1; i++ ){
    for( double t=0.0; t<=1.0; t+=0.01 ){
      vertex q = interpolate( V[P[i]], V[P[i+1]], t );
      robotstate.setJointGroupPositions( "manipulator", q );
      res.trajectory_->addSuffixWayPoint( robotstate, 0.01 );
    }
  }

  for( double t=0.0; t<=1.0; t+=0.01 ){
    vertex q = interpolate( V[P[P.size()-1]], qfinal, t );
    robotstate.setJointGroupPositions( "manipulator", q );
    res.trajectory_->addSuffixWayPoint( robotstate, 0.01 );
  }

  // set the planning time
  ros::Duration duration = end-begin;
  res.planning_time_ = duration.toSec();
  res.error_code_.val = moveit_msgs::MoveItErrorCodes::SUCCESS;

  return true;
  
}

bool CS436Context::solve( planning_interface::MotionPlanDetailedResponse &res )
{ return true; }

void CS436Context::clear(){}

bool CS436Context::terminate(){return true;}
