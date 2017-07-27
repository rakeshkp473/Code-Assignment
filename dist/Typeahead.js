"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.state = {
            showSubMenu: false,
            hiddenClass: "hidden"
        };
        return _this;
    }

    _createClass(Menu, [{
        key: "toggleMenu",
        value: function toggleMenu(event) {
            event.stopPropagation();
            if (this.state.hiddenClass == "") {
                this.setState({ hiddenClass: "hidden" });
            } else {
                this.setState({ hiddenClass: "" });
            }
        }
    }, {
        key: "getMenuList",
        value: function getMenuList() {
            var mainMenuList = new Array();

            this.props.menuList.forEach(function (element) {
                if (Array.isArray(element.subMenu)) {
                    mainMenuList.push(React.createElement("li", { key: element.id, onClick: this.toggleMenu.bind(this), class: "list-group-item" }, React.createElement("h3", null, element.menuName, " "), React.createElement(Menu, { menuList: element.subMenu, showMenu: this.state.hiddenClass + "" })));
                } else {
                    mainMenuList.push(React.createElement("li", { key: element.id, class: "list-group-item" }, React.createElement("h3", null, element.menuName, " ")));
                }
            }, this);
            return mainMenuList;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("ul", { className: this.props.showMenu + "  " }, this.getMenuList());
        }
    }]);

    return Menu;
}(React.Component);

var menu = [{ menuName: "Home", id: 1001, subMenu: null }, { menuName: "Labour", id: 1002, subMenu: null }, { menuName: "Inventory", id: 1003, subMenu: [{ menuName: "Sub nav 1", id: 1009, subMenu: null }, { menuName: "Sub nav 2", id: 1010, subMenu: [{ menuName: "Sub nav 2", id: 1011, subMenu: [{ id: 1012, menuName: "Deep Nav 1", sunMenu: null }, { id: 1013, menuName: "Deep Nav 2", sunMenu: null }] }] }] }, { menuName: "Cash", id: 1004, subMenu: null }, { menuName: "Reporting", id: 1005, subMenu: null }, { menuName: "Forecasting", id: 1006, subMenu: null }, { menuName: "Staff", id: 1007, subMenu: null }, { menuName: "Documents", id: 1008, subMenu: null }];
ReactDOM.render(React.createElement(Menu, { menuList: menu, showMenu: "" }), document.getElementById("main"));