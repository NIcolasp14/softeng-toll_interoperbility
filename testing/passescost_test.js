const app = require('/Users/nicolas/Desktop/Softeng_latest/backend/index.js');
const request = require('supertest');
const chai = require('chai')
const expect = chai.expect;

// passes cost testing for operators
// here we check the endpoints' res.status, as well as the results calculated, which should be equal to the 
// xlsx file results provided by the course's professor 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                         KO: station operator | OO: tags
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
let passescost;
describe('------------------------ \n  Test getPassesCost route \n  ------------------------ \n  (GET:  https://localhost:9103/interoperability/api/PassesCost/KO/OO/20201001/20201101) \n', () => {
    it("It should return status 200 and '8.85' as a result", (done) => {
                request(app)
                    .get('/interoperability/api/PassesCost/KO/OO/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passescost = res.body;
                        
                        //console.log(passescost);
                        expect(res.status).to.eq(200);
                        expect(res.body.PassesCost).to.eq('8.85');
                        done();
                    })
    })
    it('Result should have an attribute op1_ID', () => {
        expect(passescost).to.have.property('op1_ID')
    })
    it('Result should have an attribute op2_ID', () => {
        expect(passescost).to.have.property('op2_ID')
    })
    it('Result should have an attribute RequestTimestamp', () => {
        expect(passescost).to.have.property('RequestTimestamp')
    })
    it('Result should have an attribute PeriodFrom', () => {
        expect(passescost).to.have.property('PeriodFrom')
    })
    it('Result should have an attribute PeriodTo', () => {
        expect(passescost).to.have.property('PeriodTo')
    })
    it('Result should have an attribute NumberOfPasses', () => {
        expect(passescost).to.have.property('NumberOfPasses')
    })
    it('Result should have an attribute PassesCost', () => {
        expect(passescost).to.have.property('PassesCost')
    })
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                         OO: station operator | KO: tags
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('------------------------ \n  Test getPassesCost route \n  ------------------------ \n  (GET:  https://localhost:9103/interoperability/api/PassesCost/OO/KO/20201001/20201101) \n', () => {
    it("It should return status 200 and '13.80' as a result", (done) => {
                request(app)
                    .get('/interoperability/api/PassesCost/OO/KO/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passescost = res.body;
                        
                        //console.log(passescost);
                        expect(res.status).to.eq(200);
                        expect(res.body.PassesCost).to.eq('13.80');
                        done();
                    })
    })
    it('Result should have an attribute op1_ID', () => {
        expect(passescost).to.have.property('op1_ID')
    })
    it('Result should have an attribute op2_ID', () => {
        expect(passescost).to.have.property('op2_ID')
    })
    it('Result should have an attribute RequestTimestamp', () => {
        expect(passescost).to.have.property('RequestTimestamp')
    })
    it('Result should have an attribute PeriodFrom', () => {
        expect(passescost).to.have.property('PeriodFrom')
    })
    it('Result should have an attribute PeriodTo', () => {
        expect(passescost).to.have.property('PeriodTo')
    })
    it('Result should have an attribute NumberOfPasses', () => {
        expect(passescost).to.have.property('NumberOfPasses')
    })
    it('Result should have an attribute PassesCost', () => {
        expect(passescost).to.have.property('PassesCost')
    })
})