"use client";

import Image from "next/image";
import { useEffect } from "react";

import PublicationList from "../../components/PublicationList/list";
import styles from "../page.module.scss";
import { useTitle } from "../../contexts/TitleContext";

const USEFUL_SOFTWARE = [
  {
    title: 'IguanaTex',
    link: 'http://www.jonathanleroux.org/software/iguanatex/',
    icon: '/iguana_icon.jpg',
    bibinfo: (<>An 
      add-in for PowerPoint that allows you to easily insert LaTeX 
      equations into your presentations.<br />
      I wrote the original version of IguanaTex; it is currently maintained by <a href="http://www.jonathanleroux.org/">Jonathan Le Roux</a>, who has expanded it quite a bit.</>)
  },
  {
    title: 'Converting latitude and longitude to the Israel grid',
    link: '/software/ITM/index.html',
    icon: '/map.png',
    bibinfo: (<>This is a small JavaScript program for translating WGS84 coordinates (longitude and latitude)
	to Israel grid coordinates. Both the new ITM grid (רשת ישראל החדשה) and the old ICS grid (רשת ישראל הישנה)
	are supported. <a href="/software/ITM/index_heb.html">Hebrew version</a> also available.</>)
  },
  {
    title: 'Guitar Tab Writer',
    link: 'https://zvikabh.github.io/guitar-tab-writer/',
    icon: '/software/icons/guitar.jpg',
    bibinfo: (<>A simple web-based editor for writing guitar tabs in the standard textual format.
    Joint work with Naama Ben-Haim. See the <a href="https://github.com/zvikabh/guitar-tab-writer">source</a> on 
    GitHub.</>)
  },
  {
    title: 'Blind Minimax Estimation',
    link: 'https://webee.technion.ac.il/Sites/People/YoninaEldar/Info/software/bme/index.php',
    icon: '/bme.gif',
    bibinfo: (<>This website includes a friendly introduction to 
	blind minimax estimation, some examples, and a BME package for Matlab which 
	you can download and use.<br />
        The site and software were written by Guy Leibovitz and Asaf Elron, as their
        undergraduate project under my supervision.</>)
  },
  {
    title: 'Guitar Tuner',
    link: '/software/Tuner/Tuner.exe',
    icon: '/software/icons/guitar.jpg',
    bibinfo: (<>A program to tune your guitar. Connect
      a microphone and strum a single note on your guitar, and the program will
      tell you if you’re sharp or flat. (Written as a birthday present for my
      brother Rafi, who was learning to play.) Download <a target="_blank" href="/software/Tuner/Tuner.exe">executable</a> or <a target="_blank" href="/software/Tuner/source.zip">source</a> (MFC/Visual C++ 6). No
      documentation, but quite straightforward to use.</>)
  },
];

const GAMES = [
  {
    title: 'בול מילה',
    link: 'https://bulmila.com',
    bibinfo: (<><span dir="rtl">גרסה עברית של המשחק וורדל.</span><br />Hebrew version of the <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a> word game.</>),
    icon: '/bulmila.jpg'
  },
  {
    title: 'מילותיים',
    link: 'https://milotayim.com',
    bibinfo: (<><span dir="rtl">ואריאציה של וורדל שבו צריך לנחש שתי מילים בו-זמנית.</span><br />Hebrew version of the <a href="https://zaratustra.itch.io/dordle">Dordle</a> word game.</>),
    icon: '/milotayim.png'
  },
  {
    title: 'קשר מרובע',
    link: 'https://milotayim.com/kesher',
    bibinfo: (<><span dir="rtl">משחק אסוציאציות שבו צריך למצוא ארבע רביעיות של מילים קשורות. משחק חדש כל שבת.</span><br />Association game where you need to find quartets of related words. A new game every Saturday.</>),
    icon: '/kesher.png'
  },
  {
    title: 'Jigsaw Puzzle SVG Generator',
    link: '/software/jigsaw-svg/index.html',
    icon: '/software/jigsaw-svg/jigsaw.png',
    bibinfo: 'Generates SVG files with random jigsaw puzzle pieces.'
  },
  {
    title: 'MUSE: Musical Database Search by Audio Query',
    link: '/unpublished/muse/index.html',
    icon: '/muse.gif',
    bibinfo: (<>This is a computer program for automatic song identification. The user hums
    a few notes from a song; these are analyzed and searched for in a database.
    This was the graduation project of my bachelor’s degree at the Technion, and
    was conducted under the supervision of <a href="https://www.linkedin.com/in/gal-ashour-3a56731/">Gal Ashour</a>.</>)
  },
];

