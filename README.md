
# Fashion Shop

## Logo
![Logo](./frontend/src/assets/dress-logo.png)

A custom e-commerce fashion shop focused on women's apparel. This website/application is built for a small business wanting to have more granular control, adaptability, and custom features of their website.

Technologies:
- Frontend 
    
    ![Frontend](https://skills.thijs.gg/icons?i=react,redux,html,css,bootstrap) 
    - React 
    - Redux Toolkit 
    - Bootstrap
    - React-Bootstrap
- Backend
    
    ![Frontend](https://skills.thijs.gg/icons?i=nodejs,express,mongo) 
    - Node
    - Express
    - MongoDB
    - Mongoose
    - Seeder

## Demo

Insert gif or link to demo

[Video]()

[Deployed Link]()

## Author
[@GregPetropoulos](https://github.com/GregPetropoulos)


## Features
- Fullscreen mode
- Cross platform
- Mobile Responsive
- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)
- Admin Features
    - Admin product management
    - Admin user management
    - Admin Order details page
    - Mark orders as delivered option

## Lessons Learned

**Challenges**: Admin users uploading images for products 

**Solutions**: Using Node route on the backend to upload images to a public folder, for scalablity will need to implement cloud storage such as Cloudinary.


<!-- ## Appendix

Any additional information goes here

#### add(num1, num2)

Takes two numbers and returns the sum.

## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2 -->

## Documentation
[Links](docs/doc-links.md)

[Documentation](https://linktodocumentation)

<!-- ## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility -->

## Feedback

If you have any feedback, please reach out to gregpetropoulos@yahoo.com

## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


<!-- ## Used By

This project is used by the following companies:

- Company 1
- Company 2 -->


## Run Locally

Clone the project

```bash
  git clone https://github.com/GregPetropoulos/FashionShop.git
```

### **To run the frontend and backend concurrently**
In the root folder

Install dependencies

```bash
  npm install
```

Start the both frontend and backend servers

```bash
  npm run dev
```

### **To run the backend only**
In the root folder

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run server
```


### **To run the frontend only**
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
## Testing
### **To run storybook on the frontend (CDD)**
In the root folder

```bash
  cd frontend
```
```bash
npm run storybook

# This will run on http://localhost:6006/
```

### **To run cypress on the frontend**
In the root folder

```bash
  cd frontend
```
```bash
npx cypress open
```


## API Reference
There are three core API categories and more detail can be found at the postman docs
- [Products API](https://documenter.getpostman.com/view/18334011/2s9Y5ctzyP)
    - Get all products
    - Get products by id
- [Users API](https://documenter.getpostman.com/view/18334011/2s9Y5ctzyQ)
    - Admin Actions
    - Auth
- [Orders API](https://documenter.getpostman.com/view/18334011/2s9Y5ctzyN)
    - Admin Actions
    - CRUD

`API_KEY`

`ANOTHER_API_KEY`

<!-- share a postman workspace??? -->


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file, see the .env-example in the root folder
```bash
PORT=5000
NODE_ENV=development
MONGO_URI=ADD_YOUR_CONNECTION_STRING_HERE
JWT_SECRET=ADD_YOUR_SECRET
PAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID
```

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Contributing

Contributions are always welcome!

See [contribute](./docs/contribute.md) for ways to get started.

Please adhere to this project's `code of conduct`.

## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

# Hi, I'm Greg Petropoulos! 👋

## 🚀 About Me
I am a React/React-Native Front End Developer and enjoy building applications with engaging UI/UX and robust backend API's with Node.js


## 🛠 Skills
React, React Native, Javascript, HTML, CSS, Node, Express


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://gregpetropoulos.dev/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/greg-petropoulos)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GregoriosPetro1)


## Other Common Github Profile Sections
👩‍💻 I'm currently working on React migration to React Native code base

🧠 I'm currently learning Cypress testing strategy and Next.js

👯‍♀️ I'm looking to collaborate on open source Veterans Health apps

💬 Ask me about anything frontend

📫 How to reach me gregpetropoulos@yahoo.com


⚡️ Fun fact...I found a dinosaur fossil that remains in a museum.

