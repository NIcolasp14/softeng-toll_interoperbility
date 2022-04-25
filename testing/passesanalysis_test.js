const app = require('/Users/nicolas/Desktop/Softeng_latest/backend/index.js');
const request = require('supertest');
const chai = require('chai')
const expect = chai.expect;

//passes analysis testing for operators
// the numver of passes have been crosschecked with the number of passes
// returned by both DebtSettlement and PassesPerStation endpoints.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                         MR: station operator | KO: tags
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
let passesanalysis;
var total_number_of_passes = 0;
describe('---------------------------- \n  Test getPassesAnalysis route \n  ---------------------------- \n (GET:  https://localhost:9103/interoperability/api/PassesAnalysis/MR/KO/20201001/20201101) \n ', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesAnalysis/MR/KO/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesanalysis = res.body;
                        total_number_of_passes += res.body.NumberOfPasses;
                        
                        // console.log(passesanalysis);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
    it('Result should have an attribute op1_ID', () => {
        expect(passesanalysis).to.have.property('op1_ID')
    })
    it('Result should have an attribute op2_ID', () => {
        expect(passesanalysis).to.have.property('op2_ID')
    })
    it('Result should have an attribute RequestTimestamp', () => {
        expect(passesanalysis).to.have.property('RequestTimestamp')
    })
    it('Result should have an attribute PeriodFrom', () => {
        expect(passesanalysis).to.have.property('PeriodFrom')
    })
    it('Result should have an attribute PeriodTo', () => {
        expect(passesanalysis).to.have.property('PeriodTo')
    })
    it('Result should have an attribute NumberOfPasses', () => {
        expect(passesanalysis).to.have.property('NumberOfPasses')
    })
    it('Result should have an attribute PassesList', () => {
        expect(passesanalysis).to.have.property('PassesList')
    })
    it('PassesList should have a column PassIndex', () => {
        expect(passesanalysis.PassesList[0]).to.have.property('PassIndex')
    })
    it('PassesList should have a column PassID', () => {
        expect(passesanalysis.PassesList[1]).to.have.property('PassID')
    })
    it('PassesList should have a column StationID', () => {
        expect(passesanalysis.PassesList[2]).to.have.property('StationID')
    })
    it('PassesList should have a column TimeStamp', () => {
        expect(passesanalysis.PassesList[3]).to.have.property('TimeStamp')
    })
    it('PassesList should have a column VehicleID', () => {
        expect(passesanalysis.PassesList[4]).to.have.property('VehicleID')
    })
    it('PassesList should have a column Charge', () => {
        expect(passesanalysis.PassesList[5]).to.have.property('Charge')
    })
})

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                         MR: station operator | OO: tags
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------- \n  Test getPassesAnalysis route \n  ---------------------------- \n (GET:  https://localhost:9103/interoperability/api/PassesAnalysis/MR/OO/20201001/20201101) \n ', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesAnalysis/MR/OO/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesanalysis = res.body;
                        total_number_of_passes += res.body.NumberOfPasses;
                        
                        // console.log(passesanalysis);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
})

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                         MR: station operator | NE: tags
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------- \n  Test getPassesAnalysis route \n  ---------------------------- \n (GET:  https://localhost:9103/interoperability/api/PassesAnalysis/MR/NE/20201001/20201101) \n ', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesAnalysis/MR/NE/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesanalysis = res.body;
                        total_number_of_passes += res.body.NumberOfPasses;
                        
                        // console.log(passesanalysis);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
})
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                         MR: station operator | AO : tags
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------- \n  Test getPassesAnalysis route \n  ---------------------------- \n (GET:  https://localhost:9103/interoperability/api/PassesAnalysis/MR/AO/20201001/20201101) \n ', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesAnalysis/MR/AO/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesanalysis = res.body;
                        total_number_of_passes += res.body.NumberOfPasses;
                        
                        // console.log(passesanalysis);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
})
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                         MR: station operator | GF: tags
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------- \n  Test getPassesAnalysis route \n  ---------------------------- \n (GET:  https://localhost:9103/interoperability/api/PassesAnalysis/MR/GF/20201001/20201101) \n ', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesAnalysis/MR/GF/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesanalysis = res.body;
                        total_number_of_passes += res.body.NumberOfPasses;
                        
                        // console.log(passesanalysis);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
})
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                         MR: station operator | EG: tags
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------- \n  Test getPassesAnalysis route \n  ---------------------------- \n (GET:  https://localhost:9103/interoperability/api/PassesAnalysis/MR/EG/20201001/20211101) \n ', () => {
    it('It should return status 200', (done) => {
                request(app)
                    .get('/interoperability/api/PassesAnalysis/MR/EG/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        passesanalysis = res.body;
                        total_number_of_passes += res.body.NumberOfPasses;
                        
                        // console.log(passesanalysis);
                        expect(res.status).to.eq(200);
                        done();
                    })
    })
    it('Result (Total number of passes for MR is 18 from other operators and 117 from its own tags. So, 117+18=135 and we expect 18 as a result.)', () => {
        expect(total_number_of_passes).to.eq(18)
   })
})


