<!-- Add at least 3 Project features -->

In this react project, I have tried to build a course by buying a simple react project that has 9 different cards and each card has its own data with a common select button.
Here are the few features you will love to try

1.Adding Course Name/Title: As you can see there is a select button on every card. If you click the select button it will take the card course title/name you have clicked on and add them to Cart. Also, you will see a toast "You have successfully purchased this course!" You can't add the same card twice!

2.Adding Remaining and Show Total Credit: By clicking select button you can see Total Credit hours and Remaining total credit hours are updating . it basically works with cards credit everytime select button got clickd and add each course credit and make different between total credit and remaning total credit . It has limit of 20 credit so you cant add anything after adding 20 credits .it will show a toast with message of "Insufficient credit limit!” if you try to add more course that has more credit that can cross limit of 20 credits

3.Added Total Price : By clicking select button you can see total price option in cart is updating , this is where course prices are added one by one . Everytime you click in diffrent card that select button takes course price from each card and adds them with eachother and shows them at total price in cart.

<b>4.Responsive:<b> This react spa project is well responsive so you can view it on most screen sizes comfortably.


<!-- Discuss how you managed the state in your assignment project. -->

In this project, I have used 5 state

const [data, setData] = useState([]);
for store setPrice and set them at cart i have used setPrice state

const [infoCart, setName] = useState([]);
for store setPrice and set them at cart i have used setPrice state

const [credit, setCredit] = useState(0);
for store credit and set them at cart i have used setCredit state

const [remainingCredit, setRemaingcredit] = useState(20);
for store remaining credit and set them at cart i have used setRemaingcredit state

const [price, setPrice] = useState(0);
for store setPrice and set them at cart i have used setPrice state
