# Weather App

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)

![Animation](https://user-images.githubusercontent.com/62571814/151380376-134ae4a8-2aa4-4883-b48b-dff77d56006c.gif)

> Application to show the weather informations about the searched city

### Access the application on your browser: (https://weather-app-plum-nine.vercel.app/)


## 💻 How it works

The use can enter a name of certain city and receive current weather data and of the next 7 days. He can change the temperature measurement unit from Celsius to Fahrenheit and vice-versa. The application maintain the last city searched in LocalStorage, so every time you re-load or re-open the application, the weather data of this city is going to be showed. The user can change the color theme between light or dark, according to his prefference.

## 💻 How it was made

It was made using Create-React-App with TypeScript and styles using Styled-Components. When the user types the city's name, two requests are made to Open Weather Map API: one receives the current data of that city, and another receives the weather data about the week. And another request is made to unsplash API to get one image of the city searched. 

## 🚀 Technologies used in project

- React
- TypeScript
- Styled-Components
- Framer Motion
- Axios
- Open Weather Map API
- Unsplash API

## ☕ How to start the project in your machine

Once the repository is cloned in your computer, to use the dev-world follow the steps below:

```
  // Open one terminal and run the following code to install all dependencies:
  yarn add
  
  // Then start the application
  yarn start
```
Now you can access the application in http://localhost:3000

## 📫 Contributing to dev-world

To contribute, follow the next steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b <branch_name>`.
3. Make your changes and confirm them: `git commit -m '<commit_message>'`
4. Send to the main branch: `git push origin <project_name> / <local>`
5. Create the pull request.

As an alternative, check the documentation of the Github to lear how to make a pull request: (https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Developer

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/bryanmaraujo544.png" width="100px;" alt="Bryan's profile photo"/><br>
        <sub>
          <b>Bryan Martins</b>
        </sub>
      </a>
    </td>

</table>

