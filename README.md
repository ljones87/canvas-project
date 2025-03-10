## The Project


A simple canvas application that allows users to drag and drop images on the canvas. 

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

