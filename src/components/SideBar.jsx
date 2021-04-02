import { Box } from "@material-ui/core";
import Option from "./Option";
import CategoryIcon from "@material-ui/icons/Category";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PeopleIcon from "@material-ui/icons/People";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import InfoIcon from "@material-ui/icons/Info";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import LanguageIcon from "@material-ui/icons/Language";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import PublicIcon from "@material-ui/icons/Public";

const SideBar = ({ isSidebar, tablename, setTablename, setExecuted, setDataFile }) => {
  const files = [
    { id: 1, title: "Categories", Icon: CategoryIcon, dataFile: "categories.csv" },
    { id: 2, title: "Customers", Icon: PeopleIcon, dataFile: "customers.csv" },
    { id: 3, title: "Emp Territories", Icon: LocationCityIcon, dataFile: "employee-territories.csv" },
    { id: 4, title: "Employees", Icon: EmojiPeopleIcon, dataFile: "employees.csv" },
    { id: 5, title: "ORDERS DETAILS", Icon: InfoIcon, dataFile: "order-details.csv" },
    { id: 6, title: "Orders", Icon: ViewModuleIcon, dataFile: "orders.csv" },
    { id: 7, title: "Products", Icon: DonutLargeIcon, dataFile: "products.csv" },
    { id: 8, title: "Regions", Icon: LanguageIcon, dataFile: "regions.csv" },
    { id: 9, title: "Shippers", Icon: FlightTakeoffIcon, dataFile: "shippers.csv" },
    { id: 10, title: "Suppliers", Icon: LocalShippingIcon, dataFile: "suppliers.csv" },
    { id: 11, title: "Territories", Icon: PublicIcon, dataFile: "territories.csv" },
  ];
  return (
    <Box boxShadow={1}>
      <div className={`sidebar ${isSidebar && "sidebar__enabled"}`}>
        <div className="sidebar__options">
          {files.map((item, index) => {
            return (
              <Option
                title={item.title}
                Icon={item.Icon}
                tablename={tablename}
                setTablename={setTablename}
                setExecuted={setExecuted}
                dataFile={item.dataFile}
                setDataFile={setDataFile}
              />
            );
          })}
        </div>
      </div>
    </Box>
  );
};

export default SideBar;
