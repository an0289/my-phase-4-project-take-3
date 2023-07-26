# My Phase 4 Project: Zelda Item Shop 

## Overview 

Zelda Item Shop is a small shop specializing in items found in The Legend of Zelda: Wind Waker (purely because their item designs are so adorable). Logged-in users are able to scroll through items, leave reviews, edit and delete their reviews, and add items they feel are missing from the collection. So, please be sure to signup if you do not already have an account! 

## Programming Languages 

This app was created using React.js for the frontend and Ruby on Rails for the backend, and sqlite3 is used to manage the database  

## Installation

Run the following commands in two separate consoles to install all the necessary packages and dependencies: 

Backend (Ruby on Rails):

```bash
bundle install 
rails db:create db:migrate db:seed 
rails s 
```

Frontend (React.js): 

Navigate into the client folder and run:

```bash
npm install 
npm start 
```

## Usage

Login or Signup to view the collection of items 

![Login](/my_video.mp4)

![Signup](.my_video_1.mp4)

Leave reviews on items and view your reviewed items in the 'My Reviewed Items' tab

![AddReview](/my_vido_2.mp4)

Edit or delete reviews from the 'My Reviewed Items' tab 

![EditDelete](/my_video_3.mp4)

Add Items to the collection in the 'New Item' tab 

![AddItem](/my_video_4.mp4)

## Requirements 

- Ruby 2.7.4
- NodeJS (v16) and npm

## Contributing
Thank you to [Create React App](https://github.com/facebook/create-react-app) for providing the starter code for my app

Thank you to [Semantic UI React](https://react.semantic-ui.com/) for the webpage design

Thank you to [FAVPNG](https://favpng.com/) for the item images

Thank you to [Wallpaper Abyss](https://wall.alphacoders.com/) for the background images 

## License

[MIT](https://choosealicense.com/licenses/mit/)