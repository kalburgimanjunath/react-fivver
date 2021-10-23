import React from 'react';
export default function GigsList({ listItem }) {
  const list = [
    {
      url: 'https://www.fillmurray.com/640/360',
      title: 'I will take zumba classes for free',
      startingPrice: '10',
    },
    {
      url: 'https://loremflickr.com/640/360',
      title: 'take zumba classes for free',
      startingPrice: '10',
    },
    {
      url: 'https://placekitten.com/640/360',
      title: 'I will take zumba classes for free',
      startingPrice: '10',
    },
  ];
  const ItemDetails = ({ listdata }) => {
    // console.log(listdata);
    return (
      <div>
        <div>{listdata.title}</div>
        <div>
          <img src={listdata.url} width="200" height="150" />
        </div>
        <div>Starting At: {listdata.startingPrice}</div>
      </div>
    );
  };

  return (
    <div>
      {list.map((item) => {
        // console.log(item);
        return (
          <div>
            <ItemDetails listdata={item} />
          </div>
        );
      })}
    </div>
  );
}
