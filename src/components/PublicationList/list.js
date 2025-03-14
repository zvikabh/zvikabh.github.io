import React from 'react';
import styles from "./list.module.scss";

export default function PublicationList({ publications }) {
  const hasImages = publications.some(pubInfo => pubInfo.icon);
  return (
    <div className={hasImages ? styles.list_image : styles.list_noimage}>
      {publications.map((pubInfo, i) => (
        <React.Fragment key={i}>
          {
            hasImages ? 
              <div className={styles.list_icon}>
                {pubInfo.icon ? <img src={pubInfo.icon} alt="" /> : null}
              </div> : 
              null
          }
          <div>
            {
              pubInfo.authors ?
              (<div className={styles.authors}>{pubInfo.authors}.</div>) :
              null
            }
            <div className={styles.paper_title}>
              {
                pubInfo.link ? 
                (<a href={pubInfo.link}>{pubInfo.title}{pubInfo.post_title ? null : '.'}</a>) : 
                (<>{pubInfo.title}{pubInfo.post_title ? null : '.'}</>)
              }
              {
                pubInfo.post_title ? (<> {pubInfo.post_title}.</>) : null
              }
            </div>
            <div className={styles.bibinfo}>{pubInfo.bibinfo}</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
