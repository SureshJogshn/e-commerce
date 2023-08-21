const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');

app.use(express.json());
app.use(cors());

const postRouter = require('./routes/Post');
app.use("/post",postRouter);

const db = require('./models');
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});