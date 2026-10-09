const SK=['#f7d9bf','#ebb98f','#cf9468','#a8683f','#6f4529'],COL=['#FFD960','#FF9EC4','#82E3BD','#FFB38A','#9ADBFF','#D9C8FF'],OUT=['#7CC6FE','#FF7AA8','#5FD3A0','#FFB703','#9B8CFF','#FFFFFF'];
const AVT=[['pony','Ponytail'],['short','Short hair'],['cat','Cat'],['bunny','Bunny'],['bear','Bear']];
const kid=t=>t==='pony'||t==='short'||t==='kid',pal=t=>kid(t)?SK:COL;
const PRO=[{l:'she / her',s:'she'},{l:'he / him',s:'he'},{l:'they / them',s:'they'}];
const TONES=[['gentle','🌼 Soft & kind','soft and kind',n=>`You're doing great, ${n}. Take your time. 💛`],['pumped','🔥 Hype me up!','excited and high-energy',n=>`Hey ${n}! LET'S GO! You've got this! 🔥`],['funny','😜 Make me laugh','playful and a little silly',n=>`${n}, even penguins fall over. Still cool. 🐧`]];
/* the seven steps: same words in every scene */
const STEPS=[
['I Wonder','Can I do it?','🌱','wow',`You're curious. You haven't started yet.`,'Wondering is where every skill starts.'],
['I Try',`Let's see!`,'🚶','happy',`You're giving it a go.`,'Trying is the bravest part.'],
[`I'm Stuck`,'This is hard.','😣','oops',`You know what you're trying to do, but it won't work yet.`,'Being stuck means you are doing something new.'],
[`I'm in the Pit`,`I don't know… yet.`,'🕳️','pit',`You're not even sure how this works yet.`,'Everyone goes into the pit. It is where the learning happens.'],
['I Keep Going',`I'll try another way.`,'🧗','grit',`You're trying a new way, even though it's hard.`,'Another way is always out there.'],
['I Get It!','Aha!','💡','aha','Something just clicked.','Remember how stuck this felt? Look at you now.'],
['I Grew',`I can do something I couldn't before.`,'🌟','proud',`You can do something you couldn't do before.`,'Remember this feeling. You earned it.']];
const SCOL=[['#D9C8FF','#6B4EE0'],['#9ADBFF','#1B7FC4'],['#FFB38A','#D9501A'],['#F7A1B7','#C21F55'],['#FFD960','#A87800'],['#82E3BD','#0F9B6C'],['#A99BFF','#4B3BD1']];
const AHA={m:'Aha!',b:'My body knows it!',h:'It feels easy now!',c:'It works!'};
const MSG=[["{k}? Can you do it, {n}? Let's find out. Wondering is how every great skill starts.","You don't have to be good at it. You just have to begin."],
["You're giving {k} a go, {n}. Let's see! Trying counts.","You don't have to know how. You don't have to get it right."],
["This is hard, {n}, and that's okay. Oops isn't failure. It's information.","Being stuck means you're doing something new. You can't do it YET."],
["The pit is where the learning happens, {n}. Not knowing yet is okay.","Everyone goes into the pit. Not knowing is part of knowing."],
["Another way, {n}! You keep going, and that's the whole secret.","A little {k} every day beats a lot all at once."],
["Aha! You got it, {n}! Remember how stuck this felt?","Something clicked. That's you doing that."],
["You grew, {n}! You can do something you couldn't before. 🌟","Look how far you've come. And this is only the beginning."]];
const JOKES=["(Even penguins fall over a lot. Still cool.)","(Your future self is already giving you a high five.)","(Nobody was born knowing this. Not even grown-ups.)","(Fun fact: wobbling burns zero calories but 100% bravery.)"];
const REF=["Feeling like quitting means you've reached the hard part, {n}. Everyone reaches it.","Your brain grows most when things feel tricky. This feeling IS the growing.","You can't do this YET. That one little word changes everything.","Mistakes don't mean you're bad at it. They show you what to practise next."];
const TINY=["Just 5 more minutes, then you can stop.","Do it badly on purpose, just once.","Try only the very first step again.","Do the easiest part you know.","Show someone one thing you can already do."];
const REAS=[["hard","It's hard and I keep getting it wrong"],["tired","I'm just tired or bored today"],["dislike","I really don't enjoy it"],["else","Something else is bothering me"]];
const WINS=['I showed up','I tried again','I learned something new','I played fair','I encouraged someone','I finished even when it was hard','I had fun'];
const CHAL=['A harder version','Teach someone','Do it with a friend','Do it more smoothly','Show someone what I can do'];
const STK=['⭐','🌈','🍓','🦄','🎈','🍪','🐞','🌟','💛','🎉'];
const FIRSTS=['First step','First try','First mistake',`First "I don't know yet"`,`First "I'll try again"`,'First breakthrough','First proud moment'];
/* pocket cards */
const CARDS=[
{id:'begin',c:'#FFE3A8',h:`You don't have to be good at it.`,b:'You just have to begin.',at:[0]},
{id:'counts',c:'#FFC9B8',h:'Trying counts.',b:`You don't have to know how. You don't have to get it right. You just have to give it a go.`,at:[1]},
{id:'oops',c:'#FFE9B8',h:`Oops. That's not failure. That's information.`,b:'Now I know what to try differently.',at:[2]},
{id:'hard',c:'#FFD3C2',h:'Some days are just hard.',b:`You don't have to win today. You don't have to be brilliant today. You don't even have to feel confident today. Just don't quit on yourself.`,at:[2,3]},
{id:'little',c:'#C7EBC9',h:'A little bit. Every day.',b:'Nobody saw the 49 days in between.',at:[3,4]},
{id:'quiet',c:'#DCCFF2',h:'Progress is quiet.',b:`Try. Practise. Mess up. Try again. Notice something. Get a little better. Repeat. One day, you'll look back and realise how far you've come.`,at:[3,4]},
{id:'back',c:'#BFE0F7',h:`Don't look sideways. Look back.`,b:`That's your competition: you, a while ago.`,at:[4]},
{id:'magic',c:'#FFE0B8',h:'First the steps. Then the rhythm. Then the magic.',b:'Nobody starts with grace.',at:[1,4]},
{id:'brave',c:'#FFF0A8',h:'Be brave enough to be a beginner.',b:`What if I can't? What if everyone is better? What if I make a mistake? What if I try?`,at:[0]},
{id:'keeps',c:'#FFD0C0',h:'You are someone who keeps trying.',b:`Not just talented. Not just smart. But someone who shows up, puts in the effort and doesn't give up. That's a superpower.`,at:[5]},
{id:'win',c:'#C7ECEF',h:'Winning is one way to win.',b:`You can also win by showing up, trying again, learning something new, playing fair, encouraging someone, finishing even when it's hard, and having fun. That's winning too.`,at:[]},
{id:'far',c:'#D5EFB8',h:`Look how far you've come.`,b:`First step, first try, first mistake, first "I don't know yet", first "I'll try again", first breakthrough, first proud moment. And this is only the beginning.`,at:[6]}];
/* scenes: look and voice only */
const SC={
meadow:{n:'Meadow',e:'🌿',vo:'friendly trail guide',ht:'#EAF6DA',hb:'#CDEBB0',path:'#9CCB7A',deco:'🌿 🦋 🌼',flag:'🚩',sign:['🌼 Little by little, things grow.','🦋 Take your time.','🌱 You are growing, even today.']},
pool:{n:'Pool',e:'🏊',vo:'friendly dolphin coach',ht:'#DDF3FB',hb:'#A8DDF0',path:'#6FBFDC',deco:'🐬 💧 🫧',flag:'🏅',sign:['🌊 Keep swimming!','🐬 Waves make you stronger.','💧 Splash, try, repeat.']},
court:{n:'Court',e:'🏸',vo:'upbeat sports coach',ht:'#FFEBD5',hb:'#FFD2A6',path:'#F0A75E',deco:'🏆 👟 ⭐',flag:'🏆',sign:['🏸 Every rally starts with one hit.','👟 Show up, play on.','⭐ Good effort counts.']},
stage:{n:'Stage',e:'🎭',vo:'warm theatre director',ht:'#F9E2F0',hb:'#F2B8D6',path:'#E58BB8',deco:'🎶 ✨ 🎭',flag:'🌟',sign:['🎶 Nobody starts with grace.','✨ The curtain is waiting for you.','🎭 Practice makes the magic.']},
studio:{n:'Studio',e:'🎨',vo:'playful artist',ht:'#FFF3C9',hb:'#FFE08A',path:'#EBC24A',deco:'🖌️ 🌈 ✂️',flag:'🖼️',sign:['🎨 Mistakes make the best colours.','🖌️ Make a mess, make something.','🌈 Keep creating!']},
lab:{n:'Lab',e:'🔬',vo:'curious scientist',ht:'#E4DEFF',hb:'#BFC8FF',path:'#8E9BEA',deco:'🔭 🧪 ⚙️',flag:'💡',sign:['🔬 Every scientist gets surprises.','🧪 Test it, try it, learn.','🔭 Stay curious!']},
garden:{n:'Garden',e:'🌻',vo:'patient gardener',ht:'#E9F7D3',hb:'#BDE3A0',path:'#8FC46C',deco:'🌻 🐝 🪴',flag:'🌻',sign:['🌱 Seeds take time.','🐝 Little by little.','🌻 You are blooming.']},
home:{n:'Home',e:'🏠',vo:'kind family helper',ht:'#FFE9DC',hb:'#FFCFB4',path:'#F0A07A',deco:'🏠 🧺 🍪',flag:'🏠',sign:['🏠 Every helper starts small.','🍪 One step at a time.','🧺 You are getting capable.']},
playground:{n:'Playground',e:'🛝',vo:'friendly playground helper',ht:'#DFF5EC',hb:'#B2EBD2',path:'#6FD0A8',deco:'🛝 👋 🎈',flag:'🎈',sign:['👋 Every friend starts with hello.','🎈 Take a tiny step towards people.','🛝 You are braver than you think.']}};
const CATSC={talk:'playground',school:'meadow',sport:'court',arts:'stage',mind:'meadow',make:'lab',nature:'garden',life:'home',feel:'meadow'};
const SKSC={Swimming:'pool',Drawing:'studio',Painting:'studio',Crafts:'studio','Photography & film':'studio',Cycling:'meadow','Running & athletics':'meadow','Yoga & stretching':'meadow','Hiking & camping':'meadow'};
const sceneFor=(c,n)=>SKSC[n]||CATSC[c]||'meadow';
/* master collection: skill | emoji | how the "aha" feels (m mind, b body, h heart, c creating) | tiny first step | kinds */
const RAW=`@talk|Talking & Friends|🗣️|FFB38A
Saying hello|👋|h|Say hello to one person today|A neighbour;A classmate;A shopkeeper;A new child;A grown-up I don't know well
Talking to new people|🤝|h|Tell one new person your name|Introducing myself;Joining a group;Starting a chat;Keeping a chat going;Saying goodbye nicely
Speaking up|🙋|h|Say one thing out loud in class|Answering in class;Asking a question;Sharing my idea;Telling a teacher something;Saying "I don't understand"
Making friends|🧑‍🤝‍🧑|h|Ask one child to play with you|Inviting someone to play;Joining a game;Sitting with someone new;Staying in touch;Being a good friend
Listening|👂|h|Listen to a whole story without interrupting|Listening to a friend;Listening in class;Following instructions;Asking a follow-up question
Asking for help|🆘|h|Ask for help with one small thing|Asking a teacher;Asking a friend;Asking at a shop;Asking at home
Public speaking|📢|h|Say 3 sentences to someone you trust|Show and tell;Class presentation;Elocution;Debate;Storytelling aloud;Anchoring an event;Reading aloud to a group
Saying how I feel|💬|h|Name one feeling you have right now|Saying I'm sad;Saying I'm angry;Saying I'm worried;Saying I'm proud;Saying sorry;Saying thank you
Standing up for myself|🛡️|h|Practise saying "No, thank you" in a kind voice|Saying no kindly;Telling someone to stop;Telling a grown-up when something's wrong;Disagreeing politely
Phone & video calls|📞|h|Say hello to a relative on a call|Calling grandparents;Calling a friend;Leaving a message;Video call with family
Asking in shops|🛍️|h|Say "please" and ask for one thing yourself|Ordering food;Paying at a shop;Asking for directions;Asking the price
Teamwork|🙌|h|Share one idea with your group|Group project;Team games;Taking turns;Giving everyone a chance
Being kind|💛|h|Say one kind thing to someone today|Complimenting someone;Helping a friend;Including someone left out;Saying sorry and making up
Languages|🌐|m|Learn and say 3 new words|English;Hindi;Tamil;Telugu;Kannada;Malayalam;Marathi;Bengali;Gujarati;Sanskrit;French;Spanish;German;Japanese;Sign language
@school|School Skills|📚|D9C8FF
Reading|📖|m|Read just one page out loud|Picture books;Story books;Comics;Poetry;Reading aloud;Non-fiction;Reading in another language
Writing|✍️|m|Write one sentence about your day|Handwriting;Spelling;Stories;Diary;Poems;Letters;Typing
Math|🧮|m|Solve one problem you already know|Counting;Times tables;Adding & subtracting;Fractions;Shapes;Mental maths;Word problems;Abacus
Science|🔬|m|Ask one "why?" and look it up|Experiments;Space;Animals;Plants;The human body;Weather;Electricity
Coding|💻|c|Make one thing on the screen move|Scratch;Python;Making games;Making web pages;Robot coding
Social studies|🌍|m|Find one place on a map|Geography;History;Reading maps;Festivals & cultures;Community & rules
Study skills|🧠|m|Study for 10 minutes with no phone|Memorising;Making notes;Packing my bag;Finishing homework;Revising for tests;Focus
Quizzing|❓|m|Ask a family member one quiz question|General knowledge;Spell bee;Math olympiad;Science quiz;Quiz teams
@sport|Sports & Movement|🏃|9ADBFF
Cycling|🚲|b|Ride to the end of the road and back|Balancing;Pedalling;Turning;Braking;Riding with friends;Road safety
Swimming|🏊|b|Blow bubbles with your face in the water|Face in the water;Floating;Kicking;Freestyle;Backstroke;Breaststroke;Diving
Badminton|🏸|b|Keep the shuttle up for 3 hits|Serving;Smash;Clear;Footwork;Doubles
Tennis|🎾|b|Bounce the ball and catch it 5 times|Forehand;Backhand;Serve;Rallying;Footwork
Table tennis|🏓|b|Keep the ball bouncing 3 times|Serve;Rally;Spin
Basketball|🏀|b|Take 5 shots from one spot|Dribbling;Shooting;Passing;Defence;Team play
Football|⚽|b|Pass the ball to a friend 5 times|Dribbling;Passing;Shooting;Goalkeeping;Team play
Cricket|🏏|b|Throw and catch 10 times|Batting;Bowling;Fielding;Wicket-keeping;Catching
Running & athletics|🏃|b|Run for 2 minutes without stopping|Sprinting;Long distance;Relay;Long jump;High jump;Throwing
Skating & scooting|🛼|b|Stand and balance for 10 seconds|Roller skating;Skateboarding;Ice skating;Scooter
Martial arts|🥋|b|Practise one stance slowly|Karate;Taekwondo;Judo;Kalaripayattu;Silambam
Gymnastics|🤸|b|Do one forward roll|Rolls;Cartwheel;Balance;Flexibility;Handstand
Yoga & stretching|🧘|b|Hold one pose for 5 slow breaths|Breathing;Balance poses;Stretching;Surya namaskar;Relaxing
Skipping & fitness|🪢|b|Skip 10 times|Skipping rope;Hula hoop;Push-ups;Jumping jacks
Team games|🏐|b|Play one game with friends|Volleyball;Kabaddi;Kho-kho;Hockey;Throwball;Dodgeball
Climbing & adventure|🧗|b|Climb one thing safely with a grown-up|Rock climbing;Obstacle course;Trekking;Camping skills
@arts|Arts & Performance|🎭|FF9EC4
Dance|💃|b|Move to one song for one minute|Bharatanatyam;Kuchipudi;Kathak;Odissi;Mohiniyattam;Kathakali;Manipuri;Folk dance;Bollywood;Hip-hop;Freestyle;Ballet;Contemporary
Singing|🎤|h|Sing one line of a song you love|Carnatic;Hindustani;Western;Bhajans;Film songs;Folk songs;Choir
Playing an instrument|🎹|b|Make one sound on it and listen|Veena;Flute;Keyboard;Piano;Violin;Guitar;Ukulele;Tabla;Mridangam;Drums;Harmonium;Sitar;Saxophone;Recorder
Drawing|✏️|c|Draw one thing you can see|Sketching;Cartoons;Doodling;Mandala;Kolam & rangoli;Portraits;Nature drawing
Painting|🎨|c|Mix two colours and see what happens|Watercolour;Poster colours;Acrylic;Finger painting;Madhubani;Warli;Tanjore
Crafts|✂️|c|Fold one piece of paper into something|Origami;Clay;Paper craft;Beading;Embroidery;Knitting;Recycled crafts
Acting & drama|🎭|h|Say one line in a funny voice|Plays;Mime;Puppets;Role-play;Mono-acting;Voice acting
Storytelling|📜|h|Tell a story in 3 sentences|Telling stories;Writing stories;Reciting poems;Folk tales;Making comics
Photography & film|📷|c|Take 3 photos of one thing|Photos;Videos;Stop-motion;Editing;Nature photos
@mind|Mind & Games|🧩|FFD960
Chess|♟️|m|Learn how one piece moves|Piece moves;Pawns;Checkmate basics;Chess puzzles;Playing a game
Puzzles|🧩|m|Do one small puzzle|Jigsaw;Sudoku;Crosswords;Mazes;Logic puzzles;Tangram
Rubik's cube|🎲|m|Solve one face|One side;First layer;Full cube;Speed solving
Memory & focus|🧠|m|Remember 5 things from a tray|Memory games;Concentration;Mental maths;Spotting patterns
Board & card games|🎴|m|Play one game and finish it|Ludo;Carrom;Snakes & ladders;Monopoly;Card games;Strategy games
Riddles & brain teasers|💡|m|Solve one riddle|Riddles;Word games;Number games
@make|Making & Tech|🔧|82E3BD
Robotics|🤖|c|Build or draw one robot part|Building a robot;Sensors;Motors;Programming a robot
Electronics|🔌|c|Light up one LED|Circuits;Switches;Sensors;Arduino;Solar toys
Building & LEGO|🧱|c|Build something with 10 blocks|LEGO;Blocks;Model houses;Bridges;Marble runs
Woodwork & tools|🔨|c|Hammer one nail with a grown-up|Sanding;Sawing;Painting wood;Making a birdhouse
Experiments|🧪|c|Try one safe experiment|Kitchen science;Volcano;Slime;Magnets;Water experiments
Sewing & fabric|🧵|c|Thread a needle|Threading a needle;Stitches;Buttons;Making a bag;Tie-dye
Inventing|🛠️|c|Draw one idea to solve a small problem|Inventions;Fixing things;Upcycling;Design thinking
Stargazing & space|🔭|m|Find the Moon and notice its shape|Moon watching;Stars;Planets;Constellations;Rockets
@nature|Nature & Animals|🌿|B5E8A0
Gardening|🌱|c|Water a plant and look at it closely|Planting seeds;Watering;Composting;Growing vegetables;Flowers;Herbs
Birds & insects|🦋|m|Spot one bird or insect today|Birdwatching;Butterflies;Bees;Ants
Fish & aquarium|🐠|m|Watch the fish for one minute|Feeding fish;Cleaning the tank;Learning fish names;Setting up a tank
Pets & animals|🐶|h|Spend 5 quiet minutes near an animal|Feeding;Walking a dog;Grooming;Being gentle;Cat care
Hiking & camping|⛰️|b|Walk somewhere green for 10 minutes|Nature walks;Trekking;Camping;Reading trails;Picnics
Weather & seasons|🌦️|m|Look at the sky and describe it|Clouds;Rain;Weather diary
Caring for Earth|♻️|h|Sort one thing into recycling|Recycling;Saving water;Less plastic;Cleaning up;Planting trees
@life|Home & Life Skills|🏠|FFD0A6
Cooking & baking|🍳|c|Help with one step of a recipe|Indian cooking;Baking;Snacks;Salads;Sweets;Making sandwiches
Tidying & organising|🧺|h|Tidy one small corner|My room;My school bag;My desk;Folding clothes
Getting ready|⏰|h|Get ready 5 minutes faster|Morning routine;Packing my bag;Brushing & bathing;Bedtime routine;Telling time
Tying & fastening|👟|b|Practise one knot|Shoelaces;Buttons;Zips;Tying a ribbon;Braiding hair
Money skills|🪙|m|Count your coins|Counting money;Saving;Spending wisely;Making change;Pocket money plan
Safety basics|🚦|m|Say your home address and one phone number|Road safety;Home address;Emergency numbers;Stranger safety;Water safety;First aid basics
Helping at home|🧹|h|Do one chore without being asked|Setting the table;Watering plants;Sweeping;Washing dishes
@feel|Feelings & Inner Strength|💛|FFA8A8
Staying calm|🌬️|h|Take 3 slow breaths|Breathing;Counting to ten;A calm-down corner;Handling anger;Handling worry
Being brave|🦁|h|Do one small thing that feels a bit scary|Trying new things;Stage fright;New places;Speaking first
Handling mistakes|🩹|h|Say "I made a mistake and that's okay"|Saying oops and moving on;Trying again;Learning from feedback;Not giving up
Being patient|⏳|h|Wait for 2 minutes without complaining|Waiting my turn;Practising slowly;Not rushing
Sportsmanship|🏅|h|Say "good game" to the other team|Losing kindly;Winning kindly;Fair play;Cheering others
Believing in myself|🌟|h|Write one thing you did well today|Kind self-talk;Saying "yet";Celebrating small wins;Looking back
Sleep & rest|😴|h|Switch off screens 30 minutes before bed|Bedtime routine;Waking up;Resting;Screen breaks
Gratitude|🙏|h|Say one thing you're thankful for|Thank-you notes;A gratitude jar;Saying thanks
Quiet & mindfulness|🪷|h|Notice 5 things you can see|Mindful breathing;Listening to sounds;Quiet time`;
const CATS=[];RAW.split('\n').forEach(l=>{if(l[0]==='@'){const [id,n,e,c]=l.slice(1).split('|');CATS.push({id,n,e,c:'#'+c,sk:[]})}else{const [n,e,aha,tip,t]=l.split('|');CATS[CATS.length-1].sk.push({n,e,aha,tip,types:t?t.split(';'):[]})}});
/* what each skill is | "I can..." goal | youngest typical age | needs a grown-up nearby (1) */
const INFO=`Saying hello|Greeting someone with a smile and a "hello", even when you feel a little shy.|say hello to someone without feeling scared|5|0
Talking to new people|Starting and keeping a friendly chat going with someone you don't know well yet.|chat with a new person for a minute|5|0
Speaking up|Using your voice to share an idea, an answer or a question, even in front of others.|say my idea out loud in class|5|0
Making friends|Finding people you enjoy and doing things together, one small step at a time.|invite someone to play with me|5|0
Listening|Giving your eyes, ears and attention to the person who is talking.|listen to a whole story and say what it was about|5|0
Asking for help|Saying "I need help" when something is hard. Brave people do it all the time.|ask for help when I'm stuck|5|0
Public speaking|Talking to a group, like your class, so that people can hear and enjoy it.|speak to a group in a clear voice|6|0
Saying how I feel|Finding words for feelings like sad, angry, worried or proud, and saying them out loud.|tell someone how I feel using words|5|0
Standing up for myself|Saying no or stop in a calm, firm voice, and getting help from a grown-up when you need it.|say "no" or "stop" calmly when I need to|6|0
Phone & video calls|Talking to someone who isn't in the room, using a phone or a screen.|have a short call with someone I know|5|1
Asking in shops|Asking for what you need from someone who works there, like at a shop or a canteen.|ask for what I need in a shop|6|1
Teamwork|Working together so that everyone's ideas count.|work with others to finish something|6|0
Being kind|Using words and actions that help other people feel good.|do something kind without being asked|5|0
Languages|Learning to understand and speak another language, one word at a time.|say a few sentences in a new language|5|0
Reading|Looking at words and understanding the story or ideas inside them.|read a page and tell what happened|5|0
Writing|Putting your thoughts onto paper with letters and words.|write a few clear sentences|5|0
Math|Working with numbers, shapes and patterns to solve problems.|solve a problem and explain how I did it|5|0
Science|Asking why things happen, and finding out by looking, testing and reading.|ask a question and find the answer|5|0
Coding|Giving a computer step-by-step instructions to make it do something.|make a small program that works|7|0
Social studies|Learning about people, places and the past, and how we live together.|find places on a map and tell a fact|7|0
Study skills|Ways to learn better: focusing, remembering and getting organised.|study for a while without getting distracted|7|0
Quizzing|Answering questions on lots of topics, on your own or in a team.|answer quiz questions with confidence|6|0
Cycling|Balancing and pedalling a bicycle to get places and have fun.|ride without any help|5|1
Swimming|Moving through water safely by floating, kicking and using your arms.|swim a short distance|5|1
Badminton|Hitting a light shuttlecock over a net with a racket.|keep a rally going|5|0
Tennis|Hitting a ball over a net with a racket.|hit the ball over the net|6|0
Table tennis|A small, fast game of hitting a ball over a net on a table.|keep a rally going|6|0
Basketball|Dribbling, passing and shooting a ball into a hoop.|dribble and shoot|6|0
Football|Passing, dribbling and shooting a ball with your feet.|pass and shoot the ball|5|0
Cricket|A bat-and-ball team game with batting, bowling and fielding.|hit, throw and catch in a game|6|0
Running & athletics|Running, jumping and throwing, over different distances.|run for longer than I could before|5|0
Skating & scooting|Gliding on wheels while keeping your balance.|glide and stop safely|6|1
Martial arts|Learning controlled moves for fitness, focus and self-control.|do a short set of moves with control|6|1
Gymnastics|Rolling, balancing, jumping and stretching with control.|do a roll or a balance with control|5|1
Yoga & stretching|Slow poses and breathing that make your body bendy and calm.|hold a pose and breathe slowly|5|0
Skipping & fitness|Simple exercises that make your heart and muscles strong.|skip many times in a row|5|0
Team games|Games you play with others, where everyone has a part.|play a team game and play fair|5|0
Climbing & adventure|Using your hands and feet to climb or get over safe obstacles.|climb safely with a grown-up|6|1
Dance|Moving your body to music with steps, shapes and feelings.|dance a short piece I learned|5|0
Singing|Making music with your voice, on your own or in a group.|sing a song in tune|5|0
Playing an instrument|Making music with something you play, like keys, strings or drums.|play a short tune|6|0
Drawing|Making pictures with lines, using pencils, pens or crayons.|draw something I can see|5|0
Painting|Making pictures with colour, using brushes, sponges or fingers.|paint a picture I'm proud of|5|0
Crafts|Making things with your hands from paper, clay, thread or old things.|make something with my hands|5|0
Acting & drama|Pretending to be a character and telling a story with your voice and body.|act out a short scene|5|0
Storytelling|Making up or retelling stories in your own words.|tell a story with a beginning, a middle and an end|5|0
Photography & film|Capturing pictures and moving stories with a camera.|take a photo or film I'm proud of|6|1
Chess|A thinking game where two players move pieces to trap the other king.|play a whole game|5|0
Puzzles|Putting pieces or clues together to solve a problem.|finish a puzzle|5|0
Rubik's cube|A cube of colours that you twist until every side is one colour.|solve a layer or the whole cube|7|0
Memory & focus|Exercises that help you remember things and pay attention for longer.|remember more than I did before|5|0
Board & card games|Games with rules, turns and sometimes luck.|play a whole game and be a good sport|5|0
Riddles & brain teasers|Short thinking puzzles with a clever answer.|solve a riddle and make one of my own|6|0
Robotics|Building machines that can sense and move, and giving them jobs to do.|build a simple robot that moves|7|1
Electronics|Using wires, batteries and bulbs to make electricity do something.|light a bulb with a circuit|8|1
Building & LEGO|Making things stand up by joining blocks and pieces.|build something I planned|5|0
Woodwork & tools|Using real tools to shape and join wood, with a grown-up beside you.|make something from wood with a grown-up|7|1
Experiments|Trying something to see what happens, and noticing carefully.|do an experiment and say what I learned|6|1
Sewing & fabric|Joining cloth together with a needle and thread.|sew a line of stitches|7|1
Inventing|Thinking of a new way to solve a problem, then making it.|make something that solves a small problem|6|0
Stargazing & space|Looking at the sky and learning about the Moon, stars and planets.|find something in the night sky|5|0
Gardening|Growing plants from seeds and looking after them.|grow something and look after it|5|0
Birds & insects|Watching small creatures closely and learning what they do.|spot and name what I see|5|0
Fish & aquarium|Looking after fish and keeping their water clean.|help look after the fish|5|1
Pets & animals|Being gentle and caring with animals.|care for an animal gently|5|1
Hiking & camping|Walking outdoors, and sleeping in nature, safely.|walk a trail with a grown-up|5|1
Weather & seasons|Noticing clouds, rain and wind, and how the year changes.|tell what the weather will do|5|0
Caring for Earth|Small actions that keep our planet clean and healthy.|do something that helps the Earth|5|0
Cooking & baking|Mixing ingredients to make food, using heat and knives safely.|make a simple dish with a grown-up|5|1
Tidying & organising|Putting things where they belong so you can find them again.|tidy my space on my own|5|0
Getting ready|Doing your morning or bedtime jobs without being reminded.|get ready on time by myself|5|0
Tying & fastening|Using your fingers for laces, buttons, zips and ribbons.|tie, button or zip on my own|5|0
Money skills|Understanding coins and notes, and saving and spending.|count money and make a simple plan|6|0
Safety basics|Knowing how to stay safe: roads, your address, and who to ask for help.|tell what to do to stay safe|5|1
Helping at home|Doing jobs that help your family.|do a job at home without being asked|5|0
Staying calm|Finding ways to settle your body and mind when feelings get big.|calm myself down when I feel upset|5|0
Being brave|Doing something even though you feel a little scared.|do something that scares me a little|5|0
Handling mistakes|Seeing a mistake as information, then trying again.|try again after a mistake without giving up|5|0
Being patient|Waiting calmly, or doing something slowly, without rushing.|wait calmly for my turn|5|0
Sportsmanship|Playing fair, and being kind whether you win or lose.|win or lose kindly|5|0
Believing in myself|Remembering what you can do, and talking to yourself kindly.|say kind things to myself when it's hard|6|0
Sleep & rest|Giving your body and brain the rest they need to grow.|follow a calm bedtime routine|5|0
Gratitude|Noticing the good things and saying thanks.|name things I'm thankful for each day|5|0
Quiet & mindfulness|Paying gentle attention to right now: your breath, sounds and body.|sit quietly and notice my breath|5|0`;
/* notable kinds explained in plain words */
const KD=`Introducing myself|Saying your name and one thing about you, like "Hi, I'm ___ and I like ___."
Joining a group|Walking up to children who are playing or talking and asking, "Can I play too?"
Starting a chat|Saying something to begin talking, like "What are you building?" or "I like your bag."
Keeping a chat going|Asking a question back, so the talking goes both ways.
Show and tell|Bringing something you love and telling the class three things about it.
Elocution|Saying a poem or speech clearly, with the right voice, pauses and feeling.
Debate|Giving reasons for an idea and listening to the other side, taking turns.
Anchoring an event|Being the host who welcomes everyone and introduces each part of a show.
Saying no kindly|Saying "No, thank you" in a calm, clear voice without being rude.
Telling a grown-up when something's wrong|Finding a safe adult and saying what happened, even when it feels hard.
Sign language|Talking with your hands and face, used by many people who are deaf or hard of hearing.
Sanskrit|An ancient Indian language used in prayers, chants and old books.
Abacus|A frame with beads for adding and subtracting that helps you picture numbers in your head.
Scratch|A colourful tool where you snap blocks together to make games and animations.
Python|A popular text-based coding language, used by grown-up coders too.
Spell bee|A contest where you spell words out loud.
Math olympiad|Fun puzzle-style maths problems that stretch your thinking.
Kalaripayattu|An ancient martial art from Kerala with strikes, jumps and weapon training.
Silambam|A martial art from Tamil Nadu that uses a long bamboo staff.
Surya namaskar|The sun salutation: a flowing set of yoga poses done in order.
Kabaddi|A team game where a raider tries to tag players and get back, chanting "kabaddi" in one breath.
Kho-kho|A chasing game where chasers sit in a line and take turns running after the runners.
Throwball|A volleyball-like game where you throw and catch the ball over a net.
Bharatanatyam|A classical Indian dance from Tamil Nadu that tells stories with steps (adavus), hand gestures (mudras) and expressions.
Kuchipudi|A classical dance from Andhra Pradesh with quick footwork, graceful turns and storytelling.
Kathak|A classical dance from North India with spinning, rhythmic footwork and storytelling.
Odissi|A classical dance from Odisha with flowing, curvy poses.
Mohiniyattam|A gentle, graceful classical dance from Kerala.
Kathakali|A dance-drama from Kerala with colourful face paint and big expressions.
Manipuri|A soft, flowing classical dance from Manipur.
Carnatic|South Indian classical singing, built on ragas and talas.
Hindustani|North Indian classical singing.
Bhajans|Devotional songs that people sing together.
Veena|A South Indian string instrument you pluck, with a warm, ringing sound.
Mridangam|A two-sided drum that keeps the rhythm in South Indian music.
Tabla|A pair of small hand drums from North India.
Harmonium|A small keyboard that you pump with air to make sound.
Sitar|A long-necked Indian string instrument with a shimmering sound.
Madhubani|A colourful folk painting style from Bihar, full of patterns and nature.
Warli|A folk art from Maharashtra that draws people and daily life with simple white shapes.
Tanjore|A rich painting style from Tamil Nadu with gold foil and bright colours.
Kolam & rangoli|Patterns made at the doorstep with rice flour or colours, often around a grid of dots.
Origami|Folding paper into shapes without cutting or glue.
Mime|Acting out a story with only your face and body and no words.
Stop-motion|Making a movie by moving a toy a tiny bit and taking a photo each time.
Tangram|A puzzle of seven shapes that you rearrange to make pictures.
Carrom|A board game where you flick discs into the corner pockets.
Arduino|A small programmable board that makes lights and sensors do things.
Marble runs|Building a track for a marble to roll along.
Kitchen science|Safe experiments with kitchen things, like baking soda and vinegar.
Composting|Turning peels and leaves into rich soil for plants.
Weather diary|Writing or drawing the weather each day.
Pocket money plan|Deciding how much of your money to save, spend and share.
Emergency numbers|Knowing who to call in an emergency and how to say where you are.
A calm-down corner|A cosy spot at home with soft things, like a cushion, a book and a drawing pad, where you go to feel calm again when feelings get big. It is not a punishment. You choose to go there, and a grown-up helps you set it up once.
Counting to ten|Slowly counting up to ten to give big feelings time to get smaller.
Handling anger|Noticing the hot, tight feeling in your body and choosing what to do with it: breathe, move, or say it in words.
Handling worry|Telling someone what you're worried about, and finding one small thing you can do about it.
Stage fright|The butterflies you feel before performing. They are normal, and you can calm them with slow breaths.
Kind self-talk|Talking to yourself the way you would talk to a good friend.
A gratitude jar|A jar where you drop little notes about things you're thankful for.
Mindful breathing|Paying attention to slow breaths in and out.
Saying oops and moving on|Saying "oops", fixing what you can, and carrying on without being hard on yourself.
Learning from feedback|Listening to a tip, thinking about it, and trying again.
Losing kindly|Saying "good game" and being okay when you don't win.`;
const AGEN={
talk:['Waving, saying hello with a grown-up beside you, and using words like please and thank you. One or two words is a big win.','Starting a chat, asking a question, joining a game, or putting your hand up in class.','Keeping a conversation going, speaking up in a group, disagreeing kindly, and standing up for yourself.'],
school:['Short, playful bursts: letters, numbers, shapes and stories. Five minutes is plenty.','Building habits: reading a little each day, writing sentences, and practising number facts.','Longer focus and deeper ideas: reading to learn, writing paragraphs, and solving multi-step problems.'],
sport:['Playing with balls, balance and movement. It is about fun and getting comfortable, not winning.','Learning the basic moves of a sport and playing simple games with others.','Building skill, stamina and teamwork, and learning to lose and win kindly.'],
arts:['Exploring: making sounds, moving to music, scribbling and colouring. There is no wrong way.','Learning basic technique, like a few steps, notes or strokes, and finishing small pieces.','Building skill and style, practising on a schedule, and sharing your work.'],
mind:['Simple matching, sorting and memory games with a grown-up.','Games with rules, easy puzzles, and thinking a move or two ahead.','Strategy, planning ahead, harder puzzles, and learning from losses.'],
make:['Building and mixing with a grown-up right next to you. Hands-on and messy.','Following simple instructions to make something that works, with a grown-up close by.','Designing your own projects, testing them, fixing and improving.'],
nature:['Noticing and being gentle with plants and animals. Looking, touching softly and asking why.','Caring for something regularly, like watering plants, feeding fish or keeping a nature diary.','Taking responsibility, observing carefully, and learning how living things connect.'],
life:['Small jobs with a grown-up helping: putting things away, buttons, zips and shoes.','Doing a whole job yourself: packing your bag, tidying a room, simple cooking steps.','Planning and being responsible: managing time, money basics, cooking and staying safe.'],
feel:['Naming feelings with simple words and doing calming things with a grown-up, like big breaths.','Spotting your feelings, choosing a calming tool yourself, and trying again after a mistake.','Understanding what sets off your feelings, handling bigger ones, and being kind to yourself and others.']};
const GUH={
talk:'Practise at home first, show how you do it, and celebrate the try, not the result. Never push a shy child.',
school:'Keep it short and light. Praise effort and strategies, not just right answers.',
sport:'Play alongside them, keep it fun and safe, and watch for tiredness and heat.',
arts:'Show interest without fixing. Ask "tell me about it" instead of judging.',
mind:'Play together. Let them struggle a little before you give a hint.',
make:'Stay close for tools, heat, small parts and electricity.',
nature:'Teach gentle handling and hand-washing. Supervise near water and animals.',
life:'Let them do it slowly and imperfectly. Fix things quietly later, not in front of them.',
feel:'Stay calm yourself, name feelings without judging, and never use a calm-down space as a punishment.'};
const BANDN=['5 to 6','7 to 9','10 to 12'],MINS=[5,10,15];
const IND={};INFO.split('\n').forEach(l=>{const [n,w,lk,mn,gu]=l.split('|');IND[n]={what:w,look:lk,min:+mn,gu:gu==='1'}});
const KDM={};KD.split('\n').forEach(l=>{const i=l.indexOf('|');KDM[l.slice(0,i)]=l.slice(i+1)});
CATS.forEach(c=>c.sk.forEach(k=>Object.assign(k,IND[k.n]||{what:'',look:'',min:5,gu:false})));

