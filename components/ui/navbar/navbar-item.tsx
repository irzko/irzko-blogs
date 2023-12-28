import joinClasses from "@/utils/joinClasses";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  navbarItem: {
    fontWeight: "500",
    whitespace: "nowrap",
    boxSizing: "border-box",
    listStyle: "none",
  },
});

export default function NavbarItem({
  children,
  isActive = false,
}: {
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <li
      {...stylex.props(styles.navbarItem)}
    >
      {children}
    </li>
  );
}
