const app = require('/Users/nicolas/Desktop/Softeng_latest/backend/index.js');
const request = require('supertest');
const chai = require('chai')
const expect = chai.expect;

// passes per station testing for operators
// Chose MR with the least amount of tolls to cross check number of passes.
// In order to crosscheck results, I took the sum of each toll station of 
// operator MR during the month 10/2020 and checked if the result was equal
// to the sum of the number of passes of every ther operator through the
// toll stations of MR (endpoint DebtSettlement). As, we already crosschecked the
// results of the latter with the xlsx file results provided by the course's professor, 
// if the sumas are equal, the passesperstation endpoint makes too the correct calculations.
// It turns out the number of passes also crosscheck with the endpoint PassesAnalysis
// for the same period of time.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                           station MR01
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
let passesperstation;
var sum=0;
describe('------------------------------ \n  Test getPassesPerStation route \n  ------------------------------ \n (GET:  https://localhost:9103/interoperability/api/PassesPerStation/MR01/20201001/20201101) \n', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesPerStation/MR01/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesperstation = res.body;
                        sum+= res.body.NumberOfPasses;
                        
                        // console.log(passesperstation);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
    it('Result should have an attribute Station', () => {
        expect(passesperstation).to.have.property('Station')
    })
    it('Result should have an attribute StationOperator', () => {
        expect(passesperstation).to.have.property('StationOperator')
    })
    it('Result should have an attribute RequestTimestamp', () => {
        expect(passesperstation).to.have.property('RequestTimestamp')
    })
    it('Result should have an attribute PeriodFrom', () => {
        expect(passesperstation).to.have.property('PeriodFrom')
    })
    it('Result should have an attribute PeriodTo', () => {
        expect(passesperstation).to.have.property('PeriodTo')
    })
    it('Result should have an attribute NumberOfPasses', () => {
        expect(passesperstation).to.have.property('NumberOfPasses')
    })
    it('Result should have an attribute-list PassesList', () => {
        expect(passesperstation).to.have.property('PassesList')
    })
    it('PassesList should have an attribute PassIndex', () => {
        expect(passesperstation.PassesList[0]).to.have.property('PassIndex')
    })
    it('PassesList should have an attribute PassID', () => {
        expect(passesperstation.PassesList[1]).to.have.property('PassID')
    })
    it('PassesList should have an attribute PassTimeStamp', () => {
        expect(passesperstation.PassesList[3]).to.have.property('PassTimeStamp')
    })
    it('PassesList should have an attribute VehicleID', () => {
        expect(passesperstation.PassesList[4]).to.have.property('VehicleID')
    })
    it('PassesList should have an attribute TagProvider', () => {
        expect(passesperstation.PassesList[5]).to.have.property('TagProvider')
    })
    it('PassesList should have an attribute PassType', () => {
        expect(passesperstation.PassesList[5]).to.have.property('PassType')
    })
    it('PassesList should have an attribute PassCharge', () => {
        expect(passesperstation.PassesList[5]).to.have.property('PassCharge')
    })
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                           station MR00
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('------------------------------ \n  Test getPassesPerStation route \n  ------------------------------ \n (GET:  https://localhost:9103/interoperability/api/PassesPerStation/MR00/20201001/20201101) \n', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesPerStation/MR00/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesperstation = res.body;
                        sum+=res.body.NumberOfPasses;
                        
                        // console.log(passesperstation);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
})
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                           station MR02
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('------------------------------ \n  Test getPassesPerStation route \n  ------------------------------ \n (GET:  https://localhost:9103/interoperability/api/PassesPerStation/MR02/20201001/20201101) \n', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesPerStation/MR02/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesperstation = res.body;
                        sum+=res.body.NumberOfPasses;
                        
                        // console.log(passesperstation);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
})

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                           station MR03
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('------------------------------ \n  Test getPassesPerStation route \n  ------------------------------ \n (GET:  https://localhost:9103/interoperability/api/PassesPerStation/MR03/20201001/20201101) \n', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesPerStation/MR03/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesperstation = res.body;
                        sum+=res.body.NumberOfPasses;
                        
                        // console.log(passesperstation);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
})

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                           station MR04
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('------------------------------ \n  Test getPassesPerStation route \n  ------------------------------ \n (GET:  https://localhost:9103/interoperability/api/PassesPerStation/MR04/20201001/20201101) \n', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesPerStation/MR04/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesperstation = res.body;
                        sum+=res.body.NumberOfPasses;
                        
                        // console.log(passesperstation);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
})

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                           station MR05
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('------------------------------ \n  Test getPassesPerStation route \n  ------------------------------ \n (GET:  https://localhost:9103/interoperability/api/PassesPerStation/MR05/20201001/20201101) \n', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesPerStation/MR05/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesperstation = res.body;
                        sum+=res.body.NumberOfPasses;
                        
                        // console.log(passesperstation);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                           station MR06
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('------------------------------ \n  Test getPassesPerStation route \n  ------------------------------ \n (GET:  https://localhost:9103/interoperability/api/PassesPerStation/MR06/20201001/20201101) \n', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesPerStation/MR06/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesperstation = res.body;
                        sum+=res.body.NumberOfPasses;
                        
                        // console.log(passesperstation);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                           station MR07
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('------------------------------ \n  Test getPassesPerStation route \n  ------------------------------ \n (GET:  https://localhost:9103/interoperability/api/PassesPerStation/MR07/20201001/20201101) \n', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesPerStation/MR07/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesperstation = res.body;
                        sum+=res.body.NumberOfPasses;
                        
                        // console.log(passesperstation);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                           station MR08
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('------------------------------ \n  Test getPassesPerStation route \n  ------------------------------ \n (GET:  https://localhost:9103/interoperability/api/PassesPerStation/MR08/20201001/20201101) \n', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesPerStation/MR08/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesperstation = res.body;
                        sum+=res.body.NumberOfPasses;

                        //console.log(sum)
                        // console.log(passesperstation);
                        expect(res.status).to.eq(200);
                        done();
                    })
                    //console.log(sum)
    })
    it('Result (Total number of passes for MR is 135)', () => {
         expect(sum).to.eq(135)
    })
})