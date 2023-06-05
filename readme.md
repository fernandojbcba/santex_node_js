## para comenzar correr api con ... ''' npm start '''
## postman
### para login
>post///  localhost:5001/user/login

>body:
{
        "name": "admin",
        "password": "admin"
}

Responde:
{
    "token": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwiaWF0IjoxNjg1ODA1NTgxfQ.CSZB42KOyWe4OT_qnJ00wM_YDSChq1oo2MC7_s6K3l4"
    }
}

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
    "id": 4,
    "name": "libreria",
    "location": "calle siempre viva",
    "telefono": "0303456"
}

### para obtener una lubreria por id.
get ////localhost:5001/Library/obtener-por-id/:id

si la libreria se borro logicamente se obtiene 
{
    "error": "Library not found"
} 
si la libreria no se borro logicamente se obtiene:
{
    "id": 2,
    "name": "libreria",
    "location": "calle siempre viva",
    "telefono": "0303456",
    "deletelogical": false
}

# santex_node_js
