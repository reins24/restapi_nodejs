
import { web } from "../src/application/web.js"
import supertest from "supertest";
import { logger } from "../src/application/logging.js";
import { createTestUser, removeTestUser } from "./test.util.js";

describe('POST /api/users', function(){

    afterEach(async () => {
       await removeTestUser();
    })

    it.only('should can register new user', async () => {
        const result = await supertest(web)
        .post('/api/users')
        .send({
            username: 'test',
            password: 'rahasia',
            name: 'test'
        });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("test");
        expect(result.body.data.password).toBeUndefined();
    });

    it('should reject request invalid', async () => {
        const result = await supertest(web)
        .post('/api/users')
        .send({
            username: '',
            password: '',
            name: 'test'
        });

        console.log("hasilnya :")

        logger.info(result); 

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});

describe('POST /api/users/login', function() {

    beforeEach(async () => {
        await createTestUser();
    })

     afterEach(async () => {
       await removeTestUser();
    })

    it('should can login', async () => {
        const result = await supertest(web)
        .post('/api/users/login')
        .send({
            username: 'test',
            password: 'rahasia'
        });

        expect(result.status).toBe(200);
        

        
    });

     it('should invalid login', async () => {
        const result = await supertest(web)
        .post('/api/users/login')
        .send({
            username: '',
            password: ''
        });
        logger.info(result.body)
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();

    });

    it('should password wrong!', async () => {
        const result = await supertest(web)
        .post('/api/users/login')
        .send({
            username: 'test',
            password: 'rahasia1'
        });
        logger.info(result.body)
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();

    });
    it('should username wrong!', async () => {
        const result = await supertest(web)
        .post('/api/users/login')
        .send({
            username: 'test1',
            password: 'rahasia'
        });
        logger.info(result.body)
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();

    });

})

describe('GET /api/users/current', function(){

   beforeEach(async () => {
        await createTestUser();
    })

     afterEach(async () => {
       await removeTestUser();
    })

    it('should get current user', async () => {
        const result = await supertest(web)
        .get('/api/users/current')
        .set('Authorization', 'test');

        logger.info(result.body)

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('test');
        expect(result.body.data.name).toBe('test');

    })
    
});