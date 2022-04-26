const request = require('supertest');

const setupApp = require('../../app');

const app = setupApp();

const emailTest = {
  email: 'emailTest.com',
  subject: 'Subject test',
  text: 'Hello test',
};

describe('sendEmail', () => {
  it('should be contains a property called message', async () => {
    const res = await request(app).post('/').send(emailTest);

    expect(res.body).toHaveProperty('message');
  });
});
