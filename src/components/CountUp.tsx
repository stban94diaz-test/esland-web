import { useEffect } from "preact/hooks";
import { useProgressiveNumber } from "../hooks/useProgressiveNumber";

interface Props {
  start: number
  end: number
  duration?: number
  decimals?: number
}

export const CountUp = ({ start, end, duration, decimals }: Props) => {
  const [count, setCount] = useProgressiveNumber(start, duration, decimals);

  useEffect(() => {
    setCount(end.toString());
  }, [])

  return <span>{count}</span>
};