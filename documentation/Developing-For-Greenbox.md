# Walking through Greenbox's Code

Greenbox is a script with significantly different architecture than many other TypeScript projects for KoL. Instead of simply one script that compiles into a single file, Greenbox is essentially made up of two scripts that share a library of functions that allow them to talk to each other seamlessly. One script generates the website, the other script generates the file that KolMafia can install to pass data to the website. This allows the code to be a bit easier to update, as changes to the overarching data files only need to happen in one place (and are relatively easy commits) while changes to the web interface can be handled by developers that are a bit more familiar with the intricacies of React page design. This guide will attempt to briefly walk through the folder structure of Greenbox, so that any developer wanting to start a PR has a better sense of where they might want to look for the code they need.

To provide an initial map, here are the relevant folders that an aspiring Greenbox developer would want to be familiar with.

```
packages
├── greenbox-data
│   ├── data
│   |   └── [section].ts; only for stored data
│   └── lib
│       └── [section].ts
├── greenbox-script
│   └── src
│       └── greenbox.ts
└── greenbox-web
    └── src
        ├── components
        |   └── [various tsx helpers]
        └── store
```

I will go over these in sections, starting with the one that is the most similar to TypeScript KOL scripts that a given developer might be used to using.

## greenbox-script

```
packages
...
└── greenbox-script
    └── src
        └── greenbox.ts
...
```

