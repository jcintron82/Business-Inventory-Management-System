# Inventory Management and Viewing System

Currently In-Progress

**Overview:**
A business management system which allows authenticated users (employees) to add, edit and delete product. Also offering the displayed product seperated by category for customer browsing.

**How It's Made:**
Tech used: JavaScript, HTML, CSS, Node.js, Express, MongoDB, Pug

The project skeleton is originally spun up using express-generator with Pug as the templating engine. The goal from the start was to have a clean and efficient UI in which both customers and employees can find ease of use in. The application has a log in form where credentials can be entered to lead to a new product form. The form input is posted to a MongoDB collection; using a piece of the form data to determine which specific Schema to use and consequently, which specific collection to submit to. The Pug templates are written in HTML5 with placeholder data for the product data which is retrieved using the find() method via Mongoose. Products are displayed in alphabetical order and are grouped by product type. Users have a search bar option to search for specific products. The application is fully mobile responsive and takes accessibility concerns into mind as well. Below is a photo of the basic architechure for the website flow. 

![0](https://user-images.githubusercontent.com/71289948/210195002-4a177849-31c1-44b2-b949-82c6cca5161a.jpg)

**Other Examples:**

Take a look at these other examples of my work below:

**Velgara Excavating:**
https://github.com/jcintron82/Velgara-Excavating

**Magnolia Marketplace**
https://github.com/jcintron82/Magnolia-Marketplace

**PostIt! Dev Bulletin Board:** 
https://github.com/jcintron82/Bulletin-Board
