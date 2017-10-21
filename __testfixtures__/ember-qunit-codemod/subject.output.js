import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | Flash', function(hooks) {
  setupTest(hooks);

  test('should allow messages to be queued', function (assert) {
    let subject = this.owner.lookup('service:flash');
  });
});

module('Unit | Service | NonSingletonService', function(hooks) {
  setupTest(hooks);

  test('does something', function (assert) {
    let subject = this.owner.factoryFor('service:non-singleton-service').create({ name: 'James' });
  });
});

module('Unit | Model | Foo', function(hooks) {
  setupTest(hooks);

  test('has some thing', function (assert) {
    let subject = this.owner.factoryFor('model:foo').create();
  });

  test('has another thing', function (assert) {
    let subject = this.owner.factoryFor('model:foo').create({ size: 'big' });
  });
});

module('Integration | Model | Foo', function(hooks) {
  setupTest(hooks);

  test('has some thing', function (assert) {
    let subject = this.owner.factoryFor('model:foo').create();
  });
});

module('Unit | Model | Foo', function(hooks) {
  setupTest(hooks);

  test('has some thing', function (assert) {
    let subject = this.owner.factoryFor('model:foo').create();
  });
});

module('Unit | Component | FooBar', function(hooks) {
  setupTest(hooks);

  test('has some thing', function (assert) {
    let subject = this.owner.factoryFor('component:foo-bar').create();
  });

  test('has another thing', function (assert) {
    let subject = this.owner.factoryFor('component:foo-bar').create({ size: 'big' });
  });
});
