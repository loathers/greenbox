# greenbox-data

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

These files are ingested by functions within the `lib` folder, which take the data as written and stage it in formats where it can be used by **greenbox-script** and **greenbox-web**. `lib` contains a few more files than you have in the `data` folder; this is on purpose, as many of the files within `lib` actually generate _their own_ data files by accessing base mafia data and using that to generate the greenbox data needed. For example, there is a snippet within the `lib/familiars.ts` file as follows:

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

- Set up enumerated properties that represent necessary status variables for the item (IE, do you have this or not have this, and what will the data format for an entry of this type look like?)
- Have a series of statements and code snippets that can be used to frame the data as needed for either **greenbox-script** or **greenbox-web**
- Have code that can be used to compress the results **greenbox-script**, where mafia checks whether you have the variables or do not, allowing it to be transferred in a link
- Have code that can be used to reverse that compression, so the web interface in **greenbox-web** can populate your boxen

## Example Pull Requests

Having said all this, what does a PR within this space look like?

Glad you asked! Here are some situations where you'd want to change a file in **greenbox-data**:

- TPTB have added a new IOTM, and it needs to be added to our data.
  - This would be a relatively straightforward PR, adding an entry to the `iotms` export within `greenbox-data/data/iotms.ts`; you would simply find an IOTM that is similar to the IOTM that you're adding, and make a PR adding an entry to the end that properly signifies the item ID of the new IOTM, the month/year of release, the type of item it is, and whatever extra information may need to be passed (for instance, in the inflatable dodecapede example above, in addition to passing the item ID of the boxed version of the dodecapede, you also need to pass the familiar name of the dodecapede to make sure the item hooks up correctly)
- TPTB have added a new trophy, and it needs to be added to our data.
  - Basically exactly the same as above; open `greenbox-data/data/trophies.ts` and add an entry for the new trophy.
- We are not properly compressing or decompressing our data and it is leading to an error in Greenbox display.
  - [This would be an example of this kind of PR](https://github.com/loathers/greenbox/commit/48d8dde88b3b24a7562c2c66aa1795c66762c49f); bug reports revealed that the compression was not properly ordering IOTMs when passing data, so this PR fixed the order issue

This is by far going to be the most likely area that PRs will touch for this script; as things are added, it is our hope that we have made this system easy enough that it is feasible and plausible for relative newbies to the codebase to be able to add new content as it is released. Please let us know if the information here could be better presented or described!
