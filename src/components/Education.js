import React from 'react';
export default function Education({ title, items }) {
  return (
    <div>
      <h1>{title}</h1>
      <button>Add New</button>
      <ul>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
