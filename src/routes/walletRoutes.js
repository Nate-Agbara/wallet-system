import { addNewAccount, getAllAccounts, getAccountById, updateAccountById, deleteAccountById } from "../controllers/walletController";

const routes = (app) => {
    app.route('/account')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getAllAccounts)

    .post(addNewAccount);

    app.route('/account/:accountId')

    //get specific account
    .get(getAccountById)

    //update account by id
    .put(updateAccountById)

    //To delete an account
    .delete(deleteAccountById)
}

export default routes;