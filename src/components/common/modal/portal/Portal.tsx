import ReactDom from "react-dom";
import { PortalProps } from "./_Portal.interface";

export default function Portal({ children }: PortalProps) {
  const el = document.getElementById("modal-root") as HTMLElement;
  return ReactDom.createPortal(children, el);
}
