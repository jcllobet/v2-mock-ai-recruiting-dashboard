**GET**  
[/api/account/clients/](https://eu.platform.orbio.work/api/docs#/default/account_api_list_clients)

\[  
  {  
    "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
    "code": "string",  
    "domain": "string",  
    "name": "string",  
    "description": "string"  
  }  
\]

[/api/account/clients/](https://eu.platform.orbio.work/api/docs#/default/account_api_create_client)  
Create Client

Create a new client for the authenticated user

#### **Request body**

**application/json**

* **Example Value**  
* Schema

{  
  "candidate\_criteria": "",  
  "description": "",  
  "code": "string",  
  "domain": "string",  
  "name": "string",  
  "timezone": "UTC"

}

response

{  
  "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
  "code": "string",  
  "domain": "string",  
  "name": "string",  
  "candidate\_criteria": "string",  
  "description": "string",  
  "timezone": "UTC",  
  "call\_start\_time": "09:30:00",  
  "call\_end\_time": "18:30:00",  
  "language\_default": "en-us",  
  "expand\_position\_description": false,  
  "infer\_position\_criteria": true,  
  "infer\_position\_skills": true,  
  "privacy\_policy\_url": "string",  
  "created": "2025-07-02T08:18:14.720Z",  
  "updated": "2025-07-02T08:18:14.720Z"  
}

[/api/account/clients/{client\_uuid}/](https://eu.platform.orbio.work/api/docs#/default/account_api_get_client)  
Get Client

Get details for a specific client

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |

{  
  "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
  "code": "string",  
  "domain": "string",  
  "name": "string",  
  "candidate\_criteria": "string",  
  "description": "string",  
  "timezone": "UTC",  
  "call\_start\_time": "09:30:00",  
  "call\_end\_time": "18:30:00",  
  "language\_default": "en-us",  
  "expand\_position\_description": false,  
  "infer\_position\_criteria": true,  
  "infer\_position\_skills": true,  
  "privacy\_policy\_url": "string",  
  "created": "2025-07-02T08:28:02.592Z",  
  "updated": "2025-07-02T08:28:02.592Z"  
}

[/api/account/clients/{client\_uuid}/members/](https://eu.platform.orbio.work/api/docs#/default/account_api_create_client_member)  
Create Client Member

Create a new member for a specific client Only accessible by client admins If user doesn't exist, it will be created If user exists, it will be linked to the client with the specified role Returns the created member and any generated password

Request:

{  
  "email": "string",  
  "first\_name": "string",  
  "last\_name": "string",  
  "password": "string",  
  "generate\_random\_password": false,  
  "role": "string"  
}

[/api/hiring/{client\_uuid}/kpis](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_client_kpis)  
Client Kpis

#### **Parameters**

{  
  "total\_positions": 0,  
  "total\_candidates": 0,  
  "total\_conversations": 0  
}

[/api/hiring/{client\_uuid}/stats](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_client_stats)  
Client Stats

#### **Parameters**

{  
  "total\_time\_saved": 0,  
  "total\_time\_saved\_unit": "string",  
  "total\_time\_saved\_change": 0,  
  "automated\_calls": 0,  
  "automated\_calls\_change": 0,  
  "off\_hours\_interactions": 0,  
  "off\_hours\_interactions\_change": 0,  
  "cvs\_analyzed": 0,  
  "cvs\_analyzed\_change": 0,  
  "criteria\_validations": 0,  
  "criteria\_validations\_change": 0,  
  "ai\_decisions": 0,  
  "ai\_decisions\_change": 0,  
  "candidates\_processed": 0,  
  "candidates\_processed\_change": 0,  
  "response\_time": 0,  
  "response\_time\_unit": "string",  
  "response\_time\_change": 0,  
  "conversion\_rate": 0,  
  "conversion\_rate\_unit": "string",  
  "conversion\_rate\_change": 0,  
  "time\_saved\_cv\_analysis": 0,  
  "time\_saved\_automated\_calls": 0,  
  "time\_saved\_criteria\_validation": 0,  
  "whatsapp\_messages\_sent": 0,  
  "whatsapp\_messages\_sent\_change": 0,  
  "whatsapp\_messages\_received": 0,  
  "whatsapp\_messages\_received\_change": 0,  
  "applications\_rescored": 0,  
  "applications\_rescored\_change": 0,  
  "answers\_completed": 0,  
  "answers\_completed\_change": 0,  
  "conversation\_hours": 0,  
  "conversation\_hours\_unit": "string",  
  "conversation\_hours\_change": 0,  
  "conversation\_messages": 0,  
  "conversation\_messages\_change": 0  
}

[/api/hiring/{client\_uuid}/positions](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_create_position)  
**Create Position**

{  
  "name": "string",  
  "description": "string",  
  "location": "string",  
  "join\_date": "2025-07-02",  
  "public\_url": "string",  
  "integration\_position\_id": "string",  
  "candidate\_criteria": "string",  
  "description\_expanded": "string",  
  "contract\_type": "string",  
  "status": "string",  
  "killer\_criteria": \[  
    "string"  
  \],  
  "candidate\_questions": \[  
    "string"  
  \]  
}

**Response:**

{  
  "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
  "name": "string",  
  "description": "string",  
  "location": "string",  
  "join\_date": "2025-07-02",  
  "public\_url": "string",  
  "integration\_position\_id": "string",  
  "candidate\_criteria": "string",  
  "candidate\_criteria\_structured": {},  
  "killer\_criteria": {},  
  "description\_expanded": "string",  
  "created": "2025-07-02T08:32:56.916Z",  
  "updated": "2025-07-02T08:32:56.916Z",  
  "status": "draft",  
  "total\_candidates": 0,  
  "integration": {  
    "service": {  
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
      "name": "string",  
      "logo": "string",  
      "icon": "string",  
      "description": "string"  
    },  
    "client\_id": 0,  
    "infojobs\_integration": {  
      "required\_fields\_schema": {},  
      "expiration\_days": 30  
    },  
    "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
    "client": 0,  
    "active": true  
  }  
}

[/api/hiring/{client\_uuid}/positions](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_list_positions)  
**List Positions**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **q** string | (string | null) *(query)* |  |
| **status** string | (string | null) *(query)* |  |
| **attribute\_uuid** string | (string | null) *(query)* |  |
| **limit** integer *(query)* | ***Default value* : 10** |
| **offset** integer *(query)* | ***Default value* : 0**  |

**Response:**  
{  
  "items": \[  
    {  
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
      "name": "string",  
      "description": "string",  
      "location": "string",  
      "join\_date": "2025-07-02",  
      "public\_url": "string",  
      "integration\_position\_id": "string",  
      "candidate\_criteria": "string",  
      "candidate\_criteria\_structured": {},  
      "killer\_criteria": {},  
      "description\_expanded": "string",  
      "created": "2025-07-02T08:33:30.622Z",  
      "updated": "2025-07-02T08:33:30.622Z",  
      "status": "draft",  
      "total\_candidates": 0,  
      "integration": {  
        "service": {  
          "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
          "name": "string",  
          "logo": "string",  
          "icon": "string",  
          "description": "string"  
        },  
        "client\_id": 0,  
        "infojobs\_integration": {  
          "required\_fields\_schema": {},  
          "expiration\_days": 30  
        },  
        "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
        "client": 0,  
        "active": true  
      }  
    }  
  \],  
  "count": 0  
}

[/api/hiring/{client\_uuid}/candidates](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_list_candidates)

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **q** string | (string | null) *(query)* |  |
| **status** string | (string | null) *(query)* |  |
| **in\_pool** boolean | (boolean | null) *(query)* | **\--truefalse** |
| **limit** integer *(query)* | ***Default value* : 10** |
| **offset** integer *(query)* | ***Default value* : 0**  |

**Response:**  
{  
  "items": \[  
    {  
      "photo\_url": "string",  
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
      "status": "in\_progress",  
      "status\_data": {},  
      "first\_name": "string",  
      "last\_name": "string",  
      "email": "string",  
      "phone": "string",  
      "photo": "string",  
      "tagline": "string",  
      "summary\_short": "string",  
      "summary\_long": "string",  
      "created": "2025-07-02T08:34:24.000Z",  
      "updated": "2025-07-02T08:34:24.000Z",  
      "in\_pool": false,  
      "applications": \[  
        {  
          "position": {  
            "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
            "name": "string",  
            "description": "string",  
            "location": "string",  
            "join\_date": "2025-07-02",  
            "public\_url": "string",  
            "integration\_position\_id": "string",  
            "candidate\_criteria": "string",  
            "candidate\_criteria\_structured": {},  
            "killer\_criteria": {},  
            "description\_expanded": "string",  
            "created": "2025-07-02T08:34:24.000Z",  
            "updated": "2025-07-02T08:34:24.000Z",  
            "status": "draft"  
          },  
          "status": {  
            "client\_id": 0,  
            "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
            "name": "string",  
            "order": 0,  
            "client": 0,  
            "hired": false,  
            "rejected": false  
          },  
          "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
          "candidate": 0,  
          "match\_score": 0,  
          "match\_reason": "string",  
          "key\_positive\_points": {},  
          "key\_negative\_points": {},  
          "skills\_score": {},  
          "created": "2025-07-02T08:34:24.000Z",  
          "updated": "2025-07-02T08:34:24.000Z"  
        }  
      \]  
    }  
  \],  
  "count": 0  
}

[/api/hiring/{client\_uuid}/candidates/{candidate\_uuid}/](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_get_candidate_applications)  
**Get Candidate Applications**

{  
  "photo\_url": "string",  
  "cv\_url": "string",  
  "integration\_detail\_url": "string",  
  "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
  "status": "in\_progress",  
  "status\_data": {},  
  "first\_name": "string",  
  "last\_name": "string",  
  "email": "string",  
  "phone": "string",  
  "photo": "string",  
  "tagline": "string",  
  "summary\_short": "string",  
  "summary\_long": "string",  
  "data": {},  
  "created": "2025-07-02T08:35:05.011Z",  
  "updated": "2025-07-02T08:35:05.011Z",  
  "in\_pool": false,  
  "applications": \[  
    {  
      "position": {  
        "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
        "name": "string",  
        "description": "string",  
        "location": "string",  
        "join\_date": "2025-07-02",  
        "public\_url": "string",  
        "integration\_position\_id": "string",  
        "candidate\_criteria": "string",  
        "candidate\_criteria\_structured": {},  
        "killer\_criteria": {},  
        "description\_expanded": "string",  
        "created": "2025-07-02T08:35:05.011Z",  
        "updated": "2025-07-02T08:35:05.011Z",  
        "status": "draft"  
      },  
      "status": {  
        "client\_id": 0,  
        "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
        "name": "string",  
        "order": 0,  
        "client": 0,  
        "hired": false,  
        "rejected": false  
      },  
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
      "candidate": 0,  
      "match\_score": 0,  
      "match\_reason": "string",  
      "key\_positive\_points": {},  
      "key\_negative\_points": {},  
      "skills\_score": {},  
      "created": "2025-07-02T08:35:05.011Z",  
      "updated": "2025-07-02T08:35:05.011Z"  
    }  
  \],  
  "notes": \[  
    {  
      "user": {  
        "email": "string",  
        "first\_name": "string",  
        "last\_name": "string"  
      },  
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
      "candidate": 0,  
      "note": "string",  
      "created": "2025-07-02T08:35:05.011Z",  
      "updated": "2025-07-02T08:35:05.011Z"  
    }  
  \]  
}

[/api/hiring/{client\_uuid}/positions/{position\_uuid}](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_get_position)

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **position\_uuid \*** string *(path)* |  |

| Code | Description | Links |
| :---- | :---- | :---- |
| **200** | **OK Media type application/json Controls Accept header. Example Value Schema** {   "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",   "name": "string",   "description": "string",   "location": "string",   "join\_date": "2025-07-02",   "public\_url": "string",   "integration\_position\_id": "string",   "candidate\_criteria": "string",   "candidate\_criteria\_structured": {},   "killer\_criteria": {},   "description\_expanded": "string",   "created": "2025-07-02T08:35:45.711Z",   "updated": "2025-07-02T08:35:45.711Z",   "status": "draft",   "total\_candidates": 0,   "integration": {     "service": {       "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",       "name": "string",       "logo": "string",       "icon": "string",       "description": "string"     },     "client\_id": 0,     "infojobs\_integration": {       "required\_fields\_schema": {},       "expiration\_days": 30     },     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "client": 0,     "active": true   } } |  |

[/api/hiring/{client\_uuid}/positions/{position\_uuid}](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_update_position)  
**Update Position**

**Request:**  
{  
  "name": "string",  
  "description": "string",  
  "location": "string",  
  "join\_date": "2025-07-02",  
  "public\_url": "string",  
  "integration\_position\_id": "string",  
  "candidate\_criteria": "string",  
  "description\_expanded": "string",  
  "contract\_type": "string",  
  "status": "string",  
  "killer\_criteria": \[  
    "string"  
  \],  
  "candidate\_questions": \[  
    "string"  
  \]  
}

**Response:**

{  
  "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
  "name": "string",  
  "description": "string",  
  "location": "string",  
  "join\_date": "2025-07-02",  
  "public\_url": "string",  
  "integration\_position\_id": "string",  
  "candidate\_criteria": "string",  
  "candidate\_criteria\_structured": {},  
  "killer\_criteria": {},  
  "description\_expanded": "string",  
  "created": "2025-07-02T08:36:38.179Z",  
  "updated": "2025-07-02T08:36:38.179Z",  
  "status": "draft",  
  "total\_candidates": 0,  
  "integration": {  
    "service": {  
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
      "name": "string",  
      "logo": "string",  
      "icon": "string",  
      "description": "string"  
    },  
    "client\_id": 0,  
    "infojobs\_integration": {  
      "required\_fields\_schema": {},  
      "expiration\_days": 30  
    },  
    "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
    "client": 0,  
    "active": true  
  }  
}

[/api/hiring/{client\_uuid}/positions/{position\_uuid}/applications/initial](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_get_initial_position_applications)  
**Get Initial Position Applications**

#### **Parameters**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **position\_uuid \*** string *(path)* |  |
| **limit** integer | (integer | null) *(query)* | ***Default value* : 100** |
| **q** string | (string | null) *(query)* |  |
| **status** string | (string | null) *(query)* |  |
| **in\_pool** boolean | (boolean | null) *(query)* | **\--truefalse** |

{  
  "additionalProp1": {  
    "items": \[  
      {  
        "candidate": {  
          "photo\_url": "string",  
          "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
          "status": "in\_progress",  
          "status\_data": {},  
          "first\_name": "string",  
          "last\_name": "string",  
          "email": "string",  
          "phone": "string",  
          "photo": "string",  
          "tagline": "string",  
          "summary\_short": "string",  
          "summary\_long": "string",  
          "created": "2025-07-02T08:37:12.132Z",  
          "updated": "2025-07-02T08:37:12.132Z",  
          "in\_pool": false  
        },  
        "position": {  
          "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
          "name": "string",  
          "description": "string",  
          "location": "string",  
          "join\_date": "2025-07-02",  
          "public\_url": "string",  
          "integration\_position\_id": "string",  
          "candidate\_criteria": "string",  
          "candidate\_criteria\_structured": {},  
          "killer\_criteria": {},  
          "description\_expanded": "string",  
          "created": "2025-07-02T08:37:12.132Z",  
          "updated": "2025-07-02T08:37:12.132Z",  
          "status": "draft",  
          "total\_candidates": 0,  
          "integration": {  
            "service": {  
              "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
              "name": "string",  
              "logo": "string",  
              "icon": "string",  
              "description": "string"  
            },  
            "client\_id": 0,  
            "infojobs\_integration": {  
              "required\_fields\_schema": {},  
              "expiration\_days": 30  
            },  
            "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
            "client": 0,  
            "active": true  
          }  
        },  
        "status": {  
          "client\_id": 0,  
          "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
          "name": "string",  
          "order": 0,  
          "client": 0,  
          "hired": false,  
          "rejected": false  
        },  
        "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
        "match\_score": 0,  
        "match\_reason": "string",  
        "key\_positive\_points": {},  
        "key\_negative\_points": {},  
        "skills\_score": {},  
        "created": "2025-07-02T08:37:12.132Z",  
        "updated": "2025-07-02T08:37:12.132Z"  
      }  
    \],  
    "count": 0  
  },  
  "additionalProp2": {  
    "items": \[  
      {  
        "candidate": {  
          "photo\_url": "string",  
          "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
          "status": "in\_progress",  
          "status\_data": {},  
          "first\_name": "string",  
          "last\_name": "string",  
          "email": "string",  
          "phone": "string",  
          "photo": "string",  
          "tagline": "string",  
          "summary\_short": "string",  
          "summary\_long": "string",  
          "created": "2025-07-02T08:37:12.132Z",  
          "updated": "2025-07-02T08:37:12.132Z",  
          "in\_pool": false  
        },  
        "position": {  
          "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
          "name": "string",  
          "description": "string",  
          "location": "string",  
          "join\_date": "2025-07-02",  
          "public\_url": "string",  
          "integration\_position\_id": "string",  
          "candidate\_criteria": "string",  
          "candidate\_criteria\_structured": {},  
          "killer\_criteria": {},  
          "description\_expanded": "string",  
          "created": "2025-07-02T08:37:12.132Z",  
          "updated": "2025-07-02T08:37:12.132Z",  
          "status": "draft",  
          "total\_candidates": 0,  
          "integration": {  
            "service": {  
              "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
              "name": "string",  
              "logo": "string",  
              "icon": "string",  
              "description": "string"  
            },  
            "client\_id": 0,  
            "infojobs\_integration": {  
              "required\_fields\_schema": {},  
              "expiration\_days": 30  
            },  
            "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
            "client": 0,  
            "active": true  
          }  
        },  
        "status": {  
          "client\_id": 0,  
          "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
          "name": "string",  
          "order": 0,  
          "client": 0,  
          "hired": false,  
          "rejected": false  
        },  
        "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
        "match\_score": 0,  
        "match\_reason": "string",  
        "key\_positive\_points": {},  
        "key\_negative\_points": {},  
        "skills\_score": {},  
        "created": "2025-07-02T08:37:12.132Z",  
        "updated": "2025-07-02T08:37:12.132Z"  
      }  
    \],  
    "count": 0  
  },  
  "additionalProp3": {  
    "items": \[  
      {  
        "candidate": {  
          "photo\_url": "string",  
          "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
          "status": "in\_progress",  
          "status\_data": {},  
          "first\_name": "string",  
          "last\_name": "string",  
          "email": "string",  
          "phone": "string",  
          "photo": "string",  
          "tagline": "string",  
          "summary\_short": "string",  
          "summary\_long": "string",  
          "created": "2025-07-02T08:37:12.132Z",  
          "updated": "2025-07-02T08:37:12.132Z",  
          "in\_pool": false  
        },  
        "position": {  
          "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
          "name": "string",  
          "description": "string",  
          "location": "string",  
          "join\_date": "2025-07-02",  
          "public\_url": "string",  
          "integration\_position\_id": "string",  
          "candidate\_criteria": "string",  
          "candidate\_criteria\_structured": {},  
          "killer\_criteria": {},  
          "description\_expanded": "string",  
          "created": "2025-07-02T08:37:12.132Z",  
          "updated": "2025-07-02T08:37:12.132Z",  
          "status": "draft",  
          "total\_candidates": 0,  
          "integration": {  
            "service": {  
              "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
              "name": "string",  
              "logo": "string",  
              "icon": "string",  
              "description": "string"  
            },  
            "client\_id": 0,  
            "infojobs\_integration": {  
              "required\_fields\_schema": {},  
              "expiration\_days": 30  
            },  
            "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
            "client": 0,  
            "active": true  
          }  
        },  
        "status": {  
          "client\_id": 0,  
          "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
          "name": "string",  
          "order": 0,  
          "client": 0,  
          "hired": false,  
          "rejected": false  
        },  
        "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
        "match\_score": 0,  
        "match\_reason": "string",  
        "key\_positive\_points": {},  
        "key\_negative\_points": {},  
        "skills\_score": {},  
        "created": "2025-07-02T08:37:12.132Z",  
        "updated": "2025-07-02T08:37:12.132Z"  
      }  
    \],  
    "count": 0  
  }  
}

[/api/hiring/{client\_uuid}/positions/{position\_uuid}/applications](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_get_position_applications)  
**Get Position Applications**

**Request:**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **position\_uuid \*** string *(path)* |  |
| **status\_uuid** string | (string | null) *(query)* |  |
| **limit** integer *(query)* | ***Default value* : 10** |
| **offset** integer *(query)* | ***Default value* : 0**  |

**response:**

{  
  "items": \[  
    {  
      "candidate": {  
        "photo\_url": "string",  
        "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
        "status": "in\_progress",  
        "status\_data": {},  
        "first\_name": "string",  
        "last\_name": "string",  
        "email": "string",  
        "phone": "string",  
        "photo": "string",  
        "tagline": "string",  
        "summary\_short": "string",  
        "summary\_long": "string",  
        "created": "2025-07-02T08:37:57.169Z",  
        "updated": "2025-07-02T08:37:57.169Z",  
        "in\_pool": false  
      },  
      "position": {  
        "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
        "name": "string",  
        "description": "string",  
        "location": "string",  
        "join\_date": "2025-07-02",  
        "public\_url": "string",  
        "integration\_position\_id": "string",  
        "candidate\_criteria": "string",  
        "candidate\_criteria\_structured": {},  
        "killer\_criteria": {},  
        "description\_expanded": "string",  
        "created": "2025-07-02T08:37:57.169Z",  
        "updated": "2025-07-02T08:37:57.169Z",  
        "status": "draft",  
        "total\_candidates": 0,  
        "integration": {  
          "service": {  
            "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
            "name": "string",  
            "logo": "string",  
            "icon": "string",  
            "description": "string"  
          },  
          "client\_id": 0,  
          "infojobs\_integration": {  
            "required\_fields\_schema": {},  
            "expiration\_days": 30  
          },  
          "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
          "client": 0,  
          "active": true  
        }  
      },  
      "status": {  
        "client\_id": 0,  
        "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
        "name": "string",  
        "order": 0,  
        "client": 0,  
        "hired": false,  
        "rejected": false  
      },  
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
      "match\_score": 0,  
      "match\_reason": "string",  
      "key\_positive\_points": {},  
      "key\_negative\_points": {},  
      "skills\_score": {},  
      "created": "2025-07-02T08:37:57.169Z",  
      "updated": "2025-07-02T08:37:57.169Z"  
    }  
  \],  
  "count": 0  
}

[/api/hiring/{client\_uuid}/applications/{application\_uuid}](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_get_application)  
**Get Application**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **application\_uuid** |  |

**Response:**

| Code | Description | Links |
| :---- | :---- | :---- |
| **200** | **OK Media type application/json Controls Accept header. Example Value Schema** {   "candidate": {     "photo\_url": "string",     "cv\_url": "string",     "integration\_detail\_url": "string",     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "status": "in\_progress",     "status\_data": {},     "first\_name": "string",     "last\_name": "string",     "email": "string",     "phone": "string",     "photo": "string",     "tagline": "string",     "summary\_short": "string",     "summary\_long": "string",     "data": {},     "created": "2025-07-02T08:38:29.379Z",     "updated": "2025-07-02T08:38:29.379Z",     "in\_pool": false   },   "position": {     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "name": "string",     "description": "string",     "location": "string",     "join\_date": "2025-07-02",     "public\_url": "string",     "integration\_position\_id": "string",     "candidate\_criteria": "string",     "candidate\_criteria\_structured": {},     "killer\_criteria": {},     "description\_expanded": "string",     "created": "2025-07-02T08:38:29.379Z",     "updated": "2025-07-02T08:38:29.379Z",     "status": "draft",     "total\_candidates": 0,     "integration": {       "service": {         "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",         "name": "string",         "logo": "string",         "icon": "string",         "description": "string"       },       "client\_id": 0,       "infojobs\_integration": {         "required\_fields\_schema": {},         "expiration\_days": 30       },       "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",       "client": 0,       "active": true     }   },   "status": {     "client\_id": 0,     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "name": "string",     "order": 0,     "client": 0,     "hired": false,     "rejected": false   },   "notes": \[     {       "user": {         "email": "string",         "first\_name": "string",         "last\_name": "string"       },       "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",       "application": 0,       "note": "string",       "created": "2025-07-02T08:38:29.379Z",       "updated": "2025-07-02T08:38:29.379Z"     }   \],   "question\_answers": \[\],   "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",   "match\_score": 0,   "match\_reason": "string",   "key\_positive\_points": {},   "key\_negative\_points": {},   "skills\_score": {},   "detailed\_evaluation": {},   "created": "2025-07-02T08:38:29.379Z",   "updated": "2025-07-02T08:38:29.379Z" } |  |

[/api/hiring/{client\_uuid}/applications/{application\_uuid}/conversations](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_get_application_conversations)  
**Get Application Conversations**

**Request:**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **application\_uuid \*** string *(path)* |  |
| **conversation\_type** string | (string | null) *(query)* |  |

**Response:**   
\[  
  {  
    "messages": \[  
      {}  
    \],  
    "application": {  
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
      "position": {  
        "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
        "name": "string",  
        "description": "string",  
        "location": "string",  
        "join\_date": "2025-07-02",  
        "public\_url": "string",  
        "integration\_position\_id": "string",  
        "candidate\_criteria": "string",  
        "candidate\_criteria\_structured": {},  
        "killer\_criteria": {},  
        "description\_expanded": "string",  
        "created": "2025-07-02T08:39:21.281Z",  
        "updated": "2025-07-02T08:39:21.281Z",  
        "status": "draft"  
      }  
    },  
    "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
    "channel": "string",  
    "summary": "string",  
    "status": "pending",  
    "twilio\_sid": "string",  
    "created": "2025-07-02T08:39:21.281Z",  
    "updated": "2025-07-02T08:39:21.281Z"  
  }  
\]

[/api/hiring/{client\_uuid}/applications/{application\_uuid}/documents](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_get_application_documents)  
**Get Application Documents**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **application\_uuid \*** string *(path)* |   |

**Response:**  
\[  
  {  
    "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
    "name": "string",  
    "file": "string",  
    "description": "string",  
    "created": "2025-07-02T08:39:54.496Z",  
    "updated": "2025-07-02T08:39:54.496Z"  
  }  
\]

[/api/hiring/{client\_uuid}/applications/{application\_uuid}/events](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_get_application_events)  
**Get Application Events**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **application\_uuid \*** string *(path)* |  |

\[  
  {  
    "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
    "code": "string",  
    "candidate": 0,  
    "application": 0,  
    "conversation": 0,  
    "data": {},  
    "created": "2025-07-02T08:40:28.155Z",  
    "updated": "2025-07-02T08:40:28.155Z"  
  }  
\]

[/api/hiring/{client\_uuid}/applications/{application\_uuid}/questions](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_get_application_question_answers)  
**Get Application Question Answers**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **application\_uuid \*** string *(path)* |  |

**Response:**

\[  
  {  
    "question": {  
      "position\_id": 0,  
      "application\_status": {  
        "client\_id": 0,  
        "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
        "name": "string",  
        "order": 0,  
        "client": 0,  
        "hired": false,  
        "rejected": false  
      },  
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
      "question": "string",  
      "order": 0  
    },  
    "answer": {  
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
      "answer": "string",  
      "created": "2025-07-02T08:40:56.990Z",  
      "updated": "2025-07-02T08:40:56.990Z"  
    },  
    "rendered\_question": "string"  
  }  
\]

[/api/hiring/{client\_uuid}/positions/{position\_uuid}/infer-criteria](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_infer_position_criteria)  
**Infer Position Criteria**

#### 

#### **Parameters**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **position\_uuid \*** string *(path)* |  |

{  
  "suggested\_criteria": "string"  
}

[/api/hiring/{client\_uuid}/positions/{position\_uuid}/enhance-description](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_enhance_position_description)  
Enhance Position Description

#### **Parameters**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **position\_uuid \*** string *(path)* |  |

{  
  "suggested\_description": "string"  
}

[/api/hiring/{client\_uuid}/attribute-types](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_list_attribute_types)  
List Attribute Types

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| limit integer *(query)* | *Default value* : 10 |
| offset integer *(query)* | *Default value* : 0  |

{  
  "items": \[  
    {  
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
      "code": "string",  
      "name": "string",  
      "description": "string",  
      "data\_schema": {},  
      "prompt\_template": "string",  
      "created": "2025-07-02T08:45:54.363Z",  
      "updated": "2025-07-02T08:45:54.363Z"  
    }  
  \],  
  "count": 0  
}

[/api/hiring/{client\_uuid}/attribute-types/{type\_uuid}/attributes](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_list_attributes)  
List Attributes

List all attributes for a given attribute type

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **type\_uuid \*** string *(path)* |  |
| type\_uuid string | (string | null) *(query)* |  |
| q string | (string | null) *(query)* |  |
| limit integer *(query)* | *Default value* : 10 |
| offset integer *(query)* | *Default value* : 0  |

{  
  "items": \[  
    {  
      "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
      "name": "string",  
      "data": {},  
      "created": "2025-07-02T08:46:26.827Z",  
      "updated": "2025-07-02T08:46:26.827Z",  
      "type": {  
        "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
        "code": "string",  
        "name": "string",  
        "description": "string",  
        "data\_schema": {},  
        "prompt\_template": "string",  
        "created": "2025-07-02T08:46:26.827Z",  
        "updated": "2025-07-02T08:46:26.827Z"  
      },  
      "total\_positions": 0  
    }  
  \],  
  "count": 0  
}

[/api/hiring/{client\_uuid}/applications/{application\_uuid}/notes](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_save_application_note)  
Save Application Note

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **application\_uuid \*** string *(path)* |  |

#### **Request body**

**application/json**

* **Example Value**  
* Schema

{  
  "note": "string"

}

{  
  "user": {  
    "email": "string",  
    "first\_name": "string",  
    "last\_name": "string"  
  },  
  "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
  "application": 0,  
  "note": "string",  
  "created": "2025-07-02T08:46:52.830Z",  
  "updated": "2025-07-02T08:46:52.830Z"  
}

[/api/hiring/{client\_uuid}/candidates/{candidate\_uuid}/notes](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_save_candidate_note)  
Save Candidate Note

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **candidate\_uuid \*** string *(path)* |  |

#### **Request body**

**application/json**

* **Example Value**  
* Schema

{  
  "note": "string"

}

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema {   "user": {     "email": "string",     "first\_name": "string",     "last\_name": "string"   },   "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",   "candidate": 0,   "note": "string",   "created": "2025-07-02T08:47:42.882Z",   "updated": "2025-07-02T08:47:42.882Z" } |  |

[/api/hiring/{client\_uuid}/candidates/{candidate\_uuid}/conversations](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_get_candidate_conversations)  
Get Candidate Conversations

Fetch all conversations for a candidate, including messages and application info.

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **candidate\_uuid \*** string *(path)* |  |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[   {     "messages": \[       {}     \],     "application": {       "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",       "position": {         "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",         "name": "string",         "description": "string",         "location": "string",         "join\_date": "2025-07-02",         "public\_url": "string",         "integration\_position\_id": "string",         "candidate\_criteria": "string",         "candidate\_criteria\_structured": {},         "killer\_criteria": {},         "description\_expanded": "string",         "created": "2025-07-02T08:47:42.884Z",         "updated": "2025-07-02T08:47:42.884Z",         "status": "draft"       }     },     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "channel": "string",     "summary": "string",     "status": "pending",     "twilio\_sid": "string",     "created": "2025-07-02T08:47:42.884Z",     "updated": "2025-07-02T08:47:42.884Z"   } \] |  |

[/api/hiring/{client\_uuid}/applications/{application\_uuid}/rescore](https://eu.platform.orbio.work/api/docs#/default/hiring_api_controllers_rescore_candidate)  
Rescore Candidate

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **application\_uuid \*** string *(path)* |  |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK |  |

**GET**  
[/api/integrations/{client\_uuid}/integrations](https://eu.platform.orbio.work/api/docs#/default/integrations_api_list_integrations)  
List Integrations

List all integrations for a client

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| service\_\_can\_post\_jobs boolean | (boolean | null) *(query)* | **\--truefalse** |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[   {     "service": {       "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",       "name": "string",       "logo": "string",       "icon": "string",       "description": "string"     },     "client\_id": 0,     "infojobs\_integration": {       "required\_fields\_schema": {},       "expiration\_days": 30     },     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "client": 0,     "active": true   } \] |  |

**GET**  
[/api/integrations/{client\_uuid}/services](https://eu.platform.orbio.work/api/docs#/default/integrations_api_list_services)  
List Services

List all available integration services

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[   {     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "name": "string",     "logo": "string",     "icon": "string",     "description": "string"   } \] |  |

[/api/integrations/{client\_uuid}/integrations/{integration\_uuid}/parse-job-description](https://eu.platform.orbio.work/api/docs#/default/integrations_api_prepare_job_posting)  
Prepare Job Posting

It will receive a job description and will return the field mapping between the job description and the job posting fields. Each integration can have different fields, so the response will be a list of field mappings. Also inform if the field is required or not

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **integration\_uuid \*** string *(path)* |  |

#### **Request body**

**application/json**

* **Example Value**  
* Schema

{  
  "job\_description": "string",  
  "job\_title": "string",  
  "killer\_criteria": \[  
    "string"  
  \],  
  "candidate\_questions": \[  
    "string"  
  \]

}

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK |  |

**POST**  
[/api/integrations/{client\_uuid}/integrations/{integration\_uuid}/generate-questions-from-killer-criteria](https://eu.platform.orbio.work/api/docs#/default/integrations_api_generate_questions_from_killer_criteria)  
Generate Questions From Killer Criteria

Get the questions from the killer criteria

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **integration\_uuid \*** string *(path)* |  |

#### **Request body**

**application/json**

* **Example Value**  
* Schema

{  
  "killer\_criteria": \[  
    "string"  
  \]

}

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK |  |

**GET**  
[/api/integrations/{client\_uuid}/positions/{position\_uuid}/integrations](https://eu.platform.orbio.work/api/docs#/default/integrations_api_get_integration_positions)  
Get Integration Positions

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **position\_uuid \*** string *(path)* |  |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[   {     "integration": {       "service": {         "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",         "name": "string",         "logo": "string",         "icon": "string",         "description": "string"       },       "client\_id": 0,       "infojobs\_integration": {         "required\_fields\_schema": {},         "expiration\_days": 30       },       "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",       "client": 0,       "active": true     },     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "position": 0,     "status": "string",     "integration\_data": {},     "integration\_position\_id": "string",     "created": "2025-07-02T08:49:42.537Z"   } \] |  |

**ET**  
[/api/candidates/client/{client\_uuid}/application-statuses](https://eu.platform.orbio.work/api/docs#/default/candidates_api_get_application_statuses)  
Get Application Statuses

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[   {     "client\_id": 0,     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "name": "string",     "order": 0,     "client": 0,     "hired": false,     "rejected": false   } \] |  |

[/api/candidates/{client\_uuid}/upload-cv](https://eu.platform.orbio.work/api/docs#/default/candidates_api_upload_candidate_cv)  
Upload Candidate Cv

Upload a CV and create a candidate instance and an application if a position is provided

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |

#### **Request body**

**multipart/form-data**

| file \* string($binary) |  |
| :---- | :---- |
| position\_uuid string | (string | null)($uuid) |  |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema {   "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",   "status": "in\_progress",   "timezone": "UTC",   "language": "en-us" } |  |

[/api/workflows/{client\_uuid}/{type}/](https://eu.platform.orbio.work/api/docs#/default/workflow_api_list_workflows)  
List Workflows

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **type \*** string *(path)* | *Available values* : hiring, onboarding, experience **hiringonboardingexperience** |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[   {     "id": 0,     "type": "hiring",     "name": "string",     "description": "string",     "is\_active": true,     "trigger\_event": "string"   } \] |  |

[/api/workflows/{client\_uuid}/workflow/{workflow\_id}/](https://eu.platform.orbio.work/api/docs#/default/workflow_api_get_workflow)  
Get Workflow

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **workflow\_id \*** integer *(path)* |  |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema {   "id": 0,   "type": "hiring",   "name": "string",   "description": "string",   "is\_active": true,   "trigger\_event": "string" } |  |

**GET**  
[/api/workflows/{client\_uuid}/workflow/{workflow\_id}/steps/](https://eu.platform.orbio.work/api/docs#/default/workflow_api_list_workflow_steps)  
List Workflow Steps

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **workflow\_id \*** integer *(path)* |  |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[   {     "previous\_step\_id": 0,     "action\_display": "string",     "id": 0,     "action\_type": "string",     "action\_config": {},     "description": "string",     "condition": "string",     "is\_active": true   } \] |  |

[/api/knowledge/{client\_uuid}/](https://eu.platform.orbio.work/api/docs#/default/knowledge_api_list_knowledge_bases)  
List Knowledge Bases

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[   {     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "name": "string",     "description": "string",     "active": true   } \] |  |

[/api/agents/check-criteria-compliance/](https://eu.platform.orbio.work/api/docs#/default/agent_api_check_cirteria_compliance)  
Check Cirteria Compliance

#### **Parameters**

**Try it out**  
No parameters

#### **Request body**

**application/json**

* **Example Value**  
* Schema

{  
  "criteria": "string"

}

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema {   "aligned": true,   "reason": "string",   "recommendations": \[     "string"   \] } |  |

**GET**  
[/api/agents/{client\_uuid}/](https://eu.platform.orbio.work/api/docs#/default/agent_api_list_agents)  
List Agents

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[   {     "voice\_config": {       "id": 0,       "transcription\_model": "nova-2",       "language": "en-us",       "voice\_id": "iP95p4xoKVk53GoZ742B",       "optimize\_latency": 3,       "stability": 0.5,       "similarity": 0.75,       "style": 0.1,       "speaker\_boost": false,       "tts\_model": "eleven\_flash\_v2\_5",       "output\_format": "pcm\_16000"     },     "knowledge\_bases": \[       {         "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",         "name": "string",         "description": "string",         "active": true       }     \],     "number": {       "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",       "number": "string",       "provider": "twilio",       "client": 0     },     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "client": 0,     "name": "string",     "description": "string",     "language\_default": "en-us",     "call\_type": "inbound",     "prompt": "The customer's bank account balance is {customer\_balance}. They are based in {customer\_location}.",     "first\_message": "Hi, how can I help you today?",     "active": true   } \] |  |

**GET**  
[/api/agents/{client\_uuid}/agents/{uuid}](https://eu.platform.orbio.work/api/docs#/default/agent_api_get_agent_detail)  
Get Agent Detail

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **client\_uuid \*** string *(path)* |  |
| **uuid \*** string *(path)* |  |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema {   "voice\_config": {     "id": 0,     "transcription\_model": "nova-2",     "language": "en-us",     "voice\_id": "iP95p4xoKVk53GoZ742B",     "optimize\_latency": 3,     "stability": 0.5,     "similarity": 0.75,     "style": 0.1,     "speaker\_boost": false,     "tts\_model": "eleven\_flash\_v2\_5",     "output\_format": "pcm\_16000"   },   "knowledge\_bases": \[     {       "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",       "name": "string",       "description": "string",       "active": true     }   \],   "number": {     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "number": "string",     "provider": "twilio",     "client": 0   },   "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",   "client": 0,   "name": "string",   "description": "string",   "language\_default": "en-us",   "call\_type": "inbound",   "prompt": "The customer's bank account balance is {customer\_balance}. They are based in {customer\_location}.",   "first\_message": "Hi, how can I help you today?",   "active": true } |  |

**GET**  
[/api/agents/agents/{agent\_uuid}/tools](https://eu.platform.orbio.work/api/docs#/default/agent_api_list_agent_tools)  
List Agent Tools

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **agent\_uuid \*** string *(path)* |  |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[   {     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "agent": 0,     "tool": {       "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",       "code": "string",       "name": "string",       "icon": "string",       "description": "string",       "properties": {},       "multiple": false     },     "properties": {}   } \] |  |

**POST**  
[/api/agents/agents/{agent\_uuid}/tools](https://eu.platform.orbio.work/api/docs#/default/agent_api_create_agent_tool)  
Create Agent Tool

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **agent\_uuid \*** string *(path)* |  |

#### **Request body**

**application/json**

* **Example Value**  
* Schema

{  
  "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
  "agent\_id": 0,  
  "tool\_id": 0,  
  "properties": {}

}

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema {   "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",   "agent": 0,   "tool": {     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "code": "string",     "name": "string",     "icon": "string",     "description": "string",     "properties": {},     "multiple": false   },   "properties": {} } |  |

**GET**  
[/api/agents/agents/{agent\_uuid}/tools/{tool\_uuid}](https://eu.platform.orbio.work/api/docs#/default/agent_api_get_agent_tool)  
Get Agent Tool

#### **Parameters**

**Try it out**

| Name | Description |
| :---- | :---- |
| **agent\_uuid \*** string *(path)* |  |
| **tool\_uuid \*** string *(path)* |  |

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema {   "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",   "agent": 0,   "tool": {     "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",     "code": "string",     "name": "string",     "icon": "string",     "description": "string",     "properties": {},     "multiple": false   },   "properties": {} } |  |

### [**token**](https://eu.platform.orbio.work/api/docs#/token)

**POST**

[/api/token/pair](https://eu.platform.orbio.work/api/docs#/token/token_obtain_pair)

Obtain Token

#### **Parameters**

**Try it out**

No parameters

#### **Request body**

**application/json**

* **Example Value**  
* Schema

{  
  "password": "string",  
  "username": "string"

}

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema {   "refresh": "string",   "access": "string",   "user": {     "first\_name": "string",     "last\_name": "string",     "email": "string",     "members": \[\]   } } |  |

**POST**

[/api/token/refresh](https://eu.platform.orbio.work/api/docs#/token/token_refresh)

Refresh Token

#### **Parameters**

**Try it out**

No parameters

#### **Request body**

**application/json**

* **Example Value**  
* Schema

{  
  "refresh": "string"

}

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema {   "refresh": "string",   "access": "string" } | *No links* |

**POST**

[/api/token/verify](https://eu.platform.orbio.work/api/docs#/token/token_verify)

Verify Token

#### **Parameters**

**Try it out**

No parameters

#### **Request body**

**application/json**

* **Example Value**  
* Schema

{  
  "token": "string"

}

#### **Responses**

| Code | Description | Links |
| :---- | :---- | :---- |
| 200 | OK Media type **application/json** Controls Accept header. **Example Value** Schema {} |  |

#### **Schemas**

**ClientListSchema**Collapse allobject

* uuidstringuuid  
* codeCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* domainCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 255 characters  
  * \#1null  
*   
* namestring≤ 255 characters  
* descriptionCollapse all(string | null)  
  Brief description of the company and its business activities  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
* 

**ClientDetailSchema**Collapse allobject

* uuidstringuuid  
* codeCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* domainCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 255 characters  
  * \#1null  
*   
* namestring≤ 255 characters  
* candidate\_criteriaCollapse all(string | null)  
  Criteria for candidate analysis and scoring  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* descriptionCollapse all(string | null)  
  Brief description of the company and its business activities  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* timezoneCollapse allstring≤ 50 characters  
  Select your timezone  
  **Default**"UTC"  
* call\_start\_timeCollapse allstringtime  
  **Default**"09:30:00"  
* call\_end\_timeCollapse allstringtime  
  **Default**"18:30:00"  
* language\_defaultCollapse allstring≤ 5 characters  
  **Default**"en-us"  
* expand\_position\_descriptionCollapse allboolean  
  Expand the position description  
  **Default**false  
* infer\_position\_criteriaCollapse allboolean  
  Infer candidate scoring criteria from position description  
  **Default**true  
* infer\_position\_skillsCollapse allboolean  
  Infer skills from position description  
  **Default**true  
* privacy\_policy\_urlCollapse all(string | null)  
  Privacy policy URL for the client  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* createdstringdate-time  
* updatedstringdate-time

**ClientCreateSchema**Collapse allobject

* candidate\_criteriaCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
* **Default**""  
* descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
* **Default**""  
* codeCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* domainCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 255 characters  
  * \#1null  
*   
* namestring≤ 255 characters  
* timezoneCollapse allstring≤ 50 characters  
  Select your timezone  
  **Default**"UTC"

**ClientUpdateSchema**Collapse allobject

* nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* domainCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* timezoneCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* candidate\_criteriaCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* call\_start\_timeCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0stringtime  
  * \#1null  
*   
* call\_end\_timeCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0stringtime  
  * \#1null  
*   
* language\_defaultCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* expand\_position\_descriptionCollapse all(boolean | null)  
  **Any of**Collapse all(boolean | null)  
  * \#0boolean  
  * \#1null  
*   
* infer\_position\_criteriaCollapse all(boolean | null)  
  **Any of**Collapse all(boolean | null)  
  * \#0boolean  
  * \#1null  
*   
* infer\_position\_skillsCollapse all(boolean | null)  
  **Any of**Collapse all(boolean | null)  
  * \#0boolean  
  * \#1null  
* 

**MemberSchema**Collapse allobject

* rolestring  
* client\_uuidstringuuid

**UserOut**Collapse allobject

* emailCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 254 characters  
  * \#1null  
*   
* first\_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 150 characters  
  * \#1null  
*   
* last\_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 150 characters  
  * \#1null  
* 

**MemberCreateResponseSchema**Collapse allobject

* memberCollapse allobject  
  * rolestring  
  * client\_uuidstringuuid  
*   
* generated\_passwordCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
* 

**MemberCreateSchema**Collapse allobject

* emailstring  
* first\_namestring  
* last\_namestring  
* passwordCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* generate\_random\_passwordCollapse all(boolean | null)  
  **Any of**Collapse all(boolean | null)  
  * \#0boolean  
  * \#1null  
* **Default**false  
* rolestring

**ClientApplyPageSchema**Collapse allobject

* codeCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* domainCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 255 characters  
  * \#1null  
*   
* namestring≤ 255 characters  
* apply\_page\_cssCollapse all(string | null)  
  Custom CSS for the apply page  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* apply\_page\_jsCollapse all(string | null)  
  Custom JS for the apply page  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
* 

**MemberUpdateSchema**Collapse allobject

* emailCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* first\_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* last\_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* passwordCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* roleCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
* 

**MyTokenObtainPairOutSchema**Collapse allobject

* refreshstring  
* accessstring  
* userCollapse allobject  
  * first\_namestring  
  * last\_namestring  
  * emailstring  
  * membersCollapse allarray\<object\>  
    ItemsCollapse allobject  
    * rolestring  
    * client\_uuidstringuuid  
  * **Default**empty array  
* 

**UserSchema**Collapse allobject

* first\_namestring  
* last\_namestring  
* emailstring  
* membersCollapse allarray\<object\>  
  ItemsCollapse allobject  
  * rolestring  
  * client\_uuidstringuuid  
* **Default**empty array

**MyTokenObtainPairInputSchema**Collapse allobject

* passwordstring≤ 128 characters  
* usernameCollapse allstring≤ 150 characters  
  Required. 150 characters or fewer. Letters, digits and @/./+/-/\_ only.

**Additional properties**forbidden

**TokenRefreshOutputSchema**Collapse allobject

* refreshstring  
* accessCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
* 

**TokenRefreshInputSchema**Collapse allobject

* refreshstring

**Schema**Collapse allobject

**TokenVerifyInputSchema**Collapse allobject

* tokenstring

**PositionDescriptionOut**Collapse allobject

* job\_descriptionstring  
* titlestring  
* locationCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* join\_dateCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* contract\_typeCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
* 

**PositionDescription**Collapse allobject

* descriptionstring

**KPIOut**Collapse allobject

* total\_positionsinteger  
* total\_candidatesinteger  
* total\_conversationsinteger

**StatsOut**Collapse allobject

Stats for a client

* total\_time\_savedinteger  
* total\_time\_saved\_unitstring  
* total\_time\_saved\_changeinteger  
* automated\_callsinteger  
* automated\_calls\_changeinteger  
* off\_hours\_interactionsinteger  
* off\_hours\_interactions\_changeinteger  
* cvs\_analyzedinteger  
* cvs\_analyzed\_changeinteger  
* criteria\_validationsinteger  
* criteria\_validations\_changeinteger  
* ai\_decisionsinteger  
* ai\_decisions\_changeinteger  
* candidates\_processedinteger  
* candidates\_processed\_changeinteger  
* response\_timenumber  
* response\_time\_unitstring  
* response\_time\_changeinteger  
* conversion\_rateinteger  
* conversion\_rate\_unitstring  
* conversion\_rate\_changeinteger  
* time\_saved\_cv\_analysisinteger  
* time\_saved\_automated\_callsinteger  
* time\_saved\_criteria\_validationinteger  
* whatsapp\_messages\_sentinteger  
* whatsapp\_messages\_sent\_changeinteger  
* whatsapp\_messages\_receivedinteger  
* whatsapp\_messages\_received\_changeinteger  
* applications\_rescoredinteger  
* applications\_rescored\_changeinteger  
* answers\_completedinteger  
* answers\_completed\_changeinteger  
* conversation\_hoursnumber  
* conversation\_hours\_unitstring  
* conversation\_hours\_changeinteger  
* conversation\_messagesinteger  
* conversation\_messages\_changeinteger

**InfojobsIntegrationOut**Collapse allobject

* required\_fields\_schemaExpand all(object | null)  
* expiration\_daysCollapse allinteger  
  **Default**30

**IntegrationOut**Collapse allobject

* serviceCollapse allobject  
  * uuidstringuuid  
  * namestring≤ 250 characters  
  * logoCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * iconCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * descriptionCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
*   
* client\_idCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)  
  * \#0integer  
  * \#1null  
*   
* infojobs\_integrationCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0 InfojobsIntegrationOutCollapse allobject  
    * required\_fields\_schemaCollapse all(object | null)  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * expiration\_daysCollapse allinteger  
      **Default**30  
  *   
  * \#1null  
*   
* uuidstringuuid  
* clientinteger  
* activeCollapse allboolean  
  **Default**true

**PositionOut**Collapse allobject

* uuidstringuuid  
* namestring≤ 255 characters  
* descriptionstring  
* locationCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 255 characters  
  * \#1null  
*   
* join\_dateCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0stringdate  
  * \#1null  
*   
* public\_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* integration\_position\_idCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 255 characters  
  * \#1null  
*   
* candidate\_criteriaCollapse all(string | null)  
  Criteria for candidate analysis and scoring  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* candidate\_criteria\_structuredCollapse all(object | null)  
  Structured criteria for candidate analysis and scoring  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* killer\_criteriaCollapse all(object | null)  
  Prescreening criteria for candidate elimination before the scoring  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* description\_expandedCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* createdstringdate-time  
* updatedstringdate-time  
* statusCollapse allstring≤ 255 characters  
  **Default**"draft"  
* total\_candidatesCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)  
  * \#0integer  
  * \#1null  
*   
* integrationCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0 IntegrationOutCollapse allobject  
    * serviceCollapse allobject  
      * uuidstringuuid  
      * namestring≤ 250 characters  
      * logoCollapse all(string | null)  
        **Any of**Collapse all(string | null)  
        * \#0string  
        * \#1null  
      *   
      * iconCollapse all(string | null)  
        **Any of**Collapse all(string | null)  
        * \#0string  
        * \#1null  
      *   
      * descriptionCollapse all(string | null)  
        **Any of**Collapse all(string | null)  
        * \#0string  
        * \#1null  
      *   
    *   
    * client\_idCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)  
      * \#0integer  
      * \#1null  
    *   
    * infojobs\_integrationCollapse all(object | null)  
      **Any of**Collapse all(object | null)  
      * \#0 InfojobsIntegrationOutCollapse allobject  
        * required\_fields\_schemaCollapse all(object | null)  
          **Any of**Collapse all(object | null)  
          * \#0object  
          * \#1null  
        *   
        * expiration\_daysCollapse allinteger  
          **Default**30  
      *   
      * \#1null  
    *   
    * uuidstringuuid  
    * clientinteger  
    * activeCollapse allboolean  
      **Default**true  
  *   
  * \#1null  
* 

**ServiceOut**Collapse allobject

* uuidstringuuid  
* namestring≤ 250 characters  
* logoCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* iconCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
* 

**PositionIn**Collapse allobject

* nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* locationCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* join\_dateCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0stringdate  
  * \#1null  
*   
* public\_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* integration\_position\_idCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* candidate\_criteriaCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* description\_expandedCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* contract\_typeCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* statusCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* killer\_criteriaCollapse all(array\<string\> | null)  
  **Any of**Collapse all(array\<string\> | null)  
  * \#0Collapse allarray\<string\>  
    Itemsstring  
  * \#1null  
*   
* candidate\_questionsCollapse all(array\<string\> | null)  
  **Any of**Collapse all(array\<string\> | null)  
  * \#0Collapse allarray\<string\>  
    Itemsstring  
  * \#1null  
* 

**Input**Collapse allobject

* limitCollapse allinteger≥ 1  
  **Default**10  
* offsetCollapse allinteger≥ 0  
  **Default**0

**PositionFilterSchema**Collapse allobject

* qCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* statusCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* attribute\_uuidCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
* 

**PagedPositionOut**Collapse allobject

* itemsCollapse allarray\<object\>  
  ItemsCollapse allobject  
  * uuidstringuuid  
  * namestring≤ 255 characters  
  * descriptionstring  
  * locationCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 255 characters  
    * \#1null  
  *   
  * join\_dateCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0stringdate  
    * \#1null  
  *   
  * public\_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * integration\_position\_idCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 255 characters  
    * \#1null  
  *   
  * candidate\_criteriaCollapse all(string | null)  
    Criteria for candidate analysis and scoring  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * candidate\_criteria\_structuredCollapse all(object | null)  
    Structured criteria for candidate analysis and scoring  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * killer\_criteriaCollapse all(object | null)  
    Prescreening criteria for candidate elimination before the scoring  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * description\_expandedCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * createdstringdate-time  
  * updatedstringdate-time  
  * statusCollapse allstring≤ 255 characters  
    **Default**"draft"  
  * total\_candidatesCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)  
    * \#0integer  
    * \#1null  
  *   
  * integrationCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0 IntegrationOutCollapse allobject  
      * serviceCollapse allobject  
        * uuidstringuuid  
        * namestring≤ 250 characters  
        * logoCollapse all(string | null)  
          **Any of**Collapse all(string | null)  
          * \#0string  
          * \#1null  
        *   
        * iconCollapse all(string | null)  
          **Any of**Collapse all(string | null)  
          * \#0string  
          * \#1null  
        *   
        * descriptionCollapse all(string | null)  
          **Any of**Collapse all(string | null)  
          * \#0string  
          * \#1null  
        *   
      *   
      * client\_idCollapse all(integer | null)  
        **Any of**Collapse all(integer | null)  
        * \#0integer  
        * \#1null  
      *   
      * infojobs\_integrationCollapse all(object | null)  
        **Any of**Collapse all(object | null)  
        * \#0 InfojobsIntegrationOutCollapse allobject  
          * required\_fields\_schemaCollapse all(object | null)  
            **Any of**Collapse all(object | null)  
            * \#0object  
            * \#1null  
          *   
          * expiration\_daysCollapse allinteger  
            **Default**30  
        *   
        * \#1null  
      *   
      * uuidstringuuid  
      * clientinteger  
      * activeCollapse allboolean  
        **Default**true  
    *   
    * \#1null  
  *   
*   
* countinteger

**CandidateFilterSchema**Collapse allobject

* qCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* statusCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* in\_poolCollapse all(boolean | null)  
  **Any of**Collapse all(boolean | null)  
  * \#0boolean  
  * \#1null  
* 

**ApplicationForCandidateListOut**Collapse allobject

* positionCollapse allobject  
  * uuidstringuuid  
  * namestring≤ 255 characters  
  * descriptionstring  
  * locationCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 255 characters  
    * \#1null  
  *   
  * join\_dateCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0stringdate  
    * \#1null  
  *   
  * public\_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * integration\_position\_idCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 255 characters  
    * \#1null  
  *   
  * candidate\_criteriaCollapse all(string | null)  
    Criteria for candidate analysis and scoring  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * candidate\_criteria\_structuredCollapse all(object | null)  
    Structured criteria for candidate analysis and scoring  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * killer\_criteriaCollapse all(object | null)  
    Prescreening criteria for candidate elimination before the scoring  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * description\_expandedCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * createdstringdate-time  
  * updatedstringdate-time  
  * statusCollapse allstring≤ 255 characters  
    **Default**"draft"  
*   
* statusCollapse allobject  
  * client\_idCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)  
    * \#0integer  
    * \#1null  
  *   
  * uuidstringuuid  
  * namestring≤ 255 characters  
  * orderCollapse allinteger  
    **Default**0  
  * clientinteger  
  * hiredCollapse allboolean  
    **Default**false  
  * rejectedCollapse allboolean  
    **Default**false  
*   
* uuidstringuuid  
* candidateinteger  
* match\_scoreCollapse allinteger  
  **Default**0  
* match\_reasonCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* key\_positive\_pointsCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* key\_negative\_pointsCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* skills\_scoreCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* createdstringdate-time  
* updatedstringdate-time

**ApplicationStatusOut**Collapse allobject

* client\_idCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)  
  * \#0integer  
  * \#1null  
*   
* uuidstringuuid  
* namestring≤ 255 characters  
* orderCollapse allinteger  
  **Default**0  
* clientinteger  
* hiredCollapse allboolean  
  **Default**false  
* rejectedCollapse allboolean  
  **Default**false

**CandidateListWithApplicationsOut**Collapse allobject

* photo\_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* uuidstringuuid  
* statusCollapse allstring≤ 255 characters  
  **Default**"in\_progress"  
* status\_dataCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* first\_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 100 characters  
  * \#1null  
*   
* last\_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 150 characters  
  * \#1null  
*   
* emailCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 254 characters  
  * \#1null  
*   
* phonestring≤ 20 characters  
* photoCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* taglineCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* summary\_shortCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* summary\_longCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* createdstringdate-time  
* updatedstringdate-time  
* in\_poolCollapse allboolean  
  **Default**false  
* applicationsCollapse allarray\<object\>  
  ItemsCollapse allobject  
  * positionCollapse allobject  
    * uuidstringuuid  
    * namestring≤ 255 characters  
    * descriptionstring  
    * locationCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 255 characters  
      * \#1null  
    *   
    * join\_dateCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0stringdate  
      * \#1null  
    *   
    * public\_urlCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * integration\_position\_idCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 255 characters  
      * \#1null  
    *   
    * candidate\_criteriaCollapse all(string | null)  
      Criteria for candidate analysis and scoring  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * candidate\_criteria\_structuredCollapse all(object | null)  
      Structured criteria for candidate analysis and scoring  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * killer\_criteriaCollapse all(object | null)  
      Prescreening criteria for candidate elimination before the scoring  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * description\_expandedCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * createdstringdate-time  
    * updatedstringdate-time  
    * statusCollapse allstring≤ 255 characters  
      **Default**"draft"  
  *   
  * statusCollapse allobject  
    * client\_idCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)  
      * \#0integer  
      * \#1null  
    *   
    * uuidstringuuid  
    * namestring≤ 255 characters  
    * orderCollapse allinteger  
      **Default**0  
    * clientinteger  
    * hiredCollapse allboolean  
      **Default**false  
    * rejectedCollapse allboolean  
      **Default**false  
  *   
  * uuidstringuuid  
  * candidateinteger  
  * match\_scoreCollapse allinteger  
    **Default**0  
  * match\_reasonCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * key\_positive\_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * key\_negative\_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * skills\_scoreCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * createdstringdate-time  
  * updatedstringdate-time  
* 

**PagedCandidateListWithApplicationsOut**Collapse allobject

* itemsCollapse allarray\<object\>  
  ItemsCollapse allobject  
  * photo\_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * uuidstringuuid  
  * statusCollapse allstring≤ 255 characters  
    **Default**"in\_progress"  
  * status\_dataCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * first\_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 100 characters  
    * \#1null  
  *   
  * last\_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 150 characters  
    * \#1null  
  *   
  * emailCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 254 characters  
    * \#1null  
  *   
  * phonestring≤ 20 characters  
  * photoCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * taglineCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * summary\_shortCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * summary\_longCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * createdstringdate-time  
  * updatedstringdate-time  
  * in\_poolCollapse allboolean  
    **Default**false  
  * applicationsCollapse allarray\<object\>  
    ItemsCollapse allobject  
    * positionCollapse allobject  
      * uuidstringuuid  
      * namestring≤ 255 characters  
      * descriptionstring  
      * locationCollapse all(string | null)  
        **Any of**Collapse all(string | null)  
        * \#0string≤ 255 characters  
        * \#1null  
      *   
      * join\_dateCollapse all(string | null)  
        **Any of**Collapse all(string | null)  
        * \#0stringdate  
        * \#1null  
      *   
      * public\_urlCollapse all(string | null)  
        **Any of**Collapse all(string | null)  
        * \#0string  
        * \#1null  
      *   
      * integration\_position\_idCollapse all(string | null)  
        **Any of**Collapse all(string | null)  
        * \#0string≤ 255 characters  
        * \#1null  
      *   
      * candidate\_criteriaCollapse all(string | null)  
        Criteria for candidate analysis and scoring  
        **Any of**Collapse all(string | null)  
        * \#0string  
        * \#1null  
      *   
      * candidate\_criteria\_structuredCollapse all(object | null)  
        Structured criteria for candidate analysis and scoring  
        **Any of**Collapse all(object | null)  
        * \#0object  
        * \#1null  
      *   
      * killer\_criteriaCollapse all(object | null)  
        Prescreening criteria for candidate elimination before the scoring  
        **Any of**Collapse all(object | null)  
        * \#0object  
        * \#1null  
      *   
      * description\_expandedCollapse all(string | null)  
        **Any of**Collapse all(string | null)  
        * \#0string  
        * \#1null  
      *   
      * createdstringdate-time  
      * updatedstringdate-time  
      * statusCollapse allstring≤ 255 characters  
        **Default**"draft"  
    *   
    * statusCollapse allobject  
      * client\_idCollapse all(integer | null)  
        **Any of**Collapse all(integer | null)  
        * \#0integer  
        * \#1null  
      *   
      * uuidstringuuid  
      * namestring≤ 255 characters  
      * orderCollapse allinteger  
        **Default**0  
      * clientinteger  
      * hiredCollapse allboolean  
        **Default**false  
      * rejectedCollapse allboolean  
        **Default**false  
    *   
    * uuidstringuuid  
    * candidateinteger  
    * match\_scoreCollapse allinteger  
      **Default**0  
    * match\_reasonCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * key\_positive\_pointsCollapse all(object | null)  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * key\_negative\_pointsCollapse all(object | null)  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * skills\_scoreCollapse all(object | null)  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * createdstringdate-time  
    * updatedstringdate-time  
  *   
*   
* countinteger

**ReducedPositionOut**Collapse allobject

* uuidstringuuid  
* namestring≤ 255 characters  
* descriptionstring  
* locationCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 255 characters  
  * \#1null  
*   
* join\_dateCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0stringdate  
  * \#1null  
*   
* public\_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* integration\_position\_idCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 255 characters  
  * \#1null  
*   
* candidate\_criteriaCollapse all(string | null)  
  Criteria for candidate analysis and scoring  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* candidate\_criteria\_structuredCollapse all(object | null)  
  Structured criteria for candidate analysis and scoring  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* killer\_criteriaCollapse all(object | null)  
  Prescreening criteria for candidate elimination before the scoring  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* description\_expandedCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* createdstringdate-time  
* updatedstringdate-time  
* statusCollapse allstring≤ 255 characters  
  **Default**"draft"

**CandidateDetailWithApplicationsOut**Collapse allobject

* photo\_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* cv\_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* integration\_detail\_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* uuidstringuuid  
* statusCollapse allstring≤ 255 characters  
  **Default**"in\_progress"  
* status\_dataCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* first\_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 100 characters  
  * \#1null  
*   
* last\_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 150 characters  
  * \#1null  
*   
* emailCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 254 characters  
  * \#1null  
*   
* phonestring≤ 20 characters  
* photoCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* taglineCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* summary\_shortCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* summary\_longCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* dataCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* createdstringdate-time  
* updatedstringdate-time  
* in\_poolCollapse allboolean  
  **Default**false  
* applicationsCollapse allarray\<object\>  
  ItemsCollapse allobject  
  * positionCollapse allobject  
    * uuidstringuuid  
    * namestring≤ 255 characters  
    * descriptionstring  
    * locationCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 255 characters  
      * \#1null  
    *   
    * join\_dateCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0stringdate  
      * \#1null  
    *   
    * public\_urlCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * integration\_position\_idCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 255 characters  
      * \#1null  
    *   
    * candidate\_criteriaCollapse all(string | null)  
      Criteria for candidate analysis and scoring  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * candidate\_criteria\_structuredCollapse all(object | null)  
      Structured criteria for candidate analysis and scoring  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * killer\_criteriaCollapse all(object | null)  
      Prescreening criteria for candidate elimination before the scoring  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * description\_expandedCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * createdstringdate-time  
    * updatedstringdate-time  
    * statusCollapse allstring≤ 255 characters  
      **Default**"draft"  
  *   
  * statusCollapse allobject  
    * client\_idCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)  
      * \#0integer  
      * \#1null  
    *   
    * uuidstringuuid  
    * namestring≤ 255 characters  
    * orderCollapse allinteger  
      **Default**0  
    * clientinteger  
    * hiredCollapse allboolean  
      **Default**false  
    * rejectedCollapse allboolean  
      **Default**false  
  *   
  * uuidstringuuid  
  * candidateinteger  
  * match\_scoreCollapse allinteger  
    **Default**0  
  * match\_reasonCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * key\_positive\_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * key\_negative\_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * skills\_scoreCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * createdstringdate-time  
  * updatedstringdate-time  
*   
* notesCollapse allarray\<object\>  
  ItemsCollapse allobject  
  * userCollapse allobject  
    * emailCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 254 characters  
      * \#1null  
    *   
    * first\_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 150 characters  
      * \#1null  
    *   
    * last\_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 150 characters  
      * \#1null  
    *   
  *   
  * uuidstringuuid  
  * candidateinteger  
  * notestring  
  * createdstringdate-time  
  * updatedstringdate-time  
* 

**CandidateNoteOut**Collapse allobject

* userCollapse allobject  
  * emailCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 254 characters  
    * \#1null  
  *   
  * first\_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 150 characters  
    * \#1null  
  *   
  * last\_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 150 characters  
    * \#1null  
  *   
*   
* uuidstringuuid  
* candidateinteger  
* notestring  
* createdstringdate-time  
* updatedstringdate-time

**CandidateDetailOut**Collapse allobject

* photo\_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* cv\_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* integration\_detail\_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* uuidstringuuid  
* statusCollapse allstring≤ 255 characters  
  **Default**"in\_progress"  
* status\_dataCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* first\_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 100 characters  
  * \#1null  
*   
* last\_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 150 characters  
  * \#1null  
*   
* emailCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 254 characters  
  * \#1null  
*   
* phonestring≤ 20 characters  
* photoCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* taglineCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* summary\_shortCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* summary\_longCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* dataCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* createdstringdate-time  
* updatedstringdate-time  
* in\_poolCollapse allboolean  
  **Default**false

**CandidateIn**Collapse allobject

* in\_poolCollapse all(boolean | null)  
  **Any of**Collapse all(boolean | null)  
  * \#0boolean  
  * \#1null  
* 

**ApplicationListOut**Collapse allobject

* candidateCollapse allobject  
  * photo\_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * uuidstringuuid  
  * statusCollapse allstring≤ 255 characters  
    **Default**"in\_progress"  
  * status\_dataCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * first\_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 100 characters  
    * \#1null  
  *   
  * last\_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 150 characters  
    * \#1null  
  *   
  * emailCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 254 characters  
    * \#1null  
  *   
  * phonestring≤ 20 characters  
  * photoCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * taglineCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * summary\_shortCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * summary\_longCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * createdstringdate-time  
  * updatedstringdate-time  
  * in\_poolCollapse allboolean  
    **Default**false  
*   
* positionCollapse allobject  
  * uuidstringuuid  
  * namestring≤ 255 characters  
  * descriptionstring  
  * locationCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 255 characters  
    * \#1null  
  *   
  * join\_dateCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0stringdate  
    * \#1null  
  *   
  * public\_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * integration\_position\_idCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 255 characters  
    * \#1null  
  *   
  * candidate\_criteriaCollapse all(string | null)  
    Criteria for candidate analysis and scoring  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * candidate\_criteria\_structuredCollapse all(object | null)  
    Structured criteria for candidate analysis and scoring  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * killer\_criteriaCollapse all(object | null)  
    Prescreening criteria for candidate elimination before the scoring  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * description\_expandedCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * createdstringdate-time  
  * updatedstringdate-time  
  * statusCollapse allstring≤ 255 characters  
    **Default**"draft"  
  * total\_candidatesCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)  
    * \#0integer  
    * \#1null  
  *   
  * integrationCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0 IntegrationOutCollapse allobject  
      * serviceCollapse allobject  
        * uuidstringuuid  
        * namestring≤ 250 characters  
        * logoCollapse all(string | null)  
          **Any of**Collapse all(string | null)  
          * \#0string  
          * \#1null  
        *   
        * iconCollapse all(string | null)  
          **Any of**Collapse all(string | null)  
          * \#0string  
          * \#1null  
        *   
        * descriptionCollapse all(string | null)  
          **Any of**Collapse all(string | null)  
          * \#0string  
          * \#1null  
        *   
      *   
      * client\_idCollapse all(integer | null)  
        **Any of**Collapse all(integer | null)  
        * \#0integer  
        * \#1null  
      *   
      * infojobs\_integrationCollapse all(object | null)  
        **Any of**Collapse all(object | null)  
        * \#0 InfojobsIntegrationOutCollapse allobject  
          * required\_fields\_schemaCollapse all(object | null)  
            **Any of**Collapse all(object | null)  
            * \#0object  
            * \#1null  
          *   
          * expiration\_daysCollapse allinteger  
            **Default**30  
        *   
        * \#1null  
      *   
      * uuidstringuuid  
      * clientinteger  
      * activeCollapse allboolean  
        **Default**true  
    *   
    * \#1null  
  *   
*   
* statusCollapse allobject  
  * client\_idCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)  
    * \#0integer  
    * \#1null  
  *   
  * uuidstringuuid  
  * namestring≤ 255 characters  
  * orderCollapse allinteger  
    **Default**0  
  * clientinteger  
  * hiredCollapse allboolean  
    **Default**false  
  * rejectedCollapse allboolean  
    **Default**false  
*   
* uuidstringuuid  
* match\_scoreCollapse allinteger  
  **Default**0  
* match\_reasonCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* key\_positive\_pointsCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* key\_negative\_pointsCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* skills\_scoreCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* createdstringdate-time  
* updatedstringdate-time

**CandidateListOut**Collapse allobject

* photo\_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* uuidstringuuid  
* statusCollapse allstring≤ 255 characters  
  **Default**"in\_progress"  
* status\_dataCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* first\_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 100 characters  
  * \#1null  
*   
* last\_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 150 characters  
  * \#1null  
*   
* emailCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 254 characters  
  * \#1null  
*   
* phonestring≤ 20 characters  
* photoCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* taglineCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* summary\_shortCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* summary\_longCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* createdstringdate-time  
* updatedstringdate-time  
* in\_poolCollapse allboolean  
  **Default**false

**PaginatedApplicationListOut**Collapse allobject

* itemsCollapse allarray\<object\>  
  ItemsCollapse allobject  
  * candidateCollapse allobject  
    * photo\_urlCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * uuidstringuuid  
    * statusCollapse allstring≤ 255 characters  
      **Default**"in\_progress"  
    * status\_dataCollapse all(object | null)  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * first\_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 100 characters  
      * \#1null  
    *   
    * last\_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 150 characters  
      * \#1null  
    *   
    * emailCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 254 characters  
      * \#1null  
    *   
    * phonestring≤ 20 characters  
    * photoCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * taglineCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * summary\_shortCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * summary\_longCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * createdstringdate-time  
    * updatedstringdate-time  
    * in\_poolCollapse allboolean  
      **Default**false  
  *   
  * positionCollapse allobject  
    * uuidstringuuid  
    * namestring≤ 255 characters  
    * descriptionstring  
    * locationCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 255 characters  
      * \#1null  
    *   
    * join\_dateCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0stringdate  
      * \#1null  
    *   
    * public\_urlCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * integration\_position\_idCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 255 characters  
      * \#1null  
    *   
    * candidate\_criteriaCollapse all(string | null)  
      Criteria for candidate analysis and scoring  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * candidate\_criteria\_structuredCollapse all(object | null)  
      Structured criteria for candidate analysis and scoring  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * killer\_criteriaCollapse all(object | null)  
      Prescreening criteria for candidate elimination before the scoring  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * description\_expandedCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * createdstringdate-time  
    * updatedstringdate-time  
    * statusCollapse allstring≤ 255 characters  
      **Default**"draft"  
    * total\_candidatesCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)  
      * \#0integer  
      * \#1null  
    *   
    * integrationCollapse all(object | null)  
      **Any of**Collapse all(object | null)  
      * \#0 IntegrationOutCollapse allobject  
        * serviceCollapse allobject  
          * uuidstringuuid  
          * namestring≤ 250 characters  
          * logoCollapse all(string | null)  
            **Any of**Collapse all(string | null)  
            * \#0string  
            * \#1null  
          *   
          * iconCollapse all(string | null)  
            **Any of**Collapse all(string | null)  
            * \#0string  
            * \#1null  
          *   
          * descriptionCollapse all(string | null)  
            **Any of**Collapse all(string | null)  
            * \#0string  
            * \#1null  
          *   
        *   
        * client\_idCollapse all(integer | null)  
          **Any of**Collapse all(integer | null)  
          * \#0integer  
          * \#1null  
        *   
        * infojobs\_integrationCollapse all(object | null)  
          **Any of**Collapse all(object | null)  
          * \#0 InfojobsIntegrationOutCollapse allobject  
            * required\_fields\_schemaCollapse all(object | null)  
              **Any of**Collapse all(object | null)  
              * \#0object  
              * \#1null  
            *   
            * expiration\_daysCollapse allinteger  
              **Default**30  
          *   
          * \#1null  
        *   
        * uuidstringuuid  
        * clientinteger  
        * activeCollapse allboolean  
          **Default**true  
      *   
      * \#1null  
    *   
  *   
  * statusCollapse allobject  
    * client\_idCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)  
      * \#0integer  
      * \#1null  
    *   
    * uuidstringuuid  
    * namestring≤ 255 characters  
    * orderCollapse allinteger  
      **Default**0  
    * clientinteger  
    * hiredCollapse allboolean  
      **Default**false  
    * rejectedCollapse allboolean  
      **Default**false  
  *   
  * uuidstringuuid  
  * match\_scoreCollapse allinteger  
    **Default**0  
  * match\_reasonCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * key\_positive\_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * key\_negative\_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * skills\_scoreCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * createdstringdate-time  
  * updatedstringdate-time  
*   
* countinteger

**PagedApplicationListOut**Collapse allobject

* itemsCollapse allarray\<object\>  
  ItemsCollapse allobject  
  * candidateCollapse allobject  
    * photo\_urlCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * uuidstringuuid  
    * statusCollapse allstring≤ 255 characters  
      **Default**"in\_progress"  
    * status\_dataCollapse all(object | null)  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * first\_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 100 characters  
      * \#1null  
    *   
    * last\_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 150 characters  
      * \#1null  
    *   
    * emailCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 254 characters  
      * \#1null  
    *   
    * phonestring≤ 20 characters  
    * photoCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * taglineCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * summary\_shortCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * summary\_longCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * createdstringdate-time  
    * updatedstringdate-time  
    * in\_poolCollapse allboolean  
      **Default**false  
  *   
  * positionCollapse allobject  
    * uuidstringuuid  
    * namestring≤ 255 characters  
    * descriptionstring  
    * locationCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 255 characters  
      * \#1null  
    *   
    * join\_dateCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0stringdate  
      * \#1null  
    *   
    * public\_urlCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * integration\_position\_idCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 255 characters  
      * \#1null  
    *   
    * candidate\_criteriaCollapse all(string | null)  
      Criteria for candidate analysis and scoring  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * candidate\_criteria\_structuredCollapse all(object | null)  
      Structured criteria for candidate analysis and scoring  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * killer\_criteriaCollapse all(object | null)  
      Prescreening criteria for candidate elimination before the scoring  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * description\_expandedCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * createdstringdate-time  
    * updatedstringdate-time  
    * statusCollapse allstring≤ 255 characters  
      **Default**"draft"  
    * total\_candidatesCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)  
      * \#0integer  
      * \#1null  
    *   
    * integrationCollapse all(object | null)  
      **Any of**Collapse all(object | null)  
      * \#0 IntegrationOutCollapse allobject  
        * serviceCollapse allobject  
          * uuidstringuuid  
          * namestring≤ 250 characters  
          * logoCollapse all(string | null)  
            **Any of**Collapse all(string | null)  
            * \#0string  
            * \#1null  
          *   
          * iconCollapse all(string | null)  
            **Any of**Collapse all(string | null)  
            * \#0string  
            * \#1null  
          *   
          * descriptionCollapse all(string | null)  
            **Any of**Collapse all(string | null)  
            * \#0string  
            * \#1null  
          *   
        *   
        * client\_idCollapse all(integer | null)  
          **Any of**Collapse all(integer | null)  
          * \#0integer  
          * \#1null  
        *   
        * infojobs\_integrationCollapse all(object | null)  
          **Any of**Collapse all(object | null)  
          * \#0 InfojobsIntegrationOutCollapse allobject  
            * required\_fields\_schemaCollapse all(object | null)  
              **Any of**Collapse all(object | null)  
              * \#0object  
              * \#1null  
            *   
            * expiration\_daysCollapse allinteger  
              **Default**30  
          *   
          * \#1null  
        *   
        * uuidstringuuid  
        * clientinteger  
        * activeCollapse allboolean  
          **Default**true  
      *   
      * \#1null  
    *   
  *   
  * statusCollapse allobject  
    * client\_idCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)  
      * \#0integer  
      * \#1null  
    *   
    * uuidstringuuid  
    * namestring≤ 255 characters  
    * orderCollapse allinteger  
      **Default**0  
    * clientinteger  
    * hiredCollapse allboolean  
      **Default**false  
    * rejectedCollapse allboolean  
      **Default**false  
  *   
  * uuidstringuuid  
  * match\_scoreCollapse allinteger  
    **Default**0  
  * match\_reasonCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * key\_positive\_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * key\_negative\_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * skills\_scoreCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * createdstringdate-time  
  * updatedstringdate-time  
*   
* countinteger

**AnswerOut**Collapse allobject

* uuidstringuuid  
* answerstring  
* createdstringdate-time  
* updatedstringdate-time

**ApplicationDetailOut**Collapse allobject

* candidateCollapse allobject  
  * photo\_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * cv\_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * integration\_detail\_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * uuidstringuuid  
  * statusCollapse allstring≤ 255 characters  
    **Default**"in\_progress"  
  * status\_dataCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * first\_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 100 characters  
    * \#1null  
  *   
  * last\_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 150 characters  
    * \#1null  
  *   
  * emailCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 254 characters  
    * \#1null  
  *   
  * phonestring≤ 20 characters  
  * photoCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * taglineCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * summary\_shortCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * summary\_longCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * dataCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * createdstringdate-time  
  * updatedstringdate-time  
  * in\_poolCollapse allboolean  
    **Default**false  
*   
* positionCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0 PositionOutExpand allobject  
  * \#1null  
*   
* statusCollapse allobject  
  * client\_idCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)  
    * \#0integer  
    * \#1null  
  *   
  * uuidstringuuid  
  * namestring≤ 255 characters  
  * orderCollapse allinteger  
    **Default**0  
  * clientinteger  
  * hiredCollapse allboolean  
    **Default**false  
  * rejectedCollapse allboolean  
    **Default**false  
*   
* notesCollapse allarray\<object\>  
  ItemsCollapse allobject  
  * userCollapse allobject  
    * emailCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 254 characters  
      * \#1null  
    *   
    * first\_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 150 characters  
      * \#1null  
    *   
    * last\_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string≤ 150 characters  
      * \#1null  
    *   
  *   
  * uuidstringuuid  
  * applicationinteger  
  * notestring  
  * createdstringdate-time  
  * updatedstringdate-time  
*   
* question\_answersCollapse allarray\<object\>  
  ItemsCollapse allobject  
  * questionCollapse allobject  
    * position\_idCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)  
      * \#0integer  
      * \#1null  
    *   
    * application\_statusCollapse allobject  
      * client\_idCollapse all(integer | null)  
        **Any of**Collapse all(integer | null)  
        * \#0integer  
        * \#1null  
      *   
      * uuidstringuuid  
      * namestring≤ 255 characters  
      * orderCollapse allinteger  
        **Default**0  
      * clientinteger  
      * hiredCollapse allboolean  
        **Default**false  
      * rejectedCollapse allboolean  
        **Default**false  
    *   
    * uuidstringuuid  
    * questionstring  
    * orderCollapse allinteger  
      **Default**0  
  *   
  * answerCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0 AnswerOutCollapse allobject  
      * uuidstringuuid  
      * answerstring  
      * createdstringdate-time  
      * updatedstringdate-time  
    *   
    * \#1null  
  *   
  * rendered\_questionCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
* **Default**empty array  
* uuidstringuuid  
* match\_scoreCollapse allinteger  
  **Default**0  
* match\_reasonCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* key\_positive\_pointsCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* key\_negative\_pointsCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* skills\_scoreCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* detailed\_evaluationCollapse all(object | null)  
  Detailed evaluation of the candidate based on scoring system  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* createdstringdate-time  
* updatedstringdate-time

**ApplicationNoteOut**Collapse allobject

* userCollapse allobject  
  * emailCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 254 characters  
    * \#1null  
  *   
  * first\_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 150 characters  
    * \#1null  
  *   
  * last\_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 150 characters  
    * \#1null  
  *   
*   
* uuidstringuuid  
* applicationinteger  
* notestring  
* createdstringdate-time  
* updatedstringdate-time

**QuestionAnswerOut**Collapse allobject

* questionCollapse allobject  
  * position\_idCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)  
    * \#0integer  
    * \#1null  
  *   
  * application\_statusCollapse allobject  
    * client\_idCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)  
      * \#0integer  
      * \#1null  
    *   
    * uuidstringuuid  
    * namestring≤ 255 characters  
    * orderCollapse allinteger  
      **Default**0  
    * clientinteger  
    * hiredCollapse allboolean  
      **Default**false  
    * rejectedCollapse allboolean  
      **Default**false  
  *   
  * uuidstringuuid  
  * questionstring  
  * orderCollapse allinteger  
    **Default**0  
*   
* answerCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0 AnswerOutExpand allobject  
  * \#1null  
*   
* rendered\_questionCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
* 

**QuestionOut**Collapse allobject

* position\_idCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)  
  * \#0integer  
  * \#1null  
*   
* application\_statusCollapse allobject  
  * client\_idCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)  
    * \#0integer  
    * \#1null  
  *   
  * uuidstringuuid  
  * namestring≤ 255 characters  
  * orderCollapse allinteger  
    **Default**0  
  * clientinteger  
  * hiredCollapse allboolean  
    **Default**false  
  * rejectedCollapse allboolean  
    **Default**false  
*   
* uuidstringuuid  
* questionstring  
* orderCollapse allinteger  
  **Default**0

**ApplicationIn**Collapse allobject

* status\_uuidstringuuid  
* uuidstringuuid

**ConversationFilterSchema**Collapse allobject

* conversation\_typeCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0Collapse allstring  
    **Enum**Collapse allarray  
    * **\#0**"all"  
    * **\#1**"application"  
  *   
  * \#1null  
* 

**ConversationApplicationOut**Collapse allobject

* uuidstringuuid  
* positionCollapse allobject  
  * uuidstringuuid  
  * namestring≤ 255 characters  
  * descriptionstring  
  * locationCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 255 characters  
    * \#1null  
  *   
  * join\_dateCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0stringdate  
    * \#1null  
  *   
  * public\_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * integration\_position\_idCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 255 characters  
    * \#1null  
  *   
  * candidate\_criteriaCollapse all(string | null)  
    Criteria for candidate analysis and scoring  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * candidate\_criteria\_structuredCollapse all(object | null)  
    Structured criteria for candidate analysis and scoring  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * killer\_criteriaCollapse all(object | null)  
    Prescreening criteria for candidate elimination before the scoring  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * description\_expandedCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * createdstringdate-time  
  * updatedstringdate-time  
  * statusCollapse allstring≤ 255 characters  
    **Default**"draft"  
* 

**ConversationOut**Collapse allobject

* messagesCollapse allarray\<object\>  
  Itemsobject  
* applicationCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0 ConversationApplicationOutExpand allobject  
  * \#1null  
*   
* uuidstringuuid  
* channelCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 255 characters  
  * \#1null  
*   
* summaryCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* statusCollapse allstring≤ 255 characters  
  **Default**"pending"  
* twilio\_sidCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 100 characters  
  * \#1null  
*   
* createdstringdate-time  
* updatedstringdate-time

**DocumentOut**Collapse allobject

* uuidstringuuid  
* namestring≤ 255 characters  
* fileCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* createdstringdate-time  
* updatedstringdate-time

**EventOut**Collapse allobject

* uuidstringuuid  
* codestring≤ 255 characters  
* candidateCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)  
  * \#0integer  
  * \#1null  
*   
* applicationCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)  
  * \#0integer  
  * \#1null  
*   
* conversationCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)  
  * \#0integer  
  * \#1null  
*   
* dataobject  
* createdstringdate-time  
* updatedstringdate-time

**PositionCriteriaSuggestionOut**Collapse allobject

* suggested\_criteriastring

**PositionDescriptionSuggestionOut**Collapse allobject

* suggested\_descriptionstring

**AttributeTypeOut**Collapse allobject

* uuidstringuuid  
* codestring≤ 255 characters  
* namestring≤ 255 characters  
* descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* data\_schemaCollapse all(object | null)  
  Schema for the attribute  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* prompt\_templateCollapse all(string | null)  
  Template to render the attribute in prompts  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* createdstringdate-time  
* updatedstringdate-time

**PagedAttributeTypeOut**Collapse allobject

* itemsCollapse allarray\<object\>  
  ItemsCollapse allobject  
  * uuidstringuuid  
  * codestring≤ 255 characters  
  * namestring≤ 255 characters  
  * descriptionCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * data\_schemaCollapse all(object | null)  
    Schema for the attribute  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * prompt\_templateCollapse all(string | null)  
    Template to render the attribute in prompts  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * createdstringdate-time  
  * updatedstringdate-time  
*   
* countinteger

**AttributeFilterSchema**Collapse allobject

* type\_uuidCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* qCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
* 

**AttributeOut**Collapse allobject

* uuidstringuuid  
* namestring≤ 255 characters  
* dataCollapse all(object | null)  
  Data for the attribute  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* createdstringdate-time  
* updatedstringdate-time  
* typeCollapse allobject  
  * uuidstringuuid  
  * codestring≤ 255 characters  
  * namestring≤ 255 characters  
  * descriptionCollapse all(string | null)  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * data\_schemaCollapse all(object | null)  
    Schema for the attribute  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * prompt\_templateCollapse all(string | null)  
    Template to render the attribute in prompts  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * createdstringdate-time  
  * updatedstringdate-time  
*   
* total\_positionsinteger

**PagedAttributeOut**Collapse allobject

* itemsCollapse allarray\<object\>  
  ItemsCollapse allobject  
  * uuidstringuuid  
  * namestring≤ 255 characters  
  * dataCollapse all(object | null)  
    Data for the attribute  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * createdstringdate-time  
  * updatedstringdate-time  
  * typeCollapse allobject  
    * uuidstringuuid  
    * codestring≤ 255 characters  
    * namestring≤ 255 characters  
    * descriptionCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * data\_schemaCollapse all(object | null)  
      Schema for the attribute  
      **Any of**Collapse all(object | null)  
      * \#0object  
      * \#1null  
    *   
    * prompt\_templateCollapse all(string | null)  
      Template to render the attribute in prompts  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * createdstringdate-time  
    * updatedstringdate-time  
  *   
  * total\_positionsinteger  
*   
* countinteger

**ApplicationNoteIn**Collapse allobject

* notestring

**CandidateNoteIn**Collapse allobject

* notestring

**IntegrationFilterSchema**Collapse allobject

* service\_\_can\_post\_jobsCollapse all(boolean | null)  
  **Any of**Collapse all(boolean | null)  
  * \#0boolean  
  * \#1null  
* 

**CreatePositionSchema**Collapse allobject

* position\_uuidstring  
* integration\_dataobject

**ParseJobDescriptionSchema**Collapse allobject

* job\_descriptionstring  
* job\_titlestring  
* killer\_criteriaCollapse all(array\<string\> | null)  
  **Any of**Collapse all(array\<string\> | null)  
  * \#0Collapse allarray\<string\>  
    Itemsstring  
  * \#1null  
*   
* candidate\_questionsCollapse all(array\<string\> | null)  
  **Any of**Collapse all(array\<string\> | null)  
  * \#0Collapse allarray\<string\>  
    Itemsstring  
  * \#1null  
* 

**GenerateQuestionsFromKillerCriteriaSchema**Collapse allobject

* killer\_criteriaCollapse allarray\<string\>  
  Itemsstring

**IntegrationPositionOut**Collapse allobject

* integrationCollapse allobject  
  * serviceCollapse allobject  
    * uuidstringuuid  
    * namestring≤ 250 characters  
    * logoCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * iconCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * descriptionCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
  *   
  * client\_idCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)  
    * \#0integer  
    * \#1null  
  *   
  * infojobs\_integrationCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0 InfojobsIntegrationOutCollapse allobject  
      * required\_fields\_schemaCollapse all(object | null)  
        **Any of**Collapse all(object | null)  
        * \#0object  
        * \#1null  
      *   
      * expiration\_daysCollapse allinteger  
        **Default**30  
    *   
    * \#1null  
  *   
  * uuidstringuuid  
  * clientinteger  
  * activeCollapse allboolean  
    **Default**true  
*   
* uuidstringuuid  
* positioninteger  
* statusstring≤ 250 characters  
* integration\_dataobject  
* integration\_position\_idCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 250 characters  
  * \#1null  
*   
* createdstringdate-time

**UpdateIntegrationPositionSchema**Collapse allobject

* statusCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* integration\_dataCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
* 

**CVUploadOut**Collapse allobject

* uuidstringuuid  
* statusCollapse allstring≤ 255 characters  
  **Default**"in\_progress"  
* timezoneCollapse allstring≤ 50 characters  
  Select your timezone  
  **Default**"UTC"  
* languageCollapse allstring≤ 5 characters  
  Preferred language for candidate  
  **Default**"en-us"

**Type**Collapse allstring

**Enum**Collapse allarray

* **\#0**"hiring"  
* **\#1**"onboarding"  
* **\#2**"experience"

**WorkflowSchema**Collapse allobject

* idCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)  
  * \#0integer  
  * \#1null  
