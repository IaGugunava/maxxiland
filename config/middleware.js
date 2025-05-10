module.exports = [
    'strapi::errors',
    {
      name: 'strapi::cors',
      config: {
        origin: ['http://localhost:3000'], // Nuxt dev URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        headers: '*',
      },
    },
    // other middlewares...
  ];