
# greenbox-web

```
packages
...
└── greenbox-web
    ├── src
        ├── components
        |   └── [various tsx helpers]
        └── store
```

This is by far the most out-of-the-ordinary script for most KOL scripters, as it is built in React and is staged via a Github-Pages deployment. It is not immediately straightforward what things are doing if you do not know React. This is the script that builds the website visible on [greenbox.loathers.net](https://greenbox.loathers.net). There are two primary folders you'll need to concern yourself with if you intend to make a PR for greenbox that touches **greenbox-web**.

Within `greenbox-web/src/components`, you will find a whole host of grids, functions, and builders that are used to help build the individual components of the website. Every file in `components` is a TSX file, which is a TypeScript file written in JSX, an embeddable XML-like syntax used commonly in React applications. For example, at writing, the `Familiars.tsx` file contains (effectively) the entirety of the Familiars dropdown that exists on the web deployment. It imports a bunch of data from **greenbox-data**, stages the data according to the overarching style created in `greenbox-web/src/store`, and creates the general formatting for the Familiars box. 

The same is true of many of the items within components, but not all. For instance, `AlphaImage.tsx` is a helper function built by Gausie that essentially builds transparency where none exists for the black-and-white images KOL is known for, allowing for polyfill of the whitespace when you are filling a box green for the web interface. `Image.tsx` simply redirects images to KOL's image server, allowing us to glide on the coattails of TPTB's web hosting for the six people in the known universe who use our script. The components have a lot of different elemnts that are bespoke and relevant only to that specific component. Please dig through these and attempt to understand their working patterns before modifying them.

Within `greenbox-web/src/store`, you will find the .ts files that are used to combine all the myriad components into a final website. The primary file here is (fittingly) `index.ts`, which imports essentially everything from `components` and plops them all down into a file that users can view. 

## Example Pull Requests
I will be completely straight-up with you: if you don't know React, you probably should not touch **greenbox-web**. It is harder to test your changes in **greenbox-web**, and features relatively disparate syntax from the sort of development that an average KOL scripter generally does. 

However, if you feel familiarity and comfort with React, PRs that would warrant touching **greenbox-web** would be things like this:

- Add an extra visual marker for bonus content
  - [This PR by Gausie](https://github.com/loathers/greenbox/commit/d7d73a76402b9d9310f931af4e958125a933d5c0) is a great example of this; he adds a small badge within the React component that's being used to display individual years, giving the user a tiny mark if they happen to have all the IOTMs released in a given year. This didn't require touching **greenbox-data** or **greenbox-script**, it is entirely a visual change that was easy to achieve by simply adding an extra bit of utility logic and changing the React tile.
- Change certain visual components to be more visually pleasing
  - Once again, this is not one I would recommend to someone who doesn't know React. Gausie is a King, tho, so [this PR where he improved AlphaImage.tsx](https://github.com/loathers/greenbox/commit/ac5dfdc6d68cca4d9bf17d3ac3c8fec8c2e7f1b7) by adding a few extra dependencies and cleverly improving the logic for whitespace detection is a good example of a purely visual change that would warrant touching **greenbox-web**

We will once again emphasize: **greenbox-web** is a reasonably simple React script in the grand scheme of things, but it is still considerably different from scripts most Kingdom of Loathing script folks are used to seeing. Before making any changes, we encourage you to test out your work. Please see the readme in the [packages](../README.md) container for more information on how to test PRs built that touch **greenbox-web**, to ensure you are following best practices and properly instantiating a local instance of greenbox.  
