import styles from "./navigation-btn.module.scss";
import { useContext } from "react";
import { PageContext } from "@/components/layout/header/components/stats/Stats";
import { pageList } from "@/lib/constants/constants";
import clsx from "clsx";

type Props = {
  icon: React.ReactNode;
  iconPage: string;
  onClick: () => void;
};

export default function NavigationBtn(props: Props) {
  const page = useContext(PageContext);
  const { icon, iconPage, onClick } = props;

  const samePage = page === iconPage;

  return (
    <button
      className={clsx(
        styles.button,
        ((page !== pageList.mainMenu) && !samePage) && "cursor-target",
        samePage && styles.disabled
      )}
      onClick={onClick}
      disabled={samePage}
    >
      {icon}
    </button>
  );
}
