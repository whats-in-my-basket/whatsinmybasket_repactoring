import { SkeletonComponentProps } from "../_Common.interface";

export default function SkeletonComponent({ type }: SkeletonComponentProps) {
  return <div className={`skeleton ${type}`}></div>;
}
