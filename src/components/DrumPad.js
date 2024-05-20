import React, { useEffect } from 'react';

const DrumPad = ({ sound, handleDisplay }) => {
  const playSound = () => {
    const audio = document.getElementById(sound.key);
    if (audio) {
      audio.pause(); // Pause the audio if it's already playing
      audio.currentTime = 0; // Reset the audio to the beginning
      audio.play().catch(error => console.error('Error playing audio:', error));
      handleDisplay(sound.id);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key.toUpperCase() === sound.key) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="drum-pad" id={sound.id} onClick={playSound}>
      {sound.key}
      <audio className="clip" id={sound.key} src={sound.url} />
    </div>
  );
};

export default DrumPad;

