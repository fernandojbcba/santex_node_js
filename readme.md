# Nodejs API REST

se realizo una API REST que permite manejar librerías y los libros asociados a cada una de las librerías. 
Se utilizaron las siguientes dependencias: Node.Js Express, Sequelize , Passport ,Passport-jwt, Jsonwebtoken, mysql2.


## API Reference

#### Get all items

```http
  POST localhost:5001/user/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body` | `raw/json` | `body:{ "name": "admin","password": "admin"}`|

> Responde: si el user y password son correctos devuelve un json con el token de seguridad.

```json
{
    "token": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwiaWF0IjoxNjg2MDE5MTEyfQ.BXs_ZW_2FshylFhZ2GhXqRnAr8v4wNvR-E9z_FE9Nxk"
    }
}
``` 
> Responde: si el user y password son incorrectos devuelve un json con el siguiente mensaje, con el status 401, Unauthorized.

```json
{
    "message": "Email y/o password incorrectos"
}
``` 


## para comenzar correr api con ... ''' npm start '''
## postman
### para login


### para agragar libreria.

post /// localhost:5001/Library/createLibrary

header: 
key:authorization 
value:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwiaWF0IjoxNjg1ODA1NTgxfQ.CSZB42KOyWe4OT_qnJ00wM_YDSChq1oo2MC7_s6K3l4

body: raw/json
{
        "name": "libreria",
        "location": "calle siempre viva",
        "telefono": "0303456"
}

responde:
{
    {
    "id": 11,
    "name": "libreria",
    "location": "calle siempre viva",
    "telefono": "0303456",
    "updatedAt": "2023-06-06T02:53:19.303Z",
    "createdAt": "2023-06-06T02:53:19.303Z"
}
}

### para obtener una lubreria por id.
get ////localhost:5001/Library/obtener-por-id/:id

si la libreria se borro logicamente se obtiene 
{
    "error": "Library not found"
} 
si la libreria no se borro logicamente se obtiene:
{
    "id": 3,
    "name": "Librería Cúspide",
    "location": "Av. Santa Fe 2220",
    "telefono": "1148251010",
    "createdAt": "2023-06-04",
    "updatedAt": "2023-06-04",
    "deletelogical": false,
    "Books": [
        {
            "id": 3,
            "isbn": 345678901,
            "titulo": "Cien años de soledad",
            "autor": "Gabriel García Márquez",
            "year": "1967",
            "library": 3,
            "createdAt": "2023-06-05",
            "updatedAt": "2023-06-05",
            "deletelogical": false
        },
        {
            "id": 6,
            "isbn": 678901234,
            "titulo": "Don Quijote de la Mancha",
            "autor": "Miguel de Cervantes",
            "year": "1605",
            "library": 3,
            "createdAt": "2023-06-05",
            "updatedAt": "2023-06-05",
            "deletelogical": false
        },
        {
            "id": 9,
            "isbn": 901234567,
            "titulo": "Crimen y castigo",
            "autor": "Fyodor Dostoevsky",
            "year": "1866",
            "library": 3,
            "createdAt": "2023-06-05",
            "updatedAt": "2023-06-05",
            "deletelogical": false
        },
        {
            "id": 12,
            "isbn": 234509876,
            "titulo": "En busca del tiempo perdido",
            "autor": "Marcel Proust",
            "year": "1913",
            "library": 3,
            "createdAt": "2023-06-05",
            "updatedAt": "2023-06-05",
            "deletelogical": false
        },
        {
            "id": 15,
            "isbn": 567876543,
            "titulo": "Fahrenheit 451",
            "autor": "Ray Bradbury",
            "year": "1953",
            "library": 3,
            "createdAt": "2023-06-05",
            "updatedAt": "2023-06-05",
            "deletelogical": false
        },
        {
            "id": 18,
            "isbn": 890543216,
            "titulo": "Harry Potter y la piedra filosofal",
            "autor": "J.K. Rowling",
            "year": "1997",
            "library": 3,
            "createdAt": "2023-06-05",
            "updatedAt": "2023-06-05",
            "deletelogical": false
        }
    ]
}

# santex_node_js



localhost:5001/user/newAdmin

{
    "message": "admin ya creado"
}


