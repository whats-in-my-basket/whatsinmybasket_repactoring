import { CommonWrapperProps } from "./_Common.interface";

export default function CommonWrapper({ children }: CommonWrapperProps) {
  return <div className="common-wrapper">{children}</div>;
}
