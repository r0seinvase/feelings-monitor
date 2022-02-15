// get relevant emojis from emoji-API
const emojiReference = {};

emojiReference.angry = fetch('https://emoji-api.com/emojis/angry-face?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

emojiReference.happy = fetch('https://emoji-api.com/emojis/grinning-face-with-big-eyes?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

emojiReference.disgusted = fetch('https://emoji-api.com/emojis/face-vomiting?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

emojiReference.sad = fetch('https://emoji-api.com/emojis/crying-face?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

emojiReference.fearful = fetch('https://emoji-api.com/emojis/anxious-face-with-sweat?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

emojiReference.surprised = fetch('https://emoji-api.com/emojis/astonished-face?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

emojiReference.excited = fetch('https://emoji-api.com/emojis/star-struck?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

neutralFace = fetch('https://emoji-api.com/emojis/face-without-mouth?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);



// had some error with the cloud url, i think    
// const cloudFace = fetch('https://emoji-api.com/emojis/face-in-clouds?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
//     .then(response => response.json())
//     .then(data => data[0].character);

const listeningFace = fetch('https://emoji-api.com/emojis/thinking-face?access_key=8bb25ebd0a3a427ee5afe3f9222517ed85c84920')
    .then(response => response.json())
    .then(data => data[0].character);

// fill in neutral face as default

const populateEmojiSpace = async (face) => {
    const a = await face;
    const emojiSpace = document.getElementById('form-emoji');
    emojiSpace.textContent = a;
};
  
populateEmojiSpace(neutralFace);

// create event listeners for feelings selection

// const happyButton = document.getElementById('happy');
// const angryButton = document.getElementById('angry');
// const sadButton = document.getElementById('sad');
// const disgustedButton = document.getElementById('disgusted');
// const surprisedButton = document.getElementById('surprised');
// const excitedButton = document.getElementById('excited');
// const fearfulButton = document.getElementById('fearful');
// console.log(fearfulButton);

const emotionButtons = document.querySelectorAll('.feelings-button');
emotionButtons.forEach(emotionButton => {
    emotionButton.addEventListener('change', () => {
        populateEmojiSpace(emojiReference[emotionButton.value]);
    })
    emotionButton.addEventListener('mouseover', () => {
        populateEmojiSpace(emojiReference[emotionButton.value]);
    })
})

// })

// happyButton.addEventListener('mouseover', function(event){
//     populateEmojiSpace(happyFace)
//     console.log(happyFace);
// });
// angryButton.addEventListener('mouseover', function(event){
//     populateEmojiSpace(angryFace)
//     console.log(angryFace);
// });
// sadButton.addEventListener('mouseover', function(event){
//     populateEmojiSpace(sadFace)
//     console.log(sadFace);
// });
// disgustedButton.addEventListener('mouseover', function(event){
//     populateEmojiSpace(disgustedFace)
//     console.log(disgustedFace);
// });
// surprisedButton.addEventListener('mouseover', function(event){
//     populateEmojiSpace(surprisedFace)
//     console.log(surprisedFace);
// });
// excitedButton.addEventListener('mouseover', function(event){
//     populateEmojiSpace(excitedFace)
//     console.log(excitedFace);
// });
// fearfulButton.addEventListener('mouseover', function(event){
//     populateEmojiSpace(fearfulFace)
//     console.log(fearfulFace);
// });



// happyButton.addEventListener('change', () => {
//     console.log('i selected happy');
//     populateEmojiSpace(happyFace);
// });

// angryButton.addEventListener('change', () => {
//     console.log('i selected angry');
//     populateEmojiSpace(angryFace);
// });

// sadButton.addEventListener('change', () => {
//     console.log('i selected sad');
//     populateEmojiSpace(sadFace);
// });

// disgusted.addEventListener('change', () => {
//     console.log('i selected disgusted');
//     populateEmojiSpace(disgustedFace);
// });

// surprisedButton.addEventListener('change', () => {
//     console.log('i selected surprised');
//     populateEmojiSpace(surprisedFace);
// });

// excitedButton.addEventListener('change', () => {
//     console.log('i selected excited');
//     populateEmojiSpace(excitedFace);
// });

// fearfulButton.addEventListener('change', () => {
//     console.log('i selected fearful');
//     populateEmojiSpace(fearfulFace);
// });