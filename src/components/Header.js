import React from 'react';
import HeaderMenu from './HeaderMenu';
export default function Header() {
  const menu = [
    'Dashboard',
    'messages',
    'orders',
    'gigs',
    'analytics',
    'earnings',
    'community',
    'more',
    'switch to buying',
    'profile',
  ];
  const menuItem = menu.map((item) => {
    return <li>{item}</li>;
  });
  return (
    <ul>
      <li>Logo</li>
      {menuItem}
    </ul>
  );
}
