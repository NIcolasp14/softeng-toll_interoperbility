const app = require('/Users/nicolas/Desktop/Softeng_latest/backend/index.js');
const request = require('supertest');
const chai = require('chai')
const expect = chai.expect;

//charges by testing for operators
let chargesby;
var total_number_of_passes=0;
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                             station operator: MR 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('----------------------- \n  Test getChargesBy route \n  ----------------------- \n (GET: https://localhost:9103/interoperability/api/ChargesBy/MR/20201001/20201101) \n', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/ChargesBy/MR/20201001/20201101s') // ?format=json
                    .end((err, res) => {
                        chargesby = res.body;
                        // add number of passes of all the other operators' tags
                        // (same way we can crosscheck total costs)
                        total_number_of_passes += res.body.PPOList[0].NumberOfPasses;
                        total_number_of_passes += res.body.PPOList[1].NumberOfPasses;
                        total_number_of_passes += res.body.PPOList[2].NumberOfPasses;
                        total_number_of_passes += res.body.PPOList[3].NumberOfPasses;
                        total_number_of_passes += res.body.PPOList[4].NumberOfPasses;
                        total_number_of_passes += res.body.PPOList[5].NumberOfPasses;

                        //console.log(chargesby);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
    it('Should have an attribute op_ID', () => {
        expect(chargesby).to.have.property('op_ID')
    })
    it('Should have an attribute RequestTimestamp', () => {
        expect(chargesby).to.have.property('RequestTimestamp')
    })
    it('Should have an attribute PeriodFrom', () => {
        expect(chargesby).to.have.property('PeriodFrom')
    })
    it('Should have an attribute PeriodTo', () => {
        expect(chargesby).to.have.property('PeriodTo')
    })
    it('Should have an attribute PPOList', () => {
        expect(chargesby).to.have.property('PPOList')
    })
    it('Should have an attribute VisitingOperator', () => {
        expect(chargesby.PPOList[0]).to.have.property('VisitingOperator')
    })
    it('Should have an attribute NumberOfPasses', () => {
        expect(chargesby.PPOList[0]).to.have.property('NumberOfPasses')
    })
    it('Should have an attribute PassesCost', () => {
        expect(chargesby.PPOList[0]).to.have.property('PassesCost')
    })
    it('Result (Total number of passes for MR is 18 from other operators and 117 from its own tags. So, 117+18=135 and we expect 18 as a result.)', () => {
        expect(total_number_of_passes).to.eq(18)
   })
})