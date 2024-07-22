import {
  CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality
} from '../sections';
import SingleShoe from '../sections/SingleShoe.jsx';


import Nav from '../components/Nav.jsx'
import { shoes } from '../constants/index.js';


const shoe = shoes[0];

const ViewShoe = () => (

  <main className="relative">

    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">

      <SingleShoe shoe={ shoe} />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">


      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>


  </main>



);


export default ViewShoe;