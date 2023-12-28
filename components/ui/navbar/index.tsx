import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  nav: {
    display: "flex",
    position: "sticky",
    top: "0",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
    left: "0",
    right: "0",
    borderBottomStyle: "solid",
    borderBottomWidth: ".8px",
    borderBottomColor: "rgba(255, 255, 255, 0.15)",
    zIndex: 40,
  },
  header: {
    display: "flex",
    maxWidth: "1024px",
    margin: "0 auto",
    height: "4rem",
    paddingRight: "1.5rem",
    paddingLeft: "1.5rem",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <nav {...stylex.props(styles.nav)}>
      <header {...stylex.props(styles.header)}>{children}</header>
    </nav>
  );
}
