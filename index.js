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


const emotionButtons = document.querySelectorAll('.feelings-button');
emotionButtons.forEach(emotionButton => {
    emotionButton.addEventListener('change', () => {
        populateEmojiSpace(emojiReference[emotionButton.value]);
    })
    emotionButton.addEventListener('mouseover', () => {
        populateEmojiSpace(emojiReference[emotionButton.value]);
    })
})


const feelingsForm = document.getElementById('feelings-form')

const makeCard = async (face, comment) => {

    const container = document.createElement('div')
    const ventingSubmit = document.createElement('p')
    const surpriseNode =document.createElement('p')
    const a = await emojiReference[face];
    
    surpriseNode.textContent = a;
        ventingSubmit.textContent = comment
    container.appendChild(ventingSubmit)
            container.appendChild(surpriseNode)
            document.body.appendChild(container)


    const container = document.querySelector('#new-feelings');
    
    const newCard = document.createElement('div');
    newCard.classList.add('new-feeling-card');
    
    const emojiNode = document.createElement('div');
    emojiNode.classList.add('card-emoji');
    
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('card-comment');

    const ventingSubmit = document.createElement('p');

    const a = await emojiReference[face];
    

    emojiNode.textContent = a;
    ventingSubmit.textContent = comment;
    commentContainer.appendChild(ventingSubmit);
    newCard.append(emojiNode, commentContainer);

    container.appendChild(newCard);

};

feelingsForm.addEventListener('submit', function(e){
    e.preventDefault()

    const ventingInput = document.getElementById('venting').value



    const alongFace = document.querySelector('input[name="feeling"]:checked').value;

makeCard(alongFace, ventingInput)
e.target.reset()

    const alongFace = document.querySelector('input[name="feeling"]:checked').value;

    makeCard(alongFace, ventingInput)

    e.target.reset()

})
