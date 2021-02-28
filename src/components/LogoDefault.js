import React from 'react';
import Image from './Image';

const LogoDefault = () => {
  return (
    <>
      <Image
        src="logo/vector/default.cvg"
        className="mx-auto"
        alt="PluralityNET logo"
        style={{
          border: '0',
        }}
      />
    </>
  );
};

export default LogoDefault;
