export const apiMapper = {
  login: '/api/login',
};

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
      icon: 'sync-alt',
      text: 'Update Status',
      link: '/update-status',
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