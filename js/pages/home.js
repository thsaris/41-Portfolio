// IMPORT
import { Gallery } from '../components/gallery/Gallery.js';
import { portfolioData } from '../data/portfolioData.js';
import { tiles } from '../components/tiles/tiles.js';
import { hobbiesData } from '../data/hobbiesData.js';

// EXECUTION

/* header start */
/* header end */

/* about start */
/* about end */

/* hobbies start */
tiles('hobbies_block', hobbiesData);
/* hobbies end */

/* services start */
/* services end */

/* portfolio start */
new Gallery('#portfolio_block', portfolioData);
/* portfolio end */

/* footer start */
/* footer end */