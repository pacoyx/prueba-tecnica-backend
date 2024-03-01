import request from 'supertest';
import app from '../src/app';

describe('Express App', () => {
  it('responds with "Hola Culqi!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hola Culqi!');
  });
 
});