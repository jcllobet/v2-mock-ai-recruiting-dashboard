**GET**  
[/api/account/clients/](https://yourapiurl/api/docs#/default/account_api_list_clients)

\[  
 {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "code": "string",  
 "domain": "string",  
 "name": "string",  
 "description": "string"  
 }  
\]

[/api/account/clients/](https://yourapiurl/api/docs#/default/account_api_create_client)  
Create Client

Create a new client for the authenticated user

#### **Request body**

**application/json**

- **Example Value**
- Schema

{  
 "candidate_criteria": "",  
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
 "candidate_criteria": "string",  
 "description": "string",  
 "timezone": "UTC",  
 "call_start_time": "09:30:00",  
 "call_end_time": "18:30:00",  
 "language_default": "en-us",  
 "expand_position_description": false,  
 "infer_position_criteria": true,  
 "infer_position_skills": true,  
 "privacy_policy_url": "string",  
 "created": "2025-07-02T08:18:14.720Z",  
 "updated": "2025-07-02T08:18:14.720Z"  
}

[/api/account/clients/{client_uuid}/](https://yourapiurl/api/docs#/default/account_api_get_client)  
Get Client

Get details for a specific client

| Name                               | Description |
| :--------------------------------- | :---------- |
| **client_uuid \*** string _(path)_ |             |

{  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "code": "string",  
 "domain": "string",  
 "name": "string",  
 "candidate_criteria": "string",  
 "description": "string",  
 "timezone": "UTC",  
 "call_start_time": "09:30:00",  
 "call_end_time": "18:30:00",  
 "language_default": "en-us",  
 "expand_position_description": false,  
 "infer_position_criteria": true,  
 "infer_position_skills": true,  
 "privacy_policy_url": "string",  
 "created": "2025-07-02T08:28:02.592Z",  
 "updated": "2025-07-02T08:28:02.592Z"  
}

[/api/account/clients/{client_uuid}/members/](https://yourapiurl/api/docs#/default/account_api_create_client_member)  
Create Client Member

Create a new member for a specific client Only accessible by client admins If user doesn't exist, it will be created If user exists, it will be linked to the client with the specified role Returns the created member and any generated password

Request:

{  
 "email": "string",  
 "first_name": "string",  
 "last_name": "string",  
 "password": "string",  
 "generate_random_password": false,  
 "role": "string"  
}

[/api/hiring/{client_uuid}/kpis](https://yourapiurl/api/docs#/default/hiring_api_controllers_client_kpis)  
Client Kpis

#### **Parameters**

{  
 "total_positions": 0,  
 "total_candidates": 0,  
 "total_conversations": 0  
}

[/api/hiring/{client_uuid}/stats](https://yourapiurl/api/docs#/default/hiring_api_controllers_client_stats)  
Client Stats

#### **Parameters**

{  
 "total_time_saved": 0,  
 "total_time_saved_unit": "string",  
 "total_time_saved_change": 0,  
 "automated_calls": 0,  
 "automated_calls_change": 0,  
 "off_hours_interactions": 0,  
 "off_hours_interactions_change": 0,  
 "cvs_analyzed": 0,  
 "cvs_analyzed_change": 0,  
 "criteria_validations": 0,  
 "criteria_validations_change": 0,  
 "ai_decisions": 0,  
 "ai_decisions_change": 0,  
 "candidates_processed": 0,  
 "candidates_processed_change": 0,  
 "response_time": 0,  
 "response_time_unit": "string",  
 "response_time_change": 0,  
 "conversion_rate": 0,  
 "conversion_rate_unit": "string",  
 "conversion_rate_change": 0,  
 "time_saved_cv_analysis": 0,  
 "time_saved_automated_calls": 0,  
 "time_saved_criteria_validation": 0,  
 "whatsapp_messages_sent": 0,  
 "whatsapp_messages_sent_change": 0,  
 "whatsapp_messages_received": 0,  
 "whatsapp_messages_received_change": 0,  
 "applications_rescored": 0,  
 "applications_rescored_change": 0,  
 "answers_completed": 0,  
 "answers_completed_change": 0,  
 "conversation_hours": 0,  
 "conversation_hours_unit": "string",  
 "conversation_hours_change": 0,  
 "conversation_messages": 0,  
 "conversation_messages_change": 0  
}

[/api/hiring/{client_uuid}/positions](https://yourapiurl/api/docs#/default/hiring_api_controllers_create_position)  
**Create Position**

{  
 "name": "string",  
 "description": "string",  
 "location": "string",  
 "join_date": "2025-07-02",  
 "public_url": "string",  
 "integration_position_id": "string",  
 "candidate_criteria": "string",  
 "description_expanded": "string",  
 "contract_type": "string",  
 "status": "string",  
 "killer_criteria": \[  
 "string"  
 \],  
 "candidate_questions": \[  
 "string"  
 \]  
}

**Response:**

{  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "description": "string",  
 "location": "string",  
 "join_date": "2025-07-02",  
 "public_url": "string",  
 "integration_position_id": "string",  
 "candidate_criteria": "string",  
 "candidate_criteria_structured": {},  
 "killer_criteria": {},  
 "description_expanded": "string",  
 "created": "2025-07-02T08:32:56.916Z",  
 "updated": "2025-07-02T08:32:56.916Z",  
 "status": "draft",  
 "total_candidates": 0,  
 "integration": {  
 "service": {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "logo": "string",  
 "icon": "string",  
 "description": "string"  
 },  
 "client_id": 0,  
 "infojobs_integration": {  
 "required_fields_schema": {},  
 "expiration_days": 30  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "client": 0,  
 "active": true  
 }  
}

[/api/hiring/{client_uuid}/positions](https://yourapiurl/api/docs#/default/hiring_api_controllers_list_positions)  
**List Positions**

| Name                               | Description              |
| :--------------------------------- | :----------------------- | --------------- | --- |
| **client_uuid \*** string _(path)_ |                          |
| **q** string                       | (string                  | null) _(query)_ |     |
| **status** string                  | (string                  | null) _(query)_ |     |
| **attribute_uuid** string          | (string                  | null) _(query)_ |     |
| **limit** integer _(query)_        | **_Default value_ : 10** |
| **offset** integer _(query)_       | **_Default value_ : 0**  |

**Response:**  
{  
 "items": \[  
 {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "description": "string",  
 "location": "string",  
 "join_date": "2025-07-02",  
 "public_url": "string",  
 "integration_position_id": "string",  
 "candidate_criteria": "string",  
 "candidate_criteria_structured": {},  
 "killer_criteria": {},  
 "description_expanded": "string",  
 "created": "2025-07-02T08:33:30.622Z",  
 "updated": "2025-07-02T08:33:30.622Z",  
 "status": "draft",  
 "total_candidates": 0,  
 "integration": {  
 "service": {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "logo": "string",  
 "icon": "string",  
 "description": "string"  
 },  
 "client_id": 0,  
 "infojobs_integration": {  
 "required_fields_schema": {},  
 "expiration_days": 30  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "client": 0,  
 "active": true  
 }  
 }  
 \],  
 "count": 0  
}

[/api/hiring/{client_uuid}/candidates](https://yourapiurl/api/docs#/default/hiring_api_controllers_list_candidates)

| Name                               | Description              |
| :--------------------------------- | :----------------------- | --------------- | ---------------- |
| **client_uuid \*** string _(path)_ |                          |
| **q** string                       | (string                  | null) _(query)_ |                  |
| **status** string                  | (string                  | null) _(query)_ |                  |
| **in_pool** boolean                | (boolean                 | null) _(query)_ | **\--truefalse** |
| **limit** integer _(query)_        | **_Default value_ : 10** |
| **offset** integer _(query)_       | **_Default value_ : 0**  |

**Response:**  
{  
 "items": \[  
 {  
 "photo_url": "string",  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "status": "in_progress",  
 "status_data": {},  
 "first_name": "string",  
 "last_name": "string",  
 "email": "string",  
 "phone": "string",  
 "photo": "string",  
 "tagline": "string",  
 "summary_short": "string",  
 "summary_long": "string",  
 "created": "2025-07-02T08:34:24.000Z",  
 "updated": "2025-07-02T08:34:24.000Z",  
 "in_pool": false,  
 "applications": \[  
 {  
 "position": {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "description": "string",  
 "location": "string",  
 "join_date": "2025-07-02",  
 "public_url": "string",  
 "integration_position_id": "string",  
 "candidate_criteria": "string",  
 "candidate_criteria_structured": {},  
 "killer_criteria": {},  
 "description_expanded": "string",  
 "created": "2025-07-02T08:34:24.000Z",  
 "updated": "2025-07-02T08:34:24.000Z",  
 "status": "draft"  
 },  
 "status": {  
 "client_id": 0,  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "order": 0,  
 "client": 0,  
 "hired": false,  
 "rejected": false  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "candidate": 0,  
 "match_score": 0,  
 "match_reason": "string",  
 "key_positive_points": {},  
 "key_negative_points": {},  
 "skills_score": {},  
 "created": "2025-07-02T08:34:24.000Z",  
 "updated": "2025-07-02T08:34:24.000Z"  
 }  
 \]  
 }  
 \],  
 "count": 0  
}

[/api/hiring/{client_uuid}/candidates/{candidate_uuid}/](https://yourapiurl/api/docs#/default/hiring_api_controllers_get_candidate_applications)  
**Get Candidate Applications**

{  
 "photo_url": "string",  
 "cv_url": "string",  
 "integration_detail_url": "string",  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "status": "in_progress",  
 "status_data": {},  
 "first_name": "string",  
 "last_name": "string",  
 "email": "string",  
 "phone": "string",  
 "photo": "string",  
 "tagline": "string",  
 "summary_short": "string",  
 "summary_long": "string",  
 "data": {},  
 "created": "2025-07-02T08:35:05.011Z",  
 "updated": "2025-07-02T08:35:05.011Z",  
 "in_pool": false,  
 "applications": \[  
 {  
 "position": {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "description": "string",  
 "location": "string",  
 "join_date": "2025-07-02",  
 "public_url": "string",  
 "integration_position_id": "string",  
 "candidate_criteria": "string",  
 "candidate_criteria_structured": {},  
 "killer_criteria": {},  
 "description_expanded": "string",  
 "created": "2025-07-02T08:35:05.011Z",  
 "updated": "2025-07-02T08:35:05.011Z",  
 "status": "draft"  
 },  
 "status": {  
 "client_id": 0,  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "order": 0,  
 "client": 0,  
 "hired": false,  
 "rejected": false  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "candidate": 0,  
 "match_score": 0,  
 "match_reason": "string",  
 "key_positive_points": {},  
 "key_negative_points": {},  
 "skills_score": {},  
 "created": "2025-07-02T08:35:05.011Z",  
 "updated": "2025-07-02T08:35:05.011Z"  
 }  
 \],  
 "notes": \[  
 {  
 "user": {  
 "email": "string",  
 "first_name": "string",  
 "last_name": "string"  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "candidate": 0,  
 "note": "string",  
 "created": "2025-07-02T08:35:05.011Z",  
 "updated": "2025-07-02T08:35:05.011Z"  
 }  
 \]  
}

[/api/hiring/{client_uuid}/positions/{position_uuid}](https://yourapiurl/api/docs#/default/hiring_api_controllers_get_position)

| Name                                 | Description |
| :----------------------------------- | :---------- |
| **client_uuid \*** string _(path)_   |             |
| **position_uuid \*** string _(path)_ |             |

| Code    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Links |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| **200** | **OK Media type application/json Controls Accept header. Example Value Schema** { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "name": "string", "description": "string", "location": "string", "join_date": "2025-07-02", "public_url": "string", "integration_position_id": "string", "candidate_criteria": "string", "candidate_criteria_structured": {}, "killer_criteria": {}, "description_expanded": "string", "created": "2025-07-02T08:35:45.711Z", "updated": "2025-07-02T08:35:45.711Z", "status": "draft", "total_candidates": 0, "integration": { "service": { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "name": "string", "logo": "string", "icon": "string", "description": "string" }, "client_id": 0, "infojobs_integration": { "required_fields_schema": {}, "expiration_days": 30 }, "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "client": 0, "active": true } } |       |

[/api/hiring/{client_uuid}/positions/{position_uuid}](https://yourapiurl/api/docs#/default/hiring_api_controllers_update_position)  
**Update Position**

**Request:**  
{  
 "name": "string",  
 "description": "string",  
 "location": "string",  
 "join_date": "2025-07-02",  
 "public_url": "string",  
 "integration_position_id": "string",  
 "candidate_criteria": "string",  
 "description_expanded": "string",  
 "contract_type": "string",  
 "status": "string",  
 "killer_criteria": \[  
 "string"  
 \],  
 "candidate_questions": \[  
 "string"  
 \]  
}

**Response:**

{  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "description": "string",  
 "location": "string",  
 "join_date": "2025-07-02",  
 "public_url": "string",  
 "integration_position_id": "string",  
 "candidate_criteria": "string",  
 "candidate_criteria_structured": {},  
 "killer_criteria": {},  
 "description_expanded": "string",  
 "created": "2025-07-02T08:36:38.179Z",  
 "updated": "2025-07-02T08:36:38.179Z",  
 "status": "draft",  
 "total_candidates": 0,  
 "integration": {  
 "service": {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "logo": "string",  
 "icon": "string",  
 "description": "string"  
 },  
 "client_id": 0,  
 "infojobs_integration": {  
 "required_fields_schema": {},  
 "expiration_days": 30  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "client": 0,  
 "active": true  
 }  
}

[/api/hiring/{client_uuid}/positions/{position_uuid}/applications/initial](https://yourapiurl/api/docs#/default/hiring_api_controllers_get_initial_position_applications)  
**Get Initial Position Applications**

#### **Parameters**

| Name                                 | Description |
| :----------------------------------- | :---------- | --------------- | ------------------------- |
| **client_uuid \*** string _(path)_   |             |
| **position_uuid \*** string _(path)_ |             |
| **limit** integer                    | (integer    | null) _(query)_ | **_Default value_ : 100** |
| **q** string                         | (string     | null) _(query)_ |                           |
| **status** string                    | (string     | null) _(query)_ |                           |
| **in_pool** boolean                  | (boolean    | null) _(query)_ | **\--truefalse**          |

{  
 "additionalProp1": {  
 "items": \[  
 {  
 "candidate": {  
 "photo_url": "string",  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "status": "in_progress",  
 "status_data": {},  
 "first_name": "string",  
 "last_name": "string",  
 "email": "string",  
 "phone": "string",  
 "photo": "string",  
 "tagline": "string",  
 "summary_short": "string",  
 "summary_long": "string",  
 "created": "2025-07-02T08:37:12.132Z",  
 "updated": "2025-07-02T08:37:12.132Z",  
 "in_pool": false  
 },  
 "position": {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "description": "string",  
 "location": "string",  
 "join_date": "2025-07-02",  
 "public_url": "string",  
 "integration_position_id": "string",  
 "candidate_criteria": "string",  
 "candidate_criteria_structured": {},  
 "killer_criteria": {},  
 "description_expanded": "string",  
 "created": "2025-07-02T08:37:12.132Z",  
 "updated": "2025-07-02T08:37:12.132Z",  
 "status": "draft",  
 "total_candidates": 0,  
 "integration": {  
 "service": {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "logo": "string",  
 "icon": "string",  
 "description": "string"  
 },  
 "client_id": 0,  
 "infojobs_integration": {  
 "required_fields_schema": {},  
 "expiration_days": 30  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "client": 0,  
 "active": true  
 }  
 },  
 "status": {  
 "client_id": 0,  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "order": 0,  
 "client": 0,  
 "hired": false,  
 "rejected": false  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "match_score": 0,  
 "match_reason": "string",  
 "key_positive_points": {},  
 "key_negative_points": {},  
 "skills_score": {},  
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
 "photo_url": "string",  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "status": "in_progress",  
 "status_data": {},  
 "first_name": "string",  
 "last_name": "string",  
 "email": "string",  
 "phone": "string",  
 "photo": "string",  
 "tagline": "string",  
 "summary_short": "string",  
 "summary_long": "string",  
 "created": "2025-07-02T08:37:12.132Z",  
 "updated": "2025-07-02T08:37:12.132Z",  
 "in_pool": false  
 },  
 "position": {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "description": "string",  
 "location": "string",  
 "join_date": "2025-07-02",  
 "public_url": "string",  
 "integration_position_id": "string",  
 "candidate_criteria": "string",  
 "candidate_criteria_structured": {},  
 "killer_criteria": {},  
 "description_expanded": "string",  
 "created": "2025-07-02T08:37:12.132Z",  
 "updated": "2025-07-02T08:37:12.132Z",  
 "status": "draft",  
 "total_candidates": 0,  
 "integration": {  
 "service": {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "logo": "string",  
 "icon": "string",  
 "description": "string"  
 },  
 "client_id": 0,  
 "infojobs_integration": {  
 "required_fields_schema": {},  
 "expiration_days": 30  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "client": 0,  
 "active": true  
 }  
 },  
 "status": {  
 "client_id": 0,  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "order": 0,  
 "client": 0,  
 "hired": false,  
 "rejected": false  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "match_score": 0,  
 "match_reason": "string",  
 "key_positive_points": {},  
 "key_negative_points": {},  
 "skills_score": {},  
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
 "photo_url": "string",  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "status": "in_progress",  
 "status_data": {},  
 "first_name": "string",  
 "last_name": "string",  
 "email": "string",  
 "phone": "string",  
 "photo": "string",  
 "tagline": "string",  
 "summary_short": "string",  
 "summary_long": "string",  
 "created": "2025-07-02T08:37:12.132Z",  
 "updated": "2025-07-02T08:37:12.132Z",  
 "in_pool": false  
 },  
 "position": {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "description": "string",  
 "location": "string",  
 "join_date": "2025-07-02",  
 "public_url": "string",  
 "integration_position_id": "string",  
 "candidate_criteria": "string",  
 "candidate_criteria_structured": {},  
 "killer_criteria": {},  
 "description_expanded": "string",  
 "created": "2025-07-02T08:37:12.132Z",  
 "updated": "2025-07-02T08:37:12.132Z",  
 "status": "draft",  
 "total_candidates": 0,  
 "integration": {  
 "service": {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "logo": "string",  
 "icon": "string",  
 "description": "string"  
 },  
 "client_id": 0,  
 "infojobs_integration": {  
 "required_fields_schema": {},  
 "expiration_days": 30  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "client": 0,  
 "active": true  
 }  
 },  
 "status": {  
 "client_id": 0,  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "order": 0,  
 "client": 0,  
 "hired": false,  
 "rejected": false  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "match_score": 0,  
 "match_reason": "string",  
 "key_positive_points": {},  
 "key_negative_points": {},  
 "skills_score": {},  
 "created": "2025-07-02T08:37:12.132Z",  
 "updated": "2025-07-02T08:37:12.132Z"  
 }  
 \],  
 "count": 0  
 }  
}

[/api/hiring/{client_uuid}/positions/{position_uuid}/applications](https://yourapiurl/api/docs#/default/hiring_api_controllers_get_position_applications)  
**Get Position Applications**

**Request:**

| Name                                 | Description              |
| :----------------------------------- | :----------------------- | --------------- | --- |
| **client_uuid \*** string _(path)_   |                          |
| **position_uuid \*** string _(path)_ |                          |
| **status_uuid** string               | (string                  | null) _(query)_ |     |
| **limit** integer _(query)_          | **_Default value_ : 10** |
| **offset** integer _(query)_         | **_Default value_ : 0**  |

**response:**

{  
 "items": \[  
 {  
 "candidate": {  
 "photo_url": "string",  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "status": "in_progress",  
 "status_data": {},  
 "first_name": "string",  
 "last_name": "string",  
 "email": "string",  
 "phone": "string",  
 "photo": "string",  
 "tagline": "string",  
 "summary_short": "string",  
 "summary_long": "string",  
 "created": "2025-07-02T08:37:57.169Z",  
 "updated": "2025-07-02T08:37:57.169Z",  
 "in_pool": false  
 },  
 "position": {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "description": "string",  
 "location": "string",  
 "join_date": "2025-07-02",  
 "public_url": "string",  
 "integration_position_id": "string",  
 "candidate_criteria": "string",  
 "candidate_criteria_structured": {},  
 "killer_criteria": {},  
 "description_expanded": "string",  
 "created": "2025-07-02T08:37:57.169Z",  
 "updated": "2025-07-02T08:37:57.169Z",  
 "status": "draft",  
 "total_candidates": 0,  
 "integration": {  
 "service": {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "logo": "string",  
 "icon": "string",  
 "description": "string"  
 },  
 "client_id": 0,  
 "infojobs_integration": {  
 "required_fields_schema": {},  
 "expiration_days": 30  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "client": 0,  
 "active": true  
 }  
 },  
 "status": {  
 "client_id": 0,  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "name": "string",  
 "order": 0,  
 "client": 0,  
 "hired": false,  
 "rejected": false  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "match_score": 0,  
 "match_reason": "string",  
 "key_positive_points": {},  
 "key_negative_points": {},  
 "skills_score": {},  
 "created": "2025-07-02T08:37:57.169Z",  
 "updated": "2025-07-02T08:37:57.169Z"  
 }  
 \],  
 "count": 0  
}

[/api/hiring/{client_uuid}/applications/{application_uuid}](https://yourapiurl/api/docs#/default/hiring_api_controllers_get_application)  
**Get Application**

| Name                               | Description |
| :--------------------------------- | :---------- |
| **client_uuid \*** string _(path)_ |             |
| **application_uuid**               |             |

**Response:**

| Code    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Links |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| **200** | **OK Media type application/json Controls Accept header. Example Value Schema** { "candidate": { "photo_url": "string", "cv_url": "string", "integration_detail_url": "string", "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "status": "in_progress", "status_data": {}, "first_name": "string", "last_name": "string", "email": "string", "phone": "string", "photo": "string", "tagline": "string", "summary_short": "string", "summary_long": "string", "data": {}, "created": "2025-07-02T08:38:29.379Z", "updated": "2025-07-02T08:38:29.379Z", "in_pool": false }, "position": { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "name": "string", "description": "string", "location": "string", "join_date": "2025-07-02", "public_url": "string", "integration_position_id": "string", "candidate_criteria": "string", "candidate_criteria_structured": {}, "killer_criteria": {}, "description_expanded": "string", "created": "2025-07-02T08:38:29.379Z", "updated": "2025-07-02T08:38:29.379Z", "status": "draft", "total_candidates": 0, "integration": { "service": { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "name": "string", "logo": "string", "icon": "string", "description": "string" }, "client_id": 0, "infojobs_integration": { "required_fields_schema": {}, "expiration_days": 30 }, "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "client": 0, "active": true } }, "status": { "client_id": 0, "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "name": "string", "order": 0, "client": 0, "hired": false, "rejected": false }, "notes": \[ { "user": { "email": "string", "first_name": "string", "last_name": "string" }, "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "application": 0, "note": "string", "created": "2025-07-02T08:38:29.379Z", "updated": "2025-07-02T08:38:29.379Z" } \], "question_answers": \[\], "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "match_score": 0, "match_reason": "string", "key_positive_points": {}, "key_negative_points": {}, "skills_score": {}, "detailed_evaluation": {}, "created": "2025-07-02T08:38:29.379Z", "updated": "2025-07-02T08:38:29.379Z" } |       |

[/api/hiring/{client_uuid}/applications/{application_uuid}/conversations](https://yourapiurl/api/docs#/default/hiring_api_controllers_get_application_conversations)  
**Get Application Conversations**

**Request:**

| Name                                    | Description |
| :-------------------------------------- | :---------- | --------------- | --- |
| **client_uuid \*** string _(path)_      |             |
| **application_uuid \*** string _(path)_ |             |
| **conversation_type** string            | (string     | null) _(query)_ |     |

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
 "join_date": "2025-07-02",  
 "public_url": "string",  
 "integration_position_id": "string",  
 "candidate_criteria": "string",  
 "candidate_criteria_structured": {},  
 "killer_criteria": {},  
 "description_expanded": "string",  
 "created": "2025-07-02T08:39:21.281Z",  
 "updated": "2025-07-02T08:39:21.281Z",  
 "status": "draft"  
 }  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "channel": "string",  
 "summary": "string",  
 "status": "pending",  
 "twilio_sid": "string",  
 "created": "2025-07-02T08:39:21.281Z",  
 "updated": "2025-07-02T08:39:21.281Z"  
 }  
\]

[/api/hiring/{client_uuid}/applications/{application_uuid}/documents](https://yourapiurl/api/docs#/default/hiring_api_controllers_get_application_documents)  
**Get Application Documents**

| Name                                    | Description |
| :-------------------------------------- | :---------- |
| **client_uuid \*** string _(path)_      |             |
| **application_uuid \*** string _(path)_ |             |

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

[/api/hiring/{client_uuid}/applications/{application_uuid}/events](https://yourapiurl/api/docs#/default/hiring_api_controllers_get_application_events)  
**Get Application Events**

| Name                                    | Description |
| :-------------------------------------- | :---------- |
| **client_uuid \*** string _(path)_      |             |
| **application_uuid \*** string _(path)_ |             |

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

[/api/hiring/{client_uuid}/applications/{application_uuid}/questions](https://yourapiurl/api/docs#/default/hiring_api_controllers_get_application_question_answers)  
**Get Application Question Answers**

| Name                                    | Description |
| :-------------------------------------- | :---------- |
| **client_uuid \*** string _(path)_      |             |
| **application_uuid \*** string _(path)_ |             |

**Response:**

\[  
 {  
 "question": {  
 "position_id": 0,  
 "application_status": {  
 "client_id": 0,  
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
 "rendered_question": "string"  
 }  
\]

[/api/hiring/{client_uuid}/positions/{position_uuid}/infer-criteria](https://yourapiurl/api/docs#/default/hiring_api_controllers_infer_position_criteria)  
**Infer Position Criteria**

####

#### **Parameters**

| Name                                 | Description |
| :----------------------------------- | :---------- |
| **client_uuid \*** string _(path)_   |             |
| **position_uuid \*** string _(path)_ |             |

{  
 "suggested_criteria": "string"  
}

[/api/hiring/{client_uuid}/positions/{position_uuid}/enhance-description](https://yourapiurl/api/docs#/default/hiring_api_controllers_enhance_position_description)  
Enhance Position Description

#### **Parameters**

| Name                                 | Description |
| :----------------------------------- | :---------- |
| **client_uuid \*** string _(path)_   |             |
| **position_uuid \*** string _(path)_ |             |

{  
 "suggested_description": "string"  
}

[/api/hiring/{client_uuid}/attribute-types](https://yourapiurl/api/docs#/default/hiring_api_controllers_list_attribute_types)  
List Attribute Types

| Name                               | Description          |
| :--------------------------------- | :------------------- |
| **client_uuid \*** string _(path)_ |                      |
| limit integer _(query)_            | _Default value_ : 10 |
| offset integer _(query)_           | _Default value_ : 0  |

{  
 "items": \[  
 {  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "code": "string",  
 "name": "string",  
 "description": "string",  
 "data_schema": {},  
 "prompt_template": "string",  
 "created": "2025-07-02T08:45:54.363Z",  
 "updated": "2025-07-02T08:45:54.363Z"  
 }  
 \],  
 "count": 0  
}

[/api/hiring/{client_uuid}/attribute-types/{type_uuid}/attributes](https://yourapiurl/api/docs#/default/hiring_api_controllers_list_attributes)  
List Attributes

List all attributes for a given attribute type

| Name                               | Description          |
| :--------------------------------- | :------------------- | --------------- | --- |
| **client_uuid \*** string _(path)_ |                      |
| **type_uuid \*** string _(path)_   |                      |
| type_uuid string                   | (string              | null) _(query)_ |     |
| q string                           | (string              | null) _(query)_ |     |
| limit integer _(query)_            | _Default value_ : 10 |
| offset integer _(query)_           | _Default value_ : 0  |

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
 "data_schema": {},  
 "prompt_template": "string",  
 "created": "2025-07-02T08:46:26.827Z",  
 "updated": "2025-07-02T08:46:26.827Z"  
 },  
 "total_positions": 0  
 }  
 \],  
 "count": 0  
}

[/api/hiring/{client_uuid}/applications/{application_uuid}/notes](https://yourapiurl/api/docs#/default/hiring_api_controllers_save_application_note)  
Save Application Note

| Name                                    | Description |
| :-------------------------------------- | :---------- |
| **client_uuid \*** string _(path)_      |             |
| **application_uuid \*** string _(path)_ |             |

#### **Request body**

**application/json**

- **Example Value**
- Schema

{  
 "note": "string"

}

{  
 "user": {  
 "email": "string",  
 "first_name": "string",  
 "last_name": "string"  
 },  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "application": 0,  
 "note": "string",  
 "created": "2025-07-02T08:46:52.830Z",  
 "updated": "2025-07-02T08:46:52.830Z"  
}

[/api/hiring/{client_uuid}/candidates/{candidate_uuid}/notes](https://yourapiurl/api/docs#/default/hiring_api_controllers_save_candidate_note)  
Save Candidate Note

#### **Parameters**

**Try it out**

| Name                                  | Description |
| :------------------------------------ | :---------- |
| **client_uuid \*** string _(path)_    |             |
| **candidate_uuid \*** string _(path)_ |             |

#### **Request body**

**application/json**

- **Example Value**
- Schema

{  
 "note": "string"

}

#### **Responses**

| Code | Description                                                                                                                                                                                                                                                                                                                          | Links |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema { "user": { "email": "string", "first_name": "string", "last_name": "string" }, "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "candidate": 0, "note": "string", "created": "2025-07-02T08:47:42.882Z", "updated": "2025-07-02T08:47:42.882Z" } |       |

[/api/hiring/{client_uuid}/candidates/{candidate_uuid}/conversations](https://yourapiurl/api/docs#/default/hiring_api_controllers_get_candidate_conversations)  
Get Candidate Conversations

Fetch all conversations for a candidate, including messages and application info.

#### **Parameters**

**Try it out**

| Name                                  | Description |
| :------------------------------------ | :---------- |
| **client_uuid \*** string _(path)_    |             |
| **candidate_uuid \*** string _(path)_ |             |

#### **Responses**

| Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Links |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[ { "messages": \[ {} \], "application": { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "position": { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "name": "string", "description": "string", "location": "string", "join_date": "2025-07-02", "public_url": "string", "integration_position_id": "string", "candidate_criteria": "string", "candidate_criteria_structured": {}, "killer_criteria": {}, "description_expanded": "string", "created": "2025-07-02T08:47:42.884Z", "updated": "2025-07-02T08:47:42.884Z", "status": "draft" } }, "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "channel": "string", "summary": "string", "status": "pending", "twilio_sid": "string", "created": "2025-07-02T08:47:42.884Z", "updated": "2025-07-02T08:47:42.884Z" } \] |       |

[/api/hiring/{client_uuid}/applications/{application_uuid}/rescore](https://yourapiurl/api/docs#/default/hiring_api_controllers_rescore_candidate)  
Rescore Candidate

#### **Parameters**

**Try it out**

| Name                                    | Description |
| :-------------------------------------- | :---------- |
| **client_uuid \*** string _(path)_      |             |
| **application_uuid \*** string _(path)_ |             |

#### **Responses**

| Code | Description | Links |
| :--- | :---------- | :---- |
| 200  | OK          |       |

**GET**  
[/api/integrations/{client_uuid}/integrations](https://yourapiurl/api/docs#/default/integrations_api_list_integrations)  
List Integrations

List all integrations for a client

#### **Parameters**

**Try it out**

| Name                               | Description |
| :--------------------------------- | :---------- | --------------- | ---------------- |
| **client_uuid \*** string _(path)_ |             |
| service\_\_can_post_jobs boolean   | (boolean    | null) _(query)_ | **\--truefalse** |

#### **Responses**

| Code | Description                                                                                                                                                                                                                                                                                                                                                                                                              | Links |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[ { "service": { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "name": "string", "logo": "string", "icon": "string", "description": "string" }, "client_id": 0, "infojobs_integration": { "required_fields_schema": {}, "expiration_days": 30 }, "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "client": 0, "active": true } \] |       |

**GET**  
[/api/integrations/{client_uuid}/services](https://yourapiurl/api/docs#/default/integrations_api_list_services)  
List Services

List all available integration services

#### **Parameters**

**Try it out**

| Name                               | Description |
| :--------------------------------- | :---------- |
| **client_uuid \*** string _(path)_ |             |

#### **Responses**

| Code | Description                                                                                                                                                                                                                 | Links |
| :--- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[ { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "name": "string", "logo": "string", "icon": "string", "description": "string" } \] |       |

[/api/integrations/{client_uuid}/integrations/{integration_uuid}/parse-job-description](https://yourapiurl/api/docs#/default/integrations_api_prepare_job_posting)  
Prepare Job Posting

It will receive a job description and will return the field mapping between the job description and the job posting fields. Each integration can have different fields, so the response will be a list of field mappings. Also inform if the field is required or not

#### **Parameters**

**Try it out**

| Name                                    | Description |
| :-------------------------------------- | :---------- |
| **client_uuid \*** string _(path)_      |             |
| **integration_uuid \*** string _(path)_ |             |

#### **Request body**

**application/json**

- **Example Value**
- Schema

{  
 "job_description": "string",  
 "job_title": "string",  
 "killer_criteria": \[  
 "string"  
 \],  
 "candidate_questions": \[  
 "string"  
 \]

}

#### **Responses**

| Code | Description | Links |
| :--- | :---------- | :---- |
| 200  | OK          |       |

**POST**  
[/api/integrations/{client_uuid}/integrations/{integration_uuid}/generate-questions-from-killer-criteria](https://yourapiurl/api/docs#/default/integrations_api_generate_questions_from_killer_criteria)  
Generate Questions From Killer Criteria

Get the questions from the killer criteria

#### **Parameters**

**Try it out**

| Name                                    | Description |
| :-------------------------------------- | :---------- |
| **client_uuid \*** string _(path)_      |             |
| **integration_uuid \*** string _(path)_ |             |

#### **Request body**

**application/json**

- **Example Value**
- Schema

{  
 "killer_criteria": \[  
 "string"  
 \]

}

#### **Responses**

| Code | Description | Links |
| :--- | :---------- | :---- |
| 200  | OK          |       |

**GET**  
[/api/integrations/{client_uuid}/positions/{position_uuid}/integrations](https://yourapiurl/api/docs#/default/integrations_api_get_integration_positions)  
Get Integration Positions

#### **Parameters**

**Try it out**

| Name                                 | Description |
| :----------------------------------- | :---------- |
| **client_uuid \*** string _(path)_   |             |
| **position_uuid \*** string _(path)_ |             |

#### **Responses**

| Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Links |
| :--- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[ { "integration": { "service": { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "name": "string", "logo": "string", "icon": "string", "description": "string" }, "client_id": 0, "infojobs_integration": { "required_fields_schema": {}, "expiration_days": 30 }, "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "client": 0, "active": true }, "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "position": 0, "status": "string", "integration_data": {}, "integration_position_id": "string", "created": "2025-07-02T08:49:42.537Z" } \] |       |

**ET**  
[/api/candidates/client/{client_uuid}/application-statuses](https://yourapiurl/api/docs#/default/candidates_api_get_application_statuses)  
Get Application Statuses

#### **Parameters**

**Try it out**

| Name                               | Description |
| :--------------------------------- | :---------- |
| **client_uuid \*** string _(path)_ |             |

#### **Responses**

| Code | Description                                                                                                                                                                                                                                | Links |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[ { "client_id": 0, "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "name": "string", "order": 0, "client": 0, "hired": false, "rejected": false } \] |       |

[/api/candidates/{client_uuid}/upload-cv](https://yourapiurl/api/docs#/default/candidates_api_upload_candidate_cv)  
Upload Candidate Cv

Upload a CV and create a candidate instance and an application if a position is provided

#### **Parameters**

**Try it out**

| Name                               | Description |
| :--------------------------------- | :---------- |
| **client_uuid \*** string _(path)_ |             |

#### **Request body**

**multipart/form-data**

| file \* string($binary) |         |
| :---------------------- | :------ | ------------ | --- |
| position_uuid string    | (string | null)($uuid) |     |

#### **Responses**

| Code | Description                                                                                                                                                                                             | Links |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "status": "in_progress", "timezone": "UTC", "language": "en-us" } |       |

[/api/workflows/{client_uuid}/{type}/](https://yourapiurl/api/docs#/default/workflow_api_list_workflows)  
List Workflows

#### **Parameters**

**Try it out**

| Name                               | Description                                                                        |
| :--------------------------------- | :--------------------------------------------------------------------------------- |
| **client_uuid \*** string _(path)_ |                                                                                    |
| **type \*** string _(path)_        | _Available values_ : hiring, onboarding, experience **hiringonboardingexperience** |

#### **Responses**

| Code | Description                                                                                                                                                                                                      | Links |
| :--- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[ { "id": 0, "type": "hiring", "name": "string", "description": "string", "is_active": true, "trigger_event": "string" } \] |       |

[/api/workflows/{client_uuid}/workflow/{workflow_id}/](https://yourapiurl/api/docs#/default/workflow_api_get_workflow)  
Get Workflow

#### **Parameters**

**Try it out**

| Name                                | Description |
| :---------------------------------- | :---------- |
| **client_uuid \*** string _(path)_  |             |
| **workflow_id \*** integer _(path)_ |             |

#### **Responses**

| Code | Description                                                                                                                                                                                                | Links |
| :--- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema { "id": 0, "type": "hiring", "name": "string", "description": "string", "is_active": true, "trigger_event": "string" } |       |

**GET**  
[/api/workflows/{client_uuid}/workflow/{workflow_id}/steps/](https://yourapiurl/api/docs#/default/workflow_api_list_workflow_steps)  
List Workflow Steps

#### **Parameters**

**Try it out**

| Name                                | Description |
| :---------------------------------- | :---------- |
| **client_uuid \*** string _(path)_  |             |
| **workflow_id \*** integer _(path)_ |             |

#### **Responses**

| Code | Description                                                                                                                                                                                                                                                               | Links |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[ { "previous_step_id": 0, "action_display": "string", "id": 0, "action_type": "string", "action_config": {}, "description": "string", "condition": "string", "is_active": true } \] |       |

[/api/knowledge/{client_uuid}/](https://yourapiurl/api/docs#/default/knowledge_api_list_knowledge_bases)  
List Knowledge Bases

#### **Parameters**

**Try it out**

| Name                               | Description |
| :--------------------------------- | :---------- |
| **client_uuid \*** string _(path)_ |             |

#### **Responses**

| Code | Description                                                                                                                                                                                             | Links |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[ { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "name": "string", "description": "string", "active": true } \] |       |

[/api/agents/check-criteria-compliance/](https://yourapiurl/api/docs#/default/agent_api_check_cirteria_compliance)  
Check Cirteria Compliance

#### **Parameters**

**Try it out**  
No parameters

#### **Request body**

**application/json**

- **Example Value**
- Schema

{  
 "criteria": "string"

}

#### **Responses**

| Code | Description                                                                                                                                                    | Links |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema { "aligned": true, "reason": "string", "recommendations": \[ "string" \] } |       |

**GET**  
[/api/agents/{client_uuid}/](https://yourapiurl/api/docs#/default/agent_api_list_agents)  
List Agents

#### **Parameters**

**Try it out**

| Name                               | Description |
| :--------------------------------- | :---------- |
| **client_uuid \*** string _(path)_ |             |

#### **Responses**

| Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Links |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[ { "voice_config": { "id": 0, "transcription_model": "nova-2", "language": "en-us", "voice_id": "iP95p4xoKVk53GoZ742B", "optimize_latency": 3, "stability": 0.5, "similarity": 0.75, "style": 0.1, "speaker_boost": false, "tts_model": "eleven_flash_v2_5", "output_format": "pcm_16000" }, "knowledge_bases": \[ { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "name": "string", "description": "string", "active": true } \], "number": { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "number": "string", "provider": "twilio", "client": 0 }, "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "client": 0, "name": "string", "description": "string", "language_default": "en-us", "call_type": "inbound", "prompt": "The customer's bank account balance is {customer_balance}. They are based in {customer_location}.", "first_message": "Hi, how can I help you today?", "active": true } \] |       |

**GET**  
[/api/agents/{client_uuid}/agents/{uuid}](https://yourapiurl/api/docs#/default/agent_api_get_agent_detail)  
Get Agent Detail

#### **Parameters**

**Try it out**

| Name                               | Description |
| :--------------------------------- | :---------- |
| **client_uuid \*** string _(path)_ |             |
| **uuid \*** string _(path)_        |             |

#### **Responses**

| Code | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Links |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema { "voice_config": { "id": 0, "transcription_model": "nova-2", "language": "en-us", "voice_id": "iP95p4xoKVk53GoZ742B", "optimize_latency": 3, "stability": 0.5, "similarity": 0.75, "style": 0.1, "speaker_boost": false, "tts_model": "eleven_flash_v2_5", "output_format": "pcm_16000" }, "knowledge_bases": \[ { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "name": "string", "description": "string", "active": true } \], "number": { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "number": "string", "provider": "twilio", "client": 0 }, "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "client": 0, "name": "string", "description": "string", "language_default": "en-us", "call_type": "inbound", "prompt": "The customer's bank account balance is {customer_balance}. They are based in {customer_location}.", "first_message": "Hi, how can I help you today?", "active": true } |       |

**GET**  
[/api/agents/agents/{agent_uuid}/tools](https://yourapiurl/api/docs#/default/agent_api_list_agent_tools)  
List Agent Tools

#### **Parameters**

**Try it out**

| Name                              | Description |
| :-------------------------------- | :---------- |
| **agent_uuid \*** string _(path)_ |             |

#### **Responses**

| Code | Description                                                                                                                                                                                                                                                                                                                                                | Links |
| :--- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema \[ { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "agent": 0, "tool": { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "code": "string", "name": "string", "icon": "string", "description": "string", "properties": {}, "multiple": false }, "properties": {} } \] |       |

**POST**  
[/api/agents/agents/{agent_uuid}/tools](https://yourapiurl/api/docs#/default/agent_api_create_agent_tool)  
Create Agent Tool

#### **Parameters**

**Try it out**

| Name                              | Description |
| :-------------------------------- | :---------- |
| **agent_uuid \*** string _(path)_ |             |

#### **Request body**

**application/json**

- **Example Value**
- Schema

{  
 "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",  
 "agent_id": 0,  
 "tool_id": 0,  
 "properties": {}

}

#### **Responses**

| Code | Description                                                                                                                                                                                                                                                                                                                                          | Links |
| :--- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "agent": 0, "tool": { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "code": "string", "name": "string", "icon": "string", "description": "string", "properties": {}, "multiple": false }, "properties": {} } |       |

**GET**  
[/api/agents/agents/{agent_uuid}/tools/{tool_uuid}](https://yourapiurl/api/docs#/default/agent_api_get_agent_tool)  
Get Agent Tool

#### **Parameters**

**Try it out**

| Name                              | Description |
| :-------------------------------- | :---------- |
| **agent_uuid \*** string _(path)_ |             |
| **tool_uuid \*** string _(path)_  |             |

#### **Responses**

| Code | Description                                                                                                                                                                                                                                                                                                                                          | Links |
| :--- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "agent": 0, "tool": { "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "code": "string", "name": "string", "icon": "string", "description": "string", "properties": {}, "multiple": false }, "properties": {} } |       |

### [**token**](https://yourapiurl/api/docs#/token)

**POST**

[/api/token/pair](https://yourapiurl/api/docs#/token/token_obtain_pair)

Obtain Token

#### **Parameters**

**Try it out**

No parameters

#### **Request body**

**application/json**

- **Example Value**
- Schema

{  
 "password": "string",  
 "username": "string"

}

#### **Responses**

| Code | Description                                                                                                                                                                                                                    | Links |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema { "refresh": "string", "access": "string", "user": { "first_name": "string", "last_name": "string", "email": "string", "members": \[\] } } |       |

**POST**

[/api/token/refresh](https://yourapiurl/api/docs#/token/token_refresh)

Refresh Token

#### **Parameters**

**Try it out**

No parameters

#### **Request body**

**application/json**

- **Example Value**
- Schema

{  
 "refresh": "string"

}

#### **Responses**

| Code | Description                                                                                                                     | Links      |
| :--- | :------------------------------------------------------------------------------------------------------------------------------ | :--------- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema { "refresh": "string", "access": "string" } | _No links_ |

**POST**

[/api/token/verify](https://yourapiurl/api/docs#/token/token_verify)

Verify Token

#### **Parameters**

**Try it out**

No parameters

#### **Request body**

**application/json**

- **Example Value**
- Schema

{  
 "token": "string"

}

#### **Responses**

| Code | Description                                                                            | Links |
| :--- | :------------------------------------------------------------------------------------- | :---- |
| 200  | OK Media type **application/json** Controls Accept header. **Example Value** Schema {} |       |

#### **Schemas**

**ClientListSchema**Collapse allobject

- uuidstringuuid
- codeCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- domainCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 255 characters
  - \#1null
-
- namestring≤ 255 characters
- descriptionCollapse all(string | null)  
  Brief description of the company and its business activities  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-

**ClientDetailSchema**Collapse allobject

- uuidstringuuid
- codeCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- domainCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 255 characters
  - \#1null
-
- namestring≤ 255 characters
- candidate_criteriaCollapse all(string | null)  
  Criteria for candidate analysis and scoring  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- descriptionCollapse all(string | null)  
  Brief description of the company and its business activities  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- timezoneCollapse allstring≤ 50 characters  
  Select your timezone  
  **Default**"UTC"
- call_start_timeCollapse allstringtime  
  **Default**"09:30:00"
- call_end_timeCollapse allstringtime  
  **Default**"18:30:00"
- language_defaultCollapse allstring≤ 5 characters  
  **Default**"en-us"
- expand_position_descriptionCollapse allboolean  
  Expand the position description  
  **Default**false
- infer_position_criteriaCollapse allboolean  
  Infer candidate scoring criteria from position description  
  **Default**true
- infer_position_skillsCollapse allboolean  
  Infer skills from position description  
  **Default**true
- privacy_policy_urlCollapse all(string | null)  
  Privacy policy URL for the client  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- createdstringdate-time
- updatedstringdate-time

**ClientCreateSchema**Collapse allobject

- candidate_criteriaCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
- **Default**""
- descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
- **Default**""
- codeCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- domainCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 255 characters
  - \#1null
-
- namestring≤ 255 characters
- timezoneCollapse allstring≤ 50 characters  
  Select your timezone  
  **Default**"UTC"

**ClientUpdateSchema**Collapse allobject

- nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- domainCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- timezoneCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- candidate_criteriaCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- call_start_timeCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0stringtime
  - \#1null
-
- call_end_timeCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0stringtime
  - \#1null
-
- language_defaultCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- expand_position_descriptionCollapse all(boolean | null)  
  **Any of**Collapse all(boolean | null)
  - \#0boolean
  - \#1null
-
- infer_position_criteriaCollapse all(boolean | null)  
  **Any of**Collapse all(boolean | null)
  - \#0boolean
  - \#1null
-
- infer_position_skillsCollapse all(boolean | null)  
  **Any of**Collapse all(boolean | null)
  - \#0boolean
  - \#1null
-

**MemberSchema**Collapse allobject

- rolestring
- client_uuidstringuuid

**UserOut**Collapse allobject

- emailCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 254 characters
  - \#1null
-
- first_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 150 characters
  - \#1null
-
- last_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 150 characters
  - \#1null
-

**MemberCreateResponseSchema**Collapse allobject

- memberCollapse allobject
  - rolestring
  - client_uuidstringuuid
-
- generated_passwordCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-

**MemberCreateSchema**Collapse allobject

- emailstring
- first_namestring
- last_namestring
- passwordCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- generate_random_passwordCollapse all(boolean | null)  
  **Any of**Collapse all(boolean | null)
  - \#0boolean
  - \#1null
- **Default**false
- rolestring

**ClientApplyPageSchema**Collapse allobject

- codeCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- domainCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 255 characters
  - \#1null
-
- namestring≤ 255 characters
- apply_page_cssCollapse all(string | null)  
  Custom CSS for the apply page  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- apply_page_jsCollapse all(string | null)  
  Custom JS for the apply page  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-

**MemberUpdateSchema**Collapse allobject

- emailCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- first_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- last_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- passwordCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- roleCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-

**MyTokenObtainPairOutSchema**Collapse allobject

- refreshstring
- accessstring
- userCollapse allobject
  - first_namestring
  - last_namestring
  - emailstring
  - membersCollapse allarray\<object\>  
    ItemsCollapse allobject
    - rolestring
    - client_uuidstringuuid
  - **Default**empty array
-

**UserSchema**Collapse allobject

- first_namestring
- last_namestring
- emailstring
- membersCollapse allarray\<object\>  
  ItemsCollapse allobject
  - rolestring
  - client_uuidstringuuid
- **Default**empty array

**MyTokenObtainPairInputSchema**Collapse allobject

- passwordstring≤ 128 characters
- usernameCollapse allstring≤ 150 characters  
  Required. 150 characters or fewer. Letters, digits and @/./+/-/\_ only.

**Additional properties**forbidden

**TokenRefreshOutputSchema**Collapse allobject

- refreshstring
- accessCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-

**TokenRefreshInputSchema**Collapse allobject

- refreshstring

**Schema**Collapse allobject

**TokenVerifyInputSchema**Collapse allobject

- tokenstring

**PositionDescriptionOut**Collapse allobject

- job_descriptionstring
- titlestring
- locationCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- join_dateCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- contract_typeCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-

**PositionDescription**Collapse allobject

- descriptionstring

**KPIOut**Collapse allobject

- total_positionsinteger
- total_candidatesinteger
- total_conversationsinteger

**StatsOut**Collapse allobject

Stats for a client

- total_time_savedinteger
- total_time_saved_unitstring
- total_time_saved_changeinteger
- automated_callsinteger
- automated_calls_changeinteger
- off_hours_interactionsinteger
- off_hours_interactions_changeinteger
- cvs_analyzedinteger
- cvs_analyzed_changeinteger
- criteria_validationsinteger
- criteria_validations_changeinteger
- ai_decisionsinteger
- ai_decisions_changeinteger
- candidates_processedinteger
- candidates_processed_changeinteger
- response_timenumber
- response_time_unitstring
- response_time_changeinteger
- conversion_rateinteger
- conversion_rate_unitstring
- conversion_rate_changeinteger
- time_saved_cv_analysisinteger
- time_saved_automated_callsinteger
- time_saved_criteria_validationinteger
- whatsapp_messages_sentinteger
- whatsapp_messages_sent_changeinteger
- whatsapp_messages_receivedinteger
- whatsapp_messages_received_changeinteger
- applications_rescoredinteger
- applications_rescored_changeinteger
- answers_completedinteger
- answers_completed_changeinteger
- conversation_hoursnumber
- conversation_hours_unitstring
- conversation_hours_changeinteger
- conversation_messagesinteger
- conversation_messages_changeinteger

**InfojobsIntegrationOut**Collapse allobject

- required_fields_schemaExpand all(object | null)
- expiration_daysCollapse allinteger  
  **Default**30

**IntegrationOut**Collapse allobject

- serviceCollapse allobject
  - uuidstringuuid
  - namestring≤ 250 characters
  - logoCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - iconCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - descriptionCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
-
- client_idCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)
  - \#0integer
  - \#1null
-
- infojobs_integrationCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0 InfojobsIntegrationOutCollapse allobject
    - required_fields_schemaCollapse all(object | null)  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - expiration_daysCollapse allinteger  
      **Default**30
  -
  - \#1null
-
- uuidstringuuid
- clientinteger
- activeCollapse allboolean  
  **Default**true

**PositionOut**Collapse allobject

- uuidstringuuid
- namestring≤ 255 characters
- descriptionstring
- locationCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 255 characters
  - \#1null
-
- join_dateCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0stringdate
  - \#1null
-
- public_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- integration_position_idCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 255 characters
  - \#1null
-
- candidate_criteriaCollapse all(string | null)  
  Criteria for candidate analysis and scoring  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- candidate_criteria_structuredCollapse all(object | null)  
  Structured criteria for candidate analysis and scoring  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- killer_criteriaCollapse all(object | null)  
  Prescreening criteria for candidate elimination before the scoring  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- description_expandedCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- createdstringdate-time
- updatedstringdate-time
- statusCollapse allstring≤ 255 characters  
  **Default**"draft"
- total_candidatesCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)
  - \#0integer
  - \#1null
-
- integrationCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0 IntegrationOutCollapse allobject
    - serviceCollapse allobject
      - uuidstringuuid
      - namestring≤ 250 characters
      - logoCollapse all(string | null)  
        **Any of**Collapse all(string | null)
        - \#0string
        - \#1null
      -
      - iconCollapse all(string | null)  
        **Any of**Collapse all(string | null)
        - \#0string
        - \#1null
      -
      - descriptionCollapse all(string | null)  
        **Any of**Collapse all(string | null)
        - \#0string
        - \#1null
      -
    -
    - client_idCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)
      - \#0integer
      - \#1null
    -
    - infojobs_integrationCollapse all(object | null)  
      **Any of**Collapse all(object | null)
      - \#0 InfojobsIntegrationOutCollapse allobject
        - required_fields_schemaCollapse all(object | null)  
          **Any of**Collapse all(object | null)
          - \#0object
          - \#1null
        -
        - expiration_daysCollapse allinteger  
          **Default**30
      -
      - \#1null
    -
    - uuidstringuuid
    - clientinteger
    - activeCollapse allboolean  
      **Default**true
  -
  - \#1null
-

**ServiceOut**Collapse allobject

- uuidstringuuid
- namestring≤ 250 characters
- logoCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- iconCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-

**PositionIn**Collapse allobject

- nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- locationCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- join_dateCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0stringdate
  - \#1null
-
- public_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- integration_position_idCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- candidate_criteriaCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- description_expandedCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- contract_typeCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- statusCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- killer_criteriaCollapse all(array\<string\> | null)  
  **Any of**Collapse all(array\<string\> | null)
  - \#0Collapse allarray\<string\>  
    Itemsstring
  - \#1null
-
- candidate_questionsCollapse all(array\<string\> | null)  
  **Any of**Collapse all(array\<string\> | null)
  - \#0Collapse allarray\<string\>  
    Itemsstring
  - \#1null
-

**Input**Collapse allobject

- limitCollapse allinteger≥ 1  
  **Default**10
- offsetCollapse allinteger≥ 0  
  **Default**0

**PositionFilterSchema**Collapse allobject

- qCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- statusCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- attribute_uuidCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-

**PagedPositionOut**Collapse allobject

- itemsCollapse allarray\<object\>  
  ItemsCollapse allobject
  - uuidstringuuid
  - namestring≤ 255 characters
  - descriptionstring
  - locationCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 255 characters
    - \#1null
  -
  - join_dateCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0stringdate
    - \#1null
  -
  - public_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - integration_position_idCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 255 characters
    - \#1null
  -
  - candidate_criteriaCollapse all(string | null)  
    Criteria for candidate analysis and scoring  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - candidate_criteria_structuredCollapse all(object | null)  
    Structured criteria for candidate analysis and scoring  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - killer_criteriaCollapse all(object | null)  
    Prescreening criteria for candidate elimination before the scoring  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - description_expandedCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - createdstringdate-time
  - updatedstringdate-time
  - statusCollapse allstring≤ 255 characters  
    **Default**"draft"
  - total_candidatesCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)
    - \#0integer
    - \#1null
  -
  - integrationCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0 IntegrationOutCollapse allobject
      - serviceCollapse allobject
        - uuidstringuuid
        - namestring≤ 250 characters
        - logoCollapse all(string | null)  
          **Any of**Collapse all(string | null)
          - \#0string
          - \#1null
        -
        - iconCollapse all(string | null)  
          **Any of**Collapse all(string | null)
          - \#0string
          - \#1null
        -
        - descriptionCollapse all(string | null)  
          **Any of**Collapse all(string | null)
          - \#0string
          - \#1null
        -
      -
      - client_idCollapse all(integer | null)  
        **Any of**Collapse all(integer | null)
        - \#0integer
        - \#1null
      -
      - infojobs_integrationCollapse all(object | null)  
        **Any of**Collapse all(object | null)
        - \#0 InfojobsIntegrationOutCollapse allobject
          - required_fields_schemaCollapse all(object | null)  
            **Any of**Collapse all(object | null)
            - \#0object
            - \#1null
          -
          - expiration_daysCollapse allinteger  
            **Default**30
        -
        - \#1null
      -
      - uuidstringuuid
      - clientinteger
      - activeCollapse allboolean  
        **Default**true
    -
    - \#1null
  -
-
- countinteger

**CandidateFilterSchema**Collapse allobject

- qCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- statusCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- in_poolCollapse all(boolean | null)  
  **Any of**Collapse all(boolean | null)
  - \#0boolean
  - \#1null
-

**ApplicationForCandidateListOut**Collapse allobject

- positionCollapse allobject
  - uuidstringuuid
  - namestring≤ 255 characters
  - descriptionstring
  - locationCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 255 characters
    - \#1null
  -
  - join_dateCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0stringdate
    - \#1null
  -
  - public_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - integration_position_idCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 255 characters
    - \#1null
  -
  - candidate_criteriaCollapse all(string | null)  
    Criteria for candidate analysis and scoring  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - candidate_criteria_structuredCollapse all(object | null)  
    Structured criteria for candidate analysis and scoring  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - killer_criteriaCollapse all(object | null)  
    Prescreening criteria for candidate elimination before the scoring  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - description_expandedCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - createdstringdate-time
  - updatedstringdate-time
  - statusCollapse allstring≤ 255 characters  
    **Default**"draft"
-
- statusCollapse allobject
  - client_idCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)
    - \#0integer
    - \#1null
  -
  - uuidstringuuid
  - namestring≤ 255 characters
  - orderCollapse allinteger  
    **Default**0
  - clientinteger
  - hiredCollapse allboolean  
    **Default**false
  - rejectedCollapse allboolean  
    **Default**false
-
- uuidstringuuid
- candidateinteger
- match_scoreCollapse allinteger  
  **Default**0
- match_reasonCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- key_positive_pointsCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- key_negative_pointsCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- skills_scoreCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- createdstringdate-time
- updatedstringdate-time

**ApplicationStatusOut**Collapse allobject

- client_idCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)
  - \#0integer
  - \#1null
-
- uuidstringuuid
- namestring≤ 255 characters
- orderCollapse allinteger  
  **Default**0
- clientinteger
- hiredCollapse allboolean  
  **Default**false
- rejectedCollapse allboolean  
  **Default**false

**CandidateListWithApplicationsOut**Collapse allobject

- photo_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- uuidstringuuid
- statusCollapse allstring≤ 255 characters  
  **Default**"in_progress"
- status_dataCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- first_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 100 characters
  - \#1null
-
- last_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 150 characters
  - \#1null
-
- emailCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 254 characters
  - \#1null
-
- phonestring≤ 20 characters
- photoCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- taglineCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- summary_shortCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- summary_longCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- createdstringdate-time
- updatedstringdate-time
- in_poolCollapse allboolean  
  **Default**false
- applicationsCollapse allarray\<object\>  
  ItemsCollapse allobject
  - positionCollapse allobject
    - uuidstringuuid
    - namestring≤ 255 characters
    - descriptionstring
    - locationCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 255 characters
      - \#1null
    -
    - join_dateCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0stringdate
      - \#1null
    -
    - public_urlCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - integration_position_idCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 255 characters
      - \#1null
    -
    - candidate_criteriaCollapse all(string | null)  
      Criteria for candidate analysis and scoring  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - candidate_criteria_structuredCollapse all(object | null)  
      Structured criteria for candidate analysis and scoring  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - killer_criteriaCollapse all(object | null)  
      Prescreening criteria for candidate elimination before the scoring  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - description_expandedCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - createdstringdate-time
    - updatedstringdate-time
    - statusCollapse allstring≤ 255 characters  
      **Default**"draft"
  -
  - statusCollapse allobject
    - client_idCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)
      - \#0integer
      - \#1null
    -
    - uuidstringuuid
    - namestring≤ 255 characters
    - orderCollapse allinteger  
      **Default**0
    - clientinteger
    - hiredCollapse allboolean  
      **Default**false
    - rejectedCollapse allboolean  
      **Default**false
  -
  - uuidstringuuid
  - candidateinteger
  - match_scoreCollapse allinteger  
    **Default**0
  - match_reasonCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - key_positive_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - key_negative_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - skills_scoreCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - createdstringdate-time
  - updatedstringdate-time
-

**PagedCandidateListWithApplicationsOut**Collapse allobject

- itemsCollapse allarray\<object\>  
  ItemsCollapse allobject
  - photo_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - uuidstringuuid
  - statusCollapse allstring≤ 255 characters  
    **Default**"in_progress"
  - status_dataCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - first_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 100 characters
    - \#1null
  -
  - last_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 150 characters
    - \#1null
  -
  - emailCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 254 characters
    - \#1null
  -
  - phonestring≤ 20 characters
  - photoCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - taglineCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - summary_shortCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - summary_longCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - createdstringdate-time
  - updatedstringdate-time
  - in_poolCollapse allboolean  
    **Default**false
  - applicationsCollapse allarray\<object\>  
    ItemsCollapse allobject
    - positionCollapse allobject
      - uuidstringuuid
      - namestring≤ 255 characters
      - descriptionstring
      - locationCollapse all(string | null)  
        **Any of**Collapse all(string | null)
        - \#0string≤ 255 characters
        - \#1null
      -
      - join_dateCollapse all(string | null)  
        **Any of**Collapse all(string | null)
        - \#0stringdate
        - \#1null
      -
      - public_urlCollapse all(string | null)  
        **Any of**Collapse all(string | null)
        - \#0string
        - \#1null
      -
      - integration_position_idCollapse all(string | null)  
        **Any of**Collapse all(string | null)
        - \#0string≤ 255 characters
        - \#1null
      -
      - candidate_criteriaCollapse all(string | null)  
        Criteria for candidate analysis and scoring  
        **Any of**Collapse all(string | null)
        - \#0string
        - \#1null
      -
      - candidate_criteria_structuredCollapse all(object | null)  
        Structured criteria for candidate analysis and scoring  
        **Any of**Collapse all(object | null)
        - \#0object
        - \#1null
      -
      - killer_criteriaCollapse all(object | null)  
        Prescreening criteria for candidate elimination before the scoring  
        **Any of**Collapse all(object | null)
        - \#0object
        - \#1null
      -
      - description_expandedCollapse all(string | null)  
        **Any of**Collapse all(string | null)
        - \#0string
        - \#1null
      -
      - createdstringdate-time
      - updatedstringdate-time
      - statusCollapse allstring≤ 255 characters  
        **Default**"draft"
    -
    - statusCollapse allobject
      - client_idCollapse all(integer | null)  
        **Any of**Collapse all(integer | null)
        - \#0integer
        - \#1null
      -
      - uuidstringuuid
      - namestring≤ 255 characters
      - orderCollapse allinteger  
        **Default**0
      - clientinteger
      - hiredCollapse allboolean  
        **Default**false
      - rejectedCollapse allboolean  
        **Default**false
    -
    - uuidstringuuid
    - candidateinteger
    - match_scoreCollapse allinteger  
      **Default**0
    - match_reasonCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - key_positive_pointsCollapse all(object | null)  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - key_negative_pointsCollapse all(object | null)  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - skills_scoreCollapse all(object | null)  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - createdstringdate-time
    - updatedstringdate-time
  -
-
- countinteger

**ReducedPositionOut**Collapse allobject

- uuidstringuuid
- namestring≤ 255 characters
- descriptionstring
- locationCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 255 characters
  - \#1null
-
- join_dateCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0stringdate
  - \#1null
-
- public_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- integration_position_idCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 255 characters
  - \#1null
-
- candidate_criteriaCollapse all(string | null)  
  Criteria for candidate analysis and scoring  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- candidate_criteria_structuredCollapse all(object | null)  
  Structured criteria for candidate analysis and scoring  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- killer_criteriaCollapse all(object | null)  
  Prescreening criteria for candidate elimination before the scoring  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- description_expandedCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- createdstringdate-time
- updatedstringdate-time
- statusCollapse allstring≤ 255 characters  
  **Default**"draft"

**CandidateDetailWithApplicationsOut**Collapse allobject

- photo_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- cv_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- integration_detail_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- uuidstringuuid
- statusCollapse allstring≤ 255 characters  
  **Default**"in_progress"
- status_dataCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- first_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 100 characters
  - \#1null
-
- last_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 150 characters
  - \#1null
-
- emailCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 254 characters
  - \#1null
-
- phonestring≤ 20 characters
- photoCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- taglineCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- summary_shortCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- summary_longCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- dataCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- createdstringdate-time
- updatedstringdate-time
- in_poolCollapse allboolean  
  **Default**false
- applicationsCollapse allarray\<object\>  
  ItemsCollapse allobject
  - positionCollapse allobject
    - uuidstringuuid
    - namestring≤ 255 characters
    - descriptionstring
    - locationCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 255 characters
      - \#1null
    -
    - join_dateCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0stringdate
      - \#1null
    -
    - public_urlCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - integration_position_idCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 255 characters
      - \#1null
    -
    - candidate_criteriaCollapse all(string | null)  
      Criteria for candidate analysis and scoring  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - candidate_criteria_structuredCollapse all(object | null)  
      Structured criteria for candidate analysis and scoring  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - killer_criteriaCollapse all(object | null)  
      Prescreening criteria for candidate elimination before the scoring  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - description_expandedCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - createdstringdate-time
    - updatedstringdate-time
    - statusCollapse allstring≤ 255 characters  
      **Default**"draft"
  -
  - statusCollapse allobject
    - client_idCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)
      - \#0integer
      - \#1null
    -
    - uuidstringuuid
    - namestring≤ 255 characters
    - orderCollapse allinteger  
      **Default**0
    - clientinteger
    - hiredCollapse allboolean  
      **Default**false
    - rejectedCollapse allboolean  
      **Default**false
  -
  - uuidstringuuid
  - candidateinteger
  - match_scoreCollapse allinteger  
    **Default**0
  - match_reasonCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - key_positive_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - key_negative_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - skills_scoreCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - createdstringdate-time
  - updatedstringdate-time
-
- notesCollapse allarray\<object\>  
  ItemsCollapse allobject
  - userCollapse allobject
    - emailCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 254 characters
      - \#1null
    -
    - first_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 150 characters
      - \#1null
    -
    - last_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 150 characters
      - \#1null
    -
  -
  - uuidstringuuid
  - candidateinteger
  - notestring
  - createdstringdate-time
  - updatedstringdate-time
-

**CandidateNoteOut**Collapse allobject

- userCollapse allobject
  - emailCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 254 characters
    - \#1null
  -
  - first_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 150 characters
    - \#1null
  -
  - last_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 150 characters
    - \#1null
  -
-
- uuidstringuuid
- candidateinteger
- notestring
- createdstringdate-time
- updatedstringdate-time

**CandidateDetailOut**Collapse allobject

- photo_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- cv_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- integration_detail_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- uuidstringuuid
- statusCollapse allstring≤ 255 characters  
  **Default**"in_progress"
- status_dataCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- first_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 100 characters
  - \#1null
-
- last_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 150 characters
  - \#1null
-
- emailCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 254 characters
  - \#1null
-
- phonestring≤ 20 characters
- photoCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- taglineCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- summary_shortCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- summary_longCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- dataCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- createdstringdate-time
- updatedstringdate-time
- in_poolCollapse allboolean  
  **Default**false

**CandidateIn**Collapse allobject

- in_poolCollapse all(boolean | null)  
  **Any of**Collapse all(boolean | null)
  - \#0boolean
  - \#1null
-

**ApplicationListOut**Collapse allobject

- candidateCollapse allobject
  - photo_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - uuidstringuuid
  - statusCollapse allstring≤ 255 characters  
    **Default**"in_progress"
  - status_dataCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - first_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 100 characters
    - \#1null
  -
  - last_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 150 characters
    - \#1null
  -
  - emailCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 254 characters
    - \#1null
  -
  - phonestring≤ 20 characters
  - photoCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - taglineCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - summary_shortCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - summary_longCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - createdstringdate-time
  - updatedstringdate-time
  - in_poolCollapse allboolean  
    **Default**false
-
- positionCollapse allobject
  - uuidstringuuid
  - namestring≤ 255 characters
  - descriptionstring
  - locationCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 255 characters
    - \#1null
  -
  - join_dateCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0stringdate
    - \#1null
  -
  - public_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - integration_position_idCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 255 characters
    - \#1null
  -
  - candidate_criteriaCollapse all(string | null)  
    Criteria for candidate analysis and scoring  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - candidate_criteria_structuredCollapse all(object | null)  
    Structured criteria for candidate analysis and scoring  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - killer_criteriaCollapse all(object | null)  
    Prescreening criteria for candidate elimination before the scoring  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - description_expandedCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - createdstringdate-time
  - updatedstringdate-time
  - statusCollapse allstring≤ 255 characters  
    **Default**"draft"
  - total_candidatesCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)
    - \#0integer
    - \#1null
  -
  - integrationCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0 IntegrationOutCollapse allobject
      - serviceCollapse allobject
        - uuidstringuuid
        - namestring≤ 250 characters
        - logoCollapse all(string | null)  
          **Any of**Collapse all(string | null)
          - \#0string
          - \#1null
        -
        - iconCollapse all(string | null)  
          **Any of**Collapse all(string | null)
          - \#0string
          - \#1null
        -
        - descriptionCollapse all(string | null)  
          **Any of**Collapse all(string | null)
          - \#0string
          - \#1null
        -
      -
      - client_idCollapse all(integer | null)  
        **Any of**Collapse all(integer | null)
        - \#0integer
        - \#1null
      -
      - infojobs_integrationCollapse all(object | null)  
        **Any of**Collapse all(object | null)
        - \#0 InfojobsIntegrationOutCollapse allobject
          - required_fields_schemaCollapse all(object | null)  
            **Any of**Collapse all(object | null)
            - \#0object
            - \#1null
          -
          - expiration_daysCollapse allinteger  
            **Default**30
        -
        - \#1null
      -
      - uuidstringuuid
      - clientinteger
      - activeCollapse allboolean  
        **Default**true
    -
    - \#1null
  -
-
- statusCollapse allobject
  - client_idCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)
    - \#0integer
    - \#1null
  -
  - uuidstringuuid
  - namestring≤ 255 characters
  - orderCollapse allinteger  
    **Default**0
  - clientinteger
  - hiredCollapse allboolean  
    **Default**false
  - rejectedCollapse allboolean  
    **Default**false
-
- uuidstringuuid
- match_scoreCollapse allinteger  
  **Default**0
- match_reasonCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- key_positive_pointsCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- key_negative_pointsCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- skills_scoreCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- createdstringdate-time
- updatedstringdate-time

**CandidateListOut**Collapse allobject

- photo_urlCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- uuidstringuuid
- statusCollapse allstring≤ 255 characters  
  **Default**"in_progress"
- status_dataCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- first_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 100 characters
  - \#1null
-
- last_nameCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 150 characters
  - \#1null
-
- emailCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 254 characters
  - \#1null
-
- phonestring≤ 20 characters
- photoCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- taglineCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- summary_shortCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- summary_longCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- createdstringdate-time
- updatedstringdate-time
- in_poolCollapse allboolean  
  **Default**false

**PaginatedApplicationListOut**Collapse allobject

- itemsCollapse allarray\<object\>  
  ItemsCollapse allobject
  - candidateCollapse allobject
    - photo_urlCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - uuidstringuuid
    - statusCollapse allstring≤ 255 characters  
      **Default**"in_progress"
    - status_dataCollapse all(object | null)  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - first_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 100 characters
      - \#1null
    -
    - last_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 150 characters
      - \#1null
    -
    - emailCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 254 characters
      - \#1null
    -
    - phonestring≤ 20 characters
    - photoCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - taglineCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - summary_shortCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - summary_longCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - createdstringdate-time
    - updatedstringdate-time
    - in_poolCollapse allboolean  
      **Default**false
  -
  - positionCollapse allobject
    - uuidstringuuid
    - namestring≤ 255 characters
    - descriptionstring
    - locationCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 255 characters
      - \#1null
    -
    - join_dateCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0stringdate
      - \#1null
    -
    - public_urlCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - integration_position_idCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 255 characters
      - \#1null
    -
    - candidate_criteriaCollapse all(string | null)  
      Criteria for candidate analysis and scoring  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - candidate_criteria_structuredCollapse all(object | null)  
      Structured criteria for candidate analysis and scoring  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - killer_criteriaCollapse all(object | null)  
      Prescreening criteria for candidate elimination before the scoring  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - description_expandedCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - createdstringdate-time
    - updatedstringdate-time
    - statusCollapse allstring≤ 255 characters  
      **Default**"draft"
    - total_candidatesCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)
      - \#0integer
      - \#1null
    -
    - integrationCollapse all(object | null)  
      **Any of**Collapse all(object | null)
      - \#0 IntegrationOutCollapse allobject
        - serviceCollapse allobject
          - uuidstringuuid
          - namestring≤ 250 characters
          - logoCollapse all(string | null)  
            **Any of**Collapse all(string | null)
            - \#0string
            - \#1null
          -
          - iconCollapse all(string | null)  
            **Any of**Collapse all(string | null)
            - \#0string
            - \#1null
          -
          - descriptionCollapse all(string | null)  
            **Any of**Collapse all(string | null)
            - \#0string
            - \#1null
          -
        -
        - client_idCollapse all(integer | null)  
          **Any of**Collapse all(integer | null)
          - \#0integer
          - \#1null
        -
        - infojobs_integrationCollapse all(object | null)  
          **Any of**Collapse all(object | null)
          - \#0 InfojobsIntegrationOutCollapse allobject
            - required_fields_schemaCollapse all(object | null)  
              **Any of**Collapse all(object | null)
              - \#0object
              - \#1null
            -
            - expiration_daysCollapse allinteger  
              **Default**30
          -
          - \#1null
        -
        - uuidstringuuid
        - clientinteger
        - activeCollapse allboolean  
          **Default**true
      -
      - \#1null
    -
  -
  - statusCollapse allobject
    - client_idCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)
      - \#0integer
      - \#1null
    -
    - uuidstringuuid
    - namestring≤ 255 characters
    - orderCollapse allinteger  
      **Default**0
    - clientinteger
    - hiredCollapse allboolean  
      **Default**false
    - rejectedCollapse allboolean  
      **Default**false
  -
  - uuidstringuuid
  - match_scoreCollapse allinteger  
    **Default**0
  - match_reasonCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - key_positive_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - key_negative_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - skills_scoreCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - createdstringdate-time
  - updatedstringdate-time
-
- countinteger

**PagedApplicationListOut**Collapse allobject

- itemsCollapse allarray\<object\>  
  ItemsCollapse allobject
  - candidateCollapse allobject
    - photo_urlCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - uuidstringuuid
    - statusCollapse allstring≤ 255 characters  
      **Default**"in_progress"
    - status_dataCollapse all(object | null)  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - first_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 100 characters
      - \#1null
    -
    - last_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 150 characters
      - \#1null
    -
    - emailCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 254 characters
      - \#1null
    -
    - phonestring≤ 20 characters
    - photoCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - taglineCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - summary_shortCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - summary_longCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - createdstringdate-time
    - updatedstringdate-time
    - in_poolCollapse allboolean  
      **Default**false
  -
  - positionCollapse allobject
    - uuidstringuuid
    - namestring≤ 255 characters
    - descriptionstring
    - locationCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 255 characters
      - \#1null
    -
    - join_dateCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0stringdate
      - \#1null
    -
    - public_urlCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - integration_position_idCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 255 characters
      - \#1null
    -
    - candidate_criteriaCollapse all(string | null)  
      Criteria for candidate analysis and scoring  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - candidate_criteria_structuredCollapse all(object | null)  
      Structured criteria for candidate analysis and scoring  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - killer_criteriaCollapse all(object | null)  
      Prescreening criteria for candidate elimination before the scoring  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - description_expandedCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - createdstringdate-time
    - updatedstringdate-time
    - statusCollapse allstring≤ 255 characters  
      **Default**"draft"
    - total_candidatesCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)
      - \#0integer
      - \#1null
    -
    - integrationCollapse all(object | null)  
      **Any of**Collapse all(object | null)
      - \#0 IntegrationOutCollapse allobject
        - serviceCollapse allobject
          - uuidstringuuid
          - namestring≤ 250 characters
          - logoCollapse all(string | null)  
            **Any of**Collapse all(string | null)
            - \#0string
            - \#1null
          -
          - iconCollapse all(string | null)  
            **Any of**Collapse all(string | null)
            - \#0string
            - \#1null
          -
          - descriptionCollapse all(string | null)  
            **Any of**Collapse all(string | null)
            - \#0string
            - \#1null
          -
        -
        - client_idCollapse all(integer | null)  
          **Any of**Collapse all(integer | null)
          - \#0integer
          - \#1null
        -
        - infojobs_integrationCollapse all(object | null)  
          **Any of**Collapse all(object | null)
          - \#0 InfojobsIntegrationOutCollapse allobject
            - required_fields_schemaCollapse all(object | null)  
              **Any of**Collapse all(object | null)
              - \#0object
              - \#1null
            -
            - expiration_daysCollapse allinteger  
              **Default**30
          -
          - \#1null
        -
        - uuidstringuuid
        - clientinteger
        - activeCollapse allboolean  
          **Default**true
      -
      - \#1null
    -
  -
  - statusCollapse allobject
    - client_idCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)
      - \#0integer
      - \#1null
    -
    - uuidstringuuid
    - namestring≤ 255 characters
    - orderCollapse allinteger  
      **Default**0
    - clientinteger
    - hiredCollapse allboolean  
      **Default**false
    - rejectedCollapse allboolean  
      **Default**false
  -
  - uuidstringuuid
  - match_scoreCollapse allinteger  
    **Default**0
  - match_reasonCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - key_positive_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - key_negative_pointsCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - skills_scoreCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - createdstringdate-time
  - updatedstringdate-time
-
- countinteger

**AnswerOut**Collapse allobject

- uuidstringuuid
- answerstring
- createdstringdate-time
- updatedstringdate-time

**ApplicationDetailOut**Collapse allobject

- candidateCollapse allobject
  - photo_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - cv_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - integration_detail_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - uuidstringuuid
  - statusCollapse allstring≤ 255 characters  
    **Default**"in_progress"
  - status_dataCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - first_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 100 characters
    - \#1null
  -
  - last_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 150 characters
    - \#1null
  -
  - emailCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 254 characters
    - \#1null
  -
  - phonestring≤ 20 characters
  - photoCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - taglineCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - summary_shortCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - summary_longCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - dataCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - createdstringdate-time
  - updatedstringdate-time
  - in_poolCollapse allboolean  
    **Default**false
-
- positionCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0 PositionOutExpand allobject
  - \#1null
-
- statusCollapse allobject
  - client_idCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)
    - \#0integer
    - \#1null
  -
  - uuidstringuuid
  - namestring≤ 255 characters
  - orderCollapse allinteger  
    **Default**0
  - clientinteger
  - hiredCollapse allboolean  
    **Default**false
  - rejectedCollapse allboolean  
    **Default**false
-
- notesCollapse allarray\<object\>  
  ItemsCollapse allobject
  - userCollapse allobject
    - emailCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 254 characters
      - \#1null
    -
    - first_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 150 characters
      - \#1null
    -
    - last_nameCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string≤ 150 characters
      - \#1null
    -
  -
  - uuidstringuuid
  - applicationinteger
  - notestring
  - createdstringdate-time
  - updatedstringdate-time
-
- question_answersCollapse allarray\<object\>  
  ItemsCollapse allobject
  - questionCollapse allobject
    - position_idCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)
      - \#0integer
      - \#1null
    -
    - application_statusCollapse allobject
      - client_idCollapse all(integer | null)  
        **Any of**Collapse all(integer | null)
        - \#0integer
        - \#1null
      -
      - uuidstringuuid
      - namestring≤ 255 characters
      - orderCollapse allinteger  
        **Default**0
      - clientinteger
      - hiredCollapse allboolean  
        **Default**false
      - rejectedCollapse allboolean  
        **Default**false
    -
    - uuidstringuuid
    - questionstring
    - orderCollapse allinteger  
      **Default**0
  -
  - answerCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0 AnswerOutCollapse allobject
      - uuidstringuuid
      - answerstring
      - createdstringdate-time
      - updatedstringdate-time
    -
    - \#1null
  -
  - rendered_questionCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
- **Default**empty array
- uuidstringuuid
- match_scoreCollapse allinteger  
  **Default**0
- match_reasonCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- key_positive_pointsCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- key_negative_pointsCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- skills_scoreCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- detailed_evaluationCollapse all(object | null)  
  Detailed evaluation of the candidate based on scoring system  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- createdstringdate-time
- updatedstringdate-time

**ApplicationNoteOut**Collapse allobject

- userCollapse allobject
  - emailCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 254 characters
    - \#1null
  -
  - first_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 150 characters
    - \#1null
  -
  - last_nameCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 150 characters
    - \#1null
  -
-
- uuidstringuuid
- applicationinteger
- notestring
- createdstringdate-time
- updatedstringdate-time

**QuestionAnswerOut**Collapse allobject

- questionCollapse allobject
  - position_idCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)
    - \#0integer
    - \#1null
  -
  - application_statusCollapse allobject
    - client_idCollapse all(integer | null)  
      **Any of**Collapse all(integer | null)
      - \#0integer
      - \#1null
    -
    - uuidstringuuid
    - namestring≤ 255 characters
    - orderCollapse allinteger  
      **Default**0
    - clientinteger
    - hiredCollapse allboolean  
      **Default**false
    - rejectedCollapse allboolean  
      **Default**false
  -
  - uuidstringuuid
  - questionstring
  - orderCollapse allinteger  
    **Default**0
-
- answerCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0 AnswerOutExpand allobject
  - \#1null
-
- rendered_questionCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-

**QuestionOut**Collapse allobject

- position_idCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)
  - \#0integer
  - \#1null
-
- application_statusCollapse allobject
  - client_idCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)
    - \#0integer
    - \#1null
  -
  - uuidstringuuid
  - namestring≤ 255 characters
  - orderCollapse allinteger  
    **Default**0
  - clientinteger
  - hiredCollapse allboolean  
    **Default**false
  - rejectedCollapse allboolean  
    **Default**false
-
- uuidstringuuid
- questionstring
- orderCollapse allinteger  
  **Default**0

**ApplicationIn**Collapse allobject

- status_uuidstringuuid
- uuidstringuuid

**ConversationFilterSchema**Collapse allobject

- conversation_typeCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0Collapse allstring  
    **Enum**Collapse allarray
    - **\#0**"all"
    - **\#1**"application"
  -
  - \#1null
-

**ConversationApplicationOut**Collapse allobject

- uuidstringuuid
- positionCollapse allobject
  - uuidstringuuid
  - namestring≤ 255 characters
  - descriptionstring
  - locationCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 255 characters
    - \#1null
  -
  - join_dateCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0stringdate
    - \#1null
  -
  - public_urlCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - integration_position_idCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string≤ 255 characters
    - \#1null
  -
  - candidate_criteriaCollapse all(string | null)  
    Criteria for candidate analysis and scoring  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - candidate_criteria_structuredCollapse all(object | null)  
    Structured criteria for candidate analysis and scoring  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - killer_criteriaCollapse all(object | null)  
    Prescreening criteria for candidate elimination before the scoring  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - description_expandedCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - createdstringdate-time
  - updatedstringdate-time
  - statusCollapse allstring≤ 255 characters  
    **Default**"draft"
-

**ConversationOut**Collapse allobject

- messagesCollapse allarray\<object\>  
  Itemsobject
- applicationCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0 ConversationApplicationOutExpand allobject
  - \#1null
-
- uuidstringuuid
- channelCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 255 characters
  - \#1null
-
- summaryCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- statusCollapse allstring≤ 255 characters  
  **Default**"pending"
- twilio_sidCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 100 characters
  - \#1null
-
- createdstringdate-time
- updatedstringdate-time

**DocumentOut**Collapse allobject

- uuidstringuuid
- namestring≤ 255 characters
- fileCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- createdstringdate-time
- updatedstringdate-time

**EventOut**Collapse allobject

- uuidstringuuid
- codestring≤ 255 characters
- candidateCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)
  - \#0integer
  - \#1null
-
- applicationCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)
  - \#0integer
  - \#1null
-
- conversationCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)
  - \#0integer
  - \#1null
-
- dataobject
- createdstringdate-time
- updatedstringdate-time

**PositionCriteriaSuggestionOut**Collapse allobject

- suggested_criteriastring

**PositionDescriptionSuggestionOut**Collapse allobject

- suggested_descriptionstring

**AttributeTypeOut**Collapse allobject

- uuidstringuuid
- codestring≤ 255 characters
- namestring≤ 255 characters
- descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- data_schemaCollapse all(object | null)  
  Schema for the attribute  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- prompt_templateCollapse all(string | null)  
  Template to render the attribute in prompts  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- createdstringdate-time
- updatedstringdate-time

**PagedAttributeTypeOut**Collapse allobject

- itemsCollapse allarray\<object\>  
  ItemsCollapse allobject
  - uuidstringuuid
  - codestring≤ 255 characters
  - namestring≤ 255 characters
  - descriptionCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - data_schemaCollapse all(object | null)  
    Schema for the attribute  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - prompt_templateCollapse all(string | null)  
    Template to render the attribute in prompts  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - createdstringdate-time
  - updatedstringdate-time
-
- countinteger

**AttributeFilterSchema**Collapse allobject

- type_uuidCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- qCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-

**AttributeOut**Collapse allobject

- uuidstringuuid
- namestring≤ 255 characters
- dataCollapse all(object | null)  
  Data for the attribute  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- createdstringdate-time
- updatedstringdate-time
- typeCollapse allobject
  - uuidstringuuid
  - codestring≤ 255 characters
  - namestring≤ 255 characters
  - descriptionCollapse all(string | null)  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - data_schemaCollapse all(object | null)  
    Schema for the attribute  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - prompt_templateCollapse all(string | null)  
    Template to render the attribute in prompts  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - createdstringdate-time
  - updatedstringdate-time
-
- total_positionsinteger

**PagedAttributeOut**Collapse allobject

- itemsCollapse allarray\<object\>  
  ItemsCollapse allobject
  - uuidstringuuid
  - namestring≤ 255 characters
  - dataCollapse all(object | null)  
    Data for the attribute  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - createdstringdate-time
  - updatedstringdate-time
  - typeCollapse allobject
    - uuidstringuuid
    - codestring≤ 255 characters
    - namestring≤ 255 characters
    - descriptionCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - data_schemaCollapse all(object | null)  
      Schema for the attribute  
      **Any of**Collapse all(object | null)
      - \#0object
      - \#1null
    -
    - prompt_templateCollapse all(string | null)  
      Template to render the attribute in prompts  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - createdstringdate-time
    - updatedstringdate-time
  -
  - total_positionsinteger
-
- countinteger

**ApplicationNoteIn**Collapse allobject

- notestring

**CandidateNoteIn**Collapse allobject

- notestring

**IntegrationFilterSchema**Collapse allobject

- service\_\_can_post_jobsCollapse all(boolean | null)  
  **Any of**Collapse all(boolean | null)
  - \#0boolean
  - \#1null
-

**CreatePositionSchema**Collapse allobject

- position_uuidstring
- integration_dataobject

**ParseJobDescriptionSchema**Collapse allobject

- job_descriptionstring
- job_titlestring
- killer_criteriaCollapse all(array\<string\> | null)  
  **Any of**Collapse all(array\<string\> | null)
  - \#0Collapse allarray\<string\>  
    Itemsstring
  - \#1null
-
- candidate_questionsCollapse all(array\<string\> | null)  
  **Any of**Collapse all(array\<string\> | null)
  - \#0Collapse allarray\<string\>  
    Itemsstring
  - \#1null
-

**GenerateQuestionsFromKillerCriteriaSchema**Collapse allobject

- killer_criteriaCollapse allarray\<string\>  
  Itemsstring

**IntegrationPositionOut**Collapse allobject

- integrationCollapse allobject
  - serviceCollapse allobject
    - uuidstringuuid
    - namestring≤ 250 characters
    - logoCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - iconCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - descriptionCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
  -
  - client_idCollapse all(integer | null)  
    **Any of**Collapse all(integer | null)
    - \#0integer
    - \#1null
  -
  - infojobs_integrationCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0 InfojobsIntegrationOutCollapse allobject
      - required_fields_schemaCollapse all(object | null)  
        **Any of**Collapse all(object | null)
        - \#0object
        - \#1null
      -
      - expiration_daysCollapse allinteger  
        **Default**30
    -
    - \#1null
  -
  - uuidstringuuid
  - clientinteger
  - activeCollapse allboolean  
    **Default**true
-
- uuidstringuuid
- positioninteger
- statusstring≤ 250 characters
- integration_dataobject
- integration_position_idCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string≤ 250 characters
  - \#1null
-
- createdstringdate-time

**UpdateIntegrationPositionSchema**Collapse allobject

- statusCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- integration_dataCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-

**CVUploadOut**Collapse allobject

- uuidstringuuid
- statusCollapse allstring≤ 255 characters  
  **Default**"in_progress"
- timezoneCollapse allstring≤ 50 characters  
  Select your timezone  
  **Default**"UTC"
- languageCollapse allstring≤ 5 characters  
  Preferred language for candidate  
  **Default**"en-us"

**Type**Collapse allstring

**Enum**Collapse allarray

- **\#0**"hiring"
- **\#1**"onboarding"
- **\#2**"experience"

**WorkflowSchema**Collapse allobject

- idCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)
  - \#0integer
  - \#1null
-
- typeCollapse allstring≤ 20 characters  
  **Default**"hiring"
- namestring≤ 255 characters
- descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- is_activeCollapse allboolean  
  **Default**true
- trigger_eventstring≤ 255 characters

**WorkflowStepSchema**Collapse allobject

- previous_step_idCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)
  - \#0integer
  - \#1null
-
- action_displaystring
- idCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)
  - \#0integer
  - \#1null
-
- action_typestring≤ 50 characters
- action_configCollapse all(object | null)  
  Configuration parameters for the action  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- conditionCollapse all(string | null)  
  Entry condition for the step. Example: 'application.status \== 'submitted'  
  **Any of**Collapse all(string | null)
  - \#0string≤ 255 characters
  - \#1null
-
- is_activeCollapse allboolean  
  **Default**true

**KnowledgeBaseOutSchema**Collapse allobject

- uuidstringuuid
- namestring≤ 250 characters
- descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- activeCollapse allboolean  
  **Default**true

**CriteriaComplianceSchemaOut**Collapse allobject

- alignedboolean
- reasonstring
- recommendationsCollapse allarray\<string\>  
  Itemsstring

**CriteriaComplianceSchemaIn**Collapse allobject

- criteriastring

**AgentOut**Collapse allobject

- voice_configCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0 VoiceConfigSchemaExpand allobject
  - \#1null
-
- knowledge_basesCollapse all(array\<object\> | null)  
  **Any of**Collapse all(array\<object\> | null)
  - \#0Collapse allarray\<object\>  
    ItemsCollapse allobject
    - uuidstringuuid
    - namestring≤ 250 characters
    - descriptionCollapse all(string | null)  
      **Any of**Collapse all(string | null)
      - \#0string
      - \#1null
    -
    - activeCollapse allboolean  
      **Default**true
  -
  - \#1null
-
- numberCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0 NumberOutSchemaExpand allobject
  - \#1null
-
- uuidstringuuid
- clientinteger
- namestring≤ 100 characters
- descriptionCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- language_defaultCollapse allstring≤ 5 characters  
  **Default**"en-us"
- call_typeCollapse allstring≤ 50 characters  
  **Default**"inbound"
- promptCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
- **Default**"The customer's bank account balance is {customer_balance}. They are based in {customer_location}."
- first_messageCollapse all(string | null)  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
- **Default**"Hi, how can I help you today?"
- activeCollapse allboolean  
  **Default**true

**NumberOutSchema**Collapse allobject

- uuidstringuuid
- numberstring≤ 15 characters
- providerCollapse allstring≤ 100 characters  
  **Default**"twilio"
- clientinteger

**VoiceConfigSchema**Collapse allobject

- idCollapse all(integer | null)  
  **Any of**Collapse all(integer | null)
  - \#0integer
  - \#1null
-
- transcription_modelCollapse allstring≤ 100 characters  
  **Default**"nova-2"
- languageCollapse allstring≤ 5 characters  
  **Default**"en-us"
- voice_idCollapse allstring≤ 100 characters  
  **Default**"iP95p4xoKVk53GoZ742B"
- optimize_latencyCollapse allinteger  
  Optimize the latency of the conversation.  
  **Default**3
- stabilityCollapse all(number | string)  
  Determines how stable the voice is and the randomness between each generation.  
  **Any of**Collapse all(number | string)
  - \#0number
  - \#1string
- **Default**"0.50"
- similarityCollapse all(number | string)  
  Determines how closely the AI should adhere to the original voice when attempting to replicate it..  
  **Any of**Collapse all(number | string)
  - \#0number
  - \#1string
- **Default**"0.75"
- styleCollapse all(number | string)  
  Determines the style exaggeration of the voice. This setting attempts to amplify the style of the original speaker.  
  **Any of**Collapse all(number | string)
  - \#0number
  - \#1string
- **Default**"0.1"
- speaker_boostCollapse allboolean  
  This setting boosts the similarity to the original speaker..  
  **Default**false
- tts_modelCollapse allstring≤ 25 characters  
  The TTS model to use.  
  **Default**"eleven_flash_v2_5"
- output_formatCollapse allstring≤ 100 characters  
  The output format of the TTS.  
  **Default**"pcm_16000"

**AgentToolOut**Collapse allobject

- uuidstringuuid
- agentinteger
- toolCollapse allobject
  - uuidstringuuid
  - codestring≤ 100 characters
  - namestring≤ 100 characters
  - iconCollapse all(string | null)  
    Icon name from lucide.dev  
    **Any of**Collapse all(string | null)
    - \#0string≤ 100 characters
    - \#1null
  -
  - descriptionCollapse all(string | null)  
    Description of the tool for the LLM  
    **Any of**Collapse all(string | null)
    - \#0string
    - \#1null
  -
  - propertiesCollapse all(object | null)  
    **Any of**Collapse all(object | null)
    - \#0object
    - \#1null
  -
  - multipleCollapse allboolean  
    If true, an individual LLM tool will be generated for each property.  
    **Default**false
-
- propertiesCollapse all(object | null)  
  Override properties to pass to the tool.  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-

**ToolOut**Collapse allobject

- uuidstringuuid
- codestring≤ 100 characters
- namestring≤ 100 characters
- iconCollapse all(string | null)  
  Icon name from lucide.dev  
  **Any of**Collapse all(string | null)
  - \#0string≤ 100 characters
  - \#1null
-
- descriptionCollapse all(string | null)  
  Description of the tool for the LLM  
  **Any of**Collapse all(string | null)
  - \#0string
  - \#1null
-
- propertiesCollapse all(object | null)  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
- multipleCollapse allboolean  
  If true, an individual LLM tool will be generated for each property.  
  **Default**false

**AgentToolIn**Collapse allobject

- uuidstringuuid
- agent_idinteger
- tool_idinteger
- propertiesCollapse all(object | null)  
  Override properties to pass to the tool.  
  **Any of**Collapse all(object | null)
  - \#0object
  - \#1null
-
