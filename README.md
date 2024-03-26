In this react application we have created an Auction site and it is an group assignment. For this assignment there is an description for how this Auction site is built.



**Description:**

**In english:**
You are tasked as a group to create a solution for the company Auctioneer, which deals with online auctions. This solution should be built using React, with a focus on utilizing React Hooks while coding. All tasks will be stored in a database accessible via a Web API (refer to the next page).

Requirements for the solution to be approved:

Your application must implement React Router with at least 2 different routes.

All data must be current and retrieved via Web API calls. The solution should include a starting view that displays all current auctions. An auction is considered open if its end date is later than the current date and time. It should also be possible to search for auctions, displaying both current and closed auctions.

Users should be able to select an auction and view all bids for that auction. If the auction is still open, users can place a bid. This bid must be higher than the previous highest bid; otherwise, the user should be notified that the bid is too low.

If an auction that is closed is selected, only information about the auction and the highest winning bid should be displayed. There should be no bid history shown, and users should not be able to place bids.

Through the Web API provided, it is possible to add new auctions. Your application should also include a form to create a new auction. If there are no bids on the auction, it should be possible to delete it. It should also be possible to update it.

You have full freedom regarding the interface, but it should be evident that you have put effort into making it user-friendly, simple, and visually appealing.

Your project should follow the guidelines discussed in the lessons, and you must work with version control for all code. You should use GitHub to store and version control your code. Additionally, you should make a plan and work with activities and sprints (not mandatory, but if you have time, set up a GitHub Action to deploy your solution to an Azure account).



**In swedish:**
Ni skall som grupp skapa en lösning till företaget Auctioneer som arbetar med online auktioner på nätet. Detta skall göras med React och ni skall ha fokus på React Hooks när ni kodar. Alla uppgifter sparas i en databas som är tillgänglig via ett Web API (se nästa sida).

Krav för att lösningen skall bli godkänd:

Er applikation måste ha React Router implementerat med minst 2 olika routes.

All data måste vara aktuell och hämtas via Web API anrop. Lösningen skall innehålla en startvy som visar alla aktuella auktioner. En auktion är öppen om slutdatumet är senare än aktuellt datum och klockslag. Det skall även att gå att söka på auktioner och då visas även auktioner som inte är aktuella dvs avslutade. 

Det skall gå att välja en auktion och sedan se alla bud som finns för den auktionen. Är auktionen fortfarande öppen kan användaren lägga ett bud. Detta måste vara högre än det tidigare högsta budet, annars skall användaren meddelas att budet är för lågt. 

Väljs en auktion som inte är öppen skall bara information om auktionen visas samt det högsta vinnande budet. Det skall inte visas någon budhistorik och det skall inte gå att lägga bud.

Via det Web API som finns går det att lägga till nya auktioner. Er applikation skall även innehålla ett formulär för att skapa en ny auktion. Finns det inga bud på auktionen skall den kunna tas bort. Det skall även gå att uppdatera den.

Ni har full frihet när det gäller gränssnittet, men det bör synas att ni lagt ned lite tid för att få det användarvänligt, enkelt och snyggt.

Ert projekt skall drivas enligt de riktlinjer vi går igenom på lektionerna och ni måste arbeta med versionshantering av all kod. Ni skall använda GitHub för att lagra och versionshantera kod. Ni skall även göra en planering och arbeta med aktiviteter och sprintar (Ej krav men om ni hinner, sätt upp en GitHub Action för att deploya er lösning till ett Azure konto).


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
