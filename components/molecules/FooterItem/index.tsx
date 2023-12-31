import Link from "next/link";

interface FooterItemProps {
  title: string;
  href: string;
}
export default function FooterItem(props: FooterItemProps) {
  const { title, href } = props;
  return (
    <li className="mb-6">
      <Link href={href} legacyBehavior>
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </Link>
    </li>
  );
}
