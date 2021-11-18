import { FaCreditCard, FaBook } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  // {
  //   page: "Асосий",
  //   links: []
  // },
  {
    page: 'Биз Ҳакиммизда',
    links: [
      { label: 'УМУМИЙ МАЪЛУМОТ', icon: <FaCreditCard />, url: '/umumiy' },
      { label: 'Тарихи', icon: <FaCreditCard />, url: '/tarix' },
      { label: 'Раҳбарият', icon: <FaCreditCard />, url: '/rahbariyat' },
      { label: 'Ташкилий тузилма', icon: <FaCreditCard />, url: '/tashkiliytuzulma' },
    ],
  },
  {
    page: 'Расмий',
    links: [
      { label: 'низом', icon: <FaBook />, url: '/nizomlar' },
      { label: 'Сертификатлар ва лицензиялар', icon: <FaBook />, url: '/sertifikat' },
      { label: 'Норматив-ҳуқукий базаси', icon: <FaBook />, url: '/normxuquqiybaza' },
      { label: 'Жамиятнинг хужжатлари', icon: <FaBook />, url: '/jamiyathujjatlari' },
    ],
  },
  // {
  //   page: "Алоқалар",
  //   links: []
  // }
];

export default sublinks;
