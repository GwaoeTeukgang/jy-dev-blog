import { ReactNode } from 'react';


export const revalidate = 1;
export default function ProjectLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <main>
      {children}
      {modal}
    </main>
  );
}
