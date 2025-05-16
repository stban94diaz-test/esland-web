import styles from "./styles.module.css"

interface Props {
  children?: preact.ComponentChildren
  onClick?: (e: MouseEvent) => any
  id?: string
  className?: string
  target?: string
  url: string
}

export default function Button({ children, onClick, url, target, className, ...rest }: Props) {
  return (
    <a
      href={url}
      target={`${target ?? '_blank'}`}
      rel="noopener noreferrer"
      onClick={onClick}
      class={`
        text-xs lg:text-2xl md:text-xl uppercase
        w-fit font-medium no-underline
        md:px-5 px-3 py-3
        border border-solid border-white rounded-full
        ${styles.button}
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </a>
  )
}