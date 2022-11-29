import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import conape from "../../img/logo_favicon.png";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: conape,
      nome: "Valdir Campos Costa  - Conape Auditoria Contábil e Tributária ",
      review:
        "Soluções modernas para Design e Tecnologia, é um profissional sério e competente, atua com responsabilidade.",
    },
    {
      img: profilePic2,
      nome: "Valdir Campos Costa  - Conape Auditoria Contábil e Tributária",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium.",
    },
    {
      img: profilePic3,
      nome: "Valdir Campos Costa  - Conape Auditoria Contábil e Tributária",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error .",
    },
    {
      img: profilePic4,
      nome: "Valdir Campos Costa  - Conape Auditoria Contábil e Tributária",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Veja algumas  </span>
        <span> avaliações </span>
        <span>de nossos</span>
        <span> clientes</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.nome}</span>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