const GAME_SOLVERS = [
  {
    title: 'Minesweeper Riddle Solver',
    link: 'https://github.com/zvikabh/minesweeper-riddle-solver',
    icon: '/minesweeper.png',
    bibinfo: (<>A program for automatically solving Minesweeper riddles, in which you are
    shown a subset of the Minesweeper field and need to figure out where all of the mines
    are located.</>)
  },
  {
    title: 'Kakuro Solver',
    link: 'software/kakuro/kakuro.zip',
    icon: 'software/kakuro/kakuro.gif',
    bibinfo: (<>A program for automatically 
    solving <a target="_blank" href="http://en.wikipedia.org/wiki/Kakuro">Kakuro</a> (also known as Cross Sum) puzzles. 
    No documentation, but you’ll figure it out if you know the puzzle. Solves most large puzzles (22x13) in a few 
    seconds. Download <a target="_blank" href="/software/kakuro/kakuro.zip">executable</a> (with example) or view the <a target="_blank" href="https://github.com/zvikabh/kakuro-solver">source</a>.</>)
  },
  {
    title: 'Sudoku Solver',
    link: 'software/sudoku/software.zip',
    icon: 'software/sudoku/sudoku.gif',
    bibinfo: (<>A program for automatically solving <a target="_blank" href="http://en.wikipedia.org/wiki/Sudoku">Sudoku</a> (a.k.a. Number Place) puzzles. Just fill in the numbers you know and leave the others blank, and the program will solve the puzzle for you in under a second. Download the <a target="_blank" href="/software/sudoku/software.zip">software</a>, <a target="_blank" href="/software/sudoku/puzzles.zip">sample puzzles</a>, and <a target="_blank" href="https://github.com/zvikabh/sudoku-solver">source</a> (MFC/Visual C++ 6).</>)
  },
  {
    title: 'Shchor',
    link: 'software/Shchor/shchor.zip',
    icon: 'software/Shchor/shchor.gif',
    bibinfo: (<>This program solves the <a target="_top" href="http://en.wikipedia.org/wiki/Nonogram">Paint
      by Numbers</a> (Pic-a-Pix) puzzle, in which the
      horizontal and vertical lengths of pixel sequences are given, and the
      object is to figure out the picture. No documentation, but if you know the
      puzzle, you’ll figure it out; just drag one of the enclosed text files
      into the program and click Action&gt;Solve. (boat.txt is a good starting
      example; carriage.txt is a difficult one.) Download the <a target="_blank" href="/software/Shchor/shchor.zip"> software</a> (with sample puzzles) or <a target="_blank" href="/software/Shchor/source.zip"> source</a> (MFC/Visual C++ 6).</>)
  },
  {
    title: 'Katamino Solver',
    link: 'https://github.com/zvikabh/katamino-solver',
    icon: '/katamino.png',
    bibinfo: (<>Python-based solver for the <a href="https://boardgamegeek.com/boardgame/6931/katamino">Katamino</a> game.</>)
  },
  {
    title: 'Tantrix Solver',
    link: 'https://github.com/zvikabh/tantrix',
    icon: 'software/tantrix/icon.png',
    bibinfo: (<>A Python solver for <a href="https://en.wikipedia.org/wiki/Tantrix">Tantrix</a> puzzles. Runtime can be a bit slow for larger puzzles (more than about 15 pieces); I’m sure this can be optimized further.
    <details><summary>The output is written as an SVG file. Click to see an example solution.</summary><Image src="/software/tantrix/solution10.svg" height={120*3} width={181*3} alt="Example solution" />
  </details></>)
  },
];

const SILLY_STUFF = [
  {
    title: 'Boiling point simulation',
    link: '/boilingpoint',
    icon: '/boilingpoint.png',
    bibinfo: (<>Simulation showing the phase transition of molecules when the temperature is varied around the boiling point.</>)
  },
  {
    title: (<>Pascal&rsquo;s triangle mod <i>k</i></>),
    link: '/pascalmod',
    icon: '/pascal.png',
    bibinfo: (<>Web page showing the Pascal triangle modulo <i>k</i>, which, it turns out, is a generalization of the Sierpinski curve.</>)
  },
  {
    title: 'Yotam\'s Space Maze',
    link: '/yotam/index.html',
    icon: '/yotam/yotam.jpg',
    bibinfo: 'JavaScript maze game (written with my son).'
  },
];

