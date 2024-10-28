// src/DigitalClock.js
"use client";
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

// Estilo del reloj
const ClockContainer = styled.div`
  font-family: 'Arial', sans-serif;
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin: 20px;
`;

// Botón para cambiar el formato
const FormatButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;

const DigitalClock = () => {
  const [format, setFormat] = useState('24h');
  const [time, setTime] = useState('');

  // Función para obtener el tiempo actual
  const getCurrentTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Convertir a formato de 12 horas si es necesario
    if (format === '12h') {
      const period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // convierte 0 a 12
      return `${hours}:${minutes}:${seconds} ${period}`;
    }

    return `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
  };

  // Actualiza el tiempo cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [format]);

  // Cambia el formato de la hora
  const toggleFormat = () => {
    setFormat(prevFormat => {
      const newFormat = prevFormat === '24h' ? '12h' : '24h';
      console.log(`Formato cambiado a: ${newFormat}`); // Mensaje en consola
      return newFormat;
    });
  };

  return (
    <ClockContainer>
      <div>{time}</div>
      <FormatButton onClick={toggleFormat}>
        Cambiar a formato {format === '24h' ? '12h' : '24h'}
      </FormatButton>
    </ClockContainer>
  );
};

export default DigitalClock;
