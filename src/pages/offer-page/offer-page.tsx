import Facilities from '../../components/offer/facilities/facilities';
import Features from '../../components/offer/features/features';
import Gallery from '../../components/gallery/gallery';
import Host from '../../components/offer/host/host';
import Reviews from '../../components/reviews/reviews/reviews';
import Rating from '../../components/offer/rating/rating';
import Map from '../../components/map/map';
import { Helmet } from 'react-helmet-async';
import NearPlaces from '../../components/offer/near-places/near-places';
import { useState } from 'react';
import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';

export default function OfferPage(): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const offers = useAppSelector((state) => state.offers);
  const reviews = useAppSelector((state) => state.reviews);
  const nearPlaces = offers.slice(0, 3);

  const onCardHover = (title: string) => {
    const currentOffer = nearPlaces.find((offer) => offer.title === title);

    setSelectedOffer(currentOffer);
  };

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <Gallery />
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className="offer__mark">
              <span>Premium</span>
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                Beautiful &amp; luxurious studio at great location
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <Rating />
            <Features />
            <div className="offer__price">
              <b className="offer__price-value">&euro;120</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <Facilities />
            <Host />
            <Reviews reviews={reviews} />
          </div>
        </div>
        <Map
          parentClass='offer__map'
          selectedOffer={selectedOffer}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <NearPlaces onCardHover={onCardHover} />
        </section>
      </div>
    </main>
  );
}