const EMO=['⭐','🎯','🧩','🎲','♟️','🎭','🎬','🧵','🧶','🛹','⛸️','🏏','🏓','🥋','🤸','🧗','🏹','🎻','🥁','🎷','🎺','📚','🔭','🧪','🗺️','🌍','🐶','🐱','🐢','🦋','🍰','🥕','🧁','🛠️','🪁','🎈','🚀','🏕️','🌳','🪴','🎒','✂️','🖍️','📝','💡','🧸','🎧','🏄'];
const CC=['#D9C8FF','#9ADBFF','#FF9EC4','#FFD960','#82E3BD','#FFB38A','#B6F0F5','#E5E2F7'];
const IC={home:'<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',plus:'<path d="M12 5v14M5 12h14"/>',lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',back:'<path d="M15 5l-7 7 7 7"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',sound:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',heart:'<path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"/>',spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',chev:'<path d="M9 5l7 7-7 7"/>',mute:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9l4 6M21 9l-4 6"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8 14a4 4 0 0 0 8 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',cards:'<rect x="4" y="6" width="12" height="15" rx="2"/><path d="M8 3h10a2 2 0 0 1 2 2v12"/>'};
const ic=(n,s=24)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]}</svg>`;
const PAIS='<svg class="pais" viewBox="0 0 60 70" aria-hidden="true"><path d="M30 4C52 10 56 42 36 60 20 72 2 60 8 44 12 32 28 34 28 44 28 52 18 54 16 48" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3.5" stroke-linecap="round"/></svg>';
