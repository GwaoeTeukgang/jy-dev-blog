import { ReactNode } from 'react';
import MyInfo from "@/app/blog/_component/MyInfo";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <div>
    <div>
      <MyInfo/>
    </div>
    {children}
  </div>;
}
