import '/auth/firebase_auth/auth_util.dart';
import '/backend/backend.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'bookdetail_widget.dart' show BookdetailWidget;
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';

class BookdetailModel extends FlutterFlowModel<BookdetailWidget> {
  ///  State fields for stateful widgets in this page.

  // State field(s) for bookname widget.
  FocusNode? booknameFocusNode;
  TextEditingController? booknameTextController;
  String? Function(BuildContext, String?)? booknameTextControllerValidator;
  // State field(s) for code widget.
  FocusNode? codeFocusNode;
  TextEditingController? codeTextController;
  String? Function(BuildContext, String?)? codeTextControllerValidator;
  // State field(s) for tenure widget.
  FocusNode? tenureFocusNode;
  TextEditingController? tenureTextController;
  String? Function(BuildContext, String?)? tenureTextControllerValidator;

  @override
  void initState(BuildContext context) {}

  @override
  void dispose() {
    booknameFocusNode?.dispose();
    booknameTextController?.dispose();

    codeFocusNode?.dispose();
    codeTextController?.dispose();

    tenureFocusNode?.dispose();
    tenureTextController?.dispose();
  }
}
