export default function NavbarContent({
  children,
  as,
}: Readonly<{ children: React.ReactNode; as?: React.ElementType }>) {
  const Component = as || "ul";
  return (
    <Component className="h-full flex-row flex-nowrap items-center justify-center hidden sm:flex gap-4">
      {children}
    </Component>
  );
}
