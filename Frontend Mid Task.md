# Efbet's Frontend Mid Interview Task

In the `data` folder you will find four JSON files:

```
- companies.json
- company-addresses.json
- employees.json
- projects.json
```

You will use them to build a small app.

### App requirements

- Use the company and employees data to build a tree view like navigation with the following structure:

```
Company name
    Employee job area
        Employee name
```

- When the user clicks on a company, the app should display the company's address and the company's projects (use `projects.json`). It should be possible to visualize the information about each project as well as to manage the projects: edit project details (changing the project name) and assigning & removing employees from a project. If you feel that's too easy, you can add the ability to add and remove projects
- When the user clicks on an employee's name you will need to show the employee's details, and projects they're part of.
- Clicking on Employee's job area should only display how many employees work in that area, and the number of projects they participate in.

### Tech requirements

- The app should be developed using React (v.16+ with hooks). You can start from scratch, from a boilerplate project or use a scaffolding CLI.
- The code needs to demonstrate state management within the app as well as managing asynchronous requests.
- In terms of serving the static JSON files upon app requests, it's up to you whether to create a dev server or use an existing package.
- The app's aesthetics are up to you - we value individual css skills without using Bootstrap, Material or any 3rd party library.
- We should be able to run your solution by simply cloning the repo from github and running a single command on the command line.

Feel free to add more functionality and style however you'd like.
Good luck !
