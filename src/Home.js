import useFetch from "./useFetch";

const Home = () => {
    const { data, error, isPending } = useFetch('http://localhost:3001/weather?q=London');


    return ( 
        <div className="weatherDetails">
            <h2>Weather Details</h2>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <div>
                    <h3>{data.location.name}</h3>
                    <p>Temperature: {data.current.temp_c} °C</p>
                    <p>Condition: {data.current.condition.text}</p>
                    <img src={data.current.condition.icon} alt={data.current.condition.text} />
                </div>
            )}
        </div>
     );
}
 
export default Home;