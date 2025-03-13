import PublicationList from "../../components/PublicationList/list";

export const metadata = {
  title: 'Conference Publications — Zvika Ben-Haim',
};

const CONFERENCE_PUBLICATIONS = [
  {
    authors: 'N. Giladi, S. Nevo, Z. Ben-Haim, Y. Matias, and D. Soudry',
    title: 'Physics-aware downsampling with deep learning for scalable flood modeling',
    bibinfo: (<><a href="https://events.ecmwf.int/event/294/">ECMWF 2022 Machine Learning Workshop</a></>),
    link: null
  },
  {
    authors: 'N. Giladi, Z. Ben-Haim, S. Nevo, Y. Matias, and D. Soudry',
    title: 'Physics-aware downsampling with deep learning for scalable flood modeling',
    link: 'https://arxiv.org/abs/2106.07218',
    bibinfo: (<>NeurIPS 2021<br /><a href="https://github.com/tech-submissions/physics-aware-downsampling">Source code</a></>)
  },
  {
    authors: 'S. Nevo, A. Gerzi Rosenthal, A. Metzger, D. Weitzner, E. Morin, G. Begelman, G. Shalev, H. Noga, I. Shavitt, N. Giladi, O. Reich, O. Gilon, T. Schechter, V. Anisimov, Y. Gigi, Z. Moshe, Z. Ben-Haim, A. Hassidim, and Y. Matias',
    title: 'Google\'s flood forecasting framework: connecting data, models, risks and people',
    link: null,
    bibinfo: (<><i>American Geophysical Union (AGU) Fall Meeting 2020</i>, Dec. 2020</>)
  },
  {
    authors: 'A. Metzger, Z. Moshe, G. Shalev, O. Reich, Z. Ben-Haim, V. Anisimov, E. Morin, R. El-Yaniv, G. Elidan, and S. Nevo',
    title: 'How Google\'s flood forecasting initiative leverages deep learning hydrologic models',
    bibinfo: (<><i>European Geosciences Union General Assembly</i> (EGU 2020), Vienna, Austria, May 2020</>),
    link: 'https://meetingorganizer.copernicus.org/EGU2020/EGU2020-4134.html'
  },
  {
    authors: 'Z. Ben-Haim, V. Anisimov, A. Yonas, V. Gulshan, Y. Shafi, S. Hoyer, and S. Nevo',
    title: 'Inundation modeling in data scarce regions',
    bibinfo: (<><i>Artificial Intelligence for Humanitarian Assistance and Disaster Response Workshop</i> (AI+HADR) at NeurIPS 2019, Vancouver, Canada, December 2019</>),
    link: 'https://arxiv.org/abs/1910.05006'
  },
  {
    authors: 'S. Schmutzhard, A. Jung, F. Hlawatsch, Z. Ben-Haim, and Y. C. Eldar',
    title: 'A lower bound on the estimator variance for the sparse linear model',
    bibinfo: (<><i>Asilomar Conference on Signals, Systems, and Computers,</i> Pacific Grove, CA, Nov. 2010</>),
    link: null
  },
  {
    authors: 'Z. Ben-Haim, T. Michaeli, and Y. C. Eldar',
    title: 'Performance bounds for the estimation of finite rate of innovation signals from noisy measurements',
    bibinfo: (<><i>6th IEEE Sensor Array and Multichannel Signal Processing Workshop</i> (SAM 2010), Israel, Oct. 2010</>),
    link: 'https://webee.technion.ac.il/people/YoninaEldar/SAM10-FRI_CRB.pdf'
  },
  {
    authors: 'Z. Ben-Haim, Y. C. Eldar, and M. Elad',
    title: 'Coherence-based near-oracle performance guarantees for sparse estimation under random noise',
    bibinfo: (<><i>Proc. 2010 IEEE International Conference on Audio, Speech and Signal Processing</i> (ICASSP 2010), Dallas, TX, March 2010</>),
    link: 'published/gua_icassp.pdf'},
  {
    authors: 'A. Jung, Z. Ben-Haim, F. Hlawatsch, and Y. C. Eldar',
    title: 'On unbiased estimation of sparse vectors corrupted by Gaussian noise',
    post_title: (<>(<a href="published/jbhe_poster.pdf">Poster</a>)</>),
    bibinfo: (<><i>Proc. 2010 IEEE International Conference on Audio, Speech and Signal Processing</i> (ICASSP 2010), Dallas, TX, March 2010</>),
    link: 'published/jbhe_icassp.pdf'
  },
  {
    authors: 'Z. Ben-Haim and Y. C. Eldar',
    title: 'Performance bounds for sparse estimation with random noise',
    post_title: (<>(<a href="published/crb-ssp.ppt">Presentation</a>)</>),
    bibinfo: (<><i>IEEE Workshop on Statistical Signal Processing</i> (<a href="http://www.ssp2009.org/" target="_blank">SSP 2009</a>), Cardiff, Wales, UK, September 2009</>),
    link: 'published/crb-ssp.pdf'
  },
  {
    authors: 'A. Elron, G. Leibovitz, Z. Ben-Haim, and Y. C. Eldar',
    title: 'Recursive blind minimax estimation: Improving MSE over recursive least squares',
    bibinfo: (<><i>25th IEEE Convention of Electrical and Electronics Engineers in Israel</i> (IEEEI'08), December 2008.<br />
        For more information, see the
        <a href="https://webee.technion.ac.il/Sites/People/YoninaEldar/Info/software/bme/index.php" target="_top">blind minimax estimation</a> site</>),
    link: 'published/rebme.pdf'
  },
  {
    authors: 'Z. Ben-Haim and Y. C. Eldar',
    title: 'A Bayesian estimation bound based on the optimal bias function',
    bibinfo: (<><i>Proc. 2nd International Workshop on Computational Advances in Multi-Sensor Adaptive Processing</i> (CAMSAP 2007), December 2007</>),
    link: 'published/obb_camsap.pdf'
  },
  {
    authors: 'Z. Ben-Haim and Y. C. Eldar',
    title: 'Blind minimax estimators: Improving on least-squares estimation',
    post_title: (<>(<a href="published/bme_imp_lse_poster.pdf" target="_top">Poster</a>)</>),
    bibinfo: (<><i>IEEE Workshop on Statistical Signal Processing</i> (SSP 2005), Bordeaux, France, July 2005</>),
    link: 'published/bme_imp_lse.pdf'
  },
  {
    authors: 'Z. Ben-Haim and Y. C. Eldar',
    title: 'Minimax estimators dominating the least-squares estimator',
    post_title: (<>(<a href="published/mmx_dom_ls.ppt" target="_top">Presentation</a>)</>),
    bibinfo: (<><i>30th International Conference on Audio, Speech and Signal Processing</i> 
        (ICASSP 2005), Philadelphia, PA, March 2005.<br />
        [Finalist, Student Paper Competition, ICASSP 2005]</>),
    link: 'published/mmx_dom_ls.ppt'
  },
  {
    authors: 'Z. Ben-Haim and Y. C. Eldar',
    title: 'Estimation with maximum error requirements',
    link: 'published/max_err_reqs.pdf',
    bibinfo: (<><i>23rd IEEE Convention of Electrical and Electronics Engineers in Israel</i>  (IEEEI 2004), Tel-Aviv, September 2004</>)
  },
  {
    authors: 'R. Dickstein, S. Sheffi, Z. Ben-Haim, and E. Markovici',
    title: 'The nature of bilateral activation of trunk muscles in hemiparetic post-stroke patients in postural adjustments and in response to external perturbations',
    bibinfo: (<><i>Motor Control Conf.</i>, Varna, Bulgaria, Sep. 1999</>),
    link: null
  },
  {
    authors: 'Y. Laufer, R. Dickstein, Y. Heffes, and Z. Ben-Haim',
    title: 'The effect of treadmill training on ambulation of stroke patients in the early stages of rehabilitation',
    bibinfo: (<><i>Annual Conf. Israel Union Physioth.</i>, Tel-Aviv, Israel, May 1999</>),
    link: null
  },
];

export default function ConferencePublications() {
  return (
    <>
      <PublicationList title="Conference Publications" publications={CONFERENCE_PUBLICATIONS} />
    </>
  );
};
