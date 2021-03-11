import React, { useState } from 'react';
import Picker, {SKIN_TONE_NEUTRAL} from 'emoji-picker-react';

const Emoji = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    console.log(chosenEmoji);
  };

  return (
    <div>
      {/* {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )} */}
      <Picker
        onEmojiClick={onEmojiClick}
        skinTone={SKIN_TONE_NEUTRAL}
        // groupVisibility={{
        // flags: false,
        // }}
        pickerStyle={{ position: 'absolute', zIndex: '2', bottom: '50px', right: '10px'}}
        disableSearchBar={true}
        // preload={true}
      />
    </div>
  );
};

export default Emoji;