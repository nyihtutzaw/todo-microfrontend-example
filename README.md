## A simple microfrontend app by using webpack module federation

This project is to give outline how to setup micro frontend apps and interact each other. 

### Technologies

1. Vite 
2. Module Federation
3. React
4. Tailwind 
5. Redux

### List of Apps

1. store (redux global store)
2. ui (global ui library)
3. todo-list (app that display list of todo)
4. todo-form (app that acts as form to submit todo)
5. todo-container (entry of the application)

### Dependencies between apps
1. todo-form <- ui 
2. todo-list <- ui 
3. todo-container <- todo-form+todo-list+ui+store

### Global Store
store app acts as a global store and it is imported inside container for state managemnt


### Steps to Run

#### Store 
1. cd store
2. yarn or npm install
3. yarn start


### UI
1. cd store
2. yarn or npm install
3. yarn start

### todo-form
1. cd store
2. yarn or npm install
3. yarn start

### todo-list
1. cd store
2. yarn or npm install
3. yarn start

### todo-container
1. cd store
2. yarn or npm install
3. yarn dev