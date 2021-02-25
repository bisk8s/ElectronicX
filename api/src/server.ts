import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";

import rootRoutes from "@routes/Root";

const{SERVER_PORT} = process.env

createConnection().then(async _connection => {

    const app = express();

    // add rules
    app.use(express.json());
    app.use(rootRoutes);


    // start server
    app.listen(SERVER_PORT);
    console.log(`Express server has started on port ${SERVER_PORT} 🎉🎉.`);

}).catch(error => console.log(error));
