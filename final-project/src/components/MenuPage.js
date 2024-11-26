import {TitleCard} from './TitleCard';
import {AccShortcut} from './AccShortcut';
import About from './About';
import {Contact} from './Contact';
import Footer from './Footer';
import { Thumbnail } from './Thumbnail';

const MenuPage = () => {
    return (
        <div className='main-page'>
        <div className="container1">
        <Thumbnail/>
      </div>
      <div className="container2">
        <TitleCard />
        <AccShortcut />
      </div>
      <div className="container3">
        <About />
      </div>
      <div className="container4">
        <Contact />
      </div>
      <div className="container5">
        <Footer />
      </div>
      </div>
    );
};

export default MenuPage;