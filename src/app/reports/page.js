import PublicationList from "../../components/PublicationList/list";
import styles from "../page.module.scss";

export const metadata = {
  title: 'Misc Reports — Zvika Ben-Haim',
};

const THESES = [
    {
      authors: null,
      title: 'Performance Bounds for Estimation of Structurally Constrained Signals',
      bibinfo: 'Ph.D. Thesis, Technion—Israel Insitute of Technology, November 2010.',
      link: 'published/phdthesis.pdf',
    },
    {
      authors: null,
      title: 'Blind Minimax and Maximum Set Estimators: Improving on Least-Squares Estimation',
      bibinfo: (<>Master's thesis, Technion—Israel Institute of Technology, January 2006, revised May 2006.<br />
      For more information, see the <a href="https://webee.technion.ac.il/Sites/People/YoninaEldar/Info/software/bme/index.php">Blind Minimax Estimation site</a>.</>),
      link: 'published/mscthesis.pdf',
    },
];

const PATENTS = [
  {
      authors: 'Krishnan Eswaran, Shravya Shetty, Daniel Shing Shun Tse, Shahar Jamshy, Zvika Ben-Haim',
      title: 'Similar Image Search for Radiology',
      link: 'https://patents.google.com/patent/US11126649B2/en',
      bibinfo: 'US Patent 11,126,649 B2, September 2021.'
  },
  {
      authors: 'Eran Ofek, Benedict A. Gomes, Tal Cohen, Anna Bendersky, Asaph Arnon, Nitsan Oz, Oren Naim, Amitabh K. Singhal, Zvika Ben-Haim, Ziv Bar-Yossef, Matan Kalman, and Gil Simha Briskin',
      title: 'Providing Answer Boxes Based on Query Results',
      link: 'https://patents.google.com/patent/US9607087B1/en',
      bibinfo: 'US Patent 9,607,087 B1, March 2017.'
  },
];

const PROJECTS = [
  {
    authors: null,
    title: 'MUSE: Musical Database Search by Audio Query',
    bibinfo: 'This is a computer program for automatic song identification. The user hums a few notes from a song; these are analyzed and searched for in a database. This was the graduation project of my bachelor\'s degree at the Technion, and was conducted under the supervision of Gal Ashour.',
    link: 'unpublished/muse/index.html',
    icon: '/muse.gif'
  },
  {
    authors: null,
    title: 'Revised Definition of Optical Flow',
    bibinfo: (<>This is a review and simulation
    of a <a href="https://ieeexplore.ieee.org/abstract/document/713362" target="_blank"> paper</a> by
    S. Negadahripour concerning optical flow techniques for
    estimation of motion in video image sequences. The work was performed in a course
    on computer vision given by <a href="http://www.ee.technion.ac.il/~yoav/" target="_blank">Prof. Yoav
    Schechner</a>. The <a href="unpublished/OpticalFlow/OpticalFlow.pdf" target="_top">report</a> and <a href="unpublished/OpticalFlow/OpticalFlow.ppt" target="_top">presentation</a> are in Hebrew.
    You can also download the <a href="unpublished/OpticalFlow/flow.m" target="_top">Matlab code</a> used
    for the simulations</>),
    link: 'unpublished/OpticalFlow/OpticalFlow.pdf',
    icon: '/OpticalFlow.gif'
  },
  {
    authors: null,
    title: 'Morphological Representation of Wavelet Data',
    bibinfo: (<>This is a review and simulation of a <a href="https://ieeexplore.ieee.org/document/784429" target="_blank"> paper</a> by S.
    D. Servetto, K. Ramchandran and M. T. Orchard, concerning wavelet-based
    image compression techniques. The work was performed in a course on wavelet
    transforms given by Prof. Shalom Raz</>),
    link: 'unpublished/mrwd/index.html',
    icon: '/mrwd.gif'
  },
];

const SHORT_SUMMARIES = [
  {
    authors: null,
    title: "EPR and Bell's inequality",
    bibinfo: 'A summary of some strange properties of quantum mechanics',
    link: 'https://colab.research.google.com/drive/1WZ_Q9Nn3qhtkm1Jau71typBuBUOZa9ck'
  },
  {
    authors: null,
    title: 'χ² and Noncentral-χ² Distributions',
    bibinfo: 'A summary of the properties of these probability distributions, which have some uses in statistics',
    link: 'unpublished/chisquare.pdf'
  },
  {
    authors: 'Zvika Ben-Haim and Tsvika Dvorkind',
    title: 'Majorization and Applications to Optimization',
    bibinfo: null,
    link: 'unpublished/majoptim.pdf'
  },
];

export default function MiscPublications() {
  return (
    <>
      <div className={styles.title}>Miscellaneous Reports</div>
      <div className={styles.subtitle}>Zvika Ben-Haim</div>
      <div className={styles.sublist_title}>Theses</div>
      <PublicationList publications={THESES} />
      <div className={styles.sublist_title}>Patents</div>
      <PublicationList publications={PATENTS} />
      <div className={styles.sublist_title}>Projects</div>
      <PublicationList publications={PROJECTS} />
      <div className={styles.sublist_title}>Short Summaries</div>
      <PublicationList publications={SHORT_SUMMARIES} />
    </>
  );
};
