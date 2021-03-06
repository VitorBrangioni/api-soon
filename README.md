[Clique aqui e veja a descrição da prova](https://www.evernote.com/shard/s458/sh/87c999a6-7f21-193b-6ac0-18b6ceea7824/ab8469ce348b513a83fa4e0458071554)

---

# api-soon
API para provas do processo seletivo da Soon.

### Requirements

- Docker
- Docker Compose

### How run

1) Install `docker` and `docker-compose`;
2) run code `docker-compose build`;
3) run code `docker-compose up soon`.

Api is listening in port 3000. (http://localhost:3000)

---

### Auth

No Auth

### GET: /api/subscriber

Find all subscribers

*RESPONSE:*
```json
[
    {
        "customer": {
            "name": "joao",
            "phone": "313333-3333",
            "cpf": "313333-3333",
            "email": "joao@gmail.com"
        },
        "vehicle": {
            "description": "fiat uno",
            "plate": "xxx-3333",
            "year": 2020,
            "warranty_date": "2020-01-15T00:00:00.000Z"
        },
        "plan": {
            "product": "312312312312",
            "begin_date": "2020-01-15",
            "end_date": "2021-01-15"
        }
    }
]
```

*http status:*

    200: success
    500: Interval error

----

### POST: /api/subscriber

Create a new subscriber

*Body:*
```json
{
	"customer": {
		"name": "joao",
		"phone": "313333-3333",
		"cpf": "131131313",
		"email": "joao@gmail.com"
	},
	"vehicle": {
		"description": "fiat uno",
		"plate": "xxx-3333",
		"year": 2020,
		"warranty_date": "2020-01-15"
	},
	"plan": {
		"product": "312312312312",
		"begin_date": "2020-01-15",
		"end_date": "2021-01-15"
	}
}
```

*http status:*

    201: success
    400: Invalid payload
    500: Interval error

----

### GET: /api/plan

Get all plans

*RESPONSE:*
```json
[
    {
        "name": "Plan A",
        "id": "43274268472368472"
    },
    {
        "name": "Plan B",
        "id": "47237847238472343"
    },
    {
        "name": "Plan C",
        "id": "31231231231212315"
    }
]
```

*http status:*

    200: success
    500: Interval error
