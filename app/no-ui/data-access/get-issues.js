angular.module('noUi.dataAccess.getIssues', [])
    .factory('noUiGetIssuesProvider', function ($resource) {

        var data = [
        {
            "title": "Banking",
            "issues": [
            {
                "user": {
                "id": 86,
                "issue": {
                    "assigned_to": 86,
                    "due_date": "2017-03-03",
                    "id": 19721,
                    "subject": "RSUDB00190256. Доработка ЭФ Информация по клиенту"
                },
                "username": "Valery Zudin"
                }
            },
            {
                "user": {
                "id": 86,
                "issue": {
                    "assigned_to": 86,
                    "due_date": "2017-01-25",
                    "id": 19117,
                    "subject": "RSUDB00189071. Установка и изменение времени поствызывной обработки"
                },
                "username": "Valery Zudin"
                }
            }
            ]
        },
        {
            "title": "Blackjack",
            "issues": [
            {
                "user": {
                "id": 183,
                "issue": {
                    "assigned_to": 183,
                    "due_date": "2017-01-27",
                    "id": 19431,
                    "subject": "Создать диаграмму ганта сводную по проектам"
                },
                "username": "Artem Afonin"
                }
            }
            ]
        }
        ];

        function _getIssues() {
            return data;
        }

        return {
            getIssues: _getIssues
        };
        // var url = 'url?date';
        // var params = {
        //     date: 'date'
        // };

        // return $resource(url, params, {
        //     query: {
        //         method: 'GET',
        //         cache: false,
        //         isArray: false,
        //         transformResponse: function (data) {
        //             data = JSON.parse(data);
        //            // console.log(data.data);
        //             return data;
        //         }
        //     }
        // });

    });