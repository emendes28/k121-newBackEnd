import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/participants (GET)', () => {
    return request(app.getHttpServer())
      .get('/participants')
      .expect(200)
      .expect(Array);
  });

/*  it('/:id (GET) with id valid', () => {
    return request(app.getHttpServer())
      .get('/:id')
      .expect(200)
      .expect('Hello World!');
  });

  it('/:id (GET) without id', () => {
    return request(app.getHttpServer())
      .get('/:id')
      .expect(200)
      .expect('Hello World!');
  });

  it('/:id (GET) without id valid', () => {
    return request(app.getHttpServer())
      .get('/:id')
      .expect(200)
      .expect('Hello World!');
  });

  it('/:id (PUT) with id valid', () => {
    return request(app.getHttpServer())
      .put('/:id')
      .expect(200)
      .expect('Hello World!');
  });

  it('/:id (PUT) without id', () => {
    return request(app.getHttpServer())
      .put('/:id')
      .expect(200)
      .expect('Hello World!');
  });

  it('/:id (PUT) without id valid', () => {
    return request(app.getHttpServer())
      .put('/:id')
      .expect(200)
      .expect('Hello World!');
  });

  it('/:id (POST) with id valid', () => {
    return request(app.getHttpServer())
      .post('/:id')
      .expect(200)
      .expect('Hello World!');
  });

  it('/:id (POST) without id', () => {
    return request(app.getHttpServer())
      .post('/:id')
      .expect(200)
      .expect('Hello World!');
  });

  it('/:id (POST) without id valid', () => {
    return request(app.getHttpServer())
      .post('/:id')
      .expect(200)
      .expect('Hello World!');
  });

  it('/:id (DELETE) with id valid', () => {
    return request(app.getHttpServer())
      .delete('/:id')
      .expect(200)
      .expect('Hello World!');
  });

  it('/:id (DELETE) without id', () => {
    return request(app.getHttpServer())
      .delete('/:id')
      .expect(200)
      .expect('Hello World!');
  });

  it('/:id (DELETE) without id valid', () => {
    return request(app.getHttpServer())
      .delete('/:id')
      .expect(200)
      .expect('Hello World!');
  });
*/
});
