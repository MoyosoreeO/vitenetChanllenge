import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { dataAction } from "./Store/Redux";
import { useDispatch, useSelector } from "react-redux";
import "./ProjectRoot.css";
import "swiper/swiper-bundle.css";
import { useState } from "react";

SwiperCore.use([Navigation, Autoplay]);

const ProjectRoot = () => {
  const projectData = useSelector((state) => {
    return state.projects;
  });
  const dispatch = useDispatch();
  const deleteClickHandler = (itemId) => {};
  const openClickHandler = (itemId) => {
    dispatch(dataAction.openProject(itemId));
  };
  let projects = projectData.map((item) => {
    return (
      <SwiperSlide key={item.id} tag="li">
        <div className="slide-wrapper">
          <div className="header">
            <h1>{item.name}</h1>
            <div>
              <span>Edit</span>
              <span>Add</span>
            </div>
          </div>
          <div>
            <button onClick={openClickHandler.bind(null, item.id)}>Open</button>
            <button onClick={deleteClickHandler.bind(null, item.id)}>
              Delete
            </button>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div className="wrapper">
      <Swiper
        tag="section"
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}
        speed={500}
        centeredSlides={true}
        watchSlidesProgress={true}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        navigation={{ clickable: true }}
        id="main"
      >
        {projects}
      </Swiper>
    </div>
  );
};
export default ProjectRoot;
