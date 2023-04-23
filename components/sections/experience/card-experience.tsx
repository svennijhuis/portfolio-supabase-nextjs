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

interface CardExperienceProps {
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

const CardExperience = ({
  children,
  title,
  text,
  icon,
}: CardExperienceProps) => {
  return (
    <article className="sticky top-10 flex h-[225px] flex-col justify-between rounded-2xl border-[1px] border-black/20 bg-gray p-2 md:top-[200px]">
      <div className="flex gap-2">
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
          <h4 className="mb-1">{title}</h4>
          <div className="flex flex-wrap gap-1">{children}</div>
        </div>
      </div>

      <Paragraph size="sm" color="black" fontWeight="light">
        {text}
      </Paragraph>
    </article>
  );
};

export default CardExperience;
