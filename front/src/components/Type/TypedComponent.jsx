import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = ({ strings, typeSpeed }) => {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed,
      backSpeed: 50,
      loop: false,
      showCursor: false,
    };

    const typed = new Typed(typedElementRef.current, options);

    return () => {
      typed.destroy(); // Destroy Typed instance during cleanup to prevent memory leaks
    };
  }, [strings, typeSpeed]);

  return <span ref={typedElementRef} />;
};

export default TypedComponent;
