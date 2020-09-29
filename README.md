# Automatic-RestAPI-Builder
Build RestAPI for  CRUD operation from JSON data. 



### Data Format

##### Request Body
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
