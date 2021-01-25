import React, { ReactElement } from 'react';

export default function Footer(): ReactElement {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 60,
        fontSize: 14,
        color: 'grey'
      }}
    >
      Built and Designed by Wesley Tam, 2021
    </div>
  );
}
