const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '{{ service_name }}',
      version: '0.0.1',
      description: "{{ description }}",
    },
  },
  apis: ['./app/routes/*.js'], // Path to your API routes
};

const specs = swaggerJsdoc(options);

module.exports = specs;