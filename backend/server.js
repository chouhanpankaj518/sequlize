import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/routes.js';
import sequelize from './dataconnect.js';  // Import the sequelize connection



const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", router);

// Sync database and create the User table if it doesn't exist
sequelize.sync({ force: true })  // Add this code here
    .then(() => {
        console.log("User table created");
        app.listen(5700, () => {
            console.log(`Server is running on port 5700`);
        });
    })
    .catch(error => console.log("Error creating table:", error));
