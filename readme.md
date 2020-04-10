## Waste Away
* [General info](#info)
* [Technologies](#technologies)
* [Contents](#content)

## Info
This application allows users to search or browse for an item and determine its disposal
information, including method and depot, if applicable. Users may login in and see what they
have previously recycled/disposed of safetly, which is recorded by pressing a button on the given item's page. If an item is missing, users my submit a request composed of the item's name, disposal method and location, and/or image.
	
## Technologies
Technologies that were used for this project:
* Firebase Cloud Firestore Database
* HTML, CSS
* JavaScript
* Bootstrap 
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── add.html                 # File for adding an item
├── index.html               # Landing and home HTML file
└── README.md

 It has the following subfolders:
├── .git                     # Folder for git repo
├── HTML                     # Folder for other pages
├── images                   # Folder for images
├── scripts                  # Folder for external javascript
├── style                    # Folder for external CSS

 HTML folder files: 
├── login.html              # Firebase file
├── results.html            # Firebase file
├── searcher.html           # Firebase file

 images folder files:
├── banana.png               # Image of item
├── bleach.png               # Image of item
├── carBattery.jfif          # Image of item
├── fire-extinguisher.png    # Image of item
├── paint.png                # Image of item
├── propane.png              # Image of item
├── ziplock.jpg              # Image of item
 
 scripts folder files:
├── firebase_api.js          # Firebase file
├── index.js                 # Index functions file
├── search.js                # Functions supporting the results page

 style folder files:
├── indexcss.css             # CSS file for index and navbars
├── login.css                # CSS file for login page
├── results                  # CSS file for results page

```