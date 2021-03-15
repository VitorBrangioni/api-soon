# ufrilla-api
API para provas de estágio da ufrilla.

### How run

1) Install `docker` and `docker-compose`;
2) run code `docker-compose build`;
3) run code `docker-compose up web`.

Api is listening in port 3000. (http://localhost:3000)

---

### GET: /api/freelancer-type

Find all freelancers type

*RESPONSE:*
```json
[
    {
        "id": 1,
        "type": "garcom",
        "created_at": "2019-01-01T11:00:00.000Z",
        "updated_at": "2019-01-01T11:00:00.000Z"
    }
]
```

### GET: /api/job

Find all jobs

*RESPONSE:*
```json
[
    {
        "id": 2,
        "quantity": 5,
        "value": 100,
        "description": "alo",
        "job_start": "2019-01-01T11:00:00.000Z",
        "job_end": "2019-01-01T11:00:00.000Z",
        "freelancer_type_id": 1,
        "created_at": "2019-01-01T11:00:00.000Z",
        "updated_at": "2019-01-01T11:00:00.000Z"
    }
]
```


### POST: /api/job

Create a new job

*Body:*
```json
{
    "quantity": 3,
    "value": 100,
    "description": "description",
    "job_start": "2019-01-01T11:00:00.000Z",
    "job_end": "2019-01-01T11:00:00.000Z",
    "freelancer_type_id": 1
}
```

### PUT: /api/job

Update a job

*Body:*
```json
{
	"id": 3,
    "quantity": 5,
    "value": 120
}
```

**import collection: ** `https://www.getpostman.com/collections/00fb6c3ffaacc0ac1789`
