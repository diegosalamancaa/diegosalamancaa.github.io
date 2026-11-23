---
title: PID Controller Simulator
role: "TODO: role"
dates: "TODO: dates"
category: Robotics
summary: "TODO: one-sentence summary (plant modeled, language, what the simulator lets you do)."
featured: false
order: 12
---

<span class="todo">TODO: what the simulator is for and who uses it.</span>

## Controller

The simulator implements the standard PID law:

$$
u(t) = K_p\, e(t) + K_i \int_0^t e(\tau)\, d\tau + K_d \frac{de(t)}{dt}
$$

<span class="todo">TODO: discretization (time step, integration method), anti-windup, derivative filtering — whatever the implementation actually does.</span>

## Plant model

<span class="todo">TODO: system being controlled (e.g. DC motor, mass-spring-damper, thermal plant) and its equations.</span>

## Results

<span class="todo">TODO: step-response plots, rise time / overshoot / settling time for chosen gains.</span>

<span class="todo">TODO: link to source code or live demo.</span>

<span class="todo">TODO: cover image.</span>
