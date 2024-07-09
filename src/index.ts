import type {TpPlugin} from 'tweakpane';

import {TweakpaneThumbnailListPlugin} from './plugin';

export const id = 'textarea';

export const css = '__css__';

export const plugins: TpPlugin[] = [TweakpaneThumbnailListPlugin];
