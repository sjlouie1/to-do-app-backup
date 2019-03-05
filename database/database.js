// from https://flaviocopes.com/node-mysql/

const mysql = require('mysql')

const options = {
    user: 'root',
    password: 'root',
    host: 'localhost'
  }
  const connection = mysql.createConnection(options)


  connection.connect(err => {
    if (err) {
      console.error('An error occurred while connecting to the DB')
      throw err
    }
    connection.query('CREATE DATABASE todoapp', err => {if(err){throw err}
        console.log('database created')
    })
  })