import { addNewAccount, getAllAccounts, getAccountById, updateAccountById, deleteAccountById } from "../controllers/walletController";
import { login, register, loginRequired } from "../controllers/userController";

const routes = (app) => {
    app.route('/account')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, loginRequired, getAllAccounts)

    .post(loginRequired, addNewAccount);

    app.route('/account/:accountId')

    //get specific account
    .get(loginRequired, getAccountById)

    //update account by id
    .put(loginRequired, updateAccountById)

    //To delete an account
    .delete(loginRequired, deleteAccountById)

    app.route('/auth/register')
    .post(register)

    app.route('/login')
    .post(login)
}

export default routes;