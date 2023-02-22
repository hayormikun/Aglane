type SocialProps = {
  logo: string
  name: string
  link: string
}

export const Social = ({ logo, name, link }: SocialProps) => {
  return (
    <a href={link}>
      <span>
        {logo}
        {name}
      </span>
    </a>
  )
}
