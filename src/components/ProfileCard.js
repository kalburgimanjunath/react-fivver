import React from 'react';
import Avatar from './Avatar';
export default function ProfileCard() {
  return (
    <div>
      <Avatar />
      <div>
        <span>Online</span>
        <div>Manjunath Kalburgi</div>
        <div>Edit</div>
        <div>From </div>
        <div>Member Since</div>
        <div>
          Available<button>Availability</button>
        </div>
      </div>
    </div>
  );
}
