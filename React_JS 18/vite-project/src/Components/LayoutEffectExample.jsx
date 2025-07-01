import React, { useState, useRef, useLayoutEffect } from 'react';

function LayoutEffectExample() {
  const [width, setWidth] = useState(0);
  const boxRef = useRef();

  useLayoutEffect(() => {
    const boxWidth = boxRef.current.getBoundingClientRect().width;
    setWidth(boxWidth);
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: '50%', height: '100px', background: 'lightblue' }}
      >
        Resize Box
      </div>
      <p>Box width is: {width}px</p>
    </div>
  );
}

export default LayoutEffectExample;