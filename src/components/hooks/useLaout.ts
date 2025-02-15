"use client";

import { useState, useEffect } from "react";

export function useLayout() {
  const [mediaQueryConfig, setMediaQueryConfig] = useState({
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2Xl: false,
  });

  useEffect(() => {
    const mediaQueries = {
      isSm: window.matchMedia("(max-width: 640px)"),
      isMd: window.matchMedia("(max-width: 768px)"),
      isLg: window.matchMedia("(max-width: 1024px)"),
      isXl: window.matchMedia("(max-width: 1280px)"),
      is2Xl: window.matchMedia("(max-width: 1536px)"),
    };

    // Функция обновления состояния
    const updateMediaQueryConfig = () => {
      setMediaQueryConfig({
        isSm: mediaQueries.isSm.matches,
        isMd: mediaQueries.isMd.matches,
        isLg: mediaQueries.isLg.matches,
        isXl: mediaQueries.isXl.matches,
        is2Xl: mediaQueries.is2Xl.matches,
      });
    };

    // Устанавливаем начальное состояние
    updateMediaQueryConfig();

    // Добавляем слушатели
    Object.values(mediaQueries).forEach((mq) => {
      mq.addEventListener("change", updateMediaQueryConfig);
    });

    // Убираем слушатели при размонтировании
    return () => {
      Object.values(mediaQueries).forEach((mq) => {
        mq.removeEventListener("change", updateMediaQueryConfig);
      });
    };
  }, []);

  return { mediaQueryConfig };
}
