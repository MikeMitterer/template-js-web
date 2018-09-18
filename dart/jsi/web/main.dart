@JS('_log_logger__WEBPACK_IMPORTED_MODULE_2__')
library main.js;

import 'dart:html';
import 'package:js/js.dart';

@JS()
class Name {
    external Name(final String firstname, final String lastname);

    external String get lastname;
}

void main() {
    final name = new Name("Mike","Mitterer");

    querySelector('#output').text = 'Your Dart app is running. ${name.lastname}';
}
