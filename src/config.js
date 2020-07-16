const env = process.env.NODE_ENV || 'development';

const config = {
  apiBaseUrl: 'http://localhost:4000'
};

switch (env) {
  case 'production':
    break;
}

module.exports = config;
