import React from 'react';
export default function Header() {
  const menu = [
    'dashboard',
    'messages',
    'orders',
    'gigs',
    'analytics',
    'earnings',
    'community',
    'more',
    'switchtobuying',
    'profile',
  ];
  const menuItem = menu.map((item) => {
    return (
      <li className="page-scroll">
        <a href={item}>{item}</a>
      </li>
    );
  });
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header page-scroll">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#page-top">
            Fivver
          </a>
        </div>
        <div className="navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">{menuItem}</ul>
        </div>
      </div>
    </nav>
    // <ul>
    //   <li>Logo</li>
    //   {menuItem}
    // </ul>
  );
}
