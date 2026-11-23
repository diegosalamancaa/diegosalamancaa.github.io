#

Research Assistant - HAMR @ ModLab

As part of the Holonomic Affordable Multi-Terrain Robot (HAMR) team at Mark Yim's ModLab, I focus on the mechanical stack that makes holonomic turret control viable off-road: a rocker-bogie–style suspension and a three-axis stabilized gimbal. The rocker linkage ties the left/right wheel pairs so both sides maintain ground contact while the chassis rides out terrain discontinuities; this preserves traction and keeps drive loads predictable for control. Above the base, a layered gimbal decouples the payload from chassis motion—roll and pitch are actively stabilized while the yaw turret maintains a commanded heading. We sized the joints for stiffness and travel, integrated continuous-rotation actuators with IMU/encoder feedback, and tuned for ±20–30° effective attitude range under payload.

Mechanically, my contributions centered on the rocker geometry, wheel/caster selection, and the gimbal assembly: increasing gimbal range, reducing backlash through coaxial layer stacking, and managing mass distribution so the turret’s COM sits on the yaw axis. These choices reduce cross-axis coupling (e.g., yaw commands tilting the plate) and minimize stick–slip when the rocker articulates over steps. On the base, we iterated caster concepts (ball and deformable designs) to avoid “edge catch” at obstacle impact—a known limitation of off-road holonomic wheeled platforms—and incorporated enclosure and rail updates for a stiffer frame.

We validated the design in ROS/Gazebo before hardware bring-up. The team built a URDF from CAD, added 2.5D heightmaps for uneven terrain, and ran a Jacobian-based velocity controller that maps turret-frame twist to wheel and turret rates. We used mobility-ellipsoid analysis to visualize holonomicity and exercised square/triangle/circle paths and maze planners (PRM/A*) to assess heading control under rocker motion. In simulation reviews and Vicon lab tests, the stabilized gimbal held the plate near level while the base conformed to terrain, and we used the same ROS nodes to bridge sim and hardware, informing feedforward and gimbal smoothing updates in the next mechanical/electrical spin.

Mapping TFs throughout the trajectory

Maze navigation in simulation with PRM/A*.

#

HAMR 3.0 (Rocker + Casters)

VIDEO-2026-04-15-19-27-53.mp4

#

Gimbal Mechanism

#

Working HAMR 2.0

Canonical holonomicity tests in simulation: square, triangle, and circle trajectories. Green lines denote the executed trajectories, while blue arrows show the heading angle.
