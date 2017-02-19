angular.module('ui.controllers.table', [])
    .controller('uiTableCtrl', function ($scope, $rootScope, moment, noUiUtils, noUiGetIssuesProvider) {

        $scope.queryDate = new Date();
        $scope.queryPeriod = [];
        $scope.projects = [];
        $scope.tmp_users = [];
        $scope.users = [];
        $scope.issueList = [];
        /*получаем массив дат на запрошенный период*/
        for(var i = 0; i < 7; i++){
           $scope.queryPeriod.push({
               id: i,
               value: moment().hour(0).add(i,'days').format('YYYY-MM-DD')
           });
        }

        // console.log($scope.queryPeriod);

        // noUiGetIssuesProvider.query({date: queryDate}).$promise.then(function (resp) {
        //     console.log(resp);
        // });

        $scope.issues = noUiGetIssuesProvider.getIssues();

        angular.forEach($scope.issues, function (project) {
            $scope.projects.push({
                ident: project.ident,
                title: project.title,
                users: []
            });

            angular.forEach(project.issues, function (issue) {
                var user = {
                    id: issue.user.id,
                    username: issue.user.username,
                    projects: issue.user.projects,
                    issue_ids: issue.user.issue_ids,
                    issues: []
                };

                $scope.tmp_users.push(JSON.stringify(user));

                $scope.issueList.push(issue.user.issue);
                
            });
            
        });

        $scope.tmp_users = $scope.Unique($scope.tmp_users);

        angular.forEach($scope.tmp_users, function(user) {
            $scope.users.push(JSON.parse(user));
        });

        console.log($scope.users);

        angular.forEach($scope.projects, function(project) {
            angular.forEach($scope.users, function(user) {
                angular.forEach(user.projects, function(ident) {
                    if(ident === project.ident) {
                        project.users.push(user);
                    }
                });

                angular.forEach(user.issue_ids, function(id) {
                    angular.forEach($scope.issueList, function(issue) {
                        if(issue.project === project.ident && id === issue.id) {
                            issue.print = issue.id
                            user.issues.push(issue);
                        }
                    });
                });
            });
        });

        console.log($scope.projects);


//  angular.forEach($scope.queryPeriod, function(date) {
//     if(date.value === issue.due_date) {
//         issue.print = issue.id
//         user.issues.push(issue);
//     } else {
//         user.issues.push({
//             print: "--",
//             due_date: date.value,
//             id: (Math.random()*1000)
//         });
//     }
// });


    });