const request=require("supertest")
const app = require('./apps/Routes/Author.route')

describe('Authors',()=>{
    it('GET / --> authors',()=>{})
    it('GET /:id --> specific author',()=>{})
    it('POST / --> create author',()=>{})
    it('DELETE /:id --> remove specific author',()=>{})
})
