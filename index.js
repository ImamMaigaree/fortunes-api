#!/usr/bin/env node

const app = require('./app');

const port = 3002;

app.listen(port, () => console.log(`Listening on port ${port}`));