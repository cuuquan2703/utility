import useEventListener from "./useEventListener";
export default function TestUseEventListener() {
  useEventListener("click", (e) => {
    console.log(e.target);
  });

  return <></>;
}
