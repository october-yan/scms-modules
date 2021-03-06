/**
 * <directive>
 * @description 信息提示
 * @date 2016-12-01
 * @author 田艳容
 * @lastBy 
 * @html <div error-no-data-directive data-content="暂无待审核的数据" show-by="showBy"></div>
 */
define([
    'angular'
], function(
    angular
    ) {
    return function(app, elem, attrs, scope) {
        app.directive('errorNoDataDirective', ['$document', '$timeout',
            function($document, $timeout) {
            return {
                template: "<div class='error-no-data' ng-show='isShow'><span ng-bind='content'></span></div>",
                replace:true,
                restrict: 'EA',
                scope: {
                    showBy:'='    //@scope showBy 判读是否显示的关键字段 {type: "boolean", "exampleValue": true}
                },
                link: function($scope,$element,$attrs) {
                    //@attrs content 提示内容 {type: "string", defaultValue: "暂无数据"}
                    $scope.isShow = false;
                    $scope.content = $attrs.content || '暂无数据';
                    var getIsShow = function() {
                        $scope.isShow = $scope.showBy;
                    };

                    var timeoutValue;
                    $scope.$watchCollection('showBy', function(newValue, o) {
                        getIsShow();                       
                    })
                    
                },

                controller: function($scope,$element,$attrs,$transclude,$log,$http,G){
                }
            };
        }]);
    };
});