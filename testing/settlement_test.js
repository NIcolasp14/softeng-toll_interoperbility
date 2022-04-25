const app = require('/Users/nicolas/Desktop/Softeng_latest/backend/index.js');
const request = require('supertest');
const chai = require('chai')
const expect = chai.expect;

// debt settlement testing for operators
// here we check the endpoints' res.status, as well as the results calculated, which should be equal to the 
// xlsx file results provided by the course's professor 

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               OO debt settlement with GF
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
let debt;
var total_number_of_passes = 0;
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for OO with GF \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/OO/GF/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 15', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/OO/GF/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;

                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(15);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               AO debt settlement with EG
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for AO with EG \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/AO/EG/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 8.9', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/AO/EG/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(8.9);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               AO debt settlement with GF
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for AO with GF \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/AO/GF/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 3.8', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/AO/GF/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(3.8);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               AO debt settlement with KO
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for AO with KO \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/AO/KO/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 20.20', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/AO/KO/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(20.20);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               AO debt settlement with MR
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for AO with MR \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/AO/MR/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 9.7', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/AO/MR/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        total_number_of_passes += res.body.DebtSettlement.passes_through_op2_tolls;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(9.7);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               AO debt settlement with NE
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for AO with NE \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/AO/NE/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 4.7', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/AO/NE/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(4.7);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               AO debt settlement with OO
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for AO with OO \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/AO/OO/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 34.4', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/AO/OO/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(34.4);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               EG debt settlement with GF
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for EG with GF \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/EG/GF/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 9.25', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/EG/GF/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(9.25);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               EG debt settlement with KO
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for EG with KO \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/EG/KO/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 4.55', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/EG/KO/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(4.55);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               EG debt settlement with NE
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for EG with NE \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/EG/NE/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 5.6', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/EG/NE/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(5.6);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               EG debt settlement with OO
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for EG with OO \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/EG/OO/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 1.35', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/EG/OO/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(1.35);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               KO debt settlement with GF
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for KO with GF \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/KO/GF/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 7.1', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/KO/GF/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(7.1);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               MR debt settlement with EG
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for MR with EG \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/MR/EG/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 0.1', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/MR/EG/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        total_number_of_passes += res.body.DebtSettlement.passes_through_op1_tolls;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(0.1);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               MR debt settlement with GF
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for MR with GF \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/MR/GF/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 1.25', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/MR/GF/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        total_number_of_passes += res.body.DebtSettlement.passes_through_op1_tolls;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(1.25);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               MR debt settlement with KO
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for MR with KO \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/MR/KO/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 9.7', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/MR/KO/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        total_number_of_passes += res.body.DebtSettlement.passes_through_op1_tolls;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(9.7);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               MR debt settlement with OO
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for MR with OO \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/MR/OO/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 1.45', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/MR/OO/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        total_number_of_passes += res.body.DebtSettlement.passes_through_op1_tolls;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(1.45);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               NE debt settlement with GF
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for NE with GF \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/NE/GF/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 9.30', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/NE/GF/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(9.30);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               NE debt settlement with KO
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for NE with KO \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/NE/KO/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 9.1', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/NE/KO/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(9.1);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               NE debt settlement with MR
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for NE with MR \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/NE/MR/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 23.25', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/NE/MR/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        total_number_of_passes += res.body.DebtSettlement.passes_through_op2_tolls;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(23.25);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               OO debt settlement with KO
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for OO with KO \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/OO/KO/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 4.95', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/OO/KO/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(4.95);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               OO debt settlement with NE
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for OO with NE \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/OO/NE/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 5.95', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/OO/NE/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(5.95);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
})



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                               MR debt settlement with MR
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe('---------------------------------------------------- \n  Test getDebtSettlement route + result for MR with MR \n  ---------------------------------------------------- \n of endpoint (GET: https://localhost:9103/interoperability/api/DebtSettlement/MR/MR/20201001/20201101) \n', () => {
    it('The test should return res.status == 200 and the result of the settlement is equal to 0', (done) => {
                request(app)
                    .get('/interoperability/api/DebtSettlement/MR/MR/20201001/20201101') // ?format=json
                    .end((err, res) => {
                        debt = res.body;
                        total_number_of_passes += res.body.DebtSettlement.passes_through_op1_tolls;
                        
                        //console.log(debt);
                        expect(res.status).to.eq(200);
                        expect(res.body.DebtSettlement.money_owed_by1_or_to1).to.eq(0);
                        done();
                    })
    })
    it('Result should be of type json and named DebtSettlement', () => {
        expect(debt).to.have.property('DebtSettlement')
    })
    it('DebtSettlement should have an attribute RequestTimestamp', () => {
        expect(debt.DebtSettlement).to.have.property('RequestTimestamp')
    })
    it('DebtSettlement should have an attribute PeriodFrom', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodFrom')
    })
    it('DebtSettlement should have an attribute PeriodTo', () => {
        expect(debt.DebtSettlement).to.have.property('PeriodTo')
    })
    it('DebtSettlement should have an attribute checkingOperator1', () => {
        expect(debt.DebtSettlement).to.have.property('checkingOperator1')
    })
    it('DebtSettlement should have an attribute withOperator2', () => {
        expect(debt.DebtSettlement).to.have.property('withOperator2')
    })
    it('DebtSettlement should have an attribute passes_through_op1_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op1_tolls')
    })
    it('DebtSettlement should have an attribute passes_through_op2_tolls', () => {
        expect(debt.DebtSettlement).to.have.property('passes_through_op2_tolls')
    })
    it('DebtSettlement should have an attribute money_owed_by1_or_to1', () => {
        expect(debt.DebtSettlement).to.have.property('money_owed_by1_or_to1')
    })
    it('Result (Total number of passes for MR is 18 from other operators. 117 are from his own. 18+117=135)', () => {
        expect(total_number_of_passes).to.eq(135)
   })
})





// TO CHECK
// let server; 
// start testing after server and database connections
// before(done => {
//   server = app.listen(9103, done);
// });

// after(done => {
//     server.close(done);
//   });