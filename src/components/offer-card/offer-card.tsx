import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { MouseEvent } from 'react';
import { getRating } from '../../utils/helpers';

type Props = {
  cardClassName: string;
  offer: Offer;
  onCardHover: (title: string) => void;
}

export default function OfferCard({ cardClassName, offer, onCardHover }: Props): JSX.Element {

  const handleCardHover = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    onCardHover(event.currentTarget.innerText);
  };

  const rating = getRating(offer.rating);

  return (
    <article className={`${cardClassName} place-card`} onMouseEnter={() => onCardHover(offer?.title)}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"></img>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`} onMouseEnter={handleCardHover}>{offer?.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

