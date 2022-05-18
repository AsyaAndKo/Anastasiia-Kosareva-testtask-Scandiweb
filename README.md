# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Anastasiia-Kosareva-testtask-Scandiweb

It's been a long time but finally I am ready to present my test task. It's been a great journey and I had lots of fun :)

To start with, you can run the application using following commands 

```
npm install 
npm start
```

or if any errors occurred, try 
```
npm install --save --legacy-peer-deps
npm start
```

and if there are some errors, try to install all packages that are written in console errors.

In src/index.js file end-point is reached by localhost, so be sure that you run it on your local machine. If not, please change "localhost" to the ip 
address of machine on which you've started the endpoint.

Also, some thoughts about pagination.
Since it not provided in the GraphQL endpoint schema, it's impossible to fetch only chosen amount of data (it's all or nothing). So i've decided to 
slice the id's array of certain category and render only first 6 items. When Load More button clicked, it renders next 6 items and checks if we have
more elements. If not, Load More button disappears. It's not the correct way to do it, but nevertheless i've decided to implement it in such "interesting"
way.

If you struggle with any kind of problems, please, do not hesitate to contact me, and I am sure, we'll find a way to deal with them ;) 
Looking forward to hear from you soon!
