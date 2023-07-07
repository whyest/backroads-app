import { socialLinks } from '../data'
import SocialLink from './SocialLink'
const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => (
        <SocialLink key={link.id} {...link} itemClass={itemClass} />
      ))}
    </ul>
  )
}
export default SocialLinks
