import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";

import rootRoutes from "@routes/Root";

const{PORT} = process.env

createConnection().then(async _connection => {

    const app = express();

    // add rules
    app.use(express.json());
    app.use(rootRoutes);


    // start server
    app.listen(PORT);
    console.log(`Server has started on port ${PORT} 🎉🎉.`);

}).catch(error => console.log(error));
