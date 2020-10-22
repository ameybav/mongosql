## About this project

This is a react UI wrapper to convert json to mongo-sql queries.
Following is the link for mongo-sql project.
https://github.com/goodybag/mongo-sql

### How to use

yarn
npm start

### Sample Queries

```javascript

{
  type: 'select'
, table: 'users'
, where: { $or: { id: 5, name: 'Bob' } }
};

```
