export const nav = {
  default: [
    {
      text: 'About Us',
      link: '/about-us',
    },
    {
      text: 'Contact Us',
      link: '/contact-us',
    },
  ],
  customer: [
    {
      text: 'Schedule',
      link: '/schedule',
    },
    {
      text: 'My Orders',
      link: '/my-orders',
    }
  ],
  delivery: [
    {
      text: 'Find Pickup',
      link: '/pickups'
    },
    {
      text: 'My Deliveries',
      link: 'my-deliveries'
    }
  ]
};

export const cardsForRole = {
  customer: [
    {
      icon: 'calendar',
      text: 'Schedule Pickup',
      link: '/schedule',
    },
    {
      icon: 'truck',
      text: 'Track Order',
      link: '/track',
    },
    {
      icon: 'history',
      text: 'My Orders',
      link: '/my-orders',
    },
    {
      icon: 'question',
      text: 'Help',
      link: '/help',
    },
  ],
  delivery: [
    {
      icon: 'calendar',
      text: 'Pickups',
      link: '/pickups',
    },
    {
      icon: 'grin-stars',
      text: 'My Deliveries',
      link: '/my-deliveries',
    },
    {
      icon: 'question',
      text: 'Help',
      link: '/help',
    },
  ],
};

export const pickups = [
  {
    pickupAddress: 'Daffodil Blooms',
    dropAddress: 'Daffodil Merlins',
  }
];