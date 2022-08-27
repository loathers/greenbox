# greenbox-script

```
packages
...
└── greenbox-script
    └── src
        |   ...
        └── greenbox.ts
...
```

The **greenbox-script** folder is where the core KOLMafia script for greenbox lives. The bundle that gets packaged to our [release](https://github.com/loathers/greenbox/tree/release) branch and is pulled by the git install demarcated on the [website](https://greenbox.loathers.net) & [overarching readme](https://github.com/loathers/greenbox/README.md) is generated through this script. 

Somewhat humorously, the code itself in greenbox-script is actually very, very simple -- when this walkthrough was written, it was only 3 files, totaling less than 300 lines of code overall. 

## Example Pull Requests 
Here are some use cases where you may want to change a file in greenbox-script:

- Greenbox is not correctly handling ownership conditions for a specific class of items.
    - [An example of this sort of PR is located here](https://github.com/loathers/greenbox/commit/0abe95e180a89ae26ad2c15c544f80e39a6a4285), where Gausie realized we were using the wrong "have" function for measuring ownership of familiars, and swapped it with the haveItem function in utils.ts.
- You are adding an entirely new set of items to test, and must tell Mafia to check ownership on those items.
    - [An example of this sort of PR is located here](https://github.com/loathers/greenbox/commit/30b230b8e20be286371068b59eb26d4c3b76eee5), where Scotch was adding initial support for IOTMs

For the vast majority of cases, changes within greenbox-script will involve a change to **greenbox.ts**, as that file represents the primary file packaged and built for release. 

It is also important to note that **greenbox-script** is the only area within greenbox that a developer should be referencing [libram](https://github.com/loathers/libram) functions or base [kolmafia](https://github.com/kolmafia/kolmafia) functions -- items in **greenbox-data** and **greenbox-web** are meant to function without any KOLMafia overhead whatsoever. Ergo, if you want to use either of those tools to do something cool, this is (by definition) where your code -has- to go.

We would caution that the **greenbox-script** folder, in a general sense, should not require significant changes for most simple PRs that are not adding entirely new classifications of things to track; most changes that impact this script will happen within the **greenbox-data** folder. However, if you would like to add anything new that is being parsed and passed to the **greenbox-web** website, you will need to update this to ensure Mafia is checking ownership conditions on the new items or values. 

