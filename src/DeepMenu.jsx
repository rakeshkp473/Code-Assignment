class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            showSubMenu:false,
            hiddenClass:"hidden"
        }
    } 
    toggleMenu (event){
       event.stopPropagation();
       if(this.state.hiddenClass==""){
           this.setState({hiddenClass:"hidden"})
       }else{
            this.setState({hiddenClass:""})
       }
    } 
    getMenuList() { 
        var mainMenuList = new Array();

        this.props.menuList.forEach(function (element) {
            if (Array.isArray(element.subMenu)) {
                mainMenuList.push(
                    <li key={element.id} onClick={this.toggleMenu.bind(this)}  class="list-group-item" >
                        <h3>{element.menuName} </h3>
                        
                        <Menu menuList={element.subMenu} showMenu={this.state.hiddenClass+""}  />
                    </li>
                ) 
            } else { 
                mainMenuList.push(
                    <li key={element.id}   class="list-group-item"  >
                        <h3>{element.menuName} </h3>
                    </li>
                )
            } 
        }, this);
        return mainMenuList
    }

    render() {
        return (
            <ul className={this.props.showMenu+ "  "} > 
                {this.getMenuList()}
            </ul>);
    }
}

var menu = [{ menuName: "Home", id: 1001, subMenu: null }, { menuName: "Labour", id: 1002, subMenu: null }, { menuName: "Inventory", id: 1003, subMenu: [{ menuName: "Sub nav 1", id: 1009, subMenu: null }, { menuName: "Sub nav 2", id: 1010, subMenu: [{ menuName: "Sub nav 2", id: 1011, subMenu: [{ id: 1012, menuName: "Deep Nav 1", sunMenu: null },{ id: 1013, menuName: "Deep Nav 2", sunMenu: null }] }] }] }, { menuName: "Cash", id: 1004, subMenu: null }, { menuName: "Reporting", id: 1005, subMenu: null }, { menuName: "Forecasting", id: 1006, subMenu: null }, { menuName: "Staff", id: 1007, subMenu: null }, { menuName: "Documents", id: 1008, subMenu: null }];
ReactDOM.render(<Menu menuList={menu} showMenu=""  />, document.getElementById("main"));