# Reactklient for Filmsystemet API, Max Guclu, FS.NET, 2023-06-18

## Introduction 
This react client was created by *Max Guclu* The project was conducted as part of a *C#-course* in a *Fullstack .NET* program at **Chas Academy**.   

## Application structure and Requirements
This developed using React Vite, with API calls towards a local DB. Styled Components and Router dom was used as per requierements.

The program revolves around a primary objects *Person* and its id. The frontpage renders all users in the db and allows to access their specific pages which renders relevant DBs through get requests and post where relevant.

### Noteworthy
The link and rating does not get posted to the db by using the post request. This appears to be a problem with the db/api-client but since we were not allowed to modify our api-client. I was unable to sort it. The functionality for the post-request is however there and is working

- ***Startsida som listar alla personer som finns i systemet automatiskt.***   
OK,  An API call renders all users as object on the home page   
- ***Personerna är klickbara och vid klick kommer man till den personens egna sida och får upp en lista på alla genres som är kopplade till den personen samt alla filmer och dess rating.***   
OK,  Its possible to enter each person object and access their information  
- ***Under genres ska det gå att koppla en ny genre till en person med hjälp av ID och under filmer ska det gå att lägga till en ny film (länk) och rating.***   
Ok,  there are buttons and forms that makes post request to add genres, and to add movies with links and ratings to the specific user    
- ***OBS! Ni ska inte utöka / bygga nya endpoints / göra om befintliga endpoints i Filmsystemet (API:et som er Reactklient anropar) för att uppnå kraven, bygg Reactklienten utifrån de endpoints ni har.***   
OK,  No modifications has been made to API-client.
 
## To run program
1.  Download or clone the project files from the Git repository.  
2.  Open the solution or project in visual studio code.  
3.  Open the project on root folder
4.  Install dependencies with "npm install"
5.  Run application by "npm run dev"

## Usage
No log-in required. The applications provides the information necessary to test it.

## Contribution  
If you would like to contribute to this project, please feel free to submit a pull request on the Git repository.
