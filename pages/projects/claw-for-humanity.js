import React from 'react';
import ProjectPage from '../../components/ProjectPage';

const project = {
  title: 'Claw for Humanity',
  description: 'A recycling robot designed to help with waste management and promote environmental sustainability.',
  image: '/images/claw_for_humanity.jpg',
  projectId: 'claw-for-humanity',
  content: `The Claw for Humanity is an innovative recycling robot that is designed to assist with waste management and promote environmental sustainability. Our team at Thomas Haney Secondary School created this robot to raise awareness about the importance of recycling and to demonstrate how technology can help solve real-world problems.

The robot is equipped with a claw mechanism that can pick up and sort different types of recyclable materials, such as plastic, paper, and metal. This mechanism is controlled by a custom-built software that can recognize and classify the materials based on their properties. The robot's mobility is powered by an efficient electric motor, allowing it to navigate around various environments with ease.

By participating in various competitions and showcasing our robot, we hope to inspire other students and organizations to engage in similar projects that can make a positive impact on our environment.`,
};

const ClawForHumanityPage = () => {
  return (
    <div>
      <ProjectPage project={project} />
    </div>
  );
};

export default ClawForHumanityPage;
