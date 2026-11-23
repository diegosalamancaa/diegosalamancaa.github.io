// Newest first. Any string starting with "TODO" renders highlighted.
// `project` links to /projects/<id>/ when set.

export interface Role {
  title: string;
  org: string;
  dates: string;
  points: string[];
  project?: string;
}

export const experience: Role[] = [
  {
    title: 'Engineering Intern, Turbine Hot-Section Thermal Systems',
    org: 'GE Aerospace',
    dates: 'TODO: dates',
    points: ['TODO: team, location, and 1-2 measurable outcomes'],
    project: 'ge-aerospace',
  },
  {
    title: 'President & Founder',
    org: 'WEngineer (501(c)(3) engineering education nonprofit)',
    dates: 'TODO: dates',
    points: ['TODO: students reached, programs run, funds raised'],
    project: 'wengineer',
  },
  {
    title: 'Research Assistant, HAMR',
    org: "ModLab (Mark Yim), University of Pennsylvania",
    dates: 'TODO: dates',
    points: [
      'Rocker-bogie-style suspension and three-axis stabilized gimbal for a holonomic multi-terrain robot.',
      'Validated in ROS/Gazebo and Vicon lab tests; ±20–30° effective attitude range under payload.',
    ],
    project: 'hamr',
  },
  {
    title: 'Combustor Lead',
    org: 'Penn Jet Propulsion',
    dates: 'TODO: dates',
    points: [
      'Mark II axial micro-turbojet: kerosene fuel-injection system.',
      'Mark III hydrogen micro-turbofan: leading the annular combustor from concept to validated design.',
    ],
    project: 'pjp-combustors',
  },
  {
    title: 'Mechanical Lead',
    org: 'Penn High Power Rocketry',
    dates: '2024 – present',
    points: [
      '2025–26: leading the Fin Can subteam; flutter analysis in MATLAB, alignment jig, documented layup workflow.',
      '2024–25: fin design and manufacturing; Ansys FEA/CFD on fin can, boattail, and air-brakes; L1 certification.',
    ],
    project: 'penn-high-power-rocketry',
  },
  {
    title: 'Mechatronics Engineering Intern',
    org: 'ModLab (Mark Yim), University of Pennsylvania',
    dates: 'Summer 2025',
    points: [
      'Quantum Space Kerry Wisnosky internship, awarded to one Penn Engineering student per year.',
      'Redesigned the Mini Piccolissimo flyer, targeting a 27.8 mm variant from a 34 mm baseline.',
    ],
    project: 'minip-flyer',
  },
  {
    title: 'Thermoelectrics Intern',
    org: "FlexMeshed Lab (Prof. Deepa Madan), UMBC",
    dates: 'TODO: dates',
    points: ['Thermoelectric film characterization, Seebeck test setup, MXene-based inks, zinc battery cells.'],
    project: 'thermoelectrics',
  },
  {
    title: 'Captain, Economics Team',
    org: 'Mount Hebron High School',
    dates: '2023 – 2024',
    points: [
      'Represented the United States at the 2024 International Economics Olympiad in Baku; individual bronze medal.',
      'Taught college-level economics to 40+ members.',
    ],
    project: 'economics-team',
  },
];

export const education = {
  school: 'University of Pennsylvania, School of Engineering and Applied Science',
  degree: 'TODO: degree, major, expected graduation',
};
