import styles from "./link.module.scss";
import ArrowIcon from "@/public/icons/arrow-icon";
import BookIcon from "@/public/icons/book-icon";
import DevelopmentIcon from "@/public/icons/development-icon";
import EyeIcon from "@/public/icons/eye-icon";
import GridIcon from "@/public/icons/grid-icon";
import MailIcon from "@/public/icons/mail-icon";
import PhoneIcon from "@/public/icons/phone-icon";
import ScreenIcon from "@/public/icons/screen-icon";
import WorkIcon from "@/public/icons/work-icon";
import clsx from "clsx";
import Link from "next/link";

interface LinkStylingProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  icon?:
    | "arrow"
    | "book"
    | "development"
    | "eye"
    | "grid"
    | "mail"
    | "phone"
    | "screen"
    | "work";
  iconHover?:
    | "arrow"
    | "book"
    | "development"
    | "eye"
    | "grid"
    | "mail"
    | "phone"
    | "screen"
    | "work";
  color: "black" | "gray";
}

const LinkStyling = ({
  children,
  href,
  icon,
  iconHover,
  color,
  className,
}: LinkStylingProps) => {
  return (
    <Link
      className={clsx(
        "flex h-[32px] w-fit flex-row items-center justify-center gap-1 rounded-full py-[5px] pl-1 pr-[5px] text-13 font-light transition-all duration-500 ease-in-out hover:-rotate-3 hover:scale-105 md:text-14",
        className,
        styles.linkStyling,
        {
          "bg-black text-white": color === "black",
          "bg-gray text-black": color === "gray",
        }
      )}
      href={href}
    >
      {children}
      <div
        className={clsx(
          "h-[24px] w-[24px] overflow-hidden rounded-full",
          className,
          {
            "bg-white": color === "black",
            "bg-black": color === "gray",
          }
        )}
      >
        <span
          className={clsx({
            "": color === "black",
            invert: color === "gray",
          })}
        >
          {icon === "arrow" ? (
            <ArrowIcon />
          ) : icon === "book" ? (
            <BookIcon />
          ) : icon === "development" ? (
            <DevelopmentIcon />
          ) : icon === "eye" ? (
            <EyeIcon />
          ) : icon === "grid" ? (
            <GridIcon />
          ) : icon === "mail" ? (
            <MailIcon />
          ) : icon === "phone" ? (
            <PhoneIcon />
          ) : icon === "screen" ? (
            <ScreenIcon />
          ) : icon === "work" ? (
            <WorkIcon />
          ) : null}
        </span>
        <span
          className={clsx({
            "": color === "black",
            invert: color === "gray",
          })}
        >
          {iconHover === "arrow" ? (
            <ArrowIcon />
          ) : iconHover === "book" ? (
            <BookIcon />
          ) : iconHover === "development" ? (
            <DevelopmentIcon />
          ) : iconHover === "eye" ? (
            <EyeIcon />
          ) : iconHover === "grid" ? (
            <GridIcon />
          ) : iconHover === "mail" ? (
            <MailIcon />
          ) : iconHover === "phone" ? (
            <PhoneIcon />
          ) : iconHover === "screen" ? (
            <ScreenIcon />
          ) : iconHover === "work" ? (
            <WorkIcon />
          ) : null}
        </span>
      </div>
    </Link>
  );
};

export default LinkStyling;
