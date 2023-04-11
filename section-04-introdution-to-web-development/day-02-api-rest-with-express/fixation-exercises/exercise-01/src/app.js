const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

const moviesPath = path.resolve(_dirname, './movies.json');

async function readFile() {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.log(`File cannot be read: ${error}`);
  }
}

module.exports = app;