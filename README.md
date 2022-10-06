
# Advice Generator App

This web application randomly generates an advice which can help you in your day.

Below you can see that only the GET method of the api is used.

## API Reference

#### Get all items
https://api.adviceslip.com/
```http
  GET /api/advice
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Does not Required |

#### Get item

```http
  GET /api/advice/${slip_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of item to fetch |




## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@Dcuastumal](https://github.com/Dcuastumal)

