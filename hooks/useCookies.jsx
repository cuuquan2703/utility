import { useEffect } from "react";
export default function useCookies() {
  var doc;

  useEffect(() => {
    doc = document;
  }, []);
  const value = () => {};

  console.log(document);
}
