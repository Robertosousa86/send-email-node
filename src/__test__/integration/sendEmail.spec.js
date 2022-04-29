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

  it('should return 400 when an error occurs when sending an email', async () => {
    const res = await request(app).post('/').send(emailTest);

    expect(res.statusCode).toBe(400);
  });

  it('should be return message: `O campo email deve ser preenchido.` when an error occurs and the status code is 400', async () => {
    const res = await request(app).post('/').send(emailTest);

    const response = {
      status: res.statusCode,
      message: res.body.message,
    };

    const expectedResponse = {
      status: 400,
      message: 'O campo email deve ser preenchido.',
    };

    expect(response).toMatchObject(expectedResponse);
  });
});
