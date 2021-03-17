import React from 'react';
import Picker, {SKIN_TONE_NEUTRAL} from 'emoji-picker-react';

const Emoji = (props) => {
  const {onEmojiClick} = props;

  // const onEmojiClick = (event, emojiObject) => {
  //   setChosenEmoji(emojiObject);
  //   console.log(chosenEmoji);
  // };

  return (
    <div>
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