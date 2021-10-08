<h1 align="center">Rick and Morty Characters</h1>

<p align="center"> This application utilises the Rick and Morty API to render information about the characters. 
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This application utilises the Rick and Morty API to render information about the characters. The site allows the user to filter the characters based on character name, status, gender and species. This is accomplished using GraphQL to query the API based on the user inputs.

On page load, an graphql query is made to get all characters from the API.

Once the user clicks ‘Search’ from the filters, the query is recalled with the updated state to render the characters corresponding to the user inputs. 

The graphql query returns a maximum of 20 characters at a time. Therefore, when greater than 20 characters meet the user inputs, a button ‘Load next’ is rendered and when clicked concatenates the next 20 characters to data returned from the original call. 

## 🏁 Getting Started <a name = "getting_started"></a>

Clone this GitHub repo and run:

```
yarn
```

to install the node modules. Then run:

```
yarn start
```
and open http://localhost:3000.


## 🔧 Running the tests <a name = "tests"></a>

Unit testing is included in the project using Jest.

To launch the test runner:

```
yarn test
```


## ⛏️ Built Using <a name = "built_using"></a>

- Styled-components
- React-hook-form
- Apollo client

## ✍️ Authors <a name = "authors"></a>

- [@TSaunders1](https://github.com/TSaunders1/)
