const client = require(`./client.js`)

const createTables = async() => {
  try {

    client.query(`
      
      `)
  } catch{err} {
    console.log(err)
  }

const syncAndSeed = async () => {
  await client.connect();
  console.log(`yerrrr`);

}

syncAndSeed();