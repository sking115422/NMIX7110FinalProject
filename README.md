# NMIX 7110 - Final Project

## Stock Charting Application

### Authors
- Spencer King

## Project Description
As an avid investor, I use many diffenent charting applications on a regular basis so for this project I thought
it would be a fun idea to try to create my own. The application I created is very straight forward. It is designed to allow
the user to input a stock ticker into the provided form on the webpage. Once the search button is hit, the application
retrieves the necessary stock data from an API and displays it graphically to the user for analysis. 

The charting package I chose to use has many feature includeing zooming in and out on the graph, selecting data in certain ranges
by draging a box around it with your mouse, and downloading the chart as a .png file. The application also returns the last 20 years
of applicable data for each stock.

## API
This application retrieves all of its data from a free API called Alpha Vantage. It is a very robust API, and has tons of different options
especially if you pay for your data. However, for the purposes of this application I chose to use the free daily data.

For the API call I used this exact url for reference: https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.state.stockTicker}&outputsize=full&apikey=${API_KEY}

Also below is a link to the API documentation where you can find example of the JSON files that are being returned. 

- [Link to Alpha Vantage Documentaion](https://www.alphavantage.co/documentation/)

## Framework & Runtime Enviroment
In this project I am using React and Node.js. 

React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

## Dependencies
This project has several key dependencies. I used react-bootstrap components to help give the webpage a clean polished look, and I used react-plotly for data visualization and charting. The links to the documentation for both can be found below.

- [Link to react-bootstrap Documentation](https://react-bootstrap.github.io/)
- [Link to react-plotly Documentation](https://plotly.com/javascript/react/)

## Hosting
For hosting this project I chose to use Netlify. Netlify is an intuitive Git-based workflow and powerful serverless platform to build, deploy, and collaborate on web apps. The entire process took less than 10 minutes, and I was extremely please with the results. I would highly recommend for anyone working with React and Node.js. Below I have left links to Netlify's website, and great video for getting the hosting set up. 

- [Netlify](https://www.netlify.com/)
- [Netlify Setup Video](https://www.youtube.com/watch?v=sGBdp9r2GSg&t=31s)


