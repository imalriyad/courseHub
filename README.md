# Add at least 3 Project features 

In this react project, I have tried to build a course by buying a simple react project that has 9 different cards and each card has its own data with a common select button.
Here are the few features you will love to try

### Adding Course Name/Title:
 As you can see there is a select button on every card. If you click the select button it will take the card course title/name you have clicked on and add them to Cart. Also, you will see a toast "You have successfully purchased this course!" You can't add the same card twice!

### Adding Remaining and Show Total Credit: 
By clicking select button you can see Total Credit hours and Remaining total credit hours are updating . it basically works with cards credit everytime select button got clickd and add each course credit and make different between total credit and remaning total credit . It has limit of 20 credit so you cant add anything after adding 20 credits .it will show a toast with message of "Insufficient credit limit!” if you try to add more course that has more credit that can cross limit of 20 credits

### Added Total Price :
 By clicking select button you can see total price option in cart is updating , this is where course prices are added one by one . Everytime you click in diffrent card that select button takes course price from each card and adds them with eachother and shows them at total price in cart.

### Responsive:
 This react spa project is well responsive so you can view it on most screen sizes comfortably.


 # Discuss how you managed the state in your assignment project.

In this project, I have used 5 state

* const [data, setData] = useState([]);
 By fetching each courses details from datalist and storing in data and show them in a card i have used setData state.


* const [infoCart, setName] = useState([]);
For storing Course tittle in infocart and set them at cart  i have used setName state.
later i have used infoCart as props and send to child component where i needed 

* const [credit, setCredit] = useState(0);
For storing each Course credit by clicking select button in credit and set them at cart i have used setCredit state.
Later i have used 'setCredit' to dynamically manage and display the total course credits in the cart

* const [remainingCredit, setRemaingcredit] = useState(20);
for store remaining credit and set them at cart i have used setRemaingcredit state .it has innitial value 20 becasue there is limit of spending credit is 20

* const [price, setPrice] = useState(0);
For storing Course Price and set them at cart i have used setPrice state
