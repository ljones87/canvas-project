## The Project
[original project link](https://github.com/stream-labs/canvas-frontend-project)

The task at hand is to build a simple canvas application that allows users to drag and drop images on the canvas. The following requirements should be met with my submission:

- The canvas should have a locked 16:9 aspect ratio

- The canvas should take up the maximum available space in the viewport. You should not need to scroll to see any part of the canvas, and it should be responsive to different window sizes.

- 2 images should be rendered at any position on the canvas. Images provided in the assets folder can be swapped for different ones, and they can be hardcoded.

  - Allowing the user to provide their own images is not part of this assignment.
  - Both of these images should be rendered on the same canvas. You can choose appropriate dimensions of the images but they should maintain proper aspect ratios of the original image sources.

- Each image should be click and draggable around the canvas with the mouse cursor. An image should not be allowed to be dragged into a position where it is partially outside the canvas.

- While the image is being dragged, add a green border of 2 pixels width around the dragged image. This border should disappear when the image is not actively being dragged.

### To Run

- After pulling the repo, run `yarn` to install dependencies.
- Run `yarn start` to run http-server which.
  - Grab the link from the terminal and open it in your browser.
- Run `yarn dev` to start the dev server via browser-sync with hot reloading.
  - Should be accessible at `localhost:3000`

### Q&A

#### 1. How long did it take you to complete this assignment?

  - Actual coding, it probably took about 4-5 hours. 8 if I include watching the videos.
    - I was completely unfamiliar with the canvas API, so I had to do a lot of research and watch several tutorials.
    - I followed along with some of the youTube tutorials, cleaning up and customizing as needed for the project.
    - **When I arrived at the task to add the green border, I used [claude.ai](https://claude.ai) to find the solution.**
      - If this is a disqualifier, should the project meet your expectations otherwise, I totally understand. I made this choice for two reasons:
        - I had spent a decent amount of time on the drag/drop research and establishing the dragging bounds and wanted to wrap things up to submit by Wednesday evening.
        -  I spent some time trying to look up and learn this information by traditional means, but AI was a much more time efficient.

#### 2. What about this assignment did you find most challenging?
  - Figuring out what was meant by images needing to be rendered using the canvas API, not `img` tags.
    - Most of what I came across when researching how to add images to a canvas involved adding the image tag to the html file, hiding them with CSS, then using the document selector to access them in the JavaScript file.
  - Once I had the images on the canvas, it was re-familiarizing myself with vanilla js.
  - **Note: adding this comment post submission. I am realizing we couldn't use `image` tags, not `img` tags. Because I went the path of `new Image()`, I didn't figure out how to make the height and width dynamic with the viewport, so the images are always at their given height/width in pixles. Had I used the `img` tags, I wouldn've been able to use media queries to re-size them. Sadly, I missed this so the images loose their position as the screen is re-sized, only interactable again on refresh, and with disproportionaly sized images depending on the screen.**
    - **I should have clarified the image note with the team before, apologies on that crucial miss!** 



#### 3. What about this assignment did you find unclear?

  - Just that bit about the images. Hoping I understood it correctly in how I implemented the image imports.
    Otherwise, I thought the project had very clear instructions.

#### 4. Do you feel like this assignment has an appropriate level of difficulty?

  - Yes. If someone were familiar with canvas and working in vanilla js, this would be a fairly straightforward project.

#### 5. Briefly explain the technical decisions you made in this project, i.e. architecture, code-splitting, libraries, or other decisions and tradeoffs.

  - I waffled between using vanilla js and starting the project with React, which is what I work in every day.
  - When I was going through the tutorials, they always started with vanilla js, so I decided to go with that for learning's sake.
  - The nature of interacting with the canvas through react would involve using a react ref hook and wrapping may of these functions within a useEffect/building a custom hook.
  - The biggest drawback in using vanilla js is accommodating the more complex considerations:

    - persisting state on refresh
    - ability to add/remove images from file input and/or src
    - reordering the z positions of each layers
    - instead of drawing static images, drawing custom object (like our alerts)
    - resizing and cropping objects
    - undo/redo

  - Persisting state shouldn't be an issue using local storage.
  - Adding/removing images should be relatively straight forward with an input tag and adding/filtering images from the array as needed. Resizing them for the canvas would add some extra work to that flow.
  - Accommodating Drawing custom objects, resizing and cropping, and undo/redo I would prefer to have this in React, as the complexity would benefit from react abstractions and modularization.
