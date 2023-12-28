import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  navbarContent: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
    flexWrap: "nowrap",
  },
});

export default function NavbarContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ul {...stylex.props(styles.navbarContent)}>{children}</ul>;
}
