import blackjack from "../assets/blackjack.png";
import freshBurger from "../assets/fresh-burger.png";
import CONSTANTS from "./Constants.jsx";

const ProjectsData = [
  {
    src: blackjack,
    link: CONSTANTS.BLACKJACK_PROJECT.BLACKJACK_GITHUB,
    projectName: CONSTANTS.BLACKJACK_PROJECT.BLACKJACK,
    projectDescription: CONSTANTS.BLACKJACK_PROJECT.BLACKJACK_DESCRIPTION,
  },
  {
    src: freshBurger,
    link: CONSTANTS.TRIE_PROJECT.TRIE_GITHUB,
    projectName: CONSTANTS.TRIE_PROJECT.TRIE,
    projectDescription: CONSTANTS.TRIE_PROJECT.TRIE_DESCRIPTION,
  },
];

export default ProjectsData;
