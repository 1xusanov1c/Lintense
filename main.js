const menuItems = document.querySelectorAll('#menu p');
const title = document.getElementById('title');
const description = document.getElementById('description');

const data = {
  portrait: {
    title: 'Portraiture is one of the most popular genres of photography.',
    desc: 'The goal of portraiture is to show the character of a subject – to capture the person’s personality and emotion in an image.'
  },
  fashion: {
    title: 'Fashion photography showcases clothing and accessories.',
    desc: 'It is used to sell, advertise, and promote fashion brands, capturing style and trends creatively.'
  },
  lifestyle: {
    title: 'Lifestyle photography captures real-life situations.',
    desc: 'It focuses on portraying everyday life naturally and beautifully, often blending candid moments and storytelling.'
  },
  commercial: {
    title: 'Commercial photography is for business and marketing.',
    desc: 'It includes product, food, real estate, and advertisement photography, used to sell or promote something.'
  }
};

const pricingData = {
  individual: {
    price: '$120',
    features: [
      '1 hour on location',
      '2 outfit changes',
      '20 images',
      'Lo-res images for web',
      'Hi-res images on USB storage'
    ]
  },
  lifestyle: {
    price: '$220',
    features: [
      '1 hour on location',
      '2 and more locations',
      '30 images',
      'Lo-res images for web',
      'Hi-res images on USB storage'
    ]
  },
  corporate: {
    price: '$350',
    features: [
      '2 hours on location',
      'Single location',
      '40 images',
      'Lo-res images for web',
      'Hi-res images on USB storage'
    ]
  },
  fashion: {
    price: '$450',
    features: [
      '2 hours on location',
      'Unlimited changes',
      'Individual & group photos',
      '50 images',
      'Hi-res images on USB storage'
    ]
  }
};

function renderDetails(type) {
  const detail = pricingData[type];
  const container = document.getElementById('pricing-details');

  if (!detail) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <div>
      <p class="uppercase text-xl">Starting from</p>
      <h1 class="text-8xl font-light">${detail.price}</h1>
    </div>
    <ul class="flex flex-col gap-[15px] mt-[30px] text-xl text-gray-800">
      ${detail.features.map(f => `<li>› ${f}</li>`).join('')}
    </ul>
    <div>
      <button class="uppercase text-sm font-medium hover:underline flex items-center gap-1 mt-4">
        Order <span>→</span>
      </button>
    </div>
  `;
}

// Default load
window.onload = function () {
  renderDetails('lifestyle');
};

// Event listeners
document.getElementById('individual').addEventListener('click', () => renderDetails('individual'));
document.getElementById('lifestyle').addEventListener('click', () => renderDetails('lifestyle'));
document.getElementById('corporate').addEventListener('click', () => renderDetails('corporate'));
document.getElementById('fashion').addEventListener('click', () => renderDetails('fashion'));