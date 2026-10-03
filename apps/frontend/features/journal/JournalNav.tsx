import {RouteLink} from '../../components/public/RouteLink';
import styles from '../../components/app/Operational.module.css';
export function JournalNav(){return <nav className={styles.tabs} aria-label="Journal"><RouteLink href="/journal">Case record</RouteLink><RouteLink href="/journal/new">New draft</RouteLink><RouteLink href="/journal/analytics">Journal analytics</RouteLink><RouteLink href="/journal/influence">Case influence</RouteLink></nav>;}
