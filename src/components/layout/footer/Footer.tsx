"use client";
import { FooterConfig } from "@/share/common/types";
import Link from "next/link";
import Logo from "@/share/logo/Logo";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
interface FooterProps {
  config: FooterConfig;
}

export const Footer = ({ config }: FooterProps) => {
  const { linksConfig, contentConfig } = config;

  return (
    <footer className="footer container">
      <Separator style={{ marginBottom: "20px" }} />
      <div className="footer__wrapper container">
        <div className="footer__content">
          <Logo />
          <p className="footer__content-text">{contentConfig.subtitle}</p>
          <div className="footer__content-social">
            {contentConfig.mediaImages.map((item, index) => (
              <Link
                href={"#"}
                key={index}
                className="footer__content-social-item"
              >
                <Image src={item} alt={""} width={40} height={40} />
              </Link>
            ))}
          </div>
        </div>

        <nav className="footer__nav">
          {linksConfig.map((item, index) => (
            <div key={index} className="footer__nav-section">
              <p className="footer__nav-title">{item.title}</p>
              <ul className="footer__nav-list">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="footer__nav-item">
                    <Link href={"#"} className="footer__nav-link">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};
