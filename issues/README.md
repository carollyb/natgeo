<h1 align="center">NatGeoAPI</h1>
<p align="center">
  <i>NatGeo helps organizing magazine issues digital files, allowing creation, deletion and searching magazine issues by multiple parameters</i><br />
  <i>🚧 In progress 🚧</i><br />
</p>
This project was created as a study case to apply some topics I am interested in studying, such as: SOLID principles, Test Driven Development and Docker... Check [Development](#development) section to see a full list of design patterns, technologies and libraries used

<details>
<summary><b>Contents</b></summary>

- [API Usage](#api-usage)
  - [GET](#get)
    - [`/issues`](#issues)
    - [`/issues/:id`](#issuesid)
    - [`/issues/sort/:type`](#issuessorttype)
    - [`/issues/search?topic={topic}`](#issuessearchtopictopic)
  - [POST](#post)
    - [/issues](#issues-1)
- [Running the project](#running-the-project)
  - [Configuration options](#configuration-options)
  - [Docker](#docker)
  - [Locally](#locally)
  - [Running tests](#running-tests)
- [Development](#development)
  - [Technologies](#technologies)
  - [Design Patterns](#design-patterns)
    - [Test Driven Development - TDD](#test-driven-development---tdd)
    - [Folder Structure](#folder-structure)
  - [SOLID Principles](#solid-principles)
  - [Libraries & Frameworks](#libraries--frameworks)
- [Frontend App](#frontend-app)
</details><br />

## API Usage

### GET
#### `/issues`

> Returns array with JSON info about all magazine issues

**Example**

```
GET https://{host}/issues
```

**Response**

```json
[
  {
    "_id_": "d60fac79-f9ac-4d2c-89a6-ceb1d6b65aa0",
    "number": 20,
    "date": "1950-10-10T00:00:00.000Z",
    "cover": "image20.png",
    "file": "n20.pdf",
    "language": "English",
    "topics": "topic1, topic2, topic3, topic4"
  },
  {
    "_id_": "eede0980-ca44-45c7-ae9e-2443d9dad68f",
    "number": 21,
    "date": "1960-10-10T00:00:00.000Z",
    "cover": "image21.png",
    "file": "n21.pdf",
    "language": "English",
    "topics": "topic1, topic2, topic3, topic4"
  }
]
```
#### `/issues/:id`

> Returns JSON info about one magazine issue

**Example**

```
GET https://{host}/issues/d60fac79-f9ac-4d2c-89a6-ceb1d6b65aa0
```

**Response**

```json
  {
    "_id_": "d60fac79-f9ac-4d2c-89a6-ceb1d6b65aa0",
    "number": 20,
    "date": "1950-10-10T00:00:00.000Z",
    "cover": "image20.png",
    "file": "n20.pdf",
    "language": "English",
    "topics": "topic1, topic2, topic3, topic4"
  }
```
#### `/issues/sort/:type`

> Returns array with JSON info about all magazine issues, sorted by ascending or descending date

| Query       | Type        |
| ----------- | ----------- |
| asc         | string      |
| desc        | string      |

**Example**

```
GET https://{host}/issues/sort/desc
```

**Response**

```json
[
  {
    "_id_": "eede0980-ca44-45c7-ae9e-2443d9dad68f",
    "number": 21,
    "date": "1960-10-10T00:00:00.000Z",
    "cover": "image21.png",
    "file": "n21.pdf",
    "language": "English",
    "topics": "topic1, topic2, topic3, topic4"
  },
  {
    "_id_": "d60fac79-f9ac-4d2c-89a6-ceb1d6b65aa0",
    "number": 20,
    "date": "1950-10-10T00:00:00.000Z",
    "cover": "image20.png",
    "file": "n20.pdf",
    "language": "English",
    "topics": "topic1, topic2, topic3, topic4"
  }
]
```

#### `/issues/search?topic={topic}`

> Returns array with JSON info about all magazine issues that has at least one occurence of query param in topics

| Query       | Type        |
| ----------- | ----------- |
| topic       | string      |

**Example**

```
GET https://{host}/issues/search?topic=cultura
```

**Response**

```json
[
  {
    "_id_": "eede0980-ca44-45c7-ae9e-2443d9dad68f",
    "number": 21,
    "date": "1960-10-10T00:00:00.000Z",
    "cover": "image21.png",
    "file": "n21.pdf",
    "language": "English",
    "topics": "cultura, topic2, topic3, topic4"
  },
  {
    "_id_": "d60fac79-f9ac-4d2c-89a6-ceb1d6b65aa0",
    "number": 20,
    "date": "1950-10-10T00:00:00.000Z",
    "cover": "image20.png",
    "file": "n20.pdf",
    "language": "English",
    "topics": "topic1, cultura, topic3, topic4"
  }
]
```
### POST

#### /issues

> Returns JSON info with automatically generated id

**Example**
```
POST https://{host}/issues
```

| Parameter   | Type        |
| ----------- | ----------- |
| number      | number      |
| date        | Date        |
| cover       | string      |
| file        | string      |
| language    | string      |
| topics      | string      |

**Response**

```json
  {
    "_id_": "d60fac79-f9ac-4d2c-89a6-ceb1d6b65aa0",
    "number": 20,
    "date": "1950-10-10T00:00:00.000Z",
    "cover": "image20.png",
    "file": "n20.pdf",
    "language": "English",
    "topics": "topic1, topic2, topic3, topic4"
  }
```

## Running the project

### Configuration options

> Change the .env.example file title to just `.env` and populate the values with database URL for connection with DB and a port number. Create a Mongo Atlas cluster and set your username and password. Example database url would be something like this:
```bash
mongodb://USERNAME:PASSWORD@HOST/DATABASE
```

### Docker

> Have Docker and Docker Compose installed in your machine.

> Open the project on your prefered code editor, change to `/issues` directory and run in terminal `docker compose up` or
>  `docker compose up -d` for detached mode

### Locally

> Have Node (latest stable version) installed on your machine.

Clone the repo:
```bash
git clone https://github.com/carollyb/natgeo.git
```

Go to directory:
```bash
cd natgeo
cd issues
```

Install projects dependencies
```bash
npm i
```

Run
```bash
npm run dev
```

### Running tests
```bash
npm run test
```

## Development

### Technologies

### Design Patterns

#### Test Driven Development - TDD
> Separation of responsibilities and the use of Typescript allows and facilitates writing unit tests. All application use cases are tested, using a mock database that simulates methods implemented by Prisma, to not interfere with the official MongoDB database

#### Folder Structure
> Inspired by Domain Driven Design (DDD) and Ports and Adapters, the project is organized by a core domain layer with entities declarations, business rules layer (use cases), an outer layer (controllers) that received requests from the web and infra level (adapters for connection with database and with the "outside world"). All layers have interfaces between them to obtain a maximum separation of concerns and to abstract most methods.

### SOLID Principles
> As I am studying, first I have focused in two principles: Single Responsibility and Dependency Inversion. Methods implemented to connect the application to the database (by Prisma) are abstracted and allows to easily change database config in the future, if the user wishes so. Express methods are also abstracted, so that Express dependency is more loose and can also easily replaceble in the future.

### Libraries & Frameworks
> Jest, Cors, Express, Prisma, Nodemon, TS-Node, uuid and bcrypt (so far)
## Frontend App
> Coming Soon