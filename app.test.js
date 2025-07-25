const request = require('supertest');
const app = require('./app'); // Import our app for testingg

describe('GET /', () => {
  it('should respond with the index.html file and a 200 status', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/html/);
    expect(response.text).toContain('<h1>Hello from our updated Deployed App!</h1>');
  });

  it('should respond with the index.html file and correct title', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/html/);
    expect(response.text).toContain('<title>Demo</title>');
  });
});