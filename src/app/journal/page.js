"use client";

import { useEffect } from "react";

import { useTitle } from "../../contexts/TitleContext";
import PublicationList from "../../components/PublicationList/list";
import styles from "../page.module.scss";

const JOURNAL_PAPERS = [
  {
    authors: 'Nevo, S., Morin, E., Gerzi Rosenthal, A., Metzger, A., Barshai, C., Weitzner, D., Voloshin, D., Kratzert, F., Elidan, G., Dror, G., Begelman, G., Nearing, G., Shalev, G., Noga, H., Shavitt, I., Yuklea, L., Royz, M., Giladi, N., Peled Levi, N., Reich, O., Gilon, O., Maor, R., Timnat, S., Shechter, T., Anisimov, V., Gigi, Y., Levin, Y., Moshe, Z., Ben-Haim, Z., Hassidim, A., and Matias, Y.',
    title: 'Flood forecasting with machine learning models in an operational framework',
    bibinfo: (<div><i>Hydrology and Earth System Sciences</i> 26: 4013–4032, 2022.</div>),
    link: 'https://hess.copernicus.org/preprints/hess-2021-554/'
  },
  {
    authors: 'Z. Ben-Haim, T. Michaeli, and Y. C. Eldar',
    title: 'Performance bounds and design criteria for estimating finite rate of innovation signals',
    bibinfo: (<div><i>IEEE Trans. Information Theory</i> 58(8): 4993–5015, Aug. 2012; arXiv:<a href="http://arxiv.org/abs/1009.2221">1009.2221</a>.</div>),
    link: 'published/fri.pdf'
  },
  {
    authors: 'Z. Ben-Haim and Y. C. Eldar',
    title: 'Near-oracle performance of greedy block-sparse estimation techniques from noisy measurements',
    bibinfo: (<div><i>IEEE J. of Selected Topics in Signal Processing</i>, 5(5): 1032–1047, Sep. 2011.</div>),
    link: 'published/block.pdf'
  },
  {
    authors: 'A. Jung, Z. Ben-Haim, F. Hlawatsch and Y. C. Eldar',
    title: 'Unbiased estimation of a sparse vector in white Gaussian noise',
    bibinfo: (<div><i>IEEE Trans. Information Theory</i>, 57(12): 7856–7876, Dec. 2011. arXiv:<a href="http://arxiv.org/abs/1005.5697">1005.5697</a>.</div>),
    link: 'published/jung-it.pdf'
  },
  {
    authors: 'Z. Ben-Haim, Y. C. Eldar, and M. Elad',
    title: 'Coherence-based performance guarantees for estimating a sparse vector under random noise',
    bibinfo: (<div><i>IEEE Trans. Sig. Proc.</i>, 58(10): 5030–5043, Oct. 2010.</div>),
    link: 'published/guarantees.pdf'
  },
  {
    authors: 'Z. Ben-Haim and Y. C. Eldar',
    title: 'The Cramér–Rao bound for estimating a sparse parameter vector',
    bibinfo: (<div><i>IEEE Trans. Signal Processing</i>, 58(6), 3384–3389, June 2010.<br/>
    A more detailed version of this paper is available as a technical report:
		Z. Ben-Haim and Y. C. Eldar, &quot;<a href="published/crb-techrep.pdf" target="_blank">The 
		Cramér–Rao bound for sparse estimation</a>,&quot; Tech. Rep. 1714, 
		Dept. of Electrical Engineering, Technion;
		arXiv:<a href="http://arxiv.org/abs/0905.4378" target="_blank">0905.4378</a>.</div>),
    link: 'published/crb-corresp.pdf'
  },
  {
    authors: 'Z. Ben-Haim and Y. C. Eldar',
    title: 'A lower bound on the Bayesian MSE based on the optimal bias function',
    bibinfo: (<div><i>IEEE Trans. Inform. Theory</i>, 55(11): 5179–5196, Nov. 2009.</div>),
    link: 'published/obb_it.pdf'
  },
  {
    authors: 'Z. Ben-Haim and Y. C. Eldar',
    title: 'On the constrained Cramér–Rao bound with a singular Fisher information matrix',
    bibinfo: (<div><i>IEEE Signal Processing Letters</i>, 16(6): 453–456.</div>),
    link: 'published/sing-fim.pdf'
  },
  {
    authors: 'Z. Ben-Haim and Y. C. Eldar',
    title: 'A comment on the use of the Weiss–Weinstein bound for constrained parameter sets',
    bibinfo: (<div><i>IEEE Trans. Inform. Theory,</i> 54(10): 4682–4684, October 2008.</div>),
    link: 'published/wwb_comment.pdf'
  },
  {
    authors: 'Z. Ben-Haim and Y. C. Eldar',
    title: 'Blind minimax estimation',
    bibinfo: (<div><i>IEEE Trans. Information Theory</i>, 53(9): 3145–3157, Sep. 2007. <br />
    For more information, see the
    <a href="https://webee.technion.ac.il/Sites/People/YoninaEldar/Info/software/bme/index.php" target="_top">Blind 
    Minimax Estimation</a> site.</div>),
    link: 'published/bme.pdf'
  },
  {
    authors: 'Z. Ben-Haim and Y. C. Eldar',
    title: 'Maximum set estimators with bounded estimation error',
    bibinfo: (<div><i>IEEE Trans. Signal Processing</i>, 53(8): 3172–3182, August 2005.</div>),
    link: 'published/max_set_est.pdf'
  },
  {
    authors: 'R. Dickstein, S. Sheffi, Z. Ben-Haim, and E. Markovici',
    title: 'Activation of flexor and extensor trunk muscles in hemiparesis',
    bibinfo: (<div><i>Amer. J. Phys. Med. Rehab.</i>, 79(3): 228–234, May/June 2000.</div>),
    link: null
  },
  {
    authors: 'R. Dickstein, Y. Heffes, Y. Laufer, and Z. Ben-Haim',
    title: 'Activation of selected trunk muscles during symmetric functional activities in poststroke hemiparetic and hemiplegic patients',
    bibinfo: (<div><i>J. Neurol. Neurosurg. Psychiatry</i>, 66: 218–221, 1999.</div>),
    link: null
  },
];

export default function JournalPublications() {
  const { setShortTitle } = useTitle();
  useEffect(() => {
    setShortTitle("Journal Publications");
    document.title = "Journal Publications — Zvika Ben-Haim";
  });
  return (
    <>
      <div className={styles.title}>Journal Publications</div>
      <div className={styles.subtitle}>Zvika Ben-Haim</div>
      <PublicationList publications={JOURNAL_PAPERS} />
    </>
  );
};
