#

Mechatronics Engineering Intern @ ModLab

In the spring of 2025, I was selected for the Quantum Space Kerry Wisnosky, a fully funded mechatronics internship provided to one Penn Engineering student per year. During my summer internship, I focused on redesigning the Mini Piccolissimo (MiniP) Flyer, the smallest single-actuator drone in the world originally designed and built at Mark Yim's ModLab. I focused on the wing frame, propeller geometry, and the propulsion/drag relationships.

Wing Frame & Inertial Analysis

During my MiniP micro-flyer internship, I built a coupled Ansys FEA/CFD workflow to link structural stiffness with aerodynamic loading and predict flight behavior at millimeter scale. Starting from a 34 mm baseline that hovered without lateral control, I targeted a 27.8 mm variant with stable flight and active lateral control. Guided by simulation and quick benchtop checks (COM/MoI), I iterated the airframe: moved to a two-battery layout, trimmed mass (accepting shorter flight time), increased motor offset from 2.2 mm to 3.0–3.3 mm, shortened the shaft to mitigate MoI-driven flip instabilities, refined wing planform/stiffness, and ran material tests. Over successive builds, flip time increased and overall stability improved.

To quantify those sensitivities, I swept geometry and mass placements, computed the resulting inertia tensors, and modeled induced moments about the thrust axis to generate a labeled dataset. I then trained an ML model to map inertia and placement features to a stability score, revealing clear rules: match in-plane inertias, minimize thrust-axis–to-COM offset, and avoid large cross-terms. These insights drove concrete layout choices (symmetric battery placement, modest motor offset, shorter shaft) and provided a data-backed path to scale from 34 mm toward 27.8 mm while preserving stability and enabling lateral control.

Propeller Geometry

In order to increase the efficiency of our propellers, my team and I team applied Bayesian Optimization to maximize lift-to-drag, where millimeter-scale effects make geometry choices unusually sensitive. We framed the problem as an experiment-in-the-loop optimization task and design a system that could propose a design, print it, test it, and learn from the result—then repeat.

We first defined the design space to keep prints fast and controllable: camber; symmetric camber option; root and tip chord; corner radius; surface roughness and print-layer direction; inflow vs. counter-flow orientation; angle of attack; and twist angle.

To measure outcomes, we assembled a benchtop rig around a CX-Star 12 mm motor with a 6-axis thrust/torque sensor and a built a custom IR emitter/receiver for RPM. A synchronized logger let us test each prop at matched operating points; calibration and repeats kept noise low enough to resolve small geometry deltas.

By utilizing Bayesian optimization to develop an ML model, we we modeled L/D versus geometry and operating state, and an acquisition function chose the next print. This closed loop (print → test → update model) concentrated trials where L/D gains were most likely and surfaced practical rules (useful camber ranges, twist–AoA coupling, when print-layer direction/roughness helps, and limits set by corner radius and chord ratios).

##

Bayesian Optimization Process

##

MiniP Design

##

Inertial Ratios

##

MiniP Flyer

##

Torque & Thrust Readings

##

Test Rig / Sensor Attachment

##

Propeller Prints

##

Custom RPM Sensor Schematic

##

Propeller Iterations

##

Thrust Readings in x,y,z

##

Propeller Design
