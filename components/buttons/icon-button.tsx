import ArrowIcon from "@/public/icons/arrow-icon";
import BookIcon from "@/public/icons/book-icon";
import DevelopmentIcon from "@/public/icons/development-icon";
import EyeIcon from "@/public/icons/eye-icon";
import GridIcon from "@/public/icons/grid-icon";
import MailIcon from "@/public/icons/mail-icon";
import PhoneIcon from "@/public/icons/phone-icon";
import ScreenIcon from "@/public/icons/screen-icon";
import WorkIcon from "@/public/icons/work-icon";

interface IconProps {
  icon: string;
}

export const Icon = ({ icon, ...props }: IconProps) => {
  switch (icon) {
    case "arrow":
      return <ArrowIcon {...props} />;
    case "book":
      return <BookIcon {...props} />;
    case "development":
      return <DevelopmentIcon {...props} />;
    case "eye":
      return <EyeIcon {...props} />;
    case "grid":
      return <GridIcon {...props} />;
    case "mail":
      return <MailIcon {...props} />;
    case "phone":
      return <PhoneIcon {...props} />;
    case "screen":
      return <ScreenIcon {...props} />;
    case "work":
      return <WorkIcon {...props} />;
    default:
      return null;
  }
};
