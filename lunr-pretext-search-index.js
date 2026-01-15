var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "DefiningGames",
  "level": "1",
  "url": "DefiningGames.html",
  "type": "Chapter",
  "number": "1",
  "title": "Defining Games",
  "body": " Defining Games   What is a game? Explore your definition. Try to bend it. Try to break it. List at least 3 examples of games and 3 examples of things that are not games (but might be dangerously close) according to your definition.    Play each of the following games a couple of times to get familiar with the rules. (You can find playing boards for some of the games in the pages below)     Tic-Tac-Toe (as discussed in class)   Rock, Paper, Scissors (as discussed in class)   Chomp : Chomp is a two-player game played on an 8 by 6 piece of chocolate. The top left portion of the chocolate is poisoned. Players alternate turns choosing a square to eat and eats all pieces below and to the right of the chosen square. The player who eats the poisoned chocolate piece loses.   Pick-up Stones : Pick-up stones is a two player game played on a pile of 20 rocks. Players alternate turns removing 1,2, or 3 rocks at a time. The player who removes the last rock loses.   Hex : Hex is a two-player game played on an by board of hexagons. The players have two unique symbols (X and O). They alternate placing their symbols. The X player wins if they create a connected path of X's from the top of the board to the bottom, and the O player wins if they create a connected path of O's from the left to the right. If the board is filled with no such path, the game is a draw.    Make a list of at least 10 similarities\/differences between the games you've played above.   Tic-Tac-Toe Board:  latex  Chomp Board:  latex  Below is a legal game of chomp in which the first player would lose.  latex  Hex Board  latex  Now that you're familiar with the rules, try to develop a strategy for each game. If BOTH players make ``optimal decisions'' what happens? How can you tell? [It may help to start with smaller versions of the games to get an idea, for example pick-up stones with only 7 or 8 rocks.]   Tic-Tac-Toe (as discussed in class)   Rock, Paper, Scissors (as discussed in class)   Chomp : Chomp is a two-player game played on an 8 by 6 piece of chocolate. The top left portion of the chocolate is poisoned. Players alternate turns choosing a square to eat and eats all pieces below and to the right of the chosen square. The player who eats the poisoned chocolate piece loses.   Pick-up Stones : Pick-up stones is a two player game played on a pile of 20 rocks. Players alternate turns removing 1,2, or 3 rocks at a time. The player who removes the last rock loses.   Hex : Hex is a two-player game played on an by board of hexagons. The players have two unique symbols (X and O). They alternate placing their symbols. The X player wins if they create a connected path of X's from the top of the board to the bottom, and the O player wins if they create a connected path of O's from the left to the right. If the board is filled with no such path, the game is a draw.     ``Strategy'' is not really something we talked about. What does that mean? How can we formalize it?   "
},
{
  "id": "DefiningGames-2",
  "level": "2",
  "url": "DefiningGames.html#DefiningGames-2",
  "type": "Question",
  "number": "1.1",
  "title": "",
  "body": " What is a game? Explore your definition. Try to bend it. Try to break it. List at least 3 examples of games and 3 examples of things that are not games (but might be dangerously close) according to your definition.  "
},
{
  "id": "DefiningGames-3",
  "level": "2",
  "url": "DefiningGames.html#DefiningGames-3",
  "type": "Question",
  "number": "1.2",
  "title": "",
  "body": " Play each of the following games a couple of times to get familiar with the rules. (You can find playing boards for some of the games in the pages below)  "
},
{
  "id": "DefiningGames-5",
  "level": "2",
  "url": "DefiningGames.html#DefiningGames-5",
  "type": "Question",
  "number": "1.3",
  "title": "",
  "body": " Make a list of at least 10 similarities\/differences between the games you've played above.  "
},
{
  "id": "SomeGames",
  "level": "2",
  "url": "DefiningGames.html#SomeGames",
  "type": "Question",
  "number": "1.4",
  "title": "",
  "body": "Now that you're familiar with the rules, try to develop a strategy for each game. If BOTH players make ``optimal decisions'' what happens? How can you tell? [It may help to start with smaller versions of the games to get an idea, for example pick-up stones with only 7 or 8 rocks.]   Tic-Tac-Toe (as discussed in class)   Rock, Paper, Scissors (as discussed in class)   Chomp : Chomp is a two-player game played on an 8 by 6 piece of chocolate. The top left portion of the chocolate is poisoned. Players alternate turns choosing a square to eat and eats all pieces below and to the right of the chosen square. The player who eats the poisoned chocolate piece loses.   Pick-up Stones : Pick-up stones is a two player game played on a pile of 20 rocks. Players alternate turns removing 1,2, or 3 rocks at a time. The player who removes the last rock loses.   Hex : Hex is a two-player game played on an by board of hexagons. The players have two unique symbols (X and O). They alternate placing their symbols. The X player wins if they create a connected path of X's from the top of the board to the bottom, and the O player wins if they create a connected path of O's from the left to the right. If the board is filled with no such path, the game is a draw.   "
},
{
  "id": "DefiningGames-15",
  "level": "2",
  "url": "DefiningGames.html#DefiningGames-15",
  "type": "Question",
  "number": "1.5",
  "title": "",
  "body": " ``Strategy'' is not really something we talked about. What does that mean? How can we formalize it?  "
},
{
  "id": "CombGames",
  "level": "1",
  "url": "CombGames.html",
  "type": "Chapter",
  "number": "2",
  "title": "Combinatorial Games",
  "body": " Combinatorial Games   A game is said to be a Combinatorial Game if it is a sequential two player game with  A set of possible positions (sometimes called states of the game)  A move rule indicating for each position, what positions can be moved to  A win rule indicating a set of terminal positions where the game ends in which each terminal position has an associated outcome (which player wins)  Both players have total knowledge of the position(s), move rule, and win rule during their turn      Which of the games in REFERENCE are Combinatorial Games (as we defined them) and which are not? Why?    The game of Tic is similar to tic tac toe, but is played on a 1 by 3 board. On a player's turn, they fill one empty square with their symbol, for the first player, and for the second player. A player wins if they get two consecutive squares filled with their symbols. Determine if any player has a winning strategy. Justify your answer.    Justifying that you have a winning strategy is a pain. Try to brainstorm a way to visualize the entirety of a game (that is all things that could have happened). Describe how you would create such a visualization, and then use it to visualize Tic.    Use your visualization of Tic to decide who has a winning strategy. Does your visualization give all of the information necessary to justify that a strategy is a winning strategy? What does a strategy look like in the context of your visualization?   When analyzing games, we would like to take a step back from looking at the actual game board. (Some games may look different, but play essentially the same way as we were discussing with what makes games ``the same.'')  As such, let me abstract the game tree slightly further than where we ended in class. A WLD Game Tree condenses the information of our game tree by suppressing the game board. For example, the WLD Game tree for Tic is as follows:   We can build on our tree by saying that sometimes (maybe always?) we know if a position is winning or not, and for whom! We will build on that in this assignment.   Draw onto the WLD tree optimal strategies for and .    You may be surprised to realize that you are able to identify who wins the following two games (despite not knowing the rules or what a position even looks like):    Think about the positions in the game above (one at a time). Can we determine if is winning, is winning, or if it is a draw. If so, how?    Look back at the Tic WLD Game Tree and decide the outcome of the game from EVERY position assuming optimal play! Mark any position where has a winning strategy with , any position where has a winning strategy with , and any position where neither player has a winning strategy with . Are there some positions that are more interesting to know this type for?     Formally prove (by using induction on how many layers are in the tree) that in every Combinatorial Game exactly one of the following holds: (You may assume that has the first move)   Louise has a winning strategy.  Richard has a winning strategy.  Both players have drawing strategies.    Think about the consequence of this theorem. What does it mean about combinatorial games? Can we know who will win before the first move is even taken?   There is a problem with our general solution to combinatorial games. Time and computing power are limited! Instead we might like to build strategies by taking advantage of rules or symmetries to give meaningful instructions that would tell a player what to do in any scenario rather that building a gigantic tree.   For each of the following games try to come up with an optimal strategy which can be described in words. Determine if has a winning strategy, has a winning strategy, or if the both have drawing strategies. Justify your answers.    Pick up stones with 7 stones.  Pick up stones with stones.  The game Pick Up Stones 2: Electric Boogaloo is a two player game where there are two piles of stones alternating turns. On each turn a player removes , , or stones. The player who picks up a last stone in either pile loses. Determine a strategy if the piles have and stones.  Pick Up Stones 2: Electric Boogaloo with stones in both piles.  Chomp on a by board.  Chomp on an by board.  Chomp on an by board.   We now notice a type of symmetry in chomp to develop strategy stealing . The idea is that if a second player could move to a winning position, the first player could have taken moves to get to that position.   Prove the following by contradiction:   For every rectangular position in chomp (except the by board) the first player has a winning strategy.  "
},
{
  "id": "CombGames-2",
  "level": "2",
  "url": "CombGames.html#CombGames-2",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": " A game is said to be a Combinatorial Game if it is a sequential two player game with  A set of possible positions (sometimes called states of the game)  A move rule indicating for each position, what positions can be moved to  A win rule indicating a set of terminal positions where the game ends in which each terminal position has an associated outcome (which player wins)  Both players have total knowledge of the position(s), move rule, and win rule during their turn    "
},
{
  "id": "CombGames-3",
  "level": "2",
  "url": "CombGames.html#CombGames-3",
  "type": "Question",
  "number": "2.2",
  "title": "",
  "body": " Which of the games in REFERENCE are Combinatorial Games (as we defined them) and which are not? Why?  "
},
{
  "id": "CombGames-4",
  "level": "2",
  "url": "CombGames.html#CombGames-4",
  "type": "Question",
  "number": "2.3",
  "title": "",
  "body": " The game of Tic is similar to tic tac toe, but is played on a 1 by 3 board. On a player's turn, they fill one empty square with their symbol, for the first player, and for the second player. A player wins if they get two consecutive squares filled with their symbols. Determine if any player has a winning strategy. Justify your answer.  "
},
{
  "id": "CombGames-5",
  "level": "2",
  "url": "CombGames.html#CombGames-5",
  "type": "Question",
  "number": "2.4",
  "title": "",
  "body": " Justifying that you have a winning strategy is a pain. Try to brainstorm a way to visualize the entirety of a game (that is all things that could have happened). Describe how you would create such a visualization, and then use it to visualize Tic.  "
},
{
  "id": "CombGames-6",
  "level": "2",
  "url": "CombGames.html#CombGames-6",
  "type": "Question",
  "number": "2.5",
  "title": "",
  "body": " Use your visualization of Tic to decide who has a winning strategy. Does your visualization give all of the information necessary to justify that a strategy is a winning strategy? What does a strategy look like in the context of your visualization?  "
},
{
  "id": "CombGames-8",
  "level": "2",
  "url": "CombGames.html#CombGames-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "WLD Game Tree "
},
{
  "id": "CombGames-11",
  "level": "2",
  "url": "CombGames.html#CombGames-11",
  "type": "Question",
  "number": "2.6",
  "title": "",
  "body": " Draw onto the WLD tree optimal strategies for and .  "
},
{
  "id": "CombGames-15",
  "level": "2",
  "url": "CombGames.html#CombGames-15",
  "type": "Question",
  "number": "2.7",
  "title": "",
  "body": " Think about the positions in the game above (one at a time). Can we determine if is winning, is winning, or if it is a draw. If so, how?  "
},
{
  "id": "CombGames-16",
  "level": "2",
  "url": "CombGames.html#CombGames-16",
  "type": "Question",
  "number": "2.8",
  "title": "",
  "body": " Look back at the Tic WLD Game Tree and decide the outcome of the game from EVERY position assuming optimal play! Mark any position where has a winning strategy with , any position where has a winning strategy with , and any position where neither player has a winning strategy with . Are there some positions that are more interesting to know this type for?  "
},
{
  "id": "CombGames-18",
  "level": "2",
  "url": "CombGames.html#CombGames-18",
  "type": "Question",
  "number": "2.9",
  "title": "",
  "body": " Formally prove (by using induction on how many layers are in the tree) that in every Combinatorial Game exactly one of the following holds: (You may assume that has the first move)  "
},
{
  "id": "CombGames-20",
  "level": "2",
  "url": "CombGames.html#CombGames-20",
  "type": "Question",
  "number": "2.10",
  "title": "",
  "body": " Think about the consequence of this theorem. What does it mean about combinatorial games? Can we know who will win before the first move is even taken?  "
},
{
  "id": "CombGames-22",
  "level": "2",
  "url": "CombGames.html#CombGames-22",
  "type": "Question",
  "number": "2.11",
  "title": "",
  "body": " For each of the following games try to come up with an optimal strategy which can be described in words. Determine if has a winning strategy, has a winning strategy, or if the both have drawing strategies. Justify your answers.  "
},
{
  "id": "CombGames-24",
  "level": "2",
  "url": "CombGames.html#CombGames-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strategy stealing "
},
{
  "id": "CombGames-25",
  "level": "2",
  "url": "CombGames.html#CombGames-25",
  "type": "Question",
  "number": "2.12",
  "title": "",
  "body": " Prove the following by contradiction:  "
},
{
  "id": "CombGames-26",
  "level": "2",
  "url": "CombGames.html#CombGames-26",
  "type": "Theorem",
  "number": "2.13",
  "title": "",
  "body": "For every rectangular position in chomp (except the by board) the first player has a winning strategy. "
},
{
  "id": "NormalPlayGames",
  "level": "1",
  "url": "NormalPlayGames.html",
  "type": "Chapter",
  "number": "3",
  "title": "Normal Play Games",
  "body": " Normal Play Games  To understand a few questions that have previously arisen, we will make the following definition.  A combinatorial game is called a normal play game if the win rule is that the last player that can make a move wins.  Cut-Cake is a normal play game between two players Richard and Louise. Each position is a collection of uncut pieces of cake. Each piece of cake is rectangular and has dotted horizontal and vertical lines which show where the cake can be cut. On her turn, Louise can make one vertical cut. Richard can make one horizontal cut on his turns. (The last player to make a cut wins.)   Play several games of cut-cake on a by cake. Can you come up with a strategy? When can you tell that a game is over?   Normal Play games are more simple to analyze since the winning condition is the same for both players (and there are no draws). As such, we would like to build a tool to analyze them more robustly.   Try to develop notation to denote a position of cut-cake regardless of who's turn it is. What information do we need to know? What positions could we end up at? Use your representation to show a by position in cut-cake and all of the positions you can move to from this position.   The key property of a position in a normal play game is where each player can move to. For example, a board of cut cake has the following possible positions:  If Louise is set to move, she can create   one and one board  two boards   If Richard is set to move, he can create   One and one board   We develop the following Position Notation for normal play games using set notation. On the left hand side are the positions Louise could move to, and on the right hand side are the positions that Richard could move to. \\includegraphics[width = \\textwidth]{Images\/PXL_20220907_154711388.jpg} (Sorry I got lazy with the picture)  For each of the following cut-cake positions, determine the types of the game: Current, Previous, L, or R.    Two boards and one board  One board  One board and one board  One board  Pick up Stones with stones.    Try to come up with general rules rules to determine the type of a position . When do I know that is type , , Current, or Previous? (Think about how we proved Zermelo's theorem: look at the positions we can move to and decide what the best thing each player can do is.)   We will now start to think of positions of games more like numbers to analyze them algebraically. In fact, we've already started thinking about doing that when we said that Pick Up Stones 2: Electric Boogaloo was like playing two games of Pick Up Stones added together.  In situations like this, we could say that Pick Up Stones 2 with and stones is the same as Pick Up Stones with stones Pick Up Stones with stones. The two games being added together are often called components of the game. In sums of games, on a player's turn they choose one component to play in and make one move in that game, then their turn ends. (Just like with Pick Up Stones 2)   For each of the games in , play the sum of that game plus Pick Up Stones with stones. Try to determine which type the game is.    For each of the following, play the sum of that game plus Pick Up Stones with stones. Determine which type the game is.    Two boards and one board  One board  One board and one board  One board  Pick up Stones with stones.   Pick up bricks is a game that is played like pick up stones, but the last brick is not poisoned. Instead pick up bricks is a normal play game (so the last player to be able to pick up a brick wins).   Determine the type for Pick up bricks with bricks. Then, for each of through above, play the sum of that game plus Pick up bricks with bricks. Determine which type the game is.    Make conjectures about how types interact with sums. Try to justify your thoughts. For example, the top left corner of this table should be filled in with your guess for what type a game would be if was type and was type . (Question 2 might lead to an interesting extension...)  \\vspace{.5in} \\resizebox{4.5in}{!}{   +  R  L  C  P    R  \\hspace{.2in}  \\hspace{.2in}  \\hspace{.2in}  \\hspace{.2in}    L  \\hspace{.2in}  \\hspace{.2in}  \\hspace{.2in}  \\hspace{.2in}    C  \\hspace{.2in}  \\hspace{.2in}  \\hspace{.2in}  \\hspace{.2in}    P  \\hspace{.2in}  \\hspace{.2in}  \\hspace{.2in}  \\hspace{.2in}   } Domineering is a normal-play game played using some squares from a rectangular array. On Louise's turn, she may place a domino over two unoccupied squares. On Richard's turn, he may place a domino over two unoccupied squares. (The last player to make a move wins.) Below is a valid game of domineering in which Richard wins: \\includegraphics[width = 4in, angle = -2.3, origin = c]{Images\/domineeringex.pdf}  Determine the type of the following domineering positions:   One board  One board  One board  One board + One board  One board + One board     Prove the following:  If is type , then is the same type as .   It is finally time to answer a critical question. When are two games the same?  We say that two positions and in (possibly different) normal-play games are equivalent if for every position in any normal play game, the two positions and have the same type. We will write to indicate this.   Is the following domineering game above equivalent to pick-up bricks with one brick?     Is a game of domineering equivalent to a game of domineering?   We say that two positions and in (possibly different) normal-play games are equivalent if for every position in any normal play game, the two positions and have the same type. We will write to indicate this.   Use the definition of equivalent to prove the following (Hint: some of these proofs might be VERY short):   If , and are positions in normal-play games    .  If then .  If and then .      We want to explore the relationship between equivalence and type. Decide if the following are true. Justify your answers.   If and have the same type, then .  If , then and have the same type.    Theorem REFERENCE establishes that games are very special. The following explores this idea in an algebraic sense.   Prove the following:    If is type , then .  If and are type then .  Are any states different from (or not equivalent to) any other states?  Is there some number (under addition) that acts like states (under equivalence)? Write down your observations about states.   "
},
{
  "id": "NormalPlayGames-3",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-3",
  "type": "Definition",
  "number": "3.1",
  "title": "",
  "body": "A combinatorial game is called a normal play game if the win rule is that the last player that can make a move wins. "
},
{
  "id": "NormalPlayGames-5",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-5",
  "type": "Question",
  "number": "3.2",
  "title": "",
  "body": " Play several games of cut-cake on a by cake. Can you come up with a strategy? When can you tell that a game is over?  "
},
{
  "id": "NormalPlayGames-7",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-7",
  "type": "Question",
  "number": "3.3",
  "title": "",
  "body": " Try to develop notation to denote a position of cut-cake regardless of who's turn it is. What information do we need to know? What positions could we end up at? Use your representation to show a by position in cut-cake and all of the positions you can move to from this position.  "
},
{
  "id": "NormalPlayGames-13",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Position Notation "
},
{
  "id": "NormalPlayGames-14",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-14",
  "type": "Question",
  "number": "3.4",
  "title": "",
  "body": " For each of the following cut-cake positions, determine the types of the game: Current, Previous, L, or R.  "
},
{
  "id": "NormalPlayGames-16",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-16",
  "type": "Question",
  "number": "3.5",
  "title": "",
  "body": " Try to come up with general rules rules to determine the type of a position . When do I know that is type , , Current, or Previous? (Think about how we proved Zermelo's theorem: look at the positions we can move to and decide what the best thing each player can do is.)  "
},
{
  "id": "NormalPlayGames-18",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "components "
},
{
  "id": "NormalPlayGames-19",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-19",
  "type": "Question",
  "number": "3.6",
  "title": "",
  "body": " For each of the games in , play the sum of that game plus Pick Up Stones with stones. Try to determine which type the game is.  "
},
{
  "id": "NormalPlayGames-20",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-20",
  "type": "Question",
  "number": "3.7",
  "title": "",
  "body": " For each of the following, play the sum of that game plus Pick Up Stones with stones. Determine which type the game is.  "
},
{
  "id": "NormalPlayGames-23",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-23",
  "type": "Question",
  "number": "3.8",
  "title": "",
  "body": " Determine the type for Pick up bricks with bricks. Then, for each of through above, play the sum of that game plus Pick up bricks with bricks. Determine which type the game is.  "
},
{
  "id": "NormalPlayGames-24",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-24",
  "type": "Question",
  "number": "3.9",
  "title": "",
  "body": " Make conjectures about how types interact with sums. Try to justify your thoughts. For example, the top left corner of this table should be filled in with your guess for what type a game would be if was type and was type . (Question 2 might lead to an interesting extension...)  "
},
{
  "id": "NormalPlayGames-30",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-30",
  "type": "Question",
  "number": "3.10",
  "title": "",
  "body": " Determine the type of the following domineering positions:   One board  One board  One board  One board + One board  One board + One board   "
},
{
  "id": "NormalPlayGames-31",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-31",
  "type": "Question",
  "number": "3.11",
  "title": "",
  "body": " Prove the following:  If is type , then is the same type as .  "
},
{
  "id": "NormalPlayGames-33",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-33",
  "type": "Definition",
  "number": "3.13",
  "title": "",
  "body": "We say that two positions and in (possibly different) normal-play games are equivalent if for every position in any normal play game, the two positions and have the same type. We will write to indicate this. "
},
{
  "id": "NormalPlayGames-34",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-34",
  "type": "Question",
  "number": "3.14",
  "title": "",
  "body": " Is the following domineering game above equivalent to pick-up bricks with one brick?  "
},
{
  "id": "NormalPlayGames-36",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-36",
  "type": "Question",
  "number": "3.15",
  "title": "",
  "body": " Is a game of domineering equivalent to a game of domineering?  "
},
{
  "id": "NormalPlayGames-37",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-37",
  "type": "Definition",
  "number": "3.16",
  "title": "",
  "body": "We say that two positions and in (possibly different) normal-play games are equivalent if for every position in any normal play game, the two positions and have the same type. We will write to indicate this. "
},
{
  "id": "NormalPlayGames-38",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-38",
  "type": "Question",
  "number": "3.17",
  "title": "",
  "body": " Use the definition of equivalent to prove the following (Hint: some of these proofs might be VERY short):   If , and are positions in normal-play games    .  If then .  If and then .    "
},
{
  "id": "NormalPlayGames-39",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-39",
  "type": "Question",
  "number": "3.19",
  "title": "",
  "body": " We want to explore the relationship between equivalence and type. Decide if the following are true. Justify your answers.   If and have the same type, then .  If , then and have the same type.   "
},
{
  "id": "NormalPlayGames-41",
  "level": "2",
  "url": "NormalPlayGames.html#NormalPlayGames-41",
  "type": "Question",
  "number": "3.20",
  "title": "",
  "body": " Prove the following:  "
},
{
  "id": "ImpartialGames",
  "level": "1",
  "url": "ImpartialGames.html",
  "type": "Chapter",
  "number": "4",
  "title": "Impartial Combinatorial Games",
  "body": " Impartial Combinatorial Games   A combinatorial game is said to be impartial if the move rule is the same for each player in every position.    Prove or disprove the following Claim:    Every position in an impartial game is one of the following:   Type C.  Type P.     Using the previous claim, describe how to determine the type of a position of an impartial game using position notation.   To better understand impartial games, we introduce the following game (as a reminder, you are NOT to look up this game online or use any resources other than our brains, the notes, or each other's brains to explore this game):  Nim is an impartial game in which a position consists of piles of stones of sizes . To make a move, a player removes one or more (up to all) stones from a chosen pile. The last player to take a stone wins.   Let's build an intuition on Nim. Determine the type of the following Nim positions. Justify your answers.    One pile of stones.  Two piles of stones.  A pile of stones and a pile of stones.  One pile with stones and one pile with stones with .  One pile with stone, one pile with stones, and one pile with stones.  One pile with stones, one pile with stones, and one pile with stones.  %THIS QUESTION WAS QUITE DIFFICULT: GIVE MORE GUIDANCE\/SCAFFOLDING  Nim is a relatively general game. Can it be used to describe games that we have played before?    Convert a game of Pick Up Stones with stones into a game of Nim.  Convert a game of Pick Up Stones with stones into a game of Nim.  Convert a game of Chomp into a game of Nim.   We established that positions act like in some way. We want to establish, what do positions look like in Nim. We will now define a new type of ``number'' to help us assess this.  A Nim pile with stones is said to have nimber  (read ``star n'').   Classify all nimbers that correspond to positions. Classify all nimbers that correspond to positions. Then try to assign a nimber to each of the games in Problem .    A Nim pile with stones is said to have nimber  (read ``star n'').   We would like to use nimbers to understand what a \"balanced\" game is. Let's take advantage of our idea of mirroring and split large groups into smaller groups that we can work with for balancing purposes. We introduce the following definition to decide how to break a game down into smaller pieces in a unique way.  [Binary Expansion] Let be a nonnegative integer. The binary expansion of is a representation of as a sum of distinct powers of two.  For example, the binary expansion of is as follows:    Find the binary expansions of the following numbers:                 Prove (by induction) that every nonnegative integer has a unique binary expansion. (Hint: Pull out the largest power of repeatedly.)   [Balanced] A position in Nim is said to be balanced if for every power of , the total number of subpiles of that size is even.   Determine the type of a balanced position in Nim. Justify your answer.    Consider the nim game which has one pile of size , one pile of size , one pile of size , and one pile of size .   Split each of these components into smaller groups based on their binary expansions. Is this position balanced?  Try to determine the winner of this game. Can you build a procedure that ensures that ``unbalanced'' games get ``balanced?''    We want to continue to explore our nim sum, and its relation to what type of game we are playing. To do this, we need to determine if\/when we have good moves. First we will prove a useful fact for finding a move.   Prove that for all non-negative integers , . (In particular, this means that a subgame of size is big enough to split into subgames of every power of two smaller than it.)    Determine if each position below is balanced, then if it is unbalanced find a move that balances the position. (Hint: It may be easier to see with binary representations\/nim sums... and we did the previous problem for a reason.)                    We now address a conjecture from before:  A position in nim is type P is and only if it is balanced.  We also introduce a new claim which is related (perhaps unintuitively) to our conjecture.  If are nonnegative integers and , then     Prove the Claim REFERENCE.  How is the claim related to our conjecture? Why is this claim so exciting to game theorists? What does it allow us to do?    We have:  If are nonnegative integers and , then   With this theorem, we have now proven that every nim game is equivalent to some nimber! We will now go beyond to show that every impartial game is equivalent to some nimber.  First, let us note that in impartial games, the position notation ( ) is much simpler since each player can make exactly the same moves. Namely the position notation of an impartial game can be simplified to since and have the same potential moves.  We need just one more tool before we are ready to prove ``the big one.''  For a set of nonnegative integers, we define the Minimal EXcluded value (abbreviated as MEX ) of to be the smallest nonnegative integer which is not in .  For example, the MEX of is , sometimes written . %Spend more time with MEX examples, if possible  We will translate the idea of MEX into nim by using nimbers. For each of the following, determine the impartial position notation for the following games of nim, then determine the (nim) MEX of the position notation.                     Finally, in the context of the theorem we just proved, how is MEX related to the equivalence?  %REFERENCED HOMEWORK PROBLEM: SCAFFOLD BETTER IN TEXTBOOK ALONE  Discuss the downsides and accomplishments of following theorem for us. Prove it (remember problem 4b on the homework, then tell a player how to make a move).   Let be a position in an impartial game. Suppose that for every . Then where is the MEX of the set .  We've made it to the grand-daddy of all Combinatorial Game Theory.  Use the above theorem and the fact that all type games are equivalent (hence equivalent to ) to prove the grand-daddy of all Combinatorial Game Theory theorems.   Prove the following (by induction on the number of layers in the game tree): [Note - You may assume the game is normal play if that makes analysis easier.]   [Sprague-Grundy] Every position in an impartial game is equivalent to a nimber.  Use the MEX theorem for the following question.   Find the nimber equivalent to each game of Pick Up Bricks on less than or equal to bricks. Then conjecture a way to determine the nimber of a Pick Up Bricks game on bricks.  %THIS IS TOO BIG, REDUCE TO SAY FIND NIMBERS FOR EACH CHOMP GAME UP TO 2 by 4 %SPEND TIME THINKING ABOUT HOW TO GET NON-NORMAL PLAY GAMES TO LOOK LIKE NORMAL PLAY (would anyone choose a losing move?)  Find the nimber equivalent to each game of chomp on to total bricks (such that the width is at least as big as the height).    Find a winning move in the following game if it exists, otherwise justify that there is no winning move:  ( game of chomp) (Pick up bricks on bricks)    Find the nimber equivalent to the game of chomp.    Find a winning move in the following game if it exists, otherwise justify that there is no winning move:  ( game of chomp) (Pick up bricks on bricks)       Chop is a normal play impartial game played on an array viewed as a plank that is secured only at the lower left corner. On each turn, a player must either make a horizontal or vertical cut (all the way across the plank), and then any piece no longer connected to the lower left corner falls off into the water. (The lower left square is connected to the ground and cannot fall into the water, so the terminal position for Chop is just a array that is the bottom left square.)  %SCAFFOLD BETTER BUILD UP TO THIS! For every prove that the game of chop is equivalent to .   Prove this by induction on with base case (so and )   "
},
{
  "id": "ImpartialGames-2",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-2",
  "type": "Definition",
  "number": "4.1",
  "title": "",
  "body": " A combinatorial game is said to be impartial if the move rule is the same for each player in every position.  "
},
{
  "id": "ImpartialGames-3",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-3",
  "type": "Question",
  "number": "4.2",
  "title": "",
  "body": " Prove or disprove the following Claim:  "
},
{
  "id": "ImpartialGames-4",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-4",
  "type": "Claim",
  "number": "4.3",
  "title": "",
  "body": " Every position in an impartial game is one of the following:   Type C.  Type P.   "
},
{
  "id": "ImpartialGames-5",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-5",
  "type": "Question",
  "number": "4.4",
  "title": "",
  "body": " Using the previous claim, describe how to determine the type of a position of an impartial game using position notation.  "
},
{
  "id": "ImpartialGames-8",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-8",
  "type": "Question",
  "number": "4.5",
  "title": "",
  "body": " Let's build an intuition on Nim. Determine the type of the following Nim positions. Justify your answers.  "
},
{
  "id": "ImpartialGames-10",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-10",
  "type": "Question",
  "number": "4.6",
  "title": "",
  "body": " Nim is a relatively general game. Can it be used to describe games that we have played before?  "
},
{
  "id": "ImpartialGames-13",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-13",
  "type": "Definition",
  "number": "4.7",
  "title": "",
  "body": "A Nim pile with stones is said to have nimber  (read ``star n''). "
},
{
  "id": "ImpartialGames-14",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-14",
  "type": "Question",
  "number": "4.8",
  "title": "",
  "body": " Classify all nimbers that correspond to positions. Classify all nimbers that correspond to positions. Then try to assign a nimber to each of the games in Problem .  "
},
{
  "id": "ImpartialGames-15",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-15",
  "type": "Definition",
  "number": "4.9",
  "title": "",
  "body": " A Nim pile with stones is said to have nimber  (read ``star n'').  "
},
{
  "id": "ImpartialGames-17",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-17",
  "type": "Definition",
  "number": "4.10",
  "title": "",
  "body": "[Binary Expansion] Let be a nonnegative integer. The binary expansion of is a representation of as a sum of distinct powers of two. "
},
{
  "id": "ImpartialGames-20",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-20",
  "type": "Question",
  "number": "4.11",
  "title": "",
  "body": " Find the binary expansions of the following numbers:  "
},
{
  "id": "ImpartialGames-22",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-22",
  "type": "Question",
  "number": "4.12",
  "title": "",
  "body": " Prove (by induction) that every nonnegative integer has a unique binary expansion. (Hint: Pull out the largest power of repeatedly.)  "
},
{
  "id": "ImpartialGames-23",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-23",
  "type": "Definition",
  "number": "4.13",
  "title": "",
  "body": "[Balanced] A position in Nim is said to be balanced if for every power of , the total number of subpiles of that size is even. "
},
{
  "id": "ImpartialGames-24",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-24",
  "type": "Question",
  "number": "4.14",
  "title": "",
  "body": " Determine the type of a balanced position in Nim. Justify your answer.  "
},
{
  "id": "ImpartialGames-25",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-25",
  "type": "Question",
  "number": "4.15",
  "title": "",
  "body": " Consider the nim game which has one pile of size , one pile of size , one pile of size , and one pile of size .   Split each of these components into smaller groups based on their binary expansions. Is this position balanced?  Try to determine the winner of this game. Can you build a procedure that ensures that ``unbalanced'' games get ``balanced?''   "
},
{
  "id": "ImpartialGames-27",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-27",
  "type": "Question",
  "number": "4.16",
  "title": "",
  "body": " Prove that for all non-negative integers , . (In particular, this means that a subgame of size is big enough to split into subgames of every power of two smaller than it.)  "
},
{
  "id": "ImpartialGames-28",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-28",
  "type": "Question",
  "number": "4.17",
  "title": "",
  "body": " Determine if each position below is balanced, then if it is unbalanced find a move that balances the position. (Hint: It may be easier to see with binary representations\/nim sums... and we did the previous problem for a reason.)  "
},
{
  "id": "Conj-BalancedTypeP",
  "level": "2",
  "url": "ImpartialGames.html#Conj-BalancedTypeP",
  "type": "Claim",
  "number": "4.18",
  "title": "",
  "body": "A position in nim is type P is and only if it is balanced. "
},
{
  "id": "ImpartialGames-33",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-33",
  "type": "Claim",
  "number": "4.19",
  "title": "",
  "body": "If are nonnegative integers and , then  "
},
{
  "id": "ImpartialGames-34",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-34",
  "type": "Question",
  "number": "4.20",
  "title": "",
  "body": "  Prove the Claim REFERENCE.  How is the claim related to our conjecture? Why is this claim so exciting to game theorists? What does it allow us to do?   "
},
{
  "id": "ImpartialGames-36",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-36",
  "type": "Theorem",
  "number": "4.21",
  "title": "",
  "body": "If are nonnegative integers and , then  "
},
{
  "id": "ImpartialGames-38",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-38",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "position notation of an impartial game "
},
{
  "id": "ImpartialGames-40",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-40",
  "type": "Definition",
  "number": "4.22",
  "title": "",
  "body": "For a set of nonnegative integers, we define the Minimal EXcluded value (abbreviated as MEX ) of to be the smallest nonnegative integer which is not in . "
},
{
  "id": "ImpartialGames-42",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-42",
  "type": "Question",
  "number": "4.23",
  "title": "",
  "body": " We will translate the idea of MEX into nim by using nimbers. For each of the following, determine the impartial position notation for the following games of nim, then determine the (nim) MEX of the position notation.                   "
},
{
  "id": "ImpartialGames-43",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-43",
  "type": "Question",
  "number": "4.24",
  "title": "",
  "body": " Finally, in the context of the theorem we just proved, how is MEX related to the equivalence?  "
},
{
  "id": "ImpartialGames-44",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-44",
  "type": "Question",
  "number": "4.25",
  "title": "",
  "body": " Discuss the downsides and accomplishments of following theorem for us. Prove it (remember problem 4b on the homework, then tell a player how to make a move).  "
},
{
  "id": "ImpartialGames-45",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-45",
  "type": "Theorem",
  "number": "4.26",
  "title": "",
  "body": "Let be a position in an impartial game. Suppose that for every . Then where is the MEX of the set . "
},
{
  "id": "ImpartialGames-48",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-48",
  "type": "Question",
  "number": "4.27",
  "title": "",
  "body": " Prove the following (by induction on the number of layers in the game tree): [Note - You may assume the game is normal play if that makes analysis easier.]  "
},
{
  "id": "ImpartialGames-49",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-49",
  "type": "Theorem",
  "number": "4.28",
  "title": "",
  "body": "[Sprague-Grundy] Every position in an impartial game is equivalent to a nimber. "
},
{
  "id": "ImpartialGames-51",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-51",
  "type": "Question",
  "number": "4.29",
  "title": "",
  "body": " Find the nimber equivalent to each game of Pick Up Bricks on less than or equal to bricks. Then conjecture a way to determine the nimber of a Pick Up Bricks game on bricks.  "
},
{
  "id": "ImpartialGames-52",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-52",
  "type": "Question",
  "number": "4.30",
  "title": "",
  "body": " Find the nimber equivalent to each game of chomp on to total bricks (such that the width is at least as big as the height).  "
},
{
  "id": "ImpartialGames-53",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-53",
  "type": "Question",
  "number": "4.31",
  "title": "",
  "body": " Find a winning move in the following game if it exists, otherwise justify that there is no winning move:  "
},
{
  "id": "ImpartialGames-59",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-59",
  "type": "Question",
  "number": "4.32",
  "title": "",
  "body": " Find the nimber equivalent to the game of chomp.  "
},
{
  "id": "ImpartialGames-60",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-60",
  "type": "Question",
  "number": "4.33",
  "title": "",
  "body": " Find a winning move in the following game if it exists, otherwise justify that there is no winning move:  ( game of chomp) (Pick up bricks on bricks)    "
},
{
  "id": "ImpartialGames-61",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-61",
  "type": "Definition",
  "number": "4.34",
  "title": "",
  "body": "  Chop is a normal play impartial game played on an array viewed as a plank that is secured only at the lower left corner. On each turn, a player must either make a horizontal or vertical cut (all the way across the plank), and then any piece no longer connected to the lower left corner falls off into the water. (The lower left square is connected to the ground and cannot fall into the water, so the terminal position for Chop is just a array that is the bottom left square.)  "
},
{
  "id": "ImpartialGames-62",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-62",
  "type": "Theorem",
  "number": "4.35",
  "title": "",
  "body": "For every prove that the game of chop is equivalent to . "
},
{
  "id": "ImpartialGames-63",
  "level": "2",
  "url": "ImpartialGames.html#ImpartialGames-63",
  "type": "Question",
  "number": "4.36",
  "title": "",
  "body": " Prove this by induction on with base case (so and )  "
},
{
  "id": "ClassicalGames",
  "level": "1",
  "url": "ClassicalGames.html",
  "type": "Chapter",
  "number": "5",
  "title": "Classical Games",
  "body": " Classical Games  We now seek to analyze the outcomes of games with simultaneous decisions. Our primary tool is to understand payouts.  A game matrix for a game with two players, Rose and Colin, is a matrix with each row representing a choice that Rose can make and each column representing a choice that Colin can make. The entry of the matrix is the pair , called the \\textit{payoff vector}, where is the payout for Rose and is the payout for Colin if Rose chooses and Colin chooses .  This definition is a bit ugly to read, below is the Game Matrix for Rock Paper Scissors.      Rock  Paper  Scissors    Rock  (0,0)  (-1,1)  (1,-1)    Paper  (1,-1)  (0,0)  (-1,1)    Scissors  (-1,1)  (1,-1)  (0,0)     For each of the following, create the Game Matrix for the following game. Take a guess at what a good strategy might be. Justify your answer.    Matching Pennies : In the game of Matching Pennies, each player has a penny which they will reveal simultaneously. That is, each player two choices: Heads (H) or Tails (T). If they choose the same letter, then Rose wins dollar from Colin. If they don't match, then Rose pays dollar to Colin.   Chicken : In the game of chicken, Rose and Colin line up in a street and drive directly at one another with their ``street cred'' on the line. Each player can choose to go straight or swerve to avoid collision. If both players swerve, neither player gains or loses any ``street cred.'' If one player swerves and the other does not, the swerving player loses one ``street cred'' and the player that does not swerve gains ``street cred.'' If neither player swerves, they crash causing both players to lose ``street cred.''   For now, we will consider playing each game only one time.  This means that we do not have an opportunity to learn or take advantage of tendencies or patterns that the opponent shows (but we can build game matrices to decide what moves make sense for them).  [Pure Strategy] A pure strategy for a player means that the player ALWAYS makes the same decision.  Note that when a game is played only once, we must always choose a pure strategy (we play the game once, so we have only one opportunity to select a choice).   For each of the following games, try to decide a ``best'' pure strategy for each player. Discuss and justify your answers.         A  B    C  (100,-100)  (-10,10)    D  (0,0)  (-1,11)          A  B  C    D  (1000,-1000)  (-5,5)  (-15,15)    E  (200,-200)  (0,0)  (-5,5)    D  (500,-500)  (20,-20)  (-25,25)      In the previous problem, you may have noticed a similar phenomenon to the Prisoner's Dilemma.  [Dominating Strategies] A strategy of row (or column) dominates a strategy of column if every entry of row (or column) is less than or equal to the corresponding entry in row (or column) .  [Strictly Dominating Strategies] A strategy of row (or column) dominates a strategy of column if every entry if row (or column) is strictly less than the corresponding entry in row (or column) .   If strategy dominates strategy , will a rational player choose strategy ? Use your answer to reduce the following game into as simple a form as possible or justify why we cannot reduce the game further. (Remove dominated rows and columns whenever you see them.)   Imagine a voting model where there are exactly political views, linearly ordered with being the most liberal and being the most conservative. Suppose that two candidates are running for office and must choose to adopt of the views. Each candidate wants to maximize their favorability ratings, and the following Game Matrix shows how their ratings change for each scenario:      1  2  3  4  5  6  7    1  (0,0)  (-50,50)  (-40,40)  (-30,30)  (-20,20)  (-10,10)  (0,0)    1  (50,-50)  (0,0)  (-30,30)  (-20,20)  (-10,10)  (0,0)  (10,-10)    1  (40,-40)  (30,-30)  (0,0)  (-10,10)  (0,0)  (10,-10)  (20,-20)    1  (30,-30)  (20,-20)  (10,-10)  (0,0)  (10,-10)  (20,-20)  (30,-30)    1  (20,-20)  (10,-10)  (0,0)  (-10,10)  (0,0)  (30,-30)  (40,-40)    1  (10,-10)  (0,0)  (-10,10)  (-20,20)  (-30,30)  (0,0)  (50,-50)    1  (0,0)  (-10,10)  (-20,20)  (-30,30)  (-40,40)  (-50,50)  (0,0)    "
},
{
  "id": "ClassicalGames-3",
  "level": "2",
  "url": "ClassicalGames.html#ClassicalGames-3",
  "type": "Definition",
  "number": "5.1",
  "title": "",
  "body": "A game matrix for a game with two players, Rose and Colin, is a matrix with each row representing a choice that Rose can make and each column representing a choice that Colin can make. The entry of the matrix is the pair , called the \\textit{payoff vector}, where is the payout for Rose and is the payout for Colin if Rose chooses and Colin chooses . "
},
{
  "id": "ClassicalGames-6",
  "level": "2",
  "url": "ClassicalGames.html#ClassicalGames-6",
  "type": "Question",
  "number": "5.2",
  "title": "",
  "body": " For each of the following, create the Game Matrix for the following game. Take a guess at what a good strategy might be. Justify your answer.  "
},
{
  "id": "ClassicalGames-10",
  "level": "2",
  "url": "ClassicalGames.html#ClassicalGames-10",
  "type": "Definition",
  "number": "5.3",
  "title": "",
  "body": "[Pure Strategy] A pure strategy for a player means that the player ALWAYS makes the same decision. "
},
{
  "id": "ClassicalGames-12",
  "level": "2",
  "url": "ClassicalGames.html#ClassicalGames-12",
  "type": "Question",
  "number": "5.4",
  "title": "",
  "body": " For each of the following games, try to decide a ``best'' pure strategy for each player. Discuss and justify your answers.  "
},
{
  "id": "ClassicalGames-15",
  "level": "2",
  "url": "ClassicalGames.html#ClassicalGames-15",
  "type": "Definition",
  "number": "5.5",
  "title": "",
  "body": "[Dominating Strategies] A strategy of row (or column) dominates a strategy of column if every entry of row (or column) is less than or equal to the corresponding entry in row (or column) . "
},
{
  "id": "ClassicalGames-16",
  "level": "2",
  "url": "ClassicalGames.html#ClassicalGames-16",
  "type": "Definition",
  "number": "5.6",
  "title": "",
  "body": "[Strictly Dominating Strategies] A strategy of row (or column) dominates a strategy of column if every entry if row (or column) is strictly less than the corresponding entry in row (or column) . "
},
{
  "id": "ClassicalGames-17",
  "level": "2",
  "url": "ClassicalGames.html#ClassicalGames-17",
  "type": "Question",
  "number": "5.7",
  "title": "",
  "body": " If strategy dominates strategy , will a rational player choose strategy ? Use your answer to reduce the following game into as simple a form as possible or justify why we cannot reduce the game further. (Remove dominated rows and columns whenever you see them.)  "
},
{
  "id": "ZeroSumGames",
  "level": "1",
  "url": "ZeroSumGames.html",
  "type": "Chapter",
  "number": "6",
  "title": "Zero Sum Games",
  "body": " Zero Sum Games  We turn our attention to zero sum games to develop some theory.  [Zero Sum Game Matrix] A game matrix for a game with two players, Rose and Colin, is a matrix with each row representing a choice that Rose can make and each column representing a choice that Colin can make. The entry of the matrix is the payout for Rose. (Note then that the payout for Colin is .)   For each of the following zero-sum games, find all equilibrium pairs. If you are unable to find equilibrium pairs, explain the issue you ran into. Justify your answers.        W  X  Y  Z    A  1  2  3  4    B  0  -1  0  5    C  -1  3  2  4    D  0  1  -1  1      {c|cccc}    W  X  Y  Z    A  -2  0  3  20    B  1  -2  -5  -3    C  10  -10  -1  1    D  0  0  10  8     We now develop another way to find a ``good'' strategy which does not rely on dominating strategies. We think of this new strategy as ``extremely defensive play.''   Imagine you are playing the following game. You know that your opponent CAN read your mind, but you can't read theirs. What should you do if you are Rose? What should you do if you are Colin? Why?       W  X  Y  Z    A  1  0  0  10    B  -1  0  -2  9    C  1  1  1  8    D  -2  0  0  7     Try the method built in the previous problem on the other games on this pre-class. What do you notice about the strategies each player ends up choosing?    How does the strategy developed above work in the following game? If both players start the game using this strategy, would either player be better served to change strategy? If Colin guesses that Rose might change, would Colin be at an advantage to switch?        W  X  Y  Z    A  -2  0  3  20    B  1  2  -3  0    C  10  -10  -1  1    D  0  0  10  15      Prove the following:  Let be a zero-sum game matrix. If iterated deletion of dominated strategies reduces to a matrix consisting of the entry in position of the original matrix, then the entry of is an equilibrium point.  (Hint: Show that a removed row can't have been a better option for Rose and a removed Column can't have been a better option for Colin.)   The expected value of a game of chance is the average net gain or loss that we would expect per game if we played the game many times. We compute the expected value by multiplying the value of each outcome by its probability of occurring and then adding up all of the products.  For example, imagine you have a coin that comes up heads of the time and tails of the time. If you gain dollars for every heads and lose dollars for every tails, the expected value of the game is   If we roll a fair sided die and win dollars equal to the number rolled, what is the expected value of the game?  If we roll two fair sided dice and win dollars equal to the sum of the rolled numbers, what is the expected value of the game?   We now turn our attention to mixed strategies, but need to build tools to deal with them first. Recall that a mixed strategy can be written as follows: where is the probability that Rose selects row and is the probability that Colin selects column .   Consider the following zero sum game matrix:       X  Y    A  2  -1    B  1  2     Are there any dominated (pure) strategies?  Calculate the expected value of this game if the players have mixed strategies .  Calculated the expected value of this game if the players have mixed strategies .     One-card Stud Poker We begin with a deck of cards in which are Aces (you can use Red cards for Aces) and are Kings (you can use Black cards for Kings). There are two players and one dealer. The play begins by each player putting in the ante (1 chip). Each player is dealt one card face down. WITHOUT LOOKING AT HIS OR HER CARD, the players decide to Bet (say, 1 chip) or Fold. Players secretly show the dealer their choice. If one player bet and the other folded, then the player who bet wins. If both bet or both fold, then Ace beats King (or Red beats Black); winner takes the pot (all the chips from the ante and any bets). If there is a tie, they split the pot.    Play some games of One-card Stud's Poker (be sure to play some games as each player). Conjecture a best strategy for each player.    Determine the payoff for the following strategies: Note that some of these outcomes depend on chance... in this case, find the expected payout for each player!                  Use the answers from above to create the game matrix for One-Card Stud Poker (using expected payout values where appropriate). Use methods from class to try to determine a best strategy for One-Card Stud Poker.    We return to a game with no equilibrium.     Conjecture a (possibly mixed) for Rose strategy for this game.  Assume that you are Rose and Colin is using the strategy . Determine your expected payout if you have strategies i) , iv) , iii) , ii) , v) .  Plot the results of the previous part on the plane where is the probability that Rose selects the first row, and is the payout to Rose.  Repeat the previous two steps assuming that Colin is using the strategy . (Put your plot on the same graph). Do the lines intersect? Where is the intersection?   We want to expand on the meaning of graphical representations of strategy developed last class. After determining Rose's potential strategies for the game matrix   we arrived at the following plot for Rose:   We will now explore the relationship between payout plots (like this one), payout expectations, and optimal strategies.    Find the intersection of the two lines in Rose's payout plot above.  Imagine Colin plays an unknown mixed strategy. What is the maximum expected payout that Rose could hope for if she plays the strategy ? What is minimum possible expected payout if she plays ? What are the maximum and minimum possible payouts if she plays ?  If Colin plays strategy and Rose plays strategy , what is Rose's expected payout? If Colin plays and Rose plays what is Rose's expected payout?  How do the last two questions relate to the graph above?  Calculate the expected value of the game for Rose if she uses the intersection point's strategy when Colin plays strategy where .     Build Colin's plot (like Rose's above) for the zero sum game:    Then find the intersection point of the lines you drew and calculate the expected value of the game for Colin if he plays his intersection point strategy. (Hint: Remember that these payouts are the NEGATIVE of what Colin gets!)   Consider the following zero sum game matrix:    Make the payout plot (the plots we have been making in the past few problems) for Rose in this game. Note there should be lines on your plot. (Why?) Conjecture an optimal strategy for Rose based on your plot.  In class, we considered the lines drawn in a payoff plot as upper and lower bounds for payouts. They are a sort of worst or best case scenario for each player given a particular strategy. We formalize this notion with the following definition:  Let be a strategy for Rose. The guarantee of in a game is the \\textit{minimum} entry of the vector (since Colin will choose the lowest value of these options). Conversely, the guarantee of a strategy for Colin is the \\textit{maximum} entry of the vector (since Rose will choose the largest value of these options).  For simplicity's sake, we will stop fighting with Colin's payout vs Rose's payout (though we will keep it in mind for who is winning) and instead calculate only using Rose's payoffs.  [Von Neumann's Minimax Theorem] Every zero sum matrix game has a unique number , called the value of which is the maximum guarantee of a mixed strategy for Rose and the minimum guarantee of a mixed strategy for Colin.   Consider the following zero sum game matrix:     What is the guarantee of the strategy for Rose?  What is the guarantee of the strategy for Rose?  What is the guarantee of the strategy for Colin?   Recall that the expected value of a game with strategies and for Rose and Colin respectively can be calculated as .  Let and be strategies for Rose and Colin in the zero sum matrix game . Then  If has a guarantee of , then .  If has a guarantee of , then .  If and have guarantees of and , then .      Consider the above theorem. What does it mean? (Why is the name guarantee accurate?)  Prove part of the theorem. You may assume that parts and are true.    [Equated Results] Let be a zero sum matrix game. A strategy for Rose equates Colin's Results if all entries of are equal. Likewise, a strategy for Colin \\textbf{equates Rose's Results} if all entries of are equal.  Consider the following game matrix:     Show that the strategy for Rose equates Colin's results.  Show that the strategy for Colin does NOT equate Rose's results.    We would now like to build a strategy to find when results are equated for each player. Solving systems of equations will be the key to victory!  We want to find a strategy for Colin that equates Rose's results in the matrix .  We want to find so that all of Rose's strategies give the same result. In particular, we want such that    Find the strategy for Colin that equates Rose's results. What is the expected value of the strategy? How does it compare to Rose's expected value?   [Von Neumann Solution] Let be a zero sum game with mixed strategies for Rose and Colin and respectively which both have a guarantee of . The triple, and are called a \\textit{von Neumann Solution}.  We argued in class that if one can find a von Neumann solution, then is the expected value of the game under rational play. The following result provides a satisfying conclusion:  [Von Neumann's Minimax Theorem] Every zero sum matrix game has a unique number , called the value of which is the maximum guarantee of a mixed strategy for Rose and the minimum guarantee of a mixed strategy for Colin.   Interpret von Neumann's Minimax Theorem. What does it mean for classical games? Why would it be called the Minimax Theorem?    Imagine that Rose and Colin are playing tennis at a high level. Analytics have been done to determine the odds of Rose winning a given point based on the following scenarios. Rose can either hit to Colin's forehand (F) or backhand side (B), and since the ball is moving so quickly, Colin must guess which side, forehand (F) or backhand (B) that Rose will hit to. If Colin guesses wrong, he will not get his racket as solidly on the ball. The data analysts have determined that if both play F, Rose has an chance of winning the point, if the both play B Rose has a chance of winning the point. If Rose plays F and Colin guesses B, she has a chance of winning, and if Rose plays B and Colin guesses F she has a chance of winning.    Convert this information into a game matrix.  Find a strategy for Rose that equates Colin's Results.  Find a strategy for Colin that equates Rose's Results.  From this information alone, have you found a von Neumann solution? Why or why not?    We now revisit a matrix that we drew a payoff plot for. The payoff plot showed visually where an optimal strategy might lie, but now we have to tools to algebraically nail down optimal strategies for both players. We determined that the best guarantee for Rose was with strategy .     Determine Rose's guarantee with the strategy .  What does the payoff vector tell you about which columns Colin should (or shouldn't) play?  Determine a strategy for Colin that equates Rose's results. (Hint: There should be a column you never choose from part b.)  Give a von Neumann solution for this game matrix.    Generalize the procedure of the previous problem. Give instructions on how to find a von Neumann solution in any zero sum matrix game.     Undercut is a two player game between Rose and Colin. Each round, both players choose a number between and and simultaneously reveal their decisions. Let their decisions be and with .    If , then the person who played adds to their score and the opponent gets nothing.  Otherwise, each player adds their own number to their score.   For example, if Rose plays and Colin plays , Rose gains points and Colin gains for a net difference of for Rose. But if Rose plays and Colin plays , Rose gets points and Colin gets for a net change of for Rose!   Find a von Neumann solution for Undercut. (Hint: You will be solving a system of linear equations... those of you who have taken linear algebra may have nice techniques for this!)   "
},
{
  "id": "ZeroSumGames-3",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-3",
  "type": "Definition",
  "number": "6.1",
  "title": "",
  "body": "[Zero Sum Game Matrix] A game matrix for a game with two players, Rose and Colin, is a matrix with each row representing a choice that Rose can make and each column representing a choice that Colin can make. The entry of the matrix is the payout for Rose. (Note then that the payout for Colin is .) "
},
{
  "id": "ZeroSumGames-4",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-4",
  "type": "Question",
  "number": "6.2",
  "title": "",
  "body": " For each of the following zero-sum games, find all equilibrium pairs. If you are unable to find equilibrium pairs, explain the issue you ran into. Justify your answers.  "
},
{
  "id": "ZeroSumGames-5",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-5",
  "type": "Question",
  "number": "6.3",
  "title": "",
  "body": "     W  X  Y  Z    A  1  2  3  4    B  0  -1  0  5    C  -1  3  2  4    D  0  1  -1  1    "
},
{
  "id": "ZeroSumGames-6",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-6",
  "type": "Question",
  "number": "6.4",
  "title": "",
  "body": " {c|cccc}    W  X  Y  Z    A  -2  0  3  20    B  1  -2  -5  -3    C  10  -10  -1  1    D  0  0  10  8    "
},
{
  "id": "ZeroSumGames-8",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-8",
  "type": "Question",
  "number": "6.5",
  "title": "",
  "body": " Imagine you are playing the following game. You know that your opponent CAN read your mind, but you can't read theirs. What should you do if you are Rose? What should you do if you are Colin? Why?  "
},
{
  "id": "ZeroSumGames-10",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-10",
  "type": "Question",
  "number": "6.6",
  "title": "",
  "body": " Try the method built in the previous problem on the other games on this pre-class. What do you notice about the strategies each player ends up choosing?  "
},
{
  "id": "ZeroSumGames-11",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-11",
  "type": "Question",
  "number": "6.7",
  "title": "",
  "body": " How does the strategy developed above work in the following game? If both players start the game using this strategy, would either player be better served to change strategy? If Colin guesses that Rose might change, would Colin be at an advantage to switch?  "
},
{
  "id": "ZeroSumGames-13",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-13",
  "type": "Question",
  "number": "6.8",
  "title": "",
  "body": " Prove the following:  Let be a zero-sum game matrix. If iterated deletion of dominated strategies reduces to a matrix consisting of the entry in position of the original matrix, then the entry of is an equilibrium point.  (Hint: Show that a removed row can't have been a better option for Rose and a removed Column can't have been a better option for Colin.)  "
},
{
  "id": "ZeroSumGames-14",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-14",
  "type": "Definition",
  "number": "6.10",
  "title": "",
  "body": "The expected value of a game of chance is the average net gain or loss that we would expect per game if we played the game many times. We compute the expected value by multiplying the value of each outcome by its probability of occurring and then adding up all of the products. "
},
{
  "id": "ZeroSumGames-18",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-18",
  "type": "Question",
  "number": "6.11",
  "title": "",
  "body": " Consider the following zero sum game matrix:  "
},
{
  "id": "ZeroSumGames-21",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-21",
  "type": "Definition",
  "number": "6.12",
  "title": "",
  "body": "  One-card Stud Poker We begin with a deck of cards in which are Aces (you can use Red cards for Aces) and are Kings (you can use Black cards for Kings). There are two players and one dealer. The play begins by each player putting in the ante (1 chip). Each player is dealt one card face down. WITHOUT LOOKING AT HIS OR HER CARD, the players decide to Bet (say, 1 chip) or Fold. Players secretly show the dealer their choice. If one player bet and the other folded, then the player who bet wins. If both bet or both fold, then Ace beats King (or Red beats Black); winner takes the pot (all the chips from the ante and any bets). If there is a tie, they split the pot.  "
},
{
  "id": "ZeroSumGames-22",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-22",
  "type": "Question",
  "number": "6.13",
  "title": "",
  "body": " Play some games of One-card Stud's Poker (be sure to play some games as each player). Conjecture a best strategy for each player.  "
},
{
  "id": "ZeroSumGames-23",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-23",
  "type": "Question",
  "number": "6.14",
  "title": "",
  "body": " Determine the payoff for the following strategies: Note that some of these outcomes depend on chance... in this case, find the expected payout for each player!                "
},
{
  "id": "ZeroSumGames-24",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-24",
  "type": "Question",
  "number": "6.15",
  "title": "",
  "body": " Use the answers from above to create the game matrix for One-Card Stud Poker (using expected payout values where appropriate). Use methods from class to try to determine a best strategy for One-Card Stud Poker.  "
},
{
  "id": "ZeroSumGames-25",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-25",
  "type": "Question",
  "number": "6.16",
  "title": "",
  "body": " We return to a game with no equilibrium.  "
},
{
  "id": "ZeroSumGames-33",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-33",
  "type": "Question",
  "number": "6.17",
  "title": "",
  "body": "  Find the intersection of the two lines in Rose's payout plot above.  Imagine Colin plays an unknown mixed strategy. What is the maximum expected payout that Rose could hope for if she plays the strategy ? What is minimum possible expected payout if she plays ? What are the maximum and minimum possible payouts if she plays ?  If Colin plays strategy and Rose plays strategy , what is Rose's expected payout? If Colin plays and Rose plays what is Rose's expected payout?  How do the last two questions relate to the graph above?  Calculate the expected value of the game for Rose if she uses the intersection point's strategy when Colin plays strategy where .   "
},
{
  "id": "ZeroSumGames-34",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-34",
  "type": "Question",
  "number": "6.18",
  "title": "",
  "body": " Build Colin's plot (like Rose's above) for the zero sum game:  "
},
{
  "id": "ZeroSumGames-37",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-37",
  "type": "Question",
  "number": "6.19",
  "title": "",
  "body": " Consider the following zero sum game matrix:  "
},
{
  "id": "ZeroSumGames-41",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-41",
  "type": "Definition",
  "number": "6.20",
  "title": "",
  "body": "Let be a strategy for Rose. The guarantee of in a game is the \\textit{minimum} entry of the vector (since Colin will choose the lowest value of these options). Conversely, the guarantee of a strategy for Colin is the \\textit{maximum} entry of the vector (since Rose will choose the largest value of these options). "
},
{
  "id": "ZeroSumGames-43",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-43",
  "type": "Theorem",
  "number": "6.21",
  "title": "",
  "body": "[Von Neumann's Minimax Theorem] Every zero sum matrix game has a unique number , called the value of which is the maximum guarantee of a mixed strategy for Rose and the minimum guarantee of a mixed strategy for Colin. "
},
{
  "id": "ZeroSumGames-44",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-44",
  "type": "Question",
  "number": "6.22",
  "title": "",
  "body": " Consider the following zero sum game matrix:  "
},
{
  "id": "ZeroSumGames-48",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-48",
  "type": "Theorem",
  "number": "6.23",
  "title": "",
  "body": "Let and be strategies for Rose and Colin in the zero sum matrix game . Then  If has a guarantee of , then .  If has a guarantee of , then .  If and have guarantees of and , then .   "
},
{
  "id": "ZeroSumGames-49",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-49",
  "type": "Question",
  "number": "6.24",
  "title": "",
  "body": "  Consider the above theorem. What does it mean? (Why is the name guarantee accurate?)  Prove part of the theorem. You may assume that parts and are true.   "
},
{
  "id": "ZeroSumGames-50",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-50",
  "type": "Definition",
  "number": "6.25",
  "title": "",
  "body": "[Equated Results] Let be a zero sum matrix game. A strategy for Rose equates Colin's Results if all entries of are equal. Likewise, a strategy for Colin \\textbf{equates Rose's Results} if all entries of are equal. "
},
{
  "id": "ZeroSumGames-53",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-53",
  "type": "Question",
  "number": "6.26",
  "title": "",
  "body": "  Show that the strategy for Rose equates Colin's results.  Show that the strategy for Colin does NOT equate Rose's results.   "
},
{
  "id": "ZeroSumGames-58",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-58",
  "type": "Question",
  "number": "6.27",
  "title": "",
  "body": " Find the strategy for Colin that equates Rose's results. What is the expected value of the strategy? How does it compare to Rose's expected value?  "
},
{
  "id": "ZeroSumGames-59",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-59",
  "type": "Definition",
  "number": "6.28",
  "title": "",
  "body": "[Von Neumann Solution] Let be a zero sum game with mixed strategies for Rose and Colin and respectively which both have a guarantee of . The triple, and are called a \\textit{von Neumann Solution}. "
},
{
  "id": "ZeroSumGames-61",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-61",
  "type": "Theorem",
  "number": "6.29",
  "title": "",
  "body": "[Von Neumann's Minimax Theorem] Every zero sum matrix game has a unique number , called the value of which is the maximum guarantee of a mixed strategy for Rose and the minimum guarantee of a mixed strategy for Colin. "
},
{
  "id": "ZeroSumGames-62",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-62",
  "type": "Question",
  "number": "6.30",
  "title": "",
  "body": " Interpret von Neumann's Minimax Theorem. What does it mean for classical games? Why would it be called the Minimax Theorem?  "
},
{
  "id": "ZeroSumGames-63",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-63",
  "type": "Question",
  "number": "6.31",
  "title": "",
  "body": " Imagine that Rose and Colin are playing tennis at a high level. Analytics have been done to determine the odds of Rose winning a given point based on the following scenarios. Rose can either hit to Colin's forehand (F) or backhand side (B), and since the ball is moving so quickly, Colin must guess which side, forehand (F) or backhand (B) that Rose will hit to. If Colin guesses wrong, he will not get his racket as solidly on the ball. The data analysts have determined that if both play F, Rose has an chance of winning the point, if the both play B Rose has a chance of winning the point. If Rose plays F and Colin guesses B, she has a chance of winning, and if Rose plays B and Colin guesses F she has a chance of winning.  "
},
{
  "id": "ZeroSumGames-65",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-65",
  "type": "Question",
  "number": "6.32",
  "title": "",
  "body": " We now revisit a matrix that we drew a payoff plot for. The payoff plot showed visually where an optimal strategy might lie, but now we have to tools to algebraically nail down optimal strategies for both players. We determined that the best guarantee for Rose was with strategy .  "
},
{
  "id": "ZeroSumGames-68",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-68",
  "type": "Question",
  "number": "6.33",
  "title": "",
  "body": " Generalize the procedure of the previous problem. Give instructions on how to find a von Neumann solution in any zero sum matrix game.  "
},
{
  "id": "ZeroSumGames-69",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-69",
  "type": "Definition",
  "number": "6.34",
  "title": "",
  "body": "  Undercut is a two player game between Rose and Colin. Each round, both players choose a number between and and simultaneously reveal their decisions. Let their decisions be and with .  "
},
{
  "id": "ZeroSumGames-72",
  "level": "2",
  "url": "ZeroSumGames.html#ZeroSumGames-72",
  "type": "Question",
  "number": "6.35",
  "title": "",
  "body": " Find a von Neumann solution for Undercut. (Hint: You will be solving a system of linear equations... those of you who have taken linear algebra may have nice techniques for this!)  "
},
{
  "id": "NonZeroSumGames",
  "level": "1",
  "url": "NonZeroSumGames.html",
  "type": "Chapter",
  "number": "7",
  "title": "Non-Zero Sum Games",
  "body": " Non-Zero Sum Games  We now introduce a famous thought experiment to push beyond the world of Zero-Sum Games. Instead of payouts, we now consider the utility to each player. For example, if someone plays a lottery, losing it may be worth utility, and winning might be worth utility, but winning or losing the lottery does not affect the other players playing it.   von Neumann and Morgenstern's Lottery: Suppose that Rose has two possible outcomes in a lottery, with utility and with utility .    Determine the expected utility of the lottery for Rose if the probability of is and the probability of is .  Determine the expected utility of the lottery for Rose if the probability of is and the probability of is .  Now suppose a third option exists, such that Rose's preferences are (that is, it has some value between and ). Morgenstern and von Neumann propose that there is some so that if happens with probability and happens with probability so that has the same value as the lottery of and . Determine (as a function of ) the value of .      Dating Dilemma : Suppose Rose and Colin have started dating and they are texting to decide what to do this evening. Colin would like to go to the basketball game and Rose would like to watch a film . Colin is irresponsible and didn't charge his phone, so it dies before a decision is made, but they both know the two options. They both value time apart as utility, time together as utility at the event they didn't suggest, and utility for being together at the event they suggested.    Make a game matrix for the dating dilemma.  Determine what the players might do under rational play. (Assuming no further communication.)    Volunteer's Dilemma : Rose and Colin have been a mostly happy couple for some time now, but they disagree about who will do the dishes. Each has the option of either volunteering (V) to do the dishes or staying silent (S). Below is the payoff matrix (with S before V in rows and columns):   Each player's best outcome is by staying silent, but that can also lead to the worst outcome. This dynamic is common enough that the aboriginal people of Tierra del Fuego have a word for it.   Mamihlapinatapai is the situation when two people are staring at one another, each hoping the other will volunteer to do something both want done but neither wants to do.   What should the Rose and Colin do assuming rational play?   A movement diagram is a matrix with arrows to demonstrate how players are incentivized to move in given situations. For example the prisoner's dilemma's payoff matrix is:   The movement diagram should encapsulate that if a player does not rat on player , then is incentivized to rat on , and if player suspects that player will rat, they are incentivized to rat, demonstrated as below:    Make the movement diagrams for the games proposed in the previous two questions. What do they tell us about ``stable'' or equilibrium solutions?   NASH'S THEOREM  Now that we have seen that all classical games have a Nash Equilibrium (that is, a steady state) we want to analyze how to find them. We can do this, at least in small cases by recognizing what the Nash Equilibrium says!  A Nash Equilibrium guarantees that there is a pair of strategies so that neither players has an incentive to change strategy.  We will call a strategy for Colin a best response to a strategy for Rose, , if Rose has no incentive to change her strategy if Colin continues to play .   Consider the following game matrix:    Determine Rose's Payoff Matrix. And Colin's Payoff matrix.  Think back to von Neumann. If we want our opponent to have no incentive to change strategy, what should be true about our opponent's expected values?  Find a strategy for Rose that equates Colin's results. (Be careful which payout matrix you use.)  Find a strategy for Colin that equates Rose's results.  If both players take the strategies you've determined, does either player have incentive to change their strategy?   %%%NOTE TO FUTURE ME, WE ARE ABOUT TO DO THIS TWICE BECAUSE STUDENTS STRUGGLED SO HEAVILY WITH VIEWING IT FROM THIS WAY FIRST... TRY REORDERING THESE We now consider a famous game, Hawk vs. Dove. In a paper by John Maynard Smith and George Price, this problem was analyzed and introduced Game Theory into the field of evolutionary biology.  [Hawk vs. Dove] Imagine that members of a certain species engage in pairwise competitions for a scarce resource. Suppose for simplicity that the species has two genetic variants, call them hawk and dove. The hawks of the species are very aggressive and will always fight for the resource. In contrast, the doves are passive and will wait around to see if the opponent gives up and goes away. If two hawks meet, they will fight, injuring one another making the meal not worth collecting. When a hawk and dove compete, the hawk takes all of the meal, leaving the dove with nothing. When two doves compete, they waste time, causing some of the meal to escape, and then share what remains.   Consider the following payouts for a meal worth about utility. With Hawks appearing first in the columns and rows.    If the probability of a member of the species being a hawk is and the probability of being a dove is . Calculate the expected value of a hawk encountering another bird at meal time. Calculate the expected value of a dove encountering another bird at meal time.  Find the probability of being a hawk so that the expected payoffs are equated.  What does it mean if the probability of being a hawk is less than your computations show for the last part? What does it mean if the probability of being a hawk is higher?  Given many generations, what will the proportion of hawks be?     Consider the following game matrix:     We can think of this matrix as two subspecies which succeed when working together, but fail when they are mismatched.    Find two pure strategy Nash Equilibria using movement diagrams. What do these equilibria mean happen to the subspecies in the long run?  Show that both parties having ``strategies'' of being either species of the time is also a Nash Equilibrium. In the long run, what would this equilibrium mean?  Which equilibrium is more like to occur? Why?  %%%%HERE'S THE SECOND WAY TO DO IT, WORKED BETTER, BUT PROBABLY LESS GENERAL? NEED TO REVISIT TO MAKE A CHOICE\/MORE CLEAR INSTRUCTIONS  Imagine you are a bird flying around looking for food. All birds in the area are either hawks or doves. If two hawks meet, they fight producing a utility of for one another because they both leave injured and the food likely escapes. If two doves meet, they chat about shared acquaintences and lose track of the time as some of the food escapes, and then share the remainder of the meal for a utility of for each. If a dove and a hawk meet, the dove knows the hawk will fight and is not trying to catch those hands (or wings\/talons\/beaks) and leaves the entire meal for the hawk. The hawk gets utility and the dove gets .   Imagine you are a hawk. You see a food in the distance and head towards it. As you approach, you see another bird is also approaching. Determine the expected utility of this interaction for you (a hawk) if the probability of the other bird being a hawk is and the probability of the other bird being a dove is .  Find the expected utility in the previous scenario for when the probability of the other bird being a hawk is and probability of being a dove is .  Imagine you are a dove. You see a food in the distance and head towards it. As you approach, you see another bird is also approaching.  Determine the expected utility of this interaction for you (a dove) if the probability of the other bird being a hawk is and the probability of the other bird being a dove is .  Find the expected utility of the previous scenario for when the probability of the other bird being a hawk is and probability of being a dove is .      Find when the expected utility for the dove and the hawk are the same from the previous problem.  Determine who (hawk or dove) has a higher utility is . Which species has the advantage in amount of expected food, and what does that mean for the populations of the next generation?  Determine who (hawk or dove) has a higher utility when . Which species has the advantage in amount of expected food, and what does that mean for the populations of the next generation?  If is less than the number that equates utility, what do you expect to happen to over time? If is greater than the number that equates utility what do you expect will happen to over time?    Consider the following game matrix with two possible actions ( and ) for each player:   We can think of this matrix as two subspecies, and which succeed when working together, but fail when they are mismatched.    Find two pure strategy Nash Equilibria using movement diagrams. What do these equilibria mean happen to the subspecies in the long run?  As in the above scenario, imagine that you are an individual that comes across another individual of the species. Determine the expected value of a species running into another individual which has probability of being and of being .  Determine the expected value of a species running into another individual which has probability of being and of being .  Find when these expected values are equal.  Which species has the advantage (higher expected value) if probability of is ? Which species has the advantage (higher expected value) if the probability of is ?  If the present population has the probability of is , what will happen to subspecies in the long run? What about subspecies in the long run?    We will now formalize slightly more the difference between the types of stability in equilibria that we saw with Hawks vs Doves, and X vs Y.  [Symmetric Game] A game matrix is said to be symmetric if satisfies that Rose's entry in position is always the same as Colin's entry in position . (For those who have seen linear algebra, this means that if and are Rose and Colin's payout matrices, we have that .)    Verify that the Hawk v Dove and X v Y payoff matrices from last class are indeed symmetric.  Consider the (mixed) equilibrium strategies for each player in each game. How are the strategies for Rose and Colin related?     Let represent the mixed equilibrium strategy for Rose. Let be the row version of Colin's strategy (saying that Rose takes the same strategy as Colin).   For each pure strategy for Colin in Hawks v Doves calculate . (Here . What do these values mean in terms of expected value?  For each pure strategy for Colin, calculate for the Hawks v Doves game. What does this tell you compared to the previous part? Which strategies are best for Rose?  For each pure strategy for Colin in X versus Y calculate . What do these values mean in terms of expected value?  For each pure strategy for Colin and each pure strategy for rose, calculate for the X v Y game. What does this tell you compared to the previous part? Which strategies are best for Rose?    "
},
{
  "id": "NonZeroSumGames-3",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "von Neumann and Morgenstern's Lottery: "
},
{
  "id": "NonZeroSumGames-4",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-4",
  "type": "Question",
  "number": "7.1",
  "title": "",
  "body": "  Determine the expected utility of the lottery for Rose if the probability of is and the probability of is .  Determine the expected utility of the lottery for Rose if the probability of is and the probability of is .  Now suppose a third option exists, such that Rose's preferences are (that is, it has some value between and ). Morgenstern and von Neumann propose that there is some so that if happens with probability and happens with probability so that has the same value as the lottery of and . Determine (as a function of ) the value of .   "
},
{
  "id": "NonZeroSumGames-5",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-5",
  "type": "Question",
  "number": "7.2",
  "title": "",
  "body": "  Dating Dilemma : Suppose Rose and Colin have started dating and they are texting to decide what to do this evening. Colin would like to go to the basketball game and Rose would like to watch a film . Colin is irresponsible and didn't charge his phone, so it dies before a decision is made, but they both know the two options. They both value time apart as utility, time together as utility at the event they didn't suggest, and utility for being together at the event they suggested.  "
},
{
  "id": "NonZeroSumGames-7",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-7",
  "type": "Definition",
  "number": "7.3",
  "title": "",
  "body": " Volunteer's Dilemma : Rose and Colin have been a mostly happy couple for some time now, but they disagree about who will do the dishes. Each has the option of either volunteering (V) to do the dishes or staying silent (S). Below is the payoff matrix (with S before V in rows and columns):  "
},
{
  "id": "NonZeroSumGames-9",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-9",
  "type": "Definition",
  "number": "7.4",
  "title": "",
  "body": " Mamihlapinatapai is the situation when two people are staring at one another, each hoping the other will volunteer to do something both want done but neither wants to do. "
},
{
  "id": "NonZeroSumGames-10",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-10",
  "type": "Question",
  "number": "7.5",
  "title": "",
  "body": " What should the Rose and Colin do assuming rational play?  "
},
{
  "id": "NonZeroSumGames-11",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "movement diagram "
},
{
  "id": "NonZeroSumGames-14",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-14",
  "type": "Question",
  "number": "7.6",
  "title": "",
  "body": " Make the movement diagrams for the games proposed in the previous two questions. What do they tell us about ``stable'' or equilibrium solutions?  "
},
{
  "id": "NonZeroSumGames-18",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "best response "
},
{
  "id": "NonZeroSumGames-19",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-19",
  "type": "Question",
  "number": "7.7",
  "title": "",
  "body": " Consider the following game matrix:    Determine Rose's Payoff Matrix. And Colin's Payoff matrix.  Think back to von Neumann. If we want our opponent to have no incentive to change strategy, what should be true about our opponent's expected values?  Find a strategy for Rose that equates Colin's results. (Be careful which payout matrix you use.)  Find a strategy for Colin that equates Rose's results.  If both players take the strategies you've determined, does either player have incentive to change their strategy?   "
},
{
  "id": "NonZeroSumGames-22",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-22",
  "type": "Question",
  "number": "7.8",
  "title": "",
  "body": " Consider the following payouts for a meal worth about utility. With Hawks appearing first in the columns and rows.    If the probability of a member of the species being a hawk is and the probability of being a dove is . Calculate the expected value of a hawk encountering another bird at meal time. Calculate the expected value of a dove encountering another bird at meal time.  Find the probability of being a hawk so that the expected payoffs are equated.  What does it mean if the probability of being a hawk is less than your computations show for the last part? What does it mean if the probability of being a hawk is higher?  Given many generations, what will the proportion of hawks be?   "
},
{
  "id": "NonZeroSumGames-23",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-23",
  "type": "Question",
  "number": "7.9",
  "title": "",
  "body": " Consider the following game matrix:   "
},
{
  "id": "NonZeroSumGames-24",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-24",
  "type": "Question",
  "number": "7.10",
  "title": "",
  "body": " We can think of this matrix as two subspecies which succeed when working together, but fail when they are mismatched.  "
},
{
  "id": "NonZeroSumGames-26",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-26",
  "type": "Question",
  "number": "7.11",
  "title": "",
  "body": " Imagine you are a bird flying around looking for food. All birds in the area are either hawks or doves. If two hawks meet, they fight producing a utility of for one another because they both leave injured and the food likely escapes. If two doves meet, they chat about shared acquaintences and lose track of the time as some of the food escapes, and then share the remainder of the meal for a utility of for each. If a dove and a hawk meet, the dove knows the hawk will fight and is not trying to catch those hands (or wings\/talons\/beaks) and leaves the entire meal for the hawk. The hawk gets utility and the dove gets .   Imagine you are a hawk. You see a food in the distance and head towards it. As you approach, you see another bird is also approaching. Determine the expected utility of this interaction for you (a hawk) if the probability of the other bird being a hawk is and the probability of the other bird being a dove is .  Find the expected utility in the previous scenario for when the probability of the other bird being a hawk is and probability of being a dove is .  Imagine you are a dove. You see a food in the distance and head towards it. As you approach, you see another bird is also approaching.  Determine the expected utility of this interaction for you (a dove) if the probability of the other bird being a hawk is and the probability of the other bird being a dove is .  Find the expected utility of the previous scenario for when the probability of the other bird being a hawk is and probability of being a dove is .   "
},
{
  "id": "NonZeroSumGames-27",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-27",
  "type": "Question",
  "number": "7.12",
  "title": "",
  "body": "  Find when the expected utility for the dove and the hawk are the same from the previous problem.  Determine who (hawk or dove) has a higher utility is . Which species has the advantage in amount of expected food, and what does that mean for the populations of the next generation?  Determine who (hawk or dove) has a higher utility when . Which species has the advantage in amount of expected food, and what does that mean for the populations of the next generation?  If is less than the number that equates utility, what do you expect to happen to over time? If is greater than the number that equates utility what do you expect will happen to over time?   "
},
{
  "id": "NonZeroSumGames-31",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-31",
  "type": "Question",
  "number": "7.13",
  "title": "",
  "body": "  Find two pure strategy Nash Equilibria using movement diagrams. What do these equilibria mean happen to the subspecies in the long run?  As in the above scenario, imagine that you are an individual that comes across another individual of the species. Determine the expected value of a species running into another individual which has probability of being and of being .  Determine the expected value of a species running into another individual which has probability of being and of being .  Find when these expected values are equal.  Which species has the advantage (higher expected value) if probability of is ? Which species has the advantage (higher expected value) if the probability of is ?  If the present population has the probability of is , what will happen to subspecies in the long run? What about subspecies in the long run?   "
},
{
  "id": "NonZeroSumGames-33",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-33",
  "type": "Definition",
  "number": "7.14",
  "title": "",
  "body": "[Symmetric Game] A game matrix is said to be symmetric if satisfies that Rose's entry in position is always the same as Colin's entry in position . (For those who have seen linear algebra, this means that if and are Rose and Colin's payout matrices, we have that .) "
},
{
  "id": "NonZeroSumGames-34",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-34",
  "type": "Question",
  "number": "7.15",
  "title": "",
  "body": "  Verify that the Hawk v Dove and X v Y payoff matrices from last class are indeed symmetric.  Consider the (mixed) equilibrium strategies for each player in each game. How are the strategies for Rose and Colin related?   "
},
{
  "id": "NonZeroSumGames-35",
  "level": "2",
  "url": "NonZeroSumGames.html#NonZeroSumGames-35",
  "type": "Question",
  "number": "7.16",
  "title": "",
  "body": " Let represent the mixed equilibrium strategy for Rose. Let be the row version of Colin's strategy (saying that Rose takes the same strategy as Colin).   For each pure strategy for Colin in Hawks v Doves calculate . (Here . What do these values mean in terms of expected value?  For each pure strategy for Colin, calculate for the Hawks v Doves game. What does this tell you compared to the previous part? Which strategies are best for Rose?  For each pure strategy for Colin in X versus Y calculate . What do these values mean in terms of expected value?  For each pure strategy for Colin and each pure strategy for rose, calculate for the X v Y game. What does this tell you compared to the previous part? Which strategies are best for Rose?   "
},
{
  "id": "GeneralClassicalGames",
  "level": "1",
  "url": "GeneralClassicalGames.html",
  "type": "Chapter",
  "number": "8",
  "title": "General Classical Games",
  "body": " General Classical Games  We now turn our attention briefly to games with hidden information to apply our knowledge of expected values. %%%This is horribly out of place to accommodate a visitor to the class and give them something to play Easy Black Jack  We consider a modified version of black jack. To enter the game, both Rose and Colin pay in one chip. Rose and Colin are both dealt two cards, but one of the two is face up for both players to see. Rose may look at her face down card and Colin may look at his, but they cannot look at each other's. After looking, they must both decide simultaneously if they bet or fold. Betting players add one more chip to the pot. If one player bets, they get the entire pot. If both players fold, they split the pot. If they both bet, they reveal their unrevealed cards, and the player with the higher sum of points wins where Ace, King, Queen, and Jack each count as points and all numbered cards are worth their number's points (for example the of spades is worth points).   Try to represent this as a game matrix. What difficulties do you run into?  If Rose sees her board is an and a , and she sees that Colin has a and an unknown card, should she bet or fold? Justify you answer using expected values.    Consider the following game matrix, a variation on the Prisoner's Dilemma:     Under rational play, if the players are not allowed to communicate, what should each player do?  Now imagine that you are not playing this game just once. Instead you will play the game against an opponent, and then each player will flip a fair coin. If both flips come up tails, the game ends. Otherwise, you play another round. Play this game with a partner a few times.  Does analysis of the repeated game differ from a single instance? How can strategies differ? Are you ever incentivized to do something OTHER than what the game matrix played once wants you to do?   We can now see that playing a game repeatedly requires some additional analytic tools. Intuitively in class, we saw that if you play the game below repeatedly with another player who is willing to cooperate, you can gain utility every turn instead of just . This would be a better outcome, even though you would be choosing a dominated strategy!  We will now build some of the tools necessary to play repeated games   Consider the following game matrix, a variation on the Prisoner's Dilemma: (Note: we will call strategy cooperate, and strategy defect for each player)    Let be a matrix game and . The game is defined as follows: On each round, Rose and Colin play the matrix game , then flip a coin with probability of being heads. On a heads the game continues to a next round, otherwise the game ends. The payoff for each player is the sum of the players payoffs over all of the rounds.   Play against an opponent, and then each player will flip a fair coin. If both flips come up tails, the game ends. Otherwise, you play another round. Write this game using the notation.  If both players choose to cooperate every round and the game lasts rounds, what is the expected value of a game for each player? What if the game lasted rounds? rounds?  If both players choose to defect every round and the game lasts rounds, what is the expected value of the game for each player? What if the game lasted rounds? rounds?  Which strategy is better to play in the repeated game? Why?   We now expand our concept of a pure strategy. We don't need to ALWAYS defect or ALWAYS cooperate.  A \\textit{pure strategy} in the game is a rule that indicates what choice to make on the round depending only on what the players chose in rounds .   Give some examples of pure strategies that are not ``always cooperate'' or ``always defect.''    The strategy grim trigger strategy cooperates until the opponent defects in the game , then you defect forever. Calculate the expected value of a the grim trigger strategy in which the opponent cooperates for the first rounds for .   We now seek to find a Nash Equilibrium in a repeated game. We saw last class that geometric series will play an important role in our analysis. I will prove a claim that we used before without proof:  Let . Then,     Consider the following game matrix, a variation on the Prisoner's Dilemma: (Note: we will call strategy cooperate, and strategy defect for each player)     The strategy grim trigger strategy cooperates until the opponent defects in the game , then you defect forever. We want to determine a best response to the grim trigger strategy. Imagine you are playing against grim trigger.   Once you defect once, should you ever choose to cooperate again? Justify your answer.  What does the previous question tell us about what an optimal strategy against grim trigger looks like?     We now consider the game for any . Calculate the expected value of the following strategy played against grim trigger: cooperate until round , then defect forever. Note that this is an upper bound on expected value for any strategy that defects for the first time on round . (Try to simplify the expected value to something that could easily be calculated as a function of and using the theorem about geometric series above.)    Now that we have an upper bound on the expected value of a strategy against the grim trigger. We want to maximize that expected value, but it depends on and . Let us find the break points for that cause us to choose to defect at different times.   Calculate when .  If is less than the value calculated above, what round should we defect to maximum payout in against grim trigger? (That is, by fixing , what value gives maximum expected value.) Why?  When should we defect against grim trigger if is greater than the value calculated in part ?  What strategies have we talked about that are best responses to grim trigger in for each case? Have we found any Nash Equilibria? How can you tell?    "
},
{
  "id": "GeneralClassicalGames-6",
  "level": "2",
  "url": "GeneralClassicalGames.html#GeneralClassicalGames-6",
  "type": "Question",
  "number": "8.1",
  "title": "",
  "body": " Consider the following game matrix, a variation on the Prisoner's Dilemma:  "
},
{
  "id": "GeneralClassicalGames-11",
  "level": "2",
  "url": "GeneralClassicalGames.html#GeneralClassicalGames-11",
  "type": "Question",
  "number": "8.2",
  "title": "",
  "body": " Consider the following game matrix, a variation on the Prisoner's Dilemma: (Note: we will call strategy cooperate, and strategy defect for each player)  "
},
{
  "id": "GeneralClassicalGames-13",
  "level": "2",
  "url": "GeneralClassicalGames.html#GeneralClassicalGames-13",
  "type": "Definition",
  "number": "8.3",
  "title": "",
  "body": "Let be a matrix game and . The game is defined as follows: On each round, Rose and Colin play the matrix game , then flip a coin with probability of being heads. On a heads the game continues to a next round, otherwise the game ends. The payoff for each player is the sum of the players payoffs over all of the rounds. "
},
{
  "id": "GeneralClassicalGames-16",
  "level": "2",
  "url": "GeneralClassicalGames.html#GeneralClassicalGames-16",
  "type": "Definition",
  "number": "8.4",
  "title": "",
  "body": "A \\textit{pure strategy} in the game is a rule that indicates what choice to make on the round depending only on what the players chose in rounds . "
},
{
  "id": "GeneralClassicalGames-17",
  "level": "2",
  "url": "GeneralClassicalGames.html#GeneralClassicalGames-17",
  "type": "Question",
  "number": "8.5",
  "title": "",
  "body": " Give some examples of pure strategies that are not ``always cooperate'' or ``always defect.''  "
},
{
  "id": "GeneralClassicalGames-18",
  "level": "2",
  "url": "GeneralClassicalGames.html#GeneralClassicalGames-18",
  "type": "Question",
  "number": "8.6",
  "title": "",
  "body": " The strategy grim trigger strategy cooperates until the opponent defects in the game , then you defect forever. Calculate the expected value of a the grim trigger strategy in which the opponent cooperates for the first rounds for .  "
},
{
  "id": "GeneralClassicalGames-20",
  "level": "2",
  "url": "GeneralClassicalGames.html#GeneralClassicalGames-20",
  "type": "Theorem",
  "number": "8.7",
  "title": "",
  "body": "Let . Then,  "
},
{
  "id": "GeneralClassicalGames-22",
  "level": "2",
  "url": "GeneralClassicalGames.html#GeneralClassicalGames-22",
  "type": "Question",
  "number": "8.8",
  "title": "",
  "body": " Consider the following game matrix, a variation on the Prisoner's Dilemma: (Note: we will call strategy cooperate, and strategy defect for each player)   "
},
{
  "id": "GeneralClassicalGames-23",
  "level": "2",
  "url": "GeneralClassicalGames.html#GeneralClassicalGames-23",
  "type": "Question",
  "number": "8.9",
  "title": "",
  "body": " The strategy grim trigger strategy cooperates until the opponent defects in the game , then you defect forever. We want to determine a best response to the grim trigger strategy. Imagine you are playing against grim trigger.   Once you defect once, should you ever choose to cooperate again? Justify your answer.  What does the previous question tell us about what an optimal strategy against grim trigger looks like?   "
},
{
  "id": "GeneralClassicalGames-24",
  "level": "2",
  "url": "GeneralClassicalGames.html#GeneralClassicalGames-24",
  "type": "Question",
  "number": "8.10",
  "title": "",
  "body": " We now consider the game for any . Calculate the expected value of the following strategy played against grim trigger: cooperate until round , then defect forever. Note that this is an upper bound on expected value for any strategy that defects for the first time on round . (Try to simplify the expected value to something that could easily be calculated as a function of and using the theorem about geometric series above.)  "
},
{
  "id": "GeneralClassicalGames-25",
  "level": "2",
  "url": "GeneralClassicalGames.html#GeneralClassicalGames-25",
  "type": "Question",
  "number": "8.11",
  "title": "",
  "body": " Now that we have an upper bound on the expected value of a strategy against the grim trigger. We want to maximize that expected value, but it depends on and . Let us find the break points for that cause us to choose to defect at different times.   Calculate when .  If is less than the value calculated above, what round should we defect to maximum payout in against grim trigger? (That is, by fixing , what value gives maximum expected value.) Why?  When should we defect against grim trigger if is greater than the value calculated in part ?  What strategies have we talked about that are best responses to grim trigger in for each case? Have we found any Nash Equilibria? How can you tell?   "
},
{
  "id": "VotingTheory",
  "level": "1",
  "url": "VotingTheory.html",
  "type": "Chapter",
  "number": "9",
  "title": "Voting Theory",
  "body": " Voting Theory   Imagine that you are conducting an election among three (or more) possibilities. Once you collect the ballots, how can you determine the winner? Try to come up with at least ways to determine a winner. (Note, they do not all have to be ways that you would be happy with.)    Now that we see there are multiple ways to determine a winner, come up with some criteria that you think are ``fair'' for an election. For example, a common one is the following: ``If a candidate is in first place in all ballots, they are in first place in the final results.'' (Note: It can be helpful instead to think about what you might consider unfair, or object to, in a method for determining the winner or ordering.)   In class, we established a few guidelines for ``fairness'' in an election and developed a few election methods. As a reminder, here are the fairness criteria that Arrow's Theorem entail:    Unanimity. If every individual prefers to , the output ranking prefers to .   Independence of Irrelevant Alternatives. The society's preference on and should depend only on how each voter compares and .   Non-dictatorship. The output ranking is not determined by just a single voter.   Formally, a voting system is a function that sends a collection of preferences (or ballots) to a final ranking. Often the top of the output ranking is considered the winner (and the rest are ignored). Here are some of the voting systems that were suggested in class:    Dictatorship : After ballots are collected, pull out one ballot and that ballot determines the societal preference.     Plurality (sometimes called ``First past the post''): collects all ballots and determines the winner by whoever has the most first place votes.    In an instant run-off , the total number of first place votes are counted for each candidate. The candidate with the least number of first place votes is removed from all ballots. This process is repeated until only one candidate remains, who is declared the winner.     Condorcet : Use the ballot rankings to simulate a head-to-head runoff between each pair of candidates. If any candidate wins all head-to-head elections, they are declared the winner. Otherwise we will say there is no Condorcet winner. (And there are many modifications that have been proposed to solve this issue.)     Borda Count :Each candidate gets points for each ballot according to values assigned to each ranking. A standard system is that last place candidates in a ballot get points, second to last gets , and so on. (So top ranking candidate gets points from that ballot). The candidate with the highest sum of points is the winner.   Example of Borda Count: Suppose there are three candidates, , and , and the ballots come back as copies of and copies of and copies of . Then,   which means that is the Borda Count winner.   Let there be candidates, and . If the ballots come back as     Determine the winner, if one exists for each voting system defined above.   We now formalize slightly the fairness criteria above. A profile (often written or ) is the collection of all ballots. We will use to denote the output ordering of a voting system with profile (note this depends on the voting system). To see this, in the Borda Count example, the collection of votes would be , and the result is .  We say that profiles and  agree in comparing X and Y if for every voter , either prefers to in both profiles or prefers to in both profiles.  The following are called Arrow's Axioms:  Consider a voting system with at least three candidates. We desire the following ``fairness criteria'': Nondictatorship. The voting system is not a dictatorship.  Unanimity. If in profile every voter prefers to , then .  Independence. If the profiles and agree in comparing and , then the output rankings and either both rank above or both rank above .    For each voting system, try to determine which fairness criteria above they do and do not satisfy. Justify your answers. (Note: if one of them does not satisfy a criterion, you should be able to find an example which violates it in or less ballots.)   OUTLINE OF PROOF OF ARROW'S THEOREM  "
},
{
  "id": "VotingTheory-2",
  "level": "2",
  "url": "VotingTheory.html#VotingTheory-2",
  "type": "Question",
  "number": "9.1",
  "title": "",
  "body": " Imagine that you are conducting an election among three (or more) possibilities. Once you collect the ballots, how can you determine the winner? Try to come up with at least ways to determine a winner. (Note, they do not all have to be ways that you would be happy with.)  "
},
{
  "id": "VotingTheory-3",
  "level": "2",
  "url": "VotingTheory.html#VotingTheory-3",
  "type": "Question",
  "number": "9.2",
  "title": "",
  "body": " Now that we see there are multiple ways to determine a winner, come up with some criteria that you think are ``fair'' for an election. For example, a common one is the following: ``If a candidate is in first place in all ballots, they are in first place in the final results.'' (Note: It can be helpful instead to think about what you might consider unfair, or object to, in a method for determining the winner or ordering.)  "
},
{
  "id": "VotingTheory-7",
  "level": "2",
  "url": "VotingTheory.html#VotingTheory-7",
  "type": "Definition",
  "number": "9.3",
  "title": "",
  "body": "  Dictatorship : After ballots are collected, pull out one ballot and that ballot determines the societal preference.  "
},
{
  "id": "VotingTheory-8",
  "level": "2",
  "url": "VotingTheory.html#VotingTheory-8",
  "type": "Definition",
  "number": "9.4",
  "title": "",
  "body": "  Plurality (sometimes called ``First past the post''): collects all ballots and determines the winner by whoever has the most first place votes.  "
},
{
  "id": "VotingTheory-9",
  "level": "2",
  "url": "VotingTheory.html#VotingTheory-9",
  "type": "Definition",
  "number": "9.5",
  "title": "",
  "body": " In an instant run-off , the total number of first place votes are counted for each candidate. The candidate with the least number of first place votes is removed from all ballots. This process is repeated until only one candidate remains, who is declared the winner.  "
},
{
  "id": "VotingTheory-10",
  "level": "2",
  "url": "VotingTheory.html#VotingTheory-10",
  "type": "Definition",
  "number": "9.6",
  "title": "",
  "body": "  Condorcet : Use the ballot rankings to simulate a head-to-head runoff between each pair of candidates. If any candidate wins all head-to-head elections, they are declared the winner. Otherwise we will say there is no Condorcet winner. (And there are many modifications that have been proposed to solve this issue.)  "
},
{
  "id": "VotingTheory-11",
  "level": "2",
  "url": "VotingTheory.html#VotingTheory-11",
  "type": "Definition",
  "number": "9.7",
  "title": "",
  "body": "  Borda Count :Each candidate gets points for each ballot according to values assigned to each ranking. A standard system is that last place candidates in a ballot get points, second to last gets , and so on. (So top ranking candidate gets points from that ballot). The candidate with the highest sum of points is the winner.  "
},
{
  "id": "VotingTheory-15",
  "level": "2",
  "url": "VotingTheory.html#VotingTheory-15",
  "type": "Question",
  "number": "9.8",
  "title": "",
  "body": " Let there be candidates, and . If the ballots come back as  "
},
{
  "id": "VotingTheory-17",
  "level": "2",
  "url": "VotingTheory.html#VotingTheory-17",
  "type": "Question",
  "number": "9.9",
  "title": "",
  "body": " Determine the winner, if one exists for each voting system defined above.  "
},
{
  "id": "VotingTheory-18",
  "level": "2",
  "url": "VotingTheory.html#VotingTheory-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "profile "
},
{
  "id": "VotingTheory-19",
  "level": "2",
  "url": "VotingTheory.html#VotingTheory-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "agree in comparing X and Y "
},
{
  "id": "VotingTheory-22",
  "level": "2",
  "url": "VotingTheory.html#VotingTheory-22",
  "type": "Question",
  "number": "9.10",
  "title": "",
  "body": " For each voting system, try to determine which fairness criteria above they do and do not satisfy. Justify your answers. (Note: if one of them does not satisfy a criterion, you should be able to find an example which violates it in or less ballots.)  "
},
{
  "id": "GameTheory-Inquiry-7",
  "level": "1",
  "url": "GameTheory-Inquiry-7.html",
  "type": "Section",
  "number": "1",
  "title": "Topics to consider adding",
  "body": " Topics to consider adding Potential Additions and Changes  Analysis of games as graphs which are not necessarily acyclic (Kernels, independent\/dominating sets in graphs)  Hackenbush and partizan games (and dyadic numbers... into p-adic numbers???)  Fair division\/apportionment (maybe up to gerrymandering, but this can be complex to analyze with Markov stuff running around for ``typical'' analysis)  Complications of hidden information including the Lemons problem and No Trade Theorem (More economics in case students are into that?)  Surely I am missing a lot of classical game theory ideas (Looking forward to Jennifer's feedback)   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
