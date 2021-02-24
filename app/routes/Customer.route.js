const ifLoggedIn = require('./../Middleware/ifLoggedIn');
const Errors = require('./../../common/error');
const ifCustomer = require('./../Middleware/ifCustomer');
const CustomerModel = require('../models/Customer.model');
const UserModel = require('../models/User.model');
const AccountModel = require('../models/Account.model');
const TransactionModel = require('../models/Transaction.model');
const OrganizationModel = require('../models/Organization.model');
const LoanModel = require('../models/Loan.model');
const UserServices = require('../services/user.service');
const DropdownService = require('../services/Dropdown.service');
const EmployeeModel = require('../models/Employee.model');
const {startFDInfo} = require('../schema/Customer');
const FixedDeposits = require('../models/FixedDeposit.model');


function init(router) {
    //router.use('/Customer', ifLoggedIn)
    //router.use('/Customer', ifCustomer)
    router.route('/Customer/:id')
        .get(indexAction);
    router.route('/Customer/:id/startFD')
      .get(startFDPage)
      .post(startFDAction)
}

async function indexAction(req,res){
    //EmployeeService.
    try{
        console.log(req.session.user)
        const userID = req.session.user.user_id;
        let owner_type = await AccountModel.getAccountType(userID);
        let Cus;

        if (owner_type.owner_type = "U"){
            Cus = await CustomerModel.getCustomerDetailsById(userID);
        }else{
            Cus = await OrganizationModel.getOrgDetails(userID);
        }

        if(owner_type.owner_type ==="U"){
            owner_type = "Individual"
        }else{
            owner_type = "Organization"
        }


        // console.log(Emp);
        if (!Cus){
            throw new Errors.BadRequest('An Error Occurred in the Database');
        }

        Cus = {
            ...Cus,
            ...req.session.user,
            owner_type,
        }

        const savings_acc = await DropdownService.getSavingsAccountsOfUser(userID);
        if (savings_acc.length === 0) throw new Errors.Conflict("Visit your local bank and first make a Bank Account")
        console.log(savings_acc)


        console.log(Cus);
        res.render('customer_dashboard',
          {
              url_params: req.params,
              error:req.query.error,
              success:req.query.success,
              User:Cus,
              savings_acc
          }
        )
    }catch (e){
        res.redirect(`/?error=${e}`);
    }
}

async function startFDPage(req,res){
    //starting an fd by customer to page.
    console.log(req.query)
    const fd_plan = await DropdownService.getFDPlans();

    res.render('fd_application_form',{
        error:req.query.error,
        success:req.query.success,
        user:req.session.user,
        saving_no:req.query.savings_no,
        fd_plan
    })

}

async function startFDAction(req, res) {
    // to create FD
    try {
        const {value, error} = await startFDInfo.validate(req.body);
        if (error) throw error;
        console.log(value);
        if(!(value.username === req.session.user.username)){
            throw new Errors.Unauthorized("Wrong username")
        }
        const account = await AccountModel.getAccount(value.saving_no)
        console.log(account);

        let fd = {
            cusotmer_id:parseInt(req.session.user.user_id),
            acc_plan_id:parseInt(value.fd_plan),
            sv_acc_id:parseInt(value.saving_no),
            branch_id:parseInt(account.branch_id),
            balance:parseFloat(value.amount),
        }


        await FixedDeposits.addCFixedDeposit()



        res.redirect(`/Customer/${req.params.id}`)
    } catch (e) {
        console.log(e)
        res.redirect(`/Customer/${req.params.id}?error=${e}`)
    }
}

function transferAction(req,res){
    //transfering funds between accounts
}

function checkProfileAction(req,res){
    //check personal details with list of accounts
}

function checkAccountAction(req,res){
    //check details of a single account (savings account , checking account)
}

function listFDsAction(req,res){
    //list of the the fd and their details.

}

function listLoansAction(req,res){
    //listing the current loans the person has
}

function applySelfLoanAction(req,res){
    //check if eligible for a loan and then allow loan registration
}

function payLoanInstallment(req,res){
    //no clueeeeeeeee
}


module.exports.init = init;