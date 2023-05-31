import React, { useState, useEffect } from 'react';

const TextAnimation = ({ textToAnimate, loop }) => {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let timeout;

    if (!textToAnimate) return;

    const addLetter = () => {
      if (currentIndex < textToAnimate.length - 1) {
        setAnimatedText(prevText => prevText + textToAnimate[currentIndex]);
        currentIndex++;
      } else {
        if (loop) {
          currentIndex = 0;
          setAnimatedText('');
        }
      }
      timeout = setTimeout(addLetter, 200);
    };

    timeout = setTimeout(addLetter, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [textToAnimate, loop]);

  return (
    <div>
      {animatedText}
      {'_'}
    </div>
  );
};

export default TextAnimation;