todas las librerias
[
    {
        "id": 1,
        "name": "El Ateneo Grand Splendid",
        "location": "Av. Santa Fe 1860",
        "telefono": "1148136052",
        "createdAt": "2023-06-04",
        "updatedAt": "2023-06-04",
        "deletelogical": false
    },
    {
        "id": 2,
        "name": "Librería Hernández",
        "location": "Av. Corrientes 1436",
        "telefono": "1143715263",
        "createdAt": "2023-06-04",
        "updatedAt": "2023-06-04",
        "deletelogical": false
    },
    {
        "id": 3,
        "name": "Librería Cúspide",
        "location": "Av. Santa Fe 2220",
        "telefono": "1148251010",
        "createdAt": "2023-06-04",
        "updatedAt": "2023-06-04",
        "deletelogical": false
    },
    {
        "id": 4,
        "name": "Librería Gandhi",
        "location": "Güemes 4002, Mar del Plata",
        "telefono": "2234942114",
        "createdAt": "2023-06-04",
        "updatedAt": "2023-06-04",
        "deletelogical": false
    },
    {
        "id": 5,
        "name": "Librería Ávila",
        "location": "Belgrano 1192, Paraná",
        "telefono": "3434313466",
        "createdAt": "2023-06-04",
        "updatedAt": "2023-06-04",
        "deletelogical": false
    },
    {
        "id": 6,
        "name": "Librería La Internacional",
        "location": "San Martín 839, Córdoba",
        "telefono": "3514256876",
        "createdAt": "2023-06-04",
        "updatedAt": "2023-06-04",
        "deletelogical": false
    },
    {
        "id": 7,
        "name": "Librería Ross",
        "location": "San Martín 141, Bahía Blanca",
        "telefono": "2914550307",
        "createdAt": "2023-06-04",
        "updatedAt": "2023-06-04",
        "deletelogical": false
    },
    {
        "id": 8,
        "name": "Librería Homo Sapiens",
        "location": "San Martín 843, San Nicolás de los Arroyos",
        "telefono": "3364425151",
        "createdAt": "2023-06-04",
        "updatedAt": "2023-06-04",
        "deletelogical": false
    },
    {
        "id": 9,
        "name": "Librería Norte",
        "location": "San Martín 223, Villa María",
        "telefono": "3534532042",
        "createdAt": "2023-06-04",
        "updatedAt": "2023-06-04",
        "deletelogical": false
    },
    {
        "id": 10,
        "name": "Librería del Espacio",
        "location": "San Martín 1575, Bahía Blanca",
        "telefono": "2914522559",
        "createdAt": "2023-06-04",
        "updatedAt": "2023-06-04",
        "deletelogical": false
    },
    {
        "id": 11,
        "name": "libreria raul",
        "location": "calle de al lado",
        "telefono": "1234567",
        "createdAt": "2023-06-06",
        "updatedAt": "2023-06-06",
        "deletelogical": false
    }
]


crear libro en libreria
localhost:5001/Library/createBookinlibrary/2
body
{
"isbn": "212342",
"titulo": "Maestros3",
"autor": "paul",
"year":"1935"
}
devuelve
{
    "deletelogical": false,
    "id": 21,
    "isbn": "212342",
    "titulo": "Maestros3",
    "autor": "paul",
    "year": "1935",
    "library": "2",
    "updatedAt": "2023-06-06T02:57:58.773Z",
    "createdAt": "2023-06-06T02:57:58.773Z"
}

localhost:5001/Library/modificar-libreria/2

{
        "name": "libreria privada",
        "location": "calle privada",
        "telefono": "25252563"
}

{
    "id": 2,
    "name": "libreria privada",
    "location": "calle privada",
    "telefono": "25252563",
    "createdAt": "2023-06-04",
    "updatedAt": "2023-06-06T02:59:26.722Z",
    "deletelogical": false
}



localhost:5001/Library/borrar-libreria/3
{
    "id": 3,
    "name": "Librería Cúspide",
    "location": "Av. Santa Fe 2220",
    "telefono": "1148251010",
    "createdAt": "2023-06-04",
    "updatedAt": "2023-06-06T03:00:16.749Z",
    "deletelogical": true
}


localhost:5001/Book/crearLibro


{
"isbn": "22263",
"titulo": "Maestros4",
"autor": "paul",
"year":"1935",
"library": "2"
}
{
    "deletelogical": false,
    "id": 22,
    "isbn": "22263",
    "titulo": "Maestros4",
    "autor": "paul",
    "year": "1935",
    "library": "2",
    "updatedAt": "2023-06-06T03:01:18.679Z",
    "createdAt": "2023-06-06T03:01:18.679Z"
}

