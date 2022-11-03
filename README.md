# Websites Classifier by Naive Bayes
This project consists of using web scrapping and multiprocessing to classify web pages. The classification method is the naive Bayes method, in addition, react is used to display the data obtained.

## App Features - Frontend

![image](https://user-images.githubusercontent.com/61397177/199617663-6dbb2f5e-558c-47f7-b6c7-7caa7f83337e.png)
![image](https://user-images.githubusercontent.com/61397177/199617882-9c485564-636d-47a9-b5ab-b364e8773f61.png)


### Pages

Frontend/naive-bayes-c/src/pages/

- ClassifierPage.js - Page that shows the results of classifing an array of links
- LinkClassifierPage.js -Page that shows the results of classifing an unique link

### Components

Frontend/naive-bayes-c/src/components/
- ColumnCharts.js - A chart template to show the results
- FormComponent.js - Form template to introduce a link
- PaginatedTable.js - A table templato to show data
- PieChar.js - A chart template to show the results

### Routers

Frontend/naive-bayes-c/src/config/

- AppRouter.js - App navigation routing 


### Getting Started

1. cd into the FrontEnd/naive-bayes-c proyect directory
2. npm install 
3. npm start

## App Features - Backend

### Web Scraping
To carry out the web scraping part, the "requests" libraries were used to obtain the source code of the page, later "BeautifulSoup" was used to be able to make use of the elements or labels of the web page.
Then a soup object returned by the "BeautifulSoup" library is obtained from the source code of the web page, then proceed to obtain all the text contained in the web page through the following list of tags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'span', 'title', 'b', 'i', 'strong', 'em', 'cite'].

### Multithreading
For this project, 2 levels of multiprocessing were implemented using the multithreading technique, for the first level the list with more than 7,000 links was taken and divided into 4 parts, then each of these parts was assigned to a different thread, so which is worked with 4 different threads for the first level,
the second level of multiprocessing was implemented in the web scraping section and the counting of the words found on the web page, 2 assigned threads for obtaining all the text of the web page with the help of the "BeautifulSoup" functions and 4 threads implemented for word count.

The libraries used for this section were "threading" which allows creating new threads and provides functions to work with the useful life of the thread, the "queue" library was also used, which is very interesting and important for the return of results of the functions executed by threads, this library was implemented due to the need to return some data worked within functions that were executed through new threads, since the functions executed with threads do not allow the return of data, for which this library was very useful for this project, this library works like a stack and is the safest way to share data between multiple threads, a new queue(instance of this library) is created and sent as a parameter to the function that will be executed with the new thread, then the results that they want to be returned must be inserted in the queue, then we can extract the data stored in the queue at the time it is required.

### Naive Bayes

## Authores
Kevin Garita Monge y Cristopher Soto Calderón