*   
* typeCollapse allstring≤ 20 characters  
  **Default**"hiring"  
* namestring≤ 255 characters  
* descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* is\_activeCollapse allboolean  
  **Default**true  
* trigger\_eventstring≤ 255 characters

**WorkflowStepSchema**Collapse allobject

* previous\_step\_idCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)  
  * \#0integer  
  * \#1null  
*   
* action\_displaystring  
* idCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)  
  * \#0integer  
  * \#1null  
*   
* action\_typestring≤ 50 characters  
* action\_configCollapse all(object | null)  
  Configuration parameters for the action  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* conditionCollapse all(string | null)  
  Entry condition for the step. Example: 'application.status \== 'submitted'  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 255 characters  
  * \#1null  
*   
* is\_activeCollapse allboolean  
  **Default**true

**KnowledgeBaseOutSchema**Collapse allobject

* uuidstringuuid  
* namestring≤ 250 characters  
* descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* activeCollapse allboolean  
  **Default**true

**CriteriaComplianceSchemaOut**Collapse allobject

* alignedboolean  
* reasonstring  
* recommendationsCollapse allarray\<string\>  
  Itemsstring

**CriteriaComplianceSchemaIn**Collapse allobject

* criteriastring

**AgentOut**Collapse allobject

* voice\_configCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0 VoiceConfigSchemaExpand allobject  
  * \#1null  
