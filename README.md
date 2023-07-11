<img src="https://user-images.githubusercontent.com/8014761/186810254-65a2a81d-4976-405f-ac00-23fa3222924b.png" alt="greenbox logo" style="width: 50%;">

`greenbox` is a script to examine a [Kingdom of Loathing](https://www.kingdomofloathing.com/) player's overall loadout and return a graphical interface showing the user what they own and do not own, among some of the coolest items, tattoos, and trophies in the kingdom.

To install, run the following command on an up-to-date [KoLMafia](https://github.com/kolmafia/kolmafia) version:

`git checkout loathers/greenbox release `

Once installed, run `greenbox` in the GCLI and your profile will be updated at `https://greenbox.loathers.net/?u=<your player id>`. Whenever you re-run `greenbox`, these data will be updated automatically!

If you want to generate a non-public readout link, run `greenbox --private`. Similiarly, if you would like to remove your public profile just run `greenbox --wipe`.

To be reminded of usage instructions at any time, run `greenbox --help`.

## Development

We have constructed greenbox as a monorepo -- this means that there are three distinct scripts that live inside a single repo. To assist in the development of this script, we have added a series of readmes that should help walk through code structure and describe PRs that would touch each specific section.

For more information on the...

- ... overall structure, [click here](packages/README.md).
- ... data that powers greenbox, [click here](packages/greenbox-data/README.md).
- ... script run within KoLMafia to calculate and update your greenboxen, [click here](packages/greenbox-script/README.md).
- ... frontend of the script that displays the aforementioned data, [click here](packages/greenbox-web/README.md).
- ... service that receives, stores, and serves the data, [click here](https://github.com/loathers/oaf/blob/main/src/greenbox.ts).

## History

In KoL's community, "green boxes" are a reference to a profile snapshot script [once owned by BumCheekCity](http://forums.kingdomofloathing.com/vb/showthread.php?t=179109) and more [recently owned by CheeseCookie](http://forums.kingdomofloathing.com/vb/showthread.php?t=218735). In the parlance of these snapshots, a green box means you own the thing that's in the box. Hence the name of this script. While this script was coded from scratch, the general structure (and the community impact of the script) owes a substantial amount to BumCheekCity and CheeseCookie, and we are thankful for their contributions to KoL.
