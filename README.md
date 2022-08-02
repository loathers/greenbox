# greenbox

`greenbox` is a script meant to examine a Kingdom of Loathing player's overall loadout and return a set of green boxes. In KOL's community, green boxes are a reference to a profile snapshot script [once owned by BumCheekCity](http://forums.kingdomofloathing.com/vb/showthread.php?t=179109) and more [recently owned by CheeseCookie](http://forums.kingdomofloathing.com/vb/showthread.php?t=218735). In the parlance of these snapshots, a green box means you own the thing that's in the box. The boxes represent a whole lot of things about your KOL account -- what premium items you own from Mr. Store, what skills you have permed, what familiars you have in your terrarium, et cetera. LASS_Greenbox is a modernized version of these snapshot scripts, allowing Discord connectivity and examination of a player's "green boxes" to figure out what that player needs to buy next, or what kind of premium items the player is on the lookout for.

## Current Task List

- [x] A prototype script that generates a JSON document of what an account has
  - [x] Lists out skills split by HC/SC
  - [x] Lists levels of skills like slime skills & PVP rewards
    - [ ] Show maximum level for skills with a maximum level
  - [x] Lists out owned familiars
  - [x] Lists out owned but unused familiar hatchlings
  - [x] list out <strike>90 &</strike> 100% Familiar Percentages
  - [ ] Lists out IOTMs split by ownership & usage
  - [x] Lists out tattoos
  - [x] Lists out trophies
  - [ ] Lists out ascension rewards
- [x] A single page application
- [ ] Add different sorting/filtering/display options to the JSON (show only what a user has, sort based on most recent tier list, only show standard iotm/skills, et cetera)

# Possible future tasks
- [ ] Integration with [oaf-js](https://github.com/Loathing-Associates-Scripting-Society/oaf-js). `greenbox` would kmail JSON to OAF, OAF would store to a db, users could be queried by name and shown the results from that database
- [ ] Ship SPA as a relay script 