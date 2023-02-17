const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

module.exports = {
    connectDb: async () => {
        try {
            const connect = await mongoose.connect(process.env.CONNECTION_STRING);
            console.log("Database Connected: ", connect.connection.host, connect.connection.name);
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
}
// // module.exports = connectDb;
// (node:11752) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
// (Use `node --trace-deprecation ...` to show where the warning was created)
