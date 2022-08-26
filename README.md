# greenbox

`greenbox` is a script meant to examine a [Kingdom of Loathing](https://www.kingdomofloathing.com/) player's overall loadout and return a graphical interface showing the user what they own and do not own, among some of the coolest items, tattoos, and trophies in the kingdom.

To install, run the following command on [KolMafia](https://github.com/kolmafia/kolmafia) version [r26691](https://github.com/kolmafia/kolmafia/releases/tag/r26691) or later:

```git checkout loathers/greenbox release ```

Once installed, you can run greenbox at any time by running `greenbox` in the GCLI. 

## Development
We have constructed greenbox as a monorepo -- this means that there are three distinct scripts that live inside a single repo. To assist in the development of this script, we have added a series of readmes that should help walk through code structure and describe PRs that would touch each specific section.

- For more information on the overall structure, [click here](packages\README.md).
- For more information on the backend data of greenbox, [click here](packages\greenbox-data\README.md).
- For more information on the script run within KOLMafia to assess your greenboxen, [click here](packages\greenbox-script\README.md).
- For more information on the frontend of the script that ingests the aforementioned data, [click here](packages\greenbox-web\README.md).

## History 
In KOL's community, green boxes are a reference to a profile snapshot script [once owned by BumCheekCity](http://forums.kingdomofloathing.com/vb/showthread.php?t=179109) and more [recently owned by CheeseCookie](http://forums.kingdomofloathing.com/vb/showthread.php?t=218735). In the parlance of these snapshots, a green box means you own the thing that's in the box. Hence the name of this script. While this script was coded from scratch, the general structure (and the community impact of the script) owes a substantial amount to BumCheekCity and CheeseCookie, and we are thankful for their contributions to KOL.