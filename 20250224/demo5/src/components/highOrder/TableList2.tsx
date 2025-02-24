import withProductSearch from "../../hoc/withProductSearch";
import TableList from "./TableList";

const TableList2 = withProductSearch(TableList,'queso');

export default TableList2

