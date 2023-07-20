import { CommonWrapperProps } from "./_common.interface";

export default function CommonWrapper({ children }: CommonWrapperProps) {
  return <div className="common-wrapper">{children}</div>;
}
