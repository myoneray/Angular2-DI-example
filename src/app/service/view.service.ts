import {LargeService}  from './large.service';
import {SmaillService}  from './smaill.service';

export class ViewService {
  change(): any {
    let w: number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (w < 800) {

      return new SmaillService();

    }
    return new LargeService();
  }
}
