import { module, test } from 'qunit';
import { setupTest } from 'too-many-bikes/tests/helpers';

module('Unit | Route | workbench', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:workbench');
    assert.ok(route);
  });
});
