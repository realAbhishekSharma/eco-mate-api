
# EcoMate - A Devnity Product

Creating a system that monitor home energy use educating individual about various sustanable development tactics, Like Carbon-Emission control, global warming etc.

EcoMate - [Android App](https://github.com/realAbhishekSharma/eco-mate-app)

EcoMate - [API](https://github.com/realAbhishekSharma/eco-mate-api)


## Run Locally

Clone the project

```bash
  git clone https://github.com/realAbhishekSharma/eco-mate-api.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

```
## Usage/Examples
## Connect to database Connection

```javascript
const {Sequelize} = require("sequelize")

const sqlConnection = new Sequelize({
    host: 'localhost',
    username : "root",
    password : "password",
    database : "eco_mate",
    dialect: 'mysql',
    timezone : "+05:45"

})

try {
    sqlConnection.authenticate().then(r => {});
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}




module.exports = sqlConnection
```

## API Reference

#### Get all items

```http
  GET /user/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Login email address |
| `password` | `string` | **Required**. Login password |





## Features

- Energy consumption controll
- Carbon footprint calculation
- Near Future enegry crisis
- On going/coming sustainable development news



## Authors

- [@heyavisek](https://www.linkedin.com/in/heyavisek)
- [@anishgupta](https://www.linkedin.com/in/anish-gupta-17170b200)
- [@barunmandal](https://www.linkedin.com/in/barun-mandal-a62631232)
- [@ghanshyamkharel](https://www.linkedin.com/in/ghanshyam-kharel)

