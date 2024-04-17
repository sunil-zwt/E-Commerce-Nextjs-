(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_771fbb._.js", {

"[project]/src/styles/_upcoming_events.module.css [app-client] (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "event_tag": "event_tag___upcoming_events__afeb1883",
  "project_one__item": "project_one__item___upcoming_events__afeb1883",
  "upcoming-events-section": "upcoming-events-section___upcoming_events__afeb1883",
  "upcoming-one__carousel": "upcoming-one__carousel___upcoming_events__afeb1883",
  "upcoming_event_heading": "upcoming_event_heading___upcoming_events__afeb1883",
  "upcoming_events_section": "upcoming_events_section___upcoming_events__afeb1883",
  "upcoming_one__carousel": "upcoming_one__carousel___upcoming_events__afeb1883",
});

})()),
"[project]/src/app/components/home-page/homeComponents/UpcomingEvents.tsx [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

// import React from 'react';
// import Image from 'next/image';
// // import { Carousel } from 'react-responsive-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import styles from '@/styles/_upcoming_events.module.css';
// const UpcomingEvents = () => {
//   return (
//     <div
//       className={`${styles.upcoming_events_section} wow fadeInUp d-flex flex-column gap-4`}
//       data-wow-delay='200ms'
//     >
//       {/* Upcoming Carousel */}
//       <OwlCarousel
//         className='owl-carousel owl-theme'
//         items={3}
//         margin={0}
//         loop
//         smartSpeed={2000}
//         center
//         autoplay
//         nav={false}
//         dots={false}
//         responsive={{
//           0: {
//             items: 2,
//             margin: 10,
//           },
//           768: {
//             items: 2.5,
//             margin: 20,
//           },
//           992: {
//             items: 3,
//             margin: 30,
//           },
//         }}
//       >
//         {/* Slides */}
//         <div className='project-one__item'>
//           <Image
//             src='/assets/img/upcoming-events-1.png'
//             alt='Drawin'
//             width={300}
//             height={200}
//             unoptimized={true}
//           />
//         </div>
//         <div className='project-one__item'>
//           <Image
//             src='/assets/img/upcoming-events-2.png'
//             alt='Drawin'
//             width={300}
//             height={200}
//             unoptimized={true}
//           />
//         </div>
//         <div className='project-one__item'>
//           <Image
//             src='/assets/img/upcoming-events-3.png'
//             alt='Drawin'
//             width={300}
//             height={200}
//             unoptimized={true}
//           />
//         </div>
//         <div className='project-one__item'>
//           <Image
//             src='/assets/img/upcoming-events-1-1.png'
//             alt='Drawin'
//             width={300}
//             height={200}
//             unoptimized={true}
//           />
//         </div>
//         <div className='project-one__item'>
//           <Image
//             src='/assets/img/upcoming-events-1-2.png'
//             alt='Drawin'
//             width={300}
//             height={200}
//             unoptimized={true}
//           />
//         </div>
//         <div className='project-one__item'>
//           <Image
//             src='/assets/img/upcoming-events-1-3.png'
//             alt='Drawin'
//             width={300}
//             height={200}
//             unoptimized={true}
//           />
//         </div>
//       </OwlCarousel>
//       {/* <div className={`${styles.upcoming_two__carousel} ${styles.showmate_main_owl__carousel} ${styles.owl_carousel} ${styles.owl_theme}`}> */}
//       <OwlCarousel
//         className='owl-carousel owl-theme'
//         items={3}
//         margin={0}
//         loop
//         smartSpeed={2000}
//         center
//         nav={false}
//         dots={false}
//         autoplay
//         responsive={{
//           0: {
//             items: 2,
//             margin: 10,
//           },
//           768: {
//             items: 2.5,
//             margin: 20,
//           },
//           992: {
//             items: 3,
//             margin: 30,
//           },
//         }}
//       >
//         {/* Slides */}
//         <div className='project-one__item'>
//           <Image
//             src='/assets/img/upcoming-events-1.png'
//             alt='Drawin'
//             width={300}
//             height={200}
//             unoptimized={true}
//           />
//         </div>
//         <div className='project-one__item'>
//           <Image
//             src='/assets/img/upcoming-events-2.png'
//             alt='Drawin'
//             width={300}
//             height={200}
//             unoptimized={true}
//           />
//         </div>
//         <div className='project-one__item'>
//           <Image
//             src='/assets/img/upcoming-events-3.png'
//             alt='Drawin'
//             width={300}
//             height={200}
//             unoptimized={true}
//           />
//         </div>
//         <div className='project-one__item'>
//           <Image
//             src='/assets/img/upcoming-events-1-1.png'
//             alt='Drawin'
//             width={300}
//             height={200}
//             unoptimized={true}
//           />
//         </div>
//         <div className='project-one__item'>
//           <Image
//             src='/assets/img/upcoming-events-1-2.png'
//             alt='Drawin'
//             width={300}
//             height={200}
//             unoptimized={true}
//           />
//         </div>
//         <div className='project-one__item'>
//           <Image
//             src='/assets/img/upcoming-events-1-3.png'
//             alt='Drawin'
//             width={300}
//             height={200}
//             unoptimized={true}
//           />
//         </div>
//       </OwlCarousel>
//       {/* </div> */}
//       {/* Upcoming Event Heading */}
//       <div className={`${styles.upcoming_event_heading}`}>
//         <span>
//           Upcoming <br />
//           Events in{' '}
//         </span>
//         <span className={`${styles.event_tag}`}>#Ahmedabad</span>
//       </div>
//     </div>
//   );
// };
// export default UpcomingEvents;

}.call(this) }),
}]);

//# sourceMappingURL=src_771fbb._.js.map