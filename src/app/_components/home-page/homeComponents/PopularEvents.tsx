// components/PopularEvents.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import styles from '@/styles/_popular_events.module.css';
import React from 'react';

interface Event {
  cardImage: string;
  date: string;
  title: string;
  price: string;
  city: string;
}

interface PopularEventsProps {
  events: Event[];
}

const PopularEvents: React.FC<PopularEventsProps> = ({ events }) => {
  return (
    <section className={`main ${styles.home_main}`}>
      <div className='container'>
        <h2 className={`${styles.event_heading}`}>
          Popular <span className={`${styles.event_tag}`}>#Events</span>
        </h2>
        <div className={`${styles.event_list_section} row`}>
          {events.map((ele, index) => (
            <div className='col-6 col-sm-6 col-md-3 col-lg-3 mb-3' key={index}>
              <div
                className={`${styles.event_item} wow fadeInUp animated`}
                data-wow-delay='00ms'
              >
                <div className={`${styles.event_item_image}`}>
                  <div className={`${styles.event_promoted}`}>
                    <span className={`${styles.event_promoted_tag}`}>
                      Promoted
                    </span>
                  </div>
                  <Image
                    src={ele.cardImage}
                    width={276}
                    height={400}
                    alt='Event Image'
                    unoptimized={true}
                  />
                </div>
                <div
                  className={`${styles.event_item_detail} d-flex flex-column`}
                >
                  <span className={`${styles.event_item_date}`}>
                    {ele.date}
                  </span>
                  <h4 className={`${styles.event_item_title}`}>{ele.title}</h4>
                  <span className={`${styles.event_price}`}>₹{ele.price}</span>
                  <span className={`${styles.event_location}`}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className='me-1' />
                    {ele.city}
                  </span>
                  <a className={`${styles.event_btn}`} href='event-detail.html'>
                    Book Ticket
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularEvents;
