import {
  useState,
  useRef,
  useEffect,
  RefObject,
  Dispatch,
  SetStateAction,
} from "react";

interface IObject {
  ref: RefObject<HTMLDivElement>;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

function useVisible(initialIsVisible: boolean): IObject {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
}

export default useVisible;
