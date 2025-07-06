# User API Spec

## Register User API

Endpoint: POST /api/users

Request Body :

```json
{
    "username" : "pzn",
    "password" : "rahasia",
    "name" : "abim"
}
``` 



Response Body Success:
```json
{
    "data" : {
        "username" : "pzn",
        "name" : "abim"
    },
    ""
}
```

Response Body Error:
```json
{
    "errors" : "username already registered"
}
```


## Login User API

Endpoint: POST /api/users/login

Request Body :

```json
{
    "username" : "pzn",
    "password" : "rahasia"
}
``` 



Response Body Success:
```json
{
    "data" : {
        "token" : "unique-token"
    },
    ""
}
```

Response Body Error:
```json
{
    "errors" : "username or password wrong!"
}
```

## Update User API

Endpoint: PATCH /api/users/current

Headers :

-Authorization : token

Request Body :

```json
{
    "name" : "abim1",
    "password" : "new password"
}
``` 



Response Body Success:
```json
{
    "data" : {
        "username" : "pzn",
        "name" : "abim"
    }
    
}
```

Response Body Error:
```json
{
    "errors" : "name length max 100"
}
```

## Get User API

Endpoint: GET /api/users/current

Headers: 

-Authorization : token

Request Body :

```json
{
    "name" : "abim1",
    "username" : "pzn"
}
``` 



Response Body Success:
```json
{
    "data" : {
        "username" : "pzn",
        "name" : "abim"
    }
    
}
```

Response Body Error:
```json
{
    "errors" : "Unauthorized"
}
```

## Logout User API

Endpoint: DELETE /api/users/logout

Headers: 

-Authorization : token

Response Body Success:
```json
{
    "data" : "OK"

}
    
```

Response Body Error:
```json
{
    "errors" : "Unauthorized"
}
```