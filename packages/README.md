# Walking through the Structure of Greenbox

Greenbox is a script with significantly different architecture than many other TypeScript projects for KoL. Instead of just one script that compiles into a single file, Greenbox is essentially made up of two distinct scripts that share a broad host of functions and data that allow the two scripts to talk to each other seamlessly. One script generates the website, while the other script generates the file that KolMafia can install to pass data to the website. The final script contains the connector functions and the data that both scripts lean on.

This structure is often referred to as a ["monorepo"](https://semaphoreci.com/blog/what-is-monorepo) structure -- e.g., a repository that contains multiple distinct scripts. The fact that the web generator and the mafia script share the same data and are contained in the same overarching repository allows the code to be a bit easier to update, as changes to the overarching data files only need to happen in one place (and are relatively easy commits), while changes to the web interface or the compression structure can be handled by developers that are a bit more familiar with the intricacies of React page design.

In order to help folks submit PRs, we will attempt to briefly walk through the folder structure of Greenbox, and add distinct README.md files within each component script of the monorepo so that any developer wanting to start a PR has a better sense of where they might want to look for the code they need. To provide an initial map, here are the relevant folders that an aspiring Greenbox developer would want to be familiar with:

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

## Script-by-script Walkthroughs

Each of these folders has its own readme, which walks through how the folder is used and examples of pull requests that would touch code within that folder. To wit:

- [greenbox-data](greenbox-data/README.md)
- [greenbox-script](greenbox-script/README.md)
- [greenbox-web](greenbox-web/README.md)

Please visit these folders for more information about the three distinct scripts sitting within this monorepo.

## Testing Greenbox changes locally

Let's say you've built something that you'd like to put in as a PR, and you want to test whether your changes work as advertised.

Guess what? You can! Here is the procedure to build your branch locally and see how it works on your own machine without pushing to the loathers.net website.

- Within the root folder of greenbox, run `yarn run dev` within your terminal of choice.
- Open up [http://localhost:5173](http://localhost:5173) on your local machine.
- This web address _should_ show you a locally compiling version of Greenbox. If it doesn't, something has gone wrong.
- From there, run your compiled piece of TS code after porting it over to your local KoLMafia install.
- The generated string that you get by running `greenbox` in the GCLI should be testable within the localhost version of Greenbox, to see if the changes worked.

It's relatively simple. If you are having issues, please reach out in the [Ascension Speed Society Discord](https://discord.gg/tbUCRT5); #mafia-and-scripting is a good channel for this.

Thanks for reading. Happy development!
