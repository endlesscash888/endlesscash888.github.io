const metaConfig = {
  '#home': {
    title: 'Free Birds Club — $FBCL Token | Meme-Token on Pump.fun',
    description: 'Join the Free Birds Club revolution on Pump.fun with $FBCL!',
    ogTitle: 'Free Birds Club — $FBCL Token',
    ogDescription: 'Join the Free Birds Club revolution on Pump.fun with $FBCL!'
  },
  '#about': {
    title: 'About $FBCL | Free Birds Club Meme-Token',
    description: 'Learn about $FBCL, a community-driven meme-token on Pump.fun.',
    ogTitle: 'About $FBCL',
    ogDescription: 'Discover $FBCL’s mission and community.'
  },
  '#tokenomics': {
    title: 'Tokenomics | $FBCL Free Birds Club',
    description: 'Explore $FBCL’s community-driven tokenomics with 50% liquidity pool.',
    ogTitle: 'Tokenomics of $FBCL',
    ogDescription: 'Understand $FBCL’s token distribution and economics.'
  },
  '#roadmap': {
    title: 'Roadmap | $FBCL Free Birds Club',
    description: 'See the future of $FBCL with our community-driven roadmap.',
    ogTitle: 'Roadmap for $FBCL',
    ogDescription: 'Check out $FBCL’s planned milestones.'
  },
  '#community': {
    title: 'Community | $FBCL Free Birds Club',
    description: 'Join the Free Birds Club community on Telegram, Twitter, and Discord.',
    ogTitle: 'Join $FBCL Community',
    ogDescription: 'Connect with Free Birds worldwide.'
  },
  '#buy': {
    title: 'Buy $FBCL | Free Birds Club Token',
    description: 'Get $FBCL tokens on Pump.fun and join the revolution.',
    ogTitle: 'Buy $FBCL Tokens',
    ogDescription: 'Trade $FBCL on Pump.fun and Solana.'
  }
};

function updateMetaTags(hash) {
  const config = metaConfig[hash] || metaConfig['#home'];
  document.title = config.title;
  document.querySelector('meta[name="description"]').setAttribute('content', config.description);
  document.querySelector('meta[property="og:title"]').setAttribute('content', config.ogTitle);
  document.querySelector('meta[property="og:description"]').setAttribute('content', config.ogDescription);
}

async function validateEmail(event) {
  event.preventDefault();
  const form = event.target;
  const emailInput = form.querySelector('.subscribe-input');
  const email = emailInput.value.trim();
  const errorContainer = form.querySelector('.error-message') || document.createElement('div');
  errorContainer.className = 'error-message';
  errorContainer.setAttribute('role', 'alert');

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorContainer.textContent = 'Please enter a valid email address';
    form.appendChild(errorContainer);
    emailInput.focus();
    return;
  }

  try {
    // Simulate API call (GitHub Pages is static, so this is a placeholder)
    form.innerHTML = '<p class="success-message" role="alert">Thank you for subscribing!</p>';
  } catch (error) {
    errorContainer.textContent = 'Subscription failed, please try again';
    form.appendChild(errorContainer);
  }
}

function init() {
  // Update meta tags on load and hash change
  updateMetaTags(window.location.hash || '#home');
  window.addEventListener('hashchange', () => updateMetaTags(window.location.hash || '#home'));

  // Add form validation
  const form = document.querySelector('.subscribe-form');
  if (form) {
    form.addEventListener('submit', validateEmail);
  }
}

document.addEventListener('DOMContentLoaded', init);
