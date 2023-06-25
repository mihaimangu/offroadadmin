
import react, {useEffect} from 'react';
import List from './carlist';


function Home(){

    useEffect(() => {
        console.log('home mounted')
    }, [])

    return (
        <div >
            <List />
        </div>
      );
}


export default Home;