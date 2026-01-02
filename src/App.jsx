
import './App.css'
import Card from './components/card'
import Navbar from './components/navbar';


function App() {

const fruits = [
  {
    name: "Apple",
    speciality: "Rich in fiber",
    description: "Apples are crunchy fruits that improve digestion, support heart health, and help maintain a balanced diet.",
    price: 14.50,
    image: "https://picsum.photos/seed/apple/400/300"
  },
  {
    name: "Banana",
    speciality: "Instant energy",
    description: "Bananas are high in potassium and give quick energy while supporting digestion and muscle function.",
    price: 12.75,
    image: "https://picsum.photos/400/300?random=2"
  },
  {
    name: "Mango",
    speciality: "King of fruits",
    description: "Mangoes are sweet tropical fruits rich in vitamins A and C, known for their juicy taste and aroma.",
    price: 18.90,
    image: "https://picsum.photos/400/300?random=3"
  },
  {
    name: "Orange",
    speciality: "Vitamin C rich",
    description: "Oranges boost immunity, refresh the body, and improve skin health with natural vitamin C.",
    price: 13.60,
    image: "https://picsum.photos/400/300?random=4"
  },
  {
    name: "Grapes",
    speciality: "Antioxidant rich",
    description: "Grapes are small juicy fruits that protect the heart and help fight free radicals.",
    price: 16.40,
    image: "https://picsum.photos/400/300?random=5"
  },
  {
    name: "Pineapple",
    speciality: "Aids digestion",
    description: "Pineapples contain enzymes that help digestion and reduce inflammation naturally.",
    price: 15.25,
    image: "https://picsum.photos/400/300?random=6"
  },
  {
    name: "Strawberry",
    speciality: "Low calorie",
    description: "Strawberries are sweet berries packed with antioxidants that improve heart and skin health.",
    price: 22.80,
    image: "https://picsum.photos/400/300?random=7"
  },
  {
    name: "Papaya",
    speciality: "Digestive fruit",
    description: "Papaya improves digestion, strengthens immunity, and supports gut health effectively.",
    price: 12.40,
    image: "https://picsum.photos/400/300?random=8"
  },
  {
    name: "Watermelon",
    speciality: "Hydrating fruit",
    description: "Watermelon keeps the body hydrated, cools down summer heat, and provides natural sweetness.",
    price: 13.10,
    image: "https://picsum.photos/400/300?random=9"
  },
  {
    name: "Pomegranate",
    speciality: "Blood booster",
    description: "Pomegranates are rich in antioxidants and help improve blood circulation and heart health.",
    price: 21.90,
    image: "https://picsum.photos/400/300?random=10"
  },
  {
    name: "Kiwi",
    speciality: "Vitamin C boost",
    description: "Kiwi is a tangy fruit that strengthens immunity and improves digestion with natural enzymes.",
    price: 19.75,
    image: "https://picsum.photos/400/300?random=11"
  },
  {
    name: "Guava",
    speciality: "High vitamin C",
    description: "Guava supports immunity, improves digestion, and is beneficial for skin health.",
    price: 12.95,
    image: "https://picsum.photos/400/300?random=12"
  },
  {
    name: "Pear",
    speciality: "Gentle on stomach",
    description: "Pears are soft fruits that improve digestion and provide long lasting energy.",
    price: 17.30,
    image: "https://picsum.photos/400/300?random=13"
  },
  {
    name: "Cherry",
    speciality: "Anti inflammatory",
    description: "Cherries help reduce inflammation, improve sleep quality, and support muscle recovery.",
    price: 24.50,
    image: "https://picsum.photos/400/300?random=14"
  },
  {
    name: "Blueberry",
    speciality: "Brain booster",
    description: "Blueberries are rich in antioxidants that support memory and protect brain health.",
    price: 23.90,
    image: "https://picsum.photos/400/300?random=15"
  },
  {
    name: "Lychee",
    speciality: "Summer fruit",
    description: "Lychees are sweet and juicy fruits that refresh the body and improve blood circulation.",
    price: 18.25,
    image: "https://picsum.photos/400/300?random=16"
  },
  {
    name: "Peach",
    speciality: "Skin friendly",
    description: "Peaches are soft fruits that improve skin health and support digestion naturally.",
    price: 20.60,
    image: "https://picsum.photos/400/300?random=17"
  },
  {
    name: "Plum",
    speciality: "Fiber rich",
    description: "Plums help regulate digestion and prevent constipation with natural fiber.",
    price: 16.85,
    image: "https://picsum.photos/400/300?random=18"
  },
  {
    name: "Avocado",
    speciality: "Healthy fats",
    description: "Avocados are rich in healthy fats that support heart health and brain function.",
    price: 22.10,
    image: "https://picsum.photos/400/300?random=19"
  },
  {
    name: "Custard Apple",
    speciality: "Energy booster",
    description: "Custard apples are creamy fruits that provide instant energy and support nervous system health.",
    price: 14.95,
    image: "https://picsum.photos/400/300?random=20"
  },
  
  {
    name: "Indian Quince",
    speciality: "Gut friendly",
    description: "Quince supports gut health and provides antioxidants.",
    price: 17.90,
    image: "https://picsum.photos/seed/quince-india/400/300"
  },
  {
    name: "Dragon Fruit",
    speciality: "Exotic fruit",
    description: "Dragon fruit is a tropical fruit rich in antioxidants and fiber, helping digestion and boosting immunity.",
    price: 21.40,
    image: "https://picsum.photos/seed/dragonfruit/400/300"
  },
  {
    name: "Fig",
    speciality: "Fiber rich",
    description: "Figs support digestive health and provide natural sweetness along with essential minerals.",
    price: 19.20,
    image: "https://picsum.photos/seed/fig/400/300"
  },
  {
    name: "Jackfruit",
    speciality: "High energy",
    description: "Jackfruit is a large tropical fruit rich in carbohydrates, providing sustained energy.",
    price: 16.80,
    image: "https://picsum.photos/seed/jackfruit/400/300"
  },
  {
    name: "Blackberry",
    speciality: "Antioxidant rich",
    description: "Blackberries are dark berries packed with antioxidants that support immunity and heart health.",
    price: 23.10,
    image: "https://picsum.photos/seed/blackberry/400/300"
  },
  {
    name: "Raspberry",
    speciality: "Low sugar fruit",
    description: "Raspberries are low in sugar and high in fiber, making them ideal for healthy diets.",
    price: 22.60,
    image: "https://picsum.photos/seed/raspberry/400/300"
  },
  {
    name: "Coconut",
    speciality: "Hydrating fruit",
    description: "Coconut provides natural hydration and healthy fats that support energy and metabolism.",
    price: 15.90,
    image: "https://picsum.photos/seed/coconut/400/300"
  },

  {
    name: "Cranberry",
    speciality: "UTI support",
    description: "Cranberries help maintain urinary tract health and are rich in antioxidants.",
    price: 24.10,
    image: "https://picsum.photos/seed/cranberry/400/300"
  },
  {
    name: "Date",
    speciality: "Natural sweetener",
    description: "Dates are energy-rich fruits packed with natural sugars, fiber, and essential minerals.",
    price: 17.50,
    image: "https://picsum.photos/seed/date/400/300"
  },
  {
    name: "Passion Fruit",
    speciality: "Vitamin rich",
    description: "Passion fruit boosts immunity and digestion with its rich vitamin and fiber content.",
    price: 20.40,
    image: "https://picsum.photos/seed/passionfruit/400/300"
  },
  {
    name: "Star Fruit",
    speciality: "Low calorie",
    description: "Star fruit is a refreshing low-calorie fruit with a tangy taste and antioxidants.",
    price: 14.80,
    image: "https://picsum.photos/seed/starfruit/400/300"
  },
  {
    name: "Mulberry",
    speciality: "Blood health",
    description: "Mulberries improve blood circulation and provide iron and antioxidants.",
    price: 19.90,
    image: "https://picsum.photos/seed/mulberry/400/300"
  },
  {
    name: "Gooseberry",
    speciality: "Immunity booster",
    description: "Gooseberries are rich in vitamin C and help strengthen immunity naturally.",
    price: 13.60,
    image: "https://picsum.photos/seed/gooseberry/400/300"
  },
  {
    name: "Persimmon",
    speciality: "Heart healthy",
    description: "Persimmons support heart health and digestion with their fiber-rich content.",
    price: 18.70,
    image: "https://picsum.photos/seed/persimmon/400/300"
  },
  {
    name: "Tangerine",
    speciality: "Citrus fruit",
    description: "Tangerines are juicy citrus fruits that boost immunity and refresh the body.",
    price: 16.20,
    image: "https://picsum.photos/seed/tangerine/400/300"
  },
  {
    name: "Nectarine",
    speciality: "Skin friendly",
    description: "Nectarines help maintain healthy skin and support digestion naturally.",
    price: 19.40,
    image: "https://picsum.photos/seed/nectarine/400/300"
  },
  {
    name: "Pomelo",
    speciality: "Large citrus",
    description: "Pomelo is a large citrus fruit that supports digestion and heart health.",
    price: 21.10,
    image: "https://picsum.photos/seed/pomelo/400/300"
  },
  {
    name: "Soursop",
    speciality: "Tropical fruit",
    description: "Soursop is a tropical fruit known for its refreshing taste and nutrients.",
    price: 23.60,
    image: "https://picsum.photos/seed/soursop/400/300"
  },
  {
    name: "Longan",
    speciality: "Energy booster",
    description: "Longan is a small sweet fruit that helps reduce fatigue and boost energy.",
    price: 17.90,
    image: "https://picsum.photos/seed/longan/400/300"
  },
  {
    name: "Sapodilla",
    speciality: "Digestive aid",
    description: "Sapodilla supports digestion and provides instant energy with natural sugars.",
    price: 15.70,
    image: "https://picsum.photos/seed/sapodilla/400/300"
  },
   {
    name: "Dragon Fruit",
    speciality: "Exotic fruit",
    description: "Dragon fruit is a tropical fruit rich in antioxidants and fiber, helping digestion and boosting immunity.",
    price: 21.40,
    image: "https://picsum.photos/seed/dragonfruit/400/300"
  },
  {
    name: "Fig",
    speciality: "Fiber rich",
    description: "Figs support digestive health and provide natural sweetness along with essential minerals.",
    price: 19.20,
    image: "https://picsum.photos/seed/fig/400/300"
  },
  {
    name: "Jackfruit",
    speciality: "High energy",
    description: "Jackfruit is a large tropical fruit rich in carbohydrates, providing sustained energy.",
    price: 16.80,
    image: "https://picsum.photos/seed/jackfruit/400/300"
  },
  {
    name: "Blackberry",
    speciality: "Antioxidant rich",
    description: "Blackberries are dark berries packed with antioxidants that support immunity and heart health.",
    price: 23.10,
    image: "https://picsum.photos/seed/blackberry/400/300"
  },
  {
    name: "Raspberry",
    speciality: "Low sugar fruit",
    description: "Raspberries are low in sugar and high in fiber, making them ideal for healthy diets.",
    price: 22.60,
    image: "https://picsum.photos/seed/raspberry/400/300"
  },
  {
    name: "Coconut",
    speciality: "Hydrating fruit",
    description: "Coconut provides natural hydration and healthy fats that support energy and metabolism.",
    price: 15.90,
    image: "https://picsum.photos/seed/coconut/400/300"
  },
  {
    name: "Apricot",
    speciality: "Vitamin A rich",
    description: "Apricots support eye health and improve skin condition with natural vitamins.",
    price: 18.30,
    image: "https://picsum.photos/seed/apricot/400/300"
  },
  {
    name: "Cranberry",
    speciality: "UTI support",
    description: "Cranberries help maintain urinary tract health and are rich in antioxidants.",
    price: 24.10,
    image: "https://picsum.photos/seed/cranberry/400/300"
  },
  {
    name: "Date",
    speciality: "Natural sweetener",
    description: "Dates are energy-rich fruits packed with natural sugars, fiber, and essential minerals.",
    price: 17.50,
    image: "https://picsum.photos/seed/date/400/300"
  },
  {
    name: "Passion Fruit",
    speciality: "Vitamin rich",
    description: "Passion fruit boosts immunity and digestion with its rich vitamin and fiber content.",
    price: 20.40,
    image: "https://picsum.photos/seed/passionfruit/400/300"
  },
  {
    name: "Star Fruit",
    speciality: "Low calorie",
    description: "Star fruit is a refreshing low-calorie fruit with a tangy taste and antioxidants.",
    price: 14.80,
    image: "https://picsum.photos/seed/starfruit/400/300"
  },

  {
    name: "Persimmon",
    speciality: "Heart healthy",
    description: "Persimmons support heart health and digestion with their fiber-rich content.",
    price: 18.70,
    image: "https://picsum.photos/seed/persimmon/400/300"
  },
  {
    name: "Tangerine",
    speciality: "Citrus fruit",
    description: "Tangerines are juicy citrus fruits that boost immunity and refresh the body.",
    price: 16.20,
    image: "https://picsum.photos/seed/tangerine/400/300"
  },
  {
    name: "Wood Apple ",
    speciality: "Cooling fruit",
    description: "Bael fruit helps cool the body and improve digestion.",
    price: 18.10,
    image: "https://picsum.photos/seed/bael-india/400/300"
  },
    {
    name: "Indian Breadfruit",
    speciality: "Energy source",
    description: "Breadfruit provides carbohydrates and sustained energy.",
    price: 20.90,
    image: "https://picsum.photos/seed/breadfruit-india/400/300"
  }
];




  return (

<><Navbar />
    
    
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 lg:grid-cols-4 gap-2'>

        {fruits.map((props) => {
          return <Card name = {props.name} special ={props.speciality } desc = {props.description} price={props.price} image = {props.image} />
        })}
        
      


    </div></>
 

  )
}

export default App
