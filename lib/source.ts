/* eslint-disable @typescript-eslint/ban-ts-comment */
import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/',
  // @ts-ignore
  source: docs.toFumadocsSource(),
});
