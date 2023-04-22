
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'marcoferab2001@gmail.com',
        defaultReplyTo: 'marcoferab2001@gmail.com',
      },
    },
  },
})