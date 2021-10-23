import React from 'react';
import { ProfileCard, GigsList, About } from '../components/index';
export default function Dashboard() {
  return (
    <div>
      <ProfileCard />
      <div>
        <h1>About</h1>
        <p>
          <About />
        </p>
      </div>
      <h1>Languages</h1>
      <h1>Skills</h1>
      <h1>Education</h1>
      <h1>Certification</h1>
      <GigsList listItem="" />
    </div>
  );
}
