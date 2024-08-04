import React from 'react';
import Feature from './Feature';



function Marketing({ features }) {
  return (
    <div className="space-y-8">
      {features.map((feature, index) => (
        <Feature
          key={index}
          imgSrc={feature.imgSrc}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}

export default Marketing;
