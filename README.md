# demo-gif-creator

Script for Creating Demo GIFs from images.

This script is designed to automate the creation of animated GIFs from a series of screenshots, ideal for showcasing your application's functionality in README files on GitHub.

It allows you to easily generate dynamic visual presentations of your projects, which can be embedded directly in your repository to demonstrate key features in action.

Check out my other repositories where I've added gifs showing the app in action. They were created using this script.

## Features:
**Ease of Use:** Simply place your screenshots in the images directory, adjust the GIF parameters in the script, and run node create-gif.js to generate your GIF.

**Customizable Parameters:** The script allows you to set the target dimensions, quality, repeatability, and frame delay of the GIF, giving you full control over the final output.

**Versatility:** While primarily intended for creating demo GIFs of applications, this script can also be used to generate other types of animations from PNG images.

## How to Use:
**Preparation:** Place your screenshots in the images directory.

**Configuration:** In the create-gif.js script, set the target dimensions, quality, animation repeatability, and frame delay.

**Generate GIF:** Run the script using the command node create-gif.js to create an animated GIF, which will be saved as output.gif.

This tool is perfect for quickly creating professional-looking visual demos of your applications, greatly enhancing the appeal of your GitHub repositories.

## Setup

```
# clone repository
git clone https://github.com/kvvasuu/demo-gif-creator.git
cd demo-gif-creator

# install dependencies
npm install

# create images directory
(default is "./images")

# set up all properties in code
directories, dimensions, gif parameters etc. // commented stuff

# run
node create-gif.js

```
