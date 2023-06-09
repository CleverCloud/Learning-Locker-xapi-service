import * as assert from 'assert';
import { jsonContentType } from '../utils/constants';
import getFileExtension from '../utils/getFileExtension';

describe('getFileExtension', () => {
  it('should return json on application/json', async () => {
    const ext = getFileExtension(jsonContentType);
    assert.strictEqual(ext, 'json');
  });

  it('should return known extension', async () => {
    const ext = getFileExtension('text/plain');
    assert.strictEqual(ext, 'txt');
  });

  it('should return `bin` on unknown extension', async () => {
    const ext = getFileExtension('ht2/binary');
    assert.strictEqual(ext, 'bin');
  });
});
