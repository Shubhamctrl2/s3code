// Array of meme objects with image URLs and captions
const memes = [
    { 
      url: 'https://i.imgflip.com/1bij.jpg', 
      caption: 'When you finally understand CSS' 
    },
    { 
      url: 'https://i.imgflip.com/30b1gx.jpg', 
      caption: 'Programmers after fixing one bug' 
    },
    { 
      url: 'https://i.imgflip.com/26am.jpg', 
      caption: 'How it feels debugging your code at 2AM' 
    },
    { 
      url: 'https://i.imgflip.com/1otk96.jpg', 
      caption: 'When your code works the first time' 
    },
    { 
      url: 'https://i.imgflip.com/4t0m5.jpg', 
      caption: 'Frontend vs Backend developers' 
    }
  ];
  
  // Current meme index
  let currentMemeIndex = 0;
  
  // Function to display meme based on the current index
  function displayMeme() {
    const meme = memes[currentMemeIndex];
    document.getElementById('memeImage').src = meme.url;
    document.getElementById('memeCaption').textContent = meme.caption;
  }
  
  // Function to go to the next meme
  function nextMeme() {
    currentMemeIndex = (currentMemeIndex + 1) % memes.length;
    displayMeme();
  }
  
  // Function to go to the previous meme
  function previousMeme() {
    currentMemeIndex = (currentMemeIndex - 1 + memes.length) % memes.length;
    displayMeme();
  }
  
  // Initial call to display the first meme on page load
  window.onload = displayMeme;
  