*   
* knowledge\_basesCollapse all(array\<object\> | null)  
  **Any of**Collapse all(array\<object\> | null)  
  * \#0Collapse allarray\<object\>  
    ItemsCollapse allobject  
    * uuidstringuuid  
    * namestring≤ 250 characters  
    * descriptionCollapse all(string | null)  
      **Any of**Collapse all(string | null)  
      * \#0string  
      * \#1null  
    *   
    * activeCollapse allboolean  
      **Default**true  
  *   
  * \#1null  
*   
* numberCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0 NumberOutSchemaExpand allobject  
  * \#1null  
*   
* uuidstringuuid  
* clientinteger  
* namestring≤ 100 characters  
* descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* language\_defaultCollapse allstring≤ 5 characters  
  **Default**"en-us"  
* call\_typeCollapse allstring≤ 50 characters  
  **Default**"inbound"  
* promptCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
* **Default**"The customer's bank account balance is {customer\_balance}. They are based in {customer\_location}."  
* first\_messageCollapse all(string | null)  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
* **Default**"Hi, how can I help you today?"  
* activeCollapse allboolean  
  **Default**true

**NumberOutSchema**Collapse allobject

* uuidstringuuid  
* numberstring≤ 15 characters  
* providerCollapse allstring≤ 100 characters  
  **Default**"twilio"  
