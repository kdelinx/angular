angular.module('noUi.dataAccess.getIssues', [])
    .factory('noUiGetIssuesProvider', function ($resource) {

        var data = [
  {
    "title": "Banking",
    "ident": "banking",
    "issues": [
      {
        "user": {
          "id": 86,
          "projects": ["banking"],
          "issue_ids": [19721,19117],
          "issue": {
            "project": "banking",
            "due_date": "2017-02-23",
            "id": 19721,
            "subject": "RSUDB00190256. Доработка ЭФ Информация по клиенту"
          },
          "username": "Valery Zudin"
        }
      },
      {
        "user": {
          "id": 86,
          "projects": ["banking"],
          "issue_ids": [19721,19117],
          "issue": {
            "project": "banking",
            "due_date": "2017-02-22",
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
    "ident": "blackjack",
    "issues": [
      {
        "user": {
          "id": 183,
          "projects": ["blackjack"],
          "issue_ids": [19431],
          "issue": {
            "project": "blackjack",
            "due_date": "2017-02-20",
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