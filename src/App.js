import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider/Slider';
import Scrolling from './Heading/scrolling';
import { Route,Redirect} from 'react-router-dom';
import SearchBar from './PRoducts/searchbar'
import MySports from './MyFavSports/MySports';
import SocialMedia from './SocialMedia/SocialMedia';
import Footer from './Footer/Footer';



function App() {
  
  return (
    <div className="App">
      <Route>
     
  
<Route path='/' exact>
    <Redirect to='/movies' />
  </Route>
 
{/* <Route path='/movies' >
      <Slider/>
    </Route>

<Route path='/shows' >
<SearchBar/>
</Route>

<Route path='/sport'>
<MySports/>
</Route>

<Route path='/social'>
  <SocialMedia/>
  </Route> */}
 
 <Route>
  <div>Not Found 404</div>
</Route>
  </Route> 
 <Scrolling/>
  <Slider />
  <SearchBar/>
  <MySports/>
  <SocialMedia/>
  <Footer />
    </div>
  );
}

export default App;