* clientinteger

**VoiceConfigSchema**Collapse allobject

* idCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)  
  * \#0integer  
  * \#1null  
*   
* transcription\_modelCollapse allstring≤ 100 characters  
  **Default**"nova-2"  
* languageCollapse allstring≤ 5 characters  
  **Default**"en-us"  
* voice\_idCollapse allstring≤ 100 characters  
  **Default**"iP95p4xoKVk53GoZ742B"  
* optimize\_latencyCollapse allinteger  
  Optimize the latency of the conversation.  
  **Default**3  
* stabilityCollapse all(number | string)  
  Determines how stable the voice is and the randomness between each generation.  
  **Any of**Collapse all(number | string)  
  * \#0number  
  * \#1string  
* **Default**"0.50"  
* similarityCollapse all(number | string)  
  Determines how closely the AI should adhere to the original voice when attempting to replicate it..  
  **Any of**Collapse all(number | string)  
  * \#0number  
  * \#1string  
* **Default**"0.75"  
* styleCollapse all(number | string)  
  Determines the style exaggeration of the voice. This setting attempts to amplify the style of the original speaker.  
  **Any of**Collapse all(number | string)  
  * \#0number  
  * \#1string  
* **Default**"0.1"  
* speaker\_boostCollapse allboolean  
  This setting boosts the similarity to the original speaker..  
  **Default**false  
