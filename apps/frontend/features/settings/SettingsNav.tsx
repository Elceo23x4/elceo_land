import {RouteLink} from '../../components/public/RouteLink';
import styles from '../../components/app/Operational.module.css';
export const settingsDestinations=[['/settings/profile','Profile'],['/settings/assets','Tracked markets'],['/settings/preferences','Preferences'],['/settings/notifications','Notifications'],['/settings/billing','Plan & billing'],['/settings/access','Access & usage'],['/settings/security','Security']] as const;
export function SettingsNav(){return <nav className={styles.tabs} aria-label="Account settings">{settingsDestinations.map(([href,label])=><RouteLink key={href} href={href}>{label}</RouteLink>)}</nav>;}
