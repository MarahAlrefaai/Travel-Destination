

import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import Tours from '../tours/Tours.js';
function Home(props) {

  return (
    <div>

      <Header />
      <Tours tourData={props.data}/>
      <Footer />
      
    </div>
  );
}

export default Home;