* tts\_modelCollapse allstring≤ 25 characters  
  The TTS model to use.  
  **Default**"eleven\_flash\_v2\_5"  
* output\_formatCollapse allstring≤ 100 characters  
  The output format of the TTS.  
  **Default**"pcm\_16000"

**AgentToolOut**Collapse allobject

* uuidstringuuid  
* agentinteger  
* toolCollapse allobject  
  * uuidstringuuid  
  * codestring≤ 100 characters  
  * namestring≤ 100 characters  
  * iconCollapse all(string | null)  
    Icon name from lucide.dev  
    **Any of**Collapse all(string | null)  
    * \#0string≤ 100 characters  
    * \#1null  
  *   
  * descriptionCollapse all(string | null)  
    Description of the tool for the LLM  
    **Any of**Collapse all(string | null)  
    * \#0string  
    * \#1null  
  *   
  * propertiesCollapse all(object | null)  
    **Any of**Collapse all(object | null)  
    * \#0object  
    * \#1null  
  *   
  * multipleCollapse allboolean  
    If true, an individual LLM tool will be generated for each property.  
    **Default**false  
*   
* propertiesCollapse all(object | null)  
  Override properties to pass to the tool.  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
* 

**ToolOut**Collapse allobject

* uuidstringuuid  
* codestring≤ 100 characters  
* namestring≤ 100 characters  
* iconCollapse all(string | null)  
  Icon name from lucide.dev  
  **Any of**Collapse all(string | null)  
  * \#0string≤ 100 characters  
  * \#1null  
*   
* descriptionCollapse all(string | null)  
  Description of the tool for the LLM  
  **Any of**Collapse all(string | null)  
  * \#0string  
  * \#1null  
*   
* propertiesCollapse all(object | null)  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
*   
* multipleCollapse allboolean  
  If true, an individual LLM tool will be generated for each property.  
  **Default**false

**AgentToolIn**Collapse allobject

* uuidstringuuid  
* agent\_idinteger  
* tool\_idinteger  
* propertiesCollapse all(object | null)  
  Override properties to pass to the tool.  
  **Any of**Collapse all(object | null)  
  * \#0object  
  * \#1null  
* 

