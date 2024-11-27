import '/auth/firebase_auth/auth_util.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'phone_signup_widget.dart' show PhoneSignupWidget;
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';

class PhoneSignupModel extends FlutterFlowModel<PhoneSignupWidget> {
  ///  State fields for stateful widgets in this page.

  // State field(s) for phoneinput widget.
  FocusNode? phoneinputFocusNode;
  TextEditingController? phoneinputTextController;
  String? Function(BuildContext, String?)? phoneinputTextControllerValidator;

  @override
  void initState(BuildContext context) {}

  @override
  void dispose() {
    phoneinputFocusNode?.dispose();
    phoneinputTextController?.dispose();
  }
}
