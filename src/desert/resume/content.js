// In this repo the desert's content is src/data/site.json. Edit it at
// www.muzzamilkhan.com/management (which commits it here), or by hand.
// scripts/sync-desert.sh keeps this file when it pulls in a new desert.
import site from '../../data/site.json';

export default site;

// Where /management publishes: one commit to this branch, which the deploy
// workflow builds and puts live. Added images, models and PDFs go in public/.
export const manage = {
  owner: 'muzzkh',
  repo: 'ParticlePortfolio',
  branch: 'main',
  contentPath: 'src/data/site.json',
  publicDir: 'public',
};
