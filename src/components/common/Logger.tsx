import { LoggerProps } from "./_Common.interface";

export default function Logger({ start, end }: LoggerProps) {
  return (
    <div className="category-log-area">
      <span className="category-log-first">{start}</span>
      <span className="category-log-last">{end}</span>
    </div>
  );
}