localhost:5001/Book/obtenerlibroId/3

{
    "id": 3,
    "isbn": 345678901,
    "titulo": "Cien años de soledad",
    "autor": "Gabriel García Márquez",
    "year": "1967",
    "library": 3,
    "createdAt": "2023-06-05",
    "updatedAt": "2023-06-05",
    "deletelogical": false
}
localhost:5001/Book/obtenerTodosLibros
[
    {
        "id": 1,
        "isbn": 123456789,
        "titulo": "El Gran Gatsby",
        "autor": "F. Scott Fitzgerald",
        "year": "1925",
        "library": 1,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 2,
        "isbn": 234567890,
        "titulo": "Orgullo y prejuicio",
        "autor": "Jane Austen",
        "year": "1813",
        "library": 2,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 3,
        "isbn": 345678901,
        "titulo": "Cien años de soledad",
        "autor": "Gabriel García Márquez",
        "year": "1967",
        "library": 3,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 4,
        "isbn": 456789012,
        "titulo": "Moby-Dick",
        "autor": "Herman Melville",
        "year": "1851",
        "library": 1,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 5,
        "isbn": 567890123,
        "titulo": "1984",
        "autor": "George Orwell",
        "year": "1949",
        "library": 2,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 6,
        "isbn": 678901234,
        "titulo": "Don Quijote de la Mancha",
        "autor": "Miguel de Cervantes",
        "year": "1605",
        "library": 3,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 7,
        "isbn": 789012345,
        "titulo": "Ulises",
        "autor": "James Joyce",
        "year": "1922",
        "library": 1,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 8,
        "isbn": 890123456,
        "titulo": "Los miserables",
        "autor": "Victor Hugo",
        "year": "1862",
        "library": 2,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 9,
        "isbn": 901234567,
        "titulo": "Crimen y castigo",
        "autor": "Fyodor Dostoevsky",
        "year": "1866",
        "library": 3,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 10,
        "isbn": 12345678,
        "titulo": "La Odisea",
        "autor": "Homero",
        "year": "8",
        "library": 1,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 11,
        "isbn": 123450987,
        "titulo": "El señor de los anillos",
        "autor": "J.R.R. Tolkien",
        "year": "1954",
        "library": 2,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 12,
        "isbn": 234509876,
        "titulo": "En busca del tiempo perdido",
        "autor": "Marcel Proust",
        "year": "1913",
        "library": 3,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 13,
        "isbn": 345098765,
        "titulo": "La Metamorfosis",
        "autor": "Franz Kafka",
        "year": "1915",
        "library": 1,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 14,
        "isbn": 456987654,
        "titulo": "Matar a un ruiseñor",
        "autor": "Harper Lee",
        "year": "1960",
        "library": 2,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 15,
        "isbn": 567876543,
        "titulo": "Fahrenheit 451",
        "autor": "Ray Bradbury",
        "year": "1953",
        "library": 3,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 16,
        "isbn": 678765432,
        "titulo": "El Gran Diseño",
        "autor": "Stephen Hawking",
        "year": "2010",
        "library": 1,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 17,
        "isbn": 789654321,
        "titulo": "Los pilares de la Tierra",
        "autor": "Ken Follett",
        "year": "1989",
        "library": 2,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 18,
        "isbn": 890543216,
        "titulo": "Harry Potter y la piedra filosofal",
        "autor": "J.K. Rowling",
        "year": "1997",
        "library": 3,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 19,
        "isbn": 901432165,
        "titulo": "El nombre del viento",
        "autor": "Patrick Rothfuss",
        "year": "2007",
        "library": 1,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 20,
        "isbn": 321456789,
        "titulo": "El alquimista",
        "autor": "Paulo Coelho",
        "year": "1988",
        "library": 2,
        "createdAt": "2023-06-05",
        "updatedAt": "2023-06-05",
        "deletelogical": false
    },
    {
        "id": 21,
        "isbn": 212342,
        "titulo": "Maestros3",
        "autor": "paul",
        "year": "1935",
        "library": 2,
        "createdAt": "2023-06-06",
        "updatedAt": "2023-06-06",
        "deletelogical": false
    },
    {
        "id": 22,
        "isbn": 22263,
        "titulo": "Maestros4",
        "autor": "paul",
        "year": "1935",
        "library": 2,
        "createdAt": "2023-06-06",
        "updatedAt": "2023-06-06",
        "deletelogical": false
    }
]