import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="add your first city by clicking on you position on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  /* 
Let’s break this down:
1️⃣ cities.reduce((arr, city) => { ... }, [])
reduce() iterates through the cities array.
arr starts as an empty array ([]).

For each city, the function decides whether to add a new country to arr.

2️⃣ Inside the reduce() callback
if (!arr.map((el) => el.country).includes(city.country))

arr.map((el) => el.country) → extracts an array of country names already added.
.includes(city.country) → checks if the current city’s country is already in that list.

If it’s not included (!), it means this country hasn’t been added yet.

3️⃣ If not included:
return [...arr, { country: city.country, emoji: city.emoji }];

Add a new object to arr with the country name and its emoji.

4️⃣ If already included:
else return arr;

Do nothing — just return the array unchanged.
✅ Result:
countries becomes an array of unique countries, each like:
 */

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
