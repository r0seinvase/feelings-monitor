// get relevant emojis from emoji-API

const angryFace = fetch('https://emoji-api.com/emojis/angry-face?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

const happyFace = fetch('https://emoji-api.com/emojis/grinning-face-with-big-eyes?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

const disgustedFace = fetch('https://emoji-api.com/emojis/face-vomiting?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

const sadFace = fetch('https://emoji-api.com/emojis/crying-face?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

const fearfulFace = fetch('https://emoji-api.com/emojis/anxious-face-with-sweat?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

const surprisedFace = fetch('https://emoji-api.com/emojis/astonished-face?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

const excitedFace = fetch('https://emoji-api.com/emojis/star-struck?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

const neutralFace = fetch('https://emoji-api.com/emojis/face-without-mouth?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

// const cloudFace = fetch('https://emoji-api.com/emojis/face-in-clouds?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
//     .then(response => response.json())
//     .then(data => data[0].character);

const listeningFace = fetch('https://emoji-api.com/emojis/thinking-face?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

// fill in neutral face as default

const populateEmojiSpace = async () => {
    const face = await neutralFace;
    const emojiSpace = document.getElementById('form-emoji');
    emojiSpace.textContent = face;
};
  
populateEmojiSpace();

// 


