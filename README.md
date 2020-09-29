# Automatic-RestAPI-Builder
Build RestAPI for  CRUD operation from JSON data. 



### Data Format

<details>
<summary>Request Body</summary>

```json
  {
        "modelName": "Teacher",
        "modelAttributes": [
          {
            "name": "teacherInitial",
            "type": "String",
            "required": true,
            "default": "N/A"
          },
          {
            "name": "teacherName",
            "type": "String",
            "required": true,
            "default": "N/A"
          }
        ],
        "apiEndPoints": ["GET", "POST", "DELETE", "PUT"]
      },
}
```
</details>

<details>
<summary>Response Body</summary>

```json
 {
    "modelName": "Teacher",
    "endPoints": [
      {
        "protocol": "HTTP",
        "requestType": "GET",
        "href": "/teachers"
      },
      {
        "protocol": "HTTP",
        "requestType": "POST",
        "href": "/teachers"
      },
      {
        "protocol": "HTTP",
        "requestType": "GET",
        "href": "/teachers/{property}"
      },
      {
        "protocol": "HTTP",
        "requestType": "PUT",
        "href": "/teachers/{property}"
      },
      {
        "protocol": "HTTP",
        "requestType": "DELETE",
        "href": "/teachers/{property}"
      }
    ]
  }
  ```
</details>