const OLD_SOFTWARE = [
  {
    title: 'WakeUp',
    link: 'software/WakeUp/WakeUp.zip',
    icon: 'software/icons/WakeUp.gif',
    bibinfo: (<>Alarm clock program. Choose to play a wave
      file or run an external program (e.g. Media Player) at a specified time.
      The cool feature is the ability to slowly increase the computer’s volume,
      so you don’t wake up with a start. This was actually my alarm clock in the college dorm; this was, of course, before smartphones. Download the <a target="_blank" href="/software/WakeUp/WakeUp.zip">executable</a> (with help file) or the <a target="_blank" href="/software/WakeUp/source.zip">source</a> (MFC/Visual C++ 6).</>)
  },
  {
    title: 'DrMatrix',
    link: 'software/misc/drmatrix.zip',
    icon: 'software/icons/drmatrix.gif',
    bibinfo: (<>C++ package for basic matrix/vector
      operations, such as matrix ranking, inversion, determinants, etc. However,
      this package probably does not house the most numerically stable
      algorithms, as it was written primarily as an exercise. Download the
      package <a target="_blank" href="/software/misc/drmatrix.zip">source code</a> (C++), with
      documentation and demo program for solving linear equations.</>)
  },
  {
    title: 'MidiMix',
    link: 'software/MidiMix/MidiMix.zip',
    icon: 'software/icons/MidiMix.jpg',
    bibinfo: (<>A program for converting MIDI files to the
      XM (Extended Module) music format. Before MP3s became popular, XM was used
      for storing sound files in a higher quality than MIDI. Download <a target="_blank" href="/software/MidiMix/MidiMix.zip">software</a> (with documentation and examples) or <a target="_blank" href="/software/MidiMix/source.zip">source</a> (C++).</>)
  },
  {
    title: '21 Questions',
    link: 'software/21q/21q.zip',
    icon: 'software/icons/21q.gif',
    bibinfo: (<>In this guessing game, the computer
      asks a series of yes/no questions to figure out what concept you are
      thinking of. The program learns new concepts if its guesses fail. Concepts
      of different types can be programmed; for example, a sample question
      database which can identify over 100 types of animals is included.
      Download <a target="_blank" href="/software/21q/21q.zip">software</a> (with help and animals
      database) or <a target="_blank" href="/software/21q/source.zip">source</a>.</>)
  },
];


export default function Software() {
  const { setShortTitle } = useTitle();
  useEffect(() => {
    setShortTitle("Software");
  });
  return (
    <>
      <div className={styles.title}>Software</div>
      <div className={styles.subtitle}>Zvika Ben-Haim</div>
      <p className={styles.para}>
        These are programs I wrote for fun or as small exercises. Please feel free to download and use them. 
        You can also download the source code for all of these programs and modify it any way you like 
        (but please give credit where due). If you do anything neat with any of these, <a href="mailto:zvikabh@gmail.com">let me know</a>!
      </p>
      <p className={styles.para}>
        <i>Note:</i> Some of these programs were previously released as shareware, and, in some cases, the documentation
        still indicates shareware status. However, I am no longer trying to sell these as shareware. Instead, the 
        versions you see here are the complete (“registered”) versions. On the other hand, I don’t always have 
        time to answer technical support questions related to these programs.
      </p>
      <div className={styles.sublist_title}>Useful Stuff</div>
      <PublicationList publications={USEFUL_SOFTWARE} />
      <div className={styles.sublist_title}>Games</div>
      <PublicationList publications={GAMES} />
      <div className={styles.sublist_title}>Game Solvers</div>
      <PublicationList publications={GAME_SOLVERS} />
      <div className={styles.sublist_title}>Silly Stuff</div>
      <PublicationList publications={SILLY_STUFF} />
      <div className={styles.sublist_title}>Very Old Stuff</div>
      <p className={styles.para}>
        I’ve been writing software for a long time and many of these are both ridiculously archaic and 
        embarrassingly incompetent. I’m keeping them here solely for nostalgic reasons.
      </p>
      <PublicationList publications={OLD_SOFTWARE} />
    </>
  );
};
