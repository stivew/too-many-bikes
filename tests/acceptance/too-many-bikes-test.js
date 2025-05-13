import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'too-many-bikes/tests/helpers';

module('Acceptance | too many bikes', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    const toGuidesSelector = '.to-guides';

    assert.dom(toGuidesSelector).hasText('Guides');
    await click(toGuidesSelector);

    assert.strictEqual(currentURL(), '/guides');
  });
});
