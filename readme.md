# RESTFULL_MAIN

restfull is a simple API for seller to create their products

## Feature
1. User register and login
2. User create, read, update, delete products

## Documentation

- /register

| method | headers | params | body |
| ------ | ------- | ------ | ---- |
| POST | - | - | { email: string, password: string} |

### Success response
status: 201
content:
```
{
    id: integer
    email: string
    password: stringe
    createdAt: date
    updatedAt: date
}
```

### Error response
status: 400
content:
```
{
    err: string
}
```
- /products/:id

| method | headers | params | body |
| ------ | ------- | ------ | ---- |
| GET | { token : string} | { id: string} | - |

### Success response
status: 200
content: 
```
{
    id: integer
    brand: string
    tag: string
    stock: integer
    image_url: string
    price: integer
    userId: integer
    createdAt: date
    updatedAt: date
}
```

### Error response
status: 400
content:
```
{
    err: string
}
```

status:404
content:
```
{
    err: 'data not found'
}
```

status:401
content:
```
{
    err: 'you should login first'
}
```
