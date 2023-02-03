import { addNewAccount, getAllAccounts } from "../controllers/walletController";

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
    .put((req, res) => 
        res.send('PUT request successful')
    )

    .delete((req, res) => 
        res.send('DELETE request successfull')
    )
}

export default routes;