# lass_greenbox

LASS_GreenBox is a script meant to examine a Kingdom of Loathing player's overall loadout and return a set of green boxes. In KOL's community, green boxes are a reference to a profile snapshot script [once owned by BumCheekCity](http://forums.kingdomofloathing.com/vb/showthread.php?t=179109) and more [recently owned by CheeseCookie](http://forums.kingdomofloathing.com/vb/showthread.php?t=218735). In the parlance of these snapshots, a green box means you own the thing that's in the box. The boxes represent a whole lot of things about your KOL account -- what premium items you own from Mr. Store, what skills you have permed, what familiars you have in your terrarium, et cetera. LASS_Greenbox is a modernized version of these snapshot scripts, allowing Discord connectivity and examination of a player's "green boxes" to figure out what that player needs to buy next, or what kind of premium items the player is on the lookout for.

## Current Task List

- [x] A prototype script that generates a JSON document of what an account has
  - [x] Lists out skills split by HC/SC
  - [ ] Lists levels of skills like slime skills & PVP rewards
  - [x] Lists out owned familiars
  - [x] Lists out owned but unused familiar hatchlings
  - [x] list out 90 & 100% Familiar Percentages
  - [ ] Lists out IOTMs split by ownership & usage
  - [x] Lists out tattoos
  - [x] Lists out trophies
  - [ ] Lists out ascension rewards
- [ ] A function to compile the JSON to base64 and kmail to oaf in-game
- [ ] A function within [oaf-js](https://github.com/Loathing-Associates-Scripting-Society/oaf-js) that takes this base64 snapshot and saves it to a database
- [ ] A single page application in whatever we feel like writing it in becomes hosted on oaf
- [ ] The single page learns to ingest this bas64 blob, converts it back to JSON and then uses it to create a user's greenbox
- [ ] Add different sorting/filtering/display options to the JSON (show only what a user has, sort based on most recent tier list, only show standard iotm/skills, et cetera)
