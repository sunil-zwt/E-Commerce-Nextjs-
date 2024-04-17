import Image from 'next/image';
import styles from '@/styles/_popular_categories.module.css';
const PopularCategories = () => {
  return (
    <div className={`${styles.pc_container}`}>
      <div className={`${styles.pc_title_wrapper} ${styles.cc_slider_top}`}>
        <div className={`${styles.pc_h1}`}>Popular</div>
      </div>
      <div className={`${styles.pc_slider_wrapper} ${styles.w_dyn_list}`}>
        <div
          className={`${styles.pc_slider} ${styles.w_dyn_items}`}
          role='list'
        >
          {/* Slide 1 */}
          <div
            className={`${styles.pc_slide} ${styles.w_dyn_item}`}
            role='listitem'
          >
            <div
              className={`${styles.pc_slider_wrap} ${styles.green}`}
              style={{ transform: 'rotate(-7.45deg)' }}
            >
              <div className={`${styles.pc_slider_author}`}>
                <Image
                  src='/assets/img/popular-event-1.jpg'
                  alt='Concern / Music'
                  width={476}
                  height={306}
                  loading='lazy'
                />
              </div>
              <div className={`${styles.pc_body_m}`}>Concern / Music</div>
            </div>
          </div>
          {/* Slide 2 */}
          <div
            className={`${styles.pc_slide} ${styles.w_dyn_item}`}
            role='listitem'
          >
            <div
              className={`${styles.pc_slider_wrap} ${styles.grey_lavender}`}
              style={{ transform: 'rotate(3.2deg)' }}
            >
              <div className={`${styles.pc_slider_author}`}>
                <Image
                  src='/assets/img/popular-event-2.jpg'
                  alt='Education'
                  width={500}
                  height={300}
                  loading='lazy'
                />
              </div>
              <div className={`${styles.pc_body_m}`}>Education</div>
            </div>
          </div>
          {/* Slide 3 */}
          <div
            className={`${styles.pc_slide} ${styles.w_dyn_item}`}
            role='listitem'
          >
            <div
              className={`${styles.pc_slider_wrap} ${styles.pink}`}
              style={{ transform: 'rotate(-0.67deg)' }}
            >
              <div className={`${styles.pc_slider_author}`}>
                <Image
                  src='/assets/img/popular-event-3.jpg'
                  alt='Education'
                  width={500}
                  height={300}
                  loading='lazy'
                />
              </div>
              <div className={`${styles.pc_body_m}`}>Food & Drinks</div>
            </div>
          </div>
          <div
            className={`${styles.pc_slide} ${styles.w_dyn_item}`}
            role='listitem'
          >
            <div
              className={`${styles.pc_slider_wrap} ${styles.green}`}
              style={{ transform: 'rotate(-4.33deg)' }}
            >
              <div className={`${styles.pc_slider_author}`}>
                <Image
                  src='/assets/img/popular-event-4.jpg'
                  alt='Education'
                  width={500}
                  height={300}
                  loading='lazy'
                />
              </div>
              <div className={`${styles.pc_body_m}`}>Business</div>
            </div>
          </div>
          <div
            className={`${styles.pc_slide} ${styles.w_dyn_item}`}
            role='listitem'
          >
            <div
              className={`${styles.pc_slider_wrap} ${styles.grey_lavender}`}
              style={{ transform: 'rotate(-7.45deg)' }}
            >
              <div className={`${styles.pc_slider_author}`}>
                <Image
                  src='/assets/img/popular-event-1.jpg'
                  alt='Education'
                  width={500}
                  height={300}
                  loading='lazy'
                />
              </div>
              <div className={`${styles.pc_body_m}`}>Concern / Music</div>
            </div>
          </div>
          <div
            className={`${styles.pc_slide} ${styles.w_dyn_item}`}
            role='listitem'
          >
            <div
              className={`${styles.pc_slider_wrap} ${styles.grey_lavender}`}
              style={{ transform: 'rotate(3.2deg)' }}
            >
              <div className={`${styles.pc_slider_author}`}>
                <Image
                  src='/assets/img/popular-event-2.jpg'
                  alt='Education'
                  width={500}
                  height={300}
                  loading='lazy'
                />
              </div>
              <div className={`${styles.pc_body_m}`}>Education</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.pc_title_wrapper} ${styles.cc_slider}`}>
        <div className={`${styles.pc_h1}`}>Categories</div>
      </div>
      <div style={{ clear: 'both' }}></div>
    </div>
  );
};

export default PopularCategories;
