import React from 'react';
import {
  ProfileCard,
  GigsList,
  About,
  Languages,
  Skills,
  Education,
  Certification,
} from '../components/index';
export default function Dashboard() {
  const languages = ['english', 'hindi'];
  const skills = ['reactjs', 'angular8'];
  const education = ['be', 'deploma'];
  const certificates = ['ab+', 'bb+'];
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
      <Languages items={languages} />
      <h1>Skills</h1>
      <Skills items={skills} />
      <h1>Education</h1>
      <Education items={education} />
      <h1>Certification</h1>
      <Certification items={certificates} />
      <GigsList listItem="" />
    </div>
  );
}
