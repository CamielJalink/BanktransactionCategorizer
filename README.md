# BanktransactionCategorizer

This project is meant as a demonstration of / practice with my React and Typescript skills.

Currently it contains:
- A simple express server-side. Currently it reads banktransactions from a (gitignored) .csv file, 
formats those transactions and returns them to the client side app.
- A client side app created with create-react-app. Attempts to fetch formatted banktransactions from the server-side, 
so that the user can categorize them to help gain insight in his or her spending habits.

I stopped building this project when I found a job using VueJS instead. Since building this it has accumulated a lot of potential security risks which where fixed by dependabot pull requests. However, I haven't come around to fixing the errors these PRs have caused.