The **greenbox-script** folder is where the core KOLMafia script lives. The bundle that gets packaged to our [release](https://github.com/loathers/greenbox/tree/release) branch and is pulled by the git install demarcated on the website (and readme!) is generated through this script. Somewhat humorously, the code itself in greenbox-script is actually very, very simple -- when this walkthrough was written, it was only 3 files, totaling less than 300 lines of code overall. 

Here are some use cases where you may want to change a file in greenbox-script:

- Greenbox is not correctly handling ownership conditions for a specific class of items.
    - [An example of this sort of PR is located here](https://github.com/loathers/greenbox/commit/0abe95e180a89ae26ad2c15c544f80e39a6a4285), where Gausie realized we were using the wrong "have" function for measuring ownership of familiars, and swapped it with the haveItem function in utils.ts.
- You are adding an entirely new set of items to test, and must tell Mafia to check ownership on those items.
    - [An example of this sort of PR is located here](https://github.com/loathers/greenbox/commit/30b230b8e20be286371068b59eb26d4c3b76eee5), where Scotch was adding initial support for IOTMs

For the vast majority of cases, changes within greenbox-script will involve a change to **greenbox.ts**, as that file represents the primary file packaged and built for release. It is also important to note that **greenbox-script** is the only area within Greenbox that a developer should be referencing [libram](https://github.com/loathers/libram) functions or base [kolmafia](https://github.com/kolmafia/kolmafia) functions -- items in **greenbox-data** and **greenbox-web** are meant to function without any KOLMafia overhead. Ergo, if you want to use either of those tools to do something cool, this is (by definition) where your code -has- to go.

We would caution that the **greenbox-script** folder, in a general sense, should not require significant changes for most simple PRs that are not adding entirely new classifications of things to track; most changes that impact this script will happen within the **greenbox-data** folder, which we will now discuss.

## greenbox-data

```
packages
└── greenbox-data
    ├── data
    |   └── [section].ts; only for stored data
    └── lib
        └── [section].ts
...
```

The **greenbox-data** folder is where we store data and helper functions that can be accessed by both **greenbox-script** and **greenbox-web**. Having a data folder like this allows for easier updates to the script. By only having a data folder that feeds into those two scripts, the actual process of updating for new data can be done by a novice coder and potentially without any testing procedures whatsoever in the case of relatively simple addition conditions. This should (eventually) help us avoid the primary issue with this script's predecessor, cc_snapshot, where the actual architecture was complex enough that only CheeseCookie really could do significant updates. 

There are two core folders within **greenbox-data** -- the `data` folder and the `lib` folder. They are somewhat self-explanatory, but we'll do our level-best to explain them anyway. The data folder contains long exports of data fields in specific formats attuned to the item being measured. At time of writing, we have data files for **classes, IOTMs, path points, tattoos, and trophies**. These data files have differential formatting; as an example, entries in the **tattoos.ts** file in `data` look like this: 
```js
  { name: "Animelf Apparel", image: "animelftat", outfit: 89 },
```
... while entries in the **iotms.ts** file in `data` look like this:
```js
  { id: 1242, month: 6, year: 2005, type: "familiar", familiar: "inflatable dodecapede" }, // deflated inflatable dodecapede
```
These files are ingested by functions within the `lib` folder, which take the data as written and stage it in formats where it can be used by **greenbox-script** and **greenbox-web**. `lib` contains a few more files than you have in the `data` folder; this is on purpose, as many of the files within `lib` actually generate *their own* data files by accessing base mafia data and using that to generate the greenbox data needed. For example, there is a line within the `lib/familiars.ts` file as follows:
```js
export const loadFamiliars = async (lastKnownSize: number) => {
  const raw = await loadMafiaData("familiars", lastKnownSize);

  if (raw === null) return null;

  return {
    ...raw,
    data: raw.data.filter((p) => p.length > 2).map(parseFamiliar),
  };
};
  ```
As you might expect, this loads up the mafia data for familiars; this means that when new familiars are added, this script actually doesn't need any changes -- simply changing the core mafia data will update the familiars that Greenbox has access to! 

Regardless. Whether the files in `lib` are generating their own data or not, they mostly follow a similar structure. Files within `lib` will:

- Set up enumerated properties that represent necessary status variables for the item (IE, do you have this or not have this, and what will the data format for an entry of this type look like)
- Have a series of statements and code snippets that can be used to frame the data as needed for either **greenbox-script** or **greenbox-web**
- Have code that can be used to compress the results **greenbox-script**, where mafia checks whether you have the variables or do not, allowing it to be transferred in a link
- Have code that can be used to reverse that compression, so the web interface in **greenbox-web** can populate your boxen

Having said all this, what does a PR within this space look like? Glad you asked, person on the other side of the computer! Here are some examples where you'd want to change a file in **greenbox-data**:

- TPTB have added a new IOTM, and it needs to be added to our data.
    - This would be a relatively straightforward PR, adding an entry to the `iotms` export within `greenbox-data/data/iotms.ts`; you would simply find an IOTM that is similar to the IOTM that you're adding, and make a PR adding an entry to the end that properly signifies the item ID of the new IOTM, the month/year of release, the type of item it is, and whatever extra information may need to be passed (for instance, in the inflatable dodecapede example above, in addition to passing the item ID of the boxed version of the dodecapede, you also need to pass the familiar name of the dodecapede to make sure the item hooks up correctly)
- TPTB have added a new trophy, and it needs to be added to our data.
    - Basically exactly the same as above; open `greenbox-data/data/trophies.ts` and add an entry for the new trophy.
- We are not properly compressing or decompressing our data and it is leading to an error in Greenbox display.
    - [This would be an example of this kind of PR](https://github.com/loathers/greenbox/commit/48d8dde88b3b24a7562c2c66aa1795c66762c49f); bug reports revealed that the compression was not properly ordering IOTMs when passing data, so this PR fixed the order issue

This is by far going to be the most likely area that PRs will touch for this script; as things are added, it is our hope that we have made this system easy enough that it is feasible and plausible for relative newbies to the codebase to be able to add new content as it is released. Please let us know if the information here could be better presented or described!

## greenbox-web

```
packages
...
└── greenbox-web
    ├── src
        ├── components
        |   └── [various tsx helpers]
        └── store
```

Finally, we have **greenbox-web**. This is by far the most out-of-the-ordinary script for most KOL scripters, as it is built in React and is staged via a Github-Pages deployment. It is not immediately straightforward what things are doing if you do not know React. This is the script that builds the website visible on [greenbox.loathers.net](https://greenbox.loathers.net). There are two primary folders you'll need to concern yourself with if you intend to make a PR for greenbox.

Within `greenbox-web/src/components`, you will find a whole host of grids, functions, and builders that are used to help build the individual components of the website. Every file in `components` is a TSX file, which is a TypeScript file written in JSX, an embeddable XML-like syntax used commonly in React applications. For example, at writing, the `Familiars.tsx` file contains (effectively) the entirety of the Familiars dropdown that exists on the web deployment. It imports a bunch of data from **greenbox-data**, stages the data according to the overarching style created in `greenbox-web/src/store`, and creates the general formatting for the Familiars box. The same is true of many of the items within components, but not all. For instance, `AlphaImage.tsx` is a helper function built by Gausie that essentially builds transparency where none exists for the black-and-white images KOL is known for, allowing for polyfill of the whitespace when you are filling a box green for the web interface. `Image.tsx` simply redirects images to KOL's image server, allowing us to glide on the coattails of TPTB's web hosting for the six people in the known universe who use our script. Et cetera.

Within `greenbox-web/src/store`, you will find the .ts files that are used to combine all the myriad components into a final website. The primary file here is (fittingly) `index.ts`, which imports essentially everything from `components` and plops them all down into a file that users can view. 

I will be completely straight-up with you: if you don't know React, you probably should not touch **greenbox-web**. It is harder to test your changes in **greenbox-web**, and features relatively disparate syntax from the sort of development that an average KOL scripter generally does. However, if you feel familiarity and comfort with React, PRs that would warrant touching **greenbox-web** would be things like this:

- Add an extra visual marker for bonus content
  - [This PR by Gausie](https://github.com/loathers/greenbox/commit/d7d73a76402b9d9310f931af4e958125a933d5c0) is a great example of this; he adds a small badge within the React component that's being used to display individual years, giving the user a tiny mark if they happen to have all the IOTMs released in a given year. This didn't require touching **greenbox-data** or **greenbox-script**, it is entirely a visual change that was easy to achieve by simply adding an extra bit of utility logic and changing the React tile.
- Change certain visual components to be more visually pleasing
  - Once again, this is not one I would recommend to someone who doesn't know React. Gausie is a King, tho, so [this PR where he improved AlphaImage.tsx](https://github.com/loathers/greenbox/commit/ac5dfdc6d68cca4d9bf17d3ac3c8fec8c2e7f1b7) by adding a few extra dependencies and cleverly improving the logic for whitespace detection is a good example of a purely visual change that would warrant touching **greenbox-web**

## Testing your changes as you develop for Greenbox

Hopefully, this guide has assisted you in figuring out where your changes need to happen. Let's say you've built a PR, and you want to test whether your changes work as advertised.

Here is the procedure to build your branch and see how it works on your local machine.

- Within the root folder, run `npx lerna run watch` within your terminal of choice
- Open up [http://localhost:5173](http://localhost:5173) on your local machine; this should show you a locally compiling version of Greenbox
- From there, run your compiled piece of TS code after porting it over to your local Mafia install, then use the generated string on your localhost version of Greenbox to see if the changes took

Thanks for reading. If you have any questions about Greenbox development, please let us know in the [Ascension Speed Society Discord](https://discord.gg/tbUCRT5). Happy coding!