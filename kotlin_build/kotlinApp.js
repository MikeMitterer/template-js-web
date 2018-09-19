(function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  function KotlinName(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  Object.defineProperty(KotlinName.prototype, 'fullname', {
    get: function () {
      return this.firstname + '-' + this.lastname + '..';
    }
  });
  KotlinName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KotlinName',
    interfaces: []
  };
  function InfoGenerator() {
    InfoGenerator_instance = this;
  }
  InfoGenerator.prototype.create_6taknv$ = function (development) {
    if (development === void 0)
      development = false;
    var $receiver = document.createElement('div');
    var content = document.createTextNode('Development-Mike!!!: ' + development);
    $receiver.appendChild(content);
    addClass($receiver, ['alarm']);
    return $receiver;
  };
  InfoGenerator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InfoGenerator',
    interfaces: []
  };
  var InfoGenerator_instance = null;
  function InfoGenerator_getInstance() {
    if (InfoGenerator_instance === null) {
      new InfoGenerator();
    }
    return InfoGenerator_instance;
  }
  var package$app = _.app || (_.app = {});
  package$app.KotlinName = KotlinName;
  var package$info = package$app.info || (package$app.info = {});
  Object.defineProperty(package$info, 'InfoGenerator', {
    get: InfoGenerator_getInstance
  });
  Kotlin.defineModule('kotlinApp', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=kotlinApp.js.map