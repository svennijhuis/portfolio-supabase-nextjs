import styles from "./card-experience.module.scss";
import Paragraph from "@/components/text/paragraph";
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
import * as React from "react";

interface CardExperienceProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  title: string;
  text: string;
  icon:
    | "arrow"
    | "book"
    | "development"
    | "eye"
    | "grid"
    | "mail"
    | "phone"
    | "screen"
    | "work";
}

const CardExperience = React.forwardRef<HTMLDivElement, CardExperienceProps>(
  ({ children, title, text, icon, ...props }, ref) => {
    return (
      <article
        {...props}
        ref={ref}
        className="sticky top-10 flex h-[350px] flex-col justify-between rounded-2xl border-[1px] border-black/20 bg-gray p-[15px] md:top-[200px] md:h-[225px] md:p-2"
      >
        <div className="flex gap-1 md:gap-2">
          <div
            className={clsx(
              "flex h-[65px] w-[65px] items-center justify-center rounded-lg bg-softBlack p-1",
              styles.icon
            )}
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
          </div>
          <div className="flex flex-col">
            <h4 className="mb-1 text-18 font-medium text-black md:text-20">
              {title}
            </h4>
            <div className="flex flex-wrap gap-1">{children}</div>
          </div>
        </div>

        <Paragraph
          className="flex h-full items-center pb-[5px] pr-1 md:items-end"
          size="sm"
          color="black"
          fontWeight="light"
        >
          {text}
        </Paragraph>
      </article>
    );
  }
);

CardExperience.displayName = "Card";

export default CardExperience;
