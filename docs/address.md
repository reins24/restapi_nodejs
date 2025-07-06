# Address API SPEC

## CREATE

Endpoint : POST /api/contacts/:contactId/addresses

Headers :
-Authorization : token

Request Body :
```json
{
    "street" : "Jalan apa",
    "city" : "kota",
    "province" : "province",
    "countrty" : "negara",
    "postal_code" : "kode pos"
}
```

Response Body Success :

```json
"data": {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "kota",
    "province" : "province",
    "countrty" : "negara",
    "postal_code" : "kode pos"
}
```

Response Body Error :

```json
{
   "errors" : "Country is required"
}
```

## UPDATE

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :
-Authorization : token

Request Body :

```json
{
    "street" : "Jalan apa",
    "city" : "kota",
    "province" : "province",
    "countrty" : "negara",
    "postal_code" : "kode pos"
}
```

Response Body Success :

```json
"data": {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "kota",
    "province" : "province",
    "countrty" : "negara",
    "postal_code" : "kode pos"
}
```

Response Body Error :
```json
{
 "errors" : "country is required"
}
```

## GET

Endpoint : GET /api/contacts/:ContactId/addresses/:addressId

Headers :
-Authorization : token


Response Body Success :
```json
"data": {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "kota",
    "province" : "province",
    "countrty" : "negara",
    "postal_code" : "kode pos"
}
```

Response Body Error :
```json
{
    "errors" : "contact not found"
}
```

## LIST

Endpoint : GET /api/contacts/:contactId/addresses

Headers :
-Authorization : token
 

Response Body Success :

```json
 {
    "data" : [
        {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "kota",
    "province" : "province",
    "countrty" : "negara",
    "postal_code" : "kode pos"
    },
    {
    "id" : 2,
    "street" : "Jalan apa",
    "city" : "kota",
    "province" : "province",
    "countrty" : "negara",
    "postal_code" : "kode pos"
}
    ]
 }
 ```

Response Body Error :
```json
 {
  "errors" : "contact is not found"
 }
 ```

## REMOVE

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressesId

Headers :
-Authorization : token


Response Body Success :
```json
{
    "data": "OK"
}
```
Response Body Error :

```json
{
    "errors": "addresses is not found"
}
```