
const db = require('../config/database');
var dbFunc = require('../config/db-function');

function addAccount(acc) {

    //TODO: set "acc" attribute appropriate to the data passing -- checkout ../document/sql_scripts/add_account.sql 
    return new Promise((resolve, reject) => {
        db.query(`CALL add_account(?,?,?,?,?,?)`, acc, (error, rows, fields) => {

            if (!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {

                dbFunc.connectionRelease;
                resolve(rows);
            }
        });
    });
}

function depositMoneySvAcc(deposit) {

    //TODO: set "deposit" attribute appropriate to the data passing -- checkout ../document/sql_scripts/deposit_mn_sv_acc.sql 
    return new Promise((resolve, reject) => {
        db.query(`CALL deposit_mn_sv_acc(?,?,?)`, deposit, (error, rows, fields) => {

            if (!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {

                dbFunc.connectionRelease;
                resolve(rows);
            }
        });
    });
}

function withdrawSvAcc(deposit) {

    //TODO: set "deposit" attribute appropriate to the data passing -- checkout ../document/sql_scripts/withdraw_sv_acc.sql 
    return new Promise((resolve, reject) => {
        db.query(`CALL withdraw_sv_acc(?,?,?,?,?)`, deposit, (error, rows, fields) => {

            if (!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {

                dbFunc.connectionRelease;
                resolve(rows);
            }
        });
    });
}
