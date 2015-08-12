#!/usr/bin/env node

/*
 * Copyright (c) 2012, Liferay Inc. All rights reserved.
 * Code licensed under the BSD License:
 * https://github.com/liferay/alloy-ui/blob/master/LICENSE.txt
 *
 * @author Eduardo Lundgren <eduardo.lundgren@liferay.com>
 */

// -- Requires -----------------------------------------------------------------
var file = require('../../aui-base/scripts/file'),
    path = require('path'),
    UglifyJS = require('uglify-js');

// -- Header -------------------------------------------------------------------
var root = path.join(__dirname, '../../../'),
    aceBuildDir = path.join(root, 'build', 'aui-ace-editor', 'ace'),
    acePath = path.join(root, 'bower_components/ace-builds', 'src'),
    jsPath = path.join(root, 'src', 'aui-ace-editor', 'js'),
    tempPath = path.join(jsPath, '.aui-ace-editor.js'),
    alloyContent = file.read(path.join(jsPath, 'aui-ace-editor.js')),
    aceContent = file.read(path.join(acePath, 'ace.js'));

    aceContent = aceContent.replace(/var ACE_NAMESPACE = "";/, 'var ACE_NAMESPACE = "AUI.ace";');
    aceContent = UglifyJS.minify(aceContent, {fromString: true}).code;

// -- build --------------------------------------------------------------------
file.write(tempPath, aceContent + alloyContent);
file.mkdir(aceBuildDir);
file.copy(acePath, aceBuildDir);
