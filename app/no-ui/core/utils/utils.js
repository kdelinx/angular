angular.module('noUi.core.utils', [])
    .factory('noUiUtils', function ($window, $mdToast) {

        /**
         *
         * @param type
         * @param message
         * @private
         */
        function _showToastMessage(type, message) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent(message)
                    .position('top right')
                    .hideDelay(5000)
                    .toastClass(type)
            );
        }

        /**
         * Check if user is authenticated
         * @returns {boolean}
         * @private
         */
        function _isAuthenticated() {
            var token = $window.localStorage.getItem('user_token');
            return !!token;
        }

        /**
         * Check if the object is in array
         * @param arr
         * @param obj
         * @param property
         * @returns {boolean}
         * @private
         */
        function _isObjectInArray(arr, obj, property) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i][property] === obj[property]) {
                    return true;
                }
            }
            return false;
        }

        /**
         * Return some word in the string
         * @param str
         * @param num
         * @returns {*}
         * @private
         */
        function _someWord(str, num) {
            var words = str.split(' ');
            return words[num - 1];
        }

        /**
         * Is email address valid
         * @param email
         * @returns {boolean}
         * @private
         */
        function _isValidEmail(email) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            return pattern.test(email);
        }

        /**
         * Return array with unique elements
         * @param array
         * @returns {Array}
         * @private
         */
        function _Unique(array) {
            var n = array.length, k = 0, B = [];
            for (var i = 0; i < n; i++) {
                var j = 0;
                while (j < k && B[j] !== array[i]) {
                    j++;
                }
                if (j === k) {
                    B[k++] = array[i];
                }
            }
            return B;
        }

        /**
         * Replace tags and trim text
         * @param elem
         * @param size
         * @returns {*}
         * @private
         */
        function _niceText(elem, size) {
            elem = elem.replace(/<[^>]+>/g, '');
            elem = elem.replace(/(\.)([A-ZА-Я])/g, '$1 $2');
            if (elem.length > size) {
                elem = elem.slice(0, size) + '...';
            }
            return elem;
        }

        /**
         *
         * @param _number
         * @param _decimal
         * @param _separator
         * @returns {Number}
         * @private
         */
        function _addDecimalAndSeparator(_number, _decimal, _separator) {
            var decimal = (typeof(_decimal) !== 'undefined') ? _decimal : 2;
            var separator = (typeof(_separator) !== 'undefined') ? _separator : '';
            var r = parseFloat(_number);
            var exp10 = Math.pow(10, decimal);
            r = Math.round(r * exp10) / exp10;
            var rr = Number(r).toFixed(decimal).toString().split('.');
            var b = rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "\$1" + separator);
            r = (rr[1] ? b + '.' + rr[1] : b);

            return r;
        }

        /*date to 1970-01-01*/
        function _formattedDateForServer(date, separate) {
            date = date.split(separate);
            var month;
            var day;
            date = new Date(date[2], +date[1] - 1, +date[0], 0, 0, 0, 0);
            if ((date.getMonth() + 1) < 10) {
                month = '0' + (date.getMonth() + 1);
            } else {
                month = date.getMonth() + 1;
            }

            if (date.getDate() < 10) {
                day = '0' + date.getDate();
            } else {
                day = date.getDate();
            }
            date = [date.getFullYear(), month, day];
            date = date.join('-').replace(/(^|\/)(\d)(?=\/)/g, "$10$2");
            return date;
        }

        function _getExpirationDate(date, day, separate) {
            date = date.split(separate);
            var month;
            date = new Date(date[2], +date[1] - 1, +date[0] + day, 0, 0, 0, 0);
            if ((date.getMonth() + 1) < 10) {
                month = '0' + (date.getMonth() + 1);
            }
            date = [date.getDate(), month, date.getFullYear()];
            date = date.join(separate).replace(/(^|\/)(\d)(?=\/)/g, "$10$2");
            return date;
        }

        return {
            isAuthenticated: _isAuthenticated,
            showToastMessage: _showToastMessage,
            isObjectInArray: _isObjectInArray,
            someWord: _someWord,
            isValidEmail: _isValidEmail,
            Unique: _Unique,
            niceText: _niceText,
            addDecimalAndSeparator: _addDecimalAndSeparator,
            formattedDateForServer: _formattedDateForServer,
            getExpirationDate: _getExpirationDate
        };

    });