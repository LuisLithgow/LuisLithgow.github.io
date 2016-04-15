// $(function() {  

// 1 - use the 'data' variable to store an object '{}'
// which will act like a small database. Objects are made
// up of various 'property: value' pairs (think dictionary).
// All properties must be unique (i.e. not used more than once).
var data = { 
	royals: { 
		// console.log();
		image: 'images/teams/royals.png',
		image2: 'images/players/alex_gordon.jpg',
		prediction: 'The Royals Way has worked two years in a row, so they’re not going to stop now. Greg Holland gets felled by Tommy John surgery? Ink Joakim Soria to re-create the three-headed bullpen monster. Reclamation projects play a sizable role in the 2015 team’s success? Re-sign Chris Young, then buy low on Dillon Gee and Travis Snider. Wait patiently for years until Eric Hosmer, Mike Moustakas, Lorenzo Cain and Alcides Escobar grow into impact players? Bring them (and Alex Gordon) all back for another run. Teams that (mostly) stand pat after winning it all tend to see significant declines the following season, and the projection systems see that happening with the Royals. But if you’re going to buck that trend, doing so with a core group of players in their 20s, and a high-contact offense/impenetrable bullpen approach that’s crushed expectations two years in a row, could be a good way to give it a shot.',
		player: 'Alex Gordon',
		theTeam: 'Kansas City Royasls',
	},
	// 2 - Each team is the property with a value
	// of another object! '{}'
	astros: { 
		image: 'images/teams/astros.png',
		image2: 'images/players/jose_altuve.jpg',
		prediction: 'One of Bill James’s lasting contributions to the field of analytics is the Plexiglas Principle. Related to the broader idea of regression toward the mean, the Plexiglas Principle posits that teams or players coming off a big jump (or drop) in performance one year tend to edge back toward the middle the following season. The Astros gained 16 games in the standings in 2015, going from an also-ran to a playoff team. That would seem to make them prime Plexiglas candidates, yet I don’t see that happening here. A full season of shortstop wunderkind Carlos Correa will be electric and add at least a couple more wins to Houston’s ledger. Only two members of the projected lineup are over 30, and by only a few months: Carlos Gomez and likely platoon guy Luis Valbuena. The rotation got a back-end bargain with the addition of Doug Fister for just $7 million plus incentives, and the bullpen should benefit from the off-season trade for young flamethrowing closer Ken Giles. Add to that GM Jeff Luhnow’s demonstrated willingness to get aggressive at the deadline, and the Astros’ first division title in 15 years is very much in play.',
		player: 'Jose Altuve',
		theTeam: 'Houston Astros',
	},
	blueJays: {
		image: 'images/teams/blue_jays.png',
		image2: 'images/players/josh_donaldson.jpg',
		prediction: 'How do you replace David Price? If you’re the Blue Jays, you throw multiple bodies at the problem. The biggest piece in that effort is J.A. Happ, whose three-year, $36 million contract is either insane or perfectly logical, depending on whether you believe Pirates pitching coach Ray Searage’s hurler-whisperer skills have a lasting impact. Then you pick up a capable swingman in Jesse Chavez to add depth. Then you trade for Drew Storen, upgrading the bullpen. Add a full season of Marcus Stroman, and optimism over Aaron Sanchez likely claiming the fifth starter role, and you have a Jays staff that has a chance to make up for the loss of Price ... or more precisely, the two months of Price that they had last year. Having baseball’s best offense return intact for another season won’t hurt either.',
		player: 'Josh Donaldson',
		theTeam: 'Toronto Blue Jays',
	},
	rangers: {
		image: 'images/teams/rangers.png',
		image2: 'images/players/cole_hamels.jpg',
		prediction: 'We’ve already forgotten about it thanks to the bat flip heard ’round the world (or ’round Canada, anyway), but the Rangers making the playoffs last year was a damn miracle. The starting rotation got pelted by injuries, and the bullpen completely turned over in-season. Yet thanks to a combination of fill-in kids, big bounce backs for Prince Fielder and Shin-soo Choo and enough duct tape to hold the starting five together until Cole Hamels could arrive, Texas tiptoed away with the AL West crown. In 2016 they’ll get a full season from Hamels, potentially 25 starts from Yu Darvish, and 22-year-old rising star second baseman Rougned Odor with another year of experience under his belt. The Rangers also have a slew of intriguing prospects on the way, with outfielders Nomar Mazara and Lewis Brinson candidates to make an impact this year, and slugger Joey Gallo back for another go-round after struggling in his first exposure to the big leagues last year.',
		player: 'Cole Hamels',
		theTeam: 'Texas Rangers',
	},
	redSox: {
		image: 'images/teams/red_sox.png',
		image2: 'images/players/david_price.jpg',
		prediction: 'The signings of Pablo Sandoval and Hanley Ramirez look predictably terrible one year in. So rather than mess around again with deeply flawed players, the Red Sox went for as close to a sure thing as you can get, handing half of New England (plus future Vermont maple syrup considerations) to consistently excellent lefty ace David Price. Spending top dollar for premium starting pitching perfectly fits the traditional mandate put forth by new GM Dave Dombrowski in his previous gigs. Mookie Betts and Xander Bogaerts are budding stars, fellow homegrown prospects Jackie Bradley Jr. and Blake Swihart could be primed for mini-breakouts, and there’s more young talent on the way with lefty starter Henry Owens, infielder Deven Marrero and others poised to contribute at some point this season. David Ortiz’s swan song will get most of the love, but if the Sox are going to return to the postseason in 2016, it will be on the strength of better pitching and big contributions from the kids.',
		player: 'David Price',
		theTeam: 'Boston Red Sox',
	},
	yankees: {
		image: 'images/teams/yankees.png',
		image2: 'images/players/alex_rodriguez.jpg',
		prediction: 'Confession time: I was all set to pick the Yankees to return to the playoffs ... then news of Greg Bird’s season-scuttling shoulder injury hit. Bird batted a robust .261/.343/.529 in his rookie campaign, but in only 178 plate appearances. Still, he represented a badly needed insurance policy in the event that one or more old guys break down. You have to take the under on Alex Rodriguez and Mark Teixeira hitting 64 homers again. Meanwhile, Carlos Beltran’s defense is so bad in rightfield that he shouldn’t be playing anywhere other than DH, a position that A-Rod currently occupies. The addition of Aroldis Chapman gives the Yanks a ludicrously great bullpen, and the young quartet of Masahiro Tanaka, Michael Pineda, Nathan Eovaldi and Luis Severino is highly underrated. But even with the addition of second baseman Starlin Castro, the lineup could be Swiss cheese by the All-Star break.',
		player: 'Alex Rodriguez',
		theTeam: 'New York Yankees',
	},
	indians: {
		image: 'images/teams/indians.png',
		image2: 'images/players/michael_brantley.jpg',
		prediction: 'In basketball, land one superstar player and the future of a franchise can dramatically change. But that’s rarely the case in baseball—there are too many other positions on the field. That said, Francisco Lindor sure made a big difference for the 2015 Indians. Before the multitalented shortstop’s June 14 debut, Cleveland was playing horrific defense, wasting some impressive starting pitching and sitting three games under .500. Thereafter, the Indians ranked among the best defensive teams in the baseball, winning four more games than they lost. That defensive excellence, combined with the most strikeout-heavy starting rotation in the majors, could create a run-prevention powerhouse.',
		player: 'Michael Brantley',
		theTeam: 'Cleveland Indians',
	},
	mariners: {
		image: 'images/teams/mariners.png',
		image2: 'images/players/robinson_cano.jpg',
		prediction: 'Jerry Dipoto wasted no time in his role as the Mariners’ new GM, grabbing four new players for the lineup (Adam Lind, Nori Aoki, Chris Iannetta and Leonys Martin), upgrading the rotation and performing surgery on a bullpen that now has multiple new arms, including Joaquin Benoit and Steve Cishek for the eighth and ninth innings. Expect the M’s to win more close games this season thanks to a relief corps that should be much better than 2015’s sorry group. The addition of Lind should help a team that fared reasonably well against righthanded pitching last year become significantly better against it this season. Add to that a starting rotation that could be much improved with the additions of Wade Miley and Nathan Karns, plus the possibility of a huge breakout for 23-year-old Taijuan Walker. Don’t sleep on the Mariners, who could make a big leap after a sub-.500 season.',
		player: 'Robinson Cano',
		theTeam: 'Seattle Mariners',
	},
	rays: {
		image: 'images/teams/rays.png',
		image2: 'images/players/chris_archer.jpg',
		prediction: 'This year, just like every year, the Rays are going to spend way, way less than their rivals. That means they’re going to need a bunch of cheap, young players to produce a ton, and they’re going to need to squeeze the most value they possibly can out of flawed talent. The projected rotation should go a long way toward meeting that first goal, with Chris Archer leading a potentially electric starting five. For goal No. 2, the Rays will lean on platoons and time-shares. Keep an eye on the potential platoon of newly acquired Corey Dickerson and Steve Pearce: As Fangraphs’ August Fagerstrom put it, by going with a straight righty-lefty split, Dickerson and Pearce could combine to be almost as productive as Justin Upton, for a tiny fraction of the cost.',
		player: 'Chris Archer',
		theTeam: 'Tampa Bay Rays',
	},
	tigers: {
		image: 'images/teams/tigers.png',
		image2: 'images/players/miguel_cabrera.jpg',
		prediction: 'The free-agent acquisitions of outfielder Justin Upton and starter Jordan Zimmermann should provide strong upgrades at positions of need; the question is whether that will be enough. Re-signing Victor Martinez to a four-year deal based on a random spike year in his mid-30s looked spectacularly misguided in 2014, and it’s only going to get worse as he ages. Credit new GM Al Avila for sweating the smaller details, though: He rebuilt a perennially awful bullpen by landing Francisco Rodriguez, Justin Wilson and Mark Lowe, and improved Detroit’s depth with the additions of Cameron Maybin, Jarrod Saltalamacchia and Mike Aviles. This still isn’t on the level of the roster of the ’11–14 AL Central champs. But the Tigers at least stand a good chance to vault back above .500.',
		player: 'Miguel Cabrera',
		theTeam: 'Detroit Tigers',
	},
	whiteSox: {
		image: 'images/teams/white_sox.png',
		image2: 'images/players/chris_sale.jpg',
		prediction: 'The AL Central is going to be a lot tighter this season than it was last year. And while the White Sox place fourth among AL Central teams in these rankings, consider them closer to a virtual tie for second. Third baseman Todd Frazier brings a potent bat to the middle of the order, and Brett Lawrie, Dioner Navarro and Alex Avila should at least offer competent upgrades following some major infield struggles for the ’15 club. A full season of Carlos Rodon gives the South Siders a killer top three in the rotation, too, along with Chris Sale and Jose Quintana. Throw in the team’s youth (just three members of the projected lineup and one member of the starting rotation are over 30) and you have a team with real upside.',
		player: 'Chris Sale',
		theTeam: 'Chicago White Sox',
	},
	angels: {
		image: 'images/teams/angels.png',
		image2: 'images/players/mike_trout.jpg',
		prediction: 'Though he only has one MVP award to show for it, you could argue that Mike Trout was the best player in the AL in each of the past four seasons. When you have a player of that quality, the logical move is to surround him with championship-caliber talent. Instead, with Albert Pujols likely to start the season on the DL, the Angels’ five-through-nine hitters project as follows: Daniel Nava (DH), Carlos Perez (C), Andrelton Simmons (SS), Todd Cunningham (LF), Johnny Giavotella (2B). Bet the under.',
		player: 'Mike Trout',
		theTeam: 'Los Angeles Angels',
	},
	orioles: {
		image: 'images/teams/orioles.png',
		image2: 'images/players/manny_machado.jpg',
		prediction: 'After a decade and a half of futility, the Orioles have spent the past four seasons ranging from competent to excellent, consistently outperforming bearish projection systems. Some credit Buck Showalter’s managing acumen, others excellent bullpen work, and analytical types often cite random variance, aka dumb luck. But the O’s head into 2016 with a leaky starting rotation and multiple lineup questions around young star Manny Machado. They’ll also face a set of tough division rivals, with even the low-budget Rays making improvements. Baltimore might be headed back to the cellar in 2016.',
		player: 'Manny Machado', 
		theTeam: 'Baltimore Orioles',
	},
	twins: {
		image: 'images/teams/twins.png',
		image2: 'images/players/miguel_sano.jpg',
		prediction: 'Over a week, a month or occasionally even an entire season, a team will benefit from supernaturally good timing. At the plate, it might bunch hits together at an unusually high rate, or pitchers might scatter hits rather than having opponents put up big innings. Researcher Ed Feng calls this phenomenon Cluster Luck. The Twins were the third-luckiest team in baseball last season by that measure, behind the Royals and the Cardinals. That’s not to say there isn’t real talent on the roster, led by Miguel Sano, who’s going to hit a truckload of homers in 2016. But while he and other young players might improve, there’s a good chance that will be offset by some of 2015’s luck drying up.',
		player: 'Miguel Sano',
		theTeam: 'Minnesota Twins',
	},
	athletics: {
		image: 'images/teams/athletics.png',
		image2: 'images/players/sonny_gray.jpg',
		prediction: 'First the Royals, and now the Yankees, have gained attention for building überbullpens. The A’s quietly jumped on that bandwagon this winter, signing Ryan Madson and John Axford and trading for Liam Hendriks and Marc Rzepczynski to join lights-out lefty closer Sean Doolittle, who is now healthy. This is still a team that needs a whole lot of things to go right in order to contend, from Jed Lowrie and Yonder Alonso being able to both hit and stay healthy to newly signed Rich Hill being able to replicate his late-season magic as a reclamation project in Boston. The A’s didn’t give up any important prospects to land the players they did; for a team that’s trying to recover from jettisoning top talent like Addison Russell in past failed attempts at playoff glory, hanging on to whatever assets they have left is the prudent move.',
		player: 'Sonny Gray',
		theTeam: 'Oakland Athletics',
	},	
	cubs: {
		// 3 - Each teams object has 3 values.
		image: 'images/teams/cubs.png',
		image2: 'images/players/kris_bryant.jpeg',
		prediction: 'On paper, this is the best team in baseball by a decent margin. Not satisfied with making the NLCS last year, the Cubs went out and signed the best position player on the market (Jason Heyward), a do-it-all All-Star to play second (Ben Zobrist) and even swiped an underrated rotation stabilizer from their archrivals in St. Louis (John Lackey). For all the help those veterans should provide, this is still a team with youth at many key positions, which is exactly what you want in the (mostly) post-PED era, when age curves have changed and players tend to peak earlier and fall off more sharply. The 2015 rookie class of Kris Bryant, Addison Russell and THE SCHWARBS could inflict serious damage on opponents. And that’s before we get to Anthony Rizzo, who’s just 26, and Heyward, who even entering his seventh major league season is actually one day younger than Rizzo. Having the best team on paper guarantees nothing, with lesser clubs able to get hot at the right time and roll to the World Series. But if you’re looking for a complete team, one with a deep rotation and multiple quality options in the pen, power and speed, youth and experience, a great manager and the kind of war chest to make the go-for-it moves needed for a big run, the Cubs are it.',
		player: 'Kris Bryant',
		theTeam: 'Chicago Cubs',
	},
	mets: {
		image: 'images/teams/mets.png',
		image2: 'images/players/yoenis_cespedes.jpg',
		prediction: 'Considering all the ill fortune that’s befallen the Mets, you can perhaps forgive them for courting a little luck this winter, even after a Cinderella run to the World Series. That stroke of luck came in the form of Yoenis Cespedes, who reportedly spurned more lucrative offers to return to Queens on a three-year contract—which could end up being a one-year deal if Yo goes hog-wild this year and opts out at season’s end. Add Cespedes’s return with a revamped middle infield that now includes Neil Walker and Asdrubal Cabrera, as well as potentially exciting things from catcher Travis d’Arnaud and outfielder Michael Conforto over a full season, and the Mets offense could be beastly. That’s a scary proposition for the rest of the league, given what the team’s biggest strength still is: a terrifying rotation that could be even deeper this year, with Zack Wheeler eyeing a possible July return from Tommy John surgery. There is an Achilles heel here, with Walker, Cabrera and Cespedes likely to deliver some ugly defense up the middle. It’ll be up to General Manager Terry Collins to use his bench to take the edge off that leaky D, and up to the capable offense and the best rotation in the world to handle the rest.',
		player: 'Yoenis Cespedes',
		theTeam: 'New York Mets',
	},
	giants: {
		image: 'images/teams/giants.png',
		image2: 'images/players/buster_posey.jpg',
		prediction: 'There are two versions of a Giants success story in 2016. In the first, we appreciate the Giants spending full market value to land two coveted starting pitchers over the winter, ignoring the growing trend of stacked bullpens in favor of a rotation that can carry a heavy workload. If Johnny Cueto’s right elbow cooperates, Jeff Samardzija shakes off a lousy, out-of-character ’15 campaign and outfielder Denard Span provides the all-around contributions the team expects, the Giants will have the kind of balanced, no-weaknesses roster that can complement their loaded homegrown infield and make a deep October run. In the second version, we can point to this being an even year and start planning the World Series parade route now. Whether you ride with real analysis or naked superstition, the Giants should be viewed as a major threat.',
		player: 'Buster Posey',
		theTeam: 'San Francisco Giants',
	},
	pirates: {
		image: 'images/teams/pirates.png',
		image2: 'images/players/andrew_mccutchen.jpg',
		prediction: 'Like the Red Sox and the Rangers, the Pirates figure to get stronger as the season wears on, thanks to top prospects whose promotions are inevitable. Tyler Glasnow is one of the best young pitchers in the minors and has a chance to make the kind of instant impact that Gerrit Cole did in 2013. Twenty-three-year-old first base prospect Josh Bell could be an OBP machine whenever the Pirates want to call him up. Meanwhile, 23-year-old Alen Hanson could help the club right from Opening Day, with second base wide open following the trade of Neil Walker to the Mets. The backbone of the Bucs for the past few years has been homegrown talent, with Andrew McCutchen, Starling Marte and Cole leading the team out of two decades of irrelevance. The next wave of talented kids could be pivotal in finally getting Pittsburgh beyond the NLDS.',
		player: 'Andrew McCutchen',
		theTeam: 'Pittsburgh Pirates',
	},
	dodgers: {
		image: 'images/teams/dodgers.png',
		image2: 'images/players/clayton_kershaw.jpg',
		prediction: 'They’ve taken a ton of criticism this off-season for having all the money in the world and not spending enough of it, with the Diamondbacks outbidding them for Zack Greinke and other big-ticket free agents going elsewhere. But the Dodgers have shifted gears over the past couple seasons. Team president Stan Kasten has touted the importance of building an elite farm system to anyone who’ll listen, and president of baseball operations Andrew Friedman has the kind of calculating analytic mind that’s acutely aware of how often long-term deals for free agents in their 30s fail miserably. The projection systems expect a strong season from much cheaper Greinke alternative Scott Kazmir, an even stronger season from Rookie of the Year favorite Corey Seager, and one of the best records in baseball for a Dodgers club as deep as any seen at Chavez Ravine since the days before Swindlin’ Frank McCourt started robbing his own organization blind. Getting another big arm for the bullpen wouldn’t hurt, but there’s enough here to get the Dodgers to the trade deadline in playoff contention, at which point Friedman could flex a little of that financial might and talent depth to make a deal.',
		player: 'Clayton Kershaw',
		theTeam: 'Los Angeles Dodgers',
	},
	nationals: {
		image: 'images/teams/nationals.png',
		image2: 'images/players/bryce_harper.jpg',
		prediction: 'Few teams lost more talent over the winter than the Nats. Jordan Zimmermann, Ian Desmond, Yunel Escobar, Denard Span, Drew Storen and Doug Fister are gone. But they still have Bryce Harper, and here’s some hope for the next wave of players coming through: The Nats sneaked into trade negotiations between the Rays and the Padres last off-season, nabbing Joe Ross to crash the rotation and Trea Turner as the team’s future starting shortstop. They parlayed Storen into Ben Revere to play center, signed Daniel Murphy at second and overhauled the bullpen by getting Oliver Perez, Trevor Gott, Shawn Kelley and Yusmeiro Petit to support mercurial (but still effective) closer Jonathan Papelbon. It all adds up to a team that should contend this season.',
		player: 'Bryce Harper',
		theTeam: 'Washington Nationals',
	},
	cardinals: {
		image: 'images/teams/cardinals.png',
		image2: 'images/players/matt_carpenter.jpg',
		prediction: 'The Cardinals winning 100 games last year was a shocker. Ace Adam Wainwright and sluggers Matt Holliday and Matt Adams suffered major injuries. Catcher Yadier Molina had a terrible and injury-plagued season too. Some of the pieces that enabled the Cards to overcome those setbacks return this year, with full seasons for outfielders Stephen Piscotty and Randal Grichuk likely to stabilize the lineup. Still, there are reasons for doubt here. Losing Heyward to the rival Cubs will hurt. Carlos Martinez’s right shoulder truncated his 2015 campaign, and some industry insiders expressed concern over Michael Wacha’s health too. You also wonder whether the Cardinals’ situational luck will carry over to ’16: A good Cards staff became downright Koufaxian with runners in scoring position last year, and that’s not a skill that tends to endure from one season to the next.',
		player: 'Matt Carpenter',
		theTeam: 'St. Louis Cardinals',
	},
	diamondbacks: {
		image: 'images/teams/diamondbacks.png',
		image2: 'images/players/paul_goldschmidt.jpg',
		prediction: 'We see this every year: mediocre-to-bad club makes aggressive moves in the off-season, then gets declared a team to watch. But as we saw with the Padres and the White Sox last year, acquiring a few big names doesn’t necessarily solve a team’s deeper problems. Zack Greinke and Shelby Miller will certainly help a rotation that badly lacked frontline talent last year, and Paul Goldschmidt and A.J. Pollock represent one of the best one-two lineup punches in the league. But Arizona will still trot out the most punchless middle infield in baseball, and the bullpen isn’t very good. Making matters worse, GM Dave Stewart strip-mined the farm system, which means that if this shoot-the-moon approach to roster building fails, the D-Backs could struggle for years to come.',
		player: 'Paul Goldschmidt',
		theTeam: 'Arizona Diamondbacks',
	},
	marlins: {
		image: 'images/teams/marlins.png',
		image2: 'images/players/giancarlo_stanton.jpg',
		prediction: 'A dark-horse-contender pick last season, the Marlins got crushed by injuries and underachievement from almost everyone on the roster not named Dee Gordon. The Fish head into spring training with stars Jose Fernandez and Giancarlo Stanton healthy, Wei-Yin Chen on board to fortify the rotation, and another year of development for mid-20s up-and-comers Christian Yelich, Adeiny Hechavarria and Marcell Ozuna. Throw in 38 chances to beat up on the Phillies and the Braves, and maybe this is the year Miami sneaks up on the rest of the NL.',
		player: 'Giancarlo Stanton',
		theTeam: 'Miami Marlins',
	},
	padres: {
		image: 'images/teams/padres.png',
		image2: 'images/players/matt_kemp.jpg',
		prediction: 'You could see the logic behind A.J. Preller’s frenzied shopping before the 2015 season. The Padres had been both bad and dull for years; loading up on big bats might help alleviate these problems. But when the plan failed, it was tough to see the logic behind what Preller did next: almost nothing. The Padres didn’t trade Justin Upton or other marketable players last season. While they did get a solid haul for reliever Craig Kimbrel in an off-season deal with the Red Sox, other obvious trade pieces like Tyson Ross, Andrew Cashner and James Shields remain in San Diego. The Friars probably aren’t going to contend this year, and letting controllable service time on good pitchers slip away while the team treads water doesn’t make much sense.',
		player: 'Matt Kemp',
		theTeam: 'Pittsburgh Pirates',
	},
	brewers: {
		image: 'images/teams/brewers.png',
		image2: 'images/players/jonathan_lucroy.jpg',
		prediction: 'Slowly, oh so very slowly, the Brewers are starting to dig their way out of baseball purgatory. Their 2015 draft was widely praised, with Baseball America rating Milwaukee’s haul third-best among all teams. They flipped outfielder Carlos Gomez to Houston last July, bagging five-tool centerfield prospect Brett Phillips in return, and they swiped 19-year-old shortstop prospect Isan Diaz from the Diamondbacks in a late-January trade for Jean Segura. We’ll also likely see their top shortstop prospect Orlando Arcia make his debut this year. The Crew’s going to be terrible in 2016. But there’s definitely hope for the future.',
		player: 'Jonathan Lucroy',
		theTeam: 'Milwaukee Brewers',
	},
	rockies: {
		image: 'images/teams/rockies.png',
		image2: 'images/players/nolan_arenado.jpg',
		prediction: 'Even though Colorado had four starting outfielders, trading Corey Dickerson to the Rays for reliever Jake McGee was a bizarre move. Relief pitching may be gaining in importance as teams like the Royals shorten games, but flipping a productive everyday outfielder for a reliever is still puzzling. The Rockies absorbed an extra $4 million-plus in 2016 salary, a strange proposition for a mid-payroll team that almost never spends significant money on free agents. And the prospects the Rockies swapped with the Rays made the trade even worse: They shipped out 19-year-old Kevin Padlo, a third baseman who absolutely mashed in low A ball last season. All this for a team that finished last in the NL West three of the past four years, and might make a run at four out of five.',
		player: 'Nolan Arenado',
		theTeam: 'Colorado Rockies',
	},
	phillies: {
		image: 'images/teams/phillies.png',
		image2: 'images/players/maikel_franco.jpg',
		prediction: 'They head into spring at the bottom of the heap, as their transition from the core of the 2008 World Series team to a new generation of players nears its completion. Jimmy Rollins, Chase Utley, Cole Hamels and nearly every other player from Philly’s glory years are gone, leaving Ryan Howard and Carlos Ruiz as the last men standing. Former Angels assistant general manager Matt Klentak is the new man in charge, and the focus is now squarely on building through the farm system, with analytics finally becoming an area of concentration for an organization that resisted that path for many years.',
		player: 'Maikel Franco',
		theTeam: 'Philadelphia Phillies',
	},
	reds: {
		image: 'images/teams/reds.png',
		image2: 'images/players/joey_votto.jpg',
		prediction: 'One advantage of being a really bad team is that you can try out radical strategies without fear of damaging your playoff chances. For the Reds, that meant rolling out rookie starting pitchers at a rate rarely before seen in baseball history. The experiment produced mixed results, but the insight that the Reds gained in the process should prove valuable. With a lineup that still includes Jay Bruce, Brandon Phillips, a healthy Devin Mesoraco and the great Joey Votto, the Reds at least have some playable pieces. If Anthony DeSclafani and company can build on their rookie-season experience, Cincinnati might even be semi-respectable.',
		player: 'Joey Votto',
		theTeam: 'Cincinnati Reds',
	},
	braves: {
		image: 'images/teams/braves.png',
		image2: 'images/players/freddie_freeman.jpg',
		prediction: 'Recently traded starter Shelby Miller is a very good young pitcher, but goodness, did the Braves ever load up on young talent by trading Miller to Arizona. Dansby Swanson was the No. 1 pick in the 2015 draft and has a chance to become an All-Star shortstop. Triple A righthander Aaron Blair was the second-best prospect in the Diamondbacks’ system behind Swanson. Then there’s 25-year-old Ender Inciarte, whose outfield defense was so good last season that he was more valuable than Miller, according to Baseball-Reference’s WAR. None of those players will prevent the Braves from being really bad this year. But if you’re trying to build a perennial contender, that kind of deal is a fantastic way to start.',
		player: 'Freddie Freeman',
		theTeam: 'Atlanta Braves',
	}
};
// data.cubs.image2$('#royals').click(getRoyals);
	$('li').click(getTeam);
	function getTeam(event) {
		event.preventDefault(event);

		// 1. $(this) - whatever we clicked on will be represented by "this"
		// 	  We wrap "this" with jQuery to give us access to jQuery's functions.
		// 2. .attr('id') - jQuery will look for the "id" attribute on the thing that was clicked.
		// 3. var teamName = .... this is where we store that id and will do something with it later.
		
		var teamName = $(this).attr('id');

		var team = data[teamName];

		var teamHeading = $('<h3 id="teamheading">');
		teamHeading.text(team.theTeam);
		
		var image = $('<img class="image-1">');
		image.attr('src', team.image);

		var image2 = $('<img class="image-2">');
		image2.attr('src', team.image2);

		var player = $('<h5 class="playerName">');
		player.text(team.player);

		var prediction = $('<div class="prediction">');
		prediction.text(team.prediction);


		$('#mid-div').html('');
		$('#mid-div').css('background', '#F1FAEE');
		$('#mid-div').append(teamHeading);
		$('#mid-div').append(image);
		$('#mid-div').append(image2);
		$('#mid-div').append(player);
		$('#mid-div').append(prediction); 
		

	};

	
	// function changeColor() {
	// 	$('li').hover(changeColor);
	// 	$('li').css('color', 'black');

	// };

	

// });



