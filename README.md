
# Fashion Shop

An custom e-commerce fashion shop focused on women's apparel. This website/application is built for a small business wanting to have more granular control, adaptability, and custom features of their website.


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Appendix

Any additional information goes here


## Authors

- [@GregPetropoulos](https://github.com/GregPetropoulos)


## Demo

Insert gif or link to demo


## Documentation
[Links](docs/doc-links.md)

[Documentation](https://linktodocumentation)


## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2


## Feedback

If you have any feedback, please reach out to me at gregpetropoulos@yahoo.com

If you create PR:
- State the problem you are solving
- Provide a reproducible example, screenshots/video and your solution
- Explain the desired outcome.

## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


## Used By

This project is used by the following companies:

- Company 1
- Company 2


## Run Locally

Clone the project

```bash
  git clone https://github.com/GregPetropoulos/FashionShop.git
```

### To Run the frontend and backend concurrently
In the root folder

Install dependencies

```bash
  npm install
```

Start the both frontend and backend servers

```bash
  npm run dev
```

### To run backend only
In the root folder

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run server
```


### To run frontend only
In the root folder

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
## Run Component / E2E / Unit Testing
### Run storybook on the frontend (CDD)
In the root folder

```bash
  cd frontend
```
```bash
npm run storybook

# This will run on http://localhost:6006/
```

### Run Cypress
In the root folder

```bash
  cd frontend
```
```bash
npx cypress open
```
## Logo
![Logo](./frontend/src/assets/dress-logo.png)



## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

