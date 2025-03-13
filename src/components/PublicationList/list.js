import styles from "./list.module.scss";

export default function PublicationList({ title, publications }) {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>Zvika Ben-Haim</div>
      <div className={styles.list_noimage}>
        {publications.map((pubInfo, i) => (
            <div key={i}>
            <div className={styles.authors}>{pubInfo.authors}.</div>
            <div className={styles.paper_title}>
              {
                pubInfo.link ? 
                (<a href={pubInfo.link}>{pubInfo.title}</a>) : 
                (<>{pubInfo.title}</>)
              }.
            </div>
            <div className={styles.bibinfo}>{pubInfo.bibinfo}</div>
          </div>
      ))}
      </div>
    </>
  );
}
