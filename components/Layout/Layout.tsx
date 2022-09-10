import styles from './Layout.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <main>{children}</main>
    </div>
  );
}
