(function() {
    angular.module('calendarApp', ['ngGrid', 'ui.calendar', 'ui.bootstrap'])
        .controller('calendarCtrl', function($scope, $http, $filter) {
            $scope.selectedGridItems = [];

            $scope.getData = function() {
                $http.get('/json-datas/listData.json').then(function(response) {
                    $scope.test = response.data;
                    $("div#calendar").fullCalendar('gotoDate', moment($scope.test[0].date).format('YYYY'), moment($scope.test[0].date).format('MM') - 1);
                    $scope.getDropDown();
                    return $scope.test;
                });
            };

            $scope.getDropDown = function() {
                $http.get('/json-datas/dropdownData.json').then(function(response) {
                    $scope.testDataList = response.data.dropdownData;
                    $scope.testDataListColor = response.data.dropdownDataColor;

                    _.each($scope.test, function(item) {
                        $scope.colorAssign(item);
                    });

                    return $scope.testDataList;
                });
            };


            $scope.colorAssign = function(item) {
                $("div#calendar").find("tr[class*='fc-week']").find("td[data-date='" + moment(item.date).format('YYYY-MM-DD') + "']").removeClass('row-selected-blue-green row-selected-blue row-selected-green').addClass($filter("filter")($scope.testDataListColor, {
                    'dropdownDataShortName': item.testData1
                })[0].color);
            };
            
            $scope.dropChangeEvent=function(row)
            {
               $scope.colorAssign(row.entity);
            };

            //function Calling
            $scope.getData();

            $scope.ngGridOptions = {
                data: 'test',
                multiSelect: false,
                columnDefs: [{
                    field: "id",
                    displayName: "ID"
                }, {
                    field: "date",
                    displayName: "Date",
                    cellTemplate: "<div class='ngCellText'><span>{{COL_FIELD | date:'dd MMM yyyy'}}</span></div>"
                }, {
                    field: "details",
                    displayName: "Details",
                    cellTemplate: "<div class='ngCellText'><span>{{COL_FIELD}}</span></div>"
                }, {
                    enableCellEdit: true,
                    field: "testData1",
                    displayName: "Test Data",
                    cellTemplate: "<div class='ngCellText'><span>{{ (testDataList | filter:{'shortName':COL_FIELD})[0].name}}</span></div>",
                    editableCellTemplate: "<div class='ngCellText'><select ng-input='COL_FIELD' ng-model='COL_FIELD' ng-options='item.shortName as item.name for item in testDataList' ng-change='dropChangeEvent(row)'></select></div>"
                }, {
                    field: "check",
                    displayName: "",
                    cellTemplate: "<div class='ngCellText'><input type='checkbox' ng-checked='COL_FIELD' ng-model='COL_FIELD' ng-change='selectChange(row,COL_FIELD)' /></div>"
                }, {
                    field: "check1",
                    displayName: "",
                    cellTemplate: "<div class='ngCellText'><input type='checkbox' ng-checked='COL_FIELD' ng-model='COL_FIELD' ng-change='selectChange1(row,COL_FIELD)' /></div>"
                }]
            };
            /* ----------------Calendar Control----------------- */
            $scope.alertOnEventClick = function(event, allDay, jsEvent) {};

            $scope.dayClick = function(date, allDay, jsEvent, view) {
                $scope.rowScroll(_.find($scope.ngGridOptions.ngGrid.data, function(item) {
                    return moment(item.date).format('MMMDDYYYY') == moment(date).format('MMMDDYYYY');
                }));
            };

            $scope.events = [];
            $scope.eventSources = [$scope.events];

            $scope.uiConfig = {
                calendar: {
                    height: 250,
                    editable: false,
                    disableDragging: false,
                    header: {
                        left: 'title',
                        center: '',
                        right: 'today prev,next'
                    },
                    eventClick: $scope.alertOnEventClick,
                    dayClick: $scope.dayClick
                }
            };

            /* ---------------------- ends ---------------------- */

            $scope.selectChange = function(row, value) {
                var className = (value) ? ((row.entity.check1) ? "row-selected-blue-green" : "row-selected-blue") : ((row.entity.check1) ? "row-selected-green" : "");
                if (typeof(_.find($scope.events, function(item) {
                    return item.id == moment(row.entity.date).format('MMMDDYYYY');
                })) == 'undefined') {
                    $scope.events.push({
                        id: moment(row.entity.date).format('MMMDDYYYY'),
                        title: moment(row.entity.date).format('MMM DDYYYY'),
                        start: moment(row.entity.date),
                        className: [className]
                    });
                }
                else {
                    _.find($scope.events, function(item) {
                        return item.id == moment(row.entity.date).format('MMMDDYYYY');
                    }).className = [className];
                }
                var elem = row.elm;
                if (row.entity.check || row.entity.check1) {
                    $(elem).addClass('row-color');
                }
                else if (!row.entity.check && !row.entity.check1) {
                    var item = _.find($scope.events, function(item) {
                        return item.id == moment(row.entity.date).format('MMMDDYYYY');
                    });
                    $("div#calendar").fullCalendar('removeEvents', item.id);
                    $scope.events.splice(($scope.events.indexOf(item)), 1);
                    $(elem).removeClass('row-color');
                }
            };

            $scope.selectChange1 = function(row, value) {
                var className = (value) ? ((row.entity.check) ? "row-selected-blue-green" : "row-selected-green") : ((row.entity.check) ? "row-selected-blue" : "");
                if (typeof(_.find($scope.events, function(item) {
                    return item.id == moment(row.entity.date).format('MMMDDYYYY');
                })) == 'undefined') {
                    $scope.events.push({
                        id: moment(row.entity.date).format('MMMDDYYYY'),
                        title: moment(row.entity.date).format('MMM DDYYYY'),
                        start: moment(row.entity.date),
                        className: [className]
                    });
                }
                else {
                    _.find($scope.events, function(item) {
                        return item.id == moment(row.entity.date).format('MMMDDYYYY');
                    }).className = [className];
                }
                var elem = row.elm;
                if (row.entity.check || row.entity.check1) {
                    $(elem).addClass('row-color');
                }
                else if (!row.entity.check && !row.entity.check1) {
                    var item = _.find($scope.events, function(item) {
                        return item.id == moment(row.entity.date).format('MMMDDYYYY');
                    });
                    $("div#calendar").fullCalendar('removeEvents', item.id);
                    $scope.events.splice(($scope.events.indexOf(item)), 1);
                    $(elem).removeClass('row-color');
                }
            };


            $scope.rowScroll = function(item) {
                //$(item.elm).fadeTo(500, 0.5).fadeTo(700, 1.0);
                var grid = $scope.ngGridOptions.ngGrid;
                var dataIndex = $scope.ngGridOptions.ngGrid.data.indexOf(item);
                $scope.ngGridOptions.selectItem(dataIndex, true);
                grid.$viewport.scrollTop(dataIndex * grid.config.rowHeight);
            };
        });
})();