import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon:
    | "ic-menu-overview"
    | "ic-menu-transaction"
    | "ic-menu-card"
    | "ic-menu-messages"
    | "ic-menu-rewards"
    | "ic-menu-logout"
    | "ic-menu-settings";
  active?: boolean;
  href: string;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href = "/" } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="menu" />
      </div>
      <p className="item-title m-0">
        <Link href={href} legacyBehavior>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
