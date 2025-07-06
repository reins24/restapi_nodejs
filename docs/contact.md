# Contact API SPEC

## Create

Endpoint: POST /api/contacts

Headers :
-Authorization

Request Body :

```json
{
    "first_name" : "abi",
    "last_name" : "muzaki",
    "email" : "abim@ganteng.com",
    "phone" : "23232323232 "
}
``` 

Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "abi",
        "last_name" : "muzaki",
        "email" : "abim@ganteng.com",
        "phone" : "23232323232 "
    }
 
}
``` 

Request Body Error

```json
{
    "errors": "Email is not valid format"
}
``` 

## Update

Endpoint: PUT /api/contacts/:id

Headers :
-Authorization

Request Body :

```json
{
    "first_name" : "abi",
    "last_name" : "muzaki",
    "email" : "abim@ganteng.com",
    "phone" : "23232323232 "
}
``` 

Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "abi",
        "last_name" : "muzaki",
        "email" : "abim@ganteng.com",
        "phone" : "23232323232 "
    }
 
}
``` 

Request Body Error

```json
{
    "errors" : "email is not valid"
}
``` 

## Get

Endpoint: GET /api/contacts/:id

Headers :
-Authorization

Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "abi",
        "last_name" : "muzaki",
        "email" : "abim@ganteng.com",
        "phone" : "23232323232 "
    }
 
}
``` 

Request Body Error

```json
{
    "errors" : "contact is not found"
}
``` 

## Search

Endpoint: GET  /api/contacts

Headers :
-Authorization

Query params :
 - name : search by first_name or last_name, using like
 - email : search by email, using like
 - phone : by phone using like
 - page : number of page, default 1
 - size : size per page, default 10 


 

Response Body Success :

```json
{
    "data" : [
        {
            "id" : 1,
        "first_name" : "abi",
        "last_name" : "muzaki",
        "email" : "abim@ganteng.com",
        "phone" : "23232323232 "
        },
        {
            "id" : 2,
        "first_name" : "abi",
        "last_name" : "muzaki",
        "email" : "abim@ganteng.com",
        "phone" : "23232323232 "
        }
    ],
    "paging" : {
        "page" : 1,
        "total_page" : 3,
        "total_item" : 30
    }
}
``` 

Request Body Error

```json
{
    "username" : "pzn",
    "password" : "rahasia",
    "name" : "abim"
}
``` 

## Delete

Endpoint: DELETE /api/contacts/:id

Headers :
-Authorization



Response Body Success :

```json
{
    "data" : "OK"
}
``` 

Request Body Error

```json
{
  "errors" : "contact is not found"
}
``` 

