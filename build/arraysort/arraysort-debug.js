/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.6.0
build: 3.6.0
*/
YUI.add('arraysort', function(Y) {

/**
Provides a case-insenstive comparator which can be used for array sorting.

@module arraysort
*/

var LANG = Y.Lang,
    ISVALUE = LANG.isValue,
    ISSTRING = LANG.isString;

/**
Provides a case-insenstive comparator which can be used for array sorting.

@class ArraySort
*/

Y.ArraySort = {

    /**
    Comparator function for simple case-insensitive sorting of an array of
    strings.

    @method compare
    @param a {Object} First sort argument.
    @param b {Object} Second sort argument.
    @param desc {Boolean} `true` if sort direction is descending, `false` if
        sort direction is ascending.
    @return {Boolean} -1 when a < b. 0 when a == b. 1 when a > b.
    */
    compare: function(a, b, desc) {
        if(!ISVALUE(a)) {
            if(!ISVALUE(b)) {
                return 0;
            }
            else {
                return 1;
            }
        }
        else if(!ISVALUE(b)) {
            return -1;
        }

        if(ISSTRING(a)) {
            a = a.toLowerCase();
        }
        if(ISSTRING(b)) {
            b = b.toLowerCase();
        }
        if(a < b) {
            return (desc) ? 1 : -1;
        }
        else if (a > b) {
            return (desc) ? -1 : 1;
        }
        else {
            return 0;
        }
    }

};


}, '3.6.0' ,{requires:['yui-base']});