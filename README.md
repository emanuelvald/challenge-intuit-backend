# Challange Intuit Backend

A simple API to manage customers.

## API

#### Get all customers

```http
  GET /customer
```

```
[
    {
        "name": "name",
        "lastName": "last name",
        "birthDate": "date",
        "cuit": "cuit formatted",
        "address": "address",
        "mobilePhone": "number formatted",
        "email": "email"
	},
]
```

#### Get one customer by ID

```http
  GET /customer/${customerId}
```

| Parameter    | Type     | Description                           |
|:-------------|:---------|:--------------------------------------|
| `customerId` | `number` | **Required**. Id of customer to fetch |

```
{
    "name": "name",
    "lastName": "last name",
    "birthDate": "date",
    "cuit": "cuit formatted",
    "address": "address",
    "mobilePhone": "number formatted",
    "email": "email"
}
```

#### Create one customer

```http
  POST /customer
```

```

{
    "name": "new customer name",
    "lastName": "new customer last name",
    "birthDate": "new customer birth date",
    "cuit": "new customer cuit",
    "address": "new customer address",
    "mobilePhone": "new customer mobile phone",
    "email": "new customer email"
}
```

#### Update one customer by ID

```http
  PATCH /customer/${customerId}
```

```

{
    "name": "new customer name",
    "lastName": "new customer last name",
    "birthDate": "new customer birth date",
    "cuit": "new customer cuit",
    "address": "new customer address",
    "mobilePhone": "new customer mobile phone",
    "email": "new customer email"
}
```

## Postman collection

You can integrate the API into Postman thanks to the Postman collection available on the repository.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`TYPEORM_TYPE`

`TYPEORM_HOST`

`TYPEORM_PORT`

`TYPEORM_USERNAME`

`TYPEORM_PASSWORD`

`TYPEORM_DATABASE`

## Run Locally

Clone the project

```bash
  git clone https://github.com/emanuelvald/challenge-intuit-backend.git
```

Go to the project directory

```bash
  cd challenge-intuit-backend
```

Install dependencies

```bash
  npm install
```

Run Migrations

```bash
  npm run typeorm:run
```

Start the server

```bash
  npm run start
```