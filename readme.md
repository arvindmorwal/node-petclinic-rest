node-petclinic-rest is the backend version of the petclinic application written with Node and Express.
This application only provides a REST API. 

**There is no UI**.

Another application written in petclinic-react is a react-redux front-end application witch consumes these REST API.

This application provides crud operation for 
/visits
/pets
/vets

### Prerequisite
- This application requires a local mongodb server running at localhost:27017
- This application will run on port 5000 
  ( make sure its not already in use or change the port number from app.js)
- This application was test with node version v10.9.0


### Steps:
1) In the command line
```
git clone https://github.com/arvindmorwal/node-petclinic-rest
```
2) cd to node-petclinic-rest
```
cd node-petclinic-rest/ 
```
3) install dependencies
```
npm install
```
4) start the server
```
npm start
```

### Data Prepopulation.
On server start application will clear and prepopulate collections 'vets', 'pets', and 'visits' with default values.

### Notes
- Exercise Difficulty: 
  > Moderate
- How did you feel about the exercise itself? (1 lowest, 10 highest—awesome way to assess coding ability)
  > 10
- How do you feel about coding an exercise as a step in the interview process?  (1 lowest, 10 highest—awesome way to assess coding ability)
  > 10
- What would you change in the exercise and/or process?
  > Some boilerplate code pre-created as a starter project.