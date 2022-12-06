import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import conape from "../../img/logo_favicon.png"

const Testimonial = () => {
  const clients = [
    {
      img: conape,
      orange: "Conape Auditoria Tributária",
      nome: "Valdir Campos Costa",
      review:
        "Soluções modernas para Design e Tecnologia, são profissionais sérios e competentes, atuam com responsabilidade.",
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
                <span className="orange">{client.orange}</span>
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
