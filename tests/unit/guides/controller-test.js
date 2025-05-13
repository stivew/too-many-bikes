import { module, test } from 'qunit';
import { setupTest } from 'too-many-bikes/tests/helpers';

module('Unit | Controller | guides', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:guides');
    assert.ok(controller);
  });
});
