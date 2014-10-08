YUI.add('aui-layout-row-tests', function(Y) {

    var Assert = Y.Assert,
        col,
        suite = new Y.Test.Suite('aui-layout-row');

    suite.add(new Y.Test.Case({
        name: 'Layout Row Tests',

        setUp: function() {
            col = new Y.LayoutCol({
                size: 4,
                value: {content: 'foo'}
            });

            this.layoutRow = new Y.LayoutRow({
                cols: [
                    col,
                    new Y.LayoutCol({
                        size: 3,
                        value: { content: 'foo' }
                    }),
                    new Y.LayoutCol({
                        size: 5,
                        value: { content: 'foo' }
                    })
                ]
            });
        },

        tearDown: function() {
            this.layoutRow.destroy();
        },

        'should have class row after renders': function() {
            var row = this.layoutRow.get('node');

            Assert.isTrue(row.hasClass('row'));
        },

        'should have 3 children after renders': function() {
            var row = this.layoutRow.get('node'),
                childNumber = row.get('children').size();

            Assert.areEqual(3, childNumber);
        },

        'should update cols when they change': function() {
            this.layoutRow.set('cols', [
                new Y.LayoutCol({
                    size: 6
                }),
                new Y.LayoutCol({
                    size: 6
                })
            ]);

            Assert.areEqual(2, this.layoutRow.get('node').get('children').size());
        },

        'should calculate it\'s size based on col\'s size': function() {
            var rowSize = this.layoutRow._getSize(this.layoutRow.get('cols'));

            Assert.areEqual(12, rowSize);
        },

        'should add a col to the bottom by default': function() {
            var childNumber,
                firstCol,
                row = this.layoutRow;

            childNumber = row.get('cols').length;
            Assert.areEqual(3, childNumber);

            firstCol = row.get('cols')[0];
            row.addCol();
            childNumber = row.get('cols').length;

            Assert.areEqual(4, childNumber);
            Assert.areSame(firstCol, row.get('cols')[0]);
        },

        'should add a col at specific position': function() {
            var childNumber,
                firstCol,
                row = this.layoutRow;

            childNumber = row.get('cols').length;
            Assert.areEqual(3, childNumber);

            firstCol = row.get('cols')[0];
            row.addCol(0);
            childNumber = row.get('cols').length;

            Assert.areEqual(4, childNumber);
            Assert.areNotSame(firstCol, row.get('cols')[0]);
        },

        'should add a col passing a reference': function() {
            var childNumber,
                row = this.layoutRow;

            childNumber = row.get('cols').length;
            Assert.areEqual(3, childNumber);

            row.addCol(0, col);
            childNumber = row.get('cols').length;

            Assert.areEqual(4, childNumber);
        },

        'should not add col if max is reached': function() {
            this.layoutRow.addCol();
            this.layoutRow.addCol();

            Assert.areEqual(4, this.layoutRow.get('cols').length);
        },

        'should remove a col by index': function() {
            var childNumber,
                row = this.layoutRow;

            childNumber = row.get('cols').length;
            Assert.areEqual(3, childNumber);

            row.removeCol(0);
            childNumber = row.get('cols').length;

            Assert.areEqual(2, childNumber);
        },

        'should remove a col by reference': function() {
            var childNumber,
                row = this.layoutRow;

            childNumber = row.get('cols').length;
            Assert.areEqual(3, childNumber);

            row.removeCol(col);
            childNumber = row.get('cols').length;

            Assert.areEqual(2, childNumber);
        },

        'should not remove a col that is not in a row': function() {
            var childNumber,
                col = new Y.LayoutCol({
                        size: 2,
                        value: {content: 'foo'}
                    }),
                row = this.layoutRow;

            childNumber = row.get('cols').length;
            Assert.areEqual(3, childNumber);

            row.removeCol(col);
            childNumber = row.get('cols').length;

            Assert.areEqual(3, childNumber);
        },

        'should not remove a col if nor an index nor a valid col is passed': function() {
            var childNumber,
                row = this.layoutRow;

            childNumber = row.get('cols').length;
            Assert.areEqual(3, childNumber);

            row.removeCol();
            childNumber = row.get('cols').length;

            Assert.areEqual(3, childNumber);
        },

        'should be possible to create a row without passing a col': function() {
            var row = new Y.LayoutRow();

            Assert.isNotNull(row);
        },

        'should set cols even if them doesn\'t sum up 12 of size': function() {
            var row = new Y.LayoutRow();
            row.set('cols', [new Y.LayoutCol({ size: 4 })]);

            Assert.areEqual(12, row._getSize(row.get('cols')));
        },

        'should not allow set cols if cols sum up more than 12 of size': function() {
            var row = new Y.LayoutRow();
            row.set('cols', [new Y.LayoutCol({ size: 12 }), new Y.LayoutCol({ size: 12 })]);

            Assert.areEqual(12, row._getSize(row.get('cols')));
        }
    }));

    Y.Test.Runner.add(suite);

}, '', {
    requires: ['test', 'array-invoke', 'aui-layout-row', 'aui-layout-col']
});