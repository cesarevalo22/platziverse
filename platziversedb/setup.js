'use strict'

const db = require('./')

async function setup(){
  const config = {
      database: process.env.DB_NAME || 'platziverse',
      username: process.env.DB_USER || 'platzicesar',
      username: process.env.DB_PASS || 'platzi',
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      loggin: ()=>{},
      setup: true,

  }
  await db(config)
}

setup()