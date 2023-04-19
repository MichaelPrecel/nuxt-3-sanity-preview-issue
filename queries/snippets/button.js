import { internalLink } from "./internalLink";

export const button = `button{
  title,
  linkInternal->{
    ${internalLink}
  },
  linkExternal,
  newWindow
}`;
