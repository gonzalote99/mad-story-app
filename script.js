document.addEventListener('DOMContentLoaded', function() {
  const nounInput = document.getElementById('noun');
  const verbInput = document.getElementById('verb');
  const adjectiveInput = document.getElementById('adjective');
  const adverbInput = document.getElementById('adverb');
  const generateButton = document.getElementById('generate');
  const playAgainButton = document.getElementById('play-again');
  const shareStoryTwitterButton = document.getElementById('share-story-twitter');
  const shareStoryFacebookButton = document.getElementById('share-story-facebook');
  const shareStoryLinkedButton = document.getElementById('share-story-linkedin');
  const storyDiv = document.getElementById('story');

  function generateStory() {
    const noun = nounInput.value;
    const verb = verbInput.value;
    const adjective = adjectiveInput.value;
    const adverb = adverbInput.value;

    const storyTemplate = `
    In a fantastical realm, there resided a ${noun} of incredible bravery.
    From a young age, this ${noun} aspired to ${verb} ${adjective}ly, diligently honing their skills ${adverb}.
    One magical day, while ${verb}ing near the ancient ${noun}, they stumbled upon an enchanted ${noun}.
    Within the depths of the ${noun}, they discovered a wondrous ${adjective} ${noun} that could ${verb} ${adverb}.
    Empowered by this artifact, they embarked on an epic journey, ${verb}ing through enchanted ${adjective} landscapes and ${noun}-filled kingdoms.
    Along their path, they encountered a wise ${noun} who imparted the secret of ${verb}ing ${adjective}ly.
    Finally, after countless ${noun}-filled days, they reached their destination and ${verb}ed ${adverb} to fulfill their destiny!
    Thus, our ${noun} became a legend, living ${adverb} ever after, proving that even in the realm of fantasy, dreams can become reality.
    `;

    storyDiv.textContent = storyTemplate;
  }

  generateButton.addEventListener('click', generateStory);

  playAgainButton.addEventListener('click', function() {
    nounInput.value = '';
    verbInput.value = '';
    adjectiveInput.value = '';
    adverbInput.value = '';
  });

  shareStoryTwitterButton.addEventListener('click', function() {
    const story = storyDiv.textContent;
    const encodedStory = encodeURIComponent(story);
    const twitterURL = `https://twitter.com/intent/tweet?text=${encodedStory}`;

    window.open(twitterURL, '_blank');
  });

  shareStoryFacebookButton.addEventListener('click', function() {
    const story = storyDiv.textContent;
    const encodedStory = encodeURIComponent(story);
    const facebookURL = `https://twitter.com/intent/tweet?text=${encodedStory}`;

    window.open(facebookURL, '_blank');
  });
  shareStoryLinkedButton.addEventListener('click', function() {
    const story = storyDiv.textContent;
    const encodedStory = encodeURIComponent(story);
    const linkedinURL = `https://twitter.com/intent/tweet?text=${encodedStory}`;

    window.open(linkedinURL, '_blank');
  });

})