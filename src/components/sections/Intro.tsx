import React from "react";
import { IntroConfig } from "@/share/common/types";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

interface Props {
  config: IntroConfig;
}

export const Intro = ({ config }: Props) => {
  return (
    <section className="intro">
      <div className="container intro-wrapper">
        <div className="intro__content">
          <div className="intro__info">
            <h1 className="intro__title">{config.title}</h1>
            <p className="intro__subtitle">{config.subtitle}</p>
            <Link className="w-full" href={"#shop"}>
              <Button className="intro__button rounded-[64px] h-[56px]">
                {config.buttonTitle}
              </Button>
            </Link>
          </div>
          <div className="intro__stats">
            {config.statistic.map((item, index) => (
              <React.Fragment key={index}>
                <div className={`intro__stat`}>
                  <p className="intro__stat-digit">{item.digit}</p>
                  <p className="intro__stat-subtitle">{item.subtitle}</p>
                </div>

                <div className={`separator${index}`}></div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="intro__image">
          <Image
            className="star-small"
            src="./icons/star-small.svg"
            alt="Star"
            width={30}
            height={30}
          />
          <Image
            className="star-big"
            src="./icons/star-big.svg"
            alt="Star"
            width={50}
            height={50}
          />
          <Image src={config.image} alt="Intro Image" />
        </div>
      </div>
    </section>
  );
};
