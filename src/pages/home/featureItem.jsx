import React from 'react';

const Item = (props) => {
  const { dataSource } = props;
  return (
    <div className="feature-item">
      <img src={dataSource.img} />
      <h3>{dataSource.title}</h3>
      <p>{dataSource.description}</p>
    </div>
  );
};

export default Item;
