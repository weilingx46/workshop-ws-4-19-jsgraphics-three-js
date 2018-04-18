'use strict'

const express = require('express');
const {resolve} = require('path');

const app = express();

module.exports = app
  .use(express.static(resolve(__dirname, '..', 'public'))) // Serve static files from ../public
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))) // Send index.html for any requests.

const PORT = 9000
